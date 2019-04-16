import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  details: any[];

  eid = 0;
  ename: string;
  dob: Date;

  x = false;

  show() {
    this.x = !this.x;
  }

  ngOnInit() {
  }

  submitted(eid: number, ename: string, dob: Date): void {
    this.eid = eid;
    this.ename = ename;
    this.dob = dob;

    this.details = [{ eid, ename, dob }];
  }
}

