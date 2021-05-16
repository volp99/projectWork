import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import OpacityIcon from '@material-ui/icons/Opacity';
import {FaPercent,FaArrowCircleUp, SiMattermost, FaThermometerFull, FaThermometerQuarter} from "react-icons/all";
import Button from "@material-ui/core/Button";
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring'
import {Link} from 'react-router-dom';

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
    }),
);


function CisterneGruppoUno() {
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
    const Temperatura =  <Alert variant="filled" severity="success" icon={<FaThermometerQuarter className={classes.black}/>}><strong>Temperatura</strong></Alert>
    const TemperaturaAlta = <Alert variant="filled" severity="warning" icon={<FaThermometerFull className={classes.black}/>}><strong>Temperatura Alta</strong></Alert>
    const Pressione = <Alert className={classes.alert} variant="filled" severity="success" icon={<SiMattermost className={classes.black}/>}><strong>Pressione</strong></Alert>
    const Umidità = <Alert className={classes.alert} variant="filled" severity="success" icon={<OpacityIcon className={classes.black}/>}><strong>Umidità</strong></Alert>
    const UmiditàWarning = <animated.div style={props}><Alert className={classes.alert} variant="filled" severity="error" icon={<OpacityIcon className={classes.white}/>}><strong>Umidità</strong><FaArrowCircleUp className={classes.warning} size="20px"/></Alert></animated.div>
    const Livello = <Alert className={classes.alert} variant="filled" severity="success" icon={<FaPercent className={classes.black}/>}><strong>Livello</strong></Alert>
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Link to="/Gruppo1"><Paper className={classes.info} elevation={6}><span variant="contained"  style={{backgroundColor:'#F4A261', color:'white'}}><strong>Gruppo 1</strong></span></Paper></Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={3}>
                        <h4 className={classes.cisterna}>Cisterna 1</h4>
                        <div className={classes.alert}>
                            {TemperaturaAlta}
                            {Pressione}
                            {Umidità}
                            {Livello}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={3}>
                        <h4 className={classes.cisterna}>Cisterna 2</h4>
                        <div className={classes.alert}>
                            {Temperatura}
                            {Pressione}
                            {UmiditàWarning}
                            {Livello}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={3}>
                        <h4 className={classes.cisterna}>Cisterna 3</h4>
                        <div className={classes.alert}>
                            {Temperatura}
                            {Pressione}
                            {Umidità}
                            {Livello}
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
export default CisterneGruppoUno;

