import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import EditLogo from './crud/src/images/edit-solid.svg';
// import ViewLogo from 'crud/src/images/eye-regular.svg';

// import DeleteLogo from 'crud/src/images/trash-alt-solid.svg';
// import Edit from "../../images/"



const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>HOME PAGE</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">USER NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">ADDRESS</th>

              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>

                <td>
                
                  <Link 
                  class="btn btn-primary mr-2" to={`/users/${user.id}`}
                  >
VIEW  
                     </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
EDIT                  </Link>
                  <Link
                    class="btn btn-danger mr-2"
                    onClick={() => deleteUser(user.id)}
                  >
DELETE
</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;