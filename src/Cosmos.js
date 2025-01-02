import React, { useState } from "react";
import {cosmos} from './CosmosJson'
import Description from "./Description";
import { useNavigate } from "react-router-dom";

const Cosmos = () =>{
   
    const navigate =useNavigate()
    const [description,setdescription] = useState('')

    const handleTab = () =>{
        navigate('/')
    }

    return(
       (description==='') ? <div id='cosmos'>
            <h1>The Planets</h1>
            <div id='planets'>
                {cosmos.map((obj)=>{
                    return(
                        <div className="planet_div" id={`planet${obj.id}`} onClick={()=>setdescription(obj)}>
                            <div id='img_div'><img src={obj.img} id={`planetImg${obj.id}`}/></div>
                            <p id={`planetName${obj.id}`}>{obj.planet}</p>
                       </div>
                    )
                })}
            </div>
                <button id='back' className="cosmos_back" onClick={()=>handleTab()}>Back</button>
        </div> : <Description obj={description} setdescription={setdescription} />
    )
}

export default Cosmos;