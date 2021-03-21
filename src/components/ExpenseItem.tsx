import React, { useContext} from 'react';
import {AppContext} from "../context/AppContext";
import {TiDelete} from "react-icons/ti";
import {ActionType} from "../interfaces/Reducers";
import {Expense} from "../interfaces/Expense";

const ExpenseItem = (props:Expense) => {
    const {dispatch} = useContext(AppContext);

    const handleDelete = () => {
        dispatch({
            type: ActionType.Delete,
            payload: props.id
        })
    }

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge badge-primary badge-pill mr-3'>
                    ${props.cost}
                </span>
                <TiDelete size='1.5em' onClick={handleDelete}></TiDelete>
            </div>
        </li>
    )
}
export default ExpenseItem;