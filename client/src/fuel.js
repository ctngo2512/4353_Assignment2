import React, { useState, useEffect } from 'react';


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
            <section className = "fuel">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="gallons requested" placeholder="gallons"
                    value={values.gallon_requested}
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
                    <input className="form-control" name="date" placeholder="Date"
                        value={values.delivery_date}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group input-group col-md-0">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    </div>
                </div>			
            </div>
            <div className="form-group input-group col-md-0">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    </div>
                </div>
                <input className="form-control" name="suggested price" placeholder="price"
                    value={values.suggested_price}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group col-md-0">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                    </div>
                </div>
                <input className="form-control" name="total due" placeholder="due"
                    value={values.total_due}
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
