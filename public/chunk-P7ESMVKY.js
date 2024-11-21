import{a as A}from"./chunk-GXSUQVOS.js";import{a as L,b as U}from"./chunk-5QYNRND2.js";import{a as q}from"./chunk-UIGXXQV5.js";import{c as N}from"./chunk-6QBQ4ZNY.js";import"./chunk-H2WPO2EH.js";import{m as H,o as $,p as z}from"./chunk-W5ET73U7.js";import{e as j,g as R}from"./chunk-GBIG63BY.js";import"./chunk-NYWZOZWN.js";import"./chunk-BQSLCKPJ.js";import"./chunk-ZK4NZR2G.js";import{a as Q}from"./chunk-CVIZ75M7.js";import{a as D}from"./chunk-SZYKANWC.js";import"./chunk-PCZAAENJ.js";import"./chunk-KB63F72J.js";import"./chunk-CWSCUUYC.js";import{N as V}from"./chunk-GMVTRFNN.js";import"./chunk-CARY4E7O.js";import{j as F,k as T}from"./chunk-V6SC6RTQ.js";import{$a as _,Cb as c,Db as i,Eb as y,Ib as v,Nb as x,Ob as d,Rb as M,Tb as E,Ub as I,Vb as O,Xa as w,Xb as r,Zb as u,_a as a,_b as C,ec as k,ic as b,jc as P,la as S,qb as m,sb as l,va as f,wa as g}from"./chunk-NVPCUW4N.js";import{g as h}from"./chunk-5G567QLT.js";function B(o,p){if(o&1){let e=v();c(0,"div",5),x("click",function(){let n=f(e).$implicit,s=d();return g(s.onSelectPaciente(n))}),y(1,"img",6),c(2,"h3"),r(3),i()()}if(o&2){let e=p.$implicit;a(),M("alt",e.nombre),l("src",e.imagenUno||"ruta/default-imagen.jpg",w),a(2),C("",e.nombre," ",e.apellido,"")}}function Y(o,p){if(o&1){let e=v();c(0,"button",12),x("click",function(){f(e);let n=d().$implicit,s=d(2);return g(s.verHistoriaClinica(n))}),r(1,"Ver Historia Clinica"),i()}}function G(o,p){if(o&1){let e=v();c(0,"div",10)(1,"p")(2,"strong"),r(3,"Especialidad:"),i(),r(4),i(),c(5,"p")(6,"strong"),r(7,"Fecha:"),i(),r(8),b(9,"timestamp"),i(),c(10,"p")(11,"strong"),r(12,"Hora:"),i(),r(13),i(),c(14,"p")(15,"strong"),r(16,"Estado:"),i(),r(17),b(18,"primerLetraMayus"),i(),c(19,"div",11)(20,"button",12),x("click",function(){let n=f(e).$implicit,s=d(2);return g(s.verComentario(n))}),r(21,"Ver Rese\xF1a"),i(),m(22,Y,2,0,"button",13),i()()}if(o&2){let e=p.$implicit;l("appEstadoTurno",e.estado),a(4),u(" ",e.especialidad," "),a(4),u(" ",P(9,6,e.fecha),""),a(5),u(" ",e.hora,"hs "),a(4),u(" ",P(18,8,e.estado)," "),a(5),l("ngIf",e.estado=="finalizado")}}function J(o,p){if(o&1&&(c(0,"div",7)(1,"h2",2),r(2),i(),c(3,"div",8),m(4,G,23,10,"div",9),i()()),o&2){let e=d();a(2),C("Detalles de ",e.pacienteSeleccionado.nombre," ",e.pacienteSeleccionado.apellido,""),a(2),l("ngForOf",e.turnosPaciente)}}var de=(()=>{class o{constructor(e,t,n){this.firestoreService=e,this.userService=t,this.dialog=n,this.pacienteSeleccionado=null,this.turnosPaciente=[]}ngOnInit(){return h(this,null,function*(){let e=this.userService.getId(),t=yield this.firestoreService.obtenerPacientesAtendidosPorEspecialista(e);this.dataSource=new H(t),this.dataSource.paginator=this.paginator})}applyFilter(e){let t=e.target.value;this.dataSource.filter=t.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}onSelectPaciente(e){return h(this,null,function*(){this.pacienteSeleccionado=e;let t=this.userService.getId();this.turnosPaciente=yield this.firestoreService.obtenerTurnosPorPacienteYEspecialista(e.id,t)})}verHistoriaClinica(e){this.dialog.open(A,{data:{titulo:"Historia Clinica",mensaje:"Por favor, ingrese los detalles de la historia clinica del paciente.",historiaClinica:e.historiaClinica}}).afterClosed().subscribe(n=>{n&&this.firestoreService.updateDocument(`turnos/${e.id}`,{historiaClinica:n})})}verComentario(e){let t=e.comentario||"No hay comentarios";this.dialog.open(U,{data:{titulo:"Rese\xF1a de la consulta",mensaje:t,requiereComentario:!1,requiereEncuesta:!1}}).afterClosed().subscribe(s=>{})}static{this.\u0275fac=function(t){return new(t||o)(_(V),_(D),_(N))}}static{this.\u0275cmp=S({type:o,selectors:[["app-pacientes"]],viewQuery:function(t,n){if(t&1&&E($,5),t&2){let s;I(s=O())&&(n.paginator=s.first)}},standalone:!0,features:[k],decls:6,vars:2,consts:[[1,"pacientes-container"],[1,"pacientes-list","p-3","mt-4"],[1,"title-h"],["class","paciente-card",3,"click",4,"ngFor","ngForOf"],["class","paciente-detalles p-3 mt-4",4,"ngIf"],[1,"paciente-card",3,"click"],[1,"paciente-imagen",3,"src","alt"],[1,"paciente-detalles","p-3","mt-4"],[1,"div-turnos-card","row"],["class","turno-card mx-3 col-2",3,"appEstadoTurno",4,"ngFor","ngForOf"],[1,"turno-card","mx-3","col-2",3,"appEstadoTurno"],[1,"row","justify-content-center"],[1,"resena-button","w-75",3,"click"],["class","resena-button w-75",3,"click",4,"ngIf"]],template:function(t,n){t&1&&(c(0,"div",0)(1,"div",1)(2,"h2",2),r(3,"Pacientes Atendidos"),i(),m(4,B,4,4,"div",3),i(),m(5,J,5,3,"div",4),i()),t&2&&(a(4),l("ngForOf",n.dataSource.filteredData),a(),l("ngIf",n.pacienteSeleccionado))},dependencies:[j,R,z,T,F,q,L,Q],styles:[".pacientes-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:2rem;padding:120px 40px 40px}.pacientes-list[_ngcontent-%COMP%]{max-width:330px;height:75vh;overflow-y:auto;border-radius:5px;display:flex;flex-direction:column;border:2px solid #ccc;align-items:center}.paciente-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1rem;margin-bottom:1rem;border:2px solid #ccc;border-radius:50%;cursor:pointer;transition:background-color .2s ease;width:180px;height:170px}.paciente-card[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.paciente-imagen[_ngcontent-%COMP%]{width:90px;height:90px;border-radius:50%}.paciente-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.fav-button[_ngcontent-%COMP%]{background-color:transparent;border:none;color:#f5c518;font-size:1.5rem;cursor:pointer}.paciente-detalles[_ngcontent-%COMP%]{flex:2;width:70vw}.div-turnos-card[_ngcontent-%COMP%]{display:flex}.paciente-detalles[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:1rem}.turno-card[_ngcontent-%COMP%]{background-color:#fafafa;padding:1rem;margin-bottom:1rem;border:2px solid #ddd;border-radius:8px;width:300px}.resena-button[_ngcontent-%COMP%]{background-color:#183058;border:none;color:#fff;padding:.5rem 1rem;border-radius:4px;cursor:pointer;margin-top:.5rem;transition:background-color .3s ease;width:45%}.resena-button[_ngcontent-%COMP%]:hover{background-color:#0056b3}.title-h[_ngcontent-%COMP%]{font-weight:900;font-size:23px;color:#183058}"]})}}return o})();export{de as PacientesComponent};
