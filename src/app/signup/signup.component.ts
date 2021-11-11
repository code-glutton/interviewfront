import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignupService } from './signup.service';
@Component({
  selector: 'pa-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    name: '',
    age: '',
    visits:'',
    patientcondition:''
  });

  constructor(
    private formBuilder: FormBuilder,
    private patientService: SignupService,
  ) {}
  onSubmit(){
    console.log(this.checkoutForm.value);
    this.patientService.postPatient(this.checkoutForm.value);
  }

  ngOnInit(): void {
  
  }

}
