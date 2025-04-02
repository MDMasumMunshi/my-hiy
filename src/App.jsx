
import './App.css'
import Batsman from './batsman';
import Counter from './counter';

function App() {
 
function handleClick (){
  alert('I am clicked')
}
const handleClick3 = () => {
  alert('third btn clicked')
}

function handleClick4 (num){
  const newnum = num +30;
  alert(newnum)
}

  return (
    <>
      
      <h1>Vite + React</h1>
      <Counter></Counter>
     {/* <button onclick =" handleClick()"> Click Me </button> */}
     <button onClick={handleClick}> Click Me </button>
     <button onClick={handleClick3}> Click Me </button>
     <button onClick={ function handleClick2 (){
      alert("clicked 2")
     }}> Click Me </button>

     <button onClick={() => handleClick4(20)}> Click Me 4</button>
     {/* When we send a parameter to a function , then we should raped it with an arrow function */}
     
     <Batsman></Batsman>
    </>
  )
}

export default App
