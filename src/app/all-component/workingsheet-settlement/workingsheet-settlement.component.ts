import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';




@Component({
  selector: 'app-workingsheet-settlement',
  templateUrl: './workingsheet-settlement.component.html',
  styleUrl: './workingsheet-settlement.component.css'
})
export class WorkingsheetSettlementComponent {
pensionerDetails!:FormGroup;
pensionDetailsPart1!:FormGroup;
pensionDetailsPart2!:FormGroup;
pensionDetailsPart3!:FormGroup;
deathForm!:FormGroup; 
pensionDetailsPart4!:FormGroup;
selectedType!:string;
constructor(private fb: FormBuilder) { }

ngOnInit(): void {
  this.pensionerDetails = this.fb.group({
    pfno: ['', Validators.required],
    empName:['',Validators.required],
    designation:['',Validators.required],
    lastPlaceWorking:['',Validators.required],
    dob:['',Validators.required],
    doa:['',Validators.required],
    retirementType:['',Validators.required],
    retirementDate:['',Validators.required],
    spouseName:['',Validators.required],
    spouseDob:['',Validators.required],
    totalMc:['',Validators.required],
    serviceBreak:['',Validators.required],
    boyServices:['',Validators.required]
});
this.pensionDetailsPart1 = this.fb.group({
  optingCommutation:['',Validators.required],
  commutationPortion:['',Validators.required],
  commutationDate:['',Validators.required],
  qualifyingService:['',Validators.required],
  nonQualifyingService:['',Validators.required],
  netQualifyingService:['',Validators.required],
  halfYearPension:['',Validators.required],
  halfDcrg:['',Validators.required],
  basicPay:['',Validators.required],
  gradePay:['',Validators.required],
  basicPension:['',Validators.required],
  familyPensionFifty:['',Validators.required],
  familyPensionThirty:['',Validators.required],
  dcrg:['',Validators.required],
  commutedValue:['',Validators.required],
  commutation:['',Validators.required],
  residualPension:['',Validators.required],
  ppoNo:['',Validators.required],
});

this.pensionDetailsPart2 = this.fb.group({
  optingCommutation:['',Validators.required],
  commutationPortion:['',Validators.required],
  commutationDate:['',Validators.required],
  qualifyingService:['',Validators.required],
  nonQualifyingService:['',Validators.required],
  netQualifyingService:['',Validators.required],
  halfYearPension:['',Validators.required],
  halfDcrg:['',Validators.required],
  basicPay:['',Validators.required],
  gradePay:['',Validators.required],
  basicPension:['',Validators.required],
  familyPensionFifty:['',Validators.required],
  familyPensionThirty:['',Validators.required],
  dcrg:['',Validators.required],
  commutedValue:['',Validators.required],
  commutation:['',Validators.required],
  residualPension:['',Validators.required],
  ppoNo:['',Validators.required],
});


this.pensionDetailsPart3 = this.fb.group({
  optingCommutation:['',Validators.required],
  commutationPortion:['',Validators.required],
  commutationDate:['',Validators.required],
  qualifyingService:['',Validators.required],
  nonQualifyingService:['',Validators.required],
  netQualifyingService:['',Validators.required],
  halfYearPension:['',Validators.required],
  halfDcrg:['',Validators.required],
  basicPay:['',Validators.required],
  gradePay:['',Validators.required],
  basicPension:['',Validators.required],
  familyPensionFifty:['',Validators.required],
  familyPensionThirty:['',Validators.required],
  dcrg:['',Validators.required],
  commutedValue:['',Validators.required],
  commutation:['',Validators.required],
  residualPension:['',Validators.required],
  ppoNo:['',Validators.required],
});

this.deathForm = this.fb.group({
  
  
  grossQualifying:['',Validators.required],
  nonqualifyingService:['',Validators.required],
  netQualifyingService:['',Validators.required],
  halfYear:['',Validators.required],
  basicPay:['',Validators.required],
  gradePay:['',Validators.required],
  familyPensionFifty:['',Validators.required],
  familyPensionThirty:['',Validators.required],
  dcrg:['',Validators.required],
  reducedDate:['',Validators.required],
  ppoNo:['',Validators.required]
})


this.pensionDetailsPart4=this.fb.group({
  grossQualifying:['',Validators.required],
  nonQualifyingService:['',Validators.required],
  netQualifyingService:['',Validators.required],
  halfYear:['',Validators.required],
  basicPay:['',Validators.required],
  gradePay:['',Validators.required],
  basicPension:['',Validators.required],
  familyPensionFifty:['',Validators.required],
  familyPensionThirty:['',Validators.required],
  ppoNo:['',Validators.required]
});

}

}