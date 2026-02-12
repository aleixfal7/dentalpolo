import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisLegalComponent } from './avis-legal.component';

describe('AvisLegalComponent', () => {
  let component: AvisLegalComponent;
  let fixture: ComponentFixture<AvisLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvisLegalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
