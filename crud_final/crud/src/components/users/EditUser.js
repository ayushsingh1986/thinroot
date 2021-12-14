import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        address: "",
        company: ""
    });

    const { name, username, email, phone, website, address, company } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3 border">
                                <label className="mt-3">Name</label>
                            </div>
                            <div className="col-md-9">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    value={name}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>


                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3 border">
                                <label className="mt-3">Username</label>
                            </div>
                            <div className="col-md-9">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Username"
                                    name="username"
                                    value={username}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3 border">
                                <label className="mt-3">Email</label>
                            </div>
                            <div className="col-md-9">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your E-mail Address"
                                    name="email"
                                    value={email}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-3 border">
                                <label className="mt-3">Phone</label>
                            </div>
                            <div className="col-md-9">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Phone Number"
                                    name="phone"
                                    value={phone}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                    <div className="row">
                        <div className="col-md-3 border">
                            <label className="mt-3">Website</label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Website"
                                name="website"
                                value={website}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                    </div>
                    </div>

                    <div className="form-group">
                    <div className="row">
                        <div className="col-md-3 border">
                            <label className="mt-3">Address</label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Address"
                                name="address"
                                value={address}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                    </div>
                    </div>


                    <div className="form-group">
                    <div className="row">
                        <div className="col-md-3 border">
                            <label className="mt-3">Company</label>
                        </div>
                        <div className="col-md-9">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Website Name"
                                name="company"
                                value={company}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                    </div>
                    </div>


                    <button className="btn btn-warning btn-block" mt-2>Update User</button>
                </form >
            </div >
        </div >
    );
};

export default EditUser;