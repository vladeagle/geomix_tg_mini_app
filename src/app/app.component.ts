import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelegramService } from './services/telegram.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header>
      <a href="https://geomix.ru/">Go to Geomix main page</a>
      <a href="/">Home</a>
    </header>
    <router-outlet />
  `,
})
export class AppComponent {
  title = 'geomix_app';
  telegram = inject(TelegramService);

  constructor() {
    this.telegram.ready();
  }
}
