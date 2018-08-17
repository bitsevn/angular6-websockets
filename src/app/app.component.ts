import { Component, DoCheck } from '@angular/core';
import { Logger } from './shared/logger.service';

const logger = new Logger();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'app';

  ngDoCheck() {
    //logger.info(`AppComponent - ngDoCheck()`)
  }
}
