import './sectiontwo.scss';
import devicesImage from '../../images/image-devices.png';

const SectionTwo = () => {
    return (
        <div className="section__two">
            
            <div className="section__two__intro">
                <h2>Access Clipboard anywhere</h2>
                <p>Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
            </div>

            <div className="section__two__image">
                <img src={devicesImage} alt="devices" className="devices"></img>
            </div>

        </div>
    );
};

export default SectionTwo;