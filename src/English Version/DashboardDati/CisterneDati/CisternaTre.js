import React from "react";
import {useState, useEffect} from "react";
import Typography from "@material-ui/core/Typography";
import {Card} from "antd";
import Circle from "../../components/commons/Circle";
import Paper from "@material-ui/core/Paper";
import {FaPercent, FaThermometerFull, SiMattermost} from "react-icons/all";
import OpacityIcon from "@material-ui/icons/Opacity";
import ErrorServer from "../../../components/commons/ErrorServer";
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

const CisternaTre = (props) => {
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
                                    <Card title=  {item.CisternaTre.temperatura.titleeng} bordered={false} style={CardStyle}  elevation={80}>
                                        <Circle stato={item.CisternaTre.temperatura.corrente}
                                                min={item.CisternaTre.temperatura.minima}
                                                rossoGiallo={item.CisternaTre.temperatura.rossoGiallo}
                                                gialloVerde={item.CisternaTre.temperatura.gialloVerde}
                                                verdeGiallo={item.CisternaTre.temperatura.verdeGiallo}
                                                gialloRosso={item.CisternaTre.temperatura.gialloRosso}
                                                max={item.CisternaTre.temperatura.massima}
                                        />

                                        <div id="current">
                                            <span>{item.CisternaTre.temperatura.corrente}{tempVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaTre.pressione.titleeng} bordered={false} style={CardStyle}>
                                        <Circle stato={item.CisternaTre.pressione.corrente}
                                                min={item.CisternaTre.pressione.minima}
                                                rossoGiallo={item.CisternaTre.pressione.rossoGiallo}
                                                gialloVerde={item.CisternaTre.pressione.gialloVerde}
                                                verdeGiallo={item.CisternaTre.pressione.verdeGiallo}
                                                gialloRosso={item.CisternaTre.pressione.gialloRosso}
                                                max={item.CisternaTre.pressione.massima}
                                        />

                                        <div id="current">
                                            <span>{item.CisternaTre.pressione.corrente}{presVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaTre.umidità.titleeng} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaTre.umidità.corrente}
                                                min={item.CisternaTre.umidità.minima}
                                                rossoGiallo={item.CisternaTre.umidità.rossoGiallo}
                                                gialloVerde={item.CisternaTre.umidità.gialloVerde}
                                                verdeGiallo={item.CisternaTre.umidità.verdeGiallo}
                                                gialloRosso={item.CisternaTre.umidità.gialloRosso}
                                                max={item.CisternaTre.umidità.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaTre.umidità.corrente}{umiVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaTre.livello.titleeng} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaTre.livello.corrente}
                                                min={item.CisternaTre.livello.minima}
                                                rossoGiallo={item.CisternaTre.livello.rossoGiallo}
                                                gialloVerde={item.CisternaTre.livello.gialloVerde}
                                                verdeGiallo={item.CisternaTre.livello.verdeGiallo}
                                                gialloRosso={item.CisternaTre.livello.gialloRosso}
                                                max={item.CisternaTre.livello.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaTre.livello.corrente}{liveVal}</span>
                                        </div>
                                    </Card>
                                </div>
                            </Typography>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <FaThermometerFull style={{fontSize: "20px"}} /> {item.CisternaTre.temperatura.titleeng}</span>
                                <span id="data">Min: {item.CisternaTre.temperatura.minima}{tempVal}</span>
                                <span id="data">Max: {item.CisternaTre.temperatura.massima}{tempVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <OpacityIcon  style={{fontSize: "20px"}}/> {item.CisternaTre.umidità.titleeng}</span>
                                <span id="data">Min: {item.CisternaTre.umidità.minima}{umiVal}</span>
                                <span id="data">Max: {item.CisternaTre.umidità.massima}{umiVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <SiMattermost/> {item.CisternaTre.pressione.titleeng}</span>
                                <span id="data">Min: {item.CisternaTre.pressione.minima}{presVal}</span>
                                <span id="data">Max: {item.CisternaTre.pressione.massima}{presVal}</span>
                            </Paper>


                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <FaPercent/> {item.CisternaTre.livello.titleeng}</span>
                                <span id="data">Min: {item.CisternaTre.livello.minima}{liveVal}</span>
                                <span id="data">Max: {item.CisternaTre.livello.massima}{liveVal}</span>
                            </Paper>
                        </div>
                    ))}
                </>
            ) : null}
        </>
    )
}
export default CisternaTre;