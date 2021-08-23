(self["webpackChunkBhogeWeb"] = self["webpackChunkBhogeWeb"] || []).push([["src_app_tlive_tlive_module_ts"],{

/***/ 7201:
/*!***********************************************!*\
  !*** ./src/app/tlive/tlive-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TlivePageRoutingModule": () => (/* binding */ TlivePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tlive_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tlive.page */ 9787);




const routes = [
    {
        path: '',
        component: _tlive_page__WEBPACK_IMPORTED_MODULE_0__.TlivePage
    }
];
let TlivePageRoutingModule = class TlivePageRoutingModule {
};
TlivePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TlivePageRoutingModule);



/***/ }),

/***/ 1846:
/*!***************************************!*\
  !*** ./src/app/tlive/tlive.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TlivePageModule": () => (/* binding */ TlivePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tlive_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tlive-routing.module */ 7201);
/* harmony import */ var _tlive_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tlive.page */ 9787);







let TlivePageModule = class TlivePageModule {
};
TlivePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tlive_routing_module__WEBPACK_IMPORTED_MODULE_0__.TlivePageRoutingModule
        ],
        declarations: [_tlive_page__WEBPACK_IMPORTED_MODULE_1__.TlivePage]
    })
], TlivePageModule);



/***/ }),

/***/ 9787:
/*!*************************************!*\
  !*** ./src/app/tlive/tlive.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TlivePage": () => (/* binding */ TlivePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tlive_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tlive.page.html */ 5517);
/* harmony import */ var _tlive_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tlive.page.scss */ 2605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TlivePage = class TlivePage {
    constructor() { }
    ngOnInit() {
    }
};
TlivePage.ctorParameters = () => [];
TlivePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tlive',
        template: _raw_loader_tlive_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tlive_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TlivePage);



/***/ }),

/***/ 2605:
/*!***************************************!*\
  !*** ./src/app/tlive/tlive.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bGl2ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5517:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tlive/tlive.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>tlive</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tlive_tlive_module_ts.js.map