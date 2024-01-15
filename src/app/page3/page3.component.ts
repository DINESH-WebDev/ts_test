import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {

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
