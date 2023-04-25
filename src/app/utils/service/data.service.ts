import { Observable, map } from "rxjs";
import { AllLeagueData, Player } from "../api/api.model";
import { API } from "../api/api.util";
import { DataStore } from "../api/data.store";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private api: API, private store: DataStore) {}

  fetchAll(): Observable<AllLeagueData> {
    return this.api.fetchAll().pipe(
      map((resp) => {
        this.store.populate(resp.body!);
        return resp.body!;
      }),
    );
  }

  updatePlayerStatus(player: Player): Observable<boolean> {
    return this.api.updatePlayerStatus(player).pipe(
      map((p) => p.body?.active !== player.active)
    );
  }
}
