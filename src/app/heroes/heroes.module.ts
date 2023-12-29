import {NgIf} from "@angular/common";
import {NgModule} from "@angular/core";
import {HeroComponent} from "./hero/hero.component";
import {ListComponent} from "./list/list.component";

@NgModule({
  declarations: [HeroComponent, ListComponent],
  imports: [
    NgIf
  ],
  exports: [ListComponent]
})
export class HeroesModule {}
