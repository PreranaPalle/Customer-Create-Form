import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor() { }
  public info:Object=[];
  public address:Object=[];
  public notes:Object=[];
  public account:Object=[];
}
