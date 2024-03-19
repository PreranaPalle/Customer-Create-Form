import { Component } from '@angular/core';
import { DemoServiceService } from '../demo-service.service';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  timezone=['9AM-3PM','12PM-8PM','3PM-10PM'];
  notesForm=new FormGroup({
    supplier:new FormControl(''),
    time:new FormControl(''),
    other:new FormControl('')
  })
  constructor(public demoService:DemoServiceService){}
  onNext(){
    this.demoService.notes=this.notesForm.value;
  }


}
