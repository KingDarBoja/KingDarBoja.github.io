import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kingdarboja-io';
  menuShow = false;

  toggleNavbar(): void {
    this.menuShow = !this.menuShow;
  }
}
