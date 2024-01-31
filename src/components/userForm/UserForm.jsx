import React, { useState } from 'react';
import "./userForm.style.css";

const defaultData = {
    id: "",
    name: "",
    email: "",
    phone: "",
    website: "",
}

const UserForm = ({ addUserHandler }) => {
    const [userData, setUserData] = useState(defaultData);

    const onInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    const onSubmitHandler = (e) => {
        e.preventDefault()
        addUserHandler(userData)
 }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>

               
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={onInputChange}
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={onInputChange}
                    placeholder="Email"
                />
                <input
                    type="tel"
                    name="phone"
                    value={userData.phone}
                    onChange={onInputChange}
                    placeholder="Phone"
                />
                <input
                    type="text"
                    name="website"
                    value={userData.website}
                    onChange={onInputChange}
                    placeholder="Website"
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

export default UserForm;
