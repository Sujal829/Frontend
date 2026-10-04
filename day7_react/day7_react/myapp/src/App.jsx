import { Component } from "react";
import "./App.css";
import Example from "./components/UpdateCycle";

export default class App extends Component {
  state = {
    title: 'Sample 2',
    flag: false
  }
  componentDidMount(){
    console.log('Mounted after first render');
  }

  handleChange=(e)=>{
    this.setState({ title: e.target.value });
  }

  handleToggle=()=>{
    this.setState({flag: !this.state.flag})
    // this.setState(prev => ({flag: !prev}))
  }

  render() {
    return <div>App class Component
      <input value={this.state.title} onChange={this.handleChange} />
      <button onClick={this.handleToggle}>Toggle</button>
     {this.state.flag && <Example title="Sample1"/>}
      <Example title={this.state.title}/>
    </div>;
  }
}

// OR export default App;
