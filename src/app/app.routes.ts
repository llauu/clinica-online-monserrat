import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { RegistroAdminComponent } from './components/registro-admin/registro-admin.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
    {path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)},
    {path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)},
    {
        path: 'usuarios', loadComponent: () => import('./components/usuarios/usuarios.component').then(m => m.UsuariosComponent),
        canActivate:[adminGuard]
    },
    { 
        path: 'registro-admin/:rol', loadComponent: () => import('./components/registro-admin/registro-admin.component').then(m => m.RegistroAdminComponent),
        canActivate:[adminGuard] 
    },
];
