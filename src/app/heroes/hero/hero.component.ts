import {NgIf} from "@angular/common";
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = 'Spiderman'
  age = 18

  get capitalizedName() {
    return this.name.toLocaleUpperCase('es-ES')
  }

  getHeroDescription() {
    return `${this.name} - ${this.age}`
  }
  changeHero() {
    this.name = 'María'
  }
  changeAge() {
    this.age = 30
  }

  resetForm() {
    this.name = 'Spiderman'
    this.age = 18
  }
}
