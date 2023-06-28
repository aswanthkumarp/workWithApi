import { Card,Table } from "react-bootstrap";
import React from 'react'
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

export default function ViewUser() {
    const {userId}=useParams()
    const [user,setUser ]= useState(undefined);
    const fetchUser = async ()=>{
        const response = await axios.get("http://localhost:8000/users/"+userId);
        setUser(response.data);

    }
    useEffect(()=> {fetchUser()},[userId]);
    if(user === undefined)
   return <div>LOADING</div>
 else return <Card>
<Table>
<tbody>
<tr>
 <td>ID</td>
 <td>{userId}</td>   
</tr>
<tr>
 <td>Name</td>
 <td>{user.name}</td>   
</tr>
<tr>
 <td>Email</td>
 <td>{user.email}</td>   
</tr>
<tr>
 <td>Age</td>
 <td>{user.age}</td>   
</tr>
<tr>
 <td>Premium Member</td>
 <td>{user.premiumMember? "yes":"no"}</td>   
</tr>


</tbody>




</Table>





  </Card>
 
  
}

