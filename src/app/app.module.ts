import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AngularFireModule } from '@angular/fire';

import { AngularFireModule } from '@angular/fire/compat';

import { RouterModule, Routes } from '@angular/router';

// import { FirestoreModule } from '@angular/fire/firestore';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

// import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importez AngularFirestoreModule depuis @angular/fire/compat/firestore

// import { AngularEditorComponent } from '@kolkov/angular-editor';

// import {}

import { HttpClientModule } from  '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms'; 

import { AngularEditorModule } from '@kolkov/angular-editor';

import { environment } from 'src/environments/environment.prod';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CategoriesComponent,
    AllPostComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
