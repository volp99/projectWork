import React from "react";
import {useState, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import {Card} from "antd";
import Circle from "../../components/commons/Circle";
import Paper from "@material-ui/core/Paper";
import {FaPercent, FaThermometerFull, SiMattermost} from "react-icons/all";
import OpacityIcon from "@material-ui/icons/Opacity";
import ErrorServer from "../../components/commons/ErrorServer";
import Loading from "../../components/commons/Loader";
import {useFetch} from "../../components/commons/Fetch";


/*  Compoentents Style  */
const TypoStyle = {
    display: "flex", flexFlow:"row", justifyContent:"center", alignContent:"flex-start", alignItems:"flex-start"
}
const CardStyle = {
    width: 190, borderRadius:10, height: 300
}
/*  Value   */
const tempVal = '° F';
const presVal = ' psi';
const umiVal = ' THI';
const liveVal = ' m³';

const CisternaCinque = (props) => {
    const {
        data,
        isLoading,
        error,
        fetchAgain
    } = useFetch("http://localhost:8000/Dati", "GET")
    const [timerCount, setTimerCount] = useState(0)

    useEffect(() => {
        let a = setInterval(() => {
            setTimerCount(x => x+1)
        }, 1000)

        return function cleanup(){
            clearInterval(a)
        }
    }, [])

    useEffect(() => {
        if (timerCount === 10){
            fetchAgain()
            setTimerCount(0)
        }
    }, [timerCount])

    return (
        <>
            {isLoading ? (
                <Loading/>
            ) : error !== null ? (
                <ErrorServer/>
            ) : data !== null ? (
                <>
                    {data.map(item => (
                        <div key={item.id}>

                            <Typography component="div"  style={TypoStyle}>
                                <div className="site-card-border-less-wrapper">
                                    <Card title=  {item.CisternaCinque.temperatura.title} bordered={false} style={CardStyle}  elevation={80}>
                                        <Circle stato={item.CisternaCinque.temperatura.corrente}
                                                min={item.CisternaCinque.temperatura.minima}
                                                rossoGiallo={item.CisternaCinque.temperatura.rossoGiallo}
                                                gialloVerde={item.CisternaCinque.temperatura.gialloVerde}
                                                verdeGiallo={item.CisternaCinque.temperatura.verdeGiallo}
                                                gialloRosso={item.CisternaCinque.temperatura.gialloRosso}
                                                max={item.CisternaCinque.temperatura.massima}
                                        />

                                        <div id="current">
                                            <span>{item.CisternaCinque.temperatura.corrente}{tempVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaCinque.pressione.title} bordered={false} style={CardStyle}>
                                        <Circle stato={item.CisternaCinque.pressione.corrente}
                                                min={item.CisternaCinque.pressione.minima}
                                                rossoGiallo={item.CisternaCinque.pressione.rossoGiallo}
                                                gialloVerde={item.CisternaCinque.pressione.gialloVerde}
                                                verdeGiallo={item.CisternaCinque.pressione.verdeGiallo}
                                                gialloRosso={item.CisternaCinque.pressione.gialloRosso}
                                                max={item.CisternaCinque.pressione.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaCinque.pressione.corrente}{presVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaCinque.umidità.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaCinque.umidità.corrente}
                                                min={item.CisternaCinque.umidità.minima}
                                                rossoGiallo={item.CisternaCinque.umidità.rossoGiallo}
                                                gialloVerde={item.CisternaCinque.umidità.gialloVerde}
                                                verdeGiallo={item.CisternaCinque.umidità.verdeGiallo}
                                                gialloRosso={item.CisternaCinque.umidità.gialloRosso}
                                                max={item.CisternaCinque.umidità.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaCinque.umidità.corrente}{umiVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaCinque.livello.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaCinque.livello.corrente}
                                                min={item.CisternaCinque.livello.minima}
                                                rossoGiallo={item.CisternaCinque.livello.rossoGiallo}
                                                gialloVerde={item.CisternaCinque.livello.gialloVerde}
                                                verdeGiallo={item.CisternaCinque.livello.verdeGiallo}
                                                gialloRosso={item.CisternaCinque.livello.gialloRosso}
                                                max={item.CisternaCinque.livello.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaCinque.livello.corrente}{liveVal}</span>
                                        </div>
                                    </Card>
                                </div>
                            </Typography>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <FaThermometerFull style={{fontSize: "20px"}} /> {item.CisternaCinque.temperatura.title}</span>
                                <span id="data">Min: {item.CisternaCinque.temperatura.minima}{tempVal}</span>
                                <span id="data">Max: {item.CisternaCinque.temperatura.massima}{tempVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <OpacityIcon  style={{fontSize: "20px"}}/> {item.CisternaCinque.umidità.title}</span>
                                <span id="data">Min: {item.CisternaCinque.umidità.minima}{umiVal}</span>
                                <span id="data">Max: {item.CisternaCinque.umidità.massima}{umiVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <SiMattermost/> {item.CisternaCinque.pressione.title}</span>
                                <span id="data">Min: {item.CisternaCinque.pressione.minima}{presVal}</span>
                                <span id="data">Max: {item.CisternaCinque.pressione.massima}{presVal}</span>
                            </Paper>


                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <FaPercent/> {item.CisternaCinque.livello.title}</span>
                                <span id="data">Min: {item.CisternaCinque.livello.minima}{liveVal}</span>
                                <span id="data">Max: {item.CisternaCinque.livello.massima}{liveVal}</span>
                            </Paper>
                        </div>
                    ))}
                </>
            ) : null}
        </>
    )
}

export default CisternaCinque;