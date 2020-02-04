import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {Container} from 'semantic-ui-react'
import store from '../../store'
import DisplayWrapper from "../Display/displayWrapper";

export default class Layout extends Component {


  render() {
    return (
      <Provider store={store}>
        <Container fluid textAlign="justified">
          <DisplayWrapper />
        </Container>
      </Provider>
    );
  }
}

