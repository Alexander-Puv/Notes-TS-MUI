import Dexie, { Table } from 'dexie';
import { INote } from '../types/INote';

export class notesDatabase extends Dexie {
    notes!: Table<INote>;

    constructor() {
        super('Database');
        this.version(1).stores({
            notes: '++id, header, text, time'
        });
    }
}

export const db = new notesDatabase();