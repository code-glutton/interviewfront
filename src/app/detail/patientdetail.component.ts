import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatientdetailService } from './patientdetail.service';
import { Patient } from '../patient';
import { Subscription } from "rxjs";

@Component({
  selector: 'pa-patientdetail',
  templateUrl: './patientdetail.component.html',
  styleUrls: ['./patientdetail.component.scss']
})
export class PatientdetailComponent implements OnInit {
  sub!: Subscription;
  patients: Patient[];
  checkoutForm = this.formBuilder.group({
    id:''
  });
  checkoutFormRange = this.formBuilder.group({
    lower: '',
    upper:''
  });
  constructor(private formBuilder: FormBuilder, private patientdetailService: PatientdetailService) {
    this.patients =  [];
   }

onSubmit(){
  this.sub = this.patientdetailService.getNumber(this.checkoutForm.value.id).subscribe({
    next: products => {
      this.patients=[];
      this.patients.push(products);
      console.log(this.patients);
    }
    });
}

onSubmitRange(){
  console.log(this.checkoutFormRange.value);
  this.patientdetailService.getPatientAge(this.checkoutFormRange.value).subscribe({
    next: products => {
      this.patients = [];
      this.patients = [...products];
      console.log(this.patients);
    }
  });
}

  ngOnInit(): void {
  }

}
