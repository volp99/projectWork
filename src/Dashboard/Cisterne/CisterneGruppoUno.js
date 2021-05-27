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
                                        <Link to="/Gruppo1"><Paper className={classes.info} elevation={6}><span variant="contained"  style={{backgroundColor:'#F4A261', color:'white'}}><strong>Gruppo 1</strong></span></Paper></Link>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper className={classes.paper} elevation={3}>
                                            <h4 className={classes.cisterna}>Cisterna 1</h4>
                                            <div className={classes.alert}>
                                                <CheckStato
                                                    stato={item.CisternaUno.temperatura.corrente}
                                                    min={item.CisternaUno.temperatura.minima}
                                                    rossoGiallo={item.CisternaUno.temperatura.rossoGiallo}
                                                    gialloVerde={item.CisternaUno.temperatura.gialloVerde}
                                                    verdeGiallo={item.CisternaUno.temperatura.verdeGiallo}
                                                    gialloRosso={item.CisternaUno.temperatura.gialloRosso}
                                                    max={item.CisternaUno.temperatura.massima}
                                                    value="temperatura"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaUno.pressione.corrente}
                                                    min={item.CisternaUno.pressione.minima}
                                                    rossoGiallo={item.CisternaUno.pressione.rossoGiallo}
                                                    gialloVerde={item.CisternaUno.pressione.gialloVerde}
                                                    verdeGiallo={item.CisternaUno.pressione.verdeGiallo}
                                                    gialloRosso={item.CisternaUno.pressione.gialloRosso}
                                                    max={item.CisternaUno.pressione.massima}
                                                    value="pressione"
                                                />
                                                <CheckStato
                                                    stato={item.CisternaUno.umidità.corrente}
                                                    min={item.CisternaUno.umidità.minima}
                                                    rossoGiallo={item.CisternaUno.umidità.rossoGiallo}
                                                    gialloVerde={item.CisternaUno.umidità.gialloVerde}
                                                    verdeGiallo={item.CisternaUno.umidità.verdeGiallo}
                                                    gialloRosso={item.CisternaUno.umidità.gialloRosso}
                                                    max={item.CisternaUno.umidità.massima}
                                                    value="umidità"
                                                />
                                                <CheckStato
                                                    stato={item.CisternaUno.livello.corrente}
                                                    min={item.CisternaUno.livello.minima}
                                                    rossoGiallo={item.CisternaUno.livello.rossoGiallo}
                                                    gialloVerde={item.CisternaUno.livello.gialloVerde}
                                                    verdeGiallo={item.CisternaUno.livello.verdeGiallo}
                                                    gialloRosso={item.CisternaUno.livello.gialloRosso}
                                                    max={item.CisternaUno.livello.massima}
                                                    value="livello"
                                                />

                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper className={classes.paper} elevation={3}>
                                            <h4 className={classes.cisterna}>Cisterna 2</h4>
                                            <div className={classes.alert}>
                                                <CheckStato
                                                    stato={item.CisternaDue.temperatura.corrente}
                                                    min={item.CisternaDue.temperatura.minima}
                                                    rossoGiallo={item.CisternaDue.temperatura.rossoGiallo}
                                                    gialloVerde={item.CisternaDue.temperatura.gialloVerde}
                                                    verdeGiallo={item.CisternaDue.temperatura.verdeGiallo}
                                                    gialloRosso={item.CisternaDue.temperatura.gialloRosso}
                                                    max={item.CisternaDue.temperatura.massima}
                                                    value="temperatura"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaDue.pressione.corrente}
                                                    min={item.CisternaDue.pressione.minima}
                                                    rossoGiallo={item.CisternaDue.pressione.rossoGiallo}
                                                    gialloVerde={item.CisternaDue.pressione.gialloVerde}
                                                    verdeGiallo={item.CisternaDue.pressione.verdeGiallo}
                                                    gialloRosso={item.CisternaDue.pressione.gialloRosso}
                                                    max={item.CisternaDue.pressione.massima}
                                                    value="pressione"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaDue.umidità.corrente}
                                                    min={item.CisternaDue.umidità.minima}
                                                    rossoGiallo={item.CisternaDue.umidità.rossoGiallo}
                                                    gialloVerde={item.CisternaDue.umidità.gialloVerde}
                                                    verdeGiallo={item.CisternaDue.umidità.verdeGiallo}
                                                    gialloRosso={item.CisternaDue.umidità.gialloRosso}
                                                    max={item.CisternaDue.umidità.massima}
                                                    value="umidità"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaDue.livello.corrente}
                                                    min={item.CisternaDue.livello.minima}
                                                    rossoGiallo={item.CisternaDue.livello.rossoGiallo}
                                                    gialloVerde={item.CisternaDue.livello.gialloVerde}
                                                    verdeGiallo={item.CisternaDue.livello.verdeGiallo}
                                                    gialloRosso={item.CisternaDue.livello.gialloRosso}
                                                    max={item.CisternaDue.livello.massima}
                                                    value="livello"
                                                />

                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Paper className={classes.paper} elevation={3}>
                                            <h4 className={classes.cisterna}>Cisterna 3</h4>
                                            <div className={classes.alert}>
                                                <CheckStato
                                                    stato={item.CisternaTre.temperatura.corrente}
                                                    min={item.CisternaTre.temperatura.minima}
                                                    rossoGiallo={item.CisternaTre.temperatura.rossoGiallo}
                                                    gialloVerde={item.CisternaTre.temperatura.gialloVerde}
                                                    verdeGiallo={item.CisternaTre.temperatura.verdeGiallo}
                                                    gialloRosso={item.CisternaTre.temperatura.gialloRosso}
                                                    max={item.CisternaTre.temperatura.massima}
                                                    value="temperatura"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaTre.pressione.corrente}
                                                    min={item.CisternaTre.pressione.minima}
                                                    rossoGiallo={item.CisternaTre.pressione.rossoGiallo}
                                                    gialloVerde={item.CisternaTre.pressione.gialloVerde}
                                                    verdeGiallo={item.CisternaTre.pressione.verdeGiallo}
                                                    gialloRosso={item.CisternaTre.pressione.gialloRosso}
                                                    max={item.CisternaTre.pressione.massima}
                                                    value="pressione"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaTre.umidità.corrente}
                                                    min={item.CisternaTre.umidità.minima}
                                                    rossoGiallo={item.CisternaTre.umidità.rossoGiallo}
                                                    gialloVerde={item.CisternaTre.umidità.gialloVerde}
                                                    verdeGiallo={item.CisternaTre.umidità.verdeGiallo}
                                                    gialloRosso={item.CisternaTre.umidità.gialloRosso}
                                                    max={item.CisternaTre.umidità.massima}
                                                    value="umidità"
                                                />

                                                <CheckStato
                                                    stato={item.CisternaTre.livello.corrente}
                                                    min={item.CisternaTre.livello.minima}
                                                    rossoGiallo={item.CisternaTre.livello.rossoGiallo}
                                                    gialloVerde={item.CisternaTre.livello.gialloVerde}
                                                    verdeGiallo={item.CisternaTre.livello.verdeGiallo}
                                                    gialloRosso={item.CisternaTre.livello.gialloRosso}
                                                    max={item.CisternaTre.livello.massima}
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