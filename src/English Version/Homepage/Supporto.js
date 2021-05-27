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
                        <h3 style={{ color:"white" }}>Help</h3>
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
                                <h3 className="flex-center">Help</h3>
                                <ul>
                                    <li>To access the operator area, click on the button "Access"</li>
                                    <li>Access the "Assistance" area to contact the company maintenance service</li>
                                    <li>To change language, press on the respective language at the bottom.</li>
                                </ul>
                            </div>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}
