"use strict";(self.webpackChunkordersystem=self.webpackChunkordersystem||[]).push([[330],{2330:(w,l,i)=>{i.r(l),i.d(l,{SigninModule:()=>f});var d=i(8583),r=i(665),p=i(2921),n=i(7716),g=i(7556),m=i(4471);function u(e,s){1&e&&(n.TgZ(0,"span",7),n._uU(1,"Email Adresse ist erforderlich"),n.qZA())}function c(e,s){1&e&&(n.TgZ(0,"span",7),n._uU(1,"Passwort ist erforderlich"),n.qZA())}function C(e,s){if(1&e&&(n.TgZ(0,"span",8),n._uU(1),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Oqu(t.responseError)}}const h=[{path:"",component:(()=>{class e{constructor(t,o){this.auth=t,this.loading=o,this.emailControl=new r.NI("",[r.kI.required]),this.passwordControl=new r.NI("",[r.kI.required])}ngOnInit(){this.loading.deactivateLoading()}login(){this.emailControl.valid&&this.passwordControl.valid&&(this.loading.activateLoading(),this.auth.signInWithEmailAndPassword(this.emailControl.value,this.passwordControl.value).then(t=>{}).catch(t=>{this.loading.deactivateLoading(),this.responseError=t.message}))}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(g.e),n.Y36(m.b))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-signin"]],decls:17,vars:10,consts:[[1,"input-wrapper"],["name","email","placeholder","E-Mail Adresse","type","email",3,"formControl","keydown.enter"],["class","error",4,"ngIf"],["name","password","placeholder","Passwort","type","password",3,"formControl","keydown.enter"],["class","error","id","responseError",4,"ngIf"],["id","button-wrapper"],[1,"button","btn-primary",3,"disabled","click","keydown.enter"],[1,"error"],["id","responseError",1,"error"]],template:function(t,o){1&t&&(n.TgZ(0,"h1"),n._uU(1,"Ordersystem"),n.qZA(),n.TgZ(2,"form"),n.TgZ(3,"div",0),n.TgZ(4,"label"),n._uU(5,"E-Mail Adresse"),n.qZA(),n.TgZ(6,"input",1),n.NdJ("keydown.enter",function(){return o.login()}),n.qZA(),n.YNc(7,u,2,0,"span",2),n.qZA(),n.TgZ(8,"div",0),n.TgZ(9,"label"),n._uU(10,"Passwort"),n.qZA(),n.TgZ(11,"input",3),n.NdJ("keydown.enter",function(){return o.login()}),n.qZA(),n.YNc(12,c,2,0,"span",2),n.qZA(),n.qZA(),n.YNc(13,C,2,1,"span",4),n.TgZ(14,"div",5),n.TgZ(15,"button",6),n.NdJ("click",function(){return o.login()})("keydown.enter",function(){return o.login()}),n._uU(16,"Anmelden "),n.qZA(),n.qZA()),2&t&&(n.xp6(6),n.ekj("invalid",o.emailControl.errors&&o.emailControl.touched),n.Q6J("formControl",o.emailControl),n.xp6(1),n.Q6J("ngIf",o.emailControl.hasError("required")&&o.emailControl.touched),n.xp6(4),n.ekj("invalid",o.passwordControl.errors&&o.passwordControl.touched),n.Q6J("formControl",o.passwordControl),n.xp6(1),n.Q6J("ngIf",o.passwordControl.hasError("required")&&o.passwordControl.touched),n.xp6(1),n.Q6J("ngIf",o.responseError),n.xp6(2),n.Q6J("disabled",!o.emailControl.valid||!o.passwordControl.valid))},directives:[r.vK,r.JL,r.Fj,r.JJ,r.oH,d.O5],styles:["[_nghost-%COMP%]{width:100%;display:flex;justify-content:flex-start;align-items:center;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]{width:80%;display:flex;flex-direction:column;margin:0 0 3vh}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin:0 0 1vh}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:.65em;box-shadow:var(--box-shadow);background:transparent;box-sizing:border-box;outline:none;border:none;border-bottom:2px solid lightgray;border-radius:5px;transition:border-color .3s ease-in-out}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:var(--primary)}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{border-color:var(--danger)!important}[_nghost-%COMP%]   #responseError[_ngcontent-%COMP%]{width:80%;margin-bottom:2vh}[_nghost-%COMP%]   #button-wrapper[_ngcontent-%COMP%]{width:80%;display:flex;justify-content:flex-end}[_nghost-%COMP%]   #registerLink[_ngcontent-%COMP%]{margin-top:2vh}"]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({factory:function(t){return new(t||e)},imports:[[d.ez,p.Bz.forChild(h),r.UX]]}),e})()}}]);