import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arrondissement } from 'src/app/entites/arrondissement';
import { Prix } from 'src/app/entites/prix';
import { Restaurant } from 'src/app/entites/restaurant';
import { ArrondissementService } from 'src/app/services/arrondissement.service';
import { PrixService } from 'src/app/services/prix.service';
import { RestaurantService } from 'src/app/services/restaurant-service.service';

@Component({
  selector: 'app-arrondissement',
  templateUrl: './arrondissement.component.html',
  styleUrls: ['./arrondissement.component.scss']
})
export class ArrondissementComponent {

  id: number = 0;
  restaurants: Restaurant[] = [];
  arr: Arrondissement = {};
  prixs: Prix[] = [];
  numArr: any;
    constructor(private router: ActivatedRoute, private restaurantService: RestaurantService, private prixService: PrixService, private arrService: ArrondissementService) {}

  ngOnInit(): void {
    const idStr= this.router.snapshot.paramMap.get("id");
    this.id = idStr ? +idStr : 0;
    this.arrService.read(this.id)
      .subscribe((data: Arrondissement)=> this.arr = data);

    this.prixService.read().subscribe((data: Prix[])=> this.prixs = data)
  }

  suggestion(saisie: string) {
    this.numArr = this.arr?.numero;
    this.restaurantService
    .suggestionArr(this.numArr, saisie)
    .subscribe((data: Restaurant[])=>this.restaurants = data );
    }
  
  filtre(saisie: string, prix: string) {
    this.numArr = this.arr?.numero;
    this.restaurantService
    .filtrePrixArr(this.numArr, saisie, prix)
    .subscribe((data: Restaurant[])=>this.restaurants = data );
    }

}
