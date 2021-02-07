import React, {Component} from 'react';
import Navbar from './Navbar';
import emailjs from 'emailjs-com';

class Contact extends Component {
    render() {
        function sendEmail(e) {
            e.preventDefault();

            emailjs
                .sendForm('service_nvzecgp', 'template_9xwvano', e.target, 'user_s3ztz35ZvB7NKTBvEfK0q')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e
                .target
                .reset()
        }

        return (
            <div>
                <Navbar></Navbar>
                <section
                    className="d-flex flex-column justify-content-center align-items-center clean-block clean-hero clean-form dark"
                    style={{
                    height: "43.125rem",
                    backgroundImage: "url(assets/img/tech/image4.jpg)",
                    color: "rgba(9, 162, 255, 0.68)"
                }}>
                    

                    <div
                        className="container caption text-dark text-left"
                        style={{
                        zIndex: "9"
                    }}>
                        <form onSubmit={sendEmail} style={{borderRadius:"0.4rem"}}>
                        <h1
                        className=" text-dark text-center"
                        style={{
                        zIndex: "13"
                    }}>CONTACT ME</h1>
                            <div className="form-group">
                                <label>Name</label><input required className="form-control" type="text" name="name"/>
                            </div>
                            <div className="form-group">
                                <label>Subject</label><input required className="form-control" type="text" name="subject"/>
                            </div>
                            <div className="form-group">
                                <label>Email</label><input
                                    className="form-control"
                                    type="email"
                                    name="email" required
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea required className="form-control" name="message"></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-outline-primary  btn-block" type="submit">Send</button>
                            </div>
                        </form>
                    </div>

                </section>
            </div>
        );
    }
}

export default Contact;
