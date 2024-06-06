import './App.css'
import Users from './components/Users/Users';
import UserForm from './components/UserForm/UserForm';
import {useState} from 'react';
import {User} from './types';

function App() {
    const initialState:User[]=[
        {name:'Sergey',email:'serjak-@mail.ru',isActive:true,role:'admin'},
        {name:'John',email:'JohnDoe@gmail.com',isActive:false,role:'user'},
        {name:'Jimmi',email:'James.Hill@gmail.com',isActive:true,role:'editor'},
    ]
    const [users,setUsers]=useState<User[]>(initialState);

  return (
      <div>
          <main className="container-fluid">
              <div className="row mt-2">
                  <div className="col-6">
                      <UserForm/>
                  </div>
                  <div className="col-6">
                      <Users users={users}/>
                  </div>
              </div>
          </main>
      </div>
  )
}

export default App
