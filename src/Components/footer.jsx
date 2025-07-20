import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[ #000000ff] to-[#f51524] text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                
                {/* Brand Section */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold">Shresha Acharya</h2>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-6 text-xl">
                    <a href="#" className="text-gray-300 transition duration-300"><FaFacebook  style={{ color: 'white' }}/></a>
                    <a href="#" className="hover:text-gray-300 transition duration-300"><FaInstagram  style={{ color: 'white' }}/></a>
                    <a href="https://x.com/shresha_ac26079" className="hover:text-gray-300 transition duration-300"><FaTwitter  style={{ color: 'white' }}/></a>
                    <a href="https://www.linkedin.com/in/shresha-acharya-116318261/" className="hover:text-gray-300 transition duration-300"><FaLinkedin  style={{ color: 'white' }}/></a>
                </div>

                {/* Copyright */}
                <div className="text-sm text-center md:text-right opacity-80">
                    &copy; {new Date().getFullYear()} Shresha. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;