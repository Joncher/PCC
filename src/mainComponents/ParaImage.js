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
        bgImage={require("./StockPhotos/daylight-daytime-grass-808465.jpg")}
        strength={750}
      >
        <Container style={{ height: window.innerHeight }}>
          <div id={"header"} style={insideStyles}>
            <h1 id={"header"}>{"Welcome to PCC"}</h1>
          </div>
        </Container>
      </Parallax>
    );
  }
}
export default ParaImage;
