// import {Dispatch} from "react";
import {Expense} from "./Expense";

export interface ContextValue {
    budget: number;
    expenses: Expense[];
}
