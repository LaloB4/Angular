webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pendings_pendings_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finished_finished_component__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__pendings_pendings_component__["a" /* PendingsComponent */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__finished_finished_component__["a" /* FinishedComponent */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/pages/tabs/tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Pendings" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Finished" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_whish_list_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_add_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details_component__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendingsComponent = (function () {
    function PendingsComponent(wLService, navCtrl) {
        this.wLService = wLService;
        this.navCtrl = navCtrl;
    }
    PendingsComponent.prototype.ngOnInit = function () { };
    PendingsComponent.prototype.showAddListView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_add_component__["a" /* AddComponent */]);
    };
    PendingsComponent.prototype.showListDetails = function (list, i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details_component__["a" /* DetailsComponent */], { list: list, i: i });
    };
    PendingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pendings',template:/*ion-inline-start:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/pages/pendings/pendings.component.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Pending List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid class="no-lists" *ngIf="(wLService.listItem | filter).length === 0">\n    <ion-row>\n      <ion-col>\n        <ion-icon class="big-icon" ios="ios-sad" md="md-sad"></ion-icon>\n        <p>\n          Nothing to show!\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let list of wLService.listItem | filter; let i = index;">\n\n    <ion-item color="primary" (click) = "showListDetails(list, i)">\n      <h2>{{list.name}}</h2>\n      <ion-note item-right>\n        {{list.items.length}} items\n      </ion-note>\n    </ion-item>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of list.items | slice:0:2" (click) = "showListDetails(list, i)">\n\n        <ion-icon *ngIf="!item.finished" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n        <ion-icon *ngIf="item.finished"ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n        <span [class.line-over-text] = "item.finished">{{item.name}}</span>\n\n      </ion-item>\n\n      <ion-item class="text-center" *ngIf="list.items.length > 2">\n        <ion-icon color="dark" ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n      </ion-item>\n\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="dark" (click)="showAddListView()">\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </button>\n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/pages/pendings/pendings.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_whish_list_service__["a" /* WishListService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], PendingsComponent);
    return PendingsComponent;
}());

//# sourceMappingURL=pendings.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_classes__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_whish_list_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = (function () {
    function AddComponent(wListService, alertCtrl, navCtrl) {
        this.wListService = wListService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.listName = "";
        this.listItemName = "";
        this.items = [];
    }
    AddComponent.prototype.ngOnInit = function () { };
    AddComponent.prototype.addMethod = function () {
        if (this.listItemName.length == 0) {
            return;
        }
        var item = new __WEBPACK_IMPORTED_MODULE_1__app_classes__["b" /* ListItem */]();
        item.name = this.listItemName;
        item.finished = false;
        this.items.push(item);
        this.listItemName = "";
    };
    AddComponent.prototype.deleteMethod = function (itemIndex) {
        this.items.splice(itemIndex, 1);
    };
    AddComponent.prototype.saveList = function () {
        if (this.listName.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'List name is required!',
                subTitle: 'List name must be defined in order to create it, please set one',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        var list = new __WEBPACK_IMPORTED_MODULE_1__app_classes__["a" /* List */](this.listName);
        list.items = this.items;
        this.wListService.addList(list);
        this.navCtrl.pop();
    };
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add',template:/*ion-inline-start:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/pages/add/add.component.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>{{listName | placeholder:\'New List\'}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Add new list</h1>\n\n  <ion-card>\n    <ion-card-header>\n\n      <ion-item>\n        <ion-label floating>List Name</ion-label>\n        <ion-input type="text" [(ngModel)]="listName" name="listName"></ion-input>\n      </ion-item>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-item>\n        <ion-label floating>Item</ion-label>\n        <ion-input type="text" [(ngModel)]="listItemName" name="listItemName" (keydown.enter) = "addMethod()"></ion-input>\n      </ion-item>\n\n      <button ion-button class="button-block" (click) = "addMethod()">\n          Add item\n      </button>\n\n    </ion-card-content>\n\n    <!--Items from list-->\n    <ion-card *ngIf="items.length > 0">\n\n      <ion-card-header>\n        <h3>Added items</h3>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-list>\n\n          <ion-item *ngFor="let item of items; let i = index">\n\n            <button ion-button color="dark" clear>\n              {{item.name}}\n            </button>\n\n            <button ion-button outline item-right color="danger" (click) = "deleteMethod(i)">\n              <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n              Delete item\n            </button>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <button ion-button icon-left class="button-block" (click) = "saveList()">\n      <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n      Add list\n    </button>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/pages/add/add.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_services_whish_list_service__["a" /* WishListService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
    ], AddComponent);
    return AddComponent;
}());

//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_whish_list_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsComponent = (function () {
    function DetailsComponent(navCtrl, navParams, wLService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wLService = wLService;
        this.alertCtrl = alertCtrl;
        this.indexItem = navParams.get("i");
        this.list = navParams.get("list");
    }
    DetailsComponent.prototype.ngOnInit = function () { };
    DetailsComponent.prototype.changeStatus = function (listItem) {
        listItem.finished = !listItem.finished;
        var allItemsFinished = true;
        for (var _i = 0, _a = this.list.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.finished) {
                allItemsFinished = false;
            }
        }
        this.list.finished = allItemsFinished;
        this.wLService.updateData();
    };
    DetailsComponent.prototype.deleteList = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete list?',
            message: 'Do you really want to delete this list? List will be deleted permanently.',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        console.log('Agree clicked');
                        //Method from Service to delete the task by index
                        _this.wLService.deleteListById(_this.indexItem);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-detail',template:/*ion-inline-start:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/pages/details/details.component.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>{{list.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n      <ion-item>\n        <ion-label floating>List Name</ion-label>\n        <ion-input type="text" [(ngModel)]="list.name"></ion-input>\n      </ion-item>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n\n        <ion-item *ngFor="let item of list.items; let i = index" (click) = "changeStatus(item)">\n\n          <ion-icon item-left *ngIf="!item.finished" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n          <ion-icon item-left *ngIf="item.finished"ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n          <span [class.line-over-text] = "item.finished">{{item.name}}</span>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n</ion-card>\n\n<button ion-button color="danger" class="button-block" (click) = "deleteList()">\n  Delete\n</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/pages/details/details.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_services_whish_list_service__["a" /* WishListService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetailsComponent);
    return DetailsComponent;
}());

