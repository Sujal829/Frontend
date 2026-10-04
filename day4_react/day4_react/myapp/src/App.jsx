import { Component } from "react";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  //OR
  state = {
      counter: 0,
  }

  componentDidMount(){
    console.log('mounted after first render');
  }

  handleClick=()=>{
    console.log('clicked!')
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    // console.log('counter', this.state.counter);

     this.setState({
      counter: this.state.counter + 1
    },()=>{
      console.log('counter', this.state.counter);
    });
  }

  componentDidUpdate(prevProps, prevState){
    console.log('prevvious', prevProps, prevState);
    console.log('current', this.state);
    
    if( prevState.counter!= this.state.counter && this.state.counter > 5){
      console.log('counter is 5, now reset to zero');
      
      this.setState({counter: 0})
    }
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}

export default App;
