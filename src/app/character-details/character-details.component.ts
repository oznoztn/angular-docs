import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../character";
import { CharacterService } from '../character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-character-details",
  templateUrl: "./character-details.component.html",
  styleUrls: ["./character-details.component.css"]
})
export class CharacterDetailsComponent implements OnInit {
  @Input() character: Character;
  
  constructor(
    private characterService: CharacterService,
    // ActivatedRoute contains information about the route, 
    //   its parameters, and additional data associated with the route.
    // By injecting the ActivatedRoute, 
    //   you are configuring the component to use a service.
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.populateCharacter();
  }

  populateCharacter() {
    this.route.paramMap.subscribe(params => {
      // Notice that this characterId name corresponds the path variable
      //    we defined in the route (app.modules.tsc)
      this.characterService.getCharacters().subscribe(chars => {
        var requestedCharId = +params.get('characterId');

        this.character = chars.find(character => character.id == requestedCharId);
      })
    });
  }
}
