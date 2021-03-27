import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMangeComponent } from './admin-mange.component';

describe('AdminMangeComponent', () => {
  let component: AdminMangeComponent;
  let fixture: ComponentFixture<AdminMangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
