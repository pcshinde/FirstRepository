import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videothumb',
  templateUrl: './videothumb.component.html',
  styleUrls: ['./videothumb.component.css']
})
export class VideothumbComponent {

  link;

  submiturl(link) {
    this.link = link;
  }
}
