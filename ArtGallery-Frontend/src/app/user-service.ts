import { Injectable } from '@angular/core';
import { User } from './User'; // asigurați-vă că calea este corectă

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public userData: User | null = null; // inițializat ca null

  constructor() { }

  setUserData(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  getUserData(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}