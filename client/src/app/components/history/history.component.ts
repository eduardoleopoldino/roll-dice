import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { merge, Observable, scan, Subject } from 'rxjs';
import { BaseApi } from 'src/app/models/base-api.model';
import { History } from 'src/app/models/history.model';
import { GameService } from 'src/app/services/game.service';
import { PusherService } from 'src/app/services/pusher.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent implements OnInit {
  history$!: Observable<History[]>;
  historySource$ = new Subject<History>();
  newHistory$ = this.historySource$.asObservable();

  date_format = 'dd/MM/YYYY HH:mm:ss';

  constructor(
    private gameService: GameService,
    private pusherService: PusherService) { }

  ngOnInit(): void {
    this.pusherService.channel.bind('update-history', ({ data }: BaseApi<History>) => {
      this.historySource$.next(data);
    });

    this.history$ = merge(
      this.gameService.getHistory(),
      this.newHistory$
    ).pipe(scan((acc: any, value: any) => [value, ...acc]));
  }
}
