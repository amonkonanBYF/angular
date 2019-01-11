import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { AdminComponent } from './admin/admin.component';
import { SessionAddFormComponent } from './session-add-form/session-add-form.component';
import { FormsModule } from '@angular/forms';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import {FakeSessionItemService} from './fake-session-item.service';
import {SessionHttpService} from './session-http.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
          { path: 'add', component: SessionAddFormComponent },
          { path: 'edit/:id', component: SessionEditFormComponent },
          { path: 'list', component: SessionItemListComponent },
          { path: '',   redirectTo: 'list', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes),
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule 
  ],
  declarations: 
  [SessionItemComponent,
   SessionItemListComponent,
   AdminComponent,
   SessionAddFormComponent,
   SessionEditFormComponent],
  providers: [FakeSessionItemService, SessionHttpService],
  bootstrap: [AdminComponent]

})
export class AdminModule { }
