import React, {useContext, useState} from 'react';
import ExpenseItem from './ExpenseItem';
import {AppContext} from "../context/AppContext";

const ExpenseList = () => {
    const {state: {expenses}} = useContext(AppContext);

    const [filter, setFilter] = useState('');

    const filterUpper = filter?.toUpperCase();

    const filteredList = expenses.filter(exp => {
        if (filter && filter.length) {
            return exp.name.toUpperCase().includes(filterUpper);
        } else {
            return true
        }
    })

    return (
        <>

            <input
                placeholder='Filter...'
                type="text"
                className="form-control mb-3"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <ul className="list-group">
                {
                    filteredList.map(expense => {
                        return (
                            <ExpenseItem
                                key={expense.id}
                                id={expense.id}
                                name={expense.name}
                                cost={expense.cost}
                            />
                        )
                    })
                }
            </ul>
        </>
    )
}
export default ExpenseList;