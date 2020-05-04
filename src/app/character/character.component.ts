import { Component, OnInit } from "@angular/core";
import { Character } from "../character";
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.css"]
})
export class CharacterComponent implements OnInit {
  // The @Input() decorator indicates that the property value passes in from the component's parent (which is CharacterListComponent).
  @Input() char: Character;

  // @Output allows this component to emit an event when the value of the notify property changes.
  @Output() handleProductClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  onClick() {
    this.handleProductClick.emit();
  }
}
