import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

const services = {
  //first tab
  "Marriage and Pre-Marital":
    "Every couple feels ebb and flow in their levels of closeness and harmony over time. This can range from basic concerns of stagnation to serious expressions of aggressive behavior. Thus, the goals of couples counseling can vary from improving the overall richness in the relationship to trying rebuilding the relationship in the most healthy way for all involved by attempting to resolve conflicts and healing wounds. Common topics leading to distress in marriages or other relationships may include: communication problems, infidelity issues, struggles around sex, anger, unrealistic expectations, and poor strategies to punish or leverage power over the other. Usually we ask couples to meet the first session together and then as needed, they may meet in the individual format as well.",
  //second tab
  "Individual Therapy":
    "This is a personally tailored opportunity to receive support and experience growth during challenging times. Individual counseling can help one deal with many personal topics in life such as anger, depression, anxiety, substance abuse, marriage and relationship challenges, parenting problems, school difficulties, career changes/issues & job stress, eating disorders etc. Individual therapy generally consists of weekly, 50 minute sessions with a registered counseling intern or a licensed therapist. We also offer a Pastoral counseling focus if desired.",
  // third tab
  "Family Therapy":
    "Often sought due to a life change or stress negatively affecting one or all areas of family closeness, family structure (rules and roles) or communication style. This mode of counseling can take a variety of forms. Sometimes it is best to see an entire family together for a few sessions. At other times it may be better to see children and their parents separately. Whatever the format, the goal of family counseling is to identify the dynamics that cause problems and to institute changes in the structure or style of how the family operates. A small change in one area can often have tremendous impact on other areas, which means that significant gains can often be produced quickly and dramatically. Common issues addressed in family counseling are concerns around parenting, sibling conflict, loss of family members, new members entering the family, dealing with a major move or a general change affecting the family system.",
  //fourth tab
  "Group Therapy":
    "Allows one to find out that they are not alone in their type of life challenge. To be involved in a group of peers who are in a similar place not only increases one’s understanding of the struggles around the topic but also the variety in the possible solutions available. Typically, groups are designed in a set of 8 sessions with each offering specific insights and skills on the common topic. Call to see which groups are available.  Common themes included are managing anger, enhancing self-esteem, dealing with divorce, stopping the cycle of domestic violence, recovering from abuse and trauma, substance abuse, etc."
};

const array = [];
class Services extends Component {
  state = { activeItem: "Marriage and Pre-Marital" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu attached="top" tabular>
          <Menu.Item
            name={Array.from(Object.keys(services))[0]}
            active={activeItem === Array.from(Object.keys(services))[0]}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name={Array.from(Object.keys(services))[1]}
            active={activeItem === Array.from(Object.keys(services))[1]}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name={Array.from(Object.keys(services))[2]}
            active={activeItem === Array.from(Object.keys(services))[2]}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name={Array.from(Object.keys(services))[3]}
            active={activeItem === Array.from(Object.keys(services))[3]}
            onClick={this.handleItemClick}
          />
        </Menu>
        <Segment attached="bottom">Stuff</Segment>
      </div>
    );
  }
}

export default Services;
