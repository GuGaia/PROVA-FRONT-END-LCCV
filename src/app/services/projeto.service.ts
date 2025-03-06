import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Projeto } from '../models/projeto.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private apiUrl = 'https://sume.lccv.ufal.br/homologacao/api/selecao_5_2025/projetos';

  constructor(private http: HttpClient) { }

  listarProjetos(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(`${this.apiUrl}/listar/`);
  }
  visualizarProjeto(id: number): Observable<Projeto> {
    return this.http.get<Projeto>(`${this.apiUrl}/${id}/vizualizar/`);
  }
  cadastrarProjeto(projeto: Projeto): Observable<Projeto> {
    return this.http.post<Projeto>(`${this.apiUrl}/cadastrar/`, projeto);
  }
  editarProjeto(id: number, projeto: Partial<Projeto>): Observable<Projeto> {
    return this.http.patch<Projeto>(`${this.apiUrl}/${id}/editar/`, projeto);
  }
  ativarProjeto(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/ativar/`, {});
  }
  inativarProjeto(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/inativar/`, {});
  }
}
