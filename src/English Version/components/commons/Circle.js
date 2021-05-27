import React from "react";
const Circle=({stato, min, rossoGiallo, gialloVerde, verdeGiallo, gialloRosso, max})=> {
    const s = 2 * Math.PI * 50 / (max - min) * 5 / 6;
    const c = 2 * Math.PI * 50 / 360;
    return (

        <>
            <div>
                <svg viewBox="0 0 150 150">
                    rossa
                    <circle
                        cx = "75"
                        cy = "75"
                        r = "50"
                        fill = "transparent"
                        stroke = "#f44336"
                        strokeWidth = "8"
                        strokeDashoffset = {-120*c}
                        strokeDasharray= {(rossoGiallo-min)*s+","+(gialloRosso-rossoGiallo)*s+","+(max-gialloRosso)*s+","+60*c}
                        // strokeDasharray= "20,20,20,20"
                    />
                    <line
                        x1={75+(Math.cos(240*Math.PI/180))*47.5}
                        y1={75-(Math.sin(240*Math.PI/180))*47.5}
                        x2={75+(Math.cos(240*Math.PI/180))*55}
                        y2={75-(Math.sin(240*Math.PI/180))*55}
                        stroke="black"
                    />
                    <text
                        x={75+(Math.cos(240*Math.PI/180))*65}
                        y={75-(Math.sin(240*Math.PI/180))*65}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                    >{min}
                    </text>

                    <line
                        x1={75+(Math.cos(60*Math.PI/180))*47.5}
                        y1={75+(Math.sin(60*Math.PI/180))*47.5}
                        x2={75+(Math.cos(60*Math.PI/180))*55}
                        y2={75+(Math.sin(60*Math.PI/180))*55}
                        stroke="black"
                    />
                    <text
                        x={75+(Math.cos(60*Math.PI/180))*65}
                        y={75+(Math.sin(60*Math.PI/180))*65}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                    >{max}
                    </text>

                    gialla
                    <circle
                        cx = "75"
                        cy = "75"
                        r = "50"
                        fill = "transparent"
                        stroke = "#ffcc00"
                        strokeWidth = "8"
                        strokeDashoffset = {-(120*c+(rossoGiallo-min)*s)}
                        strokeDasharray= {(gialloVerde-rossoGiallo)*s+","+(verdeGiallo-gialloVerde)*s+","+(gialloRosso-verdeGiallo)*s+","+((max-gialloRosso+rossoGiallo-min)*s+60*c)}
                    />
                    <line
                        x1={75+(Math.cos(240*Math.PI/180-(rossoGiallo-min)*s/50))*47.5}
                        y1={75-(Math.sin(240*Math.PI/180-(rossoGiallo-min)*s/50))*47.5}
                        x2={75+(Math.cos(240*Math.PI/180-(rossoGiallo-min)*s/50))*55}
                        y2={75-(Math.sin(240*Math.PI/180-(rossoGiallo-min)*s/50))*55}
                        stroke="black"
                    />
                    <text
                        x={75+(Math.cos(240*Math.PI/180-(rossoGiallo-min)*s/50))*65}
                        y={75-(Math.sin(240*Math.PI/180-(rossoGiallo-min)*s/50))*65}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                    >{rossoGiallo}
                    </text>

                    <line
                        x1={75+(Math.cos(240*Math.PI/180-(gialloRosso-min)*s/50))*47.5}
                        y1={75-(Math.sin(240*Math.PI/180-(gialloRosso-min)*s/50))*47.5}
                        x2={75+(Math.cos(240*Math.PI/180-(gialloRosso-min)*s/50))*55}
                        y2={75-(Math.sin(240*Math.PI/180-(gialloRosso-min)*s/50))*55}
                        stroke="black"
                    />
                    <text
                        x={75+(Math.cos(240*Math.PI/180-(gialloRosso-min)*s/50))*65}
                        y={75-(Math.sin(240*Math.PI/180-(gialloRosso-min)*s/50))*65}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                    >{gialloRosso}
                    </text>
                    verde
                    <circle
                        cx = "75"
                        cy = "75"
                        r = "50"
                        fill = "transparent"
                        stroke = "#4caf50"
                        strokeWidth = "8"
                        strokeDashoffset = {-(120*c+(gialloVerde-min)*s)}
                        strokeDasharray= {(verdeGiallo-gialloVerde)*s+","+((max-verdeGiallo+gialloVerde-min)*s+60*c)}
                    />
                    <line
                        x1={75+(Math.cos(240*Math.PI/180-(gialloVerde-min)*s/50))*47.5}
                        y1={75-(Math.sin(240*Math.PI/180-(gialloVerde-min)*s/50))*47.5}
                        x2={75+(Math.cos(240*Math.PI/180-(gialloVerde-min)*s/50))*55}
                        y2={75-(Math.sin(240*Math.PI/180-(gialloVerde-min)*s/50))*55}
                        stroke="black"
                    />
                    <text
                        x={75+(Math.cos(240*Math.PI/180-(gialloVerde-min)*s/50))*65}
                        y={75-(Math.sin(240*Math.PI/180-(gialloVerde-min)*s/50))*65}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                    >{gialloVerde}
                    </text>

                    <line
                        x1={75+(Math.cos(240*Math.PI/180-(verdeGiallo-min)*s/50))*47.5}
                        y1={75-(Math.sin(240*Math.PI/180-(verdeGiallo-min)*s/50))*47.5}
                        x2={75+(Math.cos(240*Math.PI/180-(verdeGiallo-min)*s/50))*55}
                        y2={75-(Math.sin(240*Math.PI/180-(verdeGiallo-min)*s/50))*55}
                        stroke="black"
                    />
                    <text
                        x={75+(Math.cos(240*Math.PI/180-(verdeGiallo-min)*s/50))*65}
                        y={75-(Math.sin(240*Math.PI/180-(verdeGiallo-min)*s/50))*65}
                        textAnchor="middle"
                        alignmentBaseline="middle"
                    >{verdeGiallo}
                    </text>
                    centro
                    <circle
                        cx = "75"
                        cy = "75"
                        r="5"
                    />
                    lancetta
                    <polygon
                        points="70,75 80,75 75,30"
                        transform = {"rotate("+(-150+(300*(stato-min)/(max-min)))+",75,75)"}
                    />
                </svg>
            </div>
        </>
    )
}
export default Circle;