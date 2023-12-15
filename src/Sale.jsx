
import React from 'react';
import './assets/css/sale.css'


function Sale() {
 
  return (
    <>
        <section className='sale'>
            <div className="blocks-sale">
              <div className="bag-block">
                <img src="./public/case.png" alt="" />
              </div>
              <div className="text-block">
                <h2>СКИДКИ НА ЗАКАЗ ДО 10%</h2>
                <h3>До конца года скидки на все услуги от нашей <br/> веб-студии по промокоду <strong>YEAR2023</strong></h3>
              </div>
            </div>
        </section>
    </>
  )
}

export default Sale
