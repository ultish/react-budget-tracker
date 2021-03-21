import {createContext, useReducer} from "react";
import {ContextValue} from "../interfaces/ContextValue";
import {ActionType} from "../interfaces/Reducers";

// a reducer used with useReducer function to handle actions to modify the Context's state.
// also kinda tedious... basically manually writing the ember store. Is redux better??
const AppReducer = (state: ContextValue, action: any) => {
    switch (action.type) {
        case ActionType.Create:
            // alternative to Object.assign using Object spread
            // const newObj = { ...defaults, ...overrides }

            // so this will return the new object for the State
            // stored in AppContext
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case ActionType.Delete:
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            }
        case ActionType.UpdateBudget:
            debugger;
            return {
                ...state,
                budget: action.payload
            }
        default:
            return state;
    }
};


const initialState: ContextValue = {
    budget: 2000,
    expenses: [
        {id: '12', name: 'shopping', cost: 40},
        {id: '13', name: 'holiday', cost: 400},
        {id: '14', name: 'car service', cost: 50},
    ],
};

// creates a global context that any component can use. Kinda tedious...
export const AppContext = createContext<{
    state: ContextValue,
    dispatch: React.Dispatch<any>
}>({
    state: {
        budget: 0,
        expenses: [],
    },
    dispatch: () => null
});

// can create multiple providers to inject multiple Contexts into a component
export const AppProvider = (props: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                state: {
                    budget: state.budget,
                    expenses: state.expenses,
                },
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
};

