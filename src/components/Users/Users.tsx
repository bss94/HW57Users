import React from 'react';
import {User} from '../../types';
import UserItem from '../UserItem/UserItem';

interface Props{
    users:User[]
}
const Users:React.FC<Props> = ({users}) => {
    return (
        <>
            <h5>Users</h5>
            {users.map((user)=>{
                return <UserItem user={user} key={Math.random()*1000}/>
            })}


        </>
    );
};

export default Users;