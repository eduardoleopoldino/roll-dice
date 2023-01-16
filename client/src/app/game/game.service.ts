import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

const baseUrl = 'http://localhost:9000/.netlify/functions/api';

@Injectable({ providedIn: 'root' })
export class GameService {

    constructor(private http: HttpClient) { }

    getHistory() {
        return this.http.get(baseUrl + '/game-history').pipe(
            map((history: any) => history.data)
        );
    }

    rollDice(data: any) {
        return this.http.post(baseUrl + '/roll-dice', data);
    }
}