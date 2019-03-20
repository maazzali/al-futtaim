import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public searchText: string;
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  public onChange(event: string): void {
    this.searchTextChange.emit(event);
  }
}
