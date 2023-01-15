import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  texto: any = []

  constructor() {

  }

  play() {
    const text = '[15/01/2023 16:00:00] Player Eduardo rolled 6. Score: 18';
    this.texto.push(text);
  }
}
