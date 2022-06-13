import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacteristicsEmployeeComponent } from './characteristics-employee.component';

describe('CharacteristicsEmployeeComponent', () => {
  let component: CharacteristicsEmployeeComponent;
  let fixture: ComponentFixture<CharacteristicsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacteristicsEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacteristicsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
