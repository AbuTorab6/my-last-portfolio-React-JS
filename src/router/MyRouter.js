import React,{Fragment} from 'react';


import HomePage from '../page/HomePage';
import AboutPage from '../page/AboutPage';
import ProjectPage from '../page/ProjectPage';
import ContactPage from '../page/ContactPage';
import NotFoundPage from '../page/NotFoundPage';

import {Routes,Route} from 'react-router-dom'

const MyRouter = () => {
    return (
        <Fragment>
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/about' element={<AboutPage/>} />
                <Route path='/project' element={<ProjectPage/>} />
                <Route path='/contact' element={<ContactPage/>} />
                <Route path='*' element={<NotFoundPage/>} />
            </Routes>
        </Fragment>
    );
};

export default MyRouter;