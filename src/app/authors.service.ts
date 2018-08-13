import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors () {
    return ["Author X", "Author Y", "Author Z"]
  }
}
