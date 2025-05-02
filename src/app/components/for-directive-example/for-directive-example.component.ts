import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "Blondie",
      "surName": "Liddell",
      "email": "bliddell0@cornell.edu",
      "age": 1,
      "address": "PO Box 89110"
    }, {
      "givenName": "Frederique",
      "surName": "Dirkin",
      "email": "fdirkin1@skyrock.com",
      "age": 2,
      "address": "5th Floor"
    }, {
      "givenName": "Susannah",
      "surName": "Waiton",
      "email": "swaiton2@freewebs.com",
      "age": 3,
      "address": "Room 1052"
    }, {
      "givenName": "Ilse",
      "surName": "Klauer",
      "email": "iklauer3@go.com",
      "age": 4,
      "address": "Apt 523"
    }, {
      "givenName": "Gavra",
      "surName": "Arbor",
      "email": "garbor4@army.mil",
      "age": 5,
      "address": "PO Box 26543"
    }, {
      "givenName": "Mareah",
      "surName": "Middle",
      "email": "mmiddle5@chron.com",
      "age": 6,
      "address": "5th Floor"
    }, {
      "givenName": "Vito",
      "surName": "Alans",
      "email": "valans6@networksolutions.com",
      "age": 7,
      "address": "3rd Floor"
    }, {
      "givenName": "Tanner",
      "surName": "Bernardotte",
      "email": "tbernardotte7@google.com.br",
      "age": 8,
      "address": "PO Box 22121"
    }, {
      "givenName": "Homerus",
      "surName": "Readings",
      "email": "hreadings8@mlb.com",
      "age": 9,
      "address": "Suite 20"
    }, {
      "givenName": "Duane",
      "surName": "Farrier",
      "email": "dfarrier9@craigslist.org",
      "age": 10,
      "address": "Room 60"
    }, {
      "givenName": "Siffre",
      "surName": "Da Costa",
      "email": "sdacostaa@seesaa.net",
      "age": 11,
      "address": "Apt 355"
    }, {
      "givenName": "Barbe",
      "surName": "Nono",
      "email": "bnonob@wikipedia.org",
      "age": 12,
      "address": "Apt 1433"
    }, {
      "givenName": "Justis",
      "surName": "Drury",
      "email": "jdruryc@fda.gov",
      "age": 13,
      "address": "19th Floor"
    }, {
      "givenName": "Avram",
      "surName": "Feldmus",
      "email": "afeldmusd@exblog.jp",
      "age": 14,
      "address": "Suite 84"
    }, {
      "givenName": "Adara",
      "surName": "Splaven",
      "email": "asplavene@examiner.com",
      "age": 15,
      "address": "PO Box 66487"
    }, {
      "givenName": "Miles",
      "surName": "Maisey",
      "email": "mmaiseyf@ovh.net",
      "age": 16,
      "address": "PO Box 29976"
    }, {
      "givenName": "Zita",
      "surName": "Brixey",
      "email": "zbrixeyg@howstuffworks.com",
      "age": 17,
      "address": "Suite 72"
    }, {
      "givenName": "Emili",
      "surName": "Ivel",
      "email": "eivelh@wikia.com",
      "age": 18,
      "address": "Apt 17"
    }, {
      "givenName": "Adriaens",
      "surName": "Harbottle",
      "email": "aharbottlei@usnews.com",
      "age": 19,
      "address": "Apt 1801"
    }, {
      "givenName": "Kevon",
      "surName": "Borg",
      "email": "kborgj@macromedia.com",
      "age": 20,
      "address": "Suite 32"
    }]


}
