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
const red= {color:'white', backgroundColor:'rgb(211, 57, 47)', borderRadius:5}
/*  Value   */
const tempVal = '° F';
const presVal = ' psi';
const umiVal = ' THI';
const liveVal = ' m³';

const CisternaSette = (props) => {
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
                                    <Card title=  {item.CisternaSette.temperatura.title} bordered={false} style={CardStyle}  elevation={80}>
                                        <Circle stato={item.CisternaSette.temperatura.corrente}
                                                min={item.CisternaSette.temperatura.minima}
                                                rossoGiallo={item.CisternaSette.temperatura.rossoGiallo}
                                                gialloVerde={item.CisternaSette.temperatura.gialloVerde}
                                                verdeGiallo={item.CisternaSette.temperatura.verdeGiallo}
                                                gialloRosso={item.CisternaSette.temperatura.gialloRosso}
                                                max={item.CisternaSette.temperatura.massima}
                                        />

                                        <div id="current">
                                            <span>{item.CisternaSette.temperatura.corrente}{tempVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaSette.pressione.title} bordered={false} style={CardStyle}>
                                        <Circle stato={item.CisternaSette.pressione.corrente}
                                                min={item.CisternaSette.pressione.minima}
                                                rossoGiallo={item.CisternaSette.pressione.rossoGiallo}
                                                gialloVerde={item.CisternaSette.pressione.gialloVerde}
                                                verdeGiallo={item.CisternaSette.pressione.verdeGiallo}
                                                gialloRosso={item.CisternaSette.pressione.gialloRosso}
                                                max={item.CisternaSette.pressione.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaSette.pressione.corrente}{presVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaSette.umidità.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaSette.umidità.corrente}
                                                min={item.CisternaSette.umidità.minima}
                                                rossoGiallo={item.CisternaSette.umidità.rossoGiallo}
                                                gialloVerde={item.CisternaSette.umidità.gialloVerde}
                                                verdeGiallo={item.CisternaSette.umidità.verdeGiallo}
                                                gialloRosso={item.CisternaSette.umidità.gialloRosso}
                                                max={item.CisternaSette.umidità.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaSette.umidità.corrente}{umiVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaSette.livello.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaSette.livello.corrente}
                                                min={item.CisternaSette.livello.minima}
                                                rossoGiallo={item.CisternaSette.livello.rossoGiallo}
                                                gialloVerde={item.CisternaSette.livello.gialloVerde}
                                                verdeGiallo={item.CisternaSette.livello.verdeGiallo}
                                                gialloRosso={item.CisternaSette.livello.gialloRosso}
                                                max={item.CisternaSette.livello.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaSette.livello.corrente}{liveVal}</span>
                                        </div>
                                    </Card>
                                </div>
                            </Typography>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <FaThermometerFull style={{fontSize: "20px"}} /> {item.CisternaSette.temperatura.title}</span>
                                <span id="data">Min: {item.CisternaSette.temperatura.minima}{tempVal}</span>
                                <span id="data">Max: {item.CisternaSette.temperatura.massima}{tempVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <OpacityIcon  style={{fontSize: "20px"}}/> {item.CisternaSette.umidità.title}</span>
                                <span id="data">Min: {item.CisternaSette.umidità.minima}{umiVal}</span>
                                <span id="data">Max: {item.CisternaSette.umidità.massima}{umiVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <SiMattermost/> {item.CisternaSette.pressione.title}</span>
                                <span id="data">Min: {item.CisternaSette.pressione.minima}{presVal}</span>
                                <span id="data">Max: {item.CisternaSette.pressione.massima}{presVal}</span>
                            </Paper>


                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <FaPercent/> {item.CisternaSette.livello.title}</span>
                                <span id="data">Min: {item.CisternaSette.livello.minima}{liveVal}</span>
                                <span id="data">Max: {item.CisternaSette.livello.massima}{liveVal}</span>
                            </Paper>
                        </div>
                    ))}
                </>
            ) : null}
        </>
    )
}

export default CisternaSette;