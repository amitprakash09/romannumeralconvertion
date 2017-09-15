require('zone.js');
import 'reflect-metadata';
import { Component } from  "@angular/core";
import {beforeEachProviders} from  "@angular/core/testing";
var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var assert = chai.assert;
var expect = chai.expect;
import { AppComponent } from '../app/app.component';


  describe('Roman Convertion', () => {
    var display;
    beforeEach(() => {
     display = new AppComponent();
    });
    it('It should return roman convertion for 10', () => {
      
      expect(display.romanConvertion("10")).to.equal("X");
     
    });
    it('It should return roman convertion for 11', () => {
        
        expect(display.romanConvertion("11")).to.equal("XI");
       
      });
      it('In case input is null', () => {
        
        expect(display.romanConvertion(null)).to.equal("");
       
      });
      it('In case value entered is greater than 3999 or less than 1', () => {
        
        expect(display.romanConvertion("5000")).to.equal("");
       
      });
      it('In case the value entered is string not number', () => {
        
        expect(display.romanConvertion("cvg@")).to.equal("");
       
      });
});
