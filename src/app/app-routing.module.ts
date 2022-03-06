import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequesterdetailsComponent} from './Requesterdetails/requesterdetails/requesterdetails.component';


const routes: Routes = [
  {path: 'req/:reqnbr', component: RequesterdetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
