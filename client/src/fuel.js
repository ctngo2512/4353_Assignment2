import React, { useState, useEffect } from 'react';
import validator from 'validator';

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

    //validation for fuel form 
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //date
        const App = () => {
  
            const [errorMessage, setErrorMessage] = useState('')
              
            const validateDate = (value) => {
              
              if (validator.isDate(delivery_date)) {
                setErrorMessage('Valid Date :)')
              } else {
                setErrorMessage('Enter Valid Date in form of 00/00/0000')
              }
            }

        //gallons requested
        if(!fields["gallon_requested"]){
           formIsValid = false;
           errors["gallon_requested"] = "Cannot be empty";
        }
  
        if(typeof fields["gallon_requested"] !== "undefined"){
           if(!fields["gallon_requested"].match(/^[0-9]+$/)){
              formIsValid = false;
              errors["gallon_requested"] = "Only numbers";
           }        
        }
   
        //suggested price
        if(!fields["suggested_price"]){
            formIsValid = false;
            errors["suggested_price"] = "Cannot be empty";
         }
   
         if(typeof fields["suggested_price"] !== "undefined"){
            if(!fields["suggested_price"].match(/^[0-9]+$/)){
               formIsValid = false;
               errors["suggested_price"] = "Only numbers";
            }        
         }
         
         //total due
         if(!fields["total_due"]){
            formIsValid = false;
            errors["total_due"] = "Cannot be empty";
         }
   
         if(typeof fields["total_due"] !== "undefined"){
            if(!fields["total_due"].match(/^[0-9]+$/)){
               formIsValid = false;
               errors["total_due"] = "Only numbers";
            }        
         }

       this.setState({errors: errors});
       return formIsValid;
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
