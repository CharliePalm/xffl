import { Observable, map, of } from "rxjs";
import { HttpClient, HttpResponse } from '@angular/common/http';
import * as Model from './api.model';
import { players, users, matchups, rosters } from "../temp/test-data";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class API {
  private baseUrl = 'https://www.xffl.net/ssl/'
  private headers = {};
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<HttpResponse<Model.User>> {
    const testUser = users.find((u) => u.email === email);
    return of(new HttpResponse<Model.User>({status: testUser ? 200 : 404, body: testUser ?? null})).pipe(
      map((resp) => {
        if (!this.isFailure(resp)) {
          return this.handleRecoverableError(resp);
        }
        return resp;
      })
    );
    // TODO: remove mock data
    const url = this.baseUrl + 'login.php';
    return this.http.post<HttpResponse<Model.User>>(url, {email, password}, this.headers);
  }

  updatePlayerStatus(player: Model.Player): Observable<HttpResponse<Model.Player>> {
    return of(new HttpResponse<Model.Player>({status: 200, body: {...player, active: !player.active}})).pipe(
      map((resp) => {
        if (!this.isFailure(resp)) {
          return this.handleRecoverableError(resp)
        }
        return resp;
      }),
    );

    // send player id, API should flip player status
  }

  fetchAll(): Observable<HttpResponse<Model.AllLeagueData>> {
    return of(new HttpResponse<Model.AllLeagueData>({status: 200, body: {players, participants: users, matchups, rosters, currentWeek: 3,}})).pipe(
      map((resp) => {
        if (!this.isFailure(resp)) {
          return this.handleFatalError(resp)
        }
        return resp;
      })
    );
    // query for all data
  }

  private handleFatalError(resp: HttpResponse<any>): HttpResponse<any> {
    // TODO implement notify service and logout
    return resp;
  }

  private handleRecoverableError(resp: HttpResponse<any>): HttpResponse<any> {
    // TODO implement notify service
    return resp;
  }

  private isFailure(resp: HttpResponse<any>): boolean {
    return !(resp?.status < 300 && resp?.status >= 200 && resp?.body)
  }
}

