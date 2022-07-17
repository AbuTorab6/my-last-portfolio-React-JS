import React,{Fragment,useState,useEffect} from 'react';
import '../asset/css/custom.css'

import {Navbar,Nav,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


const Navigation = (ob) => 
{


    const[v1,v2]=useState({
        navigationBackground:"navigation-background",
        navigationBrand : "navigation-brand",
        navigationList : "navigation-list"
    });

    var jubo = ()=>
    {
        if(window.scrollY>100)
        {
            v2({navigationBackground:"navigation-background-scroll",navigationBrand : "navigation-brand", navigationList : "navigation-list"});
        }
        else if(window.scrollY<100)
        {
            v2({navigationBackground:"navigation-background",navigationBrand : "navigation-brand", navigationList : "navigation-list"});
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',jubo);
    });



    return (
        <Fragment>
            <title>{ob.webTitle}</title>
            <Navbar className={v1.navigationBackground}  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand > <NavLink className={v1.navigationBrand} to="/" >Abu Torab</NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/">Home</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/about">About</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/project">Project</NavLink>
                            <NavLink className={v1.navigationList} style={(p1)=>{return {color:p1.isActive?'rgb(226, 30, 81)':undefined}}} to="/contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default Navigation;