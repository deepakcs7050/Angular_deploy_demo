import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-loan-type',
  templateUrl: './loan-type.component.html',
  styleUrls: ['./loan-type.component.scss']
})
export class LoanTypeComponent implements OnInit {

  data:any;
  constructor( private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.data= this.activatedRoute.snapshot.data
  }

}
