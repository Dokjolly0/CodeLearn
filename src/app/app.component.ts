import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CodeLearn';
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
