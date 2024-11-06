import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { FirestoreService } from './firestore.service';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private logged: boolean = false;

  // User auth
  private user: any;

  // User profile
  private userProfile: any;


  constructor(private authService: AuthService, private firestoreService: FirestoreService, private router: Router) {
    console.log('UserService init');
    this.getState();
  }


  getState() {
    return new Promise((resolve, reject) => {
      if(this.logged) {
        resolve(this.user);
        return;
      }

      this.authService.authState.subscribe((res) => {
        if(res) {
          this.user = res;
          this.logged = true;

          this.getUserProfile();
        } else {
          this.user = null;
          this.logged = false;
        }
        resolve(this.user);
      });
    });
  }
  
  async getUserProfile() {
    return new Promise( async (resolve) => {
        if (this.userProfile) {
          resolve(this.userProfile);
          return;
        }

        const response = await this.firestoreService.getDocument(`usuarios/${this.user.uid}`)
        if (response.exists()) {  
            this.userProfile = response.data();
            resolve(this.userProfile);
            if (this.userProfile.email != this.user.email) {
              console.log('sincronizar email');
              const updateData = {email: this.user.email};
              this.firestoreService.updateDocument(`usuarios/${this.user.uid}`, updateData)
            }
        }
    });
  }

  getLogged() {
    return this.logged;
  }

  getRol() {
    return this.userProfile.rol;
  }

  getNombreApellido() {
    return this.userProfile.nombre + ' ' + this.userProfile.apellido;
  }

  getId() {
    return this.userProfile.id;
  }

  logout() {
    this.logged = false;
    this.user = null;
    this.userProfile = null;
    this.router.navigate(['/home']);
    return this.authService.logout();
  }
}
