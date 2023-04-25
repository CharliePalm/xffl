import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/utils/service/account.service';
import { User } from '../utils/api/api.model';
enum Option {
  Logout = 'logout',
  Home = 'home',
  Teams = 'teams',
  Players = 'players',
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public expanded = false;
  public options = Option;
  public selected = Option.Home;
  public user!: User | null;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.accountService.userSubject.subscribe((u) => {
      this.user = u;
    })
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      console.log(url);
      this.selected = url[0].path as Option;
    });
  }

  logout(): void {
    this.accountService.logout();
    this.router.navigate(['/login']);
    this.selected = Option.Logout;
  }

  players(): void {
    this.router.navigate(['/players']);
    this.selected = Option.Players;
  }

  home(): void {
    this.router.navigate(['/home']);
    this.selected = Option.Home;
  }

  teams() {
    this.router.navigate(['/teams', {selection: this.user?.id}]);
    this.selected = Option.Teams;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
