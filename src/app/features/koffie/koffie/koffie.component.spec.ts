import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoffieComponent } from './koffie.component';

describe('KoffieComponent', () => {
  let component: KoffieComponent;
  let fixture: ComponentFixture<KoffieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoffieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoffieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
