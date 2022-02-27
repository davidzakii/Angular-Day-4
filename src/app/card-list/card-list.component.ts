import { Component, OnInit } from '@angular/core';
import products from '../../assets/product.json'
import { Product } from '../interface/product';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  productDatails : Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

  handleData(){

  }

}
