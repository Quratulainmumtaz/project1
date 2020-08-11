import React,{useEffect, useRef} from 'react';
import './Cockpit.css';
import  authcontex from '../context/auth-contex';
const Cockpit = (props)=>{
//Ref with react hook
const togglebtnRef = useRef(null);
  useEffect( ()=>{
    console.log('[Cockpi.js] useEffect');
    // setTimeout(()=>{
    //   alert('saved this data to cloude');
    // },1000);
    togglebtnRef.current.click();
    return ()=>{
     
      console.log('[Cockpit.js] cleanup work with useeffect');

    };

  },[] );
  useEffect(()=>{
    console.log('[Cockpi.js] useEffect');
    return()=>{
      
      console.log(['Cockpit.js clean up 2nd use effect']);
    };
  });
    return(
        <div className="Cockpit">
        <h1> Hi, /I am Qurat Ul Ain Mumtaz </h1>
        <p className="para1">  I am internr in Nesl IT</p>
        <button ref={togglebtnRef} onClick={props.clicked_toggle} className="button2">Togglar Button</button>
        <authcontex.Consumer>
          {(context)=><button className="button1" onClick={context.login}>Login </button> }
          </authcontex.Consumer> 
        </div>
       
    );
}
export default React.memo(Cockpit);