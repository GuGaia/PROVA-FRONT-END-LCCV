import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProjetoService } from '../../services/projeto.service';
import { Projeto } from '../../models/projeto.model';
import { Router } from '@angular/router';
import { ListaModal } from '../../components/listaModal/listaModal.component';


@Component({
  selector: 'app-pesquisa-projetos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ListaModal],
  templateUrl: './pesquisa-projetos.component.html',
  styleUrls: ['./pesquisa-projetos.component.scss']
})
export class PesquisaProjetosComponent implements OnInit {
  pesquisaForm!: FormGroup;
  projetos: Projeto[] = [];
  projetosFiltrados: Projeto[] = [];
  exibirResultados = false; 

  constructor(
    private fb: FormBuilder,
    private projetoService: ProjetoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pesquisaForm = this.fb.group({
      projeto: [''],
      id_financiador: [''],
      id_area_tecnologica: [''],
      coordenador: [''],
      inicio_vigencia: [''],
      fim_vigencia: [''],
      ativo: ['']
    });

    this.carregarProjetos();
  }

  carregarProjetos(): void {
    this.projetoService.listarProjetos().subscribe((dados) => {
      this.projetos = [...dados];
      this.projetosFiltrados = [...dados]; 
    });
  }
  
  filtrarProjetos(): void {
    const filtros = this.pesquisaForm.value;
    const ativoBoolean = filtros.ativo === 'true' ? true : filtros.ativo === 'false' ? false : null;

    this.projetosFiltrados = this.projetos.filter(projeto => {
      return (
        (!filtros.projeto || projeto.projeto.toLowerCase().includes(filtros.projeto.toLowerCase())) &&
        (!filtros.inicio_vigencia || new Date(projeto.inicio_vigencia) >= new Date(filtros.inicio_vigencia)) &&
        (!filtros.fim_vigencia || new Date(projeto.fim_vigencia) <= new Date(filtros.fim_vigencia)) &&
        (ativoBoolean === null || projeto.ativo === ativoBoolean)
      );
    });

    this.exibirResultados = true;  
  }

  limparFiltros(): void {
    this.pesquisaForm.reset();
    this.projetosFiltrados = [...this.projetos];
    this.exibirResultados = false; 
  }

  fecharResultados(): void {
    this.exibirResultados = false;  
  }

}