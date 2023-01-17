import { Component, ElementRef, Inject } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss']
})
export class DicesComponent {
  isRolling = false;

  constructor(private elRef: ElementRef, private gameService: GameService) { }

  toggleClasses(die: any) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  rollDice() {
    this.isRolling = true;
    const dices = [...this.elRef.nativeElement.querySelectorAll(".die-list")];

    const data = {
      user: sessionStorage.getItem('playerName')
    };

    this.gameService.rollDice(data).subscribe((ret: any) => {
      this.toggleClasses(dices[0]);
      this.toggleClasses(dices[1]);
      dices[0].dataset.roll = ret.data.dice1;
      dices[1].dataset.roll = ret.data.dice2;
      this.isRolling = false;
    });

  }
}
