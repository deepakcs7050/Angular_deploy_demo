import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  color:any;
  size:any;
  priceTo:any;
  priceFrom;any;

 isDiarty =true;

  constructor( private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(data =>{
      console.log(data)
      this.color = data.color;
      this.size =data.size;
      this.priceFrom = data.priceFrom;
      this.priceTo = data.priceTo;
    })
  }

  ngOnInit(): void {
  }

}
