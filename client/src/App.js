import React, { useState, useEffect } from 'react';
import fire from './fire';
import Login from './Login';
import Hero from './Hero';
import GasForm from './GasForm';
import './App.css';

const App = (props) => {
  const {
    name,
    address,
    city,
    state,
    zipcode
  } = props;

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            clearInputs();
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            clearInputs();
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            clearInputs();
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            clearInputs();
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user){
        clearInputs();
        setUser(user);
      }
      else {
        setUser("");
      }
    });
  };

  useEffect (() => {
    authListener();
  }, [])

  return (
    <div className = "App">
      {user ? (
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Hero
            handleLogout={handleLogout}
          />
          </div>
        </div>
      
      ) : (
        <Login 
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          clearErrors={clearErrors}
      />
      //<GasForm/>
      )}
    </div>
  );
};

export default App;
