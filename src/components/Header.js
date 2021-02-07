import React from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import avatar from './avatar.jpg'
import '../App.css'

const useStyles = makeStyles((theme) => ({

    avatar: {
        width: "10rem",
        height: "10rem",
        margin: "0.5rem auto",
        boxShadow: "0 5px 10px 0 rgba(0 , 0 , 0 , 0.15)"
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <section
                className="clean-block clean-hero"
                style={{
                height: "43.125rem",
                backgroundImage: "url(assets/img/tech/image4.jpg)",
                color: "rgba(9, 162, 255, 0.68)"
            }}>
                <div className="text">
                    <div className="caption v-middle text-center">
                        <Avatar className={classes.avatar} src={avatar} alt="mon_img"/>
                        <h1 className="cd-headline clip  ">
                            <span className="blc an_h">I'm |
                            </span>
                            <span className="cd-words-wrapper ">
                                <b className="is-visible">Developer.</b>
                                <b >Designer.</b>

                                <b>Creative.</b>
                            </span>
                        </h1>
                    </div>
                    <p>I'm a full stack web developer i can use Laravel , Bootstrap, Reactjs, Sql
                        and NoSql</p>
                    <Link
                        className="btn btn-outline-light btn-lg text-uppercase"
                        style={{
                        transition: "0.25s ease-in "
                    }}
                        data-bs-hover-animate="tada"
                        to="/resume">Go to resume</Link>
                </div>
            </section>
        </div>
    );
}

export default Header;
