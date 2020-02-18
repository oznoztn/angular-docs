import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor() { }

  // The implementation returning Character[] before was working sync, not async.
  // Now it returns Observable<Character[]>, it works asynchronously.
  getCharacters(): Observable<Character[]> {
    return of(CHARACTERS);
  }
}
