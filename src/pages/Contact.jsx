import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export class Contact extends Component {
    render() {
        return (
            <Container
                fluid={true}
                style={{ padding: "20px 20px 100px 20px", backgroundColor: "#FFD300" }}
            >
                <div className="dynamicTitle" style={{marginTop:"50%;"}}>
                    Coming Soon (Like Really Soon)
                </div>
            </Container>
        )
    }
}

export default Contact
