import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navigation', url: '/navigation', icon: 'compass' },
    { title: 'Navigation-Detail', url: '/navigation-detail', icon: 'navigate' },
    { title: 'Zahlen', url: '/zahlen', icon: 'number' },
    { title: 'String', url: '/string', icon: 'string' },
    { title: 'Objekte', url: '/objekte', icon: 'object' },
    { title: 'Array', url: '/array', icon: 'array' },

  ];
  constructor() {}
}
