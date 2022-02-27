import { Component, OnInit } from '@angular/core';
import products from '../../assets/product.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-datails',
  templateUrl: './product-datails.component.html',
  styleUrls: ['./product-datails.component.css']
})
export class ProductDatailsComponent implements OnInit {
  producDatails : any;
  constructor(private activatedRout : ActivatedRoute) {
    const activId = this.activatedRout.snapshot.params['id'];
    this.producDatails = products.find(pro => pro.id == activId);
    console.log(this.producDatails);

   }

  ngOnInit(): void {
  }

}
