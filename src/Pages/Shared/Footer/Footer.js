import { data } from 'autoprefixer';
import React from 'react';
import footer from '../../../../src/assets/images/footer.png'
const Footer = () => {
    const date = new Date()
    return (
        <section >
            <div>
                <footer style={{
                    background: `url(${footer})`,
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%"
                }} className="footer px-16 py-28 justify-between text-dark">
                    <div >
                        <span className="footer-title text-accent">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title text-accent">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title text-accent">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
            </div>
            <div>
                <p className='text-center'>Copyright © {date.getFullYear()} - All right reserved by Medizone Health Care</p>
            </div>
        </section >
    );
};

export default Footer;