(self["webpackChunkBhogeWeb"] = self["webpackChunkBhogeWeb"] || []).push([["src_app_auth_forget-password_forget-password_module_ts"],{

/***/ 1474:
/*!************************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordPageRoutingModule": () => (/* binding */ ForgetPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password.page */ 380);




const routes = [
    {
        path: '',
        component: _forget_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordPage
    }
];
let ForgetPasswordPageRoutingModule = class ForgetPasswordPageRoutingModule {
};
ForgetPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgetPasswordPageRoutingModule);



/***/ }),

/***/ 1111:
/*!****************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordPageModule": () => (/* binding */ ForgetPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password-routing.module */ 1474);
/* harmony import */ var _forget_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-password.page */ 380);







let ForgetPasswordPageModule = class ForgetPasswordPageModule {
};
ForgetPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordPageRoutingModule
        ],
        declarations: [_forget_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgetPasswordPage]
    })
], ForgetPasswordPageModule);



/***/ }),

/***/ 380:
/*!**************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordPage": () => (/* binding */ ForgetPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_forget_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forget-password.page.html */ 159);
/* harmony import */ var _forget_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-password.page.scss */ 9518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);








let ForgetPasswordPage = class ForgetPasswordPage {
    constructor(formBuilder, authService, router, alertController) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.alertController = alertController;
        this.buttonClicked = null;
        this.phonevalid = false;
        this.name = "Siddhant";
        this.doSomething = false;
    }
    ngOnInit() {
        this.credentialsForm = this.formBuilder.group({
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^[6-9]\d{9}$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
            cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
            otp: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(6)],
            ],
        });
    }
    onSubmit() {
        if (this.buttonClicked == 'sendOtp') {
            this.authService
                .forgetPassOTP(this.credentialsForm.controls['phone'].value, this.name)
                .subscribe((res) => {
                this.data = res['otp'];
                if (this.data == 1) {
                    this.phonevalid = true;
                    this.doSomething = true;
                }
            }, (error) => {
                console.log(' Error ', error.msg);
            });
        }
        if (this.buttonClicked == 'reset') {
            if (this.credentialsForm.controls['password'].value == this.credentialsForm.controls['cpassword'].value) {
                this.authService.forgetPassword(this.credentialsForm.controls['phone'].value, this.credentialsForm.value).subscribe((res) => {
                    this.router.navigate(['/login']);
                });
            }
            else {
                this.showAlert('Error', 'Passwords do not match');
            }
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
ForgetPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
ForgetPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forget-password',
        template: _raw_loader_forget_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forget_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgetPasswordPage);



/***/ }),

/***/ 9518:
/*!****************************************************************!*\
  !*** ./src/app/auth/forget-password/forget-password.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 159:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forget-password/forget-password.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Forget Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"credentialsForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-card style=\"box-shadow: none; padding-top: 30px;\">\n      <ion-item *ngIf=\"doSomething==false\" lines=\"full\">\n        <ion-input type=\"text\" formControlName=\"phone\" placeholder=\"Enter Contact Number\"> </ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"doSomething==true\" lines=\"full\">\n        <ion-input type=\"text\" formControlName=\"otp\" placeholder=\"Enter OTP here\"> </ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"doSomething==true\"  lines=\"full\">\n        <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Enter password\"> </ion-input>\n      </ion-item>\n      <ion-item *ngIf=\"doSomething==true\"  lines=\"full\">\n        <ion-input type=\"password\" formControlName=\"cpassword\" placeholder=\"Enter password\"> </ion-input>\n      </ion-item>\n    </ion-card>\n    <ion-row class=\"ion-margin\">\n      <ion-col class=\"ion-text-center\">\n        <ion-button *ngIf=\"doSomething==false\" [disabled]=\"!this.credentialsForm.controls['phone'].valid\" (click)=\"buttonClicked = 'sendOtp'\" type=\"submit\" color=\"danger\">Next</ion-button>\n        <ion-button *ngIf=\"doSomething==true\" [disabled]=\"!this.credentialsForm.valid\" (click)=\"buttonClicked = 'reset'\" type=\"submit\" color=\"danger\">Change Password</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_forget-password_forget-password_module_ts.js.map