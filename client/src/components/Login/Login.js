import React, { useContext, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import googleIcon from '../../logos/google.png';
// import facebookIcon from '../../logos/facebook.png';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext, UserData } from '../../App';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
// import { handleGoogleSignIn, initializeLoginFramework } from './AuthManager';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase/firebase.config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [user, setUser] = useContext(UserData);
    // const [newUser, setNewUser] = useState(true);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    };
    const handleGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .then(data => {
                if (data) {
                    window.alert("logged in succesfully")
                } else {
                    window.alert("logged in succesfully")
                }

            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className="text-center">
            <Row className="justify-content-md-center mt-3">
                <div className="login-card mt-5">
                    <h3>Login With</h3>
                    <Button onClick={handleGoogle} variant="light"  ><img src={googleIcon} alt="" /> Continue with Google</Button>
                    <p>Don't have an account? <a href="https://accounts.google.com/signup?hl=en" target="blank">Create an account.</a></p>
                </div>
            </Row>
        </Container>
        </div>
    );
};

export default Login;