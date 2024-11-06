import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FirestoreService } from '../../services/firestore.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';


export interface UsuarioData {
  nombre: string;
  apellido: string;
  edad: string;
  dni: string;
  email: string;
  rol: string;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    NgIf
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'dni', 'email', 'rol'];
  dataSource!: MatTableDataSource<UsuarioData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  usuarioSeleccionado: any = null;
  especialidadesEspecialista: string[] = [];

  constructor(private firestoreService: FirestoreService, private router: Router) { }

  ngOnInit() {
    this.firestoreService.getUsuarios()
    .then((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }



  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClickUsuario(usuario: any) {
    this.usuarioSeleccionado = usuario;

    if(this.usuarioSeleccionado.rol === 'especialista') {
      if (typeof this.usuarioSeleccionado.especialidad === 'object') {
        this.especialidadesEspecialista = Object.keys(this.usuarioSeleccionado.especialidad);
      }
      else {
        console.error('Error al obtener las especialidades del usuario');
      }
    }
  }

  habilitarEspecialista() {
    this.usuarioSeleccionado.habilitado = true;
    this.firestoreService.habilitarEspecialista(this.usuarioSeleccionado.id);
  }


  redirectToRegister(role: string) {
    this.router.navigate(['/registro-admin', role]);
  }
}
