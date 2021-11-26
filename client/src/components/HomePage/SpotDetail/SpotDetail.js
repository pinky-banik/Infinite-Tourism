import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import './SpotDetail.css';
import { UserContext } from '../../../App';
import { useParams } from 'react-router-dom';


const SpotDetail = () => {

    const [loggedInUser] = useContext(UserContext);

    const [spotData, setSpotData] = useState([]);
    useEffect(() => {
        fetch('https://bloodcurdling-crypt-68218.herokuapp.com/spots')
            .then(res => res.json())
            .then(data => setSpotData(data))
    }, []);

    const { id } = useParams();
    const spot = spotData.find(data => data._id === id) || {};
    console.log(spot);
    console.log(id);

    const [bookingInfo, setBookingInfo] = useState({});
    const handleBlur = (e) => {
        const newBookingInfo = { ...bookingInfo };
        newBookingInfo[e.target.name] = e.target.value;
        newBookingInfo.status = 'Pending';
        setBookingInfo(newBookingInfo);
    };
    const handleSubmit = e => {
        const formData = new FormData();
        formData.append('name', bookingInfo.name || loggedInUser.name);
        formData.append('number', bookingInfo.number);
        formData.append('email', bookingInfo.email || loggedInUser.email);
        formData.append('message', bookingInfo.message);
        formData.append('spot', spot.title);
        formData.append('price', spot.price);
        formData.append('status', bookingInfo.status);

        fetch('https://bloodcurdling-crypt-68218.herokuapp.com/addBooking', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .then(data => {
                if (data) {
                    window.alert("Order placed Succesfully")
                } else {
                    window.alert("Order Placed succesfully")
                }

            })

        e.preventDefault();
    };
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="spotWrapper text-center">
                <div className="spotInner pt-5 ">
                    <h1 className="pt-5 mt-3 font-weight-bold">Tourist Spot Details</h1>
                </div>
                <div className="spotOverlay"></div>
            </div>
            <Container className="mt-5">
                <Row>
                    <Col md={8}>
                        <img src={spot.img} alt="" className="img-fluid" />
                        <div className="pt-3">
                            <Row>
                                <img src="" alt="" />
                            </Row>
                        </div>
                        <Row className="my-3">
                            <Col>
                                <h2 className="font-weight-bold darkIndigoText">{spot.title}</h2>
                            </Col>
                            <Col>
                                <h2 className="font-weight-bold indigoText text-right">{spot.price}</h2>
                            </Col>
                        </Row>
                        <p className="text-black">{spot.details}., {spot.duration} Bedroom, Semi-furnished, Luxurious, South facing Spot for Orders in Rangs Malancha, Melbourne.</p>
                        <h3 className="font-weight-bold darkIndigoText">Price Detail -</h3>
                        <p className="text-black">
                            fees/tour: BDT5500 (negotiable) <br />
                            Service Charge : 8,000/= Tk per package, subject to change <br />
                            Insurance : BDT 5000.
                            
                        </p>
                        <h3 className="font-weight-bold darkIndigoText">Package Detail</h3>
                        <p className="text-black"> # All transfers between airports/harbours/stations and hotels.</p>
                        <p className="text-black"> #
Twin share tourist and first-class accommodation with private facilities, as specified.</p>
                        <p className="text-black"> # Cruises.</p>
                        <p className="text-black"># Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</p>
                        <p className="text-black"> # Orderal cars.</p>
                        <p className="text-black"> # Entrance fees to attractions.</p>                        <p className="text-black"> # Tickets for entry to events or attractions.</p>
                        
                    </Col>
                    <Col md={4}>
                        <div className="px-1 pt-5 pb-2">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} size="lg" value={loggedInUser.name} type="name" name="name" placeholder="Full Name" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} size="lg" type="number" name="number" placeholder="Phone No." required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} size="lg" value={loggedInUser.email} type="email" name="email" placeholder="Email Address" required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control onBlur={handleBlur} size="lg" as="textarea" name="message" rows={3} type="text" placeholder="Message" required />
                                </Form.Group>
                                <button  type="submit" size="lg" className="btn indigoBtn form-control">Place Order</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SpotDetail;