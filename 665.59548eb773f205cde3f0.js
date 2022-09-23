"use strict";(self.webpackChunkordersystem=self.webpackChunkordersystem||[]).push([[665],{665:(Ht,qe,p)=>{p.d(qe,{Fj:()=>O,NI:()=>v,oH:()=>ne,u5:()=>Pt,JJ:()=>De,JL:()=>be,On:()=>ee,wV:()=>N,UX:()=>Bt,kI:()=>d,vK:()=>xe});var i=p(7716),ue=p(8583),Ye=p(7574),de=p(9796),ce=p(8002),Le=p(1555),he=p(4402);function w(n,t){return new Ye.y(e=>{const r=n.length;if(0===r)return void e.complete();const o=new Array(r);let s=0,a=0;for(let h=0;h<r;h++){const E=(0,he.D)(n[h]);let le=!1;e.add(E.subscribe({next:C=>{le||(le=!0,a++),o[h]=C},error:C=>e.error(C),complete:()=>{s++,(s===r||!le)&&(a===r&&e.next(t?t.reduce((C,It,Ut)=>(C[It]=o[Ut],C),{}):o),e.complete())}}))}})}const f=new i.OlP("NgValueAccessor"),We={provide:f,useExisting:(0,i.Gpc)(()=>B),multi:!0};let B=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}writeValue(e){this._renderer.setProperty(this._elementRef.nativeElement,"checked",e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(e,r){1&e&&i.NdJ("change",function(s){return r.onChange(s.target.checked)})("blur",function(){return r.onTouched()})},features:[i._Bn([We])]}),n})();const Je={provide:f,useExisting:(0,i.Gpc)(()=>O),multi:!0},Qe=new i.OlP("CompositionEventMode");let O=(()=>{class n{constructor(e,r,o){this._renderer=e,this._elementRef=r,this._compositionMode=o,this.onChange=s=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const n=(0,ue.q)()?(0,ue.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==e?"":e)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(Qe,8))},n.\u0275dir=i.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&i.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[i._Bn([Je])]}),n})();function g(n){return null==n||0===n.length}function fe(n){return null!=n&&"number"==typeof n.length}const u=new i.OlP("NgValidators"),m=new i.OlP("NgAsyncValidators"),Ze=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class d{static min(t){return e=>{if(g(e.value)||g(t))return null;const r=parseFloat(e.value);return!isNaN(r)&&r<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(g(e.value)||g(t))return null;const r=parseFloat(e.value);return!isNaN(r)&&r>t?{max:{max:t,actual:e.value}}:null}}static required(t){return g(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return g(t.value)||Ze.test(t.value)?null:{email:!0}}static minLength(t){return e=>g(e.value)||!fe(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}static maxLength(t){return e=>fe(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}static pattern(t){if(!t)return d.nullValidator;let e,r;return"string"==typeof t?(r="","^"!==t.charAt(0)&&(r+="^"),r+=t,"$"!==t.charAt(t.length-1)&&(r+="$"),e=new RegExp(r)):(r=t.toString(),e=t),o=>{if(g(o.value))return null;const s=o.value;return e.test(s)?null:{pattern:{requiredPattern:r,actualValue:s}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(pe);return 0==e.length?null:function(r){return me(_e(r,e))}}static composeAsync(t){if(!t)return null;const e=t.filter(pe);return 0==e.length?null:function(r){return function(...n){if(1===n.length){const t=n[0];if((0,de.k)(t))return w(t,null);if((0,Le.K)(t)&&Object.getPrototypeOf(t)===Object.prototype){const e=Object.keys(t);return w(e.map(r=>t[r]),e)}}if("function"==typeof n[n.length-1]){const t=n.pop();return w(n=1===n.length&&(0,de.k)(n[0])?n[0]:n,null).pipe((0,ce.U)(e=>t(...e)))}return w(n,null)}(_e(r,e).map(ge)).pipe((0,ce.U)(me))}}}function pe(n){return null!=n}function ge(n){const t=(0,i.QGY)(n)?(0,he.D)(n):n;return(0,i.CqO)(t),t}function me(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function _e(n,t){return t.map(e=>e(n))}function ye(n){return n.map(t=>function(n){return!n.validate}(t)?t:e=>t.validate(e))}function I(n){return null!=n?d.compose(ye(n)):null}function U(n){return null!=n?d.composeAsync(ye(n)):null}function ve(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ce(n){return n._rawValidators}function Ve(n){return n._rawAsyncValidators}let Ae=(()=>{class n{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=I(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=U(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,r){return!!this.control&&this.control.hasError(e,r)}getError(e,r){return this.control?this.control.getError(e,r):null}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n}),n})(),l=(()=>{class n extends Ae{get formDirective(){return null}get path(){return null}}return n.\u0275fac=function(e){return Ke(e||n)},n.\u0275dir=i.lG2({type:n,features:[i.qOj]}),n})();const Ke=i.n5z(l);class _ extends Ae{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Me{constructor(t){this._cd=t}is(t){var e,r;return!!(null===(r=null===(e=this._cd)||void 0===e?void 0:e.control)||void 0===r?void 0:r[t])}}let De=(()=>{class n extends Me{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(_,2))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[i.qOj]}),n})(),be=(()=>{class n extends Me{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(l,10))},n.\u0275dir=i.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:14,hostBindings:function(e,r){2&e&&i.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[i.qOj]}),n})();const et={provide:f,useExisting:(0,i.Gpc)(()=>N),multi:!0};let N=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}writeValue(e){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==e?"":e)}registerOnChange(e){this.onChange=r=>{e(""==r?null:parseFloat(r))}}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,r){1&e&&i.NdJ("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[i._Bn([et])]}),n})();const tt={provide:f,useExisting:(0,i.Gpc)(()=>j),multi:!0};let H=(()=>{class n{constructor(){this._accessors=[]}add(e,r){this._accessors.push([e,r])}remove(e){for(let r=this._accessors.length-1;r>=0;--r)if(this._accessors[r][1]===e)return void this._accessors.splice(r,1)}select(e){this._accessors.forEach(r=>{this._isSameGroup(r,e)&&r[1]!==e&&r[1].fireUncheck(e.value)})}_isSameGroup(e,r){return!!e[0].control&&e[0]._parent===r._control._parent&&e[1].name===r.name}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})(),j=(()=>{class n{constructor(e,r,o,s){this._renderer=e,this._elementRef=r,this._registry=o,this._injector=s,this.onChange=()=>{},this.onTouched=()=>{}}ngOnInit(){this._control=this._injector.get(_),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}fireUncheck(e){this.writeValue(e)}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}_checkName(){!this.name&&this.formControlName&&(this.name=this.formControlName)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq),i.Y36(H),i.Y36(i.zs3))},n.\u0275dir=i.lG2({type:n,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(e,r){1&e&&i.NdJ("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[i._Bn([tt])]}),n})();const nt={provide:f,useExisting:(0,i.Gpc)(()=>q),multi:!0};let q=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}writeValue(e){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(e))}registerOnChange(e){this.onChange=r=>{e(""==r?null:parseFloat(r))}}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n,selectors:[["input","type","range","formControlName",""],["input","type","range","formControl",""],["input","type","range","ngModel",""]],hostBindings:function(e,r){1&e&&i.NdJ("change",function(s){return r.onChange(s.target.value)})("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[i._Bn([nt])]}),n})();const it={provide:f,useExisting:(0,i.Gpc)(()=>F),multi:!0};let F=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this._optionMap=new Map,this._idCounter=0,this.onChange=o=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;const r=this._getOptionId(e);null==r&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const o=function(n,t){return null==n?`${t}`:(t&&"object"==typeof t&&(t="Object"),`${n}: ${t}`.slice(0,50))}(r,e);this._renderer.setProperty(this._elementRef.nativeElement,"value",o)}registerOnChange(e){this.onChange=r=>{this.value=this._getOptionValue(r),e(this.value)}}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r),e))return r;return null}_getOptionValue(e){const r=function(n){return n.split(":")[0]}(e);return this._optionMap.has(r)?this._optionMap.get(r):e}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(e,r){1&e&&i.NdJ("change",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[i._Bn([it])]}),n})();const at={provide:f,useExisting:(0,i.Gpc)(()=>S),multi:!0};let S=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this._optionMap=new Map,this._idCounter=0,this.onChange=o=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){let r;if(this.value=e,Array.isArray(e)){const o=e.map(s=>this._getOptionId(s));r=(s,a)=>{s._setSelected(o.indexOf(a.toString())>-1)}}else r=(o,s)=>{o._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(e){this.onChange=r=>{const o=[];if(void 0!==r.selectedOptions){const s=r.selectedOptions;for(let a=0;a<s.length;a++){const h=s.item(a),E=this._getOptionValue(h.value);o.push(E)}}else{const s=r.options;for(let a=0;a<s.length;a++){const h=s.item(a);if(h.selected){const E=this._getOptionValue(h.value);o.push(E)}}}this.value=o,e(o)}}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}_registerOption(e){const r=(this._idCounter++).toString();return this._optionMap.set(r,e),r}_getOptionId(e){for(const r of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(r)._value,e))return r;return null}_getOptionValue(e){const r=function(n){return n.split(":")[0]}(e);return this._optionMap.has(r)?this._optionMap.get(r)._value:e}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(i.Qsj),i.Y36(i.SBq))},n.\u0275dir=i.lG2({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(e,r){1&e&&i.NdJ("change",function(s){return r.onChange(s.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[i._Bn([at])]}),n})();function V(n,t){(function(n,t,e){const r=Ce(n);null!==t.validator?n.setValidators(ve(r,t.validator)):"function"==typeof r&&n.setValidators([r]);const o=Ve(n);if(null!==t.asyncValidator?n.setAsyncValidators(ve(o,t.asyncValidator)):"function"==typeof o&&n.setAsyncValidators([o]),e){const s=()=>n.updateValueAndValidity();k(t._rawValidators,s),k(t._rawAsyncValidators,s)}})(n,t,!0),t.valueAccessor.writeValue(n.value),function(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&Oe(n,t)})}(n,t),function(n,t){const e=(r,o)=>{t.valueAccessor.writeValue(r),o&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&Oe(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function T(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),function(n,t,e){let r=!1;if(null!==n){if(null!==t.validator){const o=Ce(n);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==t.validator);s.length!==o.length&&(r=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const o=Ve(n);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==t.asyncValidator);s.length!==o.length&&(r=!0,n.setAsyncValidators(s))}}}if(e){const o=()=>{};k(t._rawValidators,o),k(t._rawAsyncValidators,o)}}(n,t,!0),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function k(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Oe(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function L(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}const mt=[B,q,N,F,S,j];function $(n,t){if(!t)return null;let e,r,o;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function(n){return mt.some(t=>n.constructor===t)}(s)?r=s:o=s}),o||r||e||null}function R(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const A="VALID",P="INVALID",y="PENDING",M="DISABLED";function W(n){return(z(n)?n.validators:n)||null}function Se(n){return Array.isArray(n)?I(n):n||null}function J(n,t){return(z(t)?t.asyncValidators:n)||null}function Ge(n){return Array.isArray(n)?U(n):n||null}function z(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class Q{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Se(this._rawValidators),this._composedAsyncValidatorFn=Ge(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===A}get invalid(){return this.status===P}get pending(){return this.status==y}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Se(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Ge(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=y,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=A,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===y)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator=!0;const e=ge(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(".")),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(o=>{r=r instanceof D?r.controls.hasOwnProperty(o)?r.controls[o]:null:r instanceof Z&&r.at(o)||null}),r}(this,t)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new i.vpe,this.statusChanges=new i.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(P)?P:A}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){z(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class v extends Q{constructor(t=null,e,r){super(W(e),J(r,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!r})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){R(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){R(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class D extends Q{constructor(t,e,r){super(W(e),J(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!r})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(r=>{this._throwIfControlMissing(r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e instanceof v?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((o,s)=>{r=e(r,o,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control with name: '${r}'.`)})}}class Z extends Q{constructor(t,e,r){super(W(e),J(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!r})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((r,o)=>{this._throwIfControlMissing(o),this.at(o).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,o)=>{this.at(o)&&this.at(o).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,o)=>{r.reset(t[o],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof v?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control at index: ${r}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const At={provide:_,useExisting:(0,i.Gpc)(()=>ee)},ke=(()=>Promise.resolve(null))();let ee=(()=>{class n extends _{constructor(e,r,o,s){super(),this.control=new v,this._registered=!1,this.update=new i.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=$(0,s)}ngOnChanges(e){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in e&&this._updateDisabled(e),L(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?function(n,t){return[...t.path,n]}(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){V(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){ke.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1})})}_updateDisabled(e){const r=e.isDisabled.currentValue,o=""===r||r&&"false"!==r;ke.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable()})}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(l,9),i.Y36(u,10),i.Y36(m,10),i.Y36(f,10))},n.\u0275dir=i.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[i._Bn([At]),i.qOj,i.TTD]}),n})(),xe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=i.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})();const te=new i.OlP("NgModelWithFormControlWarning"),Mt={provide:_,useExisting:(0,i.Gpc)(()=>ne)};let ne=(()=>{class n extends _{constructor(e,r,o,s){super(),this._ngModelWarningConfig=s,this.update=new i.vpe,this._ngModelWarningSent=!1,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=$(0,o)}set isDisabled(e){}ngOnChanges(e){if(this._isControlChanged(e)){const r=e.form.previousValue;r&&T(r,this,!1),V(this.form,this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this.form.updateValueAndValidity({emitEvent:!1})}L(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&T(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}}return n.\u0275fac=function(e){return new(e||n)(i.Y36(u,10),i.Y36(m,10),i.Y36(f,10),i.Y36(te,8))},n.\u0275dir=i.lG2({type:n,selectors:[["","formControl",""]],inputs:{isDisabled:["disabled","isDisabled"],form:["formControl","form"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[i._Bn([Mt]),i.qOj,i.TTD]}),n._ngModelWarningSentOnce=!1,n})(),je=(()=>{class n{}return n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({factory:function(e){return new(e||n)}}),n})(),Rt=(()=>{class n{group(e,r=null){const o=this._reduceControls(e);let h,s=null,a=null;return null!=r&&(function(n){return void 0!==n.asyncValidators||void 0!==n.validators||void 0!==n.updateOn}(r)?(s=null!=r.validators?r.validators:null,a=null!=r.asyncValidators?r.asyncValidators:null,h=null!=r.updateOn?r.updateOn:void 0):(s=null!=r.validator?r.validator:null,a=null!=r.asyncValidator?r.asyncValidator:null)),new D(o,{asyncValidators:a,updateOn:h,validators:s})}control(e,r,o){return new v(e,r,o)}array(e,r,o){const s=e.map(a=>this._createControl(a));return new Z(s,r,o)}_reduceControls(e){const r={};return Object.keys(e).forEach(o=>{r[o]=this._createControl(e[o])}),r}_createControl(e){return e instanceof v||e instanceof D||e instanceof Z?e:Array.isArray(e)?this.control(e[0],e.length>1?e[1]:null,e.length>2?e[2]:null):this.control(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac}),n})(),Pt=(()=>{class n{}return n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({factory:function(e){return new(e||n)},providers:[H],imports:[je]}),n})(),Bt=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:te,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({factory:function(e){return new(e||n)},providers:[Rt,H],imports:[je]}),n})()}}]);