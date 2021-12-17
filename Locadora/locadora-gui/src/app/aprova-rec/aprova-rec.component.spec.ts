import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovaRecComponent } from './aprova-rec.component';

describe('AprovaRecComponent', () => {
  let component: AprovaRecComponent;
  let fixture: ComponentFixture<AprovaRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovaRecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovaRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
