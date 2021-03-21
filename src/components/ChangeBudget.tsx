import React, {ChangeEvent, FormEvent, useContext} from "react";
import {AppContext} from "../context/AppContext";
import {ActionType} from "../interfaces/Reducers";

const ChangeBudget = () => {

    const {state: {budget}} = useContext(AppContext);
    const {dispatch} = useContext(AppContext);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // do nothing
    }

    const onBudgetChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const valNum = parseInt(val);
        dispatch({
            type: ActionType.UpdateBudget,
            payload: valNum
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Set Budget</label>
            <input
                required={true}
                type="text"
                className="form-control"
                value={budget}
                onChange={onBudgetChange}
            />
        </form>
    )

}
export default ChangeBudget;