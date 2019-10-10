import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvetsComponent } from './listvets.component';

describe('ListvetsComponent', () => {
  let component: ListvetsComponent;
  let fixture: ComponentFixture<ListvetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListvetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
