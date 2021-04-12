import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExofAchevementsComponent } from './exof-achevements.component';

describe('ExofAchevementsComponent', () => {
  let component: ExofAchevementsComponent;
  let fixture: ComponentFixture<ExofAchevementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExofAchevementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExofAchevementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
