import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';

import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';
import { ElapsedPipe } from './bugTracker/pipes/elapsed.pipe';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugApiService } from './bugTracker/services/bugApi.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    TrimTextPipe
    , SortPipe 
    , ElapsedPipe
    , ClosedCountPipe
  ],
  imports: [
    BrowserModule
    , HttpClientModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
    , BugApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
