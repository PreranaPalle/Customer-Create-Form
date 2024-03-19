import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AddressesComponent } from './addresses/addresses.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { NotesComponent } from './notes/notes.component';
import { SubmitComponent } from './submit/submit.component';
import { MapValuePipe } from './MapValuePipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AccountDetailsComponent,
    AddressesComponent,
    AddressComponent,
    NotesComponent,
    SubmitComponent,
    MapValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
