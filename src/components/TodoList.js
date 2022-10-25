import React, {useState} from "react";
import TodoItem from './TodoItem';

export default function TodoList(props) {
    let todoList = props.todoList;
    let onCheckBtnClick = props.onCheckBtnClick;
    let onUncheckBtnClick = props.onUncheckBtnClick;
    return(
        <>
           {
             todoList.map(todo => 
             <TodoItem 
              key={todo.id} 
              todo={todo} 
              onCheckBtnClick= {() => onCheckBtnClick(todo.id)}
              onUncheckBtnClick ={() => onUncheckBtnClick(todo.id)}
            />)
           }
        </>
    )
}