import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-detail',
  templateUrl: './navigation-detail.page.html',
  styleUrls: ['./navigation-detail.page.scss'],
})
export class NavigationDetailPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  navigateTo(link: string){
    this.router.navigate(['/' + link]);
  }
}
