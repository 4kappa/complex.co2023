
import React from 'react';
import './assets/css/AddBanner.css'

function AddBanner() {
 
  return (
    <>
    
        <section className='add'>
          <div className="blocks">
            <div className="block-left">
              <h2>ПРОДАЮЩИЙ САЙТ <br/> С СОВРЕМЕННЫМ ДИЗАЙНОМ</h2>
              <h3>Поможет вам оставить позади ваших конкурентов! <br/> Создадим эксклюзивно для ВАС. 
                Скорость <br/> и качество продукта вас приятно удивит!
              </h3>
              <button className='call-us'>СВЯЗАТЬСЯ С НАМИ</button>
            </div>
            <div className="block-right">
              <img src="./macbook.png" alt="" />
            </div>
          </div>
        </section>

    </>
  )
}

export default AddBanner
