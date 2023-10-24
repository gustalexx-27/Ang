import { Component } from '@angular/core';

/*Los componentes son trozos de pantalla y terminan en ts y las vistas en html */
/*Decorador en angular o typecript:  es una clase de caracteristicas y propiedades que tendra el componente*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*La clase tiene propiedades y estas las pruedes llamar en el componente */
export class AppComponent {
  title = 'holaMundo';
  metadescripcion = 'Esto es una metadescripcion';
}
