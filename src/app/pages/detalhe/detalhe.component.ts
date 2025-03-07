import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetoService } from '../../services/projeto.service';
import { Projeto } from '../../models/projeto.model';

@Component({
  selector: 'app-detalhes-projeto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalhesProjetoComponent implements OnInit {
  projeto!: Projeto;
  carregando = true;
  erro: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projetoService: ProjetoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.projetoService.visualizarProjeto(id).subscribe({
        next: (dados) => {
          this.projeto = dados;
          this.carregando = false;
        },
        error: (err) => {
          this.erro = 'Erro ao carregar o projeto.';
          this.carregando = false;
        }
      });
    } else {
      this.erro = 'ID inválido.';
      this.carregando = false;
    }
  }

  voltar(): void {
    this.router.navigate(['/']); // Redireciona para a tela inicial
  }
}
