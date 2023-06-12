import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Prix } from '../entites/prix';

@Injectable({
  providedIn: 'root'
})
export class PrixService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm() {
    return this.fb.group({
      prix: ''
    })
  }

  public read() {
    return this.http.get<Prix[]>("http://localhost:8081/api/prix")
  }

}
