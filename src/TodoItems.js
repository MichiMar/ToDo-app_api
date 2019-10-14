import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: props.done
    };
  }

  toggleDone = () => {
    fetch(`https://mar-todo-api.herokuapp.com/todo/${this.props.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: this.props.title,
        done: !this.state.done
      })
      // @ts-ignore
    }).then(this.setState({ done: !this.state.done }));
  };

  render() {
    return (
      <div className="todo-item">
        <button onClick={() => this.props.delete(this.props.id)}>X</button>
        <input
          type="checkbox"
          onChange={this.toggleDone}
          defaultChecked={this.state.done}
        />
        <p className={this.state.done && "done"}>{this.props.title}</p>
      </div>
    );
  }
}

export default TodoItem;

// && logic operator, si el primero es true, aplica done, si no, no aplica nada, es nulo automatico
/// || or, se anota en seguida el siguiente
