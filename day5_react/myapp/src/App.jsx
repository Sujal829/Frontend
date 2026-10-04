import { Component } from "react";
import "./App.css";
import DisplayCounter from "./components/DisplayCounter";
import UserList from "./components/UserList";
// import DisplayCounter from "./components/StatelessDisplayCounter";

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
    flag: false,
  };

  componentDidMount() {
    console.log("mounted after first render");
  }

  handleClick = () => {
    console.log("clicked!");
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    // console.log('counter', this.state.counter);

    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => {
        console.log("counter", this.state.counter);
      }
    );
  };

  handleToggle = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter != this.state.counter) {
      console.log("prevvious", prevProps, prevState);
      console.log("current", this.state);

      alert("state updated");
    }
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.state.flag && 
          <DisplayCounter counter={this.state.counter} />
        }
        <button onClick={this.handleClick}>Increase</button>
        <button onClick={this.handleToggle}>Toggle</button>
        <UserList />
      </div>
    );
  }
}

export default App;
