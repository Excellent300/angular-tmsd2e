import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

// used to create fake backend
import { fakeBackendProvider } from './helper';
import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './helper';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './alert';
import { DataComponent } from './data/data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddHorseComponent } from './add-horse/add-horse.component';
import { ViewHorseComponent } from './view-horse/view-horse.component';
import { EditHorseComponent } from './edit-horse/edit-horse.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { UpdateOwnerComponent } from './update-owner/update-owner.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserTypeComponent } from './add-user-type/add-user-type.component';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        MatTableModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        DataComponent,
        AddHorseComponent,
        ViewHorseComponent,
        EditHorseComponent,
        AddOwnerComponent,
        UpdateOwnerComponent,
        AddCountryComponent,
        AddUserComponent,
        AddUserTypeComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };

