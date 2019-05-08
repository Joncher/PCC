import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";

class AboutSection extends Component {
  state = {
    scroll: 0
  };

  componentDidMount() {}

  render() {
    return (
      <Container
        className="about"
        style={{ minWidth: window.innerWidth * 0.5 }}
      >
        <Segment
          as="h1"
          size="massive"
          raised="true"
          className="welcome"
          id="about"
        >
          About
        </Segment>
        <Segment className="information">
          Most of us have found ourselves in a place in life where we are
          struggling with emotional or relationship stresses and though we may
          solve these issues on our own, would greatly appreciate a professional
          who could help us more safely and efficiently move through to a better
          place in life. This is the role of a professional counselor or
          therapist. Counseling is a healthcare service (often covered by
          insurance) that is designed to be personally healing and growth
          directed. The therapeutic process facilitates growth by first helping
          one reach stabilization. Then work is done to pull apart and redesign
          needed areas at the individual and relationship levels to foster
          growth.
          <br />
          <br />
          At the PCC counseling is about helping you reach and maintain a better
          balanced health and wellness.
          <br />
          <br />
          The Pastoral Counseling Center of Flushing, a non-denominational,
          non-profit organization, has been established to meet the needs for
          counseling in a broad range of social and personal matters to a
          cross-cultural society. The Center is a community-based facility where
          professionals address the needs of the whole person, enabling that
          individual to adapt and succeed in a radically, economically, and
          educationally diverse setting. PCC provides counseling to individuals
          with personal and emotional difficulties, which includes, but is not
          limited to spiritual problems, alcohol and substance abuse, marital
          and family matters. Pre-marital preparation, personality temperament
          analysis profiles, and marriage enrichment inventories are also
          available.
        </Segment>
      </Container>
    );
  }
}

export default AboutSection;
