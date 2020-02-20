import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug'
import { BugOperationsService } from './services/bugOperations.service';

import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs'

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
    bugs : Bug[] = [];
    
    bugSortAttr : string = 'name';
    bugSortDesc : boolean = false;
   
    constructor(private bugOperations : BugOperationsService
        , private httpClient : HttpClient){
       
    }

    ngOnInit(){
        this.loadBugs();
    }

    newBugCreated(newBug : Bug){
        this.bugs = [...this.bugs, newBug];
    }

    onBugNameClick(bugToToggle : Bug ){
        this.bugOperations
            .toggle(bugToToggle)
            .subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
    }

    loadBugs(){
        this.bugOperations
            .getAll()
            .subscribe(bugs => this.bugs = bugs);
    }

    onRemoveClosedClick(){
        /* 
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => {
                this.bugOperations
                    .remove(closedBug)
                    .subscribe(() => this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id));
            }) 
        */

        const removeClosedBugs$ = this.bugs
            .filter(bug => bug.isClosed)
            .map(closedBug => this.bugOperations.remove(closedBug));

        forkJoin(removeClosedBugs$)
            .subscribe(() => this.loadBugs());
    }   
}