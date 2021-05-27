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

const CisternaUno = (props) => {
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


    console.log(data);
    return (
        <>
            {isLoading ? (
                <Loading/>
            ) : error !== null ? (
                <ErrorServer/>
            ) : data !== null ? (
                <>
                    {(data).map(item => (
                        <div key={item.id}>

                            <Typography component="div"  style={TypoStyle}>
                                <div className="site-card-border-less-wrapper">
                                    <Card title=  {item.CisternaUno.temperatura.titleeng} bordered={false} style={CardStyle}  elevation={80}>
                                        <Circle
                                            stato={item.CisternaUno.temperatura.corrente}
                                            stato={item.CisternaUno.temperatura.corrente}
                                            min={item.CisternaUno.temperatura.minima}
                                            rossoGiallo={item.CisternaUno.temperatura.rossoGiallo}
                                            gialloVerde={item.CisternaUno.temperatura.gialloVerde}
                                            verdeGiallo={item.CisternaUno.temperatura.verdeGiallo}
                                            gialloRosso={item.CisternaUno.temperatura.gialloRosso}
                                            max={item.CisternaUno.temperatura.massima}
                                        />

                                        <div id="current">
                                            <span>{item.CisternaUno.temperatura.corrente}{tempVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaUno.pressione.titleeng} bordered={false} style={CardStyle}>
                                        <Circle
                                            stato={item.CisternaUno.pressione.corrente}
                                            min={item.CisternaUno.pressione.minima}
                                            rossoGiallo={item.CisternaUno.pressione.rossoGiallo}
                                            gialloVerde={item.CisternaUno.pressione.gialloVerde}
                                            verdeGiallo={item.CisternaUno.pressione.verdeGiallo}
                                            gialloRosso={item.CisternaUno.pressione.gialloRosso}
                                            max={item.CisternaUno.pressione.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaUno.pressione.corrente}{presVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaUno.umidità.titleeng} bordered={false} style={CardStyle} >
                                        <Circle
                                            stato={item.CisternaUno.umidità.corrente}
                                            min={item.CisternaUno.umidità.minima}
                                            rossoGiallo={item.CisternaUno.umidità.rossoGiallo}
                                            gialloVerde={item.CisternaUno.umidità.gialloVerde}
                                            verdeGiallo={item.CisternaUno.umidità.verdeGiallo}
                                            gialloRosso={item.CisternaUno.umidità.gialloRosso}
                                            max={item.CisternaUno.umidità.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaUno.umidità.corrente}{umiVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaUno.livello.titleeng} bordered={false} style={CardStyle} >
                                        <Circle
                                            stato={item.CisternaUno.livello.corrente}
                                            min={item.CisternaUno.livello.minima}
                                            rossoGiallo={item.CisternaUno.livello.rossoGiallo}
                                            gialloVerde={item.CisternaUno.livello.gialloVerde}
                                            verdeGiallo={item.CisternaUno.livello.verdeGiallo}
                                            gialloRosso={item.CisternaUno.livello.gialloRosso}
                                            max={item.CisternaUno.livello.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaUno.livello.corrente}{liveVal}</span>
                                        </div>
                                    </Card>
                                </div>
                            </Typography>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <FaThermometerFull style={{fontSize: "20px"}} /> {item.CisternaUno.temperatura.titleeng}</span>
                                <span id="data">Min: {item.CisternaUno.temperatura.minima}{tempVal}</span>
                                <span id="data">Max: {item.CisternaUno.temperatura.massima}{tempVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <OpacityIcon  style={{fontSize: "20px"}}/> {item.CisternaUno.umidità.titleeng}</span>
                                <span id="data">Min: {item.CisternaUno.umidità.minima}{umiVal}</span>
                                <span id="data">Max: {item.CisternaUno.umidità.massima}{umiVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <SiMattermost/> {item.CisternaUno.pressione.titleeng}</span>
                                <span id="data">Min: {item.CisternaUno.pressione.minima}{presVal}</span>
                                <span id="data">Max: {item.CisternaUno.pressione.massima}{presVal}</span>
                            </Paper>


                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <FaPercent/> {item.CisternaUno.livello.titleeng}</span>
                                <span id="data">Min: {item.CisternaUno.livello.minima}{liveVal}</span>
                                <span id="data">Max: {item.CisternaUno.livello.massima}{liveVal}</span>
                            </Paper>
                        </div>
                    ))}
                </>
            ) : null}
        </>
    )
}

export default CisternaUno;