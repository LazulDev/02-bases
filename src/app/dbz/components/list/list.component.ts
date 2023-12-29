import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {Id} from "../../interfaces/id.model";

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input({required: true}) public characters: Array<Character> = [];
  @Output() characterDeleted = new EventEmitter<Id>();

  onDeleteCharacter(id: Id) {
    this.characterDeleted.emit(id);
  }
}
