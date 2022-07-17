import React,{Fragment,useEffect} from 'react';

import Navigation from '../component/Navigation';
import Hero from '../component/Hero';
import About from '../component/About';
import Skill from '../component/Skill';
import Certificate from '../component/Certificate';
import Count from '../component/Count';
import Project from '../component/Project';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

const HomePage = () => {

    useEffect(()=>{
        window.scroll(0,0);
    });
    
    return (
        <Fragment>
            <Navigation webTitle="home" />
            <Hero/>
            <About/>
            <Skill/>
            <Certificate/>
            <Count/>
            <Project/>
            <Contact/>
            <Footer/>
        </Fragment>
    );
};

export default HomePage;