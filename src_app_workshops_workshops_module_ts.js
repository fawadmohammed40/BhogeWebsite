(self["webpackChunkBhogeWeb"] = self["webpackChunkBhogeWeb"] || []).push([["src_app_workshops_workshops_module_ts"],{

/***/ 8068:
/*!*******************************************************!*\
  !*** ./src/app/workshops/workshops-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkshopsPageRoutingModule": () => (/* binding */ WorkshopsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _workshops_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workshops.page */ 792);




const routes = [
    {
        path: '',
        component: _workshops_page__WEBPACK_IMPORTED_MODULE_0__.WorkshopsPage
    }
];
let WorkshopsPageRoutingModule = class WorkshopsPageRoutingModule {
};
WorkshopsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkshopsPageRoutingModule);



/***/ }),

/***/ 113:
/*!***********************************************!*\
  !*** ./src/app/workshops/workshops.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkshopsPageModule": () => (/* binding */ WorkshopsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _workshops_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workshops-routing.module */ 8068);
/* harmony import */ var _workshops_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workshops.page */ 792);







let WorkshopsPageModule = class WorkshopsPageModule {
};
WorkshopsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _workshops_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkshopsPageRoutingModule
        ],
        declarations: [_workshops_page__WEBPACK_IMPORTED_MODULE_1__.WorkshopsPage]
    })
], WorkshopsPageModule);



/***/ }),

/***/ 792:
/*!*********************************************!*\
  !*** ./src/app/workshops/workshops.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkshopsPage": () => (/* binding */ WorkshopsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_workshops_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./workshops.page.html */ 6931);
/* harmony import */ var _workshops_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workshops.page.scss */ 4820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let WorkshopsPage = class WorkshopsPage {
    constructor() { }
    ngOnInit() {
    }
};
WorkshopsPage.ctorParameters = () => [];
WorkshopsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-workshops',
        template: _raw_loader_workshops_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_workshops_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkshopsPage);



/***/ }),

/***/ 4820:
/*!***********************************************!*\
  !*** ./src/app/workshops/workshops.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrc2hvcHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 6931:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workshops/workshops.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>workshops</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_workshops_workshops_module_ts.js.map