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
const yellow= {backgroundColor:'rgb(255,153,1)', borderRadius:5}
/*  Value   */
const tempVal = '° F';
const presVal = ' psi';
const umiVal = ' THI';
const liveVal = ' m³';

const CisternaSei = (props) => {
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
                                    <Card title=  {item.CisternaSei.temperatura.title} bordered={false} style={CardStyle}  elevation={80}>
                                        <Circle stato={item.CisternaSei.temperatura.corrente}
                                                min={item.CisternaSei.temperatura.minima}
                                                rossoGiallo={item.CisternaSei.temperatura.rossoGiallo}
                                                gialloVerde={item.CisternaSei.temperatura.gialloVerde}
                                                verdeGiallo={item.CisternaSei.temperatura.verdeGiallo}
                                                gialloRosso={item.CisternaSei.temperatura.gialloRosso}
                                                max={item.CisternaSei.temperatura.massima}
                                        />

                                        <div id="current">
                                            <span>{item.CisternaSei.temperatura.corrente}{tempVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaSei.pressione.title} bordered={false} style={CardStyle}>
                                        <Circle stato={item.CisternaSei.pressione.corrente}
                                                min={item.CisternaSei.pressione.minima}
                                                rossoGiallo={item.CisternaSei.pressione.rossoGiallo}
                                                gialloVerde={item.CisternaSei.pressione.gialloVerde}
                                                verdeGiallo={item.CisternaSei.pressione.verdeGiallo}
                                                gialloRosso={item.CisternaSei.pressione.gialloRosso}
                                                max={item.CisternaSei.pressione.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaSei.pressione.corrente}{presVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaSei.umidità.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaSei.umidità.corrente}
                                                min={item.CisternaSei.umidità.minima}
                                                rossoGiallo={item.CisternaSei.umidità.rossoGiallo}
                                                gialloVerde={item.CisternaSei.umidità.gialloVerde}
                                                verdeGiallo={item.CisternaSei.umidità.verdeGiallo}
                                                gialloRosso={item.CisternaSei.umidità.gialloRosso}
                                                max={item.CisternaSei.umidità.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaSei.umidità.corrente}{umiVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaSei.livello.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaSei.livello.corrente}
                                                min={item.CisternaSei.livello.minima}
                                                rossoGiallo={item.CisternaSei.livello.rossoGiallo}
                                                gialloVerde={item.CisternaSei.livello.gialloVerde}
                                                verdeGiallo={item.CisternaSei.livello.verdeGiallo}
                                                gialloRosso={item.CisternaSei.livello.gialloRosso}
                                                max={item.CisternaSei.livello.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaSei.livello.corrente}{liveVal}</span>
                                        </div>
                                    </Card>
                                </div>
                            </Typography>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <FaThermometerFull style={{fontSize: "20px"}} /> {item.CisternaSei.temperatura.title}</span>
                                <span id="data">Min: {item.CisternaSei.temperatura.minima}{tempVal}</span>
                                <span id="data">Max: {item.CisternaSei.temperatura.massima}{tempVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <OpacityIcon  style={{fontSize: "20px"}}/> {item.CisternaSei.umidità.title}</span>
                                <span id="data">Min: {item.CisternaSei.umidità.minima}{umiVal}</span>
                                <span id="data">Max: {item.CisternaSei.umidità.massima}{umiVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <SiMattermost/> {item.CisternaSei.pressione.title}</span>
                                <span id="data">Min: {item.CisternaSei.pressione.minima}{presVal}</span>
                                <span id="data">Max: {item.CisternaSei.pressione.massima}{presVal}</span>
                            </Paper>


                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <FaPercent/> {item.CisternaSei.livello.title}</span>
                                <span id="data">Min: {item.CisternaSei.livello.minima}{liveVal}</span>
                                <span id="data">Max: {item.CisternaSei.livello.massima}{liveVal}</span>
                            </Paper>
                        </div>
                    ))}
                </>
            ) : null}
        </>
    )
}

export default CisternaSei;