import React from 'react';
import Popover from '@material-ui/core/Popover';
import Box from '@material-ui/core/Box';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


export default function Supporto_Homepage() {
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
                            <div className="support flex-column-center">
                                <h3 className="flex-center">Supporto</h3>
                                <ul>
                                    <li>Per accedere all’area operatori, clicca sul bottone “Entra”</li>
                                    <li>Accedi all’area “Assistenza” per contattare il servizio di manutenzione aziendale</li>
                                    <li>Per cambiare lingua, premi sulla rispettiva lingua in basso.</li>
                                </ul>
                            </div>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}
