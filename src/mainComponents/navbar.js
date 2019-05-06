import React from "react";
import {
  Button,
  Container,
  Dimmer,
  Header,
  Image,
  Segment,
  Grid,
  Form,
  Menu,
  Sticky
} from "semantic-ui-react";

class Navbar extends React.Component {
  state = {};
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Sticky>
        <Menu inverted borderless color="blue" className="secondary ">
          <Menu.Item as="h2">Pastoral Counseling Center of Flushing</Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item
              name="editorials"
              active={activeItem === "editorials"}
              onClick={this.handleItemClick}
              as="h4"
            >
              Editorials
            </Menu.Item>

            <Menu.Item
              name="reviews"
              active={activeItem === "reviews"}
              onClick={this.handleItemClick}
              as="h4"
            >
              Reviews
            </Menu.Item>

            <Menu.Item
              name="upcomingEvents"
              active={activeItem === "upcomingEvents"}
              onClick={this.handleItemClick}
              as="h4"
            >
              Upcoming Events
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sticky>
    );
  }
}
export default Navbar;
