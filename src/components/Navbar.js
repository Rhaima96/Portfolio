import React, {useState} from 'react';
import logo from "../logo.png";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
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
        margin: "0.5rem auto",
        boxShadow: "0 5px 10px 0 rgba(0 , 0 , 0 , 0.15)"

    },
    menuContainer: {
        width: "280px",
        height: "100%",
        backgroundImage: "linear-gradient(#004aad, #38b6ff)"
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
        ListText: "Home",
        listPath: "/"
    }, {
        ListIcon: <AssignmentInd/>,
        ListText: "Resume",
        listPath: "/resume"
    }, {
        ListIcon: <Apps/>,
        ListText: "Portfolio",
        listPath: "/portfolio"
    }, {
        ListIcon: <ContactMail/>,
        ListText: "Contact",
        listPath: "/contact"
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

                    <ListItem
                        component={Link}
                        to={item.listPath}
                        onClick={toggleSlider(slider, false)}
                        button
                        key={key}>
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
                <AppBar position="sticky"   backgroundImage="linear-gradient(#004aad, #38b6ff)">
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
                            <div
                                class="clean-block add-on social-icons"
                                style={{height: "3rem",padding: "2rem"}}>
                                <div class="icons" >
                                    <a href="https://www.facebook.com/profile.php?id=100014325692435" target="_blank">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/mohamed-touhami-rhaima-17812a1b6" target="_blank">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/Rhaima96" target="_blank">
                                        <i class="fa fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </MobileRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Navbar;
