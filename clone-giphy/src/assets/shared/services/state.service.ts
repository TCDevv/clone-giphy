import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  listFavoriteGif$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    JSON.parse(localStorage.getItem('favorite-gifs')) || []
  );
  constructor() {}
}
