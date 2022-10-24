import React, {useState} from "react"; 
import Button from "@atlaskit/button";
import styled  from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;
    &:hover {
        .check-icon {
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
`;

export default function TodoItem (props) {
    let todo = props.todo;
    let onCheckBtnClick = props.onCheckBtnClick;
    return (
        <>
            <ButtonStyled shouldFitContainer={true}
                iconAfter={
                   <span className="check-icon">
                     <CheckIcon primaryColor="#4fff4f"/>
                   </span>
                }
            >{todo.name}</ButtonStyled>
        </>
    )
}