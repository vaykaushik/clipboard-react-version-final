import './sectionfour.scss';

// Images

import Google from '../../images/logo-google.png';
import Ibm from '../../images/logo-ibm.png';
import Microsoft from '../../images/logo-microsoft.png';
import HewlettPackard from '../../images/logo-hp.png';
import VectorGraphics from '../../images/logo-vector-graphics.png';

const SectionFour = () => {
    return (
        <div className="section__four">
            
            <div className="section__four__container">

                <img src={Google} alt="Google"/>
                <img src={Ibm} alt="Ibm"/>
                <img src={Microsoft} alt="Microsoft"/>
                <img src={HewlettPackard} alt="HP"/>
                <img src={VectorGraphics} alt="Vector Graphics"/>

            </div>

        </div>
    );
};

export default SectionFour;