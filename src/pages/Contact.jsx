import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Emoji from '../components/Emoji'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export class Contact extends Component {
    render() {
        return (
            <Container
                fluid={true}
                style={{ padding: "20px 20px 100px 20px", backgroundColor: "#FFD300" }}
            >
                <Row className="justify-content-md-center">
                    <Col xs={4} className="emojiContainer d-none d-lg-block" style={{padding:"70px 0px 0px 200px"}}>
                        <Emoji width="70px" height="70px"/>
                    </Col>
                    <Col xs={4} className="emojiContainer d-none d-lg-block">
                        <Emoji width="300px" height="300px"/>
                    </Col>
                    <Col xs={4} className="emojiContainer d-none d-lg-block">
                        <Emoji width="150px" height="150px"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="dynamicTitle">
                            Email: rezakrimi@gmail.com
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="dynamicTitle">
                            Phone: (416) 570 8482
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} style={{fontSize:"400%", textAlign:"center", color:"#343a40"}}>
                        <a href="https://www.linkedin.com/in/rezakrimi/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </Col>
                    <Col xs={4} style={{fontSize:"400%", textAlign:"center", color:"#343a40"}}>
                        <a href="https://github.com/rezakrimi" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </Col>
                    <Col xs={4} style={{fontSize:"400%", textAlign:"center", color:"#343a40"}}>
                        <a href="https://stackoverflow.com/users/7158702/reza-karimi" target="_blank">
                            <FontAwesomeIcon icon={faStackOverflow} />
                        </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Contact
