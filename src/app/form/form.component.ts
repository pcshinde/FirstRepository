import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  checklist: any;
  checkedList: any;
  name = new FormControl('');

  constructor() {
    this.checklist = [
      { value: 'Elenor Anderson', isSelected: false },
      { value: 'Caden Kunze', isSelected: false },
      { value: 'Ms. Hortense Zulauf', isSelected: false },
      { value: 'Grady Reichert', isSelected: false },
      { value: 'Dejon Olson', isSelected: false },
      { value: 'Jamir Pfannerstill', isSelected: false },
      { value: 'Aracely Renner DVM', isSelected: false },
      { value: 'Genoveva Luettgen', isSelected: false }
    ];
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.checkedList = this.checklist.every((item: any) => {
      return item.isSelected === true;
    });
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected) {
        this.checkedList.push(this.checklist[i]);
      }
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }
}
