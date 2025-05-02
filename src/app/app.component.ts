import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
// import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Markos';
 
  // //Step 1: One way binding of data

  // person = {
  //   givenName : "Markos",
  //   surName : "Markakis",
  //   age : "45",
  //   email:"mark@gmail.com"
  // }
  // //Step 3: Component Input

  // person0 : Person = {
  //   givenName : "Tasos",
  //   surName : "Lakakis",
  //   age : 34,
  //   email:"lak@gmail.com",
  //   address: "Athens, Greece"

  // }
  // person1 : Person = {
  //   givenName : "John",
  //   surName : "Andreiou",
  //   age : 32,
  //   email:"andr@gmail.com",
  //   address :"New York, USA"
  // }

  

    }
  