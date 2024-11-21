import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { ToastrService } from 'ngx-toastr';
import { trigger, transition, style, animate } from '@angular/animations';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { MostrarEsconderPassDirective } from '../../directives/mostrar-esconder-pass.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgIf,
    CommonModule,
    FormsModule, 
    MatMenuModule, 
    MatIconModule, 
    MatDividerModule,
    MatSelectModule,
    MatRadioModule,
    MostrarEsconderPassDirective
  ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-90%)', opacity: 0 }),
        animate('500ms ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formLogin: any;
  errorMsg: string = '';
  isLoading: boolean = false;

  constructor(public authService: AuthService, private router: Router, private firestoreService: FirestoreService, private toastrSvc: ToastrService, private firestore: Firestore) { }
  
  ngOnInit() {
    const errorMsg = sessionStorage.getItem('logoutError');
    if (errorMsg) {
      this.toastrSvc.error(errorMsg, 'Permiso denegado');
      sessionStorage.removeItem('logoutError');
    }

    this.formLogin = new FormGroup ({
      email: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('', [Validators.required]),
    });
  }
  
  login() {
    this.errorMsg = '';
    this.isLoading = true;

    this.authService.login(this.formLogin.value.email, this.formLogin.value.pass)
      .then((res: any) => {
        // console.log(res);

        if(res.user.email !== null) {
          this.isLoading = true;

          this.firestoreService.validarEspecialista(res.user.uid)
            .then((data) => {
              if(data) {
                let col = collection(this.firestore, 'logs');
                addDoc(col, {'date': new Date(), 'user': res.user.email});

                this.router.navigate(['/home']);
                this.isLoading = false;
              } else {
                // this.errorMsg = 'No tiene permisos para acceder a la plataforma.';
                sessionStorage.setItem('logoutError', 'Tu cuenta de especialista aun no fue habilitada por un administrador.');
                this.authService.logout()
                  .finally(() => {
                    this.isLoading = false;
                  });
              }
            })
            .catch((err) => {
              console.log(err)
              this.isLoading = false;
            })

          // this.checkAuthState();

          // let col = collection(this.firestore, 'logs');
          // addDoc(col, {'date': new Date(), 'email': this.formLogin.value.email});
        }
      })
      .catch(err => {
        switch(err.code) {
          case 'auth/invalid-email': 
            this.errorMsg = 'El correo electronico no es valido.';
            break;

          case 'auth/missing-password': 
            this.errorMsg = 'La contraseña no es valida.';
            break;
            
          case 'auth/invalid-credential': 
            this.errorMsg = 'El correo electronico o contraseña son incorrectos.';
            break;

          default:
            this.errorMsg = err;
            break;
        }
                    
        this.isLoading = false;
      });
  }

  togglePassword(event: any) {
    console.log(event);
    const input = event.target.closest('.row').querySelector('input');
    if (input.type === 'password') {
      input.type = 'text';
      event.target.querySelector('.icon').textContent = 'visibility_off';
    } else {
      input.type = 'password';
      event.target.querySelector('.icon').textContent = 'visibility';
    }
  }

  fillInputs(mail: string, pass: string) {
    this.formLogin.controls['email'].setValue(mail);
    this.formLogin.controls['pass'].setValue(pass);
  }

  volver() {
    this.router.navigate(['/home']);
  }
}
