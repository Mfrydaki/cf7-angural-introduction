import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { InputExampleComponent } from './components/input-example/input-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';

export const routes: Routes = [
  {path: 'for-directive-example',component : ForDirectiveExampleComponent},
  {path: 'component-input-example', component: InputExampleComponent},
  {path: 'simple-datatable-example', component: SimpleDatatableComponent},
  {path:'welcome', component : WelcomeComponent},
  {path : '', redirectTo: '/welcome', pathMatch:'full'},
  {path:'event-bind-example', component :EventBindExampleComponent}
  
];
