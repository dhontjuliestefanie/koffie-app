import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoffieFilterComponent } from './koffie-filter.component';

describe('KoffieFilterComponent', () => {
  let component: KoffieFilterComponent;
  let fixture: ComponentFixture<KoffieFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoffieFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoffieFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
