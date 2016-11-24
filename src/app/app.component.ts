import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{appTitle}}</h1>
    <div>Loaded at: {{currentDateTime}}</div> <button (click)="setCurrentTime()">Refresh</button>
    <hr>
    Edit app title: 
    <input type="text" [(ngModel)]="appTitle" placeholder="Enter the title here">
    <hr>
    <todo></todo>
    `
})
export class AppComponent {

    appTitle: string = "Hello World Application 2";
    currentDateTime: Date = new Date();

    setCurrentTime() {
        this.currentDateTime = new Date();
    }

}