//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_whish_list_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_add_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details_component__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinishedComponent = (function () {
    function FinishedComponent(wLService, navCtrl) {
        this.wLService = wLService;
        this.navCtrl = navCtrl;
    }
    FinishedComponent.prototype.ngOnInit = function () { };
    FinishedComponent.prototype.showAddListView = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_add_component__["a" /* AddComponent */]);
    };
    FinishedComponent.prototype.showListDetails = function (list, i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__details_details_component__["a" /* DetailsComponent */], { list: list, i: i });
    };
    FinishedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-finished',template:/*ion-inline-start:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/pages/finished/finished.component.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Finished Lists</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid class="no-lists" *ngIf="(wLService.listItem | filter:true).length === 0">\n    <ion-row>\n      <ion-col>\n        <ion-icon class="big-icon" ios="ios-sad" md="md-sad"></ion-icon>\n        <p>\n          Nothing to show!\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let list of wLService.listItem | filter:true; let i = index;">\n\n    <ion-item color="primary" (click) = "showListDetails(list, i)">\n      <h2>{{list.name}}</h2>\n      <ion-note item-right>\n        {{list.items.length}} items\n      </ion-note>\n    </ion-item>\n\n    <ion-list>\n\n      <ion-item *ngFor="let item of list.items | slice:0:2" (click) = "showListDetails(list, i)">\n\n        <ion-icon *ngIf="!item.finished" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n        <ion-icon *ngIf="item.finished"ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n        <span [class.line-over-text] = "item.finished">{{item.name}}</span>\n\n      </ion-item>\n\n      <ion-item class="text-center" *ngIf="list.items.length > 2">\n        <ion-icon color="dark" ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n      </ion-item>\n\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="dark" (click)="showAddListView()">\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </button>\n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/pages/finished/finished.component.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_whish_list_service__["a" /* WishListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_services_whish_list_service__["a" /* WishListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _b || Object])
    ], FinishedComponent);
    return FinishedComponent;
    var _a, _b;
}());

//# sourceMappingURL=finished.component.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pendings_pendings_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_finished_finished_component__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_add_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_details_details_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_whish_list_service__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_placeholder_pipe__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_filter_pipe__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//Service

//Pipes


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pendings_pendings_component__["a" /* PendingsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_finished_finished_component__["a" /* FinishedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_placeholder_pipe__["a" /* PlaceHolderPipe */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pages_details_details_component__["a" /* DetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pendings_pendings_component__["a" /* PendingsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_finished_finished_component__["a" /* FinishedComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_details_details_component__["a" /* DetailsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_whish_list_service__["a" /* WishListService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/eduardo.barrera/Documents/Coding/Angular JS/Angular/5. WishList - ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__(277);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_item__ = __webpack_require__(278);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__list_item__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
var List = (function () {
    function List(name) {
        this.name = name;
        this.finished = false;
    }
    return List;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItem; });
var ListItem = (function () {
    function ListItem() {
    }
    return ListItem;
}());

//# sourceMappingURL=list-item.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceHolderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaceHolderPipe = (function () {
    function PlaceHolderPipe() {
    }
    PlaceHolderPipe.prototype.transform = function (value, defaultName) {
        return (value) ? value : defaultName;
    };
    PlaceHolderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'placeholder'
        })
    ], PlaceHolderPipe);
    return PlaceHolderPipe;
}());

//# sourceMappingURL=placeholder.pipe.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (lists, state) {
        if (state === void 0) { state = false; }
        var listsFiltered = [];
        for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
            var list = lists_1[_i];
            if (list.finished == state) {
                listsFiltered.push(list);
            }
        }
        return listsFiltered;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WishListService = (function () {
    function WishListService() {
        this.listItem = [];
        /*
        let l1 = new List('Supermarket');
        let l2 = new List('Courses to take');
        let l3 = new List('Clothes');
    
        this.listItem.push(l1);
        this.listItem.push(l2);
        this.listItem.push(l3);
        */
        this.getData();
        console.log("WishListService is ready to be implemented!");
    }
    WishListService.prototype.updateData = function () {
        localStorage.setItem("data", JSON.stringify(this.listItem));
    };
    WishListService.prototype.getData = function () {
        if (localStorage.getItem("data")) {
            this.listItem = JSON.parse(localStorage.getItem("data"));
        }
    };
    WishListService.prototype.addList = function (list) {
        this.listItem.push(list);
        this.updateData();
    };
    WishListService.prototype.deleteListById = function (idx) {
        this.listItem.splice(idx, 1);
        this.updateData();
    };
    WishListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WishListService);
    return WishListService;
}());

//# sourceMappingURL=whish-list.service.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map