import React,{Fragment,useEffect} from 'react';

import Navigation from '../component/Navigation';
import EveryPageTop from '../component/EveryPageTop';
import Contact from '../component/Contact';
import Footer from '../component/Footer';


const ContactPage = () => {

    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation webTitle="contact" />
            <EveryPageTop pageTitle="Contact"/>
            <Contact/>
            <Footer/>
        </Fragment>
    );
};

export default ContactPage;