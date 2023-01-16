import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  history$!: Observable<any>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // timer(5000, 3000).subscribe((ret) => {
    //   console.log(111, ret);
    //   // wait 5s, every 3s
    // })
    this.history$ = this.gameService.getHistory();
  }
}
