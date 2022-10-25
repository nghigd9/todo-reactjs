import React, {useState} from "react"; 
import Button from "@atlaskit/button";
import styled, {css}  from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
import CrossIcon from '@atlaskit/icon/glyph/cross';

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;
    ${(p) =>
        p.isCompleted &&
        css`
            text-decoration : line-through;
        `
    }
    &:hover {
        .check-icon {
            display : inline-block;
        }
        .remove-icon {
            display : inline-block;
        }
    }
    .check-icon {
        display : none;
        &:hover {
            background-color : gray;
            border-radius: 3px;
        }
    }
    .remove-icon {
        display : none;
        &:hover {
            background-color : gray;
            border-radius : 3px;
        }
    }
`;

export default function TodoItem (props) {
    let todo = props.todo;
    let onCheckBtnClick = props.onCheckBtnClick;
    let onUncheckBtnClick = props.onUncheckBtnClick;
    return (
        <>
            <ButtonStyled 
                isCompleted={todo.isCompleted}
                shouldFitContainer={true}
                iconAfter={
                   <>
                   <span className="check-icon" data-id={todo.id} onClick={onCheckBtnClick}>
                     <CheckIcon primaryColor="#4fff4f"/>
                   </span>
                   <span className="remove-icon" onClick={onUncheckBtnClick}>
                        <CrossIcon primaryColor="red" />
                   </span>
                   </>
                }
            >{todo.name}</ButtonStyled>
        </>
    )
}