import React,{Fragment,useEffect} from 'react';

import Navigation from '../component/Navigation';
import NotFound from '../component/NotFound';
import Footer from '../component/Footer';

const NotFoundPage = () => {

    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation webTitle="not found" />
            <NotFound/>
            <Footer/>
        </Fragment>
    );
};

export default NotFoundPage;