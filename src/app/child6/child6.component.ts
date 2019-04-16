import { Component, Inject } from '@angular/core';
import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component {

  courses: string[];
  skills: any[];
  gender: string[];
  empdata = [];
  skillsup: any = [];
  x = true;
  y = true;

  data: Array<number> = [];
  key = '1';
  DateObj = new Date();

  // constructor to load webservice for local storage
  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {

    this.courses = ['B.Tech', 'BSC', 'BPharma', 'B.Com'];
    this.gender = ['male', 'female', 'other'];
    this.skills = [{ val: 'C', checked: false },
    { val: 'C++', checked: false },
    { val: 'JAVA', checked: false },
    { val: 'Angular', checked: false }
    ];
    console.log(this.DateObj);
  }

  submitData(v) {
    console.log(v);
    v.skills = this.skillsup;
    this.empdata.push(v);
  }
  add(a, b) {
    this.skills[b].checked = a;
    this.skillsup = this.skills.filter(v => v.checked).map(v => v.val);
    console.log(this.skills, this.empdata);

    if (this.skillsup.length === 0) {
      this.x = true;
    }
    else {
      this.x = false;
    }
  }

  gen() {
    this.y = false;
  }

  saveInLocal(val): void {
    console.log('recieved= key:' + this.key + 'value:' + val);
    // this.storage.set(key, JSON.stringify(val));
    localStorage.setItem(this.key, JSON.stringify(val));
    this.data = this.storage.get(this.key);
  }

  getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key] = this.storage.get(key);
    console.log('from locastorage', this.data);
  }

  set(value): void {
    console.log('set method');
    if (typeof value === 'object') {
      console.log('if condition');
      value = JSON.stringify(value);
    }
    console.log('after if condition');
    sessionStorage.setItem(this.key, value);
  }

  get(_KEY: string) {
    console.log('get method');
    const value = sessionStorage.getItem(this.key);
    try {
      console.log('in try block');
      return JSON.parse(value);
      console.log(value);
    } catch (e) {
      console.log('in catch block');
      return value;
      console.log('value');
    }
  }
}
