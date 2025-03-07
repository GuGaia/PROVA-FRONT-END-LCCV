import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoFormComponent } from './editar.component';

describe('ProjetoFormComponent', () => {
  let component: ProjetoFormComponent;
  let fixture: ComponentFixture<ProjetoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
