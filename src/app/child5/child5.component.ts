import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component {

  constructor(private ds: DataService) { }

  data: any;
  udata: any;

  sendata() {
    this.ds = this.data;
  }

  receivedata() {
    this.data = this.ds.forclient();
  }
}
