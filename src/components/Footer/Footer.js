import './Footer.scss';
import { FaGithub, FaLinkedinIn  } from "react-icons/fa";
import { SiNounproject } from "react-icons/si";

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Me</h3>
                    <p>Passionate developer focused on creating secure and scalable applications.</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: example@email.com</p>
                    <p>Phone: +57 321 841 36 25</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Me</h3>
                    <div className="social-icons">
                        <a href="https://github.com/Samue2408" target='blank'><FaGithub className='icon-netw'/></a>
                        <a href="https://www.linkedin.com/in/samuel-maldonado-engineer/" target='blank'><FaLinkedinIn className='icon-netw'/></a>
                        <a href="https://mym-page.vercel.app/" target='blank'><SiNounproject className='icon-netw'/></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Samuel Maldonado. All rights reserved.</p>
            </div>
        </footer>
    )
}