import { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, addTodo } from "../redux/actions";

class TodoList extends Component {
  state = {
    input: "",
  };
  render() {
    const { todos, handleAdd, handleDelete } = this.props;
    console.log(todos);
    
    return (
      <div>
        <h2>Class component with Redux and without thunk </h2>
        <ul>
          {todos.map(({id, text}) => (
            <li key={id}>
              {text}
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          ))}
        </ul>
        <input value={this.state.input} placeholder="Enter task name"onChange={({target})=> this.setState({input: target.value})} />
        <button onClick={()=>{
            handleAdd(this.state.input)
            this.setState({input:''})
            }}>addTodo</button>
      </div>
    );
  }
}

const mapStateProps = (state) => ({
  todos: state.todoTasks.todo,
});

const mapDispatchProps = {
  handleAdd:addTodo,
  handleDelete: deleteTodo,
};

export default connect(mapStateProps, mapDispatchProps)(TodoList);
