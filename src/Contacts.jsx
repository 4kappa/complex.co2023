import { useState } from 'react'
import { useInView } from "react-intersection-observer";

import React, { Component } from 'react';

import './assets/css/contacts.css'
import Menu from './menu.jsx'
import ContactsGlavn from './ContactsGlavn.jsx'
import Footer from './footer.jsx'

function Contacts() {
  

    
  return (
    <>
    <section className='menu-bar'>
    <Menu />

    </section>

        <section id='content'>
            
        <ContactsGlavn/>

        </section>

    </>
  )
}

export default Contacts
