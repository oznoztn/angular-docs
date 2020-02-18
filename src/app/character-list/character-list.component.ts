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
    this.characters = this.characterService.getCharacters();
  }

  ngOnInit(): void {}

  onSelect(character) {
    this.selectedCharacter = character;
  }
}
