import { Component, OnInit, ViewChild } from '@angular/core';
import { API } from '../utils/api/api.util';
import { DataStore } from '../utils/api/data.store';
import { DataService } from '../utils/service/data.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
export enum Selection {
  Roster,
  Matchup,
  Standings,
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentSection = Selection.Matchup;
  options = Selection;
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  constructor(private store: DataStore, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchAll().subscribe();
  }

  showRoster() {
    this.currentSection = Selection.Roster;
  }

  showMatchup() {
    this.currentSection = Selection.Matchup;
  }

  showStandings() {
    this.currentSection = Selection.Standings;
  }
}
