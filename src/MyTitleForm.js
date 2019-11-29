import React, { Component } from "react";

class MyTitleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "Awesome Title" };
    this.change=this.change.bind(this);
  }

  change(event) {
    const input=event.target.value;
    const val=input.replace(/,"");
    this.setState({title:val});
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <label htmlFor="title">Title :</label>
        
        <input
          onChange={this.change}       
          id="title" type="text" />
      </div>
    );
  }
}

export default MyTitleForm;
