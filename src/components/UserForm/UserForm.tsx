import React, {useState} from 'react';
import {User} from '../../types';

interface Props{

}
const UserForm:React.FC<Props> = ({}) => {
    const [userForm,setUserForm]=useState<User>({
        name:'',
        email:'',
        isActive:false,
        role:'',
    });
    const changeUser=(event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setUserForm((prevState) =>({
            ...prevState,
            [event.target.name]:event.target.value,
        }));
    };
    const changeActive=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setUserForm((prevState) =>({
        ...prevState,
        [event.target.name]:!prevState.isActive,
    }));
    }


    return (
        <form>
            <h4>add new user</h4>
            <div className="form-group text-start my-3">
                <label htmlFor="name">Name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={userForm.name}
                    className='form-control'
                    onChange={changeUser}
                />
            </div>
            <div className="form-group text-start my-3">
                <label htmlFor="email">Email</label>
                <input
                    name='email'
                    id='email'
                    value={userForm.email}
                    className='form-control'
                    onChange={changeUser}
                />
            </div>
            <div className="form-group text-start my-3">
                <label htmlFor="email">Role</label>
                <select
                    name="role"
                    id="role"
                    value={userForm.role}
                    className="form-control"
                    onChange={changeUser}
                >
                    <option value={''}>select user</option>
                    <option value={'user'}>user</option>
                    <option value={'admin'}>admin</option>
                    <option value={'editor'}>editor</option>
                </select>
            </div>
            <div className="form-group text-start">
                <div className="form-check my-3 ">
                    <label className="form-check-label px-3" htmlFor="isActive">Active user</label>
                    <input
                        type="checkbox"
                        name="isActive"
                        id="isActive"
                        checked={userForm.isActive}
                        className="form-check-input "
                        onChange={changeActive}
                    />
                </div>
            </div>

            <button type="submit" className={'btn btn-primary mt-2'}>Create</button>

        </form>
    );
};

export default UserForm;