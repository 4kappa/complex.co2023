import { useState } from 'react'

import React, { Component } from 'react';

import './assets/css/App.css'

import Menu from './menu.jsx'
import Section1 from './section1.jsx'
import Team from './Team.jsx'
import Footer from './footer.jsx'
import Works from './Works.jsx'
import AddBanner from './AddBanner.jsx'
import ScrollerText from './ScrollerText.jsx'
import Sale from './Sale.jsx'
import { useInView } from "react-intersection-observer";
import {Circle} from 'react-preloaders';



function App() {

   
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
    <Circle time={0}  animation="fade"/>

    <section className={inView? "menu-bar onWhite" : "menu-bar" } transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}>
    <Menu />

    </section>

        <section id='content'>

        
        <Section1 />
        </section>
        

        <ScrollerText/>
        <section className={inView? "totalblack green" : "totalblack" } ref={ref}>
        <Works />
        <AddBanner />
        <Sale />
        <Team />

        <div className="line-upper-footer"></div>
        <Footer />
        </section>


    </>
  )
}

export default App
