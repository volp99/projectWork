import React from "react";

const Indicator=() =>{
    const stato = 145;
    const min = 100;
    const max = 150;
    return(


                <polygon
                    points="70,75 80,75 75,30"
                    transform = {"rotate("+(-150+(300*(stato-min)/(max-min)))+",75,75)"}
                />

    )
}
export default Indicator;