import { Component } from '@angular/core';
import { Type } from 'src/app/entites/type';
import { Prix } from 'src/app/entites/prix';
import { PrixService } from 'src/app/services/prix.service';
import { RestaurantService } from 'src/app/services/restaurant-service.service';
import { TypeService } from 'src/app/services/type-service.service';
import { Restaurant } from 'src/app/entites/restaurant';
import { ArrondissementService } from 'src/app/services/arrondissement.service';
import { Arrondissement } from 'src/app/entites/arrondissement';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.scss']
})
export class RestaurantEditComponent {
  constructor(private restaurantService: RestaurantService,private typeService: TypeService, private prixService: PrixService, private arrService: ArrondissementService){}
  types: Type[] = [];
  type: Type = {};
  prixs: Prix[] = [];
  prix: Prix = {};
  arrs: Arrondissement[] = []
  arr: Arrondissement = {}
  restoForm: any;
  newResto: any;

  texte: string = '';


  ngOnInit(): void {
    this.restoForm = this.restaurantService.getForm();

    this.typeService.readAll().subscribe((data:Type[])=>this.types = data);

    this.prixService.read().subscribe((data:Prix[])=>this.prixs = data);

    this.arrService.readAll().subscribe((data: Arrondissement[])=>this.arrs = data)

  }

  public enregistrer() {

    this.newResto = this.restoForm.value;

    this.newResto.type = this.types.find(ty => ty.id === Number(this.newResto.type)); //le filtre find met dans le bon format json

    this.newResto.prix = this.prixs.find(pr => pr.id === Number(this.newResto.prix));

    this.newResto.arrondissement = this.arrs.find(ar => ar.id === Number(this.newResto.arrondissement));

    console.log(this.restoForm.value)

    if (this.restoForm.status === "INVALID") {
      this.texte = "Invalide"
      return this.texte;
    }
    else {
      this.restaurantService.post(this.newResto).subscribe((data:Restaurant)=>this.newResto = data);
      this.texte = "Le restaurant a bien été enregistré"
      console.log(this.newResto)
      return this.texte;
    }

  }

}
