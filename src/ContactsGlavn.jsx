import React, { Component } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './assets/css/contactsglavn.css'
const ContactsGlavn = () => {
    const defaultState = {
        center: [51.818422, 55.1481051],
        zoom: 15,
      
      };
      function HoverOnFooterMap(){
        document.getElementById("WebHover").classList.remove("active-map")
      }
      function HoverOffFooterMap(){
        document.getElementById("WebHover").classList.add("active-map")
      }
      return(
        <>
        <section>
                <div className="text-head">
                    <h2>КОНТАКТЫ</h2>
                    <div className="line-after"></div>
                </div>
                <div className="form-links">
                    <div className="links">
                        
                    </div>
                    <div className="form">
                        <form action="POST">
                            <input type="text" placeholder='Как к вам обращаться' />
                            <input type="text" placeholder='Ваша почта' />
                            <input type="text" placeholder='Ваш вопрос' />
                            <button type="submit">ОТПРАВИТЬ</button>
                        </form>
                    </div>
                </div>
        </section>
        </>
    ) 
    
}

export default ContactsGlavn;
