import React, { useState, useEffect } from 'react';
import fire from "./fire";

const Hero = (props) => {
    const {
        handleLogout, name, setName, address, setAddress, city, setCity, state, setState, zipcode, setZipcode
    } = props;

    var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    //Once components load complete
    useEffect(() => {
        fire.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])


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
        </section>
    )
}

export default Hero;