import { Routes } from '@angular/router';
import { PesquisaProjetosComponent } from './pages/pesquisa-projetos/pesquisa-projetos.component';
import { DetalhesProjetoComponent } from './pages/detalhe/detalhe.component';
import { ProjetoFormComponent } from './pages/projeto-form/projeto-form.component';

export const routes: Routes = [
  { path: '', component: PesquisaProjetosComponent },
  { path: 'projeto/:id', component: DetalhesProjetoComponent },
  { path: 'projeto-form', component: ProjetoFormComponent },
  { path: 'projeto-form/:id', component: ProjetoFormComponent }
];
