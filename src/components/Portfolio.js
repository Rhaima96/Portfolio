import React from 'react';
import Navbar from './Navbar';
const Portfolio = () => {
    return (
        <div>
            <Navbar></Navbar>

            <section
                className="d-lg-flex align-items-lg-center clean-block clean-pricing dark clean-block clean-hero"
                style={{
                paddingTop: "7.5rem",
                backgroundImage: "url(assets/img/tech/image4.jpg)",
                color: "rgba(9, 162, 255, 0.68)",
                paddingBottom: "8.8rem",
            }}>
                <div
                    className="container text-dark"
                    style={{
                    zIndex: "9"
                }}>
                    <div className="row justify-content-center">
                        <div
                            className="col-md-5 col-lg-4"
                            style={{
                            marginBottom: "1rem"
                        }}>
                            <div
                                className="clean-pricing-item"
                                style={{
                                height: "100%",
                                borderRadius: "0.375rem"
                            }}>
                                <div className="heading">
                                    <h3>Labo&nbsp;</h3>
                                </div>
                                <p>Laboratory management project for the ministry of education</p>
                                <div className="features">
                                    <h4 className="d-md-flex flex-column justify-content-md-center">
                                        <span className="feature">Technologies:&nbsp;</span>
                                        <span>Laravel,Bootsrap,<br/>SweetAlert2<br/><br/></span>
                                    </h4>
                                    <h4>
                                        <span className="feature">Duration:&nbsp;</span>
                                        <span>24Days</span>
                                    </h4>
                                </div>
                                <div className="price"></div>
                                <a
                                    href="https://www.loom.com/share/dfb13a6a2dfd4d5d831ba7c71e5fe551"
                                    target="_blank"
                                    className="btn btn-outline-primary btn-block"
                                    type="button">Show Video</a>
                            </div>
                        </div>
                        <div
                            className="col-md-5 col-lg-4"
                            style={{
                            marginBottom: "1rem"
                        }}>
                            <div
                                className="clean-pricing-item"
                                style={{
                                height: "100%",
                                marginBottom: "1rem",
                                borderRadius: "0.375rem"
                            }}>
                                <div className="heading">
                                    <h3>Mndoob</h3>
                                </div>
                                <p>online delivery project for a Saudi company</p>
                                <div className="features">
                                    <h4>
                                        <span className="feature"><br/>
                                            <strong>Technologies:&nbsp;</strong><br/></span>
                                        <span>Laravel,Bootstrap<br/><br/></span>
                                    </h4>
                                    <h4>
                                        <span className="feature">Duration:&nbsp;</span>
                                        <span>10 Days</span>
                                    </h4>
                                </div>
                                <div className="price"></div>
                                <a
                                    href="https://www.loom.com/share/9645d5e3a2f248339a6179618edc92fb"
                                    target="_blank"
                                    className="btn btn-outline-primary btn-block"
                                    type="button">
                                    <strong>Show Video</strong><br/></a>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div
                                className="clean-pricing-item"
                                style={{
                                height: "96%",
                                borderRadius: "0.375rem"
                            }}>
                                <div className="heading">
                                    <h3>Porfolio</h3>
                                </div>
                                <p>My personal portfolio<br/><br/><br/></p>
                                <div className="features">
                                    <h4>
                                        <span className="feature">
                                            <strong>Technologies:&nbsp;</strong><br/></span>
                                        <span>Reactjs,Bootstrap</span>,<br/>Material/ui<br/></h4>
                                    <h4>
                                        <span className="feature">Duration:&nbsp;</span>
                                        <span>3 Days</span>
                                    </h4>
                                </div>
                                <div className="price"></div>
                                <button className="btn btn-outline-primary btn-block" type="button">Portfolio Link</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
