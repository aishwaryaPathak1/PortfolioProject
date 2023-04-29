import './formStyles.css';

import React,{useState} from 'react'

const Form = () => {
  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject:"",
      message:""
    })
    // const[name,setName]=useState("");
    // const[email,setEmail]=useState("");
    // const[subject,setSubject]=useState("");
    // const[message,setMessage]=useState("");
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formData)
    }
  return (
    <div className='form' onSubmit={handleSubmit}>
      <form action="">
        <label htmlFor="">Your name</label>
        <input type="text" name="" id="" value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} />
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
        <label htmlFor="">Subject</label>
        <input type="text" value={formData.subject} onChange={(e)=>setFormData({...formData,subject:e.target.value})}/>
        <label htmlFor="">Message</label>
        <textarea name="" id="" cols="30" rows="6" placeholder='Type your message here' value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})}></textarea>
        <button type='submit' className='btn'>Submit</button>
      </form>
      <p></p>
    </div>
  )
}

export default Form
