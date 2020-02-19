import { Component, Input } from '@angular/core';
import { SalaryCalculatorModel } from './salaryCalculatorModel';
import { ViewEncapsulation } from '@angular/core';

@Component({
    selector : 'app-salary-calculator-result',
    templateUrl : 'salaryCalculatorResult.component.html',
    styleUrls : ['salaryCalculatorResult.component.css']
})
export class SalaryCalculatorResultComponent {

    @Input()
    model : SalaryCalculatorModel;
}