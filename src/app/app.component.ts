import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SplashScreenComponent } from "./shared/feature/splash-screen/splash-screen.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [ IonApp, IonRouterOutlet, SplashScreenComponent ],
})
export class AppComponent {
  constructor() {}
}
