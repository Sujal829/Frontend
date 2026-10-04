import { Component } from "react";

export default class Example extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // used to perform operation like calculation or anyother state change
    if (this.state.value.trim().length) {
      console.log("current value", this.state.value);
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    // to handle unneccessary re-renndering
      if (nextProps.title != this.props.title || nextState.value!= this.state.value ) {
        console.log('shouldComponentUpdate called', nextProps);
        return true;
    }
    return false
  }

  componentWillUnmount(){
    console.log('Component is removed from DOM');
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <input value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}
