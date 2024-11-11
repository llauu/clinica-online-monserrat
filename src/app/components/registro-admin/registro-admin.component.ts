import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { dniExisteAsyncValidator } from '../../validators/dni.validator';
import { DniService } from '../../services/dni.service';
import { NgFor, NgIf } from '@angular/common';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { ToastrService } from 'ngx-toastr';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FirestoreService } from '../../services/firestore.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-registro-admin',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgxCaptchaModule, NgFor, MatProgressSpinnerModule],
  templateUrl: './registro-admin.component.html',
  styleUrl: './registro-admin.component.css'
})
export class RegistroAdminComponent {
  imagenUno: any;
  imagenDos: any;
  errorMsg: string = '';
  errorMsjEspecialidad: string = '';
  regPaciente: boolean | null = null;
  user: any;
  form: any;
  especialidadesDisponibles: string[] = [];
  mostrarForm: boolean = false;
  siteKey: string = '6LelmP4pAAAAAIRCS57ZV2nSRNip3kdHbSbwIRnt';
  isLoading: boolean = false;
  rol: string | null = '';

  constructor(private route: ActivatedRoute,
              private authService: AuthService, 
              private router: Router, 
              private dniService: DniService, 
              private toastrSvc: ToastrService,
              private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.rol = this.route.snapshot.paramMap.get('rol');

    if(this.rol == 'especialista') {
      this.cargarEspecialidades();
    }
    else {
      this.configurarFormulario(this.rol);
      this.mostrarForm = true;
    }
  }
  
  async cargarEspecialidades() {
    this.isLoading = true;
    this.especialidadesDisponibles = await this.firestoreService.getEspecialidades();
    this.isLoading = false;
    this.configurarFormulario(this.rol);
    this.mostrarForm = true;
  }
  
  configurarFormulario(rol: string | null) {
    switch(rol) {
      case 'paciente':
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
        break;
    
      case 'especialista':
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
        break;
        
      case 'admin':
        this.form = new FormGroup ({
          nombre: new FormControl('', [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
          apellido: new FormControl('', [Validators.pattern('^[a-zA-Z]+$'), Validators.required]),
          edad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(0), Validators.max(120)]),
          dni: new FormControl('', {
            validators: [Validators.required, Validators.pattern('^[0-9]+$')],
            asyncValidators: dniExisteAsyncValidator(this.dniService, 'usuarios'),
            updateOn: 'blur'
          }),
          email: new FormControl('', [Validators.required]),
          pass: new FormControl('', [Validators.required]),
          passRep: new FormControl('', [Validators.required]),
          imagenUno: new FormControl('', [Validators.required]),
          recaptcha: new FormControl('', [Validators.required])
        });
        break;
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

          if(this.rol === 'paciente') {
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

            console.log('CREANDO PACIENTE datos', datosUser);
            this.addNewUser(datosUser, res.user.uid);
          }
          else if (this.rol === 'especialista') {
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

            console.log('CREANDO ESPECIALSITA datos', datosUser);
            this.addNewUser(datosUser, res.user.uid);
          }
          else {
            const datosUser = {
              nombre: this.form.value.nombre,
              apellido: this.form.value.apellido,
              edad: this.form.value.edad,
              dni: this.form.value.dni,
              rol: 'admin',
              email: this.form.value.email,
              pass: this.form.value.pass,
              imagenUno: ''
            }

            console.log('CREANDO ADMIN datos', datosUser);
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
    else {
      user.imagenUno = await this.saveImage(this.imagenUno, uid + '/imagenUno');
    }
    
    this.firestoreService.createDocument('usuarios', user, uid);
    this.toastrSvc.success('Verifica el correo electronico para poder iniciar sesion.', 'Usuario registrado');
    this.router.navigate(['/home']);
  }

  async saveImage(foto: any, path: string) {
    let storageRef = ref(getStorage(), path);
    await uploadBytes(storageRef, foto)
    return await getDownloadURL(storageRef)
  }

  agregarEspecialidad() {
    const inputEl = document.getElementById('nuevaEspecialidad') as HTMLInputElement;

    if (inputEl.value !== '' && this.verificarEspecialidad(inputEl.value)) {
      this.errorMsjEspecialidad = '';
  
      this.firestoreService.createDocument('especialidades', { nombre: inputEl.value, imagen: 'https://images.vexels.com/content/151981/preview/stethoscope-icon-medical-icons-f7267f.png' });
  
      this.especialidadesDisponibles.push(inputEl.value);
  
      const especialidadesArray = this.form.get('especialidades') as FormArray;
      especialidadesArray.push(new FormControl(inputEl.value));
  
      this.form.patchValue({
        especialidad: inputEl.value
      });
  
      inputEl.value = '';
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
    this.router.navigate(['/usuarios']);
  }
}
