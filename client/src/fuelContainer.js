import React, { useState, useEffect } from 'react';
import fire from "./fire";
//import ContactForm from "./contactForm";
import FuelForm from './fuel';

const fuelContainer = ({handleLogout}) => {
    var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    //Once components load complete
    useEffect(() => {
        fire.database().ref().child('Test').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])

    //pushes profile contact info to the firebase database
    const addOrEdit = (obj) => {
 
        var db = fire.database().ref().child('Test').push(
            obj,
            err => {
                if(err)
                    console.log(err)
                else
                    setCurrentId('')
            }
        );
      }
  

    return (
        <section className="fuelContainer">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Fuel Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <FuelForm {...({ currentId, contactObjects, addOrEdit })} ></FuelForm>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Gallons</th>
                                <th>Delivery Address</th>
                                <th>Delivery Date</th>
                                <th>Price</th>
                                <th>Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}>
                                        <td>{contactObjects[key].gallon_requested}</td>
                                        <td>{contactObjects[key].delivery_address}</td>
                                        <td>{contactObjects[key].delivery_date}</td>
                                        <td>{contactObjects[key].suggested_price}</td>
                                        <td>{contactObjects[key].total_due}</td>
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
