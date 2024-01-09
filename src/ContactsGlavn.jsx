import React, { Component } from 'react';
import axios from 'axios';
import './assets/css/contactsglavn.css'
function ContactsGlavn() {
   
      return (
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
                        <form id='tg-form'>
                            <input type="text" name='name' placeholder='Как к вам обращаться' />
                            <input type="text" name='email' placeholder='Ваша почта' />
                            <input type="text" name='qustion' placeholder='Ваш вопрос' />
                            <button id='submit-btn' type="submit">ОТПРАВИТЬ</button>
                        </form>
                    </div>
                </div>
        </section>
        </>
    )  
}
export default ContactsGlavn


