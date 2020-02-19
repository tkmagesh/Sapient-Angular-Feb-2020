import { Component, Input } from '@angular/core';
import { SalaryCalculatorModel } from './salaryCalculatorModel';

@Component({
    selector : 'app-salary-calculator-result',
    templateUrl : 'salaryCalculatorResult.component.html',
    styleUrls : ['salaryCalculatorResult.component.css']
})
export class SalaryCalculatorResultComponent {

    @Input()
    model : SalaryCalculatorModel;
}