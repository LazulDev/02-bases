import {Component, EventEmitter, Output} from '@angular/core';
import {CharacterData} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  @Output()
  characterAdded = new EventEmitter<CharacterData>();

  public character: CharacterData = {
    name: '',
    power: 0
  };

  emitCharacter(event: Event) {
    if (this.character.name.length === 0) return;

    this.characterAdded.emit({ ...this.character});

    this.character = {
      name: '',
      power: 0
    }
  }
}
