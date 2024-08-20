import { Component, inject, OnInit, signal } from '@angular/core';
import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonRow, IonText } from "@ionic/angular/standalone";
import {mailOutline, eyeOutline, eyeOffOutline} from 'ionicons/icons';
import {addIcons} from 'ionicons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [ IonContent, IonRow, IonIcon, IonInput, IonItem, IonButton, IonText, ReactiveFormsModule ],
  standalone: true
})
export class LoginPage implements OnInit {

  public router = inject(Router);
  inputType = signal('password');
  loginForm = new FormGroup({
    email: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
  });

  constructor() {
    addIcons({mailOutline, eyeOutline, eyeOffOutline});
  }

  ngOnInit() {}

  updatePasswordType() {
    this.inputType.update(value => value == 'password' ? 'text' : 'password');
  }

  login() {
    if(this.loginForm.valid) {
      this.router.navigate(['/tabs']);
    }
  }
}
