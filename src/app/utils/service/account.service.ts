import { BehaviorSubject, Observable, map } from "rxjs";
import { API } from "../api/api.util";
import { Injectable } from "@angular/core";
import { User } from "../api/api.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AccountService {
  public userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  constructor(private api: API, private router: Router) {}

  login(username: string, password: string): Observable<boolean> {
    return this.api.login(username, password).pipe(
      map((resp) => {
        if (!resp?.body?.id || resp.status !== 200) {
          this.userSubject.next(null);
          return false;
        }
        this.userSubject.next(resp.body);
        return true;
      }),
    );
  }

  logout() {
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}
