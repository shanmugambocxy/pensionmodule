import { Component } from '@angular/core';

// import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ongoing-personnel-details',
  templateUrl: './ongoing-personnel-details.component.html',
  styleUrl: './ongoing-personnel-details.component.css'
})
export class OngoingPersonnelDetailsComponent {
  pensioner!: FormGroup;
  pensionStatus!:FormGroup;
  trialForm1!:FormGroup;
  trialForm2!:FormGroup;
  trialForm3!:FormGroup;
  selectedTrial!: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pensioner = this.fb.group({
     
      empid: ['', Validators.required],
      empname: ['', Validators.required],
      designation: ['', Validators.required],
      workingPlace: ['', Validators.required],
      dob: ['', Validators.required],
      doa: ['', Validators.required],
      retirementDate: ['', Validators.required],
      age: ['', Validators.required],
      pensionType: ['', Validators.required],
      retirementType: ['', Validators.required],
      spouseName: ['', Validators.required],
      spouseDob: ['', Validators.required],
      address: ['', Validators.required],
      mobileNo: ['', Validators.required],
      emailNo: ['', Validators.required],
      panNo: ['', Validators.required],
      aadharNo: ['', Validators.required],
      bankAcctNo: ['', Validators.required],
      bankBranch: ['', Validators.required],
      ifsc: ['', Validators.required],
    });
  
  
  this.pensionStatus= this.fb.group({
      pfno:['',Validators.required],
      pensionStatus: ['', Validators.required],
      commutationPortion: ['', Validators.required],
      dateCommencement: ['', Validators.required],
      dateReduced: ['', Validators.required],
      recoveryInstal: ['', Validators.required],
      originalPension: ['', Validators.required],
      basicPension: ['', Validators.required],
      additionalPension: ['', Validators.required],
      commutedPension: ['', Validators.required],
      pensionPayable: ['', Validators.required],
      da: ['', Validators.required],
      ma: ['', Validators.required],
      gross:['',Validators.required],
      securityFund:['',Validators.required],
      fa:['',Validators.required],
      advRecovery:['',Validators.required],
      misc:['',Validators.required],
      miscRecovery:['',Validators.required],
      nhis:['',Validators.required],
      tds:['',Validators.required],
      netPension:['',Validators.required]
    });


    this.trialForm1= this.fb.group({
          name: ['', Validators.required],
          password: ['', Validators.required],
     });

     
    this.trialForm2= this.fb.group({
      name1: ['', Validators.required],
      password1: ['', Validators.required],
 });
 this.trialForm3= this.fb.group({
  name1: ['', Validators.required],
  password1: ['', Validators.required],
});
    
  }


}
