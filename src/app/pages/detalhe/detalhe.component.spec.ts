import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProjetoComponent } from './detalhe.component';

describe('DetalhesProjetoComponent', () => {
  let component: DetalhesProjetoComponent;
  let fixture: ComponentFixture<DetalhesProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
