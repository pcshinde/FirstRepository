import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcompoentComponent } from './parentcompoent.component';

describe('ParentcompoentComponent', () => {
  let component: ParentcompoentComponent;
  let fixture: ComponentFixture<ParentcompoentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcompoentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
