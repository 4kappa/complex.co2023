import React from "react";

import "./assets/css/ModalMenu.css";

const ModalMenu = ({active, setActive, }) => {
    return (

        
        <div className={active ? "modal active-modal-menu" : "modal"} onClick={() => setActive(false)} >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="bars-menu">
                    <div className="close-wrap">
                        <div className="close-btn">
                            <button onClick={() => setActive(false)} className='bars-button'><div className="bars"><div className="barsolo"></div><div className="barsolo"></div><div className="barsolo"></div></div></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
};


export default ModalMenu;