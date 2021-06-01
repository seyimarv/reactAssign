import React from 'react'
import './users.css'




const Userlist = ({user, deleteUser}) => {
   
    return (
        <div className="each__user">
        <p>
        {user}
        </p>  
         <p onClick={() => {
            deleteUser(user)
        }} className="delete__user">
               Delete
           </p>
        </div>
    )
}



export default Userlist