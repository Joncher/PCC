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
import { Route, Switch } from "react-router-dom";

import Navbar from "./MainComponents/Navbar.js";
import ParaImage from "./MainComponents/ParaImage";
import AboutSection from "./Containers/AboutSection";
import ServicesSection from "./Containers/ServicesSection";
import Footer from "./MainComponents/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container className="App" fluid>
        <Navbar />

        <Switch>
          <Route exact path="/" component={ParaImage} />
          <Route exact path="/about" component={AboutSection} />
          <Route exact path="/services" component={ServicesSection} />
        </Switch>

        <Footer />
      </Container>
    );
  }
}

export default App;
