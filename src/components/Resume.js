import React, {Component} from 'react';
import Navbar from './Navbar';


class Resume extends Component {

    render() {

        return (
            <div>
                <Navbar ></Navbar>
                <section
                    class="clean-block clean-hero"
                    style={{
                    backgroundImage: "url(assets/img/tech/image4.jpg)",
                    color: "rgba(9, 162, 255, 0.68)", height:"43.125rem"
                }}>
                    <div class="text"><img
                        class="img-fluid shadow"
                        src="assets/img/mon-cv-1.png"
                        style={{
                width: "25rem"
            }}
                        alt="My Resume"/></div>
                </section>
            </div>
        );
    }
}

export default Resume;
