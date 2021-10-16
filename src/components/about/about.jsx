import { Col, Row } from "antd";
import React from "react";
import "./about.css";

function About(){
    return(
        <div id="about">
            <div className="about-header">
                <div className="container">
                    <p className="about-header__heading">
                    About GKOPK
                    </p>
                </div>
            </div>
            <div className="about-content">
                <div className="container">
                    <Row  className="about-content__col-text" justify={"space-between"}>
                        <Col xs={{span:11, offset:0}}>
                            General Knowledge of Pakistan or gkopk.com is a unique platform for students of knowledge that seek to acquire education about Pakistan in general, and aspire to qualify tests for different Government of Pakistan based jobs. In addition, this platform will also provide with top-notch and well-researched articles and essays on current affairs, pakistan affairs and other topics that are considered important and compulsory for a student undergoing Government of Pakistan related job exams.
                            <br/><br/>
                            This database provides users with past papers from the job tests and specific knowledge related to specific categories in the navigation panels. Our simple question and answer format tends to increase the chances of recalling the right answer in the exam. We wish the best to all students, strive to become the source to their success and to become the path leading to the realisation of their goals.
                            <br/><br/>
                            We are open to any suggestions and warmly welcome feedback on our work. Please do not hesitate to contact us using the following email address. <span className="primary-color">gkpk.net@gmail.com</span>
                        </Col>
                        <Col className="about-content__col-image" xs={10}></Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default About;