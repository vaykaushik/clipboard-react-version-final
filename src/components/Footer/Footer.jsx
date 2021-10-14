import './footer.scss';

// Images

import Logo from '../../images/logo.svg';

// Font Awesome Icons

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__container">

                <div className="footer__row">

                    <div className="footer__left__list">

                        <div className="footer__column__one">
                            <div>
                                <img src={Logo} alt="logo" className="logo"/>
                            </div>
                        </div>

                        <div className="footer__column__two">
                            
                            <div>
                                <ul>
                                    <li><a href="/">FAQs</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <ul>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Press Kit</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <ul>
                                    <li><a href="/">Install Guide</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    

                    <div class="footer__socials">
                        <a href="/">
                            <FontAwesomeIcon icon={faFacebookSquare} className="i"></FontAwesomeIcon>
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faTwitter} className="i"></FontAwesomeIcon>
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faInstagram} className="i"></FontAwesomeIcon>
                        </a>
                    </div>

                </div>
                
            </div>

        </footer>
    );
};

export default Footer;