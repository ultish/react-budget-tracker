import React, {useContext} from 'react';
import {AppContext} from "../context/AppContext";

const Budget = () => {
    // const {state} = useContext(AppContext);
    // const {budget} = state;
    const {state: {budget}} = useContext(AppContext);
    return (
        <div className="alert alert-secondary">
            <span>Budget: ${budget}</span>
        </div>
    )
}

export default Budget;