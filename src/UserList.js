import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; 


const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h1>List of Users</h1>
      <ul>
        {listOfUsers.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
