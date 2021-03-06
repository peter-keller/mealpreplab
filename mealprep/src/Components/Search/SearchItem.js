import React, { Component } from "react";
import { Form } from "reactstrap";
import "./Search.css";

class SearchItem extends Component {
  submitForm = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  render() {
    return (
      <Form onSubmit={this.submitForm} className="text-center">
        <input className="form__input" type="text" name="recipeName" />
        <button className="btn btn-primary btn-lg rounded-pill">Search</button>
      </Form>
    );
  }
}

export default SearchItem;
