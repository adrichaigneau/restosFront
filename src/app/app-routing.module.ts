import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './pages/restaurant/restaurant.component'
import { HomeComponent } from './pages/home/home.component';
import { TypeComponent } from './pages/type/type.component';
import { RestaurantEditComponent } from './pages/restaurant-edit/restaurant-edit.component';
import { TypeEditComponent } from './pages/type-edit/type-edit.component';
import { ArrondissementComponent } from './pages/arrondissement/arrondissement.component';
import { TypesComponent } from './pages/types/types.component';
import { CarteComponent } from './pages/carte/carte.component';
import { AvisEditComponent } from './pages/avis-edit/avis-edit.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: HomeComponent
  },

  {
    path: 'restaurant/:id',
    component: RestaurantComponent
  },

  {
    path: 'type/:id',
    component: TypeComponent
  },

  {
    path: 'arrondissement/:id',
    component: ArrondissementComponent
  },

  {
    path:'',
    redirectTo:'/accueil',
    pathMatch: 'full'
  },

  {
    path: 'editresto',
    component: RestaurantEditComponent
  },

  {
    path: 'edittype',
    component: TypeEditComponent
  },

  {
    path: 'types',
    component: TypesComponent
  },

  {
    path: 'carte',
    component: CarteComponent
  },

  {
    path: 'avisedit/:id',
    component: AvisEditComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
