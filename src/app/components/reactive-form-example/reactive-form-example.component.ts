import { Component } from '@angular/core';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson } from '../../shared/interfaces/eperson';


@Component({
  selector: 'app-reactive-form-example',
  imports: [EpersonReactiveFormComponent,PersonTableComponent,SimpleDatatableComponent],
  templateUrl: './reactive-form-example.component.html',
  styleUrl: './reactive-form-example.component.css'
})
export class ReactiveFormExampleComponent {
  // personService = inject(PersonService);
  currentPerson: EPerson | undefined;
  persons: EPerson[] = [];

  onPerson(data: EPerson){
    // console.log("Father", data);
    this.currentPerson = data;
    // this.persons.push(data);
    this.persons = [...this.persons, data]
    // this.personService.modifiedDataTable.set(true)
    // console.log("Father", this.persons);
  }
}

