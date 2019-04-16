import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any[];

  constructor() { }

  public forclient(...udata): any[] {
    return this.data;
  }
  public fordatasource(value: any[]) {
    this.data = value;
  }

}
