import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  mode=['Credit Card','UPI','Debit Card'];
  selectednumber:number | undefined;
  selectedMode:string='default';
 constructor(public demoService:DemoServiceService,public fb:FormBuilder) {
  
 }
 accountgroup=this.fb.group({
  mode:[''],
  upiid:[''],
  cardno:[''],
  name:[''],
  cvv:[''],
  expirydate:['']

 })

}
