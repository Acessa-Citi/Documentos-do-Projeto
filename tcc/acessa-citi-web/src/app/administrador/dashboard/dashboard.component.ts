import { Component, OnInit } from '@angular/core';
import { Subscribable } from 'rxjs';

import { AuthService } from '../../core/auth/auth.service';
import { User } from '../../models/user.model';
import { MatDialog, DialogPosition } from '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
