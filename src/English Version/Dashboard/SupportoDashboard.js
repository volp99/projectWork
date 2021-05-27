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
                            <h3 className="support flex-center">Help</h3>
                            <ul className="support">
                                <li>For emergency numbers, press on <strong>ASSISTANCE</strong></li>
                                <li>To return to the Homepage, press on <HomeIcon/></li>
                                <li>To view Group 1 and Group 2, press the respective button</li>
                                <li><FaCircle color=" #10AD4F" id="cirlce_icon"/> No abnormalities detected</li>
                                <li><FaCircle color=" #FFCC00" id="cirlce_icon"/> Warning: value lowering or rising</li>
                                <li><FaCircle color=" #CC3300" id="cirlce_icon"/><FaArrowCircleUp id="right"/> Emergency: higher value of the standard</li>
                                <li><FaCircle color=" #CC3300" id="cirlce_icon"/><FaArrowCircleDown id="right"/> Emergency: lower value of the standard</li>
                            </ul>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}
