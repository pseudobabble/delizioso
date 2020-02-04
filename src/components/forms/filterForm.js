import React, { Component } from 'react'
import {Form, Header} from 'semantic-ui-react'
import { SagaActions } from "../../actions";
import {connect} from "react-redux";

const cuisineOptions = [
  "African",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese"].map(item => ({key: item, text: item, value: item}));

const mealTypeOptions = [
  "main course",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink"
].map(item => ({key: item, text: item, value: item}));

const dietOptions = [
  "gluten free",
  "ketogenic",
  "vegetarian",
  "lacto-vegetarian",
  "ovo-vegetarian",
  "vegan",
  "pescetarian",
  "paleo",
  "primal",
  "whole30"
].map(item => ({key: item, text: item, value: item}));




class FilterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.state, filterFormData: {}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, result) {
    // Get the values from the Input
    const { name, value } = result;

    // get the filterFormData from this.state
    const { filterFormData } = this.state;

    // set the filterFormData attrs
    filterFormData[name] = value;

    // set the filterFormData back into component state
    this.setState({...this.state, [name]: value });
  }

  handleSubmit(event, result) {
    const { filterFormData } = this.state; // get the filterFormData from this.state
    const queryString = '&tags=' + Object.values(filterFormData);

    this.props.dispatch(SagaActions.getRecipes(queryString))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Header as="h3">
          Search
        </Header>
        <Form.Group widths='1'>
          <Form.Select fluid label='Cuisine' name="cuisine" options={cuisineOptions} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group widths='1'>
          <Form.Select fluid label='Meal Type' name="mealType" options={mealTypeOptions} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group widths='1'>
          <Form.Select fluid label='Diet' name="diet" options={dietOptions} onChange={this.handleChange} />
        </Form.Group>
        <Form.Button content="Submit">Submit</Form.Button>
      </Form>
    )
  }
}

export default connect((state) => ({
  filterFormData: state.filterFormData
}))(FilterForm)

