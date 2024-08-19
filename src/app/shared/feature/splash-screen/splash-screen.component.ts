import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

export enum SplashAnimationType {
  SlideLeft = "slide-left",
  SlideRight = "slide-right",
  FadeOut = "fade-out"
}

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: [ './splash-screen.component.scss' ],
  imports: [
    CommonModule,
    IonicModule
  ],
  standalone: true
})

export class SplashScreenComponent implements OnInit{

  showSplash = true;
  windowWidth: string = '';
  opacityChange: number = 1;
  splashTransition: string = '';

  @Input() animationDuration: number = 0.5;
  @Input() duration: number = 3;
  @Input() animationType: SplashAnimationType = SplashAnimationType.FadeOut;


  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle = "";
      switch (this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWidth = "-" + window.innerWidth + "px";
          transitionStyle = "left " + this.animationDuration + "s";
          break;
        case SplashAnimationType.SlideRight:
          this.windowWidth = window.innerWidth + "px";
          transitionStyle = "left " + this.animationDuration + "s";
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = "opacity " + this.animationDuration + "s";
          this.opacityChange = 0;
      }

      this.splashTransition = transitionStyle;

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, this.animationDuration * 1000);
    }, this.duration * 1000);
  }

}
