import React from 'react';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function AssistenzaHomepage() {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <a id="assistance" {...bindTrigger(popupState)}>
                 <h3 style={{color:"white"}}>Assistenza</h3>
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
                            <h3 className="assistence flex-center">Assistenza</h3>
                            <ul className="assistence">
                                <li id="orange">Numero di emergenza: 000-111-222-345</li>
                                <li id="blue">Numero ufficio CTO  12345-678-990</li>
                                <li id="orange">Numero ufficio Tecnico  11223-445-678</li>
                                <li id="blue">Numero ufficio Marketing  11223-445-678</li>
                            </ul>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}