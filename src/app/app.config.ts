import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'clinica-online-monserrat',
        appId: '1:852468060524:web:1dc5a2bf84de0a8c136349',
        storageBucket: 'clinica-online-monserrat.appspot.com',
        apiKey: 'AIzaSyCL8ZnSu6G_ivMtA1q_u-g3JW8FlB3LzlU',
        authDomain: 'clinica-online-monserrat.firebaseapp.com',
        messagingSenderId: '852468060524',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), provideAnimationsAsync(),
    provideToastr(),
    importProvidersFrom(BrowserAnimationsModule), 
  ],
};
