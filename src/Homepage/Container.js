import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {withRouter} from "react-router-dom"
import { motion } from 'framer-motion';

const ContainerHome=(props) =>{
    const changePage = slug => {
        props.history.push(slug)
    }
    return(
            <div className="container_home">
                <div className="title flex-center">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/North_Dakota_Fighting_Sioux_Logo.svg/1200px-North_Dakota_Fighting_Sioux_Logo.svg.png" alt="logo"></img>
                    <h1>SiouxSilos</h1>
                </div>
                <div className="log flex-center">
                    <h3>Accedi alla tua area</h3>
                </div>
                <div className="btn-home flex-center">
                    <Button variant="contained" color="primary" onClick={() => changePage('/dashboard')}>Entra</Button>
                </div>
                <motion.div className="home container" animate={{ y: 70}}  transition={{ type: "spring", stiffness: 200 }} >
                <div className="footer-home flex-center-end">
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                            <Button>ENG</Button>
                            <Button>ITA</Button>
                        </ButtonGroup>
                </div>
                </motion.div>
            </div>
    )
}
export default withRouter(ContainerHome);