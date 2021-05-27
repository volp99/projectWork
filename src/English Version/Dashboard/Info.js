import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Info() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed  disableGutters={false}>
                <Typography variant="h6" component="div" style={{ height: '10vh', textAlign:'center', paddingTop:'3vh' }}>Access groups to view details.</Typography>
            </Container>
        </React.Fragment>
    );
}
