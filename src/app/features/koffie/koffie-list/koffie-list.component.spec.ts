import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoffieListComponent } from './koffie-list.component';

describe('KoffieListComponent', () => {
  let component: KoffieListComponent;
  let fixture: ComponentFixture<KoffieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoffieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KoffieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
