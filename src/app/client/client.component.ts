import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  clientList = [
    { id: 101, firstName:'Deepak',lastName:'Prasad'},
    { id: 102, firstName:'Dilip',lastName:'kumar'},
    { id: 103, firstName:'Kishan',lastName:'kumar'},
    { id: 104, firstName:'Subansh',lastName:'Prasad'},
    { id: 105, firstName:'Sushila',lastName:'Devi'},
    { id: 106, firstName:'Khushbu',lastName:'kumari'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
