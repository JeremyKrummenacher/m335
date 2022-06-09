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
    { title: 'Zahlen', url: '/zahlen', icon: 'apps' },
    { title: 'String', url: '/string', icon: 'beer' },
    { title: 'Objekte', url: '/objekte', icon: 'cube' },
    { title: 'Array', url: '/array', icon: 'albums' },
    { title: 'DataBinding', url: '/data-binding', icon: 'analytics' },
    { title: 'Rechner', url: '/rechner', icon: 'calculator' },
    { title: 'Alerts', url: '/alerts', icon: 'alert' },
    { title: 'Newsletter', url: '/newsletter', icon: 'letter' },


  ];
  constructor() {}
}
