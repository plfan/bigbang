import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console',
  template: '<router-outlet></router-outlet>'
})
export class ConsoleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('log current env');
  }

}
