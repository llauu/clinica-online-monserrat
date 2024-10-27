import { Injectable } from '@angular/core';
import { DocumentSnapshot, Firestore, QuerySnapshot, and, average, collection, 
  collectionData, collectionGroup, deleteDoc, doc, docData, getAggregateFromServer, 
  getCountFromServer, getDoc, getDocs, limit, or, orderBy, query, serverTimestamp, 
  setDoc, startAfter, sum, updateDoc, where} from '@angular/fire/firestore';
import { WhereFilterOp } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { 

  }
  
  
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
    dataDoc.fecha = serverTimestamp();
    await setDoc(refDoc, dataDoc);
    return dataDoc.id;
  }
  //----------------//


  //---| UPDATE |---//
  async updateDocument(path: string, data: any) {
    const refDoc = doc(this.firestore, path);
    data.updateAt = serverTimestamp(); 
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
  
  async getUsuarios() {
    const snapshot = await this.getDocuments<any>('usuarios');
    return snapshot.docs.map(doc => doc.data());
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
}
