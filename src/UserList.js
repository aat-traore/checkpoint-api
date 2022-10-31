import {useEffect, useState} from 'react';
import axios from 'axios';


const UserList=()=>{
    const [user, setUser] = useState([]);
    const fetch =()=> { 
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const data = response.data;
            setUser(data);


        });
       }
     useEffect(()=>  
         fetch(),[]
        );
    
    return(
        <>
        <table>
        {user.map((e ,index)=>(
           <tr key={index}> 
           <th>Id</th>
           <td > {e.id}</td>
           <th>Name</th>
           <td > {e.name}</td>
           <th>UserName</th>
            <td > {e.username}</td>
           <th>Email</th>
            <td >{e.email}</td>
            <th>Phone</th>
             <td> {e.phone}</td>
             <th>website</th>
             <td >{e.website}</td>
            </tr>
))}
</table>
        
        </>
    )
}
export default UserList;