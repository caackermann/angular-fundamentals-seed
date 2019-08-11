import { Component } from '@angular/core'

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null
}
interface Child {
  name: string,
  age: number
}

@Component({
  selector:'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <div class="app">
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index">
      <span class="status" [class.checked-in]="passenger.checkedIn"></span>
        {{ i }}: {{ passenger.fullname }}
        <div class="date">
          Check in date:  
          {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd') : 'Not checked in'}}
        </div>
        <div class="children">
          Children: {{ passenger.children?.length || 0}}
        </div>
      </li>
    </ul>
  </div>
  ` 
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: "Stephen",
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [{name: 'Tedd', age: 12}, {name: 'Tedda', age: 5}]
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: null

  }, {
    id:3,
    fullname: 'Chris',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [{name: 'Tedd', age: 12}]

  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: false,
    checkInDate: null,
    children: null

  }
    
  ]
}