// stateless component
function DisplayCounter(props){
    console.log(props);
    return(<h2>{props.counter}</h2>)
}

export default DisplayCounter;