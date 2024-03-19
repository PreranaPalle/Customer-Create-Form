import { Component } from '@angular/core';
import { FormArray, FormBuilder,Validators} from '@angular/forms';
import { DemoServiceService } from '../demo-service.service';
import { MapValuePipe } from '../MapValuePipe';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  constructor(public demoService:DemoServiceService,public fb:FormBuilder){}
  save:boolean=false;
  addressForm=this.fb.group({
    addressArray: this.fb.array([
      this.fb.group({
        address: [''],
        city: [''],
        state: [''],
        country: [''],
        pincode: ['',Validators.required],
        contactPhone: ['',Validators.required]
      })
    ])

  })
  ngOnInit(){
    console.log(this.addressForm.get('pincode'))
  }
  addressArray=this.addressForm.get('addressArray') as FormArray;
  onadd(){
    this.addressArray.push(
      this.fb.group({
        address: (''),
        city: (''),
        state: (''),
        country: (''),
        pincode: ['',Validators.required],
        contactPhone: ['',Validators.required]
      })

    )
   
  }
  getObjectKeys(obj: any): { key: string, value: any }[] {
    return Object.keys(obj).map(key => ({ key, value: obj[key] }));
  }
  getObjectValues(obj:Object):string[]{
    return Object.values(obj);    
  }
  onSave(){
    this.save=true;
    this.demoService.address=this.addressForm.value;
  }
}
