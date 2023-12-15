import { useState } from 'react'
import { useInView } from "react-intersection-observer";

import React, { Component } from 'react';

import './assets/css/worksOur.css'
import Menu from './menu.jsx'
import WorksGlavn from './WorksGlavn.jsx'
import Footer from './footer.jsx'

function Works() {
  

    
  return (
    <>
    <section className='menu-bar'>
    <Menu />

    </section>

        <section id='content'>
            
        <WorksGlavn/>

        </section>
        <section className="totalblack">
        <Footer />

        </section>
    </>
  )
}

export default Works
