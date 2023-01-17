import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { merge, Observable, scan, Subject } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { PusherService } from 'src/app/services/pusher.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent implements OnInit {
  history$!: Observable<any[]>;
  historySource$ = new Subject<any>();
  newHistory$ = this.historySource$.asObservable();

  date_format = 'dd/MM/YYYY HH:mm:ss';

  constructor(
    private gameService: GameService,
    private pusherService: PusherService) { }

  ngOnInit(): void {
    this.pusherService.channel.bind('update-history', ({ data }: any) => {
      this.historySource$.next(data);
    });

    this.history$ = merge(
      this.gameService.getHistory(),
      this.newHistory$
    ).pipe(scan((acc, value) => [value, ...acc]));
  }
}
