import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../data/db";

export function useDexie () {
    const notes = useLiveQuery(
        () => db.notes.toArray()
    );
    
    return notes;
}