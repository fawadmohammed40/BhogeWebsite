(self["webpackChunkBhogeWeb"] = self["webpackChunkBhogeWeb"] || []).push([["src_app_auth_login_login_module_ts"],{

/***/ 4272:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 1506);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 8990:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 4272);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 1506);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 1506:
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 8182);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 1894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);








let LoginPage = class LoginPage {
    constructor(formBuilder, authService, router, alertController) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.alertController = alertController;
        this.showPassword = false;
        this.passwordToggleIcon = 'eye';
        this.regUser = false;
        this.doSomething = false;
        this.pageName = "Login";
    }
    ngOnInit() {
        this.regUser = false;
        this.doSomething = false;
        this.authService.checkToken();
        this.credentialsForm = this.formBuilder.group({
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[6-9]\d{9}$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
            cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(6)],],
        });
    }
    togglePassword() {
        this.showPassword = !this.showPassword;
        if (this.passwordToggleIcon == 'eye') {
            this.passwordToggleIcon = 'eye-off';
        }
        else {
            this.passwordToggleIcon = 'eye';
        }
    }
    doRefresh() {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            // event.target.complete();
        }, 2000);
    }
    registerPage() {
        this.pageName = "Register";
    }
    toLoginPage() {
        this.pageName = "Login";
    }
    toFPassPage() {
        this.router.navigate(['/forget-password']);
    }
    onSubmit() {
        if (this.buttonClicked == "login") {
            this.authService.login(this.credentialsForm.value).subscribe((res) => {
                this.regUser = false;
                this.doSomething = false;
                this.credentialsForm.reset();
            }, (error) => { console.log(" Error ", error.msg); });
        }
        if (this.buttonClicked == "register") {
            if (this.credentialsForm.controls['password'].value == this.credentialsForm.controls['cpassword'].value) {
                this.authService.register(this.credentialsForm.value).subscribe((success) => {
                    this.ngOnInit();
                    this.doRefresh();
                    this.router.navigate(["/login"]);
                }, (error) => { console.log(" Error ", error.msg); });
            }
            else {
                this.showAlert('Error', 'Passwords do not match');
            }
        }
        if (this.buttonClicked == "submit") {
            this.authService.regOTP(this.credentialsForm.controls['phone'].value).subscribe((res) => {
                this.data = res["otp"];
                if (this.data == 2) {
                    this.regUser = true;
                }
                this.doSomething = true;
                console.log(this.doSomething);
            }, (error) => { console.log(" Error ", error.msg); });
        }
    }
    showAlert(header, msg) {
        let alert = this.alertController.create({
            message: msg,
            header: header,
            buttons: ['OK'],
        });
        alert.then((alert) => alert.present());
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 1894:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".headerdiv {\n  padding: 20px 0px 0px 20px;\n}\n\n.loginheader {\n  padding-top: 50px;\n  padding-left: 20px;\n  font-size: large;\n  color: #30bb9e;\n  font-weight: bold;\n  font-size: 22px;\n}\n\n.logincard {\n  box-shadow: none;\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0o7O0FBQ0U7RUFFRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0U7RUFDQyxnQkFBQTtFQUNDLGdCQUFBO0FBQUoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmRpdntcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDBweCAyMHB4O1xyXG4gIH1cclxuICAubG9naW5oZWFkZXJcclxuICB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweCA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgY29sb3I6ICMzMGJiOWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmxvZ2luY2FyZHtcclxuICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6ICNmNmZhZjY7XHJcbiAgICBcclxuICB9Il19 */");

/***/ }),

/***/ 8182:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"headerdiv\">\n    <ion-label class=\"loginheader\"> {{pageName}} </ion-label>\n  </div>\n  <div class=\"ion-text-center\">\n    <img height=\"70%\" width=\"70%\" style=\"padding-top: 50px;\" src=\"../../../assets/authentication.svg\" alt=\"\">\n  </div>\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-card class=\"logincard\">\n      <ion-item *ngIf=\"doSomething==false\" lines=\"full\">\n        <ion-input type=\"text\" formControlName=\"phone\" placeholder=\"Enter Contact Number\"> </ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"regUser == false && doSomething==true\" lines=\"full\">\n        <ion-input type=\"text\" formControlName=\"otp\" placeholder=\"Enter OTP here\"> </ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"doSomething==true\" lines=\"full\">\n        <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Enter password\"> </ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"doSomething==true && regUser == false\" lines=\"full\">\n        <ion-input type=\"password\" formControlName=\"cpassword\" placeholder=\"Confirm Password\"> </ion-input>\n      </ion-item>\n    </ion-card>\n    <ion-row class=\"ion-margin\">\n      <ion-col class=\"ion-text-center\">\n        <ion-button *ngIf=\"doSomething==false\" [disabled]=\"!this.credentialsForm.controls['phone'].valid\"\n          (click)=\"buttonClicked = 'submit'\" type=\"submit\" color=\"danger\">Next</ion-button>\n        <ion-button *ngIf=\"doSomething==true && regUser == true\"\n          [disabled]=\"!this.credentialsForm.controls['password'].valid\" (click)=\"buttonClicked = 'login'\" type=\"submit\"\n          color=\"primary\">Login</ion-button>\n        <ion-button *ngIf=\"regUser == false && doSomething==true\" (click)=\"buttonClicked = 'register'\"\n          [disabled]=\"!this.credentialsForm.valid\" type=\"submit\" color=\"primary\">Register</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n  <div style=\"padding-top: 20px;\" class=\"ion-text-center\">\n    <ion-row>\n      <ion-col>\n        <ion-text style=\"color: #30bb9e;\" *ngIf=\"pageName=='Login'\" (click)=\"registerPage()\" color=\"danger\"> Click here\n          to Register </ion-text>\n        <ion-text style=\"color: #30bb9e;\" *ngIf=\"pageName=='Register'\" (click)=\"toLoginPage()\" color=\"danger\"> Click\n          here to Login </ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text (click)=\"toFPassPage()\" color=\"danger\"> Forget password? </ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts.js.map