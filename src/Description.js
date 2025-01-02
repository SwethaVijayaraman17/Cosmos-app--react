import React from "react";

const Description = (props) => {

    const { obj: { img, planet, Discoveredby,
        Discoverydate, Avgtemp, Dimension,
        Mass, Volume, Density,
        Gravity, Radius, Semimajoraxis,
        Perihelion, Aphelion, Inclination },setdescription } = props
    return (
        <div id='description'>
            <button onClick={()=>setdescription('')} id='back'>Back</button>
            <h1>{planet}</h1>
            <div id='information'>
                <img src={img} id='des_img' />

                <div id="info">
                    <p>Discovered By : {Discoveredby}</p>
                    <p>Discovered Date : {Discoverydate}</p>
                    <p>Average Temperature : {Avgtemp}</p>
                    <p>Dimension : {Dimension}</p>
                    <p>Mass : {Mass}</p>
                    <p>Volume : {Volume}</p>
                    <p>Density : {Density}</p>
                    <p>Gravity : {Gravity}</p>
                    <p>Radius : {Radius}</p>
                    <p>Semimajoraxis : {Semimajoraxis}</p>
                    <p>Perihelion : {Perihelion}</p>
                    <p>Aphelion : {Aphelion}</p>
                    <p>Inclination : {Inclination}</p>
                </div>

            </div>
        </div>
    )
}


export default Description