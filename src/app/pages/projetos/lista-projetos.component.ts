import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoService } from '../../services/projeto.service';
import { Projeto } from '../../models/projeto.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-projetos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-projetos.component.html',
  styleUrl: './lista-projetos.component.css'
})
export class ListaProjetosComponent implements OnInit {
  projetos: Projeto[] = [];

  constructor(private projetoService: ProjetoService) {}

  ngOnInit(): void {
    this.carregarProjetos();
  }

  carregarProjetos(): void {
    this.projetoService.listarProjetos().subscribe((dados) => {
      this.projetos = dados;
    });
  }
}