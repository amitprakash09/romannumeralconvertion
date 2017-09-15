import { Component} from '@angular/core';


@Component({
    selector: 'my-app',
    template: `<div class="container-fluid">
    
  <div class="row content">
    
    <div class="col-sm-4"></div>  
      <div class="col-sm-4">
          <h3 align="center" >{{title}}</h3>
        <label>Enter the Number</label>
        <input type="text" [(ngModel)]="numberEntered" />
        <button class="btn btn-primary centerButtons" (click)="romanConvertion(numberEntered)">Convert </button>
      <br>
      <label *ngIf="(check)">Roman equilalent is : <span float="right">{{displayValue}}</span> </label>
      <label *ngIf="(!check)" class="errorclass"> {{error}}
      </label>
      </div>
      <div class="col-sm-4"></div> 
      
      </div>
  </div>
  
  `
   
})

export class AppComponent {
    title = 'Roman Numeral Translator';
    numberEntered: number = null;
    check: boolean = false;
    error: string = "";

  displayValue: string = "";

   temp = this.numberEntered;
  //function to convert the entered value into Roman format
  romanConvertion(temp) {
    //var temp = null;
    this.displayValue = "";
    
    this.check = true;
    this.error = "";
    
    if (temp==null || isNaN(temp) || temp=="")
      {
        this.check=false;
        this.error = "Please enter only Numeric Value"
      }
      else if (temp < 1 || temp > 3999) {
        

      this.check = false;
      this.error = "Number should be between 1 to 3999"
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
    
  }
}