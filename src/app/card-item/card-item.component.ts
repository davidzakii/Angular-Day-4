import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interface/product';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() productItem : Product = {
    "id": 0,
    "title": "",
    "price": 0,
    "description": "",
    "category": "",
    "image": "",
    "rating": {
      "rate": 0,
      "count": 0
    }
  };
  @Output() childData = new EventEmitter();

  constructor(private router:Router) { }

  handleButton(){
    this.router.navigate(['/product-datails',this.productItem.id])
  }

  ngOnInit(): void {
  }

}
