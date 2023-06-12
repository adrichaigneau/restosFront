import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/entites/restaurant';
import { RestaurantService } from 'src/app/services/restaurant-service.service';
import { TypeService } from 'src/app/services/type-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private restaurantService: RestaurantService, private typeService: TypeService) {}
  restaurants: Restaurant[] = [];

  suggestion(saisie: string) {
    this.restaurantService
    .search(saisie)
    .subscribe((data: Restaurant[])=>this.restaurants = data );
    }

  }
