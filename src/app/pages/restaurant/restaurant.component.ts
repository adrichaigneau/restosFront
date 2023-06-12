import { Component, OnInit, Sanitizer, SecurityContext } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant-service.service';
import { Restaurant } from 'src/app/entites/restaurant';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';
import { AvisService } from 'src/app/services/avis.service';
import { Avis } from 'src/app/entites/avis';

declare const google: any;

@Component({
  selector: 'app-evenement',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  id: number = 0;
  restaurant: Restaurant = {};
  restoNom: string = '';
  map: any;
  image: any;
  objectURL: any;
  avis: Avis[] = [];

  constructor(
    private router: ActivatedRoute,
    private restaurantService: RestaurantService,
    private sanitizer: DomSanitizer,
    private avisService: AvisService
  ) {}

  ngOnInit(): void {
    const idStr = this.router.snapshot.paramMap.get('id');
    this.id = idStr ? +idStr : 0;
    this.restaurantService
      .read(this.id)
      .subscribe((data: Restaurant) => (this.restaurant = data));

      console.log(this.restaurant.image)

    this.avisService
      .search(this.id)
      .subscribe((data: Avis[]) => (this.avis = data));

    this.image = this.sanitizer.bypassSecurityTrustUrl(this.restaurant.image!);

    /* this.map = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.restaurant.maps! ??
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7841771560306!2d2.3470223762702416!3d48.86232577133262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcc64c7dee7%3A0x98d64655c73726ae!2sDandy%20Kitchen!5e0!3m2!1sfr!2sfr!4v1681399047366!5m2!1sfr!2sfr'
    ); */

    //this.map = DOMPurify.sanitize(this.restaurant.maps)

    //this.map = this.sanitizer.bypassSecurityTrustResourceUrl(this.restaurant.maps!)

    //this.initMap();
  }

  /*initMap(): void {
    const mapOptions = {
      center: { lat: 0, lng: 0 }, // Set the initial center of the map
      zoom: 8, // Set the initial zoom level
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { address: this.restaurant.adresse },
      (results: any, status: any) => {
        if (status === 'OK') {
          this.map.setCenter(results[0].geometry.location);
          new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location,
          });
        } else {
          console.error(
            'Geocode was not successful for the following reason: ' + status
          );
        }
      }
    );
  }*/
}
