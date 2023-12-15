
import * as React from "react";

import './assets/css/section1.css'

function App() {
  function HoverOnWeb(){
    document.getElementById("WebHover").classList.add("active")
    document.getElementById("html").classList.add("colorWeb")
  }
  function HoverOffWeb(){
    document.getElementById("WebHover").classList.remove("active")
    document.getElementById("html").classList.remove("colorWeb")
  }
  function HoverOnDesign(){
    document.getElementById("DesignHover").classList.add("active")
    document.getElementById("html").classList.add("colorDesign")
  }
  function HoverOffDesign(){
    document.getElementById("DesignHover").classList.remove("active")
    document.getElementById("html").classList.remove("colorDesign")
  }
  function HoverOnApplic(){
    document.getElementById("ApplicHover").classList.add("active")
    document.getElementById("html").classList.add("colorApplic")
  }
  function HoverOffAplic(){
    document.getElementById("ApplicHover").classList.remove("active")
    document.getElementById("html").classList.remove("colorApplic")
  }

  return (
    <>
        <section className='First'>
       
          <div className="logotype-img">
          <img src="./public/glavn.png  " alt="" />
          </div>
          <div className="text-line">
            <p>Качественно разрешаем ваши <br/> потребности бизнеса в диджитал</p>
            <div className="line"></div>
          </div>
          <div className="navigate-line">
            <div className="texts-navigt">
              <a className="web-color" href="/web-development/" onMouseOver={HoverOnWeb} onMouseOut={HoverOffWeb}>WEB РАЗРАБОТКА</a>
              <h3>Разработка веб-сайта с нуля, индивидуально под вас и ваши задачи</h3>
              <div id='WebHover' className="strela"><i className="arrow right"></i></div>
            </div>
            <div className="line"></div>
          </div>
          <div className="navigate-line">
            <div className="texts-navigt">
              <a className="design-color" href="/design/" onMouseOver={HoverOnDesign} onMouseOut={HoverOffDesign}>DESIGN</a>
              <h3>Дизайн для чего угодно, со всеми вашими пожеланиями</h3>
              <div  id='DesignHover' className="strela"><i className="arrow right"></i></div>
            </div>
            <div className="line"></div>
          </div>
          <div className="navigate-line">
            <div className="texts-navigt">
              <a className="app-color" href="/application-development/" onMouseOver={HoverOnApplic} onMouseOut={HoverOffAplic}>Application development</a>
              <h3>Разработка приложения, для любых задач от Б до Ю</h3>
              <div  id='ApplicHover' className="strela"><i className="arrow right"></i></div>
            </div>
            <div className="line"></div>
          </div>
        </section>
    </>
  )
}

export default App
