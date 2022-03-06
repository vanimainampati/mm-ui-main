import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';

import {RouterModule, Routes} from '@angular/router';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyordersComponent} from './myorders/myorders.component';
import {ProcessingordersComponent} from './myorders/processingorders/processingorders.component';
import {RecivedordersComponent} from './myorders/recivedorders/recivedorders.component';
import {RejectedordersComponent} from './myorders/rejectedorders/rejectedorders.component';
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {RequesterdetailsComponent} from './Requesterdetails/requesterdetails/requesterdetails.component';
import {AppRoutingModule} from './app-routing.module';
import {StepsModule} from "primeng/steps";
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CarouselModule} from 'primeng/carousel';
import {TabViewModule} from 'primeng/tabview';
import {TimelineModule} from "primeng/timeline";
import {CalendarModule} from 'primeng/calendar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ToastModule} from "primeng/toast";
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

const navigationPath: Routes = [
  {path: "myorders", component: MyordersComponent, pathMatch: "full"},
  {path: "pendingorders", component: ProcessingordersComponent, pathMatch: "full"},
  {path: "recivedorders", component: RecivedordersComponent, pathMatch: "full"},
  {path: "rejectedorders", component: RejectedordersComponent, pathMatch: "full"},
  {path: '', redirectTo: 'myorders', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    MyordersComponent,
    ProcessingordersComponent,
    RecivedordersComponent,
    RejectedordersComponent,
    RequesterdetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule,
    RouterModule.forRoot(navigationPath),
    DialogModule,
    MessagesModule,
    MessageModule,
    BrowserAnimationsModule,
    CardModule,
    TabMenuModule,
    AppRoutingModule,
    StepsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    CarouselModule,
    DialogModule,
    TabViewModule,
    CardModule,
    TimelineModule,
    CalendarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    ToastModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
