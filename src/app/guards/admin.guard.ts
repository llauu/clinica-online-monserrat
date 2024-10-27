import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const userSvc = inject(UserService);
  const toastrSvc = inject(ToastrService);

  return new Promise((resolve)=>{  
    if(userSvc.getRol() == 'admin'){
      resolve(true)
    } else {
      toastrSvc.error('Debes ser administrador para acceder a esta seccion.', 'Permisos insuficientes');
      resolve(false)
    }
  })
};
