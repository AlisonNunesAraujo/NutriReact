import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [lista, setLista] = useState([])

  useEffect(()=>{
    
    function loadApi(){
      let url = " https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
      .then((r)=> r.json())
      .then((json)=>{
        console.log(json)
        setLista(json)
      })

    }

loadApi();

  },[])

  return (
    <div className='conteiner'>
     <div className='header'>
      <h1 className='tituloHeader'>Nutrição</h1>
     </div>


    {lista.map((item)=>{
      return(
        <div key={item.id} className='group'>
          <h1 className='titulo'>{item.titulo}</h1>
          <img className='img' src={item.capa}/>
          <h3 className='subtitulo'>{item.subtitulo}</h3>
          <p className='categoria'>{item.categoria}</p>
          <button className='bnt'>
           Ver Mais
          </button>

        </div>
      )
    })}

    </div>
  )
}

export default App
