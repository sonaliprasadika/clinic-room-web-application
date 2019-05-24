import { NgModule, enableProdMode, ErrorHandler }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
// used to create fake backend
import { fakeBackendProvider } from './_helpers';
//import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import {QuillModule} from 'ngx-quill';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NoteComponent } from './note/note.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import {  AnnotationService} from '@syncfusion/ej2-angular-pdfviewer';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { RouterModule } from '@angular/router';
import { EJAngular2Module } from 'ej-angular2';
import { appRoutes } from './app.routing';

import * as $ from 'jquery';
import { EditorComponent } from './editor/editor.component';
enableProdMode();

class CustomErrorHandler implements ErrorHandler {
  call(error, stackTrace = null, reason = null) {
    console.log(error + "\n" + stackTrace);
  }
  handleError(error: any): void {
    console.log(error);
  }
}


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        FormsModule,
        QuillModule,
        //RouterModule.forRoot(appRoutes, { useHash: true }), 
        EJAngular2Module.forRoot(),
        //RichTextEditorAllModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        MainComponent,
        AdminComponent,
        AboutComponent,
        ContactsComponent,
        NoteComponent,
        FileSelectDirective,
        AdminloginComponent,
        PdfviewerComponent,
        EditorComponent,
        
    
        
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        AnnotationService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
      fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }