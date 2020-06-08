import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';

import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './pages/info/info.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { SearchPipe } from './pipes/search.pipe';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { ChangeWorkerComponent } from './ui/change-worker/change-worker.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    PersonalComponent,
    SearchPipe,
    AddformWorkerComponent,
    ChangeWorkerComponent,
    TableWorkersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    TextMaskModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
