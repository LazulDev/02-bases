import { Component } from '@angular/core';
import {HeroComponent} from "../hero/hero.component";

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames= ['Spiderman', 'Ironman', 'Hulk', 'She-hulk', 'Thor']

  public deletedHero: string | undefined;
  removeLastHero() {
    this.deletedHero = this.heroesNames.pop();
  }
}
