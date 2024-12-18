import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const userSvc = inject(UserService);
  const toastrSvc = inject(ToastrService);
  const router = inject(Router);

  return new Promise((resolve)=>{  
    if(userSvc.getRol() == 'admin'){
      resolve(true)
    } else {
      router.navigate(['/home']);
      toastrSvc.error('Debes ser administrador para acceder a esta seccion.', 'Permisos insuficientes');
      resolve(false)
    }
  })
};
