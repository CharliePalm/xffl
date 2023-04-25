import { Component, OnInit } from '@angular/core';
import { DataStore } from '../utils/api/data.store';
import { ActivatedRoute } from '@angular/router';
import { Roster, Team } from '../utils/api/api.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public userViewModel!: any[];
  public currentSelection!: string;
  public currentRoster!: Roster;
  public rosters: Map<string, Roster> = new Map<string, Roster>();
  constructor(private store: DataStore, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.userViewModel = this.store.allUsers.map((user) => {
      this.rosters.set(user.id, this.store.allRosters.find((r) => r.parentId === user.id)!);
      return {
        id: user.id,
        teamName: user.teamName,
        ownerName: user.firstName + ' ' + user.lastName,
      }
    });
    this.currentSelection = this.activatedRoute.snapshot.paramMap.get('selection')!
    this.setSelection(this.currentSelection);
  }

  setSelection(id: string) {
    this.currentRoster = this.rosters.get(id)!;
    this.currentSelection = id;
  }
}
