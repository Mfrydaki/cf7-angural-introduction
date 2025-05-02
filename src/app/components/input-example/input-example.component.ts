import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-input-example',
  imports: [PersonTableComponent],
  templateUrl: './input-example.component.html',
  styleUrl: './input-example.component.css'
})
export class InputExampleComponent {

  person0 : Person ={

    givenName: "Anna ",
    surName:  "Marathaki",
    age: 33,
    email: "annmar@aueb.gr",
    address: " Thessaloniki, Greece"
  }

  person1 : Person ={

    givenName: "Giannis ",
    surName:  "Palaiokostas",
    age: 50,
    email: "palko@aueb.gr",
    address: " Athens, Greece"
  }



}
