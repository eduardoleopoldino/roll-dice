import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseApi } from "../models/base-api.model";
import { History } from "../models/history.model";
import { RollDicePayload } from "../models/rolldice.payload";

const baseUrl = `${environment.baseUrl}/api`;

@Injectable({ providedIn: 'root' })
export class GameService {

    constructor(private http: HttpClient) { }

    getHistory(): Observable<History[]> {
        return this.http.get<BaseApi<History[]>>(baseUrl + '/game-history').pipe(
            map((history: BaseApi<History[]>) => history.data)
        );
    }

    rollDice(data: { user: string }): Observable<BaseApi<RollDicePayload>> {
        return this.http.post<BaseApi<RollDicePayload>>(baseUrl + '/roll-dice', data);
    }
}