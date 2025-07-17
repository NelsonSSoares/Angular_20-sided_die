import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inputs } from "./components/inputs/inputs";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('20-sided-dice');
}
