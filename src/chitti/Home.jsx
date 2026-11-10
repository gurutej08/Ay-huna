import React from 'react'
import Gemini_Generated_Image_jyv5mijyv5mijyv5 from '../assets/Gemini_Generated_Image_jyv5mijyv5mijyv5.png'
import { useState } from 'react'
import { useEffect } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import Lobby from './Lobby'
import Screenshot_2025 from "../assets/Screenshot_2025.png"
import Hostzone from './Hostzone'

const Home = () => {
    const navigate=useNavigate()
    function handleclick(){
        navigate("/lobby");
    }
    function handleclicks(){
        navigate("/Hostzone")
    }
    const [bg, setbg] = useState({background: `linear-gradient(120deg,rgba(226, 28, 212, 0.9) )`})
    useEffect(() => {
        const intervel=setInterval(() => {
            let random=Math.random();
            let random1=Math.random();
            let random2=Math.random();

            let a=200+(Math.ceil(random*75));
            let b=(Math.ceil(random1*50));
            let c=120+(Math.ceil(random2*155));

            let random3 = Math.random();
            let random4 = Math.random();
            let random5 = Math.random();

            let d = 180 + Math.ceil(random3 * 75);
            let e = Math.ceil(random4 * 50);
            let f = 100 + Math.ceil(random5 * 155);
            setbg({background: `linear-gradient(120deg,rgb(${a},${b},${c}, 1),rgba(${d},${e},${f})`});
        },500)
        return ()=>{
            clearInterval(intervel);
        }    
    }, [bg])      
  return (
    <div className="creation">
        <div className='container' style={bg} >
        
        <div className='logo'>
            <img src={Screenshot_2025} alt="logo"/>
            <h1 style={{color:'black'}}> SHoOo..! </h1>
        </div>
        <div className='main-buttons'>
            <div className="host">
                <div className="btncreate" onClick={handleclicks}>
                    Create Game
                </div>
            </div>
            <div className="join">
                <div className='btnjoin'  onClick={handleclick}>
                    Join game
                </div>
            </div>
            <div className="quote">
                hope you enjoy the game ,lets go guys👍
            </div>

        </div>
        
    </div>
    </div>
  )
}

export default Home
