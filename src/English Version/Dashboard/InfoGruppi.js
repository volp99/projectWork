import React, { useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CisterneGruppoDueEng from "./Cisterne/CisterneGruppoDueEng";
import CisterneGruppoUnoEng from "./Cisterne/CisterneGruppoUnoEng";
import Loader from "react-loader-spinner";

 export default function Inforuppi() {
    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);


    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/CisternaUno")
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setData(json);
                    setDone(true);
                });
        }, 1150);
    }, []);
    return (
        <>
        {!done ? (
            <div className="loader flex-center">
                <Loader
                    type="Circles"
                    color="#F4A261"
                    height={150}
                    width={150}
                />
            </div>
    ) : (

        <React.Fragment>
            <CssBaseline />
            <Container fixed disableGutters={false}>
                <Typography component="div" style={{ height: '70vh', display:'flex', flexFlow:'row' }}>
                    <Typography component="div" style={{  height: '105vh', display:'flex', flexFlow:'row', width:'100%' }}>
                        <Typography component="div" style={{height: '102vh', display:'flex', flexFlow:'row', width:'100%', margin:'0px 10px', borderRadius:'20px', backgroundColor:'#fce3cf'}}>
                        <CisterneGruppoUnoEng/>
                            </Typography>
                    </Typography>
                    <Typography component="div" style={{ height: '102vh', display:'flex', flexFlow:'row', width:'100%',  margin:'0px 10px', borderRadius:'20px', backgroundColor:'#fce3cf'}}>
                           <CisterneGruppoDueEng/>
                    </Typography>
                </Typography>
            </Container>
        </React.Fragment>
        )}
        </>
    );
 }