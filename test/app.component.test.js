"use strict";
require('zone.js');
require('reflect-metadata');
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var assert = chai.assert;
var expect = chai.expect;
var app_component_1 = require('../app/app.component');
describe('Roman Convertion', function () {
    var display;
    beforeEach(function () {
        display = new app_component_1.AppComponent();
    });
    it('It should return roman convertion for 10', function () {
        expect(display.romanConvertion("10")).to.equal("X");
    });
    it('It should return roman convertion for 11', function () {
        expect(display.romanConvertion("11")).to.equal("XI");
    });
    it('In case input is null', function () {
        expect(display.romanConvertion(null)).to.equal("");
    });
    it('In case value entered is greater than 3999 or less than 1', function () {
        expect(display.romanConvertion("5000")).to.equal("");
    });
    it('In case the value entered is string not number', function () {
        expect(display.romanConvertion("cvg@")).to.equal("");
    });
});
//# sourceMappingURL=app.component.test.js.map