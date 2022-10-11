import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  donatedAmount = 0;
  constructor() { }
  increaseDonatedAmount(){
    this.donatedAmount += 10;
    console.log(this.donatedAmount)
  }

  ngOnInit(): void {
  
}
}
