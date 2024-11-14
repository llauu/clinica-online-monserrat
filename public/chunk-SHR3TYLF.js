import{a as w,b as ne,c as re,d as oe}from"./chunk-C6YPHIGG.js";import{a as X,b as ee,c as te,d as ie}from"./chunk-ATXAYMZG.js";import{a as Q,b as W}from"./chunk-JGASZOWJ.js";import"./chunk-ZK4NZR2G.js";import{b as P,c as j,d as l,f as $,g as z,h as A,j as d,l as G,n as Z,o as K,p as B,q as H,u as Y,w as J}from"./chunk-PCZAAENJ.js";import{a as V,c as L}from"./chunk-LGC2IQW6.js";import{g as N,i as O}from"./chunk-CWSCUUYC.js";import{L as k}from"./chunk-KCBGSXGR.js";import"./chunk-CARY4E7O.js";import{j as F,k as U}from"./chunk-V6SC6RTQ.js";import{$a as v,Cb as r,Db as i,Eb as u,Ib as S,Nb as C,Ob as _,Xb as s,Yb as R,Zb as I,_a as n,ec as D,la as M,qb as c,sb as o,va as x,wa as h}from"./chunk-NVPCUW4N.js";import{g as y}from"./chunk-5G567QLT.js";function ae(e,m){e&1&&(r(0,"p",37),s(1,"El nombre es requerido."),i())}function le(e,m){e&1&&(r(0,"p",37),s(1,"El nombre solo puede contener letras."),i())}function me(e,m){if(e&1&&(r(0,"div",35),c(1,ae,2,0,"p",36)(2,le,2,0,"p",36),i()),e&2){let t=_(2);n(),o("ngIf",t.form.controls.nombre.getError("required")),n(),o("ngIf",t.form.controls.nombre.getError("pattern"))}}function se(e,m){e&1&&(r(0,"p",37),s(1,"El apellido es requerido."),i())}function de(e,m){e&1&&(r(0,"p",37),s(1,"El apellido solo puede contener letras."),i())}function ce(e,m){if(e&1&&(r(0,"div",35),c(1,se,2,0,"p",36)(2,de,2,0,"p",36),i()),e&2){let t=_(2);n(),o("ngIf",t.form.controls.apellido.getError("required")),n(),o("ngIf",t.form.controls.apellido.getError("pattern"))}}function pe(e,m){e&1&&(r(0,"p",37),s(1,"El edad es requerida."),i())}function fe(e,m){e&1&&(r(0,"p",37),s(1,"La edad no es valida."),i())}function _e(e,m){if(e&1&&(r(0,"div",35),c(1,pe,2,0,"p",36)(2,fe,2,0,"p",36),i()),e&2){let t=_(2);n(),o("ngIf",t.form.controls.edad.getError("required")),n(),o("ngIf",t.form.controls.edad.getError("pattern"))}}function ue(e,m){e&1&&(r(0,"p",37),s(1,"El DNI es requerido."),i())}function ge(e,m){e&1&&(r(0,"p",37),s(1,"El DNI no es valido."),i())}function ve(e,m){e&1&&(r(0,"p",37),s(1,"El DNI ya esta registrado."),i())}function xe(e,m){if(e&1&&(r(0,"div",35),c(1,ue,2,0,"p",36)(2,ge,2,0,"p",36)(3,ve,2,0,"p",36),i()),e&2){let t=_(2);n(),o("ngIf",t.form.controls.dni.getError("required")),n(),o("ngIf",t.form.controls.dni.getError("pattern")),n(),o("ngIf",t.form.controls.dni.getError("dniExiste"))}}function he(e,m){e&1&&(r(0,"p",37),s(1,"La obra social es requerida."),i())}function Ce(e,m){if(e&1&&(r(0,"div",40),c(1,he,2,0,"p",36),i()),e&2){let t=_(3);n(),o("ngIf",t.form.controls.obraSocial.getError("required"))}}function be(e,m){if(e&1&&(r(0,"div",11)(1,"label",38),s(2,"Obra social"),i(),u(3,"input",39),c(4,Ce,2,1,"div",24),i()),e&2){let t,a=_(2);n(3),o("formControl",a.form.controls.obraSocial),n(),o("ngIf",(t=a.form.get("obraSocial"))==null?null:t.touched)}}function Ee(e,m){if(e&1&&(r(0,"div")(1,"label"),u(2,"input",44),s(3),i()()),e&2){let t=m.$implicit,a=m.index;n(2),o("formControlName",a),n(),I(" ",t," ")}}function ye(e,m){e&1&&(r(0,"p",37),s(1,"La especialidad es requerida."),i())}function Se(e,m){if(e&1&&(r(0,"div",40),c(1,ye,2,0,"p",36),i()),e&2){let t=_(3);n(),o("ngIf",t.form.controls.especialidad.getError("required"))}}function Ae(e,m){if(e&1&&(r(0,"div",11)(1,"label",41),s(2,"Especialidades"),i(),r(3,"div",42),c(4,Ee,4,2,"div",43),i(),c(5,Se,2,1,"div",24),i()),e&2){let t,a=_(2);n(4),o("ngForOf",a.especialidadesDisponibles),n(),o("ngIf",(t=a.form.get("especialidad"))==null?null:t.touched)}}function we(e,m){if(e&1&&(r(0,"p",49),s(1),i()),e&2){let t=_(3);n(),R(t.errorMsjEspecialidad)}}function Re(e,m){if(e&1){let t=S();r(0,"div",11)(1,"label",45),s(2,"Agregar especialidad"),i(),r(3,"div",46),u(4,"input",47),r(5,"button",48),C("click",function(){x(t);let p=_(2);return h(p.agregarEspecialidad())}),s(6,"Agregar"),i()(),c(7,we,2,1,"p",32),i()}if(e&2){let t=_(2);n(7),o("ngIf",t.errorMsjEspecialidad!="")}}function Ie(e,m){e&1&&(r(0,"p",37),s(1,"El correo es requerido."),i())}function qe(e,m){if(e&1&&(r(0,"div",40),c(1,Ie,2,0,"p",36),i()),e&2){let t=_(2);n(),o("ngIf",t.form.controls.mail.getError("required"))}}function Te(e,m){e&1&&(r(0,"p",37),s(1,"La contrase\xF1a es requerida."),i())}function Me(e,m){if(e&1&&(r(0,"div",40),c(1,Te,2,0,"p",36),i()),e&2){let t=_(2);n(),o("ngIf",t.form.controls.pass.getError("required"))}}function De(e,m){e&1&&(r(0,"p",37),s(1,"La contrase\xF1a es requerida."),i())}function Fe(e,m){if(e&1&&(r(0,"div",40),c(1,De,2,0,"p",36),i()),e&2){let t=_(2);n(),o("ngIf",t.form.controls.passRep.getError("required"))}}function Ue(e,m){e&1&&(r(0,"label",37),s(1,"La imagen es requerida."),i())}function Ne(e,m){if(e&1&&(r(0,"div",40),c(1,Ue,2,0,"label",36),i()),e&2){let t=_(2);n(),o("ngIf",t.form.controls.imagenUno.getError("required"))}}function Oe(e,m){e&1&&(r(0,"p",37),s(1,"La imagen es requerida."),i())}function Ve(e,m){if(e&1&&(r(0,"div",40),c(1,Oe,2,0,"p",36),i()),e&2){let t=_(3);n(),o("ngIf",t.form.controls.imagenDos.getError("required"))}}function ke(e,m){if(e&1){let t=S();r(0,"div",11)(1,"label",50),s(2,"Imagen dos"),i(),r(3,"input",51),C("change",function(p){x(t);let g=_(2);return h(g.onFileSelected(p,"imagenDos"))}),i(),c(4,Ve,2,1,"div",24),i()}if(e&2){let t,a=_(2);n(3),o("formControl",a.form.controls.imagenDos),n(),o("ngIf",(t=a.form.get("imagenDos"))==null?null:t.touched)}}function Le(e,m){if(e&1&&(r(0,"p",49),s(1),i()),e&2){let t=_(2);n(),R(t.errorMsg)}}function Pe(e,m){if(e&1){let t=S();r(0,"form",10),C("ngSubmit",function(){x(t);let p=_();return h(p.register())}),r(1,"div",11)(2,"label",12),s(3,"Nombre"),i(),u(4,"input",13),c(5,me,3,2,"div",14),i(),r(6,"div",11)(7,"label",15),s(8,"Apellido"),i(),u(9,"input",16),c(10,ce,3,2,"div",14),i(),r(11,"div",11)(12,"label",17),s(13,"Edad"),i(),u(14,"input",18),c(15,_e,3,2,"div",14),i(),r(16,"div",11)(17,"label",19),s(18,"DNI"),i(),u(19,"input",20),c(20,xe,4,3,"div",14),i(),c(21,be,5,2,"div",21)(22,Ae,6,2,"div",21)(23,Re,8,1,"div",21),r(24,"div",11)(25,"label",22),s(26,"Correo electronico"),i(),u(27,"input",23),c(28,qe,2,1,"div",24),i(),r(29,"div",11)(30,"label",25),s(31,"Contrase\xF1a"),i(),u(32,"input",26),c(33,Me,2,1,"div",24),i(),r(34,"div",11)(35,"label",27),s(36,"Repite contrase\xF1a"),i(),u(37,"input",28),c(38,Fe,2,1,"div",24),i(),r(39,"div",11)(40,"label",29),s(41,"Imagen uno"),i(),r(42,"input",30),C("change",function(p){x(t);let g=_();return h(g.onFileSelected(p,"imagenUno"))}),i(),c(43,Ne,2,1,"div",24),i(),c(44,ke,5,2,"div",21),u(45,"ngx-recaptcha2",31,0),c(47,Le,2,1,"p",32),r(48,"button",33),C("click",function(){x(t);let p=_();return h(p.cancelarRegistro())}),s(49,"Cancelar"),i(),r(50,"button",34),s(51,"Registrarse"),i()()}if(e&2){let t,a,p,g,b,E,q,T,f=_();o("formGroup",f.form),n(4),o("formControl",f.form.controls.nombre),n(),o("ngIf",(t=f.form.get("nombre"))==null?null:t.touched),n(4),o("formControl",f.form.controls.apellido),n(),o("ngIf",(a=f.form.get("apellido"))==null?null:a.touched),n(4),o("formControl",f.form.controls.edad),n(),o("ngIf",(p=f.form.get("edad"))==null?null:p.touched),n(4),o("formControl",f.form.controls.dni),n(),o("ngIf",(g=f.form.get("dni"))==null?null:g.touched),n(),o("ngIf",f.rol=="paciente"),n(),o("ngIf",f.rol=="especialista"),n(),o("ngIf",f.rol=="especialista"),n(4),o("formControl",f.form.controls.email),n(),o("ngIf",(b=f.form.get("mail"))==null?null:b.touched),n(4),o("formControl",f.form.controls.pass),n(),o("ngIf",(E=f.form.get("pass"))==null?null:E.touched),n(4),o("formControl",f.form.controls.passRep),n(),o("ngIf",(q=f.form.get("passRep"))==null?null:q.touched),n(4),o("formControl",f.form.controls.imagenUno),n(),o("ngIf",(T=f.form.get("imagenUno"))==null?null:T.touched),n(),o("ngIf",f.rol=="paciente"),n(),o("siteKey",f.siteKey)("useGlobalDomain",!1)("formControl",f.form.controls.recaptcha),n(2),o("ngIf",f.errorMsg!=""),n(3),o("disabled",f.form.invalid)}}function je(e,m){e&1&&(r(0,"div",52),u(1,"mat-spinner"),i())}var nt=(()=>{class e{constructor(t,a,p,g,b,E){this.route=t,this.authService=a,this.router=p,this.dniService=g,this.toastrSvc=b,this.firestoreService=E,this.errorMsg="",this.errorMsjEspecialidad="",this.regPaciente=null,this.especialidadesDisponibles=[],this.mostrarForm=!1,this.siteKey="6LelmP4pAAAAAIRCS57ZV2nSRNip3kdHbSbwIRnt",this.isLoading=!1,this.rol=""}ngOnInit(){this.rol=this.route.snapshot.paramMap.get("rol"),this.rol=="especialista"?this.cargarEspecialidades():(this.configurarFormulario(this.rol),this.mostrarForm=!0)}cargarEspecialidades(){return y(this,null,function*(){this.isLoading=!0,this.especialidadesDisponibles=yield this.firestoreService.getEspecialidades(),this.isLoading=!1,this.configurarFormulario(this.rol),this.mostrarForm=!0})}configurarFormulario(t){switch(t){case"paciente":this.form=new A({nombre:new d("",[l.pattern("^[a-zA-Z]+$"),l.required]),apellido:new d("",[l.pattern("^[a-zA-Z]+$"),l.required]),edad:new d("",[l.required,l.pattern("^[0-9]+$"),l.min(0),l.max(120)]),dni:new d("",{validators:[l.required,l.pattern("^[0-9]+$")],asyncValidators:w(this.dniService,"usuarios"),updateOn:"blur"}),obraSocial:new d("",[l.required]),email:new d("",[l.required]),pass:new d("",[l.required]),passRep:new d("",[l.required]),imagenUno:new d("",[l.required]),imagenDos:new d("",[l.required]),recaptcha:new d("",[l.required])});break;case"especialista":this.form=new A({nombre:new d("",[l.pattern("^[a-zA-Z]+$"),l.required]),apellido:new d("",[l.pattern("^[a-zA-Z]+$"),l.required]),edad:new d("",[l.required,l.pattern("^[0-9]+$"),l.min(0),l.max(120)]),dni:new d("",{validators:[l.required,l.pattern("^[0-9]+$")],asyncValidators:w(this.dniService,"usuarios"),updateOn:"blur"}),especialidades:new Y(this.especialidadesDisponibles.map(()=>new d(!1))),email:new d("",[l.required]),pass:new d("",[l.required]),passRep:new d("",[l.required]),imagenUno:new d("",[l.required]),recaptcha:new d("",[l.required])});break;case"admin":this.form=new A({nombre:new d("",[l.pattern("^[a-zA-Z]+$"),l.required]),apellido:new d("",[l.pattern("^[a-zA-Z]+$"),l.required]),edad:new d("",[l.required,l.pattern("^[0-9]+$"),l.min(0),l.max(120)]),dni:new d("",{validators:[l.required,l.pattern("^[0-9]+$")],asyncValidators:w(this.dniService,"usuarios"),updateOn:"blur"}),email:new d("",[l.required]),pass:new d("",[l.required]),passRep:new d("",[l.required]),imagenUno:new d("",[l.required]),recaptcha:new d("",[l.required])});break}}onFileSelected(t,a){t.target.files.length>0&&(a==="imagenUno"?this.imagenUno=t.target.files[0]:this.imagenDos=t.target.files[0])}get especialidadesSeleccionadas(){return this.form.get("especialidades").controls.map((a,p)=>a.value?this.especialidadesDisponibles[p]:null).filter(a=>a!==null)}register(){this.form.valid&&(this.form.value.pass===this.form.value.passRep?(this.isLoading=!0,this.authService.createUser(this.form.value.email,this.form.value.pass).then(t=>{if(this.rol==="paciente"){let a={nombre:this.form.value.nombre,apellido:this.form.value.apellido,edad:this.form.value.edad,dni:this.form.value.dni,rol:"paciente",obraSocial:this.form.value.obraSocial,email:this.form.value.email,pass:this.form.value.pass,imagenUno:"",imagenDos:""};console.log("CREANDO PACIENTE datos",a),this.addNewUser(a,t.user.uid)}else if(this.rol==="especialista"){let a={nombre:this.form.value.nombre,apellido:this.form.value.apellido,edad:this.form.value.edad,dni:this.form.value.dni,rol:"especialista",especialidad:this.especialidadesSeleccionadas,email:this.form.value.email,pass:this.form.value.pass,imagenUno:"",habilitado:!1};console.log("CREANDO ESPECIALSITA datos",a),this.addNewUser(a,t.user.uid)}else{let a={nombre:this.form.value.nombre,apellido:this.form.value.apellido,edad:this.form.value.edad,dni:this.form.value.dni,rol:"admin",email:this.form.value.email,pass:this.form.value.pass,imagenUno:""};console.log("CREANDO ADMIN datos",a),this.addNewUser(a,t.user.uid)}}).catch(t=>{switch(console.log("HAY ERROR",t),t.code){case"auth/invalid-email":this.errorMsg="El correo electronico no es valido.";break;case"auth/missing-password":this.errorMsg="La contrase\xF1a no es valida.";break;case"auth/invalid-credential":this.errorMsg="El correo electronico o contrase\xF1a son incorrectos.";break}}).finally(()=>{this.isLoading=!1})):this.errorMsg="Las contrase\xF1as no coinciden.")}addNewUser(t,a){return y(this,null,function*(){t.rol=="paciente"?(t.imagenUno=yield this.saveImage(this.imagenUno,a+"/imagenUno"),t.imagenDos=yield this.saveImage(this.imagenDos,a+"/imagenDos")):t.imagenUno=yield this.saveImage(this.imagenUno,a+"/imagenUno"),this.firestoreService.createDocument("usuarios",t,a),this.toastrSvc.success("Verifica el correo electronico para poder iniciar sesion.","Usuario registrado"),this.router.navigate(["/home"])})}saveImage(t,a){return y(this,null,function*(){let p=te(ie(),a);return yield X(p,t),yield ee(p)})}agregarEspecialidad(){let t=document.getElementById("nuevaEspecialidad");t.value!==""&&this.verificarEspecialidad(t.value)&&(this.errorMsjEspecialidad="",this.firestoreService.createDocument("especialidades",{nombre:t.value,imagen:"https://images.vexels.com/content/151981/preview/stethoscope-icon-medical-icons-f7267f.png"}),this.especialidadesDisponibles.push(t.value),this.form.get("especialidades").push(new d(t.value)),this.form.patchValue({especialidad:t.value}),t.value="")}verificarEspecialidad(t){return this.especialidadesDisponibles.find(p=>p===t)?(this.errorMsjEspecialidad="La especialidad ya existe.",!1):!0}cancelarRegistro(){this.router.navigate(["/usuarios"])}static{this.\u0275fac=function(a){return new(a||e)(v(N),v(L),v(O),v(oe),v(V),v(k))}}static{this.\u0275cmp=M({type:e,selectors:[["app-registro-admin"]],standalone:!0,features:[D],decls:10,vars:3,consts:[["captchaElem",""],[1,"container"],[1,"row","justify-content-center"],[1,"col-md-10","reg-container","card-top"],[1,"card","mt-5"],[1,"card-header"],[1,"text-center","mt-3","h1-custom"],[1,"card-body-form"],["class","d-flex justify-content-center row",3,"formGroup","ngSubmit",4,"ngIf"],["class","spinner-bg",4,"ngIf"],[1,"d-flex","justify-content-center","row",3,"ngSubmit","formGroup"],[1,"col-6","my-3"],["for","nombre",1,"form-label"],["type","text","id","nombre",1,"form-control",3,"formControl"],["class","text-danger mt-1",4,"ngIf"],["for","apellido",1,"form-label"],["type","text","id","apellido",1,"form-control",3,"formControl"],["for","edad",1,"form-label"],["type","text","id","edad",1,"form-control",3,"formControl"],["for","dni",1,"form-label"],["type","text","id","dni",1,"form-control",3,"formControl"],["class","col-6 my-3",4,"ngIf"],["for","mail",1,"form-label"],["type","text","id","mail",1,"form-control",3,"formControl"],["class","text-danger",4,"ngIf"],["for","pass",1,"form-label"],["type","password","id","pass",1,"form-control",3,"formControl"],["for","passRep",1,"form-label"],["type","password","id","passRep",1,"form-control",3,"formControl"],["for","foto1",1,"form-label"],["type","file","id","foto1",1,"form-control",3,"change","formControl"],[3,"siteKey","useGlobalDomain","formControl"],["class","errorMsg",4,"ngIf"],["type","button",1,"btn","btn-custom","mt-5","mb-4","me-3","col-5",3,"click"],["type","submit",1,"btn","btn-reg","mt-5","mb-4","ms-3","col-5",3,"disabled"],[1,"text-danger","mt-1"],["class","error-msg",4,"ngIf"],[1,"error-msg"],["for","obraSocial",1,"form-label"],["type","text","id","obraSocial",1,"form-control",3,"formControl"],[1,"text-danger"],["for","especialidades",1,"form-label"],["formArrayName","especialidades"],[4,"ngFor","ngForOf"],["type","checkbox",3,"formControlName"],["for","especialidad",1,"form-label"],[1,"row"],["type","text","id","nuevaEspecialidad",1,"form-control","w-50","ms-3"],["type","button",1,"btn","btn-custom","w-25","ms-3",3,"click"],[1,"errorMsg"],["for","foto2",1,"form-label"],["type","file","id","foto2",1,"form-control",3,"change","formControl"],[1,"spinner-bg"]],template:function(a,p){a&1&&(r(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"h1",6),s(6),i()(),r(7,"div",7),c(8,Pe,52,26,"form",8)(9,je,2,0,"div",9),i()()()()()),a&2&&(n(6),I("Registro ",p.rol,""),n(2),o("ngIf",p.mostrarForm),n(),o("ngIf",p.isLoading))},dependencies:[J,G,j,P,$,z,Z,K,H,B,U,re,ne,F,W,Q],styles:[".error-msg[_ngcontent-%COMP%]{position:absolute;font-size:15px;margin:0}.errorMsg[_ngcontent-%COMP%]{color:red;font-size:15px;margin:0}.card-header[_ngcontent-%COMP%], .card-body[_ngcontent-%COMP%]{background-color:#e4e4e4;border:none}.card-body-form[_ngcontent-%COMP%]{background-color:#e4e4e4;border:none;height:890px;padding:16px}.card-top[_ngcontent-%COMP%]{margin:150px 0}.btn-sel[_ngcontent-%COMP%]{width:280px;transition:opacity .2s ease;background-color:#fff;border-radius:5px}.btn-sel[_ngcontent-%COMP%]:hover{opacity:.3}.img-btn-sel[_ngcontent-%COMP%]{width:220px}.h1-custom[_ngcontent-%COMP%]{font-weight:900;font-size:30px;color:#183058}.btn-custom[_ngcontent-%COMP%]{background-color:#183058;color:#fff}.btn-reg[_ngcontent-%COMP%]{background-color:#fff}.spinner-bg[_ngcontent-%COMP%]{height:258px;display:flex;justify-content:center}"]})}}return e})();export{nt as RegistroAdminComponent};
