import {DecimalPipe, NgClass} from "@angular/common";
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AddCharacterComponent} from "./components/add-character/add-character.component";
import {ListComponent} from "./components/list/list.component";
import {MainPageComponent} from "./pages/main-page.component";

@NgModule({
  declarations: [MainPageComponent, ListComponent, AddCharacterComponent],
  imports: [
    DecimalPipe, NgClass, FormsModule
  ],
  exports: [MainPageComponent]
})
export class DbzModule { }
