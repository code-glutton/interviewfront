import { Injectable } from '@angular/core';
import { Patient } from '../patient';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientdetailService {
  ids:number = 0;
  patientUrl:string = "http://localhost:8080/getPatientByAge";
  constructor(private http: HttpClient) { }
  getPatient(patient:string):Observable<Patient>{
    console.log(this.http.get<Patient>(patient));
    return this.http.get<Patient>(patient);
  }

  getNumber(id:number):Observable<Patient>{
    this.ids = id;
   return this.getPatient(`http://localhost:8080/getPatient/${this.ids}`)
  }

  getPatientAge(patient:any): Observable<Patient[]>{
         return this.http.post<Patient[]>(this.patientUrl,patient);
      }
}
