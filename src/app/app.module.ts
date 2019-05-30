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
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

import { AppRouter } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    WrapComponent,
    FormComponent,
    InputComponent,
    ButtonComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    NgSelectModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
