import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/entites/type';
import { TypeService } from 'src/app/services/type-service.service';

@Component({
  selector: 'app-type-edit',
  templateUrl: './type-edit.component.html',
  styleUrls: ['./type-edit.component.scss']
})
export class TypeEditComponent implements OnInit{

  constructor(private typeService: TypeService) {}

  typeForm: any;
  newType: any;

  texte: string = '';

  ngOnInit(): void {
    this.typeForm = this.typeService.getForm()
  }

  public enregistrer() {
    this.newType = this.typeForm.value;

    if (this.typeForm.status === "INVALID") {
      this.texte = "Invalide"
      return this.texte;
    }
    else {
      this.typeService.post(this.newType).subscribe((data:Type)=>this.newType = data);
      this.texte = "Le type a bien été enregistré"
      return this.texte;
    }
  }


}
