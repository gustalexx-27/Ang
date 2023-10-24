import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Componente que cree */
import { miFooter } from './components/footer/footer';
import { Menu } from './components/Menu/menu';
import { heroComponent } from './components/hero/Hero';

/*En declarations podemos agregar los componentes que desarrollemos aqui y podamos usarlo en cualquier aplicaicon*/
@NgModule({
  declarations: [
    AppComponent,
    miFooter,
    Menu,
    heroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
