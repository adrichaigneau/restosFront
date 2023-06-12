import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant-service.service';
import { Restaurant } from 'src/app/entites/restaurant';
import { Type } from 'src/app/entites/type';
import { ActivatedRoute } from '@angular/router';
import { TypeService } from 'src/app/services/type-service.service';
import { PrixService } from 'src/app/services/prix.service';
import { Prix } from 'src/app/entites/prix';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  id: number = 0;
  restaurants: Restaurant[] = [];
  type: Type = {};
  prixs: Prix[] = [];
  nomType: any;
    constructor(private router: ActivatedRoute, private restaurantService: RestaurantService, private typeService: TypeService, private prixService: PrixService) {}

  ngOnInit(): void {
    const idStr= this.router.snapshot.paramMap.get("id");
    this.id = idStr ? +idStr : 0;
    this.typeService.read(this.id)
      .subscribe((data: Type)=> this.type = data);

    this.prixService.read().subscribe((data: Prix[])=> this.prixs = data)
  }

  suggestion(saisie: string) {
    this.nomType = this.type?.nom;
    this.restaurantService
    .suggestion(this.nomType, saisie)
    .subscribe((data: Restaurant[])=>this.restaurants = data );
    }

  filtre(saisie: string, prix: string) {
    this.nomType = this.type?.nom;
    this.restaurantService
    .filtrePrix(this.nomType, saisie, prix)
    .subscribe((data: Restaurant[])=>this.restaurants = data );
    }

}
