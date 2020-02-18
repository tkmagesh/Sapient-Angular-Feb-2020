import { Component } from '@angular/core';

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html',
    styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
    userName : string = '';
    greetMsg : string = '';

    onGreetClick(){
        this.greetMsg = `Hi ${this.userName}, Have a nice day!`;
    }
}