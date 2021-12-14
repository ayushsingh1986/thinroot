import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address:"",
    company:""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
      BACK TO HOME
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-100">
        <li className="list-group-item">NAME: {user.name}</li>
        <li className="list-group-item">USER NAME: {user.username}</li>
        <li className="list-group-item">EMAIL: {user.email}</li>
        <li className="list-group-item">PHONE: {user.phone}</li>
        <li className="list-group-item">WEBSITE: {user.website}</li>
        <li className="list-group-item">ADDRESS: {user.address}</li>
        <li className="list-group-item">COMPANY: {user.company}</li>


      </ul>
    </div>
  );
};

export default User;