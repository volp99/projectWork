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
const liveVal = ' gal';

const CisternaDue = (props) => {
    const {
        data,
        isLoading,
        error,
        fetchAgain
    } = useFetch("http://localhost:8000/CisternaDue", "GET")
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
                                    <Card title=  {item.temperatura.title} bordered={false} style={CardStyle}  elevation={80}>
                                        <Circle stato={item.temperatura.corrente}
                                                min={item.temperatura.minima}
                                                rossoGiallo={item.temperatura.rossoGiallo}
                                                gialloVerde={item.temperatura.gialloVerde}
                                                verdeGiallo={item.temperatura.verdeGiallo}
                                                gialloRosso={item.temperatura.gialloRosso}
                                                max={item.temperatura.massima}
                                        />

                                        <div id="current">
                                            <span>{item.temperatura.corrente}{tempVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.pressione.title} bordered={false} style={CardStyle}>
                                        <Circle stato={item.pressione.corrente}
                                                min={item.pressione.minima}
                                                rossoGiallo={item.pressione.rossoGiallo}
                                                gialloVerde={item.pressione.gialloVerde}
                                                verdeGiallo={item.pressione.verdeGiallo}
                                                gialloRosso={item.pressione.gialloRosso}
                                                max={item.pressione.massima}
                                        />

                                        <div id="current">
                                            <span>{item.pressione.corrente}{presVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.umidità.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.umidità.corrente}
                                                min={item.umidità.minima}
                                                rossoGiallo={item.umidità.rossoGiallo}
                                                gialloVerde={item.umidità.gialloVerde}
                                                verdeGiallo={item.umidità.verdeGiallo}
                                                gialloRosso={item.umidità.gialloRosso}
                                                max={item.umidità.massima}
                                        />
                                        <div id="current">
                                            <span style={red}>{item.umidità.corrente}{umiVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.livello.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.livello.corrente}
                                                min={item.livello.minima}
                                                rossoGiallo={item.livello.rossoGiallo}
                                                gialloVerde={item.livello.gialloVerde}
                                                verdeGiallo={item.livello.verdeGiallo}
                                                gialloRosso={item.livello.gialloRosso}
                                                max={item.livello.massima}
                                        />
                                        <div id="current">
                                            <span>{item.livello.corrente}{liveVal}</span>
                                        </div>
                                    </Card>
                                </div>
                            </Typography>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <FaThermometerFull style={{fontSize: "20px"}} /> {item.temperatura.title}</span>
                                <span id="data">Min: {item.temperatura.minima}{tempVal}</span>
                                <span id="data">Max: {item.temperatura.massima}{tempVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <OpacityIcon  style={{fontSize: "20px"}}/> {item.umidità.title}</span>
                                <span id="data">Min: {item.umidità.minima}{umiVal}</span>
                                <span id="data">Max: {item.umidità.massima}{umiVal}</span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data"> <SiMattermost/> {item.pressione.title}</span>
                                <span id="data">Min: {item.pressione.minima}{presVal}</span>
                                <span id="data">Max: {item.pressione.massima}{presVal}</span>
                            </Paper>


                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="data">  <FaPercent/> {item.livello.title}</span>
                                <span id="data">Min: {item.livello.minima}{liveVal}</span>
                                <span id="data">Max: {item.livello.massima}{liveVal}</span>
                            </Paper>
                        </div>
                    ))}
                </>
            ) : null}
        </>
    )
}
export default CisternaDue;
