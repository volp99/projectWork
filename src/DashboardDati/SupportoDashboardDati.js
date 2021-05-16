import React from 'react';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import HomeIcon from '@material-ui/icons/Home';


export default function SupportoDashboardDati() {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <a id="help" {...bindTrigger(popupState)}>
                        <h3 style={{color:"white"}}>Supporto</h3>
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
                                <li>Premi sulla relativa cisterna per visualizzarne i valori.</li>
                                <li>Per i numeri di emergenza, premi su <strong>ASSISTENZA</strong></li>
                                <li>Per tornare alla Homepage, premi su <HomeIcon/></li>
                            </ul>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}
