import React from 'react';
import { NavLink } from "react-router-dom";
import Bg from "../../../images/background.jpg";
import { Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="headerWrapper">

        <div className="img-fluid"
                style={{
                background: `url(${Bg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                width: "100%",
                height :"100%"
                }}
            >
                <Container>
                <div
                    className="img-fluid d-flex justify-content-center align-items-center "
                >
                    <div className="text-center my-5 py-5">
                        <div>
                        <h1 className="fw-bold" style={{color:"indigo"}}>Welcome to Infinite Tourism</h1>
                        <p className="my-4  fs-5 text-danger fw-bold">
                        “A journey of a thousand miles begins with a single step” – Lao Tzu
                        </p>
                        </div>

                        <NavLink
                        to="/"
                        className="rounded-pill btn btn-primary fs-5 py-2 px-4" style={{backgroundColor:"indigo"}}
                        >
                        Book Your Favourite Spot
                        </NavLink>
                    </div>
                </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;