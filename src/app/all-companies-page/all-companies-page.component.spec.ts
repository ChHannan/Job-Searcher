import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompaniesPageComponent } from './all-companies-page.component';

describe('AllCompaniesPageComponent', () => {
  let component: AllCompaniesPageComponent;
  let fixture: ComponentFixture<AllCompaniesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCompaniesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCompaniesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
