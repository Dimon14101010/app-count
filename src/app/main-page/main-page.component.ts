import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  date = new Date ().toLocaleDateString();
  incomeBlocks: any = [''];
  writeOffBlocks = [''];
  investBlocks = [''];
  sellers = ['Саша', 'Света', 'Юля'];
  dataTotal = [];
  constructor (private el: ElementRef){}

  addData (sumDay, sumNight, sellerDay, sellerNight, incomeTotal) {
    this.dataTotal.push({'summ': +sumDay + +sumNight},
                        {'sellerDay': sellerDay},
                        {'sellerNight': sellerNight},
                        {'incomeTotal': incomeTotal},
                        );
    console.log(this.dataTotal);
  }
  addIncomes (incomes, index , description){
    this.incomeBlocks.push({incomes , description});
    console.log('itog', this.incomeBlocks);
  }

}
