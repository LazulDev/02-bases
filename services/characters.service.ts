import { Injectable } from '@angular/core';
import {Character, CharacterData} from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';
import {Id} from "../interfaces/id.model";
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  public characters: Array<Character> = [
    {
      _id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      _id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      _id: uuid(),
      name: 'Vegeta',
      power: 8500
    }
  ];

  getList(): Array<Character> {
    return this.characters;
  }
  add(character: CharacterData) {
    this.characters.push({_id: uuid(), ...character});
  }
  delete(id: Id): Character | undefined {
    const index = this.characters.findIndex(character => character._id === id);
    const deletedCharacter = this.characters[index];

    this.characters.splice(index, 1);

    return deletedCharacter;
  }

}
