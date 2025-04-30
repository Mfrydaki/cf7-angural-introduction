import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {

  name = "Thanos"

  person =  {
    givenName: "Thanos",
    surName:  "Marakis",
    age: "43",
    email: "thanos@aueb.gr"

  }

}
