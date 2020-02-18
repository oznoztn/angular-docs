import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here

import { AppComponent } from "./app.component";
import { CharacterListComponent } from "./character-list/character-list.component";
import { CharacterComponent } from './character/character.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { AppRoutingModule } from './app-routing.module';
import { MainScreenComponent } from './main-screen/main-screen.component';

@NgModule({
  declarations: [AppComponent, CharacterListComponent, CharacterComponent, CharacterDetailsComponent, MainScreenComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
