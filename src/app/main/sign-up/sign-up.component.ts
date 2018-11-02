import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class SignUpComponent implements OnInit {

  isLinear = true;
  
  myForm: FormGroup;

  billingForm: FormGroup;


  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   * @param {FormBuilder} _formBuilder
   */

  showMessSucReg = false;

  data = {
      name: '',
      email: '',
      phone: '',
      password: '',
      billing: ''
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

      this.myForm = this._formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', Validators.required],
          name: ['', Validators.required],
          phone: ['', Validators.required]
      });

      this.billingForm = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        name: ['', Validators.required],
        phone: ['', Validators.required],
        billing: ['', Validators.required]
    });

  }


  errorMessage = false;
  errorMess = ""
  prefixKey;
  singIn() {
      if (this.myForm.valid) {
        // this.router.navigateByUrl('/');
      } else{
          this.errorMessage = true;
      }
  }

  goToRegister(){
      this.router.navigateByUrl('/register');
  }

  onAvatarChange(event) {
    console.log(event);
    console.log(event.target.files[0]);

    // this.userService.uploadMultipart(event.target.files[0]).subscribe(
    //   (url: string) => {
    //     this.question.Attachments.push(url);
    //   },
    //   err => console.log(err)
    // );
  }
}
