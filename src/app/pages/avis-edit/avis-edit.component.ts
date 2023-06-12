import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Avis } from 'src/app/entites/avis';
import { Restaurant } from 'src/app/entites/restaurant';
import { Theme } from 'src/app/entites/theme';
import { AvisService } from 'src/app/services/avis.service';
import { RestaurantService } from 'src/app/services/restaurant-service.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-avis-edit',
  templateUrl: './avis-edit.component.html',
  styleUrls: ['./avis-edit.component.scss'],
})
export class AvisEditComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private restaurantService: RestaurantService,
    private themeService: ThemeService,
    private avisService: AvisService
  ) {}

  restos: Restaurant[] = [];
  resto: Restaurant = {};
  themes: Theme[] = [];
  avisForm: any;
  newAvis: any;
  texte: string = '';
  id: number = 0;

  ngOnInit(): void {
    this.avisForm = this.avisService.getForm();
    this.themeService
      .readAll()
      .subscribe((data: Theme[]) => (this.themes = data));
    this.restaurantService
      .search('')
      .subscribe((data: Restaurant[]) => (this.restos = data));

    const idStr = this.router.snapshot.paramMap.get('id');
    this.id = idStr ? +idStr : 0;
    this.restaurantService
      .read(this.id)
      .subscribe((data: Restaurant) => (this.resto = data));
  }

  public enregistrerAvis() {
    this.newAvis = this.avisForm.value;
    this.newAvis.restaurant = this.resto;
    this.newAvis.theme = this.themes.find(
      (th) => th.id === Number(this.newAvis.theme)
    );

    console.log(this.newAvis, this.newAvis.theme);

    if (this.avisForm.status === 'INVALID') {
      this.texte = 'Invalide';
      return this.texte;
    } else {
      this.avisService
        .post(this.newAvis)
        .subscribe((data: Avis) => (this.newAvis = data));
      this.texte = "L'avis a bien été enregistré";
      console.log(this.newAvis);
      return this.texte;
    }
  }
}
