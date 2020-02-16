import { Component, OnInit } from "@angular/core";
import { Character } from "../character";
import { CHARACTERS } from "../mock-characters";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"]
})
export class CharacterListComponent implements OnInit {
  characters = CHARACTERS;
  selectedCharacter: Character;

  constructor() {}

  ngOnInit(): void {}

  onCharacterSelect(character) {
    this.selectedCharacter = character;
  }
}
