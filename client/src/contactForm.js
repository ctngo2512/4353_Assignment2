import React, { useState, useEffect } from 'react';

//contact form takes user inputs for name, address....
const ContactForm = (props) => {

    const initialFieldValues = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        address2: ''
    }
    
    var [values, setValues] = useState(initialFieldValues)

    //if no input yet set to empty, else set values to user inputs
    useEffect(() => {
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    //save user inputs to values to save to firebase
    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    //submitting form to firebase and prevent page refresh
    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <section className = "contact">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="name" placeholder="Full Name"
                    value={values.name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        </div>
                    </div>

                    <input className="form-control" name="address" placeholder="Address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        </div>
                    </div>
                    <input className="form-control" name="city" placeholder="City"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        </div>
                    </div>

                    <input className="form-control" name="address2" placeholder="Address Line 2"
                        value={values.address2}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group input-group col-md-0">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    </div>
                </div>
                <select className="form-control" name="state" 
                    value={values.state}
                    //pull down option for state
                    onChange={handleInputChange}>
                        <option value="" disabled selected>Select your state</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                </select>			
            </div>
            <div className="form-group input-group col-md-0">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    </div>
                </div>
                <input className="form-control" name="zipcode" placeholder="Zipcode"
                    value={values.zipcode}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <div className="savebtn">
                <input //save button
                type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
                </div>
                </div>
            </section>
        </form>
    );
}

export default ContactForm;
