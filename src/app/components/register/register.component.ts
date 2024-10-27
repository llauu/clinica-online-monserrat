import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { dniExisteAsyncValidator } from '../../validators/dni.validator';
import { DniService } from '../../services/dni.service';
import { NgFor, NgIf } from '@angular/common';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { ToastrService } from 'ngx-toastr';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FirestoreService } from '../../services/firestore.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgxCaptchaModule, NgFor, MatProgressSpinnerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  imagenUno: any;
  imagenDos: any;
  errorMsg: string = '';
  errorMsjEspecialidad: string = '';
  regPaciente: boolean | null = null;
  user: any;
  form: any;
  especialidadesDisponibles: string[] = [];
  especialidadesCargadas: boolean = false;
  siteKey: string = '6LelmP4pAAAAAIRCS57ZV2nSRNip3kdHbSbwIRnt';
  isLoading: boolean = false;

  constructor(
              private authService: AuthService, 
              private router: Router, 
              private dniService: DniService, 
              private toastrSvc: ToastrService,
              private firestoreService: FirestoreService) {}


  ngOnInit() {
    this.isLoading = true;
    this.cargarEspecialidades();
  }

  async cargarEspecialidades() {
    this.especialidadesDisponibles = await this.firestoreService.getEspecialidades();
    this.especialidadesCargadas = true;
    this.isLoading = false;
  }

  configurarFormulario(rol: string) {
    if(rol == 'paciente') {
      this.regPaciente = true;

      this.form = new FormGroup ({
        nombre: new FormControl('', [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
        apellido: new FormControl('', [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
        edad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(0), Validators.max(120)]),
        dni: new FormControl('', {
          validators: [Validators.required, Validators.pattern('^[0-9]+$')],
          asyncValidators: dniExisteAsyncValidator(this.dniService, 'usuarios'),
          updateOn: 'blur'
        }),
        obraSocial: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        pass: new FormControl('', [Validators.required]),
        passRep: new FormControl('', [Validators.required]),
        imagenUno: new FormControl('', [Validators.required]),
        imagenDos: new FormControl('', [Validators.required]),
        recaptcha: new FormControl('', [Validators.required])
      });
    }
    else {
      this.regPaciente = false;

      this.form = new FormGroup ({
        nombre: new FormControl('', [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
        apellido: new FormControl('', [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
        edad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(0), Validators.max(120)]),
        dni: new FormControl('', {
          validators: [Validators.required, Validators.pattern('^[0-9]+$')],
          asyncValidators: dniExisteAsyncValidator(this.dniService, 'usuarios'),
          updateOn: 'blur'
        }),
        especialidades: new FormArray(this.especialidadesDisponibles.map(() => new FormControl(false))),
        email: new FormControl('', [Validators.required]),
        pass: new FormControl('', [Validators.required]),
        passRep: new FormControl('', [Validators.required]),
        imagenUno: new FormControl('', [Validators.required]),
        recaptcha: new FormControl('', [Validators.required])
      });
    }
  }

  onFileSelected(event: any, imageType: string) {
    if (event.target.files.length > 0) {
      if (imageType === 'imagenUno') {
        this.imagenUno = event.target.files[0];
      } else {
        this.imagenDos = event.target.files[0];
      }
    }
  }

  get especialidadesSeleccionadas() {
    const especialidadesFormArray = this.form.get('especialidades') as FormArray;
    return especialidadesFormArray.controls
      .map((control, index) => control.value ? this.especialidadesDisponibles[index] : null)
      .filter(especialidad => especialidad !== null);
  }

  register() {
    if(this.form.valid) {
      if(this.form.value.pass === this.form.value.passRep) {
        this.isLoading = true;

        this.authService.createUser(this.form.value.email, this.form.value.pass)
        .then((res: any) => {
          if(this.regPaciente === false) {
            const datosUser = {
              nombre: this.form.value.nombre,
              apellido: this.form.value.apellido,
              edad: this.form.value.edad,
              dni: this.form.value.dni,
              rol: 'especialista',
              especialidad: this.especialidadesSeleccionadas,
              email: this.form.value.email,
              pass: this.form.value.pass,
              imagenUno: '',
              habilitado: false
            }

            console.log('CREANDO USUARIO datos', datosUser);
            this.addNewUser(datosUser, res.user.uid);
          }
          else {
            const datosUser = {
              nombre: this.form.value.nombre,
              apellido: this.form.value.apellido,
              edad: this.form.value.edad,
              dni: this.form.value.dni,
              rol: 'paciente',
              obraSocial: this.form.value.obraSocial,
              email: this.form.value.email,
              pass: this.form.value.pass,
              imagenUno: '',
              imagenDos: ''
            }

            console.log('CREANDO USUARIO datos', datosUser);
            this.addNewUser(datosUser, res.user.uid);
          }
        })
        .catch(err => {
          console.log('HAY ERROR', err)

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
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
      }
      else {
        this.errorMsg = 'Las contraseñas no coinciden.';
      }
    }
  }

  
  async addNewUser(user: any, uid: string) {
    if(user.rol == 'paciente') {  
      user.imagenUno = await this.saveImage(this.imagenUno, uid + '/imagenUno');
      user.imagenDos = await this.saveImage(this.imagenDos, uid + '/imagenDos');
    }
    else if (user.rol == 'especialista') {
      user.imagenUno = await this.saveImage(this.imagenUno, uid + '/imagenUno');
    }
    
    this.firestoreService.createDocument('usuarios', user, uid);
    this.toastrSvc.success('Verifica tu correo electronico para poder iniciar sesion.', 'Usuario registrado');
    this.router.navigate(['/home']);
  }

  async saveImage(foto: any, path: string) {
    let storageRef = ref(getStorage(), path);
    await uploadBytes(storageRef, foto)
    return await getDownloadURL(storageRef)
  }

  agregarEspecialidad() {
    const inputEl = document.getElementById('nuevaEspecialidad') as HTMLInputElement;
    
    if(inputEl.value != '' && this.verificarEspecialidad(inputEl.value)) {
      this.errorMsjEspecialidad = '';
      this.firestoreService.createDocument('especialidades', {nombre: inputEl.value});
      this.especialidadesDisponibles.push(inputEl.value);
  
      this.form.patchValue({
        especialidad: inputEl.value
      });
    }
  }

  verificarEspecialidad(especialidadIngresada: string) {
    const especialidad = this.especialidadesDisponibles.find((e: any) => e === especialidadIngresada);

    if(especialidad) {
      this.errorMsjEspecialidad = 'La especialidad ya existe.';
      return false;
    }
    else {
      return true;
    }
  }

  cancelarRegistro() {
    this.errorMsg = '';
    this.errorMsjEspecialidad = '';

    this.regPaciente = null;
  }
}