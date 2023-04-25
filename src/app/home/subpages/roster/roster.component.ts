import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Player, Position, Roster } from 'src/app/utils/api/api.model';
import { DataStore } from 'src/app/utils/api/data.store';
import { PositionMap } from 'src/app/utils/helpers/helpers';
import { DataService } from 'src/app/utils/service/data.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

export const collapseUp = trigger('collapseUp', [
  state('open', style({
    height: '*',
    opacity: 1,
    overflow: 'hidden'
  })),
  state('closed', style({
    height: '0px',
    opacity: 0,
    overflow: 'hidden'
  })),
  transition('open => closed', [
    animate('0.3s ease-in-out')
  ]),
  transition('closed => open', [
    animate('0.3s ease-in-out')
  ])
]);

enum Selector {
  Bench,
  Roster,
}
@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements AfterViewInit {
  public selector = Selector;
  public selection: undefined | Selector;
  public selectedIndex: undefined | number;
  public tables!: HTMLElement[];

  constructor(private store: DataStore, service: DataService) { }
  ngAfterViewInit(): void {
    this.tables = [document.getElementById('roster')!, document.getElementById('bench')!];
  }

  public myTeam: Roster | undefined = this.store.myTeam;

  fill(selectedIndex: number, selection: Selector) {
    this.move(selectedIndex, selection);
  }

  move(newIndex: number, selection: Selector) {
    console.log(newIndex);
    console.log(selection);
    if (!this.myTeam?.active?.length || !this.myTeam?.bench?.length) return;
    if (this.selectedIndex !== undefined) {
      if (this.selection === Selector.Bench && selection === Selector.Roster) {
        // moving player from bench to roster
        [this.myTeam.active[newIndex], this.myTeam.bench[this.selectedIndex]] = [this.myTeam.bench[this.selectedIndex], this.myTeam.active[newIndex]];
      } else if (this.selection === Selector.Bench && selection === Selector.Bench) {
        // moving player from bench slot to another bench slot
        [this.myTeam.active[newIndex], this.myTeam.bench[this.selectedIndex]] = [this.myTeam.bench[this.selectedIndex], this.myTeam.active[newIndex]];
      } else if (this.selection === Selector.Roster && selection === Selector.Roster) {
        // moving player from roster slot to another roster slot (wr1 -> wr2)
        [this.myTeam.active[newIndex], this.myTeam.active[this.selectedIndex]] = [this.myTeam.active[this.selectedIndex], this.myTeam.active[newIndex]];
      } else if (this.selection === Selector.Roster && selection === Selector.Bench) {
        // moving player from roster slot to bench
        [this.myTeam.active[this.selectedIndex], this.myTeam.bench[newIndex]] = [this.myTeam.bench[newIndex], this.myTeam.active[this.selectedIndex]];
      }
      this.selectedIndex = this.selection = undefined;
    } else {
      this.selectedIndex = newIndex; this.selection = selection;
    }
  }

  drop(selectedIndex: number, selection: Selector) {

  }

  shouldDisplayPlayer(player: Player | undefined, selection: Selector, mySelectedIndex: number) {
    return this.selectedIndex !== undefined ?
      // move to same position
      // move bench slot to empty active slot
      (player?.position === PositionMap[this.selectedIndex][1]) ||
      // display slot being filled
      (mySelectedIndex === this.selectedIndex && this.selection === selection) ||
      // fill empty bench slot with any player
      ((this.selection === Selector.Bench) && this.myTeam?.bench?.[this.selectedIndex] === undefined && player !== undefined) ||
      // move to empty bench spot
      (this.selection === Selector.Roster && selection === Selector.Bench && !this.myTeam?.bench?.[mySelectedIndex]):
      true;
  }

  shouldDisplayBench(): boolean {
    return this.myTeam?.bench?.some((p, i) => this.shouldDisplayPlayer(p, Selector.Bench, i)) || false;
  }

  isPicking(): boolean {
    return this.selectedIndex !== undefined;
  }

  cancel() {
    this.selectedIndex = this.selection = undefined;
  }

  resizeTables() {
  }
}
