import { Bug } from "../models/Bug";
import { Injectable } from '@angular/core';

//using the bugStorage (sync)

//import { BugStorageService } from './bugStorage.service';
/* 
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
} */
import { BugApiService } from './bugApi.service';
import { Observable } from 'rxjs';
@Injectable()
export class BugOperationsService{
    constructor(private bugApi : BugApiService){

    }
    getAll() : Observable<Bug[]> {
        return this.bugApi.getAll();
    }

    createNew(bugName : string) : Observable<Bug>{
        const newBugData = { id : 0, name : bugName, isClosed : false, createdAt : new Date()};
        return this.bugApi.save(newBugData);
    }

    toggle(bugToToggle : Bug) : Observable<Bug>{
        const toggledBug = { ...bugToToggle, isClosed :!bugToToggle.isClosed};
        return this.bugApi.save(toggledBug);
    }

    remove(bugData : Bug) : Observable<any>{
        return this.bugApi.remove(bugData);
    }
}