import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() productItem : any;
  @Output() childData = new EventEmitter();


  handleButton(){
    return this.childData.emit(this.productItem)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
