import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    const handleTab = () =>{
        navigate('/cosmos')
    }
    return (
        <div id='home'>
            <h1>The Solar System</h1>

            <div id='content'>
                
                <div id='div1'>
                    <h2>Get to know our<br />neighbourhood better</h2>
                    <p>The Solar System is the gravitationally bound system of the Sun and the objects that orbit it. The largest of such objects are the eight planets, in order from the Sun: four terrestrial planets named Mercury, Venus, Earth and Mars, two gas giants named Jupiter and Saturn, and two ice giants named Uranus and Neptune. </p>
                    <button onClick={()=>handleTab()} >Start Exploring</button>
                </div>

                <img src={require('./images/cosmosBg.png')} />

            </div>
        </div>
    )
}

export default Home