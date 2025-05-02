import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EPerson, ManyPerson } from '../../shared/interfaces/eperson';

@Component({
  selector: 'app-componet-output-example',
  imports: [SimpleDatatableComponent ],
  templateUrl: './componet-output-example.component.html',
  styleUrl: './componet-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPerson =  ManyPerson;


}
