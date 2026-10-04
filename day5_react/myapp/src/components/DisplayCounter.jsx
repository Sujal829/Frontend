import { Component } from "react";

class DisplayCounter extends Component{
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps);
        if(this.props.counter != nextProps.counter){
            return true
        }
        return false
    } 
    
    componentWillUnmount(){
        console.log('componentWillUnmount called, cleanup!');
    }

    render(){
        console.log('DisplayCounter Class component');
        return(<h2>{this.props.counter}</h2>)
    }
}

export default DisplayCounter;