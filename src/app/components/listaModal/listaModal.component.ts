import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projeto } from '../../models/projeto.model';
import { Router } from '@angular/router';
import { ProjetoService } from '../../services/projeto.service';

@Component({
  selector: 'app-projeto-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listaModal.component.html',
  styleUrls: ['./listaModal.component.scss']
})
export class ListaModal {
  @Input() projetos: Projeto[] = [];
  @Input() exibirResultados: boolean = false;

  @Output() fechar = new EventEmitter<void>(); 
 
  constructor(
    private router: Router,
    private projetoService: ProjetoService
  ) {}

  fecharModal(): void {
    this.fechar.emit();
  }

  visualizarProjeto(id: number): void {
    this.router.navigate(['/projeto', id]);
  }

  editarProjeto(id: number): void {
    this.router.navigate(['/projeto/editar', id]);
  }

  ativarProjeto(id: number): void {
    if (confirm('Tem certeza que deseja ativar este projeto?')) {
      this.projetoService.ativarProjeto(id).subscribe(() => {
        alert('Projeto ativado com sucesso!');
        this.removerProjetoDaLista(id);
      });
    }
  }

  inativarProjeto(id: number): void {
    if (confirm('Tem certeza que deseja inativar este projeto?')) {
      this.projetoService.inativarProjeto(id).subscribe(() => {
        alert('Projeto inativado com sucesso!');
        this.removerProjetoDaLista(id);
      });
    }
  }

  private removerProjetoDaLista(id: number): void {
    this.projetos = this.projetos.map(projeto =>
      projeto.id_projeto === id ? { ...projeto, ativo: !projeto.ativo } : projeto
    );
  }
}

