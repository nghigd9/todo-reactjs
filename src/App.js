import './App.css';
import TextField from '@atlaskit/textfield';
import Button from "@atlaskit/button";
import { useState, useCallback } from 'react';
import TodoList from './components/TodoList';
import {v4} from 'uuid';
import {Helmet} from "react-helmet";


function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput]  = useState("");
  const onAddButtonClick = (e) => {
    if (textInput === "") {
      return alert("todo empty!");
    }
    setTodoList(
      [{id : v4(), name : textInput, isCompleted : false},
      ...todoList]
    );
    setTextInput("");
 };

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddTodoPress = (e) => {
    if(e.key === 'Enter'){
      onAddButtonClick(e);
    }
  }

  const onCheckBtnClick = useCallback( (id) => {
    setTodoList((prevState) => prevState.map(todo => todo.id === id ? {...todo, isCompleted : true} : todo));
  }, []);
  
  const onUncheckBtnClick = useCallback( (id) => {
    setTodoList((prevState) => prevState.map(todo => todo.id === id ? {...todo, isCompleted : false} : todo));
  }, []);

  return (
    <div className="App">
        <Helmet>
         <meta charSet="utf-8" />
         <title>top 10 seo google</title>
         <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

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
          onKeyPress={onAddTodoPress}
          >
        </TextField>
        <TodoList todoList={todoList} 
          onCheckBtnClick={onCheckBtnClick} 
          onUncheckBtnClick = {onUncheckBtnClick}
        />
    </div>
  );
}

export default App;
