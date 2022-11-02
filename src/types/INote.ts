import { IndexableType } from "dexie";

export interface INote {
    id?: number | string,
    header: string,
    text: string,
    time: Date
}