import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Emoji from "../components/Emoji";

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
        };
        this.updateTitle = this.updateTitle.bind(this);
        this.timer = this.timer.bind(this);
    }

    timer(ms) {
        return new Promise((res) => setTimeout(res, ms));
    }

    async updateTitle() {
        var chars = [
            "#",
            "#",
            "#",
            "#",
            "M",
            "y",
            " ",
            "n",
            "a",
            "m",
            "e",
            " ",
            "i",
            "s",
            " ",
            "R",
            "e",
            "z",
            "a",
            " ",
            "a",
            "n",
            "d",
            " ",
            "y",
            "e",
            "s",
            ",",
            " ",
            "m",
            "y",
            " ",
            "f",
            "a",
            "v",
            "o",
            "r",
            "i",
            "t",
            "e",
            " ",
            "c",
            "o",
            "l",
            "o",
            "r",
            " ",
            "i",
            "s",
            " ",
            "p",
            "i",
            "n",
            "k",
            "#",
            "#",
            "#",
            "#",
            "#",
            "#",
            "#",
            "#",
            "#",
            "-",
            "#",
            "-",
            "#",
            "-",
            "#",
            "-",
            "#",
            "#",
            "#",
            "#",
            "y",
            "e",
            "l",
            "l",
            "o",
            "w",
            "#",
            "#",
            "#",
            "#",
            "#",
            "#",
            "#",
            "#",
            "#",
            "#",
            "#",
            ".",
        ];
        for (var i = 0; i < chars.length; i++) {
            var temp = this.state.title;
            if (chars[i] == "-") {
                temp = temp.substr(0, temp.length - 1);
            } else if (chars[i] != "#") {
                temp += chars[i];
            }
            this.setState({
                title: temp,
            });
            await this.timer(110);
        }
    }

    componentDidMount() {
        this.updateTitle();
    }

    render() {
        return (
            <Container
                fluid={true}
                style={{
                    padding: "20px 20px 100px 20px",
                    backgroundColor: "#FFD300",
                }}
            >
                <Row className="justify-content-md-center">
                    <Col
                        xs={4}
                        className="emojiContainer d-none d-lg-block"
                        style={{ padding: "70px 0px 0px 200px" }}
                    >
                        <Emoji width="70px" height="70px" />
                    </Col>
                    <Col xs={4}>
                        <div className="profilePicFrame">
                            <img
                                className="profilePic"
                                src="https://rezakrimi.s3.us-east-2.amazonaws.com/photo_2019-09-15_18-30-30.jpg"
                            />
                        </div>
                    </Col>
                    <Col xs={4} className="emojiContainer d-none d-lg-block">
                        <Emoji width="150px" height="150px"/>
                    </Col>
                </Row>
                <Row
                    className="justify-content-md-center"
                    style={{ marginTop: "50px" }}
                >
                    <Col xs="auto">
                        <div className="dynamicTitle">
                            <p>{this.state.title}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
