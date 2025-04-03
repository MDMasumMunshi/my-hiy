
import { Suspense } from 'react';
import './App.css'
import Batsman from './batsman';
import Counter from './counter';
import Users from './users';
import Friends from './friends';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
// fetch user done 

const fetchFriends = async () => {
const res = await fetch("https://jsonplaceholder.typicode.com/users")
return res.json()
}


function App() {
  const friendPromise = fetchFriends() 
 
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

    <Suspense fallback={<h3> Loading...</h3>}>
      <Users fetchUsers ={fetchUsers}></Users>
    </Suspense>

    {/* fetch friends */}
    
<Suspense fallback={<h3>Friends are coming for treat</h3>}>
  <Friends friendPromise ={friendPromise}>

  </Friends>
</Suspense>

    </>
  )
}

export default App
