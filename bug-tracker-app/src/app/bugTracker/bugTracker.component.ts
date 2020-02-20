import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug'
import { BugOperationsService } from './services/bugOperations.service';



@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
    bugs : Bug[] = [];
    newBugName : string = '';
    bugSortAttr : string = 'name';
    bugSortDesc : boolean = false;
   
    constructor(private bugOperations : BugOperationsService){
        
    }

    ngOnInit(){
        this.bugs = this.bugOperations.getAll();
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