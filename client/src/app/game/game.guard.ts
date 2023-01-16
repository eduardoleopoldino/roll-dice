import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AppService } from "../app.service";

@Injectable({ providedIn: 'root' })
export class GameGuard implements CanActivate {
    constructor(private appService: AppService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // if (this.appService.getName() === '') {
        //     this.router.navigate(['welcome']);
        //     return false;
        // }
        
        return true;
    }
}