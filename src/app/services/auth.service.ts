import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
        signOut, authState, updateProfile, updateEmail,
        sendEmailVerification, reauthenticateWithCredential, 
      verifyBeforeUpdateEmail,
      updatePassword, sendPasswordResetEmail,
      deleteUser, signInWithRedirect,
      GoogleAuthProvider, OAuthProvider, FacebookAuthProvider,
      OAuthCredential, signInWithCredential, getRedirectResult,
    } from '@angular/fire/auth';
import { FirestoreService } from './firestore.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = authState(this.auth);

  constructor(private firestoreService: FirestoreService, private auth: Auth, private toastrSvc: ToastrService) {
    this.auth.languageCode = 'es';    
  }

  async createUser(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(this.auth, email, password);

    if(user) {
      sendEmailVerification(user.user);
      this.logout(false);
    }

    return user;
  }

  getCurrentUser() {
      return this.auth.currentUser
  }

  async login(email: string, password: string) {
    // return signInWithEmailAndPassword(this.auth, email, password);
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential: any) => {
          if(userCredential.user.emailVerified) {
            resolve(userCredential);
          }
          else {
            this.logout(false) 
              .then(() => {
                reject('Debes verificar tu correo electronico ingresar.');
              });
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  async logout(reload = true) {
    await signOut(this.auth);

    if (reload) {
      window.location.reload();
    }
  }




  // -------------------------------------------------------------------
  // async createUser(email: string, password: string) {
  //   const user = await createUserWithEmailAndPassword(this.auth, email, password);
  //   // await this.sendEmailVerification();
  //   return user;
  // }
  
  // async login(email: string, password: string) {
  //   return signInWithEmailAndPassword(this.auth, email, password);
  // }

  // async logout() {
  //   // await this.notificationsPushService.deleteToken();
  //   await signOut(this.auth);
  // }

  // getCurrentUser() {
  //     return this.auth.currentUser;
  // }

  // updateProfile(data: {displayName?: string, photoURL?: string}) {
  //    return updateProfile(this.auth.currentUser, data)
  // }

  // updateEmail(email: string) {
  //   return updateEmail(this.auth.currentUser, email)
  // }

  // verifyBeforeUpdateEmail(email: string) {
  //   return verifyBeforeUpdateEmail(this.auth.currentUser, email)
  // }

  // reauthenticateWithCredential(password: string) {
  //   const credential = GoogleAuthProvider.credential(null, password);
  //   return reauthenticateWithCredential(this.auth.currentUser, credential)
  // }

  // sendEmailVerification() {
  //   return sendEmailVerification(this.auth.currentUser)
  // }

  // updatePassword(newPasword: string) {
  //   return updatePassword(this.auth.currentUser, newPasword)
  // }

  // sendPasswordResetEmail(email: string) {
  //   return sendPasswordResetEmail(this.auth, email);
  // }

  // deleteUser() {
  //   return deleteUser(this.auth.currentUser);
  // }
}
