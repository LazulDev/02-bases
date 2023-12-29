import { Component } from '@angular/core';
import {Character, CharacterData} from "../interfaces/character.interface";
import {Id} from "../interfaces/id.model";
import {CharactersService} from "../services/characters.service";

@Component({
  selector: 'dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  characters: Array<Character> = this.charactersService.getList();

  deletedCharacter: Character | undefined;

  constructor(private readonly charactersService: CharactersService) {}
  onCharacterAdded(data: CharacterData) {
    console.log(`[${this.constructor.name}][onCharacterAdded] ${{data}}`);
    this.charactersService.add(data);
  }
  onCharacterDeleted(index: Id) {
    console.log(`[${this.constructor.name}][onCharacterDeleted] ${{index}}`);
    this.deletedCharacter = this.charactersService.delete(index);
  }
}
