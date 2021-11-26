import React, { useContext, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from '../../../logos/Logo.png';
import './NavigationBar.css';
import { NavDropdown } from 'react-bootstrap';
import firebase from 'firebase/app'
import "firebase/auth";
import { UserContext } from '../../../App';


const NavigationBar = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })

    let buttons;

     const handleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: ''
            }
            setUser(signOutUser);
            setLoggedInUser(signOutUser);
          }).catch(function(error) {
            // An error happened.
          })
          .then(data => {
            if (data) {
                window.alert("logged out succesfully.")
            } else {
                window.alert("logged out succesfully.")
            }

        })
    }

    if(loggedInUser.email){
        buttons = (
            <Nav>
                <NavDropdown title={loggedInUser.name} id="basic-nav-dropdown" >
                    <NavDropdown.Item><Link to="/bookings" className = "link">Go to Dashboard</Link></NavDropdown.Item>
                    <NavDropdown.Item onClick={handleSignOut}>Log Out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
    else{
        buttons = (
            <ul className="navbar-nav menuBtn">
                <li className="nav-item">
                    <button onClick={() => history.push('/login')} className="btn indigoBtn" >Login</button>
                </li>
            </ul>
        )
    }
    return (
            <div className="">
                <Navbar className="px-5 " variant="dark" collapseOnSelect expand="md" >
                <Navbar.Brand href=""><img  className ="w-25"style={{height:"50px"}} src={logo} alt=""/><span>Infinite Tourism</span></Navbar.Brand>
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="" onClick={() => history.push('/')}>Home</Nav.Link>
                        {loggedInUser.email ?<Nav.Link   as={NavLink} to="/myOrders" href="" >My Orders</Nav.Link>: []}
                        {loggedInUser.email ?<Nav.Link as={NavLink} to="/manageBooking" href="" >Manage All Orders</Nav.Link> : []}
                    </Nav>
                    {buttons}
                </Navbar.Collapse>
            </Navbar>
            </div>
    );
};

export default NavigationBar;