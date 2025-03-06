import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetoService } from '../../services/projeto.service';
import { Projeto } from '../../models/projeto.model';

@Component({
  selector: 'app-projeto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projeto-form.component.html',
  styleUrl: './projeto-form.component.css'
})
export class ProjetoFormComponent implements OnInit {
  projetoForm!: FormGroup;
  idProjeto: number | null = null;

  constructor(
    private fb: FormBuilder,
    private projetoService: ProjetoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projetoForm = this.fb.group({
      projeto: ['', [Validators.required, Validators.maxLength(100)]],
      coordenador: ['', [Validators.required, Validators.maxLength(100)]],
      id_financiador: [null, Validators.required],
      id_area_tecnologica: [null, Validators.required],
      inicio_vigencia: ['', Validators.required],
      fim_vigencia: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0)]],
      ativo: [true]
    });

    // Verificar se há um ID na URL para edição
    this.idProjeto = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idProjeto) {
      this.projetoService.visualizarProjeto(this.idProjeto).subscribe((projeto) => {
        this.projetoForm.patchValue(projeto);
      });
    }
  }

  onSubmit(): void {
    if (this.projetoForm.valid) {
      const projeto: Projeto = this.projetoForm.value;

      if (this.idProjeto) {
        this.projetoService.editarProjeto(this.idProjeto, projeto).subscribe(() => {
          alert('Projeto atualizado com sucesso!');
          this.router.navigate(['/']);
        });
      } else {
        this.projetoService.cadastrarProjeto(projeto).subscribe(() => {
          alert('Projeto cadastrado com sucesso!');
          this.router.navigate(['/']);
        });
      }
    }
  }
}
