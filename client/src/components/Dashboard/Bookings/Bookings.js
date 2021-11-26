import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './Bookings.css';
// import logo from '../../../logos/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faHome, faUser,faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const Bookings = () => {
    const [loggedInUser] = useContext(UserContext);
    const [bookingInfo, setBookingInfo] = useState([]);
    useEffect(() => {
        fetch('https://bloodcurdling-crypt-68218.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => setBookingInfo(data))
    }, []);

    const statuses = ['Pending', 'Confirmed'];
    const statusChange = (id, e) => {
        const updatedBookingInfo = { status: e.target.value };

        fetch(`https://bloodcurdling-crypt-68218.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedBookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    return (
        <div className="bookings">
            <div className="row">
                <div className="col-md-2 col-sm-12">
                    <div className="sidebar">
                        {/* <div className="logo h-75 w-75">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div> */}
                        <div className="mt-5">
                        <p><Link className="link" to="bookings"><span><FontAwesomeIcon icon={faAddressBook} size="xs" /> Booking list</span></Link></p>
                            <p><Link className="link" to="addSpot"><span><FontAwesomeIcon icon={faPlus} size="xs" /> Add  Tourist Spot</span></Link></p>
                            <p><Link className="link" to="myOrders"><span className="booking-link"><FontAwesomeIcon icon={faUser} size="xs" /> My  Orders</span></Link></p>
                            <p><Link className="link" to="/"><span><FontAwesomeIcon icon={faHome} size="xs" /> Back to Home</span></Link></p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-10 col-sm-12">
                    <div className="sec__title d-flex">
                        <h3 className="pl-3">Booking List</h3>
                        <h5 className="ml-auto user__name">{loggedInUser.name}</h5>
                    </div>
                    <div className="dashboard__content">
                        <div className="table__content">
                            <Table borderless size="sm">
                                <thead className="mt-3">
                                    <tr className="tableRow">
                                        <th className="pl-3">Name</th>
                                        <th className="pl-3">Email</th>
                                        <th className="pl-3">Phone No</th>
                                        <th className="pl-3">Message</th>
                                        <th className="pl-3">Status</th>
                                        <th className="pl-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bookingInfo.map(booking =>
                                            <tr>
                                                <td style={{ width: '20%' }} className="pl-3">{booking.name}</td>
                                                <td style={{ width: '20%' }} className="pl-3">{booking.email}</td>
                                                <td style={{ width: '10%' }} className="pl-3">{booking.number}</td>
                                                <td style={{ width: '25%' }} className="pl-3">{booking.message}</td>
                                                <td style={{ width: '12%' }} className="pl-3">
                                                    <select className="form-control" onChange={(e) => statusChange(booking._id, e)} name="status">
                                                        {
                                                            statuses.map(option =>
                                                                <option key={option} value={option} selected={option === booking.status}>{option}</option>
                                                            )
                                                        }
                                                    </select>
                                                    
                                                </td>
                                                <td style={{ width: '30%' }} className="pl-3 text-center"><button className="btn greenBtn mt-2 btn-sm">Remove</button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookings;