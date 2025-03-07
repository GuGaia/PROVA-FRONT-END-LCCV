import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetoService } from '../../services/projeto.service';
import { Projeto } from '../../models/projeto.model';

@Component({
  selector: 'app-cadastrar-projeto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarProjetoComponent {
  projetoForm: FormGroup;
  erro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private projetoService: ProjetoService
  ) {
   
    this.projetoForm = this.fb.group({
      projeto: ['', [Validators.required, Validators.maxLength(100)]],
      coordenador: ['', [Validators.required, Validators.maxLength(100)]],
      id_financiador: [null, Validators.required],
      id_area_tecnologica: [null, Validators.required],
      inicio_vigencia: ['', Validators.required],
      fim_vigencia: ['', Validators.required],
      ativo: [true]
    });
  }

  cadastrarProjeto(): void {
    if (this.projetoForm.valid) {
      const novoProjeto: Omit<Projeto, 'id_projeto'> = {
        projeto: this.projetoForm.value.projeto,
        coordenador: this.projetoForm.value.coordenador,
        id_financiador: Number(this.projetoForm.value.id_financiador),
        id_area_tecnologica: Number(this.projetoForm.value.id_area_tecnologica),
        inicio_vigencia: new Date(this.projetoForm.value.inicio_vigencia).toISOString(),
        fim_vigencia: new Date(this.projetoForm.value.fim_vigencia).toISOString(),
        ativo: !!this.projetoForm.value.ativo
      };

      this.projetoService.cadastrarProjeto(novoProjeto).subscribe({
        next: () => {
          alert('Projeto cadastrado com sucesso!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Erro ao cadastrar o projeto:', err);
          this.erro = 'Erro ao cadastrar o projeto. Verifique os dados e tente novamente.';
        }
      });
    } else {
      this.erro = 'Por favor, preencha todos os campos corretamente.';
    }
  }

  cancelarCadastro(): void {
    this.router.navigate(['/']);
  }
}
