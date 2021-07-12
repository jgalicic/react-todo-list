import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.enterEditMode = this.enterEditMode.bind(this)
    this.editMe = this.editMe.bind(this)
    this.exitEditMode = this.exitEditMode.bind(this)
    this.deleteMe = this.deleteMe.bind(this)

    this.state = {
      editMode: false,
    }
  }

  handleClick(evt) {
    this.props.toggleCompleted(evt.target.id)
  }

  enterEditMode() {
    this.setState(
      (prevState) => {
        return { editMode: !prevState.editMode }
      },
      () => {
        // console.log("!", this.state)
      }
    )
  }

  editMe(evt) {
    this.props.editItem(this.props.id, evt.target.value)
  }

  exitEditMode(evt) {
    evt.preventDefault()
    this.setState({ editMode: false })
  }

  deleteMe() {
    this.props.deleteItem(this.props.id)
  }

  render() {
    let itemClassNames = "item"
    if (this.props.completed) itemClassNames += " completed"

    let editModeOff = (
      <p
        onClick={this.handleClick}
        id={this.props.id}
        className={itemClassNames}
      >
        {this.props.name}
      </p>
    )
    let editModeOn = (
      <form onSubmit={this.exitEditMode}>
        <div className="newTodoForm editModeForm">
          <input
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.editMe}
          ></input>
        </div>
      </form>
    )
    return (
      <div className="TodoItem">
        {this.state.editMode ? editModeOn : editModeOff}
        <div className="todoIcons">
          {this.state.editMode ? (
            <FontAwesomeIcon
              onClick={this.exitEditMode}
              className="faIcon"
              icon={faCheck}
            />
          ) : (
            <FontAwesomeIcon
              onClick={this.enterEditMode}
              className="faIcon"
              icon={faEdit}
            />
          )}

          <FontAwesomeIcon
            onClick={this.deleteMe}
            className="faIcon"
            icon={faTrash}
          />
        </div>
      </div>
    )
  }
}
