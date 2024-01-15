import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

  constructor(public router: Router){}


  nav1() {   
    this.router.navigate(['page1']);
    
  }


  nav2() {   
    this.router.navigate(['page2']);
    
  }


  nav3() {   
    this.router.navigate(['page3']);
    
  } 
}
