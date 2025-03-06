import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaProjetosComponent } from './pesquisa-projetos.component';

describe('PesquisaProjetosComponent', () => {
  let component: PesquisaProjetosComponent;
  let fixture: ComponentFixture<PesquisaProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesquisaProjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
