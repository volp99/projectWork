import React from 'react';
import {AppBar, Toolbar, makeStyles, Typography} from "@material-ui/core";
import AssistenzaHomepage from "./Assistenza";
import SupportoHomepage from "./Supporto";

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
        padding:'18px',
    }


});

export default function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <AppBar position="sticky" className={classes.header}>
                <Toolbar>
                    <Typography variant="button" className={classes.left}><AssistenzaHomepage/></Typography>
                    <Typography variant="button"><SupportoHomepage/></Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
