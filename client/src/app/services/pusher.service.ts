import { Injectable } from "@angular/core";
import Pusher from 'pusher-js';
import * as PusherTypes from 'pusher-js';
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class PusherService {
    private _pusher: Pusher;
    channel: PusherTypes.Channel;

    constructor() {
        this._pusher = new Pusher(environment.pusherKey, {
            cluster: 'eu'
        });
        Pusher.logToConsole = true;
        this.channel = this._pusher.subscribe('roll-dice');
    }

    get pusher() {
        return this._pusher;
    }
}