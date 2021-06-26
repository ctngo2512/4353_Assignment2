import React, { useState, useEffect } from 'react';
import fire from "./fire";
import ContactForm from "./contactForm";

const Hero = ({handleLogout}) => {
    var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    const addOrEdit = (obj) => {
      /*need to implement both insert
      and update operation*/
    }

    const onDelete = id => {
        // record with given id is to be deleted.
    }

    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Log Out</button>
            </nav>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Profile</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({ currentId, contactObjects, addOrEdit })} ></ContactForm>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}>
                                        <td>{contactObjects[key].fullName}</td>
                                        <td>{contactObjects[key].mobile}</td>
                                        <td>{contactObjects[key].email}</td>
                                        <td className="bg-light">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Hero;
