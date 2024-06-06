import React from 'react';
import {User} from '../../types';

interface Props{
    user:User
}
const UserItem:React.FC<Props> = ({user}) => {
    return (
        <div className={'card mb-2'}>
            <div className="row g-0">
                <h6 className={'card-title'}>User name: {user.name}</h6>
                <p className={'card-text'}>Email: {user.email}</p>
                <p className={'card-text small'}>Active: {user.isActive.toString()}</p>
                <p className={'card-text'}>Role: {user.role}</p>
            </div>

        </div>
    );
};

export default UserItem;