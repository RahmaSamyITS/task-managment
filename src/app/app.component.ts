import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/navbar/navbar.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,SidebarComponent ,  MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-managment';
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;
  ;

  toggleSidebar() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
