import React,{Fragment,useEffect} from 'react';

import Navigation from '../component/Navigation';
import EveryPageTop from '../component/EveryPageTop';
import Count from '../component/Count';
import AllProject from '../component/AllProject';
import Footer from '../component/Footer';

const ProjectPage = () => {

    useEffect(()=>{
        window.scroll(0,0);
    });

    return (
        <Fragment>
            <Navigation webTitle="project"/>
            <EveryPageTop pageTitle="Project"/>
            <Count/>
            <AllProject/>
            <Footer/>
        </Fragment>
    );
};

export default ProjectPage;