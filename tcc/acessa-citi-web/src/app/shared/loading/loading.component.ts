import { Component, OnInit, Input } from '@angular/core';

import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input('uid') uid: string;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
  }

  isLoading(): boolean{
    return this.loadingService.isLoading(this.uid);
  }
}
