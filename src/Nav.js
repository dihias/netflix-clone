import React from 'react'
import "./Nav.css"
import { useState , useEffect } from 'react'

function Nav() {

  const [show, handleShow] = useState(false);
        useEffect(() => {
          window.addEventListener("scroll",( )=> {
            if(window.scrollY>100){
              handleShow(true);
            } else handleShow(false);
            
          });

          return () =>{
            window.removeEventListener('scroll',()=>{});
          };
        },[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo'
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="NETFLIX logo"/>


        <img className='nav__avatar'
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        alt="Nav avatar"/>
    </div>
  );
}

export default Nav