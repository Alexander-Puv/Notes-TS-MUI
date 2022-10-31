import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../data/db";

export function NoteList () {
    const notes = useLiveQuery(
        () => db.notes.toArray()
    );
    
    return notes;
}