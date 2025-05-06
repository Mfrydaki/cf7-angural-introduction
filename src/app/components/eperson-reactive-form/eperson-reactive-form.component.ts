import { Component } from '@angular/core';
import{
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from '../../shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [
    ReactiveFormsModule,MatInputModule,MatSelectModule,MatButtonModule,MatFormFieldModule
  ],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})
export class EpersonReactiveFormComponent {

 form = new FormGroup({
  givenName : new FormControl('',Validators.required),
  surName : new FormControl('',Validators.required),
  age: new FormControl('18',[
    Validators.required,
    Validators.pattern('^[0-9]*$'),
    Validators.min(18),
    Validators.max(100)
]),
email: new FormControl ('',[
  Validators.required, Validators.email]),
education: new FormControl('',Validators.required)  
});

onSubmit(data:any){
  console.log("Data", data);
  console.log(this.form);
  console.log("givenName>>",this.form.controls['givenName'].value)
}
onSetValue(){
  this.form.setValue({
    givenName : "Maria",
    surName : "Maraki",
    age: "39",
    email: "mar@hotmail.com",
    education: "Bachelor degree"

  })
}

}
