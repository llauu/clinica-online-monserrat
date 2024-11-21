import{a as $}from"./chunk-UIGXXQV5.js";import{a as V,b as x}from"./chunk-P4PAYY2C.js";import{a as L,b as N}from"./chunk-H2WPO2EH.js";import"./chunk-ZK4NZR2G.js";import{i as X}from"./chunk-CWSCUUYC.js";import{D as z,N as D}from"./chunk-GMVTRFNN.js";import{g as F,j,k as R}from"./chunk-V6SC6RTQ.js";import{$a as S,$b as k,Cb as n,Db as t,Eb as m,Ib as C,Nb as p,Ob as f,Xa as M,Xb as o,Zb as _,_a as a,_b as P,ec as y,ic as T,jc as I,la as O,qb as g,sb as u,va as v,wa as b,xb as U}from"./chunk-NVPCUW4N.js";import{g as E}from"./chunk-5G567QLT.js";function H(i,d){if(i&1){let e=C();n(0,"div",14)(1,"button",15),p("click",function(){let r=v(e).$implicit,s=f();return b(s.onClickUsuario(r))}),m(2,"img",16),n(3,"span",17),o(4),t()()()}if(i&2){let e=d.$implicit;a(2),u("src",e.imagenUno,M),a(2),P("",e.nombre," ",e.apellido,"")}}function A(i,d){i&1&&m(0,"img",20)}function B(i,d){if(i&1){let e=C();n(0,"div"),m(1,"img",21),n(2,"a",22),p("click",function(){v(e);let r=f(3);return b(r.habilitarEspecialista(r.usuarioSeleccionado))}),o(3,"Habilitar"),t()()}}function q(i,d){if(i&1&&(n(0,"div",3)(1,"p")(2,"strong"),o(3,"Habilitado:"),t()(),g(4,A,1,0,"img",20)(5,B,4,0),t()),i&2){let e=f(2);a(4),U(4,e.usuarioSeleccionado.habilitado?4:5)}}function G(i,d){if(i&1&&(n(0,"li")(1,"p"),o(2),T(3,"timestamp"),t()()),i&2){let e=d.$implicit;a(2),k("",e.especialidad," - ",e.especialista," - ",I(3,4,e.fecha),", ",e.hora,"hs")}}function J(i,d){if(i&1&&(n(0,"div",23)(1,"h3",5),o(2,"Turnos:"),t(),n(3,"ul"),g(4,G,4,6,"li",24),t()()),i&2){let e=f(2);a(4),u("ngForOf",e.turnosUsuarioSeleccionado)}}function K(i,d){if(i&1&&(n(0,"div",4)(1,"h3",5),o(2,"Detalles del Usuario"),t(),n(3,"p")(4,"strong"),o(5,"Nombre:"),t(),o(6),t(),n(7,"p")(8,"strong"),o(9,"Apellido:"),t(),o(10),t(),n(11,"p")(12,"strong"),o(13,"DNI:"),t(),o(14),t(),n(15,"p")(16,"strong"),o(17,"Edad:"),t(),o(18),t(),n(19,"p")(20,"strong"),o(21,"E-mail:"),t(),o(22),t(),n(23,"p")(24,"strong"),o(25,"Perfil:"),t(),o(26),t(),g(27,q,6,1,"div",18)(28,J,5,1,"div",19),t()),i&2){let e=f();a(6),_(" ",e.usuarioSeleccionado.nombre,""),a(4),_(" ",e.usuarioSeleccionado.apellido,""),a(4),_(" ",e.usuarioSeleccionado.dni,""),a(4),_(" ",e.usuarioSeleccionado.edad,""),a(4),_(" ",e.usuarioSeleccionado.email,""),a(4),_(" ",e.usuarioSeleccionado.rol,""),a(),u("ngIf",e.usuarioSeleccionado.rol==="especialista"),a(),u("ngIf",e.turnosUsuarioSeleccionado.length>0)}}var ae=(()=>{class i{constructor(e,c){this.firestoreService=e,this.router=c,this.usuarios=[],this.usuarioSeleccionado=null,this.turnosUsuarioSeleccionado=[]}ngOnInit(){this.loadUsuarios()}loadUsuarios(){this.firestoreService.getUsuarios().then(e=>{this.usuarios=e})}onClickUsuario(e){return E(this,null,function*(){this.usuarioSeleccionado=e,this.turnosUsuarioSeleccionado=yield this.firestoreService.getTurnosPorPaciente(e.id),this.usuarioSeleccionado.rol==="paciente"&&this.downloadTurnos()})}habilitarEspecialista(e){e.habilitado=!0,this.firestoreService.habilitarEspecialista(e.id)}redirectToRegister(e){this.router.navigate(["/registro-admin",e])}downloadUsuariosCSV(){let e=this.usuarios.map(l=>({Nombre:l.nombre,Apellido:l.apellido,DNI:l.dni,Edad:l.edad,Email:l.email,Rol:l.rol,ObraSocial:l.rol==="paciente"?l.obraSocial:"-",Habilitado:l.rol==="especialista"?l.habilitado?"Si":"No":"-"})),c=x.json_to_sheet(e),r=x.sheet_to_csv(c),s=new Blob([r],{type:"text/csv;charset=utf-8;"}),w=URL.createObjectURL(s),h=document.createElement("a");h.href=w,h.download="usuarios.csv",h.click(),URL.revokeObjectURL(w)}downloadTurnos(){let e=this.turnosUsuarioSeleccionado.map(s=>({Especialidad:s.especialidad,Fecha:this.formatFecha(s.fecha),Hora:s.hora,Paciente:s.paciente,Especialista:s.especialista,Estado:s.estado,Comentario:s.comentario})),r={Sheets:{Turnos:x.json_to_sheet(e)},SheetNames:["Turnos"]};V(r,`${this.usuarioSeleccionado?.nombre}_${this.usuarioSeleccionado?.apellido}_turnos.xlsx`)}formatFecha(e){if(e instanceof z){let c=e.toDate();return F(c,"d MMM. y","en-US")}return""}static{this.\u0275fac=function(c){return new(c||i)(S(D),S(X))}}static{this.\u0275cmp=O({type:i,selectors:[["app-usuarios"]],standalone:!0,features:[y],decls:19,vars:2,consts:[[1,"usuarios-container"],[1,"usuario-list"],["class","usuario-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"usuario-detail","shadow","mx-4"],[1,"title-h"],[1,"div-imgs"],[1,"btn-sel","mx-3","mt-3",3,"click"],["src","assets/admin.png","alt","Admin",1,"img-btn-sel"],["src","assets/paciente.jpg","alt","Paciente",1,"img-btn-sel"],["src","assets/doctor.jpg","alt","Especialista",1,"img-btn-sel"],["aria-label","Descargar Usuarios CSV",1,"btn-download-csv",3,"click"],[1,"icon"],["class","usuario-detail shadow mx-4",4,"ngIf"],[1,"usuario-item"],["mat-icon-button","",1,"usuario-btn",3,"click"],["alt","Imagen del usuario",1,"usuario-img",3,"src"],[1,"usuario-name"],["class","d-flex",4,"ngIf"],["class","mt-3",4,"ngIf"],["src","assets/check.png","width","25","height","25","alt","Si"],["src","assets/uncheck.png","width","25","height","25","alt","No"],[1,"ms-2","a-habilitar",3,"click"],[1,"mt-3"],[4,"ngFor","ngForOf"]],template:function(c,r){c&1&&(n(0,"div",0)(1,"div",1),g(2,H,5,3,"div",2),t(),n(3,"div",3)(4,"div",4)(5,"h3",5),o(6,"Registrar usuario nuevo"),t(),n(7,"div",6)(8,"button",7),p("click",function(){return r.redirectToRegister("admin")}),m(9,"img",8),t()(),n(10,"div",6)(11,"button",7),p("click",function(){return r.redirectToRegister("paciente")}),m(12,"img",9),t(),n(13,"button",7),p("click",function(){return r.redirectToRegister("especialista")}),m(14,"img",10),t()()(),n(15,"button",11),p("click",function(){return r.downloadUsuariosCSV()}),n(16,"mat-icon",12),o(17,"download"),t()(),g(18,K,29,8,"div",13),t()()),c&2&&(a(2),u("ngForOf",r.usuarios),a(16),u("ngIf",r.usuarioSeleccionado))},dependencies:[R,j,$,N,L],styles:[".usuarios-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:150px 20px 20px;gap:30px}.usuario-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:20px}.usuario-item[_ngcontent-%COMP%]{text-align:center}.usuario-btn[_ngcontent-%COMP%]{background-color:#183058;border-radius:50%;width:200px;height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;border:none;cursor:pointer;box-shadow:0 4px 8px #0003;transition:transform .2s ease-in-out}.usuario-btn[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.usuario-img[_ngcontent-%COMP%]{width:110px;height:110px;border-radius:50%}.usuario-name[_ngcontent-%COMP%]{font-size:15px;margin-top:5px;color:#fff}.a-habilitar[_ngcontent-%COMP%]{color:#f11010;font-weight:600;cursor:pointer}.usuario-detail[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:20px;border-radius:8px;width:45vw;max-width:600px;border:2px solid #ccc}.usuario-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#333;margin-bottom:10px}.usuario-detail[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}.usuario-detail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:16px;color:#555;margin:5px 0}.usuario-detail[_ngcontent-%COMP%]   .no-turnos[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#f44336;text-align:center}.title-h[_ngcontent-%COMP%]{font-weight:900;font-size:23px;color:#183058}.div-imgs[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn-sel[_ngcontent-%COMP%]{transition:opacity .2s ease;background-color:#fff;border-radius:50%}.btn-sel[_ngcontent-%COMP%]:hover{opacity:.3}.img-btn-sel[_ngcontent-%COMP%]{border-radius:50%}.btn-download-csv[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;width:80px;height:80px;border-radius:50%;background-color:#183058;color:#fff;border:none;display:flex;justify-content:center;align-items:center;box-shadow:0 4px 6px #0000001a;z-index:1000}.btn-download-csv[_ngcontent-%COMP%]:hover{background-color:#0056b3;transform:scale(1.1)}.btn-download-csv[_ngcontent-%COMP%]:active{background-color:#004085}.btn-download-csv[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px}.icon[_ngcontent-%COMP%]{width:40px;height:40px;font-size:35px}"]})}}return i})();export{ae as UsuariosComponent};
