import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent{
  numberArray: number[] = [];
  gender:string[]=['Male','Female']
    infoForm = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName:(''),
      age:(''),
      gender:['',Validators.required],
      emailId:['',Validators.email]
    });
  constructor(public DemoService:DemoServiceService,private fb:FormBuilder) {
    for (let i = 18; i <= 60; i++) {
      this.numberArray.push(i);
    }

   
  }
onNext(){
  this.DemoService.info=this.infoForm.value;
  console.log(this.infoForm.value)
}
  

}
