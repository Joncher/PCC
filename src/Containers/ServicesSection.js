import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";
import Services from "../MainComponents/Services";

class AboutSection extends Component {
  render() {
    return (
      <Container className="main" style={{ maxWidth: window.innerWidth * 0.5 }}>
        <Segment as="h1" size="massive" raised="true" className="header">
          About
        </Segment>
        <Segment className="information">
          <Services />
        </Segment>
      </Container>
    );
  }
}

export default AboutSection;
