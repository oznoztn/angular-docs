import { Component, OnInit } from "@angular/core";
import { Character } from "../character";
import { CharacterService } from '../character.service';

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"]
})
export class CharacterListComponent implements OnInit {
  characters: Character[];
  selectedCharacter: Character;

  constructor(
    // Dependency injection is in action here
    private characterService: CharacterService
  ) {
    this.getCharacters();
  }

  ngOnInit(): void {}

  onSelect(character) {
    this.selectedCharacter = character;
  }

// While you could call getHeroes() in the constructor, that's not the best practice.
// Reserve the constructor for simple initialization such as wiring constructor parameters to properties. 
// The constructor shouldn't do anything. 
// It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
// Instead, call getHeroes() inside the ngOnInit lifecycle hook 
//   and let Angular call ngOnInit() at an appropriate time after constructing a HeroesComponent instance.
  getCharacters(): void {
    this.characters = this.characterService.getCharacters();
  }
}
