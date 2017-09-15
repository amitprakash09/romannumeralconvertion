"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Roman Numeral Translator';
        this.numberEntered = null;
        this.check = false;
        this.error = "";
        this.displayValue = "";
        this.temp = this.numberEntered;
    }
    //function to convert the entered value into Roman format
    AppComponent.prototype.romanConvertion = function (temp) {
        //var temp = null;
        this.displayValue = "";
        this.check = true;
        this.error = "";
        if (temp == null || isNaN(temp) || temp == "") {
            this.check = false;
            this.error = "Please enter only Numeric Value";
        }
        else if (temp < 1 || temp > 3999) {
            this.check = false;
            this.error = "Number should be between 1 to 3999";
        }
        else {
            this.displayValue = "";
            this.check = true;
            while (temp >= 1000) {
                this.displayValue += "M";
                temp -= 1000;
            }
            while (temp >= 900) {
                this.displayValue += "CM";
                temp -= 900;
            }
            while (temp >= 500) {
                this.displayValue += "D";
                temp -= 500;
            }
            while (temp >= 400) {
                this.displayValue += "CD";
                temp -= 400;
            }
            while (temp >= 100) {
                this.displayValue += "C";
                temp -= 100;
            }
            while (temp >= 90) {
                this.displayValue += "XC";
                temp -= 90;
            }
            while (temp >= 50) {
                this.displayValue += "L";
                temp -= 50;
            }
            while (temp >= 40) {
                this.displayValue += "XL";
                temp -= 40;
            }
            while (temp >= 10) {
                this.displayValue += "X";
                temp -= 10;
            }
            while (temp >= 9) {
                this.displayValue += "IX";
                temp -= 9;
            }
            while (temp >= 5) {
                this.displayValue += "V";
                temp -= 5;
            }
            while (temp >= 4) {
                this.displayValue += "IV";
                temp -= 4;
            }
            while (temp >= 1) {
                this.displayValue += "I";
                temp -= 1;
            }
        }
        return this.displayValue;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"container-fluid\">\n    \n  <div class=\"row content\">\n    \n    <div class=\"col-sm-4\"></div>  \n      <div class=\"col-sm-4\">\n          <h3 align=\"center\" >{{title}}</h3>\n        <label>Enter the Number</label>\n        <input type=\"text\" [(ngModel)]=\"numberEntered\" />\n        <button class=\"btn btn-primary centerButtons\" (click)=\"romanConvertion(numberEntered)\">Convert </button>\n      <br>\n      <label *ngIf=\"(check)\">Roman equilalent is : <span float=\"right\">{{displayValue}}</span> </label>\n      <label *ngIf=\"(!check)\" class=\"errorclass\"> {{error}}\n      </label>\n      </div>\n      <div class=\"col-sm-4\"></div> \n      \n      </div>\n  </div>\n  \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map