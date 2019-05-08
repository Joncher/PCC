import React, { Component } from "react";
import {
  Grid,
  Segment,
  Menu,
  Divider,
  Container,
  Form
} from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Menu fluid inverted color="blue" borderless className="secondary footer">
        <Menu.Item id="address">
          Our Flushing office is located at: <br /> <br />
          147-05 Sanford Avenue, #L2 <br />
          Flushing, New York 11355 <br />
          Phone: 718-463-4613 <br />
          Fax: 718-661-4462
        </Menu.Item>
        <Menu.Item as="Form" id="form">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Contact us here:"
              placeholder="First name"
            />
            <Form.Input placeholder="E-mail" />
            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Footer;
