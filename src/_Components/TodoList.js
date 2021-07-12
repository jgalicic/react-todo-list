import React, { Component } from "react"
import NewTodo from "./NewTodo"
import TodoItem from "./TodoItem"
import { uuid } from "uuidv4"

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      idCounter: 3,
      todoItems: [
        { id: 0, key: uuid(), name: "Wash the dishes", completed: false },
        { id: 1, key: uuid(), name: "Go to the gym", completed: false },
        { id: 2, key: uuid(), name: "Clean the bathroom", completed: false },
        { id: 3, key: uuid(), name: "Wash the car", completed: false },
      ],
    }
    this.addTodoItem = this.addTodoItem.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
    this.editItem = this.editItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addTodoItem(tempTodoItem) {
    let myArr = [...this.state.todoItems]

    tempTodoItem.id = this.state.idCounter + 1
    tempTodoItem.key = uuid()

    myArr.push(tempTodoItem)

    this.setState(
      (prevState) => {
        return { idCounter: prevState.idCounter + 1, todoItems: myArr }
      },
      () => {
        // console.log(this.state)
      }
    )
  }

  toggleCompleted(todoItemId) {
    let tempTodoItems = [...this.state.todoItems]

    let tempTodoItem = tempTodoItems.filter(
      (t) => t.id === parseInt(todoItemId)
    )

    tempTodoItem = tempTodoItem[0]

    tempTodoItem.completed = !tempTodoItem.completed

    this.setState({ todoItems: tempTodoItems })
  }

  editItem(todoItemId, updatedText) {
    let tempTodoItems = [...this.state.todoItems]

    let tempTodoItem = tempTodoItems.filter(
      (tEdit) => tEdit.id === parseInt(todoItemId)
    )

    console.log(tempTodoItem)

    tempTodoItem = tempTodoItem[0]

    tempTodoItem.name = updatedText

    this.setState({ todoItems: tempTodoItems }, () => {
      console.log(this.state)
    })
  }

  deleteItem(todoItemId) {
    this.setState(
      {
        todoItems: this.state.todoItems.filter((t) => t.id !== todoItemId),
      },
      () => {
        console.log(this.state)
      }
    )
  }

  render() {
    // Map over all of the elements in an array
    const todoItems = this.state.todoItems.map((todo) => (
      <TodoItem
        {...this.state}
        id={todo.id}
        key={todo.key}
        name={todo.name}
        completed={todo.completed}
        toggleCompleted={this.toggleCompleted}
        deleteItem={this.deleteItem}
        editItem={this.editItem}
      />
    ))

    return (
      <div className="TodoList">
        <h1>Things You Should Do</h1>
        <p>Like right now</p>
        <hr></hr>
        {todoItems}

        <NewTodo {...this.state} addTodoItem={this.addTodoItem} />
      </div>
    )
  }
}
