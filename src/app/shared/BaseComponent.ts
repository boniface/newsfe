import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

// TODO: Add Angular decorator.
@Component({
  selector: 'app-base',
  template: `
    <div>
      base works!!
    </div>
  `
})
export class BaseComponent implements OnDestroy {
  destroyed = new Subject();

  constructor() {
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
