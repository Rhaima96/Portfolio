import React, {useState} from 'react';
import logo from "../logo.png";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import avatar from './avatar.jpg'
import {makeStyles} from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    ListItem,
    Avatar,
    ListItemText,
    Divider,
    List,
    Box,
    ListItemIcon
} from "@material-ui/core";
import {
    Home,
    AssignmentInd,
    ArrowBack,
    Apps,
    ContactMail,
    Reorder
} from "@material-ui/icons";
import MobileRightMenuSlider from '@material-ui/core/Drawer';

const useStyles = makeStyles((theme) => ({

    img: {
        width: '7rem',
        margin: '0 0 0 0.5rem '
    },
    avatar: {
        width: "7rem",
        height: "7rem",
        margin: "0.5rem auto"
    },
    menuContainer: {
        width: "280px",
        height: "100%",
        backgroundColor: "#5e17eb"
    },
    divider: {
        background: theme.palette.divider = "#d0d0d0"
    },
    lsitem: {
        color: "#d0d0d0"
    },
    lsicon: {
        color: theme.palette.icon = "#d0d0d0"
    }
}));

const menuItems = [
    {
        ListIcon: <Home/>,
        ListText: "Home"
    }, {
        ListIcon: <AssignmentInd/>,
        ListText: "Resume"
    }, {
        ListIcon: <Apps/>,
        ListText: "Portfolio"
    }, {
        ListIcon: <ContactMail/>,
        ListText: "Contact"
    }
]

const Navbar = () => {
    const [state,
        setState] = useState({right: false})
    const toggleSlider = (slider, open) => () => {
        setState({
            ...state,
            [slider]: open
        });
    }
    const classes = useStyles();

    const slidelist = slider => (
        <Box component="div" className={classes.menuContainer}>
            <Avatar className={classes.avatar} src={avatar} alt="mon_img"/>
            <Divider
                variant="middle"
                className={{
                root: classes.divider
            }}/>
            <List >
                {menuItems.map((item, key) => (

                    <ListItem onClick={toggleSlider(slider, false)} button key={key}>
                        <ListItemIcon className={classes.lsicon}>
                            {item.ListIcon}
                        </ListItemIcon>

                        <ListItemText className={classes.lsitem} primary={item.ListText}/>
                    </ListItem>
                ))}
            </List>
        </Box>

    )
    return (
        <div>
            <Box component="nav">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>

                            <Reorder
                                fontSize='large'
                                style={{
                                color: "#fff"
                            }}/>
                        </IconButton>
                        <img src={logo} alt="logo" className={classes.img}/>
                        <MobileRightMenuSlider
                            open={state.right}
                            anchor="right"
                            onClose={toggleSlider("right", false)}>
                            {slidelist("right")}
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Navbar;
