import { Bug } from "../models/Bug";
import { BugStorageService } from './bugStorage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugOperationsService {
    constructor(private bugStorage : BugStorageService){

    }

    getAll() : Bug[]{
        return this.bugStorage.getAll();
    }

    createNew(bugName : string) : Bug {
        const newBugData: Bug = { id : 0, name: bugName, isClosed: false, createdAt : new Date() };
        return this.bugStorage.save(newBugData);
    }

    toggle(bug : Bug ) : Bug {
        const toggledBug = { ...bug, isClosed : !bug.isClosed};
        return this.bugStorage.save(toggledBug);
    }

    remove(bug : Bug) : void {
        this.bugStorage.remove(bug);
    }
}