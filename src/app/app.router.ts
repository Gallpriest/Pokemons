import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { GuardService } from './guard.service';

const routes: Routes = [
  { path: 'list', component: PokemonListComponent },

  // 1 вариант - запрет перехода по роуту для всего родителя и его потомков
  //
  // { path: 'list',  canActivate: [GuardService],  component: PokemonListComponent },
  // пробный путь для отработки GuardService - данный сервис позволяет ограничивать доступ
  // пользователю в случае если не выполнены условия GuardService
  // -------------------------------------------------------------------------------------
  // 2 вариант - запрет перехода по роуту на потомков; возможность перехода на основной путь
  //
  // { path: 'list',  canActivateChild: [GuardService],  component: PokemonListComponent },
  // остается. Для этого в GuardService используется доп.метод canActivateChild, в котором
  // идет возврат результат метода canActivate.

  { path: 'list/:search', component: PokemonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouter {}
