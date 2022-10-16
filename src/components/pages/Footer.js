import React from 'react'
import {
    Container,
    Row,
} from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <Row>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>Contact Us</h3>
                                    <p>
                                        Web Zone Computer Center <br/>
                                        DVC KANDRA, DHANBAD<br/><br/>
                                        <strong>Phone:</strong> +91 7991149878<br/>
                                        <strong>Email:</strong> webzonedvckandra@gmail.com<br/>
                                    </p>
                                    <div className="social-links mt-3">
                                        <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
                                        <a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
                                        <a href="#" className="google-plus"><i className="fab fa-skype"></i></a>
                                        <a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="fas fa-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="fas fa-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="fas fa-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="fas fa-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="fas fa-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="fas fa-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="fas fa-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="fas fa-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="fas fa-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="fas fa-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </Row>
                    </div>
                </div>
                <div className="container">
                    
                    <div className="credits">
                        Designed by <a href="https://bootstrapmade.com/">Web Zone</a>&copy; Copyright <strong><span>Web Zone</span></strong>. All Rights Reserved
                    </div>
                    <br/>
                </div>
            </footer>
            
        </>
    )
}
