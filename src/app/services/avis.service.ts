import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Theme } from '../entites/theme';
import { Avis } from '../entites/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm() {
    return this.fb.group({
      id: '',
      restaurant: '',
      surnom: ['' , Validators.required],
      theme: ['' , Validators.required],
      texte: ['' , Validators.required],

    })
  }


  public search(resto: number): Observable<Avis[]> {
    return this.http.get<Avis[]>("http://localhost:8081/api/avis?resto=" + resto)
  }

  public post(avis: Avis) {
    return this.http.post<Avis>("http://localhost:8081/api/avis", avis)
  }

}
