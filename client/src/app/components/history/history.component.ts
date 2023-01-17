import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { PusherService } from 'src/app/services/pusher.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Input() history$: any;
  date_format = 'dd/MM/YYYY HH:mm:ss';

  constructor(
    private gameService: GameService,
    private pusherService: PusherService) { }

  ngOnInit(): void {
    this.pusherService.channel.bind('update-history', ({ data }: any) => {
      this.history$.push(data);
    });

    this.gameService.getHistory().subscribe(r => {
      this.history$ = r;
    });
  }
}
