import { AccountService } from './../_services/account.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register(): any {
    this.accountService.register(this.model).subscribe((response: any) => {
      console.log(response);
      this.cancel();
    }, (error: any) => {
      console.log(error);
    });
  }

  cancel(): any {
    this.cancelRegister.emit(false);
  }
}
