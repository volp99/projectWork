import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom"
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes, {any} from 'prop-types';
import { Layout } from 'antd';
import { motion } from "framer-motion"
import { BiFontSize } from "react-icons/bi";
import CisterneGruppoUno from "../Dashboard/Cisterne/CisterneGruppoUno";
import CisterneGruppoDue from "../Dashboard/Cisterne/CisterneGruppoDue";
import CisternaUno from "../DashboardDati/CisterneDati/CisternaUno";
import CisternaDue from "../DashboardDati/CisterneDati/CisternaDue";
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';



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
        height: 290
    },
    background:{backgroundColor:'rgb(240, 242, 245)'},
    dataBox:{backgroundColor:'#fce3cf', margin:'30px', borderRadius:'20px'},
    tab: {backgroundColor:'white', borderRadius:'20px', width:'30px', marginTop:'20px'},
    line: {width:'100%'},
    
    
});

const Manager = (props) => {
    const changePage = slug => {
        props.history.push(slug)
    }
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const style = useStyles();

    return(
        <>
            <Layout style={{height:'100vh'}}>
                <Sider width={300} className={style.background}>
                        <div className="nav_manager">
                            <div style={{height:'1024px'}} className="flex-left-column">
                                <div className="logo_manager">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/82/North_Dakota_Fighting_Sioux_Logo.svg/1200px-North_Dakota_Fighting_Sioux_Logo.svg.png" alt="logo"></img>
                                        <h1>SiouxSilos</h1>
                                    </div>
                                <div className={classes.root} >
                                    <Tabs className={classes.line}
                                        orientation="vertical"
                                        value={value}
                                        onChange={handleChange}
                                        selectionFollowsFocus={true}

                                    >   
                                        <Tab label="SiouxSilos" {...a11yProps(0)} className={classes.tab} id="manager-home"/>
                                        <Tab label="Gruppo 1" {...a11yProps(1)} className={classes.tab}/>
                                        <Tab label="Gruppo 2" {...a11yProps(2)} className={classes.tab}/>

                                    </Tabs>
                                </div>
                                <div className="flex-left-column">
                                    <PhoneRoundedIcon style={{color:"white", fontSize: '70', margin: '5px'}}/>
                                    <HelpRoundedIcon style={{color:"white", fontSize: '70', marginTop: '5px', marginBottom:'30px'}}/>
                                </div>
                            </div>
                        </div>
                </Sider>
                <Layout>
                    <Content className={classes.dataBox}>
                    <TabPanel value={value} index={0}>
                        
                    <Typography component="div" style={{ height: '70vh', display:'flex', flexFlow:'column',width:'100%' }}>
                                <Typography component="div" style={{  height: '40vh', display:'flex', flexFlow:'row', width:'100%' }}>
                                    <Typography component="div" style={{height: '90vh', display:'flex', flexFlow:'row', width:'100%', margin:'0px 10px', borderRadius:'20px', backgroundColor:'#fce3cf'}}>

                                        <CisterneGruppoUno/>
                                    </Typography>
                                </Typography>
                                <Typography component="div" style={{ height: '90vh', display:'flex', flexFlow:'row', width:'100%',  margin:'0px 10px', borderRadius:'20px', backgroundColor:'#fce3cf'}}>
                                    <CisterneGruppoDue/>
                                </Typography>
                            </Typography>
                            
                        </TabPanel>

                            <TabPanel value={value} index={1}>
                          <CisternaUno/>
                        </TabPanel>              
                        <TabPanel value={value} index={2}>
                            <CisternaDue/>
                        </TabPanel>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default withRouter(Manager);