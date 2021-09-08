import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-routing-bar',
  templateUrl: './dropdown-routing-bar.component.html',
  styleUrls: ['./dropdown-routing-bar.component.css']
})
export class DropdownRoutingBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToRoute(route: string)
  {
    this.router.navigate([route]);
  }
}
