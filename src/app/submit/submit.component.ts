import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {
  constructor(public demoService:DemoServiceService){};
  infoMap = new Map(Object.entries(this.demoService.info));
  addressMap=new Map(Object.entries(this.demoService.address));
  values=Object.values(this.demoService.address)[0];
  demoMap = new Map(Object.entries(this.demoService.notes));
  accountMap=new Map(Object.entries(this.demoService.account));
 ngOnInit(){
  console.log(this.values)
 }

}
