import React from "react";
import './contact.styles.scss';
import CustomButton from "../../components/custom-button/custom-button.component";
import Navbar from "../../components/navbar/navbar.component";
import {Helmet} from "react-helmet";
import ScrollToTop from "../../utils/scroll-to-top";

const ContactPage = () => {


    return (
        <>
            <Helmet>
                <title>Contact edanra For More Information</title>
            </Helmet>
            <ScrollToTop/>
            <Navbar/>
            <div className='cover-img'>
                <div>
                    <h1>Contact Us</h1>
                    <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us... </p>
                </div>

            </div>
            <div className='container-fluid card-container'>
                <div className='row contact-row'>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 card'>
                        <i className='fa fa-envelope animated jello'/>
                        <h5>Mail <span className="teal-head">edanra</span></h5>
                        <p>Want to send us feedback? Just send a mail to edanra and we will respond as soon as possible.</p>
                        <a href="mailto:info@edanra.com" target='_blank' rel="noopener noreferrer"><CustomButton>send mail</CustomButton></a>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 card'>
                        <i className='fa fa-comments animated jello delay-1s'/>
                        <h5>Reach us on social media</h5>
                        <p>Follow, send messages, comment and like our social media pages.</p>
                        <div className='social'>
                            <a rel="noopener noreferrer" href="https://web.facebook.com/Edanra-105026167849323/" target="_blank"><i className='fa fa-facebook'/></a>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/edanragh" target="_blank"><i className='fa fa-instagram'/></a>
                            <a rel="noopener noreferrer" href="https://twitter.com/edanragh" target="_blank"><i className='fa fa-twitter'/></a>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-4 col-lg-3 card location'>
                        <i className='fa fa-map-marker animated jello delay-2s'/>
                        <h5>Locate <span className="teal-head">edanra</span></h5>
                        <p>Accra</p>
                        <div className='call-header'>
                            <h6> Or call</h6>
                            <i className='fa fa-phone'/>
                        </div>
                        <p className='bolden'>+233 54 545 8603</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
