import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppComponent } from "./app.component";
import { CharacterListComponent } from "./character-list/character-list.component";
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [AppComponent, CharacterListComponent, CharacterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
