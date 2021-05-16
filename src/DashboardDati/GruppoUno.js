import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import NavbarDati from "./NavbarDati";
import {withRouter} from "react-router-dom"
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes, {any} from 'prop-types';
import { Layout } from 'antd';
import { motion } from "framer-motion"
import CisternaUno from "./CisterneDati/CisternaUno";
import CisternaDue from "./CisterneDati/CisternaDue";
import CisternaTre from "./CisterneDati/CisternaTre";


const {Sider, Content } = Layout;

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`, 'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: "center",
        alignContent:"center",
        height: 290,
        marginLeft:"37px",
    },
    background:{backgroundColor:'rgb(240, 242, 245)', margin:'30px'},
    dataBox:{backgroundColor:'#fce3cf', margin:'30px', borderRadius:'20px', height:'580px'},
    tab: {backgroundColor:'#F4A261', borderRadius:'20px', width:'30px', marginTop:'20px'},
    line: {width:'400px'}
});

const RecapGroupOne = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const style = useStyles();

    return(
        <>
            <NavbarDati/>
            <Layout style={{height:'100%', width:'100%'}}>
                <Sider width={300} className={style.background}>
                    <motion.div animate={{ y: 150}}  transition={{ type: "spring", stiffness: 200 }}>
                        <div className="tab_el">
                            <div>
                                <div className="tab_name flex-center">
                                    <h3><strong>Gruppo 1</strong></h3>
                                </div>
                                <div className={classes.root}>
                                    <Tabs className={classes.line}
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChange}
                                        selectionFollowsFocus={true}

                                    >
                                        <Tab label="Cisterna 1" {...a11yProps(0)} className={classes.tab}/>
                                        <Tab label="Cisterna 2" {...a11yProps(1)} className={classes.tab}/>
                                        <Tab label="Cisterna 3" {...a11yProps(2)} className={classes.tab}/>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Sider>
                <Layout>
                    <Content className={classes.dataBox}>
                        <TabPanel value={value} index={0}>
                          <CisternaUno/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <CisternaDue/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <CisternaTre/>
                        </TabPanel>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default withRouter(RecapGroupOne);