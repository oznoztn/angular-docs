import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

const routes: Routes = [
  { path: '', component: MainScreenComponent, pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }