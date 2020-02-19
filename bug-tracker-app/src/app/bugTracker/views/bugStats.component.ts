import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Bug } from '../models/Bug';

@Component({
    selector : 'app-bug-stats',
    changeDetection : ChangeDetectionStrategy.OnPush,
    template : `
        <section class="stats">
            <span class="closed">{{bugs | closedCount}}</span>
            <span> / </span>
            <span>{{bugs.length}}</span>
        </section>
        <div>{{getCurrentTime()}}</div>
    `
})
export class BugStatsComponent{

    @Input()
    bugs : Bug[];

    getCurrentTime(){
        return Date();
    }
}