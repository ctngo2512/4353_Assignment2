import React, { useState, useEffect } from 'react';
import fire from "./fire";
import ContactForm from "./contactForm";
import FuelForm from './fuel';

//runs profile page and fuel page
const Hero = ({handleLogout}) => {
    var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    //variables to switch between profile page and fuel page
    const [count, setCount] = useState(false);
    const goBack = () => setCount(value => !value);
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
        <div className="hero">
            {count ? (
                //runs fuel page
            <div className="container">
            
                <nav>
                    <h2>Welcome</h2>
                    <button className="midButton" onClick = {goBack}>Back</button>
                    <button     //logout button
                    onClick={handleLogout}>Log Out</button>
                </nav>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-center">Fuel Page</h1>
                    </div>
                </div>
                
                    <div className="row">
                    <div className="col-md-5">
                    <FuelForm {...({ currentId, contactObjects, addOrEdit })}/>
                    </div>
                    <div className="col-md-7">
                        <table className="table table-borderless table-stripped">
                            <thead className="thead-light">
                                <tr>
                                    <th>Gallons</th>
                                    <th>Delivery Address</th>
                                    <th>Delivery Date</th>
                                    <th>Price</th>
                                    <th>Total</th>
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
                </div>
        
                ) : (
                    //runs profile page
            <section className="hero">
                <nav>
                    <h2>Welcome,</h2>
                    <button className="midButton" onClick={() => setCount(!count)}>
                        Fuel Form
                    </button>
                    <button     //logout button
                    onClick={handleLogout}>Log Out</button>
                    
                </nav>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-center">Profile</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <ContactForm            //display ContactForm
                        {...({ currentId, contactObjects, addOrEdit })} ></ContactForm>
                    </div>
                    <div className="col-md-7">
                        <table className="table table-borderless table-stripped">
                            <thead className="thead-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zipcode</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(contactObjects).map((key) => (
                                        <tr key={key}>
                                            <td>{contactObjects[key].name}</td>
                                            <td>{contactObjects[key].address}</td>
                                            <td>{contactObjects[key].city}</td>
                                            <td>{contactObjects[key].state}</td>
                                            <td>{contactObjects[key].zipcode}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>)}
                )
            </div>) }
export default Hero;
