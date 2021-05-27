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

const CisternaQuattro = (props) => {
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
                                    <Card title=  {item.CisternaQuattro.temperatura.title} bordered={false} style={CardStyle}  elevation={80}>
                                        <Circle stato={item.CisternaQuattro.temperatura.corrente}
                                                min={item.CisternaQuattro.temperatura.minima}
                                                rossoGiallo={item.CisternaQuattro.temperatura.rossoGiallo}
                                                gialloVerde={item.CisternaQuattro.temperatura.gialloVerde}
                                                verdeGiallo={item.CisternaQuattro.temperatura.verdeGiallo}
                                                gialloRosso={item.CisternaQuattro.temperatura.gialloRosso}
                                                max={item.CisternaQuattro.temperatura.massima}
                                        />

                                        <div id="current">
                                            <span>{item.CisternaQuattro.temperatura.corrente}{tempVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaQuattro.pressione.title} bordered={false} style={CardStyle}>
                                        <Circle stato={item.CisternaQuattro.pressione.corrente}
                                                min={item.CisternaQuattro.pressione.minima}
                                                rossoGiallo={item.CisternaQuattro.pressione.rossoGiallo}
                                                gialloVerde={item.CisternaQuattro.pressione.gialloVerde}
                                                verdeGiallo={item.CisternaQuattro.pressione.verdeGiallo}
                                                gialloRosso={item.CisternaQuattro.pressione.gialloRosso}
                                                max={item.CisternaQuattro.pressione.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaQuattro.pressione.corrente}{presVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaQuattro.umidità.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaQuattro.umidità.corrente}
                                                min={item.CisternaQuattro.umidità.minima}
                                                rossoGiallo={item.CisternaQuattro.umidità.rossoGiallo}
                                                gialloVerde={item.CisternaQuattro.umidità.gialloVerde}
                                                verdeGiallo={item.CisternaQuattro.umidità.verdeGiallo}
                                                gialloRosso={item.CisternaQuattro.umidità.gialloRosso}
                                                max={item.CisternaQuattro.umidità.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaQuattro.umidità.corrente}{umiVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaQuattro.livello.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaQuattro.livello.corrente}
                                                min={item.CisternaQuattro.livello.minima}
                                                rossoGiallo={item.CisternaQuattro.livello.rossoGiallo}
                                                gialloVerde={item.CisternaQuattro.livello.gialloVerde}
                                                verdeGiallo={item.CisternaQuattro.livello.verdeGiallo}
                                                gialloRosso={item.CisternaQuattro.livello.gialloRosso}
                                                max={item.CisternaQuattro.livello.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaQuattro.livello.corrente}{liveVal}</span>
                                        </div>
                                    </Card>
                                </div>
                            </Typography>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <FaThermometerFull style={{fontSize: "20px"}} /> {item.CisternaQuattro.temperatura.title}</span>
                                <span id="data">Min: {item.CisternaQuattro.temperatura.minima}{tempVal}</span>
                                <span id="data">Max: {item.CisternaQuattro.temperatura.massima}{tempVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <OpacityIcon  style={{fontSize: "20px"}}/> {item.CisternaQuattro.umidità.title}</span>
                                <span id="data">Min: {item.CisternaQuattro.umidità.minima}{umiVal}</span>
                                <span id="data">Max: {item.CisternaQuattro.umidità.massima}{umiVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <SiMattermost/> {item.CisternaQuattro.pressione.title}</span>
                                <span id="data">Min: {item.CisternaQuattro.pressione.minima}{presVal}</span>
                                <span id="data">Max: {item.CisternaQuattro.pressione.massima}{presVal}</span>
                            </Paper>


                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <FaPercent/> {item.CisternaQuattro.livello.title}</span>
                                <span id="data">Min: {item.CisternaQuattro.livello.minima}{liveVal}</span>
                                <span id="data">Max: {item.CisternaQuattro.livello.massima}{liveVal}</span>
                            </Paper>
                        </div>
                    ))}
                </>
            ) : null}
        </>
    )
}

export default CisternaQuattro;