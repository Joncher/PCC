import React, { Component } from "react";
import { Parallax } from "react-parallax";
import { Container } from "semantic-ui-react";

const insideStyles = {
  background: "rgb(128,128,128,0.3)",
  padding: 20,
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
class ParaImage extends Component {
  render() {
    console.log(this.props.image);
    return (
      <Parallax
        bgImage={require(`${this.props.image}`)}
        strength={this.props.strength}
      >
        <Container style={{ height: this.props.height }}>
          <div className={this.props.class} style={insideStyles}>
            <h1 className={this.props.class}>{this.props.info}</h1>
          </div>
        </Container>
      </Parallax>
    );
  }
}
export default ParaImage;
