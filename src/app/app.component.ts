import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;

  private _isNavigating: boolean = false;

  constructor(private router: Router) {
    this.subscription = this.router.events.subscribe((event: Event) => {
      this.handleNavigationEvent(event);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public get isNavigating(): boolean {
    return this._isNavigating;
  }

  private handleNavigationEvent(event: Event): void {
    switch (true) {
      case event instanceof NavigationStart:
        this._isNavigating = true;
        break;
      case event instanceof NavigationEnd:
      case event instanceof NavigationCancel:
      case event instanceof NavigationError:
        this._isNavigating = false;
        break;
      default:
        break;
    }
  }
}
