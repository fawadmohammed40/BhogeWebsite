(self["webpackChunkBhogeWeb"] = self["webpackChunkBhogeWeb"] || []).push([["default-src_app_services_auth_service_ts"],{

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 8605);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8939);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);











const TOKEN_KEY = 'access_token';
let AuthService = class AuthService {
    constructor(http, helper, toastController, storage, plt, alertController, router, loadingController) {
        this.http = http;
        this.helper = helper;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.alertController = alertController;
        this.router = router;
        this.loadingController = loadingController;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
        this.user = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        // this.plt.ready().then(() => {
        //   this.checkToken();
        // });
    }
    checkToken() {
        this.storage.get(TOKEN_KEY).then((token) => {
            if (token) {
                this.storage.get('userDetails').then((ud) => {
                    this.userDetails = ud;
                    if (ud == '0') {
                        let decoded = this.helper.decodeToken(token);
                        let isExpired = this.helper.isTokenExpired(token);
                        if (!isExpired) {
                            this.user = decoded;
                            this.token = token;
                            this.storage.get('userid').then((userid) => {
                                this.userid = userid;
                            });
                            this.authenticationState.next(true);
                            this.authenticationState.subscribe((state) => {
                                if (state) {
                                    this.router.navigate(['profile']);
                                }
                            });
                        }
                        else {
                            this.logout();
                        }
                    }
                    else {
                        let decoded = this.helper.decodeToken(token);
                        let isExpired = this.helper.isTokenExpired(token);
                        if (!isExpired) {
                            this.user = decoded;
                            this.token = token;
                            this.storage.get('userid').then((userid) => {
                                this.userid = userid;
                            });
                            this.authenticationState.next(true);
                            this.authenticationState.subscribe((state) => {
                                if (state) {
                                    this.router.navigate(['home']);
                                }
                            });
                        }
                        else {
                            this.logout();
                        }
                    }
                });
            }
            else {
                this.storage.remove(this.tokenKey);
                this.authenticationState.next(false);
                this.router.navigate(['login']);
                // this.logout();
            }
        });
    }
    regOTP(phone) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        header = header.append('Content-Type', 'application/json');
        return this.http
            .get(`${this.url}/regotp/` + phone, { headers: header })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            let status = e.status;
            if (status === 404) {
                this.showAlert('Error', 'Try after sometime!');
            }
            throw new Error(e);
        }));
    }
    login(credentials) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        header = header.append('Content-Type', 'application/json');
        return this.http
            .post(`${this.url}/users/login`, credentials, { headers: header })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => {
            let toast = this.toastController.create({
                message: 'Login Successfull!',
                duration: 2000,
            });
            toast.then((toast) => toast.present());
            this.token = res['token'];
            this.storage.set(TOKEN_KEY, this.token);
            this.user = this.helper.decodeToken(res['token']);
            this.userDetails = res['details'];
            this.storage.set('userDetails', this.userDetails);
            this.userid = res['id'];
            this.userType = res['type'];
            this.userSubId = res['subId'];
            this.storage.set('userSub', this.userSubId);
            this.storage.set('type', this.userType);
            this.storage.set('userid', this.userid);
            this.authenticationState.next(true);
            this.authenticationState.subscribe((state) => {
                if (state) {
                    this.router.navigate(['home']);
                }
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            console.log(e.error);
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getUserDetails() {
        return this.http.get(`${this.url}/users/` + this.userid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => { }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    logout() {
        this.storage.remove(TOKEN_KEY).then(() => {
            this.storage.remove(this.tokenKey);
            this.storage.clear();
            this.authenticationState.next(false);
            this.router.navigate(['login']);
        });
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    showAlert(header, msg) {
        let alert = this.alertController.create({
            message: msg,
            header: header,
            buttons: ['OK'],
        });
        alert.then((alert) => alert.present());
    }
    register(credentials) {
        return this.http.post(`${this.url}/users`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => {
            let toast = this.toastController.create({
                message: 'Registration Successfull.',
                duration: 10000,
            });
            toast.then((toast) => toast.present());
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getLiveSessions() {
        return this.http.get(`${this.url}/meetings/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => { }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getZoomCred() {
        return this.http.get(`${this.url}/meetings/zoomCredentials`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => { }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    createLiveSessions(credentials) {
        this.presentLoading();
        return this.http.post(`${this.url}/meetings/`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => {
            let toast = this.toastController.create({
                message: 'Meeting created successfully.',
                duration: 10000,
            });
            toast.then((toast) => toast.present());
            this.router.navigate(['/home']);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loading.dismiss();
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    // update profile details
    updateProfile(credentials) {
        return this.http.post(`${this.url}/users/updateDetails/` + this.userid, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => {
            this.userDetails = '1';
            this.storage.set('userDetails', this.userDetails);
            this.checkToken();
            let toast = this.toastController.create({
                message: 'User Profile updated successfull',
                duration: 2000,
            });
            toast.then((toast) => toast.present());
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    // Activate subscription
    activatenewSub(credentials) {
        return this.http.post(`${this.url}/subscription/newSub/` + this.userid, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => {
            let toast = this.toastController.create({
                message: 'Subscription Activated successfully',
                duration: 2000,
            });
            this.storage.set('userSub', '2');
            toast.then((toast) => toast.present());
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    // Forget Password Otp method
    forgetPassOTP(phone, credentials) {
        return this.http
            .post(`${this.url}/users/forgotPassOtp/` + phone, credentials)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => {
            let toast = this.toastController.create({
                message: 'Otp Sent successfully.',
                duration: 10000,
            });
            toast.then((toast) => toast.present());
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    // Forget Password Method
    forgetPassword(phone, credentials) {
        return this.http
            .post(`${this.url}/users/resetPass/` + phone, credentials)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((res) => {
            let toast = this.toastController.create({
                message: 'Password reset successfully.',
                duration: 10000,
            });
            toast.then((toast) => toast.present());
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    // Present loading
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Getting scheduled meetings',
            });
            yield this.loading.present();
        });
    }
    // Get All Website Data
    getAnnouncements() {
        return this.http.get(`${this.url}/webdata/announcements/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getAdvertisements() {
        return this.http.get(`${this.url}/webdata/webadvertisements/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getSyllabus() {
        return this.http.get(`${this.url}/webdata/syllabus/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getOldQuestionPapers() {
        return this.http.get(`${this.url}/webdata/oldquestionpapers/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getBanners() {
        return this.http.get(`${this.url}/webdata/banners/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getDownloadMaterial() {
        return this.http.get(`${this.url}/webdata/downloadmaterial/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getFaculties() {
        return this.http.get(`${this.url}/webdata/faculty/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getTestimony() {
        return this.http.get(`${this.url}/webdata/testimony/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getAboutUs() {
        return this.http.get(`${this.url}/webdata/aboutus/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getSubscription() {
        return this.http.get(`${this.url}/webdata/subscription/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getCourses() {
        return this.http.get(`${this.url}/webdata/getCourse/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
    getSubjectTopic(id) {
        return this.http.get(`${this.url}/webdata/getTopic/` + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((e) => {
            this.showAlert('Error', e.error.message);
            throw new Error(e);
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__.JwtHelperService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root',
    })
], AuthService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_auth_service_ts.js.map