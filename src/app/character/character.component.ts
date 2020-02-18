import { Component, OnInit } from "@angular/core";
import { Character } from "../character";
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.css"]
})
export class CharacterComponent implements OnInit {
  @Input() char: Character;
  @Output() handleProductClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  onClick() {
    this.handleProductClick.emit();
  }
}
