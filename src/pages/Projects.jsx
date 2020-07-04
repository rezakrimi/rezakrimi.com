import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CardBody, CardText } from "react-bootstrap/Card";

export class Projects extends Component {
    render() {
        return (
            <Container
                fluid={true}
                style={{
                    padding: "20px 20px 100px 20px",
                    backgroundColor: "#FFD300",
                }}
            >
                <Row>
                    <Col xs={12}>
                        <Card style={{ width: "100%", marginBottom: "30px" }}>
                            <Card.Body>
                                <Card.Title>
                                    NSERC USRA Undergraduate Research
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Real-Time Seizure Detection Using Machine
                                    Learning
                                </Card.Subtitle>
                                <Card.Text>
                                    <p>
                                        Approximately 360,000 Canadians live
                                        with epilepsy and it affects 1-in-100
                                        people worldwide. Over the past years
                                        and with the rise of machine learning,
                                        there have been a lot of research going
                                        on in the field of detecting epileptic
                                        seizures, which have resulted in
                                        detecting these seizures with a high
                                        accuracy. But yet, there is no
                                        commercial device available that has an
                                        acceptable performance. One reason is
                                        that there are a lot of limitations to
                                        these kind of devices, one being the
                                        limits for power consumption. Another
                                        problem is that epileptic seizures come
                                        in various number of forms and they can
                                        differ across patients.
                                    </p>
                                    <p>
                                        So the goal of this project was to
                                        develop a patient-specific algorithm
                                        that can detect seizures with a high
                                        accuracy using data from limited number
                                        of electrodes on the brain surface to
                                        make it suitable for a wearable device.
                                        The features, or in other words, the
                                        numerical data that are considered for
                                        detecting seizures are the spectral
                                        energy bands and the Phase Locking Value
                                        between all possible pair of electrodes.
                                        Since a device like this should be
                                        constantly calculating the feature of
                                        upcoming signals, the efficiency of this
                                        part is very important. The feature
                                        extraction module was speeded up by 80%
                                        by vectorizing the implementation.
                                        Support Vector Machines are well known
                                        to be very efficient in addition to
                                        being a very reliable classifier. To
                                        increase the accuracy even further, we
                                        used a Gaussian kernel with the
                                        classifier to detect non-linear data
                                        .The obtained models, tested across 24
                                        patients, gave us a sensitivity of 96%,
                                        specificity of 99%, and precision of
                                        97%. The results are comparable to the
                                        state of the art, while being efficient
                                        enough to be suitable for wearable
                                        devices.
                                    </p>
                                    <p>
                                        <strong>Accomplishments</strong>
                                        <ul>
                                            <li>
                                                My paper for this work has been
                                                accepted at
                                                <a href="https://www.iscas2020.org/">
                                                    {" "}
                                                    ISCAS 2020{" "}
                                                </a>
                                                .
                                            </li>
                                            <li>
                                                Selected as one of the top 5
                                                projects to have an oral
                                                presentation at the{" "}
                                                <a href="http://www.lassondeundergraduateresearch.com/past-researchers">
                                                    Lassonde School of
                                                    Engineering Undergraduate
                                                    Research Conference
                                                </a>{" "}
                                                among ~70 other reasearch
                                                project.{" "}
                                            </li>
                                            <li>
                                                Received the{" "}
                                                <a href="https://yfile.news.yorku.ca/2019/08/30/lassonde-undergraduate-summer-student-research-conference-narrows-in-on-sustainability-and-inclusivity/">
                                                    first place
                                                </a>{" "}
                                                for having the best presentation
                                                of the conference.
                                            </li>
                                        </ul>
                                    </p>
                                    <p>Here are my presentation slides at the conference:</p>
                                    <iframe
                                        src="https://onedrive.live.com/embed?cid=95BBDE332BC065CD&amp;resid=95BBDE332BC065CD%21112&amp;authkey=AAhyeJfiGkKZxmw&amp;em=2&amp;wdAr=1.7777777777777777"
                                        width="100%"
                                        height="500vh"
                                        frameborder="0"
                                    >
                                        This is an embedded{" "}
                                        <a
                                            target="_blank"
                                            href="https://office.com"
                                        >
                                            Microsoft Office
                                        </a>{" "}
                                        presentation, powered by{" "}
                                        <a
                                            target="_blank"
                                            href="https://office.com/webapps"
                                        >
                                            Office
                                        </a>
                                        .
                                    </iframe>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <Card.Body>
                                <Card.Title>LumberJack AI Bot</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col xs={12} md={7}>
                                            <p>LumberJack is a web-based game. This bot captures a snapshot from the game and then creates a map representing the current state of the game. The bot then plans the moves for the current state and performs them. Once the actions are finished, the bot takes another screenshot to decide the next moves.</p>
                                            <p>This script was written in python and to improve performance, it uses MSS instead of PIL. MSS is much faster than PIL in taking screenshots. The created captured screenshots are then converted to PIL format to be processed.</p>
                                        </Col>
                                        <Col xs={12} md={5}>
                                            <div style={{textAlign:"center"}}>
                                            <img src='/lumberjack.gif' alt="LumberJack Gif" style={{ height:"300px" }}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="dynamicTitle" style={{ marginTop: "50%;" }}>
                    More Projects To Be Added Soon (Like Really Soon)
                </div>
            </Container>
        );
    }
}

export default Projects;
