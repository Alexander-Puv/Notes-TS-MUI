import Dexie, { Table } from 'dexie';

export interface Note {
    id?: number;
    title: string;
    text: string;
    date: Date
}

export class notesDatabase extends Dexie {
    notes!: Table<Note>; 

    constructor() {
        super('Database');
        this.version(1).stores({
            notes: '++id, title, text, date'
        });
    }
}

export const db = new notesDatabase();