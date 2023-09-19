import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Friends from './friends';
import Users from './Users';
function App() {
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2= ()=>{
    alert('button 2 clicked');
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      
      <h3>React Core concepts</h3>
      <Users></Users>
      <Friends> </Friends>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={()=> addToFive(3)}>click3</button>
    </>
  )
}

export default App
