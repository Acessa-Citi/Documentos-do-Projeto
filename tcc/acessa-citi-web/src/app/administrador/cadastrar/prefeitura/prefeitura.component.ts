import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { NgBrazilValidators, MASKS } from 'ng-brazil';
import { Location } from '@angular/common';

@Component({
  selector: 'app-prefeitura',
  templateUrl: './prefeitura.component.html',
  styleUrls: ['./prefeitura.component.scss']
})
export class PrefeituraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  compareObjects(o1: any, o2: any): boolean{
    return o1.id === o2.id;
  }

}
