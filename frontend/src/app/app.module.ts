import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { DataTablesModule } from 'angular-datatables';
import { DelimitorDialogComponent } from './dialog/delimitor-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MiddlewareService} from './services/middleware.service';
import { AlertService} from './services/alert.service';
import { ReactiveFormsModule,FormsModule }    from '@angular/forms';

    @NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    HomeComponent,
    DelimitorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    DragDropModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents:[DelimitorDialogComponent],

  providers: [MiddlewareService, AlertService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
