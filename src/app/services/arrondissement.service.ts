import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Arrondissement } from '../entites/arrondissement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrondissementService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm() {
    return this.fb.group({
      id: '',
      numero: ['' , Validators.required],
    })
  }


  public read (id: number) {
    return this.http.get<Arrondissement>("http://localhost:8081/api/arrondissement/" + id)
  }

  public readAll(): Observable<Arrondissement[]>{
    return this.http.get<Arrondissement[]>("http://localhost:8081/api/arrondissement")
  }
}
