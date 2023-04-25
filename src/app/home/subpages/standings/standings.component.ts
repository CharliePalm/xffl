import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/utils/api/api.model';
import { DataStore } from 'src/app/utils/api/data.store';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss'],
})
export class StandingsComponent {
  public users: User[] = [];
  public currentWeek = this.dataStore.week;

  constructor(private dataStore: DataStore, private router: Router) {
    this.users = dataStore.allUsers;

    this.users.sort((a, b) => {
      if ((a.seasonWins ?? 0) < (b.seasonWins ?? 0)) return 1;
      else if ((a.seasonWins ?? 0) == (b.seasonWins ?? 0)) return (a.totalPoints ?? 0) < (b.totalPoints ?? 0) ? 1 : -1;
      else return -1;
    });
  }

  navigateToUserPage(user: User) {
    this.router.navigate(['/teams', {selection: user.id}]);
  }
}
