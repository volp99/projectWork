import React from 'react';
import {AppBar, Toolbar, makeStyles, Typography} from "@material-ui/core";
import {withRouter} from "react-router-dom"
import AssistenzaHomepage from "../Homepage/Assistenza";
import SupportoDashboardDati from "./SupportoDashboardDati";
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles({
    header: {
        backgroundColor: "#2C2C3C",
        color: "white",
        alignItems: 'flex-end',
    },
    text:{
        padding:'18px'
    },
    left:{
        marginRight: '30px',
        padding:'18px'
    },
    logo:{
        marginRight: '270px'
    },
    dashboard:{
        marginRight:'400px',
        color: "white"
    }
});

function NavbarDati(props){
    const changePage = slug => {
        props.history.push(slug)
    }
    const classes = useStyles();
    return (

        <div className="App">
            <AppBar position="sticky" className={classes.header}>
                <Toolbar>
                    <Typography variant="button"  onClick={() => changePage('/dashboard')}><h3 className={classes.dashboard} >dashboard</h3></Typography>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/North_Dakota_Fighting_Sioux_Logo.svg/1200px-North_Dakota_Fighting_Sioux_Logo.svg.png" alt="logo" width="60px" className={classes.logo}></img>
                    <Typography variant="button" className={classes.left}><AssistenzaHomepage/></Typography>
                    <Typography variant="button" className={classes.left}><SupportoDashboardDati/></Typography>
                        <Typography variant="button" onClick={() => changePage('/')}><HomeIcon style={{ fontSize: 40 }}/></Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default withRouter(NavbarDati);