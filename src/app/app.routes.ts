import { Routes } from '@angular/router';
import { PesquisaProjetosComponent } from './pages/pesquisa-projetos/pesquisa-projetos.component';
import { DetalhesProjetoComponent } from './pages/detalhe/detalhe.component';
import { EditarProjetoComponent } from './pages/editar/editar.component';
import { CadastrarProjetoComponent } from './pages/cadastrar/cadastrar.component';

export const routes: Routes = [
  { path: '', component: PesquisaProjetosComponent },
  { path: 'projeto/:id', component: DetalhesProjetoComponent },
  { path: 'projeto/editar/:id', component: EditarProjetoComponent },
  { path: 'projeto/cadastrar', component: CadastrarProjetoComponent }
];
