
import React, { Component } from 'react';
import './assets/css/Team.css'
import { useInView } from "react-intersection-observer";
import { useClipboard } from 'use-clipboard-copy';

function Team() {
 
  return (
    <>
    
        <section className='team'>
          <div className="team-blocks">
            <div className="team-text">
              <h2 className='big'>ПОЗНАКОМТЕСЬ С НАШЕЙ КОМАНДОЙ</h2>
              <h3 className='small'>Профисионалы своего дело, молодые а главное креативные ребята. Имеют опыт работы, а также все необходимые знания</h3>
            </div>
            <div className="team-collaps">
              <div className="card hide-card">

                <div className="about">
                  <h2 className='fio'>Бикбаев Артем Ренатович</h2>
                  <div className="techno">
                    <img src="./public/techno/image 1.png" alt="" />
                    <img src="./public/techno/image 2.png" alt="" />
                    <img src="./public/techno/image 3.png" alt="" />
                    <img src="./public/techno/image 4.png" alt="" />
                    <img src="./public/techno/image 5.png" alt="" />
                    <img src="./public/techno/image 6.png" alt="" />
                    <img src="./public/techno/image 7.png" alt="" />
                  </div>
                  <h3 className='job'>Project Manager | Chief Designer </h3>
                </div>
              </div>
              <div className="card">

                <div className="about">
                  <h2 className='fio'>Бикбаев Артем Ренатович</h2>
                  <div className="techno">
                    <img src="./public/techno/image 1.png" alt="" />
                    <img src="./public/techno/image 2.png" alt="" />
                    <img src="./public/techno/image 3.png" alt="" />
                    <img src="./public/techno/image 4.png" alt="" />
                    <img src="./public/techno/image 5.png" alt="" />
                    <img src="./public/techno/image 6.png" alt="" />
                    <img src="./public/techno/image 7.png" alt="" />
                  </div>
                  <h3 className='job'>Project Manager | Chief Designer </h3>
                </div>
                
              </div>
              <div className="card hide-card">

                <div className="about">
                  <h2 className='fio'>Бикбаев Артем Ренатович</h2>
                  <div className="techno">
                    <img src="./public/techno/image 1.png" alt="" />
                    <img src="./public/techno/image 2.png" alt="" />
                    <img src="./public/techno/image 3.png" alt="" />
                    <img src="./public/techno/image 4.png" alt="" />
                    <img src="./public/techno/image 5.png" alt="" />
                    <img src="./public/techno/image 6.png" alt="" />
                    <img src="./public/techno/image 7.png" alt="" />
                  </div>
                  <h3 className='job'>Project Manager | Chief Designer </h3>
                </div>
                
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Team
