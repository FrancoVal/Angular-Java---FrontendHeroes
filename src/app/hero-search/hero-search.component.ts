import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>; 
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Pushea un termino al stream observable.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe( // Es un observable y no un array.
      // Antes de considerar el termino, espera 300ms entre cada tecla presionada.
      debounceTime(300),

      // Ignora el nuevo término si es el mismo que el anterior buscado.
      distinctUntilChanged(),

      // Cambia a nueva busqueda observable cada vez que el término cambia.
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}