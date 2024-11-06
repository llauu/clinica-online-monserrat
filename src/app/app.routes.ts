import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
    {path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)},
    {path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)},
    {
        path: 'perfil', loadComponent: () => import('./components/perfil/perfil.component').then(m => m.PerfilComponent),
        canActivate:[authGuard] 
    },
    {
        path: 'usuarios', loadComponent: () => import('./components/usuarios/usuarios.component').then(m => m.UsuariosComponent),
        canActivate:[adminGuard]
    },
    { 
        path: 'registro-admin/:rol', loadComponent: () => import('./components/registro-admin/registro-admin.component').then(m => m.RegistroAdminComponent),
        canActivate:[adminGuard] 
    },
    { 
        path: 'solicitar-turno', loadComponent: () => import('./components/solicitar-turno/solicitar-turno.component').then(m => m.SolicitarTurnoComponent),
        canActivate:[authGuard] 
    },
    { 
        path: 'mis-turnos', loadComponent: () => import('./components/mis-turnos/mis-turnos.component').then(m => m.MisTurnosComponent),
        canActivate:[authGuard] 
    },
    { 
        path: 'turnos', loadComponent: () => import('./components/turnos/turnos.component').then(m => m.TurnosComponent),
        canActivate:[adminGuard] 
    },
];
