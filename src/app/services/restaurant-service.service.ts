import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../entites/restaurant';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm() {
    return this.fb.group({
      id: '',
      nom: ['' , Validators.required],
      adresse: ['' , Validators.required],
      tel: ['' , Validators.required],
      type: ['' , Validators.required],
      prix: ['' , Validators.required],
      image: ['' , Validators.required],
      arrondissement: ['' , Validators.required]
    })
  }

  public search (nom: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:8081/api/restaurant?nom=" + nom)
  }

  public read (id: number) {
    return this.http.get<Restaurant>("http://localhost:8081/api/restaurant/" + id)
  }

  public filtrePrix (nomType: string, nomResto: string, prixResto: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:8081/api/restaurant?type=" + nomType + "&nom=" + nomResto + "&prix=" + prixResto)
  }

  public filtrePrixArr (numArr: number, nomResto: string, prixResto: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:8081/api/restaurant?arr=" + numArr + "&nom=" + nomResto + "&prix=" + prixResto)
  }

  public suggestion (nomType: string, nomResto: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:8081/api/restaurant?type=" + nomType + "&nom=" + nomResto)
  }

  public suggestionArr (numArr: number, nomResto: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>("http://localhost:8081/api/restaurant?arr=" + numArr + "&nom=" + nomResto)
  }

  public post(newResto : Restaurant) {
    return this.http.post("http://localhost:8081/api/restaurant", newResto)
  }



}
