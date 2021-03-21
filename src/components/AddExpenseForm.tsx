import React, {useContext, useState, FormEvent} from 'react';
import {AppContext} from "../context/AppContext";
import {v4 as uuidv4} from 'uuid';
import {Expense} from "../interfaces/Expense";
import {ActionType} from "../interfaces/Reducers";

const AddExpenseForm = () => {
    const {dispatch} = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const expense: Expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        if (dispatch) {
            dispatch({
                type: ActionType.Create,
                payload: expense
            })
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label>Name</label>
                    <input
                        required={true}
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <label>Cost</label>
                    <input
                        required={true}
                        type="text"
                        className="form-control"
                        id="cost"
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                    ></input>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <button type="submit" className="btn btn-primary mt-3">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};
export default AddExpenseForm;