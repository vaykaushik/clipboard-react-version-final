import './sectionthree.scss';

// Image Imports

import BlackLists from '../../images/icon-blacklist.svg';
import TextSnippets from '../../images/icon-text.svg';
import SneakPreview from '../../images/icon-preview.svg';

const SectionThree = () => {
    return (
        <div className="section__three">
            
            <div className="section__three__intro">
                <h2>Supercharge your workflow</h2>
                <p>We've got the tools to boost your productivity.</p>
            </div>

            <div className="section__three__container">

                <div className="section__three__content--first">
                    <img src={BlackLists} alt="" className=""/>
                    <h3>Create blacklists</h3>
                    <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                </div>

                <div className="section__three__content">
                    <img src={TextSnippets} alt="" className=""/>
                    <h3>Plain text snippets</h3>
                    <p>Remove unwanted formatting from copied text for a consistent look.</p>
                </div>

                <div className="section__three__content">
                    <img src={SneakPreview} alt="" className=""/>
                    <h3>Sneak preview</h3>
                    <p>Quick preview of all snippets on your Clipboard for easy access.</p>
                </div>

            </div>

        </div>
    );
};

export default SectionThree;