import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

 heroes : Hero[] = []; 

 //selectedHero?: Hero;  //Seleccionaste un héroe del template

 //onSelect(hero: Hero): void {  //Asigna el héroe del template 
  //this.selectedHero = hero; //al componente "selectedHero"
  //this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`); No se usa más con el routeo.

 getHeroes(): void {
    this.heroService.getHeroes() //Traemos los héroes del servicio
    .subscribe(heroes => this.heroes = heroes);
 }

add(name: string): void { // Toma un string de parámetro
   name = name.trim(); //Sacamos espacio vacios
   if (!name) { return; } // Si no es inválido, entra
   this.heroService.addHero({ name } as Hero) // Trata de crear el héroe.
     .subscribe(hero => { // si addHero funciono bien, subscribe() recibe el héroe y lo muestra (push) con los héroes.
       this.heroes.push(hero);
     });
 }

delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero.id).subscribe();
}

 constructor(private heroService: HeroService) { } // El parametro define una propiedad privada de heroService y la identifica como un sitio de inyeccion.
                                                    // Cuando angular crea "HeroesComponent" el sistema setea el parámetro heroService a la instancia de HeroService.
                                                    // private messageService: MessageService Y también le setea el parámetro messageService a HeroService.
 ngOnInit() {
  this.getHeroes(); // No es conveniente llamar a getHeroes() en el constructor. Es mejor dejar que Angular lo llame cuando crea necesario en ngOnInit.
   }

}