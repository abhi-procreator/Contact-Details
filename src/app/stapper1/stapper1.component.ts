import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stapper1',
  templateUrl: './stapper1.component.html',
  styleUrls: ['./stapper1.component.css']
})
export class Stapper1Component implements OnInit {
  myArray = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'dan' },
    { id: 3, name: 'barb' },
  ];

  newArray = [
    { id: 3, name: 'barb' },
    { id: 4, name: 'xyz' },
  ];
  constructor() {}

  ngOnInit() {}

  push() {
    let res = [];
    res = this.newArray.filter((el) => {
     // console.log(el)
      return !this.myArray.find((element) => {
        console.log(element)
        return element.id === el.id;
      });
    });
    if (res.length > 0) {
      this.myArray = this.myArray.concat(res);
    }
    console.log(this.myArray);
  }

}  
