import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcompoent',
  templateUrl: './parentcompoent.component.html',
  styleUrls: ['./parentcompoent.component.css']
})
export class ParentcompoentComponent {

  value;

  submit(value) {
    this.value = value;
  }


}
