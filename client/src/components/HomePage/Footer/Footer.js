import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

const Footer = () => {
    return (
        <div>
                <div className="site-footer">
                    {/* ==========footer container============== */}
                    <div className="container">
                        <footer>
                        <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">It’s more than a vacation, it’s an adventure. Life-enriching, relaxing and unique - plan a tour and enjoy the ultimate holiday experience with us. Discover unforgettable destinations as you travel in total comfort and style.</p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Service</h6>
                            <ul className="footer-links">
                            <li><a href="/service">switzerland</a></li>
                            <li><a href="/service">Japan</a></li>
                            <li><a href="/service">korea</a></li>
                            <li><a href="/service">Thailand</a></li>
                            <li><a href="/service">Nepal</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                        <hr/>
                    <div className="container mx-5">
                        <div className="row">
                        <div className="col-md-7 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by  
                        <a href="/home"> Infinite Tourism </a>
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12n">
                            <ul className="social-icons">
                            <li><a className="facebook" href="#home"> <FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a className="twitter" href="#facebook"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a className="dribbble" href="#dribble"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a className="linkedin" href="#linkedin"><FontAwesomeIcon icon={faDribbble} /></a></li>   
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                </footer>
                </div>
                </div>
        </div>
    );
};

export default Footer;