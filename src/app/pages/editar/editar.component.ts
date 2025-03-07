import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetoService } from '../../services/projeto.service';
import { Projeto } from '../../models/projeto.model';

@Component({
  selector: 'app-editar-projeto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarProjetoComponent implements OnInit {
  projetoForm!: FormGroup;
  idProjeto!: number;
  carregando = true;
  erro: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private projetoService: ProjetoService
  ) {}

  ngOnInit(): void {
    this.idProjeto = Number(this.route.snapshot.paramMap.get('id'));

    if (this.idProjeto) {
      this.projetoService.visualizarProjeto(this.idProjeto).subscribe({
        next: (dados) => {
          this.projetoForm = this.fb.group({
            projeto: [dados.projeto, [Validators.required, Validators.maxLength(100)]],
            coordenador: [dados.coordenador, [Validators.required, Validators.maxLength(100)]],
            id_financiador: [dados.id_financiador, Validators.required],
            id_area_tecnologica: [dados.id_area_tecnologica, Validators.required],
            inicio_vigencia: [dados.inicio_vigencia, Validators.required],
            fim_vigencia: [dados.fim_vigencia, Validators.required],
            ativo: [dados.ativo]
          });
          this.carregando = false;
        },
        error: () => {
          this.erro = 'Erro ao carregar o projeto.';
          this.carregando = false;
        }
      });
    } else {
      this.erro = 'ID inválido.';
      this.carregando = false;
    }
  }

  salvarEdicao(): void {
    if (this.projetoForm.valid) {
      const projetoEditado: Partial<Projeto> = this.projetoForm.value;
  
      this.projetoService.editarProjeto(this.idProjeto, projetoEditado).subscribe({
        next: () => {
          alert('Projeto atualizado com sucesso!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Erro ao atualizar o projeto:', err);
          this.erro = 'Erro ao atualizar o projeto. Tente novamente.';
        }
      });
    } else {
      this.erro = 'Por favor, preencha todos os campos corretamente.';
    }
  }

  cancelarEdicao(): void {
    this.router.navigate(['/']);
  }
}
