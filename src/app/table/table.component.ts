import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
rows = [{'date': 28 , 'summ': 100 , 'income': 120 , 'vloj': 70 , 'writeOff': 10, 'sallary': 20 },
  {'date': 28 , 'summ': 100 , 'income': 120 , 'vloj': 70 , 'writeOff': 10, 'sallary': 20 },
  {'date': 28 , 'summ': 100 , 'income': 120 , 'vloj': 70 , 'writeOff': 10, 'sallary': 20 }]
  constructor() { }

  ngOnInit() {
  }

}
