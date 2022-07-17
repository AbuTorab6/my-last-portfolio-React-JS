import React,{Fragment,useEffect} from 'react';

import Navigation from '../component/Navigation';
import EveryPageTop from '../component/EveryPageTop';
import About from '../component/About';
import Skill from '../component/Skill';
import Certificate from '../component/Certificate';
import Footer from '../component/Footer';

const AboutPage = () => {

    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation webTitle="about" />
            <EveryPageTop pageTitle="About" />
            <About/>
            <Skill/>
            <Certificate/>
            <Footer/>
        </Fragment>
    );
};

export default AboutPage;