import React, { Component } from "react";
import {
  Button,
  Container,
  Dimmer,
  Header,
  Image,
  Grid,
  Menu,
  Sticky,
  Ref
} from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./MainComponents/Navbar.js";
import ParaImage from "./MainComponents/ParaImage";
import AboutSection from "./Containers/AboutSection";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App" fluid>
          <Navbar />
          <ParaImage
            image="./StockPhotos/daylight-daytime-grass-808465.jpg"
            strength={750}
            height={window.innerHeight}
            info={"Welcome to PCC"}
            class="welcome"
          />

          <AboutSection height={window.innerHeight} />
          <Grid fluid={"true"} columns={1}>
            <Grid.Column>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
              <Button size="huge" fluid>
                Hey
              </Button>
            </Grid.Column>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default App;
