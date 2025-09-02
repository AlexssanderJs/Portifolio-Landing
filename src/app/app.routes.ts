import { Routes } from '@angular/router';
import { Header } from './component/header/header';
import { PaginaCadastro } from './pages/pagina-cadastro/pagina-cadastro';
import path from 'path';
import { PaginaContador } from './page/pagina-contador/pagina-contador';
import { AdicionaTarefa } from './tarefas/adiciona-tarefa/adiciona-tarefa';
import { GerenciaTarefa } from './tarefas/gerencia-tarefa/gerencia-tarefa';
import { PaginaListagem } from './pages/pagina-listagem/pagina-listagem';
import { App } from './app';
import { ListagemDepoimentos } from './pages/listagem-depoimentos/listagem-depoimentos';

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
    },
    {
        path: 'usuarios',
        component: PaginaListagem
    },
    {
        path: 'depoimentos',
        component: ListagemDepoimentos
    }
];
