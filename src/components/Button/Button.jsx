import './button.scss';

const Button = () => {
    return (
        <div className="header__buttons">
            <button className="header__button--green">Download for iOS</button>
            <button className="header__button--blue">Download for Mac</button>
        </div>
    );
};

export default Button;