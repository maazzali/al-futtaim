import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public changedText: string;

  public onTextChange(event: string): void {
    this.changedText = event;
  }
}
