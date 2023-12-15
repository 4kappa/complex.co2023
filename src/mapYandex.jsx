import React, { Component } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './assets/css/mapYandex.css'
const MapYandex = () => {
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
    return (
        <>
            <div className='mapForContact'>
            <YMaps >
                <Map defaultState={defaultState}  width='100%' height='100%' id='MapYandex'>
                    <Placemark geometry={[51.818422, 55.1481051]}/>
                    </Map>
                </YMaps>
            </div>
        </>

        );
}


export default MapYandex;
