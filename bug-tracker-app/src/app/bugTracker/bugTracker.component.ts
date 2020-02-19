import { Component } from '@angular/core';
import { Bug } from './models/Bug'
import { BugOperationsService } from './services/bugOperations.service';


@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : Bug[] = [];

    bugSortAttr : string = 'name';
    bugSortDesc : boolean = false;
    /* 
    bugOperations : BugOperationsService;

    constructor(bugOperations : BugOperationsService){
        this.bugOperations = bugOperations;
    } 
    */

    constructor(private bugOperations : BugOperationsService){
        this.bugs.push(this.bugOperations.createNew('Server communcation failure'))
        this.bugs.push(this.bugOperations.createNew('User action not recognized'))
        this.bugs.push(this.bugOperations.createNew('Application not responding'))
        this.bugs.push(this.bugOperations.createNew('Data integrity checks failed'))
    }

    onAddNewClick(bugName : string){
        const newBug = this.bugOperations.createNew(bugName);    
        this.bugs.push(newBug);
    }

    onBugNameClick(bug){
        this.bugOperations.toggle(bug);
    }

    onRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount(){
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}