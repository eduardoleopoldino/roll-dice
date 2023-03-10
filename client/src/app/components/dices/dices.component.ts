import { ChangeDetectionStrategy, Component, ElementRef, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseApi } from 'src/app/models/base-api.model';
import { RollDicePayload } from 'src/app/models/rolldice.payload';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DicesComponent {
  isRolling$ = new BehaviorSubject<boolean>(false);

  constructor(private elRef: ElementRef, private gameService: GameService) { }

  toggleClasses(die: HTMLOListElement) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  rollDice() {
    this.isRolling$.next(true);
    const dices: HTMLOListElement[] = [...this.elRef.nativeElement.querySelectorAll(".die-list")];

    const data = {
      user: sessionStorage.getItem('playerName') || ''
    };

    this.gameService.rollDice(data).subscribe((ret: BaseApi<any>) => {
      this.toggleClasses(dices[0]);
      this.toggleClasses(dices[1]);
      dices[0].dataset['roll'] = ret.data.dice1;
      dices[1].dataset['roll'] = ret.data.dice2;
      this.isRolling$.next(false);
    });

  }
}
