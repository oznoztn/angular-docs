import { Injectable } from '@angular/core';
import { CHARACTERS } from './mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor() { }

  getCharacters() {
    return CHARACTERS;
  }
}
