import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WrapComponent } from './wrap/wrap.component';
import { FormComponent } from './containers/form/form.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { PokemonListComponent } from './containers/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './containers/pokemon-list/pokemon-card/pokemon-card.component';

import { AppRouter } from './app.router';
import { GuardService } from './guard.service';
import { AuthService } from './auth.service';
import { FilterComponent } from './containers/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapComponent,
    FormComponent,
    InputComponent,
    ButtonComponent,
    PokemonListComponent,
    PokemonCardComponent,
    FilterComponent
  ],
  imports: [
    NgSelectModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRouter
  ],
  providers: [AuthService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
