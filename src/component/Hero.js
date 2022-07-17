import React,{Fragment} from 'react';
import '../asset/css/custom.css'


import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {faArrowAltCircleDown,faThumbsDown,faHandPointDown,faSquareCaretDown} from '@fortawesome/free-regular-svg-icons'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <Fragment>
            <section className="hero-section">
                <div className="row">
                    <div className="hero-textbox">
                        <h1>Software Engineer</h1>
                        <p className="hero-description">Building sites with React js are my bread and butter. I'd estimate 70% of the work I do revolves around using React js somehow. Building sites with ReactJS always makes me enthusiastic.</p>
                        <Link className="hero-btn" to="/contact" >Contact</Link>
                    </div>
                    <p><FontAwesomeIcon className="hero-arrow" icon={faAngleDown} /></p>
                </div>
            </section>
        </Fragment>
    );
};

export default Hero;