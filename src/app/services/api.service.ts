import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projeto } from '../models/projeto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://sume.lccv.ufal.br/homologacao/api/selecao_5_2025/projetos';

  constructor(private http: HttpClient) { }

  // Retorna a lista de projetos
  getProjetos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(`${this.apiUrl}/listar/`);
  }
  // Obtém detalhes de um projeto por ID
  getProjetoById(id: number): Observable<Projeto> {
    return this.http.get<Projeto>(`${this.apiUrl}/${id}/vizualizar/`);
  }
  // Cadastra um novo projeto
  cadastrarProjeto(projeto: Projeto): Observable<Projeto> {
    return this.http.post<Projeto>(`${this.apiUrl}/cadastrar/`, projeto);
  }
  // Edita um projeto existente
  editarProjeto(id: number, projeto: Partial<Projeto>): Observable<Projeto> {
    return this.http.patch<Projeto>(`${this.apiUrl}/${id}/editar/`, projeto);
  }
  // Ativa um projeto
  ativarProjeto(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/ativar/`, {});
  }
  // Inativa um projeto
  inativarProjeto(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/inativar/`, {});
  }
}
