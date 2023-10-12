"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[431],{5431:(W,T,u)=>{u.r(T),u.d(T,{SignupComponent:()=>B});var d=u(6895),o=u(433),v=u(4349),e=u(1571),C=u(4377),w=u(2018);function A(r,i){if(1&r&&(e.TgZ(0,"div",20)(1,"p",21),e._uU(2),e.ALo(3,"json"),e.qZA()()),2&r){const l=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,1,l.apiError))}}function I(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," Name is Required "),e.qZA())}function E(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," Max Length is 10 Character "),e.qZA())}function F(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," Min Length is 3 Character "),e.qZA())}function S(r,i){if(1&r&&(e.TgZ(0,"div",22),e.YNc(1,I,2,0,"p",23),e.YNc(2,E,2,0,"p",23),e.YNc(3,F,2,0,"p",23),e.qZA()),2&r){const l=e.oxw();let n,t,_;e.xp6(1),e.Q6J("ngIf",null==(n=l.registerForm.get("name"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=l.registerForm.get("name"))?null:t.getError("maxlength")),e.xp6(1),e.Q6J("ngIf",null==(_=l.registerForm.get("name"))?null:_.getError("minlength"))}}function U(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," Email is required "),e.qZA())}function q(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," Email is inValid "),e.qZA())}function N(r,i){if(1&r&&(e.TgZ(0,"div",22),e.YNc(1,U,2,0,"p",23),e.YNc(2,q,2,0,"p",23),e.qZA()),2&r){const l=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=l.registerForm.get("email"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=l.registerForm.get("email"))?null:t.getError("email"))}}function x(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," Password is required "),e.qZA())}function J(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," must be "),e._UZ(2,"br"),e._uU(3," * Start with a letter (either uppercase or lowercase). "),e._UZ(4,"br"),e._uU(5," * Be between 6 and 15 characters in total. "),e._UZ(6,"br"),e._uU(7," * Can only contain letters (A-Z or a-z) and numbers (0-9) "),e.qZA())}function b(r,i){if(1&r&&(e.TgZ(0,"div",22),e.YNc(1,x,2,0,"p",23),e.YNc(2,J,8,0,"p",23),e.qZA()),2&r){const l=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=l.registerForm.get("password"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=l.registerForm.get("password"))?null:t.getError("pattern"))}}function P(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," rePassword is required "),e.qZA())}function Q(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," must be "),e._UZ(2,"br"),e._uU(3," * Start with a letter (either uppercase or lowercase). "),e._UZ(4,"br"),e._uU(5," * Be between 6 and 9 characters in total. "),e._UZ(6,"br"),e._uU(7," * Can only contain letters (A-Z or a-z) and numbers (0-9) "),e.qZA())}function L(r,i){if(1&r&&(e.TgZ(0,"div",22),e.YNc(1,P,2,0,"p",23),e.YNc(2,Q,8,0,"p",23),e.qZA()),2&r){const l=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=l.registerForm.get("rePassword"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=l.registerForm.get("rePassword"))?null:t.getError("pattern"))}}function Y(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," phone is required "),e.qZA())}function y(r,i){1&r&&(e.TgZ(0,"p",24),e._uU(1," phone is Invalid "),e.qZA())}function D(r,i){if(1&r&&(e.TgZ(0,"div",22),e.YNc(1,Y,2,0,"p",23),e.YNc(2,y,2,0,"p",23),e.qZA()),2&r){const l=e.oxw();let n,t;e.xp6(1),e.Q6J("ngIf",null==(n=l.registerForm.get("phone"))?null:n.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(t=l.registerForm.get("phone"))?null:t.getError("pattern"))}}function M(r,i){1&r&&e._UZ(0,"i",25)}function O(r,i){1&r&&(e.TgZ(0,"span"),e._uU(1,"SignUp"),e.qZA())}const m=function(r,i){return{"is-invalid":r,"is-valid":i}};let B=(()=>{class r{constructor(l,n,t){this._AuthService=l,this._Router=n,this._ToastrService=t,this.isLoading=!1,this.apiError="",this.registerForm=new o.cw({name:new o.NI(null,[o.kI.required,o.kI.maxLength(10),o.kI.minLength(3)]),email:new o.NI(null,[o.kI.required,o.kI.email]),password:new o.NI(null,[o.kI.required,o.kI.pattern(/^[A-Za-z0-9]{6,15}$/)]),rePassword:new o.NI(null,[o.kI.required,o.kI.pattern(/^[A-Za-z0-9]{6,15}$/)]),phone:new o.NI(null,[o.kI.required,o.kI.pattern(/^01[0125][0-9]{8}$/)])}),null!==localStorage.getItem("userToken")&&(n.navigate(["/home"]),this._ToastrService.success())}handleRegister(l){this.isLoading=!0,console.log(l.value),l.valid&&(localStorage.setItem("username",l.value.name),this._AuthService.userName.next(l.value.name),this._AuthService.register(l.value).subscribe({next:n=>{"success"===n.message&&(this.isLoading=!1,this._Router.navigate(["/login"]))},error:n=>{this.isLoading=!1,409===n.status?(this.apiError=n.error.message,console.log(n)):(this.apiError=n.error.errors.msg,console.log(n))}}))}clearApiError(){this.apiError=""}}return r.\u0275fac=function(l){return new(l||r)(e.Y36(C.e),e.Y36(v.F0),e.Y36(w._W))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-signup"]],standalone:!0,features:[e.jDz],decls:32,vars:30,consts:[[1,"mx-auto","my-5",3,"formGroup","ngSubmit"],[1,"title"],["class","alert alert-danger",4,"ngIf"],["for","name",1,"fw-bold","txt-color"],["type","text","id","name","placeholder","Name","formControlName","name",1,"form-control","my-2",3,"ngClass","input"],["class","alert alert-danger p-1",4,"ngIf"],["for","email",1,"fw-bold","txt-color"],["type","text","id","email","placeholder","Email","formControlName","email",1,"form-control","my-2",3,"ngClass","input"],["for","password",1,"fw-bold","txt-color"],["type","password","id","password","placeholder","password","formControlName","password",1,"form-control","my-2",3,"ngClass","input"],["for","rePassword",1,"fw-bold","txt-color"],["type","password","id","rePassword","placeholder","Confirm Password","formControlName","rePassword",1,"form-control","my-2",3,"ngClass","input"],["for","phone",1,"fw-bold","txt-color"],["type","tel","id","phone","placeholder","phone","formControlName","phone",1,"form-control","my-2",3,"ngClass","input"],[1,"d-flex","justify-content-center","align-items-center","pt-2","flex-column"],[1,"signup","fs-6","txt-grey"],["routerLink","/login",1,"text-main"],["type","submit",1,"btn","bg-main","text-white",3,"disabled"],["class","fa fa-spinner fa-spin",4,"ngIf"],[4,"ngIf"],[1,"alert","alert-danger"],[1,"m-0","p-0","text-danger"],[1,"alert","alert-danger","p-1"],["class","m-0 text-danger",4,"ngIf"],[1,"m-0","text-danger"],[1,"fa","fa-spinner","fa-spin"]],template:function(l,n){if(1&l&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return n.handleRegister(n.registerForm)}),e.TgZ(1,"h3",1),e._uU(2,"SignUp "),e.qZA(),e.YNc(3,A,4,3,"div",2),e.TgZ(4,"label",3),e._uU(5,"Name"),e.qZA(),e.TgZ(6,"input",4),e.NdJ("input",function(){return n.clearApiError()}),e.qZA(),e.YNc(7,S,4,3,"div",5),e.TgZ(8,"label",6),e._uU(9,"Email"),e.qZA(),e.TgZ(10,"input",7),e.NdJ("input",function(){return n.clearApiError()}),e.qZA(),e.YNc(11,N,3,2,"div",5),e.TgZ(12,"label",8),e._uU(13,"password"),e.qZA(),e.TgZ(14,"input",9),e.NdJ("input",function(){return n.clearApiError()}),e.qZA(),e.YNc(15,b,3,2,"div",5),e.TgZ(16,"label",10),e._uU(17,"Confirm Password"),e.qZA(),e.TgZ(18,"input",11),e.NdJ("input",function(){return n.clearApiError()}),e.qZA(),e.YNc(19,L,3,2,"div",5),e.TgZ(20,"label",12),e._uU(21,"phone"),e.qZA(),e.TgZ(22,"input",13),e.NdJ("input",function(){return n.clearApiError()}),e.qZA(),e.YNc(23,D,3,2,"div",5),e.TgZ(24,"div",14)(25,"p",15),e._uU(26,"Do You have an account? "),e.TgZ(27,"a",16),e._uU(28,"Login"),e.qZA()(),e.TgZ(29,"button",17),e.YNc(30,M,1,0,"i",18),e.YNc(31,O,2,0,"span",19),e.qZA()()()),2&l){let t,_,p,c,a,f,s,h,g,Z;e.Q6J("formGroup",n.registerForm),e.xp6(3),e.Q6J("ngIf",n.apiError),e.xp6(3),e.Q6J("ngClass",e.WLB(15,m,(null==(t=n.registerForm.get("name"))?null:t.invalid)&&(null==(t=n.registerForm.get("name"))?null:t.touched),(null==(t=n.registerForm.get("name"))?null:t.valid)&&(null==(t=n.registerForm.get("name"))?null:t.touched))),e.xp6(1),e.Q6J("ngIf",(null==(_=n.registerForm.get("name"))?null:_.errors)&&(null==(_=n.registerForm.get("name"))?null:_.touched)),e.xp6(3),e.Q6J("ngClass",e.WLB(18,m,(null==(p=n.registerForm.get("email"))?null:p.invalid)&&(null==(p=n.registerForm.get("email"))?null:p.touched),(null==(p=n.registerForm.get("email"))?null:p.valid)&&(null==(p=n.registerForm.get("email"))?null:p.touched))),e.xp6(1),e.Q6J("ngIf",(null==(c=n.registerForm.get("email"))?null:c.errors)&&(null==(c=n.registerForm.get("email"))?null:c.touched)),e.xp6(3),e.Q6J("ngClass",e.WLB(21,m,(null==(a=n.registerForm.get("password"))?null:a.invalid)&&(null==(a=n.registerForm.get("password"))?null:a.touched),(null==(a=n.registerForm.get("password"))?null:a.valid)&&(null==(a=n.registerForm.get("password"))?null:a.touched))),e.xp6(1),e.Q6J("ngIf",(null==(f=n.registerForm.get("password"))?null:f.errors)&&(null==(f=n.registerForm.get("password"))?null:f.touched)),e.xp6(3),e.Q6J("ngClass",e.WLB(24,m,(null==(s=n.registerForm.get("rePassword"))?null:s.invalid)&&(null==(s=n.registerForm.get("rePassword"))?null:s.touched),(null==(s=n.registerForm.get("rePassword"))?null:s.valid)&&(null==(s=n.registerForm.get("rePassword"))?null:s.touched))),e.xp6(1),e.Q6J("ngIf",(null==(h=n.registerForm.get("rePassword"))?null:h.errors)&&(null==(h=n.registerForm.get("rePassword"))?null:h.touched)),e.xp6(3),e.Q6J("ngClass",e.WLB(27,m,(null==(g=n.registerForm.get("phone"))?null:g.invalid)&&(null==(g=n.registerForm.get("phone"))?null:g.touched),(null==(g=n.registerForm.get("phone"))?null:g.valid)&&(null==(g=n.registerForm.get("phone"))?null:g.touched))),e.xp6(1),e.Q6J("ngIf",(null==(Z=n.registerForm.get("phone"))?null:Z.errors)&&(null==(Z=n.registerForm.get("phone"))?null:Z.touched)),e.xp6(6),e.Q6J("disabled",n.registerForm.invalid),e.xp6(1),e.Q6J("ngIf",n.isLoading),e.xp6(1),e.Q6J("ngIf",!n.isLoading)}},dependencies:[d.ez,d.mk,d.O5,d.Ts,v.rH,o.UX,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u]}),r})()}}]);