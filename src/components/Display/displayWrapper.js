import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Menu, Sidebar, Segment, Grid} from 'semantic-ui-react'
import {SagaActions} from '../../actions'
import Error from "../Error";
import FilterForm from "../forms/filterForm";
import HoverImage from "./hoverImage";


class DisplayWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      menuVisible: false,
      itemHover: false,
      formValues: {}
    };
    this.toggleVisibility.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(SagaActions.initRecipes());
  }

  toggleVisibility() {
    this.setState(oldState => ({menuVisible: !oldState.menuVisible}));
  }

  render() {
    const recipesMarkup = this.props.recipes ?
      this.props.recipes.map(recipeInfo =>
        <Grid.Column key={recipeInfo.id} className="image-element-class" >
          <HoverImage {...recipeInfo} />
        </Grid.Column>
      ) :
      <Error>{this.props.error}</Error>;
    // todo: add text on hover to each image

    return (
      <div>
        {/*Sidebar & pusher */}
        <Sidebar.Pushable as={Segment}>
          {/*Sidebar menu*/}
          <Sidebar visible={this.state.menuVisible} as={Menu} animation="push" width="thin" icon="labeled" vertical>
            <Menu.Item name="home">
              <FilterForm/>
            </Menu.Item>
          </Sidebar>
          {/*pusher container */}
          <Sidebar.Pusher style={{'padding-top': '5%'}}>
            <Segment basic>
              <Menu fixed="top" borderless>
                <Button className="item" onClick={() => this.toggleVisibility()}>
                  <i className="search icon large"/>
                </Button>
                <Menu.Item header={true} as="h5" position="right">
                  Delizioso
                </Menu.Item>
              </Menu>
              <Grid container columns={4}>
                  {recipesMarkup}
              </Grid>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}


export default connect((state) => ({
  recipes: state.recipes
}))(DisplayWrapper)
