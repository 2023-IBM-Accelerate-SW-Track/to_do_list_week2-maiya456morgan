import React from "react";
import "../component/todos.css";
import { Card, CardContent, Grid } from "@mui/material";
import ListItemButton from "@mui/material";
import ListItemText from "@mui/material";
import Checkbox from "@mui/material";


//Add deleteTodo as a new property to the Todos component to correspond to the new deleteTodo() function
//Within the Checkbox component, add an onClick event handler to call the deleteTodo() function and pass the todo item's id as 
//a parameter. Hint: Use an Arrow Function. Click here to learn about passing functions to components.

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card>
            {/* Remember, we set the local state of this todo item when the user submits the form in 
            AddTodo.js. All we need to do is return the todo list item {todo.content} */}
              <ListItemButton component="a" href="#simple-list">
                <Checkbox style ="color:primary; paddingLeft: 0 " onClick={() => this.deleteTodo(todo.id)}/>
                <ListItemText primary={todo.content} secondary={this.date}/>
              </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left </p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
