import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../service/account.service';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private loggedIn = false;
  constructor(
      private router: Router,
      private accountService: AccountService
  ) {
    this.accountService.userSubject.pipe(
      tap((user) => {
        this.loggedIn = !!user
      }),
    ).subscribe();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.loggedIn) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
