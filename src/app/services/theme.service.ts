import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Theme } from '../entites/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  public getForm() {
    return this.fb.group({
      id: '',
      nom: ['' , Validators.required]
    })
  }

  public readAll() {
    return this.http.get<Theme[]>("http://localhost:8081/api/theme")
  }

  public read(id: number) {
    return this.http.get<Theme>("http://localhost:8081/api/theme/" + id)
  }

  public post(theme: Theme) {
    return this.http.post<Theme>("http://localhost:8081/api/theme", theme)
  }


}
