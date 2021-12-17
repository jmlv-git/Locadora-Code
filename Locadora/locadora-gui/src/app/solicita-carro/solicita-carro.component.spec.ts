import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaCarroComponent } from './solicita-carro.component';

describe('SolicitaCarroComponent', () => {
  let component: SolicitaCarroComponent;
  let fixture: ComponentFixture<SolicitaCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitaCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
