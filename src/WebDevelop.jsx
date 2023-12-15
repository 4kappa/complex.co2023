import { useState } from 'react'
import { useInView } from "react-intersection-observer";

import React, { Component } from 'react';

import './assets/css/webdevelop.css'
import Menu from './menu.jsx'

import GlavnWeb from './GlavnWeb.jsx'
import Footer from './footer.jsx'


function WebDevelop() {

   
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
            
        <GlavnWeb/>

        </section>

        <section className="totalblack">
        <Footer />

        </section>


    </>
  )
}

export default WebDevelop
