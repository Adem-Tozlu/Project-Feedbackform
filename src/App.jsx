import { useState } from 'react'
import './App.css'
import Input from './Input';


function App() {
  const[data,setData]=useState({title:"",email:"",message:""});
  const[submitted,setSubmitted]=useState(false)

  function handleonChange(event) {
    setData({
      ...data,[event.target.name]:event.target.value

    });
    
  }
  
  function onSubmit(event) {
    event.preventDefault();
    if (!data.title || !data.email || !data.message) {
      alert("Please fill out all fields.");
      return;
    }
    setSubmitted(true)
  }

  return (
    <main>
      {!submitted ?
        <>
          <h1>Feedback form</h1> 
          <form onSubmit={onSubmit}>
            <Input type={"text"} name={"title"} value={data.title} onChange={handleonChange}/>
            <Input type={"text"} name={"email"} value={data.email} onChange={handleonChange}/>
            <Input type={"textarea"} name={"message"} value={data.message} onChange={handleonChange}/>
            <button>Submit</button>
          </form>
        </> 
        : 
        <>
          <h1>Feedback form</h1>
          <p>Thank you for your Feedback</p>
        </>
      } 
    </main>
  )
}

export default App;