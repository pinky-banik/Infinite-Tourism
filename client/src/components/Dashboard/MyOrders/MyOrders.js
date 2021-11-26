import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import logo from '../../../logos/Logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHome, faUser, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const MyOrder = () => {
    const [loggedInUser] = useContext(UserContext);
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://bloodcurdling-crypt-68218.herokuapp.com/bookings?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [loggedInUser.email]);

    const handleDelete = id =>{
        const url= `https://bloodcurdling-crypt-68218.herokuapp.com/bookings?id=${id}`;
        fetch(url,{
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deleteCount){
                
                const remaining = loggedInUser.filter(orders=>loggedInUser._id !== id)
                setMyOrders(remaining);
                
                
            }
            
            
        })

    }

    return (
        <div className="bookings">
            <div className="row">
                <div className="col-md-2 col-sm-12">
                    <div className="sidebar">
                        <div className="w-25 h-25">
                            {/* <Link to="/"><img src={logo} alt="logo" /></Link> */}
                        </div>
                        <div className="dashboard__link mt-5">
                        <p><Link className="link" to="bookings"><span><FontAwesomeIcon icon={faAddressBook} size="xs" /> Booking list</span></Link></p>
                            <p><Link className="link" to="addSpot"><span><FontAwesomeIcon icon={faPlus} size="xs" /> Add  Tourist Spot</span></Link></p>
                            <p><Link className="link" to="myOrders"><span className="booking-link"><FontAwesomeIcon icon={faUser} size="xs" /> My  Orders</span></Link></p>
                            <p><Link className="link" to="/"><span><FontAwesomeIcon icon={faHome} size="xs" /> Back to Home</span></Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 col-sm-12">
                    <div className="sec__title d-flex">
                        <h3 className="pl-3">My  Order Houses</h3>
                        <h5 className="ml-auto user__name">{loggedInUser.name}</h5>
                    </div>
                    <div className="dashboard__content">
                        <div className="table__content">
                            <Table borderless size="sm">
                                <thead className="mt-3">
                                    <tr className="tableRow">
                                        <th style={{ width: '40%' }} className="pl-3"> Name</th>
                                        <th style={{ width: '30%' }} className="pl-3 text-center">Price</th>
                                        <th style={{ width: '30%' }} className="pl-3 text-center">Staus</th>
                                        <th style={{ width: '30%' }} className="pl-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myOrders.map(order =>
                                            <tr key={order._id}>
                                                <td style={{ width: '40%' }} className="pl-3 pt-3">{order.spot}</td>
                                                <td style={{ width: '30%' }} className="pl-3 pt-3 text-center">{order.price}</td>
                                                <td style={{ width: '30%' }} className="pl-3 text-center"><button className="btn greenBtn mt-2 btn-sm">{order.status}</button></td>
                                                <td style={{ width: '30%' }} className="pl-3 text-center"><button onClick={()=>handleDelete(loggedInUser._id)} className="btn greenBtn mt-2 btn-sm">Cancal</button></td>
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

export default MyOrder;