(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Spgw:function(t,e,o){"use strict";o.r(e),o.d(e,"MarketingModule",function(){return V}),o.d(e,"PromotionDetailComponent",function(){return L}),o.d(e,"PromotionListComponent",function(){return N}),o.d(e,"PromotionResolver",function(){return U}),o.d(e,"marketingRoutes",function(){return M}),o.d(e,"promotionBreadcrumb",function(){return B}),o.d(e,"\u02750",function(){return $}),o.d(e,"\u02751",function(){return Z});var n=o("EM62"),c=o("nIj0"),i=o("sEIs"),r=o("OxKu"),a=o("ixhn"),s=o("J+dc"),d=o("cJ9h"),l=o("mWib"),m=o("kuMc"),u=o("TLy2"),p=o("g6G6"),b=o("6Oco"),f=o("2kYt"),h=o("Kej3"),g=o("s2Ay");const v=function(){return["enabled"]};function y(t,e){if(1&t&&(n.lc(0,"clr-toggle-wrapper"),n.gc(1,"input",23),n.lc(2,"label"),n.bd(3),n.yc(4,"translate"),n.kc(),n.kc()),2&t){const t=n.xc();n.Tb(1),n.Ec("formControl",t.detailForm.get(n.Hc(4,v))),n.Tb(2),n.cd(n.zc(4,2,"common.enabled"))}}function k(t,e){if(1&t){const t=n.mc();n.lc(0,"button",24),n.vc("click",function(){n.Sc(t);return n.xc().create()}),n.bd(1),n.yc(2,"translate"),n.kc()}if(2&t){const t=n.xc();n.Ec("disabled",!t.saveButtonEnabled()),n.Tb(1),n.dd(" ",n.zc(2,2,"common.create")," ")}}function C(t,e){if(1&t){const t=n.mc();n.lc(0,"button",24),n.vc("click",function(){n.Sc(t);return n.xc(2).save()}),n.bd(1),n.yc(2,"translate"),n.kc()}if(2&t){const t=n.xc(2);n.Ec("disabled",!t.saveButtonEnabled()),n.Tb(1),n.dd(" ",n.zc(2,2,"common.update")," ")}}function P(t,e){1&t&&n.Zc(0,C,3,4,"button",25),2&t&&n.Ec("vdrIfPermissions","UpdatePromotion")}function T(t,e){if(1&t){const t=n.mc();n.jc(0),n.lc(1,"vdr-configurable-input",26),n.vc("remove",function(e){n.Sc(t);return n.xc().removeCondition(e)}),n.yc(2,"hasPermission"),n.kc(),n.ic()}if(2&t){const t=e.$implicit,o=e.index,c=n.xc();n.Tb(1),n.Ec("readonly",!n.zc(2,4,"UpdatePromotion"))("operation",t)("operationDefinition",c.getConditionDefinition(t))("formControlName",o)}}function O(t,e){if(1&t){const t=n.mc();n.lc(0,"button",31),n.vc("click",function(){n.Sc(t);const o=e.$implicit;return n.xc(2).addCondition(o)}),n.bd(1),n.kc()}if(2&t){const t=e.$implicit;n.Tb(1),n.dd(" ",t.description," ")}}function A(t,e){if(1&t&&(n.lc(0,"vdr-dropdown"),n.lc(1,"button",27),n.gc(2,"clr-icon",28),n.bd(3),n.yc(4,"translate"),n.kc(),n.lc(5,"vdr-dropdown-menu",29),n.Zc(6,O,2,1,"button",30),n.kc(),n.kc()),2&t){const t=n.xc();n.Tb(3),n.dd(" ",n.zc(4,2,"marketing.add-condition")," "),n.Tb(3),n.Ec("ngForOf",t.getAvailableConditions())}}function E(t,e){if(1&t){const t=n.mc();n.lc(0,"vdr-configurable-input",32),n.vc("remove",function(e){n.Sc(t);return n.xc().removeAction(e)}),n.yc(1,"hasPermission"),n.kc()}if(2&t){const t=e.$implicit,o=e.index,c=n.xc();n.Ec("operation",t)("readonly",!n.zc(1,4,"UpdatePromotion"))("operationDefinition",c.getActionDefinition(t))("formControlName",o)}}function w(t,e){if(1&t){const t=n.mc();n.lc(0,"button",31),n.vc("click",function(){n.Sc(t);const o=e.$implicit;return n.xc(2).addAction(o)}),n.bd(1),n.kc()}if(2&t){const t=e.$implicit;n.Tb(1),n.dd(" ",t.description," ")}}function I(t,e){if(1&t&&(n.lc(0,"vdr-dropdown"),n.lc(1,"button",27),n.gc(2,"clr-icon",28),n.bd(3),n.yc(4,"translate"),n.kc(),n.lc(5,"vdr-dropdown-menu",29),n.Zc(6,w,2,1,"button",30),n.kc(),n.kc()),2&t){const t=n.xc();n.Tb(3),n.dd(" ",n.zc(4,2,"marketing.add-action")," "),n.Tb(3),n.Ec("ngForOf",t.getAvailableActions())}}const D=function(){return["./create"]};function F(t,e){1&t&&(n.lc(0,"a",6),n.gc(1,"clr-icon",7),n.bd(2),n.yc(3,"translate"),n.kc()),2&t&&(n.Ec("routerLink",n.Hc(4,D)),n.Tb(2),n.dd(" ",n.zc(3,2,"marketing.create-new-promotion")," "))}function z(t,e){if(1&t&&(n.lc(0,"vdr-chip"),n.bd(1),n.kc()),2&t){const t=n.xc().item;n.Tb(1),n.dd(" ",t.couponCode," ")}}function x(t,e){1&t&&(n.lc(0,"vdr-chip"),n.bd(1),n.yc(2,"translate"),n.kc()),2&t&&(n.Tb(1),n.cd(n.zc(2,1,"common.disabled")))}const j=function(t){return["./",t]};function S(t,e){if(1&t){const t=n.mc();n.lc(0,"td",8),n.bd(1),n.kc(),n.lc(2,"td",8),n.Zc(3,z,2,1,"vdr-chip",9),n.kc(),n.lc(4,"td",8),n.bd(5),n.yc(6,"localeDate"),n.kc(),n.lc(7,"td",8),n.bd(8),n.yc(9,"localeDate"),n.kc(),n.lc(10,"td",10),n.Zc(11,x,3,3,"vdr-chip",9),n.kc(),n.lc(12,"td",11),n.gc(13,"vdr-table-row-action",12),n.yc(14,"translate"),n.kc(),n.lc(15,"td",11),n.lc(16,"vdr-dropdown"),n.lc(17,"button",13),n.bd(18),n.yc(19,"translate"),n.gc(20,"clr-icon",14),n.kc(),n.lc(21,"vdr-dropdown-menu",15),n.lc(22,"button",16),n.vc("click",function(){n.Sc(t);const o=e.item;return n.xc().deletePromotion(o.id)}),n.yc(23,"hasPermission"),n.gc(24,"clr-icon",17),n.bd(25),n.yc(26,"translate"),n.kc(),n.kc(),n.kc(),n.kc()}if(2&t){const t=e.item;n.Tb(1),n.cd(t.name),n.Tb(2),n.Ec("ngIf",t.couponCode),n.Tb(2),n.cd(n.Ac(6,10,t.startsAt,"longDate")),n.Tb(3),n.cd(n.Ac(9,13,t.endsAt,"longDate")),n.Tb(3),n.Ec("ngIf",!t.enabled),n.Tb(2),n.Ec("label",n.zc(14,16,"common.edit"))("linkTo",n.Ic(24,j,t.id)),n.Tb(5),n.dd(" ",n.zc(19,18,"common.actions")," "),n.Tb(4),n.Ec("disabled",!n.zc(23,20,"DeletePromotion")),n.Tb(3),n.dd(" ",n.zc(26,22,"common.delete")," ")}}class L extends a.w{constructor(t,e,o,n,i,r,a){super(e,t,o,i),this.changeDetector=n,this.dataService=i,this.formBuilder=r,this.notificationService=a,this.conditions=[],this.actions=[],this.allConditions=[],this.allActions=[],this.detailForm=this.formBuilder.group({name:["",c.C.required],enabled:!0,couponCode:null,perCustomerUsageLimit:null,startsAt:null,endsAt:null,conditions:this.formBuilder.array([]),actions:this.formBuilder.array([])})}ngOnInit(){this.init(),this.promotion$=this.entity$,this.dataService.promotion.getPromotionActionsAndConditions().single$.subscribe(t=>{this.allActions=t.promotionActions,this.allConditions=t.promotionConditions,this.changeDetector.markForCheck()})}ngOnDestroy(){this.destroy()}getAvailableConditions(){return this.allConditions.filter(t=>!this.conditions.find(e=>e.code===t.code))}getConditionDefinition(t){return this.allConditions.find(e=>e.code===t.code)}getAvailableActions(){return this.allActions.filter(t=>!this.actions.find(e=>e.code===t.code))}getActionDefinition(t){return this.allActions.find(e=>e.code===t.code)}saveButtonEnabled(){return this.detailForm.dirty&&this.detailForm.valid&&(0!==this.conditions.length||this.detailForm.value.couponCode)&&0!==this.actions.length}addCondition(t){this.addOperation("conditions",t),this.detailForm.markAsDirty()}addAction(t){this.addOperation("actions",t),this.detailForm.markAsDirty()}removeCondition(t){this.removeOperation("conditions",t),this.detailForm.markAsDirty()}removeAction(t){this.removeOperation("actions",t),this.detailForm.markAsDirty()}formArrayOf(t){return this.detailForm.get(t)}create(){if(!this.detailForm.dirty)return;const t=this.detailForm.value,e={name:t.name,enabled:!0,couponCode:t.couponCode,perCustomerUsageLimit:t.perCustomerUsageLimit,startsAt:t.startsAt,endsAt:t.endsAt,conditions:this.mapOperationsToInputs(this.conditions,t.conditions),actions:this.mapOperationsToInputs(this.actions,t.actions)};this.dataService.promotion.createPromotion(e).subscribe(({createPromotion:t})=>{switch(t.__typename){case"Promotion":this.notificationService.success(Object(r.a)("common.notify-create-success"),{entity:"Promotion"}),this.detailForm.markAsPristine(),this.changeDetector.markForCheck(),this.router.navigate(["../",t.id],{relativeTo:this.route});break;case"MissingConditionsError":this.notificationService.error(t.message)}},t=>{this.notificationService.error(Object(r.a)("common.notify-create-error"),{entity:"Promotion"})})}save(){if(!this.detailForm.dirty)return;const t=this.detailForm.value;this.promotion$.pipe(Object(s.a)(1),Object(d.a)(e=>{const o={id:e.id,name:t.name,enabled:t.enabled,couponCode:t.couponCode,perCustomerUsageLimit:t.perCustomerUsageLimit,startsAt:t.startsAt,endsAt:t.endsAt,conditions:this.mapOperationsToInputs(this.conditions,t.conditions),actions:this.mapOperationsToInputs(this.actions,t.actions)};return this.dataService.promotion.updatePromotion(o)})).subscribe(t=>{this.notificationService.success(Object(r.a)("common.notify-update-success"),{entity:"Promotion"}),this.detailForm.markAsPristine(),this.changeDetector.markForCheck()},t=>{this.notificationService.error(Object(r.a)("common.notify-update-error"),{entity:"Promotion"})})}setFormValues(t,e){this.detailForm.patchValue({name:t.name,enabled:t.enabled,couponCode:t.couponCode,perCustomerUsageLimit:t.perCustomerUsageLimit,startsAt:t.startsAt,endsAt:t.endsAt}),t.conditions.forEach(t=>{this.addOperation("conditions",t)}),t.actions.forEach(t=>this.addOperation("actions",t))}mapOperationsToInputs(t,e){return t.map((t,o)=>({code:t.code,arguments:Object.values(e[o].args).map((e,o)=>({name:t.args[o].name,value:Object(a.dc)(e)}))}))}addOperation(t,e){const o=this.formArrayOf(t),n="conditions"===t?this.conditions:this.actions;if(-1===o.value.findIndex(t=>t.code===e.code)){const c=e.args.reduce((o,n)=>{var c;return Object.assign(Object.assign({},o),{[n.name]:null!==(c=Object(a.hc)(n.value))&&void 0!==c?c:this.getDefaultArgValue(t,e,n.name)})},{});o.push(this.formBuilder.control({code:e.code,args:c})),n.push({code:e.code,args:e.args.map(t=>({name:t.name,value:Object(a.hc)(t.value)}))})}}getDefaultArgValue(t,e,o){const n="conditions"===t?this.allConditions.find(t=>t.code===e.code):this.allActions.find(t=>t.code===e.code);if(n){const t=n.args.find(t=>t.name===o);if(t)return Object(a.ic)(t)}throw new Error('Could not determine default value for "argName"')}removeOperation(t,e){const o=this.formArrayOf(t),n="conditions"===t?this.conditions:this.actions,c=o.value.findIndex(t=>t.code===e.code);-1!==c&&(o.removeAt(c),n.splice(c,1))}}L.\u0275fac=function(t){return new(t||L)(n.fc(i.e),n.fc(i.a),n.fc(a.Mb),n.fc(n.k),n.fc(a.L),n.fc(c.e),n.fc(a.Eb))},L.\u0275cmp=n.Zb({type:L,selectors:[["vdr-promotion-detail"]],features:[n.Qb],decls:46,vars:43,consts:[[1,"flex","clr-align-items-center"],[3,"entity"],[4,"vdrIfPermissions"],["locationId","promotion-detail"],["class","btn btn-primary",3,"disabled","click",4,"ngIf","ngIfElse"],["updateButton",""],[1,"form",3,"formGroup"],["for","name",3,"label"],["id","name","type","text","formControlName","name",3,"readonly"],["for","startsAt",3,"label"],["formControlName","startsAt"],["for","endsAt",3,"label"],["formControlName","endsAt"],["for","couponCode",3,"label"],["id","couponCode","type","text","formControlName","couponCode",3,"readonly"],["for","perCustomerUsageLimit",3,"label"],["id","perCustomerUsageLimit","type","number","min","1","max","999","formControlName","perCustomerUsageLimit",3,"readonly"],[1,"clr-row"],["formArrayName","conditions",1,"clr-col"],[1,"clr-control-label"],[4,"ngFor","ngForOf"],["formArrayName","actions",1,"clr-col"],[3,"operation","readonly","operationDefinition","formControlName","remove",4,"ngFor","ngForOf"],["type","checkbox","clrToggle","","name","enabled",3,"formControl"],[1,"btn","btn-primary",3,"disabled","click"],["class","btn btn-primary",3,"disabled","click",4,"vdrIfPermissions"],[3,"readonly","operation","operationDefinition","formControlName","remove"],["vdrDropdownTrigger","",1,"btn","btn-outline"],["shape","plus"],["vdrPosition","bottom-left"],["type","button","vdrDropdownItem","",3,"click",4,"ngFor","ngForOf"],["type","button","vdrDropdownItem","",3,"click"],[3,"operation","readonly","operationDefinition","formControlName","remove"]],template:function(t,e){if(1&t&&(n.lc(0,"vdr-action-bar"),n.lc(1,"vdr-ab-left"),n.lc(2,"div",0),n.gc(3,"vdr-entity-info",1),n.yc(4,"async"),n.Zc(5,y,5,5,"clr-toggle-wrapper",2),n.kc(),n.kc(),n.lc(6,"vdr-ab-right"),n.gc(7,"vdr-action-bar-items",3),n.Zc(8,k,3,4,"button",4),n.yc(9,"async"),n.Zc(10,P,1,1,"ng-template",null,5,n.ad),n.kc(),n.kc(),n.lc(12,"form",6),n.lc(13,"vdr-form-field",7),n.yc(14,"translate"),n.gc(15,"input",8),n.yc(16,"hasPermission"),n.kc(),n.lc(17,"vdr-form-field",9),n.yc(18,"translate"),n.gc(19,"vdr-datetime-picker",10),n.kc(),n.lc(20,"vdr-form-field",11),n.yc(21,"translate"),n.gc(22,"vdr-datetime-picker",12),n.kc(),n.lc(23,"vdr-form-field",13),n.yc(24,"translate"),n.gc(25,"input",14),n.yc(26,"hasPermission"),n.kc(),n.lc(27,"vdr-form-field",15),n.yc(28,"translate"),n.gc(29,"input",16),n.yc(30,"hasPermission"),n.kc(),n.lc(31,"div",17),n.lc(32,"div",18),n.lc(33,"label",19),n.bd(34),n.yc(35,"translate"),n.kc(),n.Zc(36,T,3,6,"ng-container",20),n.lc(37,"div"),n.Zc(38,A,7,4,"vdr-dropdown",2),n.kc(),n.kc(),n.lc(39,"div",21),n.lc(40,"label",19),n.bd(41),n.yc(42,"translate"),n.kc(),n.Zc(43,E,2,6,"vdr-configurable-input",22),n.lc(44,"div"),n.Zc(45,I,7,4,"vdr-dropdown",2),n.kc(),n.kc(),n.kc(),n.kc()),2&t){const t=n.Oc(11);n.Tb(3),n.Ec("entity",n.zc(4,19,e.entity$)),n.Tb(2),n.Ec("vdrIfPermissions","UpdatePromotion"),n.Tb(3),n.Ec("ngIf",n.zc(9,21,e.isNew$))("ngIfElse",t),n.Tb(4),n.Ec("formGroup",e.detailForm),n.Tb(1),n.Ec("label",n.zc(14,23,"common.name")),n.Tb(2),n.Ec("readonly",!n.zc(16,25,"UpdatePromotion")),n.Tb(2),n.Ec("label",n.zc(18,27,"marketing.starts-at")),n.Tb(3),n.Ec("label",n.zc(21,29,"marketing.ends-at")),n.Tb(3),n.Ec("label",n.zc(24,31,"marketing.coupon-code")),n.Tb(2),n.Ec("readonly",!n.zc(26,33,"UpdatePromotion")),n.Tb(2),n.Ec("label",n.zc(28,35,"marketing.per-customer-limit")),n.Tb(2),n.Ec("readonly",!n.zc(30,37,"UpdatePromotion")),n.Tb(5),n.cd(n.zc(35,39,"marketing.conditions")),n.Tb(2),n.Ec("ngForOf",e.conditions),n.Tb(2),n.Ec("vdrIfPermissions","UpdatePromotion"),n.Tb(3),n.cd(n.zc(42,41,"marketing.actions")),n.Tb(2),n.Ec("ngForOf",e.actions),n.Tb(2),n.Ec("vdrIfPermissions","UpdatePromotion")}},directives:[a.c,a.e,a.ab,a.qb,a.f,a.d,f.o,c.E,c.q,c.j,a.db,a.eb,c.b,c.p,c.h,a.O,c.v,c.d,h.u,f.n,h.k,c.a,h.i,c.g,a.E,a.T,a.W,h.o,a.V,a.U],pipes:[f.b,g.d,a.ib],styles:[""],changeDetection:0}),L.ctorParameters=()=>[{type:i.e},{type:i.a},{type:a.Mb},{type:n.k},{type:a.L},{type:c.e},{type:a.Eb}];class N extends a.y{constructor(t,e,o,n,i){super(e,o),this.dataService=t,this.notificationService=n,this.modalService=i,this.searchForm=new c.i({name:new c.f(""),couponCode:new c.f("")}),super.setQueryFn((...t)=>this.dataService.promotion.getPromotions(...t).refetchOnChannelChange(),t=>t.promotions,(t,e)=>this.createQueryOptions(t,e,this.searchForm.value))}ngOnInit(){super.ngOnInit(),Object(p.a)(this.searchForm.valueChanges.pipe(Object(l.a)(250)),this.route.queryParamMap).pipe(Object(m.a)(this.destroy$)).subscribe(t=>{t.params||this.setPageNumber(1),this.refresh()})}deletePromotion(t){this.modalService.dialog({title:Object(r.a)("catalog.confirm-delete-promotion"),buttons:[{type:"secondary",label:Object(r.a)("common.cancel")},{type:"danger",label:Object(r.a)("common.delete"),returnValue:!0}]}).pipe(Object(u.a)(e=>e?this.dataService.promotion.deletePromotion(t):b.a)).subscribe(()=>{this.notificationService.success(Object(r.a)("common.notify-delete-success"),{entity:"Promotion"}),this.refresh()},t=>{this.notificationService.error(Object(r.a)("common.notify-delete-error"),{entity:"Promotion"})})}createQueryOptions(t,e,o){const n={};return o.couponCode&&(n.couponCode={contains:o.couponCode}),o.name&&(n.name={contains:o.name}),{options:{skip:t,take:e,filter:n}}}}N.\u0275fac=function(t){return new(t||N)(n.fc(a.L),n.fc(i.e),n.fc(i.a),n.fc(a.Eb),n.fc(a.Db))},N.\u0275cmp=n.Zb({type:N,selectors:[["vdr-promotion-list"]],features:[n.Qb],decls:31,vars:32,consts:[[1,"search-form",3,"formGroup"],["type","text","formControlName","name",1,"search-input",3,"placeholder"],["type","text","formControlName","couponCode",1,"search-input",3,"placeholder"],["locationId","promotion-list"],["class","btn btn-primary",3,"routerLink",4,"vdrIfPermissions"],[3,"items","itemsPerPage","totalItems","currentPage","pageChange","itemsPerPageChange"],[1,"btn","btn-primary",3,"routerLink"],["shape","plus"],[1,"left","align-middle"],[4,"ngIf"],[1,"align-middle"],[1,"right","align-middle"],["iconShape","edit",3,"label","linkTo"],["type","button","vdrDropdownTrigger","",1,"btn","btn-link","btn-sm"],["shape","caret down"],["vdrPosition","bottom-right"],["type","button","vdrDropdownItem","",1,"delete-button",3,"disabled","click"],["shape","trash",1,"is-danger"]],template:function(t,e){1&t&&(n.lc(0,"vdr-action-bar"),n.lc(1,"vdr-ab-left"),n.lc(2,"form",0),n.gc(3,"input",1),n.yc(4,"translate"),n.gc(5,"input",2),n.yc(6,"translate"),n.kc(),n.kc(),n.lc(7,"vdr-ab-right"),n.gc(8,"vdr-action-bar-items",3),n.Zc(9,F,4,5,"a",4),n.kc(),n.kc(),n.lc(10,"vdr-data-table",5),n.vc("pageChange",function(t){return e.setPageNumber(t)})("itemsPerPageChange",function(t){return e.setItemsPerPage(t)}),n.yc(11,"async"),n.yc(12,"async"),n.yc(13,"async"),n.yc(14,"async"),n.lc(15,"vdr-dt-column"),n.bd(16),n.yc(17,"translate"),n.kc(),n.lc(18,"vdr-dt-column"),n.bd(19),n.yc(20,"translate"),n.kc(),n.lc(21,"vdr-dt-column"),n.bd(22),n.yc(23,"translate"),n.kc(),n.lc(24,"vdr-dt-column"),n.bd(25),n.yc(26,"translate"),n.kc(),n.gc(27,"vdr-dt-column"),n.gc(28,"vdr-dt-column"),n.gc(29,"vdr-dt-column"),n.Zc(30,S,27,26,"ng-template"),n.kc()),2&t&&(n.Tb(2),n.Ec("formGroup",e.searchForm),n.Tb(1),n.Ec("placeholder",n.zc(4,12,"marketing.search-by-name")),n.Tb(2),n.Ec("placeholder",n.zc(6,14,"marketing.search-by-coupon-code")),n.Tb(4),n.Ec("vdrIfPermissions","CreatePromotion"),n.Tb(1),n.Ec("items",n.zc(11,16,e.items$))("itemsPerPage",n.zc(12,18,e.itemsPerPage$))("totalItems",n.zc(13,20,e.totalItems$))("currentPage",n.zc(14,22,e.currentPage$)),n.Tb(6),n.cd(n.zc(17,24,"common.name")),n.Tb(3),n.cd(n.zc(20,26,"marketing.coupon-code")),n.Tb(3),n.cd(n.zc(23,28,"marketing.starts-at")),n.Tb(3),n.cd(n.zc(26,30,"marketing.ends-at")))},directives:[a.c,a.e,c.E,c.q,c.j,a.eb,c.b,c.p,c.h,a.f,a.d,a.qb,a.N,a.M,i.h,h.o,f.o,a.Tb,a.T,a.W,a.V,a.U,a.D],pipes:[g.d,f.b,a.Ab,a.ib],styles:[".search-form[_ngcontent-%COMP%]{padding:0}.search-input[_ngcontent-%COMP%]{margin:6px 8px 0 0;min-width:200px}"],changeDetection:0}),N.ctorParameters=()=>[{type:a.L},{type:i.e},{type:i.a},{type:a.Eb},{type:a.Db}];class U extends a.x{constructor(t,e){super(t,{__typename:"Promotion",id:"",createdAt:"",updatedAt:"",name:"",enabled:!1,conditions:[],actions:[]},t=>e.promotion.getPromotion(t).mapStream(t=>t.promotion))}}U.\u0275fac=function(t){return new(t||U)(n.sc(i.e),n.sc(a.L))},U.\u0275prov=Object(n.bc)({factory:function(){return new U(Object(n.sc)(i.e),Object(n.sc)(a.L))},token:U,providedIn:"root"}),U.ctorParameters=()=>[{type:i.e},{type:a.L}];const $={breadcrumb:Object(r.a)("breadcrumb.promotions")},Z={breadcrumb:B},M=[{path:"promotions",component:N,data:$},{path:"promotions/:id",component:L,resolve:Object(a.ac)(U),canDeactivate:[a.z],data:Z}];function B(t,e){return Object(a.cc)({entity:t.entity,id:e.id,breadcrumbKey:"breadcrumb.promotions",getName:t=>t.name,route:"promotions"})}class V{}V.\u0275fac=function(t){return new(t||V)},V.\u0275mod=n.dc({type:V}),V.\u0275inj=n.cc({imports:[[a.Nb,i.i.forChild(M)]]})}}]);
//# sourceMappingURL=10-es2015.e1420dc420efd0f214a9.js.map