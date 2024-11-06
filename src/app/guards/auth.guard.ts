import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userSvc = inject(UserService);
  const toastrSvc = inject(ToastrService);
  const router = inject(Router);

  return new Promise((resolve)=>{  
      if(userSvc.getLogged()){
        resolve(true)
      }
      else { 
        router.navigate(['/login']);
        toastrSvc.error('No estas autenticado para acceder a esta seccion.', 'Permisos insuficientes');
        resolve(false)
      }
  })
};
