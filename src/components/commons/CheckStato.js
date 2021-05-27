import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import OpacityIcon from '@material-ui/icons/Opacity';
import { useSpring, animated } from 'react-spring'
import {
    FaPercent,
    FaArrowCircleUp,
    FaArrowCircleDown,
    SiMattermost,
    GiThermometerCold,
    FiThermometer,
    GiThermometerHot,
    FaThermometerQuarter,
    FaThermometerFull
} from "react-icons/all";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            textAlign: 'center',
            color: theme.palette.text.secondary,
            padding: theme.spacing(1),
            borderRadius:'20px',
            marginTop:'10px',
            margin:'20px'

        },
        info:{
            backgroundColor:'#F4A261',
            padding: theme.spacing(2),
            textAlign: 'center',
            borderRadius:'20px',
        },
        alert:{
            width: '100%',
            marginTop: '8px'
        },
        cisterna:{
            padding: theme.spacing(2),
            textAlign: 'center',
            borderRadius:'20px',
            color: 'black'
        },
        black:{
            color: 'black'
        },
        white:{
            color:'white'
        },
        warning:{
            marginLeft: '50px',
        },
        warning_temphight:{
            marginLeft: '10px'
        }
    }),
);
const CheckStato=({stato=50,min=0,rossoGiallo=10,gialloVerde=20,verdeGiallo=80,gialloRosso=90,max=100,value = "temperatura"})=>{

    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0.7 },
        reset: true,
        reverse: flip,
        delay: 0,
        onRest: () => set(!flip),
    })

    const classes = useStyles();
    switch(value){
        case "temperatura":
            if(stato<=rossoGiallo){
                return(
                    <animated.div style={props}><Alert className={classes.alert}  variant="filled" severity="error" icon={<GiThermometerCold className={classes.white} size="1.5rem"/>}><strong>Temperatura</strong><FaArrowCircleDown className={classes.warning} size="20px"/></Alert></animated.div>
                )
            }
            else if(stato<=gialloVerde){
                return(
                    <Alert className={classes.alert}  variant="filled" severity="warning" icon={<FiThermometer className={classes.black}/>}><strong>Temperatura Bassa</strong></Alert>
                )
            }
            else if(stato<verdeGiallo){
                return(
                    <Alert className={classes.alert}  variant="filled" severity="success" icon={<FaThermometerQuarter className={classes.black}/>}><strong>Temperatura</strong></Alert>

                )
            }
            else if(stato<gialloRosso){
                return(
                    <Alert className={classes.alert}  variant="filled" severity="warning" icon={<FaThermometerFull className={classes.black}/>}><strong>Temperatura Alta</strong></Alert>
                )
            }
            else{
                return(
                    <animated.div style={props}><Alert className={classes.alert}  variant="filled" severity="error" icon={<GiThermometerHot className={classes.white} size="1.5rem"/>}><strong>Temperatura</strong><FaArrowCircleUp className={classes.warning_temphight} size="20px"/></Alert></animated.div>
                )
            }
            break;
        case "pressione":
            if(stato<=rossoGiallo){
                return(
                    <animated.div style={props}><Alert className={classes.alert}  variant="filled" severity="error" icon={<SiMattermost className={classes.white} size="1.5rem"/>}><strong>Pressione</strong><FaArrowCircleDown className={classes.warning} size="20px"/></Alert></animated.div>                )
            }
            else if(stato<=gialloVerde){
                return(
                    <Alert className={classes.alert} variant="filled" severity="warning" icon={<SiMattermost className={classes.black}/>}><strong>Pressione Bassa</strong></Alert>
                )
            }
            else if(stato<verdeGiallo){
                return(
                    <Alert className={classes.alert} variant="filled" severity="success" icon={<SiMattermost className={classes.black}/>}><strong>Pressione</strong></Alert>
                )
            }
            else if(stato<gialloRosso){
                return(
                    <Alert className={classes.alert}  variant="filled" severity="warning" icon={<SiMattermost className={classes.black}/>}><strong>Pressione Alta</strong></Alert>
                )
            }
            else{
                return(
                    <animated.div style={props}><Alert className={classes.alert}  variant="filled" severity="error" icon={<SiMattermost className={classes.white} size="1.5rem"/>}><strong>Pressione</strong><FaArrowCircleUp className={classes.warning_temphight} size="20px"/></Alert></animated.div>
                )
            }
            break;
        case "umidità":
            if(stato<=rossoGiallo){
                return(
                    <animated.div style={props}><Alert className={classes.alert} variant="filled" severity="error" icon={<OpacityIcon className={classes.white} size="1.5rem"/>}><strong>Umidità</strong><FaArrowCircleDown className={classes.warning} size="20px"/></Alert></animated.div>
                )
            }
            else if(stato<=gialloVerde){
                return(
                    <Alert className={classes.alert} variant="filled" severity="warning" icon={<OpacityIcon className={classes.black}/>}><strong>Umidità Bassa</strong></Alert>
                )
            }
            else if(stato<verdeGiallo){
                return(
                    <Alert className={classes.alert} variant="filled" severity="success" icon={<OpacityIcon className={classes.black}/>}><strong>Umidità</strong></Alert>
                )
            }
            else if(stato<gialloRosso){
                return(
                    <Alert className={classes.alert}  variant="filled" severity="warning" icon={<SiMattermost className={classes.black}/>}><strong>Umidità Alta</strong></Alert>
                )
            }
            else{
                return(

                    <animated.div style={props}><Alert className={classes.alert} variant="filled" severity="error" icon={<OpacityIcon className={classes.white} size="1.5rem"/>}><strong>Umidità</strong><FaArrowCircleUp className={classes.warning} size="20px"/></Alert></animated.div>
                )
            }
            break;
        case "livello":
            if(stato<=rossoGiallo){
                return(
                    <animated.div style={props}><Alert className={classes.alert}  variant="filled" severity="error" icon={<FaPercent className={classes.white} size="1.5rem"/>}><strong>Livello</strong><FaArrowCircleDown className={classes.warning} size="20px"/></Alert></animated.div>
                )
            }
            else if(stato<=gialloVerde){
                return(
                    <Alert className={classes.alert} variant="filled" severity="warning" icon={<FaPercent className={classes.black}/>}><strong>Livello Basso</strong></Alert>
                )
            }
            else if(stato<verdeGiallo){
                return(
                    <Alert className={classes.alert} variant="filled" severity="success" icon={<FaPercent className={classes.black}/>}><strong>Livello</strong></Alert>
                )
            }
            else if(stato<gialloRosso){
                return(
                    <Alert className={classes.alert}  variant="filled" severity="warning" icon={<FaPercent className={classes.black}/>}><strong>Livello Alto</strong></Alert>
                )
            }
            else{
                return(
                    <animated.div style={props}><Alert className={classes.alert}  variant="filled" severity="error" icon={<FaPercent className={classes.white} size="1.5rem"/>}><strong>Livello</strong><FaArrowCircleUp className={classes.warning} size="20px"/></Alert></animated.div>
                )
            }
            break;
    }
}

export default CheckStato;