import { useReducer, createContext, Dispatch, ReactNode } from "react";
import { budgetReducer, initialState } from "../reducers/budget-reducer";
import type { BudgetState, BudgetActions } from "../reducers/budget-reducer";

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
};

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(
  {} as BudgetContextProps
); //null!

export const BudgetProvider = ({children} : BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  return (
  <BudgetContext.Provider
    value={{
        state,
        dispatch
    }}
  >
    {children}
  </BudgetContext.Provider>
  );
};
