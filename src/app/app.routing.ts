import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NoteComponent } from './note/note.component';
import { AuthGuard } from './_guards';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { EditorComponent } from './editor/editor.component';
export const appRoutes: Routes = [
    { path: '', component: MainComponent },
   
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'note', component: NoteComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'adminlogin', component: AdminloginComponent },
    { path: 'pdfviewer', component: PdfviewerComponent },
    { path: 'editor', component: EditorComponent },



    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);