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
import { Modal } from 'antd';
import { InputNumber } from 'antd';
import { BsFillPlusCircleFill } from "react-icons/bs";



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

const CisternaDueManagement = (props) => {
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
        }, 10000000)

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

    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const showModal = () => {
        setVisible(true);
      };

      const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);
        }, 2000);
      };
    
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
      };

      function onChange(value) {
        console.log('changed', value);
      }


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
                                    <Card title=  {item.CisternaDue.temperatura.title} bordered={false} style={CardStyle}  elevation={80}>
                                        <Circle stato={item.CisternaDue.temperatura.corrente}
                                                min={item.CisternaDue.temperatura.minima}
                                                rossoGiallo={item.CisternaDue.temperatura.rossoGiallo}
                                                gialloVerde={item.CisternaDue.temperatura.gialloVerde}
                                                verdeGiallo={item.CisternaDue.temperatura.verdeGiallo}
                                                gialloRosso={item.CisternaDue.temperatura.gialloRosso}
                                                max={item.CisternaDue.temperatura.massima}
                                        />

                                        <div id="current">
                                            <span>{item.CisternaDue.temperatura.corrente}{tempVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaDue.pressione.title} bordered={false} style={CardStyle}>
                                        <Circle stato={item.CisternaDue.pressione.corrente}
                                                min={item.CisternaDue.pressione.minima}
                                                rossoGiallo={item.CisternaDue.pressione.rossoGiallo}
                                                gialloVerde={item.CisternaDue.pressione.gialloVerde}
                                                verdeGiallo={item.CisternaDue.pressione.verdeGiallo}
                                                gialloRosso={item.CisternaDue.pressione.gialloRosso}
                                                max={item.CisternaDue.pressione.massima}
                                        />

                                        <div id="current">
                                            <span>{item.CisternaDue.pressione.corrente}{presVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaDue.umidità.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaDue.umidità.corrente}
                                                min={item.CisternaDue.umidità.minima}
                                                rossoGiallo={item.CisternaDue.umidità.rossoGiallo}
                                                gialloVerde={item.CisternaDue.umidità.gialloVerde}
                                                verdeGiallo={item.CisternaDue.umidità.verdeGiallo}
                                                gialloRosso={item.CisternaDue.umidità.gialloRosso}
                                                max={item.CisternaDue.umidità.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaDue.umidità.corrente}{umiVal}</span>
                                        </div>
                                    </Card>
                                </div>

                                <div className="site-card-border-less-wrapper">
                                    <Card title={item.CisternaDue.livello.title} bordered={false} style={CardStyle} >
                                        <Circle stato={item.CisternaDue.livello.corrente}
                                                min={item.CisternaDue.livello.minima}
                                                rossoGiallo={item.CisternaDue.livello.rossoGiallo}
                                                gialloVerde={item.CisternaDue.livello.gialloVerde}
                                                verdeGiallo={item.CisternaDue.livello.verdeGiallo}
                                                gialloRosso={item.CisternaDue.livello.gialloRosso}
                                                max={item.CisternaDue.livello.massima}
                                        />
                                        <div id="current">
                                            <span>{item.CisternaDue.livello.corrente}{liveVal}</span>
                                        </div>
                                    </Card>
                                </div>
                            </Typography>

                            <div className="info-limit">
                                <span>Clicca su <BsFillPlusCircleFill/> per modificare i valori</span>
                            </div>

                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="icon-limit"> <FaThermometerFull style={{fontSize: "20px"}} /> {item.CisternaDue.temperatura.title}</span>
                                <span id="min-limit1">Min: {item.CisternaDue.temperatura.minima}{tempVal}</span>
                                <span id="data">Max: {item.CisternaDue.temperatura.massima}{tempVal}</span>
                                <span id="button-plus1"><BsFillPlusCircleFill onClick={showModal}/></span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="icon-limit">  <OpacityIcon  style={{fontSize: "20px"}}/> {item.CisternaDue.umidità.title}</span>
                                <span id="min-limit2">Min: {item.CisternaDue.umidità.minima}{umiVal}</span>
                                <span id="data">Max: {item.CisternaDue.umidità.massima}{umiVal}</span>
                                <span id="button-plus2"><BsFillPlusCircleFill onClick={showModal}/></span>
                            </Paper>



                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="icon-limit2"> <SiMattermost/> {item.CisternaDue.pressione.title}</span>
                                <span id="min-limit3">Min: {item.CisternaDue.pressione.minima}{presVal}</span>
                                <span id="data">Max: {item.CisternaDue.pressione.massima}{presVal}</span>
                                <span id="button-plus3"><BsFillPlusCircleFill onClick={showModal}/></span>
                            </Paper>


                            <Paper elevation={3} id="cisterna_soglia">
                                <span id="icon-limit2">  <FaPercent/> {item.CisternaDue.livello.title}</span>
                                <span id="min-limit4">Min: {item.CisternaDue.livello.minima}{liveVal}</span>
                                <span id="data">Max: {item.CisternaDue.livello.massima}{liveVal}</span>
                                <span id="button-plus4"><BsFillPlusCircleFill onClick={showModal}/></span>
                            </Paper>


                            <Modal
                            bodyStyle={{backgroundColor:'#fce3cf'}}
                            title="Soglia limiti"
                            visible={visible}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                            okText="Conferma"
                            cancelText="Annulla"
                            >
                            <div className="soglia-rossa">
                                <p><strong>Soglia allarme</strong></p>
                                <p>Valore minimo: <InputNumber min={0} max={100} defaultValue={item.CisternaDue.temperatura.minima} onChange={onChange}/></p>
                                <p>Valore massimo: <InputNumber min={0} max={100} defaultValue={item.CisternaDue.temperatura.massima} onChange={onChange}/></p>
                            </div>
                            <div className="soglia-gialla">
                            <p><strong>Soglia allerta</strong></p>
                                <p>Valore minimo: <InputNumber min={0} max={100} defaultValue={item.CisternaDue.temperatura.minima} onChange={onChange}/></p>
                                <p>Valore massimo: <InputNumber min={0} max={100} defaultValue={item.CisternaDue.temperatura.massima} onChange={onChange}/></p>
                            </div>
                            </Modal>
                        </div>
                    ))}
                </>
            ) : null}
        </>
    )
}
export default CisternaDueManagement;