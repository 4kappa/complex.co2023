import { useState } from 'react'
import { useInView } from "react-intersection-observer";

import React, { Component } from 'react';

import './assets/css/contacts.css'
import Menu from './menu.jsx'
import MapYandex from './mapYandex.jsx'
import ContactsGlavn from './ContactsGlavn.jsx'

function Contacts() {
  

    
  return (
    <>
    <section className='menu-bar'>
    <Menu />

    </section>

        <section id='content'>
            
        <ContactsGlavn/>

        </section>
        <section id='fullWindowMap'>
        <MapYandex />
        </section>
    </>
  )
}

export default Contacts
