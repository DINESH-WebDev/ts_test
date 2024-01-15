import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})


export class Page1Component {

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
