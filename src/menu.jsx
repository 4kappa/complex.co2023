import { useState } from 'react'
import './assets/css/Menu.css'

const Menu = () => {
  
  
 
 // to change burger classes
 const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
 const [menu_class, setMenuClass] = useState("menu hidden")
 const [isMenuClicked, setIsMenuClicked] = useState(false)
 const currentPath = window.location.pathname;
 // toggle burger menu change
 const updateMenu = () => {
     if(!isMenuClicked) {
        document.getElementById("html").classList.add("off-overflow")
         setBurgerClass("burger-bar clicked")
         setMenuClass("menu visible")
         if (currentPath == "/design"){
          document.getElementById("design-color").classList.add("color-active-href")
          document.getElementById("app-color").classList.remove("color-active-href")
          document.getElementById("web-color").classList.remove("color-active-href")
        }else if (currentPath == "/web-development"){
          document.getElementById("web-color").classList.add("color-active-href")
          document.getElementById("app-color").classList.remove("color-active-href")
          document.getElementById("design-color").classList.remove("color-active-href")
        }else if (currentPath == "/application-development"){
          document.getElementById("app-color").classList.add("color-active-href")
          document.getElementById("web-color").classList.remove("color-active-href")
          document.getElementById("design-color").classList.remove("color-active-href")
        }
     }
     else {
      document.getElementById("html").classList.remove("off-overflow")
         setBurgerClass("burger-bar unclicked")
         setMenuClass("menu hidden")
     }
     setIsMenuClicked(!isMenuClicked)
 }



 return(
 
     <section className='menu-bar-inside' >

         <menu id='menu'>
          
            <div className={isMenuClicked ? "menu-bars menuOnDisplay" : "menu-bars"}>

                <button id='logotype' className={isMenuClicked ? "logotype onDisplay" : "logotype"}> 
                  <a href="/">
                    
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>p</span>
                    <span>l</span>
                    <span>e</span>
                    <span>x</span>
                  </a>
                </button>
          
            <button className={burger_class} onClick={updateMenu}>
              <h2 className='text-menu'>МЕНЮ</h2>
              <div className="lines-bars">
                <div className="line-bar"></div>
                <div className="line-bar"></div>
                <div className="line-bar"></div>
              </div>
             </button>
            </div>
         </menu>

        <div className={menu_class}>
          
          <div className="content">
            <div className="background-sticky">
            <div className={isMenuClicked ? "background background-go" : "background"}>
            <div className="background-sqr"></div>
            <div className="background-tringled"></div>
          </div>
            </div>
            <div className="navigate">
              <h2><a className='web-color' id='web-color' href="/web-development">WEB-РАЗРАБОТКА</a></h2>
              <h2><a className='design-color' id='design-color' href="/design">DESIGN</a></h2>
              <h2><a className='app-color' id='app-color' href="/application-development">APP-РАЗРАБОТКА</a></h2>
              <h3><a className='works-teg' id='works-color' href="/works">Работы</a></h3>
              <h3><a className='blog-teg' id='blog-color' href="/blog">Блог</a></h3>
              <h3><a className='contacts-teg' id='contacts-color' href="/contacts">Контакты</a></h3>
            </div>
          </div>
        </div>

     </section>

 
 )
}

export default Menu
