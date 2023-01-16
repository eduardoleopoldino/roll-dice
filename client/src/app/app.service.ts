import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AppService {
    private name = '';

    constructor() {}

    getName() {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
}