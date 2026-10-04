import { Component } from "react";

export default class UserList extends Component {
  state = {
    users: [],
    loading: true,
    userId: null,
    userDetails: null
  };

  componentDidMount() {
    // handle side-effects
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        setTimeout(() => {
          this.setState({
            users: json,
            loading: false,
          });
        }, 2000)
      );
  }

  handleRow=(id)=>{
    this.setState({
        userId: id
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log('updated');
    
    if(prevState.userId!=this.state.userId){
        fetch(`https://jsonplaceholder.typicode.com/users/${this.state.userId}`)
        .then((response) => response.json())
        .then((json) =>
            setTimeout(() => {
            this.setState({
                userDetails: json,
            });
            }, 2000)
        ); 
    }
  }
  render() {
    // if(this.state.loading){
    //     return <h3>Loading.....!</h3>
    // }
    return (
      <div>
        <h2>User list</h2>
        {!this.state.loading ? (
          <ul>
            {this.state.users.map(({ id, name }) => {
              return (
                <li 
                    key={id} 
                    style={{ cursor: "pointer" }}
                    onClick={()=>this.handleRow(id)}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        ) : (
          <h3>Fetching data from server.....!</h3>
        )}
        <h2>Selected user details</h2>
            <p>website: {this.state.userDetails?.website}</p>
            <p>phone: {this.state.userDetails?.phone}</p>
      </div>
    );
  }
}
