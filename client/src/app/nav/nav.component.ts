import { AccountService } from '../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}

  login(): void {
    this.accountService.login(this.model).subscribe((response: any) => {
      this.router.navigateByUrl('/members');
    }, (error: any) => {
      console.log(error);
      this.toastr.error(error.error);
    });
  }

  logout(): any {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
