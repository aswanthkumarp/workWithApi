import React from 'react'
import { Card,Form,Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function AddUser() {
    const navigate = useNavigate();
    const [name,setName]=useState(""); 
    const [email,setEmail]=useState(""); 
    const [age,setAge]=useState(""); 
    const [premiumMember,setPremiumMember]=useState(false); 
   const SubmitUser= async (event)=>{
    (event).preventDefault();
    const response=await axios.post(
        " http://localhost:8000/users",
     
         {
             name:name,
             email:email,
             age:parseInt(age),
             premiumMember:premiumMember
     
         }
        );
      const id = response.data.id;
      navigate("/users/"+id);
   
   }
   
  return  <Card className='p-4'>
   
        <Form onSubmit={SubmitUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" required placeholder="Enter Name" value={name} onChange={(event)=>setName(event.target.value)}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" required  placeholder="Enter email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="Age" required  placeholder="Enter Age" value={age} onChange={(event)=>setAge(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Premium User" checked={premiumMember} onChange={()=>setPremiumMember(!premiumMember)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
  
}

