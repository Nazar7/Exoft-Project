import { ComponentFixture, TestBed } from '@angular/core/testing';

import {PersonalAchieveComponent} from './personal-achieve.component';

describe('PersonalAchieveComponent', () => {
  let component: PersonalAchieveComponent;
  let fixture: ComponentFixture<PersonalAchieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAchieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
