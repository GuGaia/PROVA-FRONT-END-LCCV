import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProjetoComponent } from './cadastrar.component';

describe('CadastrarProjetoComponent', () => {
  let component: CadastrarProjetoComponent;
  let fixture: ComponentFixture<CadastrarProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
