import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './helper';
import { AddHorseComponent } from './add-horse';
import { ViewHorseComponent } from './view-horse';
import { EditHorseComponent } from './edit-horse';
import { AddOwnerComponent } from './add-owner';
import { UpdateOwnerComponent } from './update-owner';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'add-horse', component: AddHorseComponent },
    { path: 'view-horse', component: ViewHorseComponent },
    { path: 'edit-horse', component: EditHorseComponent },
    { path: 'add-owner', component: AddOwnerComponent },
    { path: 'update-owner', component: UpdateOwnerComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);