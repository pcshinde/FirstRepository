import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component {

  data: any[];
  udata: any;
  constructor(private ds: DataService) {
  }

  sendata(data) {
    this.ds.fordatasource(data);
  }

  receivedata(...data) {
    this.data = this.data = this.ds.forclient();
  }

}
