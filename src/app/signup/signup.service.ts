import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private patientUrl:string = "http://localhost:8080/save";
  constructor(private http: HttpClient) { }
  postPatient(patient:any):void{
    this.http.post(this.patientUrl,patient).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }
}
