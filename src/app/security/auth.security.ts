import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { ACCESS_TOKEN } from "../constants/common";

@Injectable()
export class AuthSecurity implements CanActivate {

  constructor(private router: Router) {
  }

  /**
   * guard deciding if a route can be activated.
   * @param ActivatedRouteSnapshot: Contains the information about a route associated with component
   *        loaded in outlet in particular time. It can traverse router state tree.
   * @param RouterStateSnapshot: It is a tree of activated route snapshots. It has url property that
   *        gives the URL from which this snapshot was created.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }
}
