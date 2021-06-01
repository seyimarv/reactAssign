
import './App.css';
import Userlist from './components/Users/UserLists';
import { connect } from 'react-redux';
import {getUsers} from './reduxx/action'
import chance from 'chance';
import { useEffect } from 'react';
import AddUser from './components/add-user/AddUser';

const App = ({setUsers, users}) => {
  
  const Chance = new chance()
  const fetchedUsers = JSON.parse(localStorage.getItem('users'))
  const getUniqueNames = () => {
    const Names = Chance.unique(Chance.name, 1000)
    if (Names) {
      localStorage.setItem('users', JSON.stringify(Names))
    }
    return Names
  }
  const deleteUser = (usertodelete) => {
      const newUsers = fetchedUsers.filter(user => user !== usertodelete)  
      localStorage.setItem('users', JSON.stringify(newUsers))
      setUsers(newUsers)
  }
  
  useEffect(() => {
 
      if (!fetchedUsers) {
       const Names = getUniqueNames()
       setUsers(Names)
      } else {
        setUsers(fetchedUsers)
      }
  }, [])
  console.log(users)

  return (
    <div className="App">
      <AddUser deleteUser={deleteUser} fetchedUsers={fetchedUsers}/>
     <div className="all__users">

   
       {
         users.currentUsers.map((user) => 
           <Userlist user={user} deleteUser={deleteUser}/>
         )
       }
       </div>
    </div>
  );
}





const mapStateToProps = state => ({
  users: state
})

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(getUsers(users)),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App)
