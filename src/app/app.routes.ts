import { Routes } from '@angular/router';
import { ListaProjetosComponent } from './pages/projetos/lista-projetos.component';
import { DetalhesProjetoComponent } from './pages/detalhes-projeto/detalhes-projeto.component';

export const routes: Routes = [
  { path: '', component: ListaProjetosComponent },
  { path: 'projeto/:id', component: DetalhesProjetoComponent }
];
