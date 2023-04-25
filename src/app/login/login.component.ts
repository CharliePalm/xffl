import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { API } from '../utils/api/api.util';
import { AccountService } from '../utils/service/account.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  ngForm!: FormGroup;
  displayError: boolean = false;
  constructor(private router: Router, private accountService: AccountService) {}

  login() {
    // TODO: Implement login logic here
    this.accountService.login(this.ngForm.get('username')?.value, this.ngForm.get('password')?.value).pipe(
      map((result) => {
        if (result) {
          this.router.navigate(['/home']);
        } else {
          this.ngForm.get('username')?.reset();
          this.ngForm.get('password')?.reset();
          this.displayError = true;
        }
      }),
    ).subscribe();
  }

  ngOnInit(): void {
      this.ngForm = new FormBuilder().group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
  }
}
