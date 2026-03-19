import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStateManagement } from './global-state-management';

describe('GlobalStateManagement', () => {
  let component: GlobalStateManagement;
  let fixture: ComponentFixture<GlobalStateManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalStateManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalStateManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
