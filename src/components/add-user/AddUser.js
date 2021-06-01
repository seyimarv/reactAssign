import React, {useState} from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../../reduxx/action';
import './AddUser.css'


const AddUser = ({users, setUsers, fetchedUsers}) => {
    const [userName, setUserName] = useState("");
    const [error, setError] = useState(null)

  const onChangeHandler = event => {
    const { value } = event.currentTarget;
    setUserName(value)
  };


  const UserExists = users.find(user => user === userName)

  const deleteIfUserExists = () => {
    const newUsers = fetchedUsers.filter(user => user !== UserExists)  
    localStorage.setItem('users', JSON.stringify(newUsers))
    setUsers(newUsers)
    return newUsers 
  }
 
  const addUser = () => {
    if (userName.length < 4) {
        setError("user has to be up to 4 characters")
        console.log(error)
       
    } else {
      const Users = deleteIfUserExists()
      const newUsers = [userName,...Users]
      setUsers(newUsers)
      localStorage.setItem('users', JSON.stringify(newUsers))
      setUsers(JSON.parse(localStorage.getItem('users')))
      setUserName("")
      setError(null)

    }
  }
  const handleSubmit = (event) => {
      event.preventDefault()
      addUser()
  
  }

    return (
        <div className="add__user">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="userName" value={userName} onChange={onChangeHandler} placeholder="Add a user"/>
                <button type="submit">
                    Add user
                </button>
            </form>
            <p className="error_message">
            {error}
            </p>
           
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.currentUsers
  })

const mapDispatchToProps = dispatch => ({
    setUsers: users => dispatch(getUsers(users)),
  }); 
  
  


export default connect(mapStateToProps, mapDispatchToProps)(AddUser)