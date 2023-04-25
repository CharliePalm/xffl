import { Injectable } from "@angular/core";
import { AllLeagueData, EnrichedMatchup, Matchup, Player, Position, Roster, User } from "./api.model";
import { AccountService } from "../service/account.service";
import { tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DataStore {
  constructor(private accountService: AccountService) {
    this.accountService.userSubject.pipe(
      tap((u) => {
        if (!u) {
          // logout case
          this.userRoster = this.me = undefined;
        } else {
          this.me = u;
        }
      })
    ).subscribe();
  }
  private players!: Player[];
  private matchups!: Matchup[];
  private enrichedMatchups!: EnrichedMatchup[];
  private users!: User[];
  private rosters!: Roster[];
  private userRoster!: Roster | undefined;
  private me!: User | undefined;
  private currentWeek!: number;

  public updatePlayerStatus(player: Player) {
    const toUpdate = this.players.find((p) => player?.id === p.id);
    if (toUpdate) toUpdate.active = !toUpdate.active;
  }

  public populate(data: AllLeagueData): void {
    if (!this.me) {
      throw new Error('trying to populate while user is not loaded');
    }
    this.players = data.players;
    this.matchups = data.matchups;
    this.rosters = data.rosters;
    this.users = data.participants;
    this.currentWeek = data.currentWeek;
    this.userRoster = this.rosters.find((r) => r.parentId === this.me?.id);
    this.enrichRosters();
    this.enrichedMatchups = this.matchups.map((matchup) => {
      return {
        ...matchup,
        team1: this.rosters.find((roster) => roster.parentId === matchup.user1),
        team2: this.rosters.find((roster) => roster.parentId === matchup.user2),
      };
    });
  }

  public waitForLoad(): void {
    while (!this.enrichedMatchups);
  }

  public get allMatchups() { return this.matchups; }
  public get allUsers() { return this.users; }
  public get allPlayers() { return this.players; }
  public get allEnrichedMatchups() { return this.enrichedMatchups; }
  public get allRosters() { return this.rosters; }
  public get myTeam() { return this.userRoster; }
  public get user() { return this.me; }
  public get week() { return this.currentWeek; }

  private enrichRosters(): void {
    this.users.forEach((u) => {
      const userRoster = this.rosters.find((r) => r.parentId === u.id)!;
      // console.log(userRoster);
      // for displaying on the UI
      userRoster.active = [
        userRoster.qb,
        userRoster.rb1,
        userRoster.rb2,
        userRoster.wr1,
        userRoster.wr2,
        userRoster.wr3,
        userRoster.k,
        userRoster.dst,
      ];
      userRoster.bench = this.players.filter((p) => p.owner === u.id && !userRoster.active?.some((player) => player?.id === p?.id));
    });
  }
}
