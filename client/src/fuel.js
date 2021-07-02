import React, { useState, useEffect } from 'react';

//form for company fuel inputs
const FuelForm = (props) => {

    const initialFieldValues = {
        gallon_requested: '',
        delivery_address: '',
        delivery_date: '',
        suggested_price: '',
        total_due: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.fuelObjects[props.currentId]
            })
    }, [props.currentId, props.fuelObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

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
                    </div>
                </div>
                <input className="form-control" name="gallon_requested" placeholder="Gallons Requested"
                    value={values.gallon_requested}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    </div>
                </div>
                    <input className="form-control" name="delivery_address" placeholder="Delivery Address"
                        value={values.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    </div>
                </div>
                    <input className="form-control" name="delivery_date" placeholder="Delivery Date"
                        value={values.delivery_date}
                        onChange={handleInputChange}
                    />
                </div>
            <div className="form-group">
                <div className="savebtn">
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
                </div>
                </div>
            </section>
        </form>
    );
}

export default FuelForm;
