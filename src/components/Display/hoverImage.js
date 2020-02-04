import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Image, Card, Icon, Dimmer} from 'semantic-ui-react'

const sourceNameFormatter = sourceNameVal => `${sourceNameVal}`;
const readyInMinutesFormatter = sourceNameVal => `${sourceNameVal} minutes`;

class HoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      itemHover: false,
    };
    this.mouseOut.bind(this);
    this.mouseOver.bind(this);
  }

  mouseOver() {
    this.setState({itemHover: true});
  };

  mouseOut() {
    this.setState({itemHover: false});
  };

  render() {
    return (
      <div onMouseOver={() => this.mouseOver()} onMouseOut={() => this.mouseOut()}>
        <Dimmer.Dimmable dimmed={this.state.itemHover}>
          <Image
            as="a"
            href={this.props.sourceUrl}
            target="_blank"
            src={this.props.image}
            ui={true}
            wrapped
          />
        </Dimmer.Dimmable>
        <Dimmer active={this.state.itemHover}>
          <Card href={this.props.sourceUrl} target="_blank">
            <Card.Content>
              <Card.Header>{this.props.title}</Card.Header>
              <Card.Description>
                {sourceNameFormatter(this.props.sourceName)}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='time'/>
              {readyInMinutesFormatter(this.props.readyInMinutes)}
            </Card.Content>
          </Card>
        </Dimmer>
      </div>
    )
  }
}


export default connect((state) => ({}))(HoverImage)
