import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserRow from '../userRow/UserRow';
import "./usersApp.style.css";
import UserForm from '../userForm/UserForm';

const url = "https://jsonplaceholder.typicode.com/users";

const UsersApp = () => {
    const [userList, setUserList] = useState([]);
    const [isUserFormOpen, setIsUserFormOpen] = useState(true);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUserList(data);
        } catch (err) {
            console.log("error", err);
        }
    };

    const onDeleteHandler = (id) => {
        setUserList(userList.filter((user) => user.id !== id));
    };

    const addUserHandler = (user) => {
        setIsUserFormOpen(false);
        console.log(user)
        setUserList([...userList, {...user, id: uuidv4().slice(0,2)}])
        
    };

    return (
        <div>
            {isUserFormOpen && <UserForm addUserHandler={addUserHandler} />}
            <button onClick={() => setIsUserFormOpen(true)}>+</button>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>website</th>
                    <th>action</th>
                    </tr>
                    </thead>
                <tbody>
                {userList.map((el) =>
                    <UserRow
                        key={el.id}
                        user={el}
                        onDeleteHandler={onDeleteHandler}
                    />
                    )}
                    </tbody>
            </table>
        </div>
    );
}

export default UsersApp;
