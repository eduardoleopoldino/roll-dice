import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
  name = sessionStorage.getItem('playerName') || '';

  constructor(private router: Router) {}

  leaveGame() {
    sessionStorage.clear();
    this.router.navigate(['welcome']);
  }
}
