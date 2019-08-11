import { Component } from '@angular/core'

@Component({
  selector:'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <button (click)="handleClick(username.value)">
      Get Value
    </button>
    <input type="text" [(ngModel)]= "name" #username>
    <div *ngIf="name.length">
      Searching for... {{ name }}
    </div>
  </div>
  ` 
})
export class AppComponent {
  name: string = ""
  handleClick(value: string) {
    console.log(value)
  }
  
}