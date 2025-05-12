import { Component } from '@angular/core';
import { MatList, MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {  Output, EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-navbar',
  imports: [ MatToolbarModule,MatListModule,MatIcon],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() toggle = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggle.emit();
  }
}
