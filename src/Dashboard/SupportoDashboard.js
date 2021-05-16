import React from 'react';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {FaArrowCircleDown,FaArrowCircleUp, FaCircle} from "react-icons/all";
import HomeIcon from '@material-ui/icons/Home';


export default function SupportoDashboardGenerale() {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <a id="help" {...bindTrigger(popupState)}>
                        <h3 style={{ color:"white" }}>Supporto</h3>
                    </a>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Box p={2}>
                            <h3 className="support flex-center">Supporto</h3>
                            <ul className="support">
                                <li>Per i numeri di emergenza, premi su <strong>ASSISTENZA</strong></li>
                                <li>Per tornare alla Homepage, premi su <HomeIcon/></li>
                                <li>Per visualizzare il Gruppo 1 e Gruppo 2, premi sul rispettivo bottone</li>
                                <li><FaCircle color=" #10AD4F" id="cirlce_icon"/> Nessuna anomalia rilevata</li>
                                <li><FaCircle color=" #FFCC00" id="cirlce_icon"/> Attenzione: valore in abbassamento o in innalzamento</li>
                                <li><FaCircle color=" #CC3300" id="cirlce_icon"/><FaArrowCircleUp id="right"/> Emergenza: valore superiore della norma</li>
                                <li><FaCircle color=" #CC3300" id="cirlce_icon"/><FaArrowCircleDown id="right"/> Emergenza: valore inferiore della norma</li>
                            </ul>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}
