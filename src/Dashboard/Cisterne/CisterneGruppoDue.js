import React from "react";
import {useState, useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import ErrorServer from "../../components/commons/ErrorServer";
import Loading from "../../components/commons/Loader";
import {useFetch} from "../../components/commons/Fetch";
import CheckStato from "../../components/commons/CheckStato";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {useSpring} from "react-spring";

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
            marginTop: '8px',

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


const TestCisterne = (props) => {
    const classes = useStyles();
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
                <span></span>
            ) : error !== null ? (
                <ErrorServer/>
            ) : data !== null ? (
                <>
                    {(data).map(item => (
                        <div key={item.id}>

                            <div className={classes.root}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Link to="/Gruppo2"><Paper className={classes.info} elevation={6}><span variant="contained"  style={{backgroundColor:'#F4A261', color:'white'}}><strong>Gruppo 2</strong></span></Paper></Link>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper className={classes.paper} elevation={3}>
                                            <h4 className={classes.cisterna}>Cisterna 4</h4>
                                            <div className={classes.alert}>
                                                <CheckStato
                                                    stato={item.CisternaQuattro.temperatura.corrente}
                                                    min={item.CisternaQuattro.temperatura.minima}
                                                    rossoGiallo={item.CisternaQuattro.temperatura.rossoGiallo}
                                                    gialloVerde={item.CisternaQuattro.temperatura.gialloVerde}
                                                    verdeGiallo={item.CisternaQuattro.temperatura.verdeGiallo}
                                                    gialloRosso={item.CisternaQuattro.temperatura.gialloRosso}
                                                    max={item.CisternaQuattro.temperatura.massima}
                                                    value="temperatura"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaQuattro.pressione.corrente}
                                                    min={item.CisternaQuattro.pressione.minima}
                                                    rossoGiallo={item.CisternaQuattro.pressione.rossoGiallo}
                                                    gialloVerde={item.CisternaQuattro.pressione.gialloVerde}
                                                    verdeGiallo={item.CisternaQuattro.pressione.verdeGiallo}
                                                    gialloRosso={item.CisternaQuattro.pressione.gialloRosso}
                                                    max={item.CisternaQuattro.pressione.massima}
                                                    value="pressione"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaQuattro.umidità.corrente}
                                                    min={item.CisternaQuattro.umidità.minima}
                                                    rossoGiallo={item.CisternaQuattro.umidità.rossoGiallo}
                                                    gialloVerde={item.CisternaQuattro.umidità.gialloVerde}
                                                    verdeGiallo={item.CisternaQuattro.umidità.verdeGiallo}
                                                    gialloRosso={item.CisternaQuattro.umidità.gialloRosso}
                                                    max={item.CisternaQuattro.umidità.massima}
                                                    value="umidità"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaQuattro.livello.corrente}
                                                    min={item.CisternaQuattro.livello.minima}
                                                    rossoGiallo={item.CisternaQuattro.livello.rossoGiallo}
                                                    gialloVerde={item.CisternaQuattro.livello.gialloVerde}
                                                    verdeGiallo={item.CisternaQuattro.livello.verdeGiallo}
                                                    gialloRosso={item.CisternaQuattro.livello.gialloRosso}
                                                    max={item.CisternaQuattro.livello.massima}
                                                    value="livello"
                                                />
                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper className={classes.paper} elevation={3}>
                                            <h4 className={classes.cisterna}>Cisterna 5</h4>
                                            <div className={classes.alert}>

                                                <CheckStato
                                                    stato={item.CisternaCinque.temperatura.corrente}
                                                    min={item.CisternaCinque.temperatura.minima}
                                                    rossoGiallo={item.CisternaCinque.temperatura.rossoGiallo}
                                                    gialloVerde={item.CisternaCinque.temperatura.gialloVerde}
                                                    verdeGiallo={item.CisternaCinque.temperatura.verdeGiallo}
                                                    gialloRosso={item.CisternaCinque.temperatura.gialloRosso}
                                                    max={item.CisternaCinque.temperatura.massima}
                                                    value="temperatura"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaCinque.pressione.corrente}
                                                    min={item.CisternaCinque.pressione.minima}
                                                    rossoGiallo={item.CisternaCinque.pressione.rossoGiallo}
                                                    gialloVerde={item.CisternaCinque.pressione.gialloVerde}
                                                    verdeGiallo={item.CisternaCinque.pressione.verdeGiallo}
                                                    gialloRosso={item.CisternaCinque.pressione.gialloRosso}
                                                    max={item.CisternaCinque.pressione.massima}
                                                    value="pressione"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaCinque.umidità.corrente}
                                                    min={item.CisternaCinque.umidità.minima}
                                                    rossoGiallo={item.CisternaCinque.umidità.rossoGiallo}
                                                    gialloVerde={item.CisternaCinque.umidità.gialloVerde}
                                                    verdeGiallo={item.CisternaCinque.umidità.verdeGiallo}
                                                    gialloRosso={item.CisternaCinque.umidità.gialloRosso}
                                                    max={item.CisternaCinque.umidità.massima}
                                                    value="umidità"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaCinque.livello.corrente}
                                                    min={item.CisternaCinque.livello.minima}
                                                    rossoGiallo={item.CisternaCinque.livello.rossoGiallo}
                                                    gialloVerde={item.CisternaCinque.livello.gialloVerde}
                                                    verdeGiallo={item.CisternaCinque.livello.verdeGiallo}
                                                    gialloRosso={item.CisternaCinque.livello.gialloRosso}
                                                    max={item.CisternaCinque.livello.massima}
                                                    value="livello"
                                                />
                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper className={classes.paper} elevation={3}>
                                            <h4 className={classes.cisterna}>Cisterna 6</h4>
                                            <div className={classes.alert}>
                                                <CheckStato
                                                    stato={item.CisternaSei.temperatura.corrente}
                                                    min={item.CisternaSei.temperatura.minima}
                                                    rossoGiallo={item.CisternaSei.temperatura.rossoGiallo}
                                                    gialloVerde={item.CisternaSei.temperatura.gialloVerde}
                                                    verdeGiallo={item.CisternaSei.temperatura.verdeGiallo}
                                                    gialloRosso={item.CisternaSei.temperatura.gialloRosso}
                                                    max={item.CisternaSei.temperatura.massima}
                                                    value="temperatura"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaSei.pressione.corrente}
                                                    min={item.CisternaSei.pressione.minima}
                                                    rossoGiallo={item.CisternaSei.pressione.rossoGiallo}
                                                    gialloVerde={item.CisternaSei.pressione.gialloVerde}
                                                    verdeGiallo={item.CisternaSei.pressione.verdeGiallo}
                                                    gialloRosso={item.CisternaSei.pressione.gialloRosso}
                                                    max={item.CisternaSei.pressione.massima}
                                                    value="pressione"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaSei.umidità.corrente}
                                                    min={item.CisternaSei.umidità.minima}
                                                    rossoGiallo={item.CisternaSei.umidità.rossoGiallo}
                                                    gialloVerde={item.CisternaSei.umidità.gialloVerde}
                                                    verdeGiallo={item.CisternaSei.umidità.verdeGiallo}
                                                    gialloRosso={item.CisternaSei.umidità.gialloRosso}
                                                    max={item.CisternaSei.umidità.massima}
                                                    value="umidità"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaSei.livello.corrente}
                                                    min={item.CisternaSei.livello.minima}
                                                    rossoGiallo={item.CisternaSei.livello.rossoGiallo}
                                                    gialloVerde={item.CisternaSei.livello.gialloVerde}
                                                    verdeGiallo={item.CisternaSei.livello.verdeGiallo}
                                                    gialloRosso={item.CisternaSei.livello.gialloRosso}
                                                    max={item.CisternaSei.livello.massima}
                                                    value="livello"
                                                />

                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper className={classes.paper} elevation={3}>
                                            <h4 className={classes.cisterna}>Cisterna 7</h4>
                                            <div className={classes.alert}>
                                                <CheckStato
                                                    stato={item.CisternaSette.temperatura.corrente}
                                                    min={item.CisternaSette.temperatura.minima}
                                                    rossoGiallo={item.CisternaSette.temperatura.rossoGiallo}
                                                    gialloVerde={item.CisternaSette.temperatura.gialloVerde}
                                                    verdeGiallo={item.CisternaSette.temperatura.verdeGiallo}
                                                    gialloRosso={item.CisternaSette.temperatura.gialloRosso}
                                                    max={item.CisternaSette.temperatura.massima}
                                                    value="temperatura"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaSette.pressione.corrente}
                                                    min={item.CisternaSette.pressione.minima}
                                                    rossoGiallo={item.CisternaSette.pressione.rossoGiallo}
                                                    gialloVerde={item.CisternaSette.pressione.gialloVerde}
                                                    verdeGiallo={item.CisternaSette.pressione.verdeGiallo}
                                                    gialloRosso={item.CisternaSette.pressione.gialloRosso}
                                                    max={item.CisternaSette.pressione.massima}
                                                    value="pressione"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaSette.umidità.corrente}
                                                    min={item.CisternaSette.umidità.minima}
                                                    rossoGiallo={item.CisternaSette.umidità.rossoGiallo}
                                                    gialloVerde={item.CisternaSette.umidità.gialloVerde}
                                                    verdeGiallo={item.CisternaSette.umidità.verdeGiallo}
                                                    gialloRosso={item.CisternaSette.umidità.gialloRosso}
                                                    max={item.CisternaSette.umidità.massima}
                                                    value="umidità"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaSette.livello.corrente}
                                                    min={item.CisternaSette.livello.minima}
                                                    rossoGiallo={item.CisternaSette.livello.rossoGiallo}
                                                    gialloVerde={item.CisternaSette.livello.gialloVerde}
                                                    verdeGiallo={item.CisternaSette.livello.verdeGiallo}
                                                    gialloRosso={item.CisternaSette.livello.gialloRosso}
                                                    max={item.CisternaSette.livello.massima}
                                                    value="livello"
                                                />

                                            </div>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    ))}
                </>
            ) : null}
        </>
    )
}

export default TestCisterne;