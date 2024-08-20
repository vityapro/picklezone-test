import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEyeToggle]'
})
export class TogglePasswordDirective implements OnInit {

  eyeNodeClass = 'eye-node';

  constructor(private el: ElementRef<HTMLBaseElement>,
              private renderer: Renderer2) { }

  ngOnInit(): void {
    if (!this.getEyeNode()) {
      this.appendEye();
      const eye = this.getEyeNode() as Element;
      eye.addEventListener('click', () => {
        if (this.el.nativeElement.getAttribute('type') === 'password') {
          this.el.nativeElement.setAttribute('type', 'text');
          this.renderer.setAttribute(eye, 'name', 'eye-off-outline');
        } else {
          this.el.nativeElement.setAttribute('type', 'password');
          this.renderer.setAttribute(eye, 'name', 'eye-outline');
        }
      });
    }
  }

  initEyeNode(): any {
    const eyeNode = this.renderer.createElement('ion-icon');
    this.renderer.setStyle(eyeNode, 'right', '0.4rem');
    this.renderer.setStyle(eyeNode, 'width', '1.7rem');
    this.renderer.setStyle(eyeNode, 'height', '1.7rem');
    this.renderer.setStyle(eyeNode, 'z-index', '10');
    this.renderer.setStyle(eyeNode, 'position', 'absolute');
    this.renderer.setStyle(eyeNode, 'pointer-events', 'all');
    this.renderer.addClass(eyeNode, this.eyeNodeClass);
    this.renderer.setAttribute(eyeNode, 'color', 'medium');
    if (this.el.nativeElement.getAttribute('type') === 'password') {
      this.renderer.setAttribute(eyeNode, 'name', 'eye-outline');
    } else {
      this.renderer.setAttribute(eyeNode, 'name', 'eye-off-outline');
    }

    return eyeNode;
  }

  appendEye(): void {
    const divNode = this.initEyeNode();
    this.renderer.appendChild(this.el.nativeElement, divNode);
  }

  getEyeNode(): Element | null{
    const childEls = this.el.nativeElement.getElementsByClassName(this.eyeNodeClass);
    if (childEls.length) {
      return childEls[0];
    } else {
      return null;
    }
  }

}
