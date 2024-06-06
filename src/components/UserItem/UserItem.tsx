import React from 'react';
import {User} from '../../types';

interface Props {
    user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
    const isActiveClasses: string[] = ['position-absolute', 'top-50', 'start-0', 'translate-middle', 'p-2', 'border', 'border-light', 'rounded-circle'];

    if (user.isActive) {
        isActiveClasses.push('bg-success');
    } else {
        isActiveClasses.push('bg-danger');
    }

    return (
        <div className={'card mb-2 position-relative'}>
            <span
                className={isActiveClasses.join(' ')}>
  </span>
            <div className="row">
                <h6 className={'card-title'}>User name: {user.name}</h6>
                <p className={'card-text'}>Email: {user.email}</p>
                <p className={'card-text'}>Active: {user.isActive.toString()}</p>
                <p className={'card-text'}>Role: {user.role}</p>
            </div>

        </div>
    );
};

export default UserItem;