import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Session extends Map {

  setItem(id:any, value:any) {
    if (typeof value === 'object') { value = JSON.stringify(value); }
    sessionStorage.setItem(id, value);
  }

  get(id) {
    const value = sessionStorage.getItem(id);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
}
