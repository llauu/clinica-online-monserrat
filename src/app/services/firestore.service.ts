import { Injectable } from '@angular/core';
import { DocumentSnapshot, Firestore, QuerySnapshot, and, average, collection, 
  collectionData, collectionGroup, deleteDoc, doc, docData, getAggregateFromServer, 
  getCountFromServer, getDoc, getDocs, limit, or, orderBy, query, serverTimestamp, 
  setDoc, startAfter, sum, updateDoc, where, Query} from '@angular/fire/firestore';
import { Timestamp, WhereFilterOp } from "firebase/firestore";


export interface TurnoData {
  fecha: Timestamp;
  hora: string;
  comentario: string;
  especialidad: string;
  especialista: string;
  estado: string;
  historiaClinica: any;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }
  
  
  //---| CREATE |---//
  async createDocument<tipo>(path: string, data: tipo, id: string | null = null) {
    let refDoc;
    if (id) {
      refDoc = doc(this.firestore, `${path}/${id}`);
    } else {
      const refCollection = collection(this.firestore, path)
      refDoc = doc(refCollection);
    }
    const dataDoc: any = data;
    dataDoc.id = refDoc.id;
    dataDoc.creado = serverTimestamp();
    await setDoc(refDoc, dataDoc);
    return dataDoc.id;
  }
  //----------------//


  //---| UPDATE |---//
  async updateDocument(path: string, data: any) {
    const refDoc = doc(this.firestore, path);
    return await updateDoc(refDoc, data);
  }
  //----------------//


  //---| DELETE |---//
  async deleteDocument(path: string) {
    const refDoc = doc(this.firestore, path);
    return await deleteDoc(refDoc);
  }
  //----------------// 


  //---| READ |---//
  async getDocument<tipo>(path: string) {
    const refDocument = doc(this.firestore, path);
    return await getDoc(refDocument) as DocumentSnapshot<tipo> ;    
  }
  
  async getDocuments<tipo>(path: string, group: boolean = false) {
    if (!group) {
      const refCollection = collection(this.firestore, path);
      return await getDocs(refCollection) as QuerySnapshot<tipo> ;    
    } else  {
      const refCollectionGroup = collectionGroup(this.firestore, path)
      return await getDocs(refCollectionGroup) as QuerySnapshot<tipo>;
    }
  }

  
  async getEspecialidades(): Promise<string[]> {
    const snapshot = await this.getDocuments<any>('especialidades');
    return snapshot.docs.map(doc => doc.data().nombre); // Devuelve solo los nombres de las especialidades
  }

  async getEspecialidadesConImagen(): Promise<string[]> {
    const snapshot = await this.getDocuments<any>('especialidades');
    return snapshot.docs.map(doc => doc.data());
  }

  async getEspecialistas(specialty?: string): Promise<any[]> {
    const usersCollectionRef = collection(this.firestore, 'usuarios');
    
    // Traemos todos los especialistas
    const specialistsQuery = query(usersCollectionRef, where('rol', '==', 'especialista'));

    return getDocs(specialistsQuery)
      .then((querySnapshot) => {
        const specialists: any[] = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Agregamos cada especialista al array
          specialists.push({ id: doc.id, ...data });
        });

        // Si se especifica una especialidad, filtramos el array de especialistas
        if (specialty) {
          return specialists.filter(specialist => 
            specialist.especialidad && specialist.especialidad[specialty]
          );
        }

        return specialists;
      })
      .catch((error) => {
        console.error("Error al obtener especialistas:", error);
        return [];
      });
  }

  async getPacientes() {
    const usersCollectionRef = collection(this.firestore, 'usuarios');
    
    // Traemos todos los pacientes
    const pacientesQuery = query(usersCollectionRef, where('rol', '==', 'paciente'));


    return getDocs(pacientesQuery)
      .then((querySnapshot) => {
        const pacientes: any[] = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          // Agregamos cada especialista al array
          pacientes.push({ id: doc.id, ...data });
        });

        return pacientes;
      })
      .catch((error) => {
        console.error("Error al obtener especialistas:", error);
        return [];
      });
  }
  
  async getUsuarios() {
    const snapshot = await this.getDocuments<any>('usuarios');
    return snapshot.docs.map(doc => doc.data());
  }

  async getTurnos() {
    const snapshot = await this.getDocuments<any>('turnos');
    return snapshot.docs.map(doc => doc.data());
  }

  async getTurnosPorPaciente(idPaciente: string) {
    const turnosCollectionRef = collection(this.firestore, 'turnos');
    const turnosQuery = query(turnosCollectionRef, where('idPaciente', '==', idPaciente));
    const snapshot = await getDocs(turnosQuery);
    return snapshot.docs.map(doc => doc.data());
  }
  
  async getTurnosFinalizadosPorPaciente(idPaciente: string) {
    const turnosCollectionRef = collection(this.firestore, 'turnos');
    const turnosQuery = query(
      turnosCollectionRef,
      where('idPaciente', '==', idPaciente),
      where('estado', '==', 'finalizado')
    );
    const snapshot = await getDocs(turnosQuery);
    return snapshot.docs.map(doc => doc.data());
  }
  
  async getTurnosPorEspecialista(idEspecialista: string) {
    const turnosCollectionRef = collection(this.firestore, 'turnos');
    const turnosQuery = query(turnosCollectionRef, where('idEspecialista', '==', idEspecialista));
    const snapshot = await getDocs(turnosQuery);
    return snapshot.docs.map(doc => doc.data());
  }

  
  async getTurnosPorEspecialistaYEspecialidad(idEspecialista: string, especialidad: string) {
    const turnosCollectionRef = collection(this.firestore, 'turnos');
    const turnosQuery = query(
      turnosCollectionRef, 
      where('idEspecialista', '==', idEspecialista),
      where('especialidad', '==', especialidad)
    );
    const snapshot = await getDocs(turnosQuery);
    
    return snapshot.docs.map(doc => doc.data());
  }


  async obtenerPacientesAtendidosPorEspecialista(idEspecialista: string): Promise<any[]> {
    const pacientesAtendidos: any[] = [];

    try {
      // Primero, obtenemos los turnos "completados" del especialista
      const turnosRef = collection(this.firestore, 'turnos');
      const turnosQuery = query(
        turnosRef,
        where('idEspecialista', '==', idEspecialista),
        where('estado', '==', 'finalizado')
      );

      const turnosSnapshot = await getDocs(turnosQuery);

      // Creamos un conjunto de IDs únicos de pacientes atendidos
      const pacienteIds = new Set<string>();
      turnosSnapshot.forEach(turnoDoc => {
        const turnoData = turnoDoc.data();
        if (turnoData['idPaciente']) {
          pacienteIds.add(turnoData['idPaciente']);
        }
      });

      // Ahora obtenemos los detalles de cada paciente con rol "paciente"
      const usuariosRef = collection(this.firestore, 'usuarios');
      for (let pacienteId of pacienteIds) {
        const pacienteDocRef = doc(usuariosRef, pacienteId);
        const pacienteDoc = await getDoc(pacienteDocRef);
        const pacienteData = pacienteDoc.data();

        // Filtramos para asegurarnos de que el rol sea "paciente"
        if (pacienteData && pacienteData['rol'] === 'paciente') {
          pacientesAtendidos.push({ id: pacienteDoc.id, ...pacienteData });
        }
      }
    } catch (error) {
      console.error('Error obteniendo pacientes atendidos:', error);
    }

    return pacientesAtendidos;
  }


  async obtenerTurnosPorPacienteYEspecialista(idPaciente: string, idEspecialista: string): Promise<TurnoData[]> {
    const turnosRef = collection(this.firestore, 'turnos');
    const q = query(turnosRef, where('idPaciente', '==', idPaciente), where('idEspecialista', '==', idEspecialista));
    const querySnapshot: QuerySnapshot = await getDocs(q);
    
    // Mapea los turnos a TurnoData
    return querySnapshot.docs.map(doc => doc.data() as TurnoData);
  }

  
  validateEspecialista(email: string) {
    return new Promise((resolve, reject) => {
      let col = collection(this.firestore, 'usuarios');
      let q = query(col, where('email', '==', email));
      let observable = collectionData(q);
  
      observable.subscribe((res) => {
        if(res[0]) {
          if(res[0]['rol'] == 'especialista' && res[0]['habilitado'] == false) {
            reject('Tu cuenta aun no fue habilitada.');
          }
          else {
            resolve(true);
          }
        }
        else {
          reject('El correo electronico no se encuentra registrado.');
        }
      })
    });
  }


  async validarEspecialista(uid: string) {
    const snapshot = await this.getDocument<any>(`usuarios/${uid}`);
    
    if (snapshot.data().rol == 'especialista' && snapshot.data().habilitado == false) {
      // throw new Error('Tu cuenta aun no fue habilitada.');
      return false;
    }
    else {
      return true;
    }
  }

  habilitarEspecialista(uid: string) {
    return this.updateDocument(`usuarios/${uid}`, {habilitado: true});
  }


  // Obtener los horarios de una especialidad
  async obtenerHorariosEspecialidad(uid: string, specialty: string): Promise<any> {
    const specialistDocRef = doc(this.firestore, `usuarios/${uid}`);

    return getDoc(specialistDocRef)
      .then((docSnapshot: DocumentSnapshot<any>) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          
          const specialtySchedule = data['especialidad']?.[specialty] || null;
          
          return specialtySchedule;
        }
        return null;
      })
      .catch(error => {
        console.error('Error al obtener los horarios de Firestore:', error);
        return null;
      });
  }

  
  async actualizarHorariosEspecialidad(uid: string, specialty: string, schedule: { [day: string]: { start: string, end: string } }) {
    const specialistDocRef = doc(this.firestore, `usuarios/${uid}`);
  
    // Construir la estructura de datos correcta para la especialidad y los horarios
    const updatedSpecialty = {
      [specialty]: Object.keys(schedule).map(day => ({
        dia: day,
        hora_inicio: schedule[day].start,
        hora_fin: schedule[day].end
      }))
    };
  
    return updateDoc(specialistDocRef, {
      [`especialidad.${specialty}`]: updatedSpecialty[specialty]
    }).then(() => {
      console.log("Horario actualizado correctamente");
    }).catch((error) => {
      console.error("Error al actualizar el horario:", error);
    });
  }


}
