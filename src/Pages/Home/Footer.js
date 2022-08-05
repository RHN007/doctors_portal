import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (

        <footer className="p-10 text-black  text-neutral-content" 
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}>
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>

            <div className='text-center pt-12'>
                <p>Copyright © 2022 - All right reserved by RHN007</p>
            </div>

        </footer>

    );
};

export default Footer;