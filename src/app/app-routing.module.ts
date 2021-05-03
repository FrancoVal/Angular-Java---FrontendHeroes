import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Se importa esto para que tenga funcionalidad de routeo
import { HeroesComponent } from './heroes/heroes.component'; // Se importa esto para que el Router tenga a donde ir
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }, // Path de URL ("heroes") y el componente que el router tiene que crear cuando se va a dicho path
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },// Path AUTOMATICO, abris la pagina y te lleva acá de una
  { path: 'detail/:id', component: HeroDetailComponent }, // Path de URL al que vas cuando clikeas un héroe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //  ?? The following line adds the RouterModule to the AppRoutingModule imports array and configures it with the routes in one step by calling RouterModule.forRoot():
  exports: [RouterModule]
})
export class AppRoutingModule { }

