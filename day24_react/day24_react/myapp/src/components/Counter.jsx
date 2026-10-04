import { Component } from "react";
import { connect } from 'react-redux'
import { decrement, increment } from "../redux/actions";

class Counter  extends Component{
    state ={
        local: ''
    }
    render(){
        const {count, increment, decrement } = this.props;
        return(
            <div>
                <h2>Class component with Redux and without thunk </h2>
                <h1>{count}</h1>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
        )
    }
    
}

const mapStateProps=(state)=>({
    count: state.counter.count
});

const mapDispatchProps ={
    increment,
    decrement
}
export default connect(mapStateProps, mapDispatchProps)(Counter);
