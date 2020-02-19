import { Component } from '@angular/core';
import { Bug } from './models/Bug'
import { BugOperationsService } from './services/bugOperations.service';


@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : Bug[] = [];
    newBugName : string = '';
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
        //this.bugs.push(newBug);
        this.bugs = [...this.bugs, newBug];
    }

    onBugNameClick(bugToToggle : Bug ){
        const toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
    }

    onRemoveClosedClick(){
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }   
}