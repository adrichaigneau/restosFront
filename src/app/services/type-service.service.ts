import { Injectable } from '@angular/core';
import { Type } from '../entites/type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm() {
    return this.fb.group({
      id: '',
      nom: ['' , Validators.required],
    })
  }


  public read (id: number) {
    return this.http.get<Type>("http://localhost:8081/api/type/" + id)
  }

  public readAll(): Observable<Type[]>{
    return this.http.get<Type[]>("http://localhost:8081/api/type")
  }

  public post(newType: Type) {
    return this.http.post<Type>("http://localhost:8081/api/type", newType)
  }
}
