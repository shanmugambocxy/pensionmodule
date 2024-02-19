import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-arrear-screen3',
  templateUrl: './arrear-screen3.component.html',
  styleUrl: './arrear-screen3.component.css'
})
export class ArrearScreen3Component {
  arrear!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.arrear= this.fb.group({

      ppo: ['', Validators.required],
      name: ['', Validators.required],
      designation: ['', Validators.required],
      workingPlace: ['', Validators.required],
      doa: ['', Validators.required],
      dor: ['', Validators.required],
      age: ['', Validators.required],
      arrearStartDate: ['', Validators.required],
      arrearEndDate: ['', Validators.required],
      basicPension: ['', Validators.required],
      dueAddlPension: ['', Validators.required],
      commutedValue: ['', Validators.required],
      pensionPayable: ['', Validators.required],
      dueDa: ['', Validators.required],
      dueMa: ['', Validators.required],
      dueGross: ['', Validators.required],
      drawnBasicPension: ['', Validators.required],
      drawnAddlPension: ['', Validators.required],
      drawnCommutedValue: ['', Validators.required],
      drawnPensionPayable: ['', Validators.required],
      drawnDa: ['', Validators.required],
      drawnMa: ['', Validators.required],
      drawnGross: ['', Validators.required],
      differencePayable: ['', Validators.required],
      recoverOne: ['', Validators.required],
      recoveryTwo: ['', Validators.required],
      recoveryThree: ['', Validators.required],
      recoveryFour: ['', Validators.required],
      recoveryFive: ['', Validators.required],
      totalDeductions: ['', Validators.required],
      netPayable: ['', Validators.required],
    })
}

}