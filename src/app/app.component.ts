import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Markos';
 
  //Step 1: One way binding of data

  person = {
    givenName : "Markos",
    surName : "Markakis",
    age : "45",
    email:"mark@gmail.com"
  }
  //Step 3: Component Input

  person0 : Person = {
    givenName : "Tasos",
    surName : "Lakakis",
    age : 34,
    email:"lak@gmail.com",
    address: "Athens, Greece"

  }
  person1 : Person = {
    givenName : "John",
    surName : "Andreiou",
    age : 32,
    email:"andr@gmail.com",
    address :"New York, USA"
  }

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
  