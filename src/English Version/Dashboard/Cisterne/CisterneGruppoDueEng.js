import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import OpacityIcon from '@material-ui/icons/Opacity';
import {FaPercent,FaArrowCircleUp,FaArrowCircleDown, SiMattermost, GiThermometerCold, FiThermometer, GiThermometerHot, FaThermometerQuarter} from "react-icons/all";
import { useSpring, animated } from 'react-spring'
import {Link} from "react-router-dom";

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

export default function CisterneGruppoDueEng() {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0.7 },
        reset: true,
        reverse: flip,
        delay: 500,
        onRest: () => set(!flip),
    })
    const classes = useStyles();
    /*  COSTANTI    */
    const Temperatura =  <Alert variant="filled" severity="success" icon={<FaThermometerQuarter className={classes.black}/>}><strong>Temperature</strong></Alert>
    const TemperaturaBassaWarning= <animated.div style={props}><Alert variant="filled" severity="error" icon={<GiThermometerCold className={classes.white} size="1.5rem"/>}><strong>Temperature</strong><FaArrowCircleDown className={classes.warning} size="20px"/></Alert></animated.div>
    const TemperaturaAltaWarning =  <animated.div style={props}><Alert variant="filled" severity="error" icon={<GiThermometerHot className={classes.white} size="1.5rem"/>}><strong>Temperature</strong><FaArrowCircleUp className={classes.warning_temphight} size="20px"/></Alert></animated.div>
    const TemperaturaBassa =  <Alert variant="filled" severity="warning" icon={<FiThermometer className={classes.black}/>}><strong>Low Temperature</strong></Alert>
    const Pressione = <Alert className={classes.alert} variant="filled" severity="success" icon={<SiMattermost className={classes.black}/>}><strong>Pressure</strong></Alert>
    const Umidit?? = <Alert className={classes.alert} variant="filled" severity="success" icon={<OpacityIcon className={classes.black}/>}><strong>Humidity</strong></Alert>
    const Umidit??Bassa =     <Alert className={classes.alert} variant="filled" severity="warning" icon={<OpacityIcon className={classes.black}/>}><strong>Low Humidity</strong></Alert>
    const Livello = <Alert className={classes.alert} variant="filled" severity="success" icon={<FaPercent className={classes.black}/>}><strong>Level</strong></Alert>
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Link to="/Group2-eng"><Paper className={classes.info} elevation={6}><span variant="contained"  style={{backgroundColor:'#F4A261', color:'white'}}><strong>Group 2</strong></span></Paper></Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={3}>
                        <h4 className={classes.cisterna}>Tank 4</h4>
                        <div className={classes.alert}>
                            {TemperaturaBassaWarning}
                            {Pressione}
                            {Umidit??}
                            {Livello}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={3}>
                        <h4 className={classes.cisterna}>Tank 5</h4>
                        <div className={classes.alert}>
                            {TemperaturaBassa}
                            {Pressione}
                            {Umidit??}
                            {Livello}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={3}>
                        <h4 className={classes.cisterna}>Tank 6</h4>
                        <div className={classes.alert}>
                            {Temperatura}
                            {Pressione}
                            {Umidit??Bassa}
                            {Livello}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={3}>
                        <h4 className={classes.cisterna}>Tank 7</h4>
                        <div className={classes.alert}>
                            {TemperaturaAltaWarning}
                            {Pressione}
                            {Umidit??}
                            {Livello}
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

