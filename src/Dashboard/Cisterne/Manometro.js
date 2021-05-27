import React from 'react';


function Manometro(){
    var min;
    var rossoGiallo;
    var gialloVerde;
    var verdeGiallo;
    var gialloRoso;
    var max;
    var first = 2 * 22 / 7 * 50;
    var second = 2 * 22 / 7 * 50 * 25 / 100;
    console.log(first);
    return(
        <div style={{position: 'relative'}}>
            <svg>
                {/* rossa minima */}
                <circle
                    cx = "50"
                    cy = "50"
                    r = "50"
                    fill = "transparent"
                    stroke = "red"
                    strokeWidth = "5"
                    strokeDashoffset = "-104.67"
                    strokeDasharray= "17.44,296.55"
                />
                {/* gialla minima */}
                <circle
                    cx = "50"
                    cy = "50"
                    r = "50"
                    fill = "transparent"
                    stroke = "yellow"
                    strokeWidth = "5"
                    strokeDashoffset = "-122.11"
                    strokeDasharray= "17.44,296.55"
                />
                {/* verde */}
                <circle
                    cx = "50"
                    cy = "50"
                    r = "50"
                    fill = "transparent"
                    stroke = "green"
                    strokeWidth = "5"
                    strokeDashoffset = "174.44"
                    strokeDasharray= "191.84,122.16"
                />
                {/* gialla massima */}
                <circle
                    cx = "50"
                    cy = "50"
                    r = "50"
                    fill = "transparent"
                    stroke = "yellow"
                    strokeWidth = "5"
                    strokeDashoffset = "-17.44"
                    strokeDasharray= "17.44,296.55"
                />
                {/* rossa massima */}
                <circle
                    cx = "50"
                    cy = "50"
                    r = "50"
                    fill = "transparent"
                    stroke = "red"
                    strokeWidth = "5"
                    strokeDashoffset = "-34.88"
                    strokeDasharray= "17.44,296.55"
                />
            </svg>
        </div>
    )   
}
export default Manometro;