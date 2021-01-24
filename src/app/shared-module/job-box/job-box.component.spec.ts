import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBoxComponent } from 'src/app/shared-module/job-box/job-box.component';

describe('JobBoxComponent', () => {
  let component: JobBoxComponent;
  let fixture: ComponentFixture<JobBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
