import { useState } from 'react'
import { FaRegSmileWink } from "react-icons/fa";
import './index.scss'
import Input from './Input';


function App() {
  
  const[data,setData]=useState({title:"",email:"",message:""});
  const[submitted,setSubmitted]=useState(false)

  console.log(data);
  function handleonChange(event) {
    setData({
      ...data,[event.target.name]:event.target.value
      

    });
   
  }
  
  function onSubmit(event) {
    event.preventDefault();
    if (!data.title || !data.email || !data.message ) {
      return alert("Please fill out all fields.");

    }if (!data.Email.includes("@")) {
      return alert("Please enter a valid email address.");
    }
    setSubmitted(true)
  }

  return (
    <main className='main'>
      {!submitted ?
        <>
          <h1 className='main__headline'>Feedback form</h1> 
          <form onSubmit={onSubmit}>
            <Input type={"text"} name={"Title"} value={data.title} onChange={handleonChange}/>
            <Input type={"text"} name={"Email"} value={data.email} onChange={handleonChange}/>
            <Input type={"text"} name={"Message"} value={data.message} onChange={handleonChange}/>
            <button className='main__button--submit'>Submit</button>
          </form>
        </> 
        : 
        <>
          <h1 className='main__headline'>Feedback form</h1>
          <p className='main__text'><FaRegSmileWink className='main__text--icon'/>Thank you for your Feedback</p>
        </>
      } 
    </main>
  )
}

export default App;