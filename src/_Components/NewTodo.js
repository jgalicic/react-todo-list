import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export default class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      id: "",
      key: "",
      name: "",
      completed: false,
    }
  }

  handleSubmit(evt) {
    evt.preventDefault()

    this.props.addTodoItem(this.state)

    this.setState({ name: "" })
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="newTodoForm">
          <input
            type="text"
            name="name"
            placeholder="Enter new todo"
            onChange={this.handleChange}
            value={this.state.name}
          ></input>
          <button>
            <FontAwesomeIcon className="faIcon" icon={faPlus} />
          </button>
        </div>
      </form>
    )
  }
}
