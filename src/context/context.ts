import { createContext, Dispatch } from "react";
import { INote } from "../types/INote";

interface IAppContext {
    currentNote: INote,
    setCurrentNote: Dispatch<React.SetStateAction<INote>>,
    defaultNote: INote
}

export const AppContext = createContext<IAppContext | null>(null);