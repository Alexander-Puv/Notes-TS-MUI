import { Dispatch, createContext } from "react";
import { ActionType, IState } from "../reducer/reducerTypes";

interface IAppContext {
    state: IState,
    dispatch: Dispatch<ActionType>
}

export const AppContext = createContext<IAppContext | null>(null);