import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// function App(){
//   return(
//   <Hello title="NoteBook" price="100rs"  description="Spiral Exercise NoteBook" />
//   )
// }

// function Hello(props){
//   return(
//     <>
//     <h1>{props.title}</h1>
//     <p>Price: {props.price}</p>
//     <p>{props.description}</p>
//     </>
//   );
// } 


// function App(){
//   return(
//     <Hello name="jaya" />
//   )
// }

// function Hello(props){
//   return(
//     <>
//     <h1>Hello, {props.name}</h1>
//     </>
//   )
// }

// function App(){
//   return(
//     <Click text="Hello"/>

//   )
// }

// function Click(props){
//   return(
//   <button onClick={()=> alert(props.text)}>click</button>
//   )
// }

// function App(){
//   return (
//     <UserCard user= {{
//          name:"jaya",
//          age:20,
//          email:"jaya@123.com"
//     }
//     } />
//   )
// }

// function UserCard(hello){
//   return(
//     <h1>Name: {hello.user.name}</h1>
//   )

// }


// function App(){
//   return(
//   <Container children="250" teacher="10" />
//   )
// }

// function Container(school){
//   return(
//     <>
//     <h1>Children: {school.children}</h1>
//     <h1>Teacher: {school.teacher}</h1>
//     </>
//   )
// }


function App(){
  
  return (
    <>
    <h1>TO DO LIST</h1>
    <label>Enter Work:</label>
    <input type="text" placeholder='Enter your work...'/> 
    <button>Add</button>
    </>

  )

}



export default App

