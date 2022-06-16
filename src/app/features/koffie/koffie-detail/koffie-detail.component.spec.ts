import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoffieDetailComponent } from './koffie-detail.component';

describe('KoffieDetailComponent', () => {
  let component: KoffieDetailComponent;
  let fixture: ComponentFixture<KoffieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoffieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoffieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
