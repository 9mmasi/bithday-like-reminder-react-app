
import React,{useState} from 'react'
import data from "./data"

import './App.css'
import List from './List'

function App() {
  const[people,setPeople]=useState(data)
  

  return (
    <main>
      <section className='container'>
   
        <h1>{people.length} Birthday Today</h1>
        <List people={people} />
        <button onClick={()=>setPeople([])}>Clear List</button>
      </section>
      
    </main>
  )
}

export default App
