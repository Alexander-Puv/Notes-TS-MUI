import { defaultNote } from "../utils/defaultNote"
import { ActionType, IState, NoteActionTypes } from "./reducerTypes"

export const initialReducerState: IState = {
  note: defaultNote,
  error: null,
}

export const NoteReducer = (state: IState = initialReducerState, action: ActionType): IState => {
  switch (action.type) {
    case NoteActionTypes.SET_NOTE:
      return {note: action.payload, error: null}
    default:
      return {...state, error: 'Unknown action'}
  }
}