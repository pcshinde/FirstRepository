import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  empdata: object[] = [];
  b = false;
  name: string;
  password: string;
  index: number;
  obj: object = {};

  ngOnInit() {
  }

  SubmitData(v) {
    this.empdata.push(v);
  }

  DeleteRecord(index) {
    this.empdata.splice(index, 1);
  }

  EditRecord(obj, index) {
    this.name = obj.name;
    this.password = obj.password;
    this.index = obj.index;
    this.b = true;
  }
  SaveRecord() {
    this.empdata.splice(this.index, 1, { name: this.name, password: this.password });
    this.b = false;
  }
}
