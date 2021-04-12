import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesBlockComponent } from './badges-block.component';

describe('BadgesBlockComponent', () => {
  let component: BadgesBlockComponent;
  let fixture: ComponentFixture<BadgesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
