import { useState } from 'react'
import { useInView } from "react-intersection-observer";

import React, { Component } from 'react';

import './assets/css/appDevelop.css'
import Menu from './menu.jsx'
import AppGlavn from './developAppGlavn.jsx'
import Footer from './footer.jsx'


function AppDevelop() {

   
    const [activeBlack, setActiveBlack] = React.useState(false)
   
    const {ref ,inView} = useInView({
      threshold: 0.24,
      delay: 1,
    })  
    
    React.useEffect(() => {
      if(inView){
        setActiveBlack(true);
      }
    }, [inView]);

  
    
  return (
    <>
    <section className='menu-bar'>
    <Menu />

    </section>

        <section id='content'>
            
        <AppGlavn/>

        </section>

        <section className="totalblack">
        <Footer />

        </section>


    </>
  )
}

export default AppDevelop
