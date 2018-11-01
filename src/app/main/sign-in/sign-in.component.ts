import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';


@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   * @param {FormBuilder} _formBuilder
   */

  showMessSucReg = false;

  data = {
      email: '',
      password: '',
  }

  constructor(
      private _fuseConfigService: FuseConfigService,
      private _formBuilder: FormBuilder,
      private router: Router,
  ) {
      // Configure the layout
      this._fuseConfigService.config = {
          layout: {
              navbar: {
                  hidden: true
              },
              toolbar: {
                  hidden: true
              },
              footer: {
                  hidden: true
              },
              sidepanel: {
                  hidden: true
              }
          }
      };


  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */

  linkForgotPass(){
      this.router.navigateByUrl('/');
  }

  ngOnInit(): void {

      this.loginForm = this._formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required]
      });
  }


  errorMessage = false;
  errorMess = ""
  prefixKey;
  singIn() {
      if (this.loginForm.valid) {
        // this.router.navigateByUrl('/');
      } else{
          this.errorMessage = true;
      }
  }

  goToRegister(){
      this.router.navigateByUrl('/register');
  }
}
