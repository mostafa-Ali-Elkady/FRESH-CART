"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[697],{697:(O,g,s)=>{s.r(g),s.d(g,{ProductsComponent:()=>M});var l=s(6895),p=s(2080),m=s(4349),c=s(433),d=s(4333),t=s(1571),h=s(9531),C=s(910),P=s(2018);function v(i,a){if(1&i&&t._UZ(0,"i",20),2&i){const e=a.$implicit,o=t.oxw().$implicit;t.ekj("rating-color",o.ratingsAverage>=e)}}const x=function(i){return["/product-details",i]},f=function(){return[1,2,3,4,5]},T=function(i){return{"text-danger":i}};function A(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",7)(1,"div",8)(2,"a",9),t._UZ(3,"img",10),t.TgZ(4,"div",11)(5,"p",12),t._uU(6),t.qZA(),t.TgZ(7,"h5",13),t._uU(8),t.qZA(),t.TgZ(9,"div",14)(10,"span"),t._uU(11),t.qZA(),t.TgZ(12,"div"),t.YNc(13,v,1,2,"i",15),t.TgZ(14,"span"),t._uU(15),t.qZA()()()()(),t.TgZ(16,"button",16,17),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.MAs(17),_=t.oxw();return t.KtG(_.addToCart(r._id,u))}),t._uU(18," + Add TO Cart "),t.qZA(),t.TgZ(19,"i",18,19),t.NdJ("click",function(){const r=t.CHM(e).$implicit,u=t.MAs(20),_=t.oxw();return t.KtG(_.addToWishlist(r._id,u))}),t.qZA()()()}if(2&i){const e=a.$implicit,o=t.oxw();let n,r;t.xp6(2),t.Q6J("routerLink",t.VKq(8,x,e._id)),t.xp6(1),t.Q6J("src",null==e?null:e.imageCover,t.LSH),t.xp6(3),t.hij(" ",e.category.name," "),t.xp6(2),t.hij(" ",null==e||null==e.title||null==(n=e.title.split(" "))||null==(r=n.slice(0,2))?null:r.join(" ")," "),t.xp6(3),t.hij("",e.price," EGP"),t.xp6(2),t.Q6J("ngForOf",t.DdM(10,f)),t.xp6(2),t.Oqu(e.ratingsAverage),t.xp6(4),t.Q6J("ngClass",t.VKq(11,T,o.wishlistData.includes(e._id)))}}const E=function(i,a,e){return{id:"productPagination",itemsPerPage:i,currentPage:a,totalItems:e}};let M=(()=>{class i{constructor(e,o,n,r){this._productsService=e,this._CartService=o,this._ToastrService=n,this._Renderer2=r,this.allProducts=[],this.searchWord="",this.pageSize=0,this.currentPage=0,this.total=0,this.wishlistData=[]}ngOnInit(){this.getAllProducts(),this._CartService.getUserWishlist().subscribe({next:e=>{const o=e.data.map(n=>n._id);this.wishlistData=o}})}getAllProducts(e=1){this._productsService.getAllProducts(e).subscribe({next:o=>{this.allProducts=o.data,this.pageSize=o.metadata.limit,this.currentPage=o.metadata.currentPage,this.total=o.results}})}addToWishlist(e,o){this._CartService.addToWishlist(e).subscribe({next:n=>{this._ToastrService.success(n.message),this._Renderer2.setStyle(o,"color","red"),this._CartService.wishlistNumber.next(n.data.length),this.wishlistData=n.data}})}addToCart(e,o){this._Renderer2.setAttribute(o,"disabled","true"),this._CartService.addToCart(e).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message),this._CartService.cartNumber.next(n.numOfCartItems),this._Renderer2.removeAttribute(o,"disabled")},error:n=>{this._Renderer2.removeAttribute(o,"disabled")}})}pageChanged(e){console.log(e),this.getAllProducts(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.R),t.Y36(C.N),t.Y36(P._W),t.Y36(t.Qsj))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-products"]],standalone:!0,features:[t.jDz],decls:12,vars:20,consts:[[1,"products"],[1,"text-center","my-5","heading","txt-color"],["type","text","placeholder","Search By Product Name",1,"form-control","mx-auto","my-4","rounded","txt-color","bg-color","searchInput",3,"ngModel","ngModelChange"],[1,"d-flex","justify-content-center"],["id","productPagination","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"row","g-2","my-5"],["class","col-xl-2 col-lg-3 col-md-4 col-sm-6 my-2","role","button",4,"ngFor","ngForOf"],["role","button",1,"col-xl-2","col-lg-3","col-md-4","col-sm-6","my-2"],[1,"product","position-relative"],[1,"txt-color","text-decoration-none",3,"routerLink"],["alt","product-image",1,"w-100",3,"src"],[1,"content","p-2"],[1,"text-main","fw-normnal","mt-3","txt-color","my-0"],[1,"txt-color","h6"],[1,"d-flex","justify-content-between","txt-color","font-sm"],["class","fa fa-star ",3,"rating-color",4,"ngFor","ngForOf"],[1,"btn","bg-main","text-white",3,"click"],["addBtn",""],["role","a",1,"fa-solid","fa-heart","position-absolute","loveIcon",3,"ngClass","click"],["addtowishlist",""],[1,"fa","fa-star"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2,"Shop With Our Products"),t.qZA(),t.TgZ(3,"input",2),t.NdJ("ngModelChange",function(r){return o.searchWord=r}),t.qZA(),t.TgZ(4,"div",3)(5,"pagination-controls",4),t.NdJ("pageChange",function(r){return o.pageChanged(r)})("pageBoundsCorrection",function(r){return o.pageChanged(r)}),t.qZA()(),t.TgZ(6,"div",5),t.YNc(7,A,21,13,"div",6),t.ALo(8,"searchPipe"),t.ALo(9,"paginate"),t.qZA(),t.TgZ(10,"div",3)(11,"pagination-controls",4),t.NdJ("pageChange",function(r){return o.pageChanged(r)})("pageBoundsCorrection",function(r){return o.pageChanged(r)}),t.qZA()()()),2&e&&(t.xp6(3),t.Q6J("ngModel",o.searchWord),t.xp6(2),t.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0),t.xp6(2),t.Q6J("ngForOf",t.xi3(8,10,t.xi3(9,13,o.allProducts,t.kEZ(16,E,o.pageSize,o.currentPage,o.total)),o.searchWord)),t.xp6(4),t.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0))},dependencies:[l.ez,l.mk,l.sg,m.rH,c.u5,c.Fj,c.JJ,c.On,p.C,d.JX,d._s,d.LS],styles:[".searchInput[_ngcontent-%COMP%]{width:min(450px,100%)}.loveIcon[_ngcontent-%COMP%]{top:1rem;right:1rem;color:var(--main-color);font-size:1.5rem;cursor:pointer;z-index:100}"]}),i})()}}]);