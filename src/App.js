import './App.css';
import TextField from '@atlaskit/textfield';
import Button from "@atlaskit/button";
import { useState, useCallback } from 'react';
import TodoList from './components/TodoList';
import {v4} from 'uuid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput]  = useState("");
  const onAddButtonClick = useCallback( (e) => {
    if (textInput === "") {
      alert("todo empty!");
      return;
    }
    setTodoList(
      [{id : v4(), name : textInput, isCompleted : false},
      ...todoList]
    );
    setTextInput("");
 }, [todoList, textInput]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onCheckBtnClick = useCallback( (id) => {
    setTodoList((prevState) => prevState.map(todo => todo.id === id ? {...todo, isCompleted : true} : todo));
  }, []);
  
  return (
    <div className="App">
        <h3>Todo list reactjs</h3>
        <TextField 
          name='add-todo' placeholder='Add a todo'
          elemAfterInput = {
            <Button
              appearance = "primary"
              onClick={onAddButtonClick}
              >Add</Button>
          }
          css={{padding: "2px 4px 2px"}}
          value={textInput}
          onChange={onTextInputChange}
          >
        </TextField>
        <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick}/>
    </div>
  );
}

export default App;
