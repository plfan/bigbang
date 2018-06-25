import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';


  get theme(){
    return sessionStorage.getItem('theme')?sessionStorage.getItem('theme'):'theme-default';
  }
}
