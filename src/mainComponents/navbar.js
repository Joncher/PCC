import React from "react";
import { Grid, Menu, Sticky } from "semantic-ui-react";

class Navbar extends React.Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu inverted borderless color="blue" className="secondary fixed">
        {/* left side of Navbar  */}
        <Menu.Item as="h2" style={{ fontSize: "1.5vw" }}>
          Pastoral Counseling Center of Flushing
        </Menu.Item>
        {/* right side of Navbar */}
        <Menu.Menu position="right">
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
            as="h4"
          >
            About
          </Menu.Item>

          <Menu.Item
            name="services"
            active={activeItem === "services"}
            onClick={this.handleItemClick}
            as="h4"
          >
            Services
          </Menu.Item>

          <Menu.Item
            name="testimonals"
            active={activeItem === "testimonals"}
            onClick={this.handleItemClick}
            as="h4"
          >
            Testimonals
          </Menu.Item>
          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
            as="h4"
          >
            Contact
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default Navbar;
