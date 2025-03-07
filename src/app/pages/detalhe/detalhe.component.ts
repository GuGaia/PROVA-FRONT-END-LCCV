import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjetoService } from '../../services/projeto.service';
import { Projeto } from '../../models/projeto.model';

@Component({
  selector: 'app-detalhes-projeto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalhesProjetoComponent implements OnInit {
  projeto!: Projeto;

  constructor(
    private route: ActivatedRoute,
    private projetoService: ProjetoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id_projeto'));
    if (id) {
      this.projetoService.visualizarProjeto(id).subscribe((dados) => {
        this.projeto = dados;
      });
    }
  }
}