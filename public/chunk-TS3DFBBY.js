import{a as ce,b as le,c as b}from"./chunk-OYFTGMMC.js";import{a as B,b as N,c as L,d as G,e as J,f as K,g as W,h as X,i as Y,j as Z,k as ee,l as te,m as P,n as S,o as ie,p as ne,q as w,r as re}from"./chunk-YWMTEUM4.js";import{a as se}from"./chunk-I42HQYJ5.js";import{a as F}from"./chunk-SSGEGXZ2.js";import{a as O,b as U,c as H,d as A,e as Q,p as oe,r as ae}from"./chunk-D2JUWNLN.js";import"./chunk-Q3HY2LAP.js";import"./chunk-UBX73J6E.js";import{v as j}from"./chunk-LDTVX5G4.js";import"./chunk-THQPPHQV.js";import{L as $}from"./chunk-VNZCHZJ2.js";import{k as q}from"./chunk-JV3CWM4K.js";import{Fb as r,Gb as a,Hb as M,Ib as _,Jb as h,Lb as C,Qb as g,Rb as d,Wb as E,Xb as y,Yb as D,_b as s,ac as T,bb as m,cb as x,gc as k,hc as I,kc as V,lc as z,pa as R,tb as p,vb as l,ya as u,za as f}from"./chunk-7MNHCEPS.js";var de=()=>[5,10,25,100];function pe(i,o){i&1&&(r(0,"th",22)(1,"b",23),s(2,"Paciente"),a()())}function ue(i,o){if(i&1&&(r(0,"td",24),s(1),a()),i&2){let e=o.$implicit;l("appEstadoTurno",e.estado),m(),T(" ",e.paciente," ")}}function fe(i,o){i&1&&(r(0,"th",25)(1,"b"),s(2,"Especialista"),a()())}function _e(i,o){if(i&1&&(r(0,"td",24),s(1),a()),i&2){let e=o.$implicit;l("appEstadoTurno",e.estado),m(),T(" ",e.especialista," ")}}function he(i,o){i&1&&(r(0,"th",25)(1,"b"),s(2,"Especialidad"),a()())}function Ce(i,o){if(i&1&&(r(0,"td",24),s(1),a()),i&2){let e=o.$implicit;l("appEstadoTurno",e.estado),m(),T(" ",e.especialidad," ")}}function ge(i,o){i&1&&(r(0,"th",25)(1,"b"),s(2,"Fecha"),a()())}function Te(i,o){if(i&1&&(r(0,"td",24),s(1),V(2,"timestamp"),a()),i&2){let e=o.$implicit;l("appEstadoTurno",e.estado),m(),T(" ",z(2,2,e.fecha)," ")}}function be(i,o){i&1&&(r(0,"th",25)(1,"b"),s(2,"Horario"),a()())}function xe(i,o){if(i&1&&(r(0,"td",24),s(1),a()),i&2){let e=o.$implicit;l("appEstadoTurno",e.estado),m(),T(" ",e.hora,"hs ")}}function Me(i,o){i&1&&(r(0,"th",25)(1,"b"),s(2,"Estado"),a()())}function Se(i,o){if(i&1&&(r(0,"td",24),s(1),a()),i&2){let e=o.$implicit;l("appEstadoTurno",e.estado),m(),T(" ",e.estado," ")}}function we(i,o){i&1&&(r(0,"th",26)(1,"b"),s(2,"Acciones"),a()())}function ve(i,o){if(i&1){let e=C();r(0,"button",30),g("click",function(){u(e);let t=d().$implicit,c=d();return f(c.cancelarTurno(t))}),s(1," Cancelar "),a()}}function Ee(i,o){if(i&1){let e=C();r(0,"button",30),g("click",function(){u(e);let t=d().$implicit,c=d();return f(c.rechazarTurno(t))}),s(1," Rechazar "),a()}}function ye(i,o){if(i&1){let e=C();r(0,"button",31),g("click",function(){u(e);let t=d().$implicit,c=d();return f(c.aceptarTurno(t))}),s(1," Aceptar "),a()}}function De(i,o){if(i&1){let e=C();r(0,"button",31),g("click",function(){u(e);let t=d().$implicit,c=d();return f(c.finalizarTurno(t))}),s(1," Finalizar "),a()}}function Pe(i,o){if(i&1){let e=C();r(0,"button",30),g("click",function(){u(e);let t=d().$implicit,c=d();return f(c.verComentario(t))}),s(1," Ver rese\xF1a "),a()}}function Re(i,o){if(i&1){let e=C();r(0,"button",32),g("click",function(){u(e);let t=d().$implicit,c=d();return f(c.calificarAtencion(t))}),s(1," Calificar atencion "),a()}}function ke(i,o){if(i&1&&(r(0,"td",24),p(1,ve,2,0,"button",27)(2,Ee,2,0,"button",27)(3,ye,2,0,"button",28)(4,De,2,0,"button",28)(5,Pe,2,0,"button",27)(6,Re,2,0,"button",29),a()),i&2){let e=o.$implicit,n=d();l("appEstadoTurno",e.estado),m(),l("ngIf",e.estado==="aceptado"),m(),l("ngIf",e.estado==="pendiente"&&n.rolUser==="especialista"),m(),l("ngIf",e.estado==="pendiente"&&n.rolUser==="especialista"),m(),l("ngIf",e.estado==="aceptado"&&n.rolUser==="especialista"),m(),l("ngIf",e.comentario),m(),l("ngIf",e.estado==="finalizado"&&n.rolUser==="paciente"&&!e.comentarioPaciente&&!e.calificacion)}}function Ie(i,o){i&1&&M(0,"tr",33)}function Ve(i,o){i&1&&M(0,"tr",34)}function ze(i,o){i&1&&(r(0,"tr",35)(1,"td",36),s(2,"No se encontraron resultados."),a()())}var it=(()=>{class i{constructor(e,n,t){this.firestoreService=e,this.userService=n,this.dialog=t,this.displayedColumns=["paciente","especialista","especialidad","fecha","hora","estado","acciones"],this.idUser="",this.rolUser="",this.turnoSeleccionado=null,this.idUser=this.userService.getId(),this.rolUser=this.userService.getRol()}ngOnInit(){this.rolUser==="especialista"?this.firestoreService.getTurnosPorEspecialista(this.idUser).then(e=>{let n=e.map(t=>({id:t.id,comentario:t.comentario,comentarioPaciente:t.comentarioPaciente,calificacion:t.calificacion,paciente:t.paciente,especialista:t.especialista,especialidad:t.especialidad,fecha:t.fecha,hora:t.hora,estado:t.estado}));this.dataSource=new P(n),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}):this.firestoreService.getTurnosPorPaciente(this.idUser).then(e=>{let n=e.map(t=>({id:t.id,comentario:t.comentario,comentarioPaciente:t.comentarioPaciente,calificacion:t.calificacion,paciente:t.paciente,especialista:t.especialista,especialidad:t.especialidad,fecha:t.fecha,hora:t.hora,estado:t.estado}));this.dataSource=new P(n),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort})}verComentario(e){this.dialog.open(b,{data:{titulo:"Rese\xF1a de la consulta",mensaje:e.comentario,requiereComentario:!1,requiereEncuesta:!1}}).afterClosed().subscribe(t=>{})}calificarAtencion(e){this.dialog.open(b,{data:{titulo:"Calificar atencion",mensaje:"Por favor, deje un comentario de como fue la atencion del especialista.",requiereComentario:!0,requiereEncuesta:!0}}).afterClosed().subscribe(t=>{if(t){let{comentario:c,puntuacion:v}=t;e.comentario=c,e.puntuacion=v,this.firestoreService.updateDocument(`turnos/${e.id}`,{comentarioPaciente:c,calificacion:v})}})}aceptarTurno(e){this.dialog.open(b,{data:{titulo:"Aceptar turno",mensaje:"\xBFEsta seguro de que desea aceptar este turno?",requiereComentario:!1,requiereEncuesta:!1}}).afterClosed().subscribe(t=>{t&&(e.estado="aceptado",this.firestoreService.updateDocument(`turnos/${e.id}`,{estado:"aceptado"}))})}cancelarTurno(e){this.dialog.open(b,{data:{titulo:"Cancelar turno",mensaje:"Por favor, indique el motivo de la cancelacion del turno.",requiereComentario:!0,requiereEncuesta:!1}}).afterClosed().subscribe(t=>{t&&(e.estado="cancelado",e.comentario=t,this.firestoreService.updateDocument(`turnos/${e.id}`,{estado:"cancelado",comentario:t}))})}rechazarTurno(e){this.dialog.open(b,{data:{titulo:"Rechazar turno",mensaje:"Por favor, indique el motivo del rechazo del turno.",requiereComentario:!0,requiereEncuesta:!1}}).afterClosed().subscribe(t=>{t&&(console.log(e),e.estado="rechazado",e.comentario=t,this.firestoreService.updateDocument(`turnos/${e.id}`,{estado:"rechazado",comentario:t}))})}finalizarTurno(e){this.dialog.open(b,{data:{titulo:"Finalizar turno",mensaje:"Por favor, ingrese la rese\xF1a y diagnostico de la consulta.",requiereComentario:!0,requiereEncuesta:!1}}).afterClosed().subscribe(t=>{t&&(e.estado="finalizado",e.rese\u00F1a=t,this.firestoreService.updateDocument(`turnos/${e.id}`,{estado:"finalizado",comentario:t}))})}applyFilter(e){let n=e.target.value;this.dataSource.filter=n.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}static{this.\u0275fac=function(n){return new(n||i)(x($),x(F),x(le))}}static{this.\u0275cmp=R({type:i,selectors:[["app-mis-turnos"]],viewQuery:function(n,t){if(n&1&&(E(w,5),E(S,5)),n&2){let c;y(c=D())&&(t.paginator=c.first),y(c=D())&&(t.sort=c.first)}},standalone:!0,features:[k],decls:34,vars:5,consts:[["input",""],[1,"table-usuarios","mx-5"],[1,"w-100"],[1,"search-field"],["matInput","","placeholder","Buscar...",3,"keyup"],[1,"mat-elevation-z8","shadow-none"],["mat-table","","matSort","","matSortActive","fecha","matSortDirection","asc",3,"dataSource"],["matColumnDef","paciente"],["mat-header-cell","","mat-sort-header","","class","th-p","id","izq",4,"matHeaderCellDef"],["mat-cell","","class","fila-turno",3,"appEstadoTurno",4,"matCellDef"],["matColumnDef","especialista"],["mat-header-cell","","mat-sort-header","","class","th-p",4,"matHeaderCellDef"],["matColumnDef","especialidad"],["matColumnDef","fecha"],["matColumnDef","hora"],["matColumnDef","estado"],["matColumnDef","acciones"],["mat-header-cell","","class","th-p der","id","der",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","fail-search",4,"matNoDataRow"],["aria-label","Selecciona",1,"div-paginator",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header","","id","izq",1,"th-p"],[1,"izq"],["mat-cell","",1,"fila-turno",3,"appEstadoTurno"],["mat-header-cell","","mat-sort-header","",1,"th-p"],["mat-header-cell","","id","der",1,"th-p","der"],["mat-button","","class","btn-accion shadow-sm me-2",3,"click",4,"ngIf"],["mat-button","","class","btn-accion shadow-sm mx-2",3,"click",4,"ngIf"],["mat-button","","class","btn-accion shadow-sm",3,"click",4,"ngIf"],["mat-button","",1,"btn-accion","shadow-sm","me-2",3,"click"],["mat-button","",1,"btn-accion","shadow-sm","mx-2",3,"click"],["mat-button","",1,"btn-accion","shadow-sm",3,"click"],["mat-header-row",""],["mat-row",""],[1,"fail-search"],["colspan","7",1,"mat-cell","ps-4","pt-4"]],template:function(n,t){if(n&1){let c=C();r(0,"div",1)(1,"div",2)(2,"mat-form-field",3)(3,"mat-label"),s(4,"Buscar"),a(),r(5,"input",4,0),g("keyup",function(me){return u(c),f(t.applyFilter(me))}),a()()(),r(7,"div",5)(8,"table",6),_(9,7),p(10,pe,3,0,"th",8)(11,ue,2,2,"td",9),h(),_(12,10),p(13,fe,3,0,"th",11)(14,_e,2,2,"td",9),h(),_(15,12),p(16,he,3,0,"th",11)(17,Ce,2,2,"td",9),h(),_(18,13),p(19,ge,3,0,"th",11)(20,Te,3,4,"td",9),h(),_(21,14),p(22,be,3,0,"th",11)(23,xe,2,2,"td",9),h(),_(24,15),p(25,Me,3,0,"th",11)(26,Se,2,2,"td",9),h(),_(27,16),p(28,we,3,0,"th",17)(29,ke,7,7,"td",9),h(),p(30,Ie,1,0,"tr",18)(31,Ve,1,0,"tr",19)(32,ze,3,0,"tr",20),a(),M(33,"mat-paginator",21),a()()}n&2&&(m(8),l("dataSource",t.dataSource),m(22),l("matHeaderRowDef",t.displayedColumns),m(),l("matRowDefColumns",t.displayedColumns),m(2),l("pageSizeOptions",I(4,de)))},dependencies:[H,U,O,Q,A,te,B,L,W,G,N,X,J,K,Y,Z,ee,ne,S,ie,re,w,ae,oe,q,se,ce,j],styles:[".table-usuarios[_ngcontent-%COMP%]{padding-top:150px;padding-bottom:100px}.search-field[_ngcontent-%COMP%]{width:100%;margin:auto}.th-p[_ngcontent-%COMP%]{font-size:17px}th[_ngcontent-%COMP%]{background-color:#d7d7d7!important}#izq[_ngcontent-%COMP%]{border-radius:5px 0 0!important}#der[_ngcontent-%COMP%]{border-radius:0 5px 0 0!important}.fila-turno[_ngcontent-%COMP%]{border:none;color:#171717;background-color:#d7d7d7}.fail-search[_ngcontent-%COMP%]{background-color:#d7d7d7;width:100%!important}.div-paginator[_ngcontent-%COMP%]{background-color:#d7d7d7;border-radius:0 0 5px 5px}.detalle-turno[_ngcontent-%COMP%]{width:100%;min-height:600px;border-radius:5px;background-color:#d7d7d7;display:flex}.btn-accion[_ngcontent-%COMP%]{background-color:#bebebe;min-width:110px;font-weight:600!important}"]})}}return i})();export{it as MisTurnosComponent};