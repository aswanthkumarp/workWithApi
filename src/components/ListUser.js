import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ListUser() {
  const [data, setData] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users/');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = (user) => {
    axios.delete("http://localhost:8000/users/" + user.id)
      .then(() => {
        alert(user.name + " deleted");
        fetchUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <Link to={`/users/` + user.id}>
                <Button variant="primary">View</Button>
              </Link>
              {' '}
              <Link to={"/users/" + user.id + "/edit"}>
                <Button variant="info">Edit</Button>
              </Link>
              {' '}
              <Button variant="danger" onClick={() => { deleteUser(user) }}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
