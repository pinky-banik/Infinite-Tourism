import React, { useEffect, useState } from 'react';
import './Spots.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faStar, faHome ,  faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import loading from "../../../logos/loading.gif";
const Spots = () => {
    const [spotData, setSpotData] = useState([]);
    useEffect(() => {
        fetch('https://bloodcurdling-crypt-68218.herokuapp.com/spots')
            .then(res => res.json())
            .then(data => setSpotData(data))
    }, []);
    const history = useHistory();
    return (
        <Container>
            <h5 className="indigoText text-center mt-5 ">Book Your Favourite Package</h5>
            <h2 className="darkIndigoText text-center font-weight-bold">Discover the best tourist package <br /> available today</h2>
            
            {
                (spotData.length === 0) ?
                    <div class="d-flex justify-content-center">
                        <img style={{width: '200px', height: '150px', marginTop: '50px'}} src={loading} alt="loading"/> 
                    </div> :
            <div>
            <Row className="mt-5">
                {
                    spotData.map(data =>
                        <Col key={data._id} sm={4}>
                            <Card className="bg-white mb-4 card-style">
                                <Card.Img src={data.img} alt="image" />
                                
                                <Card.Body>
                                    <Card.Title className="font-weight-bold indigoText ">{data.title}</Card.Title>
                                    <Card.Text className="text-secondary"><FontAwesomeIcon icon={faMapMarkerAlt} /> {data.places}</Card.Text>
                                    <Row>
                                        <Col>
                                            <Card.Text className="text-secondary"><FontAwesomeIcon icon={faStar} /> {data.rating} </Card.Text>
                                        </Col>
                                        <Col className="text-right">
                                            <Card.Text className="text-secondary"><FontAwesomeIcon icon={faHome} /> {data.duration} </Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                        
                                            <h2 className="font-weight-bold indigoText">{data.price}</h2>
                                        </Col>
                                        <Col className="text-right">
                                            <button onClick={() => history.push(`/spotDetail/${data._id}`)} className="btn indigoBtn">View Details</button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            </div>
            }
        </Container>
    );
};

export default Spots;