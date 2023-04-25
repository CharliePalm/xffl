import { Component, OnInit } from '@angular/core';
import { Player, Position } from '../utils/api/api.model';
import { Router } from '@angular/router';
import { DataStore } from '../utils/api/data.store';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];
  filteredPlayers: Player[] = this.players.slice(); // start with all players
  filters: (string | Position)[] = [
    Position.WR,
    Position.RB,
    Position.QB,
    Position.DST,
    Position.K,
    Position.TE,
    'Free Agent',
  ];
  form = new FormBuilder().group(this.createForm())

  constructor(private router: Router, private store: DataStore) {}
  ngOnInit(): void {
    this.players = this.filteredPlayers = this.store.allPlayers;
  }

  createForm() {
    const form: {[key: string]: any} = {};
    this.filters.forEach((f) => {
      form[f] = new FormControl(true);
    });
    form['Free Agent'] = new FormControl(false);
    console.log(form);
    return form;
  }

  onFilterChange(): void {
    console.log('test');
    // apply filters based on checkbox values
    const freeAgentFilter = (p: Player) => (this.form.get('Free Agent')?.value ? !p.owner : true);
    this.filteredPlayers = this.players.filter((p) => this.form.get(p.position)?.value && freeAgentFilter(p));
  }
}
