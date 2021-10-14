// Stylesheet for Header

import './header.scss';

// Images for Header

import Logo from '../../images/logo.svg';

import Headerbackgrounddesktop from '../../images/bg-header-desktop.png';
import Headerbackgroundmobile from '../../images/bg-header-mobile.png';

// Button component for Header

import Button from '../Button/Button';

const Header = () => {
    return (
        <div className="header">

            <img src={Headerbackgrounddesktop} className="header__background--desktop" alt="header background" />

            <img src={Headerbackgroundmobile} className="header__background--mobile" alt="header background" />

            <img src={Logo} className="logo" alt="logo" />

            <div className="header__info">
                <h1 className="header__title">A history of everything you copy</h1>
                <p className="header__copy">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
            </div>

            <Button />

        </div>
    );
};

export default Header;