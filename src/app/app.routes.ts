import { Routes } from '@angular/router';
import { Header } from './component/header/header';
import { PaginaCadastro } from './pages/pagina-cadastro/pagina-cadastro';
import path from 'path';
import { PaginaContador } from './page/pagina-contador/pagina-contador';
import { AdicionaTarefa } from './tarefas/adiciona-tarefa/adiciona-tarefa';
import { GerenciaTarefa } from './tarefas/gerencia-tarefa/gerencia-tarefa';

export const routes: Routes = [
    {
        path: '',
        component: Header,
    },
    {
        path: 'cadastro',
        component: PaginaCadastro
    },
    {
        path: 'contador',
        component: PaginaContador
    },
    {
        path: 'tarefas',
        component: GerenciaTarefa
    }

];
