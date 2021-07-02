import React, { useState, useEffect } from 'react';
import fire from "./fire";
import ContactForm from './contactForm';
import GasForm from './GasForm';

const Hero = ({handleLogout}) => {
    var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    const [count,setCount]= useState(true);

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

        //Include method to get the user id from App.js
        //Use that to add to user node in the database

       // alert(fire.auth().id);
      /*  db.on('value', (snapshot) => {

           // const dt = snapshot.val();
           // alert(dt);
           //db.push('Tropicana');
           return;
        })*/
        
      }
  

    return (
    <div className="setTest">
        { count ? (<GasForm/>) : (
        <section className="hero">
            <nav>
                <h2>Welcome,</h2>
                <button onClick={handleLogout}>Log Out</button>
                <button onClick={() => setCount(count)}>
                    Click me!
                </button>
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
        </section>
    ) } 
    </div> );
    };
   
    
export default Hero;
