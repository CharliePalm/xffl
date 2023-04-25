import { Component, OnInit } from '@angular/core';
import { EnrichedMatchup, Player, Team, User } from 'src/app/utils/api/api.model';
import { DataStore } from 'src/app/utils/api/data.store';
import { getTeamPointSum } from 'src/app/utils/helpers/helpers';

@Component({
  selector: 'app-matchup',
  templateUrl: './matchup.component.html',
  styleUrls: ['./matchup.component.scss']
})
export class MatchupComponent implements OnInit {
  public enrichedMatchup!: EnrichedMatchup;
  public me: User | undefined;
  public myTeamName: string | undefined;
  public otherTeamName: string | undefined;
  public myTeam?: Team;
  public otherTeam?: Team;
  constructor(private dataStore: DataStore) {}

  ngOnInit(): void {
    this.dataStore.waitForLoad();
    this.me = this.dataStore.user;
    this.enrichedMatchup = this.dataStore.allEnrichedMatchups.find((m) => m.user1 === this.me!.id || m.user2 === this.me!.id)!;
    this.myTeamName = this.me?.teamName;
    this.otherTeamName = this.dataStore.allUsers.find((u) => u.id === ( this.loggedInUserIsTeam1 ? this.enrichedMatchup.user1 : this.enrichedMatchup.user2))?.teamName;

    this.myTeam = this.loggedInUserIsTeam1 ? this.enrichedMatchup.team1?.active : this.enrichedMatchup.team2?.active;
    this.otherTeam = this.loggedInUserIsTeam1 ? this.enrichedMatchup.team2?.active : this.enrichedMatchup.team1?.active;
  }

  public get loggedInUserIsTeam1(): boolean {
    return this.enrichedMatchup.user1 !== this.me?.id;
  }

  public getTotal(team: Team | undefined): number {
    return team ? getTeamPointSum(team) : 0;
  }
}
