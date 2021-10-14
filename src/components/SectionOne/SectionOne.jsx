import './sectionone.scss';

import imageComputer from '../../images/image-computer.png';

const SectionOne = () => {
    return (
        <div className="section__one">

            <div className="section__one__intro">
                <h2>Keep track of your snippets</h2>
                <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
            </div>

            <div className="section__one__container">

                <div className="section__one__left">
                    <img src={imageComputer} className="computerImage" alt="computer"/>
                </div>

                <div className="section__one__right">
                    <h2>Quick Search</h2>
                    <p>Easily search your snippets by content, category, web address, application, and more.</p>
                    <h2>iCloud Sync</h2>
                    <p>Instantly saves and syncs snippets across all your devices.</p>
                    <h2>Complete History</h2>
                    <p>Retrieve any snippets from the first moment you started using the app.</p>
                </div>

            </div>

        </div>

        
    );
};

export default SectionOne;