import { Component } from '@angular/core';
import * as modulo1 from './modulo1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = modulo1.texto;

  media = modulo1.calcularMedia(8.5, 9.0, 7.5).toFixed(2);

  diaAtual = 3; // quarta-feira
  nomeDia = modulo1.obterNomeDia(this.diaAtual);
}