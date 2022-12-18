import { INote } from "../types/INote";

export interface IState {
  note: INote,
  error: string | null,
}

export enum NoteActionTypes {
  SET_NOTE = 'SET_NOTE',
}

interface SetNoteAction {
  type: NoteActionTypes.SET_NOTE,
  payload: INote
}

export type ActionType = SetNoteAction 