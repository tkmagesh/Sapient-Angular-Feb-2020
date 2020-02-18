import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  newTitle = '';
  constructor(){
    /* setTimeout(() => {
      this.title = 'My Brand New';
    }, 10000); */
  }

  onChangeTitleClick(){
    this.title = this.newTitle;
  }
}
