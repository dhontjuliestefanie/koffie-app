import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheeComponent } from './thee.component';

describe('TheeComponent', () => {
  let component: TheeComponent;
  let fixture: ComponentFixture<TheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
