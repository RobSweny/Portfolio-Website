define("@glimmer/component/-private/base-component-manager",["exports","@babel/runtime/helpers/esm/defineProperty","@glimmer/component/-private/component"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=function(e,n,i){return class{static create(e){let t=n(e)
return new this(t)}constructor(n){(0,t.default)(this,"capabilities",i)
e(this,n)}createComponent(e,t){0
return new e(n(this),t.named)}getContext(e){return e}}}})
define("@glimmer/component/-private/component",["exports","@babel/runtime/helpers/esm/defineProperty","@glimmer/component/-private/owner"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.setDestroying=function(e){i.set(e,!0)}
e.setDestroyed=function(e){r.set(e,!0)}
e.default=e.ARGS_SET=void 0
const i=new WeakMap,r=new WeakMap
let a
e.ARGS_SET=a
0
e.default=class{constructor(e,a){(0,t.default)(this,"args",void 0)
this.args=a;(0,n.setOwner)(this,e)
i.set(this,!1)
r.set(this,!1)}get isDestroying(){return i.get(this)}get isDestroyed(){return r.get(this)}willDestroy(){}}})
define("@glimmer/component/-private/ember-component-manager",["exports","@glimmer/component/-private/base-component-manager","@glimmer/component/-private/component"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=Ember._componentManagerCapabilities("3.13",{destructor:!0,asyncLifecycleCallbacks:!1,updateHook:!1})
class r extends((0,t.default)(Ember.setOwner,Ember.getOwner,i)){destroyComponent(e){if(e.isDestroying)return
let t=Ember.meta(e)
t.setSourceDestroying();(0,n.setDestroying)(e)
Ember.run.schedule("actions",e,e.willDestroy)
Ember.run.schedule("destroy",this,a,e,t)}}function a(e,t){if(!e.isDestroyed){Ember.destroy(e)
t.setSourceDestroyed();(0,n.setDestroyed)(e)}}0
var s=r
e.default=s})
define("@glimmer/component/-private/owner",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.setOwner=void 0
var t=Ember.setOwner
e.setOwner=t})
define("@glimmer/component/index",["exports","@glimmer/component/-private/ember-component-manager","@glimmer/component/-private/component"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
let i=n.default
0
Ember._setComponentManager(e=>new t.default(e),i)
var r=i
e.default=r})
define("ads/components/ad-banner",["exports","fetch","ads/templates/components/ad-banner","ember-cli-pemberly-tracking/utils/user-timing","global-utils/utils/intersection-observer","@linkedin/core-web-tracking","global-utils/utils/is-browser","global-utils/utils/url","global-utils/utils/urn-converter","extended/config/environment"],function(e,t,n,i,r,a,s,o,l,c){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const{addQueryParam:d}=o.default,p=`${`https://${o.default.getDomain()}`}/tscp-serving/dtag`,u=["300x250","160x600","700x17","974x506","496x80","728x90","300x125","175x350","300x375","200x200","320x300"],m={COLLEAGUES:"colleagues",COMPANIES:"companies",COMPANIES_DIRECTORY:"companies_directory",DISCOVER:"discover",EDUCATION:"edu",EVENTS:"events",FEED:"home",GROUPS:"groups",JOBS:"jobs",LOGOUT:"logout",MESSAGING:"inbox",MYNETWORK:"network",NOTIFICATIONS:"notifications",PROFILE:"profile",PROFILE_ACTIVITY:"profile_activity",PULSE:"pulse",RECOMMENDATIONS:"recs",SEARCH_JOB:"search_job",SEARCH_PEOPLE:"search_people",SLIDESHARE:"slideshare",OTHER:"other",WVMP:"who_viewed_my_profile"},h={PAGE_ZONE_HEADER:"H",PAGE_ZONE_BODY_LEFT:"BL",PAGE_ZONE_BODY_MIDDLE:"BM",PAGE_ZONE_BODY_RIGHT:"BR",PAGE_ZONE_FOOTER:"F"},g={appId:"com.linkedin.tscp-rendering",appVersion:null},b={"app-render-mode":"VANILLA","is-app-render-failed":!1},f={"app-version":null,"web-ui-framework":null,"is-single-page-app":!1,"beacon-timeout":1e3},_=.1
var E=Ember.Component.extend({layout:n.default,adBannerManager:Ember.inject.service("ads@ad-banner-manager"),i18n:Ember.inject.service("i18n"),tracking:Ember.inject.service("tracking"),authenticatedUser:Ember.inject.service("authentication@authenticated-user"),lix:Ember.inject.service("lix"),locale:Ember.inject.service("locale"),tagName:"section",classNames:["ad-banner-container"],classNameBindings:["isHeaderZone"],src:null,width:null,height:null,refreshCallback:null,isHeaderZone:!1,isDarkBg:!1,adType:null,isReporting:!1,isAdMenu:!1,isAdChoiceModalOpen:!1,init(){this._super.apply(this,arguments)
Ember.set(this,"refreshCallback",this.refreshIframe.bind(this))
this.initAdInfo()
this.renderIframeContentBound=this.renderIframeContent.bind(this)
this._messageListener=this.handlePostMessage.bind(this)},didReceiveAttrs(){this._super.apply(this,arguments)
let e=this.baseSrc
const{vieweeMemberId:t}=this,{adZone:i}=this
!t||i!==m.PROFILE&&i!==m.PROFILE_ACTIVITY||(e=d(e,"vmid",t))
const r=this.contextualData
r&&(e=d(e,"_x",r))
const a=this.title||this.i18n.getMessageRenderer(n.default,"i18n_advertisement")()
Ember.set(this,"src",Ember.get(this,"adBannerManager.showAds")?e:"")
Ember.setProperties(this,{title:a,srcWithoutAdBlockerList:this.src})},didInsertElement(){this._super.apply(this,arguments)
s.default&&window.addEventListener("message",this._messageListener)
const e=this.element.querySelector("iframe")
if(e){this.boundOnIframeLoaded=this.onIframeLoaded.bind(this,e)
this.addEventListener(e,"load",this.boundOnIframeLoaded)
this.refreshIframe()}},willDestroyElement(){this._super.apply(this,arguments)
this.adBannerManager.unregister(this.refreshCallback)
this.viewportObserver&&this.viewportObserver.disconnect()
s.default&&window.removeEventListener("message",this._messageListener)},initAdInfo(){const e=this.zone,t=this.pageZone,n=this.slotSize,i=this.getAdZone(e),r=this.getPageZone(t),a=this.getSlotSize(n),s=this.adBannerManager.register(r,this.refreshCallback)
let[o,l]=a.split("x")
"700"===o&&(o="100%")
let c=p
c=d(c,"sz",this.getSlotSizeForApi(a))
c=d(c,"ti",s)
c=d(c,"p","1")
c=d(c,"c","1")
c=d(c,"z",i)
c=d(c,"pk",this.tracking.getCurrentPageKey())
c=d(c,"pz",r)
Ember.setProperties(this,{baseSrc:c,width:o,height:l,tileNumber:s,adZone:i})
"PAGE_ZONE_HEADER"===t&&Ember.set(this,"isHeaderZone",!0)
Ember.set(this,"userTimingMeasureKey",`mark_ad-banner#${this.elementId}`)},refreshIframe(){const e=this.element
this.viewportObserver=(0,r.onInViewportOnce)(e,()=>{this.renderIframeContentBound()})},renderIframeContent(){if(this.src){const e=this.element&&this.element.querySelector("iframe")
if(e&&e.contentWindow){this.beginLoadPhaseMeasure()
e.contentWindow.location.replace(jSecure.sanitizeUrl(this.src))}}},onIframeLoaded(e){this.isDarkBg&&this.adjustTextColorForDarkBg(e)
Ember.set(this,"adType",this.attemptExtractAdType(e))
this.endLoadPhaseMeasure()
this.attemptStartRum(e)
this._attemptInjectReportAd(e)},adjustTextColorForDarkBg(e){try{let n=e.contentWindow.document
const i=n.querySelector("iframe")
if(i)n=i.contentWindow.document
else{const e=n.querySelector(".ad.follow-company.f17x700")
if(!e)return
e.style.margin="0 auto"}const r=n.createElement("style")
let a=n.createTextNode(".follow-company.f17x700 #hd h1,\n         .follow-company.f17x700 #hd h1 .company-name,\n         .follow-company.f17x700 #ft .follow-start,\n         .follow-company.f17x700 #ft .follow-start:before,\n         .ad-pipe,\n         .ad-label { color: #FFFFFF }")
r.appendChild(a)
a=n.createTextNode(".follow-company.f17x700 #ft { border-left-color: #FFFFFF; }")
r.appendChild(a)
n.head.appendChild(r)}catch(t){}},getSlotSizeForApi:e=>"700x17"===e?"1x1":e,getPageZone(e){const t=h[e]
return t},getSlotSize(e){u.indexOf(e)
return e},getAdZone(e){const t=m[e]
return t},_hideSemaphore(){this.isReporting&&Ember.setProperties(this,{isReporting:!1,contentSource:null,adUrn:null,advertiserUrn:null})},_openSemaphore(){Ember.set(this,"isReporting",!0)},reportAd(e,t,n){Ember.set(this,"contentSource",e)
Ember.set(this,"adUrn",t)
Ember.set(this,"advertiserUrn",n)
Ember.setProperties(this,{contentSource:e,adUrn:t,advertiserUrn:n})
this._openSemaphore()},_attemptInjectReportAd(e){try{e.contentWindow.reportAd=this.reportAd.bind(this)}catch(t){if("SecurityError"!==t.name||!o.default.isEIDomain()&&!o.default.isDevDomain())throw t}},handlePostMessage(e){const t="test"===c.default.environment,n=this.element&&this.element.querySelector("iframe")
if(t||n&&n.contentWindow===e.source&&e.data)try{const t=JSON.parse(e.data)
if(t&&"AD_MENU"===t.type){const{contentType:e,creative:n,account:i,matchedAt:r}=t
e&&n&&i&&r&&Ember.setProperties(this,{isAdMenu:!0,contentSource:e,adUrn:n,advertiserUrn:i,matchedAt:r})}}catch(i){Ember.Logger.warn("Error occured while parsing the json",i)
throw i}},attemptExtractAdType(e){let t=null
try{const i=e.contentWindow.document.querySelector('meta[name="adType"]')
i&&i.hasAttribute("content")&&(t=i.getAttribute("content"))}catch(n){if("SecurityError"!==n.name)throw n}return t},attemptStartRum(e){const{tracking:n,adType:i,locale:r}=this
if(Math.random()<=_&&s.default&&null!==i){const s=`ads_${i}`,o=n.config.APP.rumConfig["beacon-url"]
let l={},c=null
const d=e.contentWindow
c=r&&r.interfaceLocale||n.config.APP.locale||d.navigator&&d.navigator.language||null
l={AbortController:t.AbortController,performance:d.performance,PerformanceObserver:d.PerformanceObserver,connection:d.navigator.connection,locale:c,Promise:Ember.RSVP.Promise,assign:Ember.assign,fetch:t.default,location:d.location,sendBeacon:d.navigator.sendBeacon&&d.navigator.sendBeacon.bind(d.navigator),document:d.document,requestIdleCallback:d.requestIdleCallback}
const p=Ember.assign({endpoint:o,api:l,locale:c},g),u=new a.BrowserTransporter(p),m=new a.TrackingCore(u)
m.setCurrentContext({pageInstance:{pageUrn:(0,a.generatePageUrn)(s),trackingId:(0,a.generateTrackingId)()},pageKey:s})
const h=new a.RumCore(b,f,m),_=h.start()
h.end(_)}},beginLoadPhaseMeasure(){i.default.addMarker(`${this.userTimingMeasureKey}_load_start`)},endLoadPhaseMeasure(){const{userTimingMeasureKey:e,pageZone:t,adType:n}=this,r=this.getPageZone(t).toLowerCase(),a=`${e}_load_start`,s=`${e}_load_end`
if(i.default.hasMarkerName(a)){i.default.addMarker(s)
i.default.measureTime(`mark_ad-banner_${r}_load_phase`,a,s)
null!==n&&i.default.measureTime(`mark_ad-banner_${r}_ads_${n}_load_phase`,a,s)}},actions:{semaphoreSuccess(){this._hideSemaphore()
this.refreshIframe()},semaphoreFailure(){this._hideSemaphore()},semaphoreClose(){this._hideSemaphore()},semaphoreTrack(e){const t=e&&e.moduleKey
t&&this.tracking.fireInteractionEvent(t)},onAdMenuOptionSelected(e){Ember.set(this,"isAdMenu",!1)
if("REPORT_AD"===e)Ember.set(this,"isReporting",!0)
else if("AD_CHOICE"===e){const e=(0,l.toUrn)("com.linkedin.voyager.dash.common.urn.AdServingUrn",(0,l.composeUrnId)(this.adUrn,this.matchedAt),!0)
Ember.setProperties(this,{adServingUrn:e,isAdChoiceModalOpen:!0})}},dismissAdChoiceModal(e){Ember.setProperties(this,{isAdChoiceModalOpen:!1,contentSource:null,adUrn:null,advertiserUrn:null,matchedAt:null,adServingUrn:null})
e&&this.refreshIframe()}}})
e.default=E})
define("ads/services/ad-banner-manager",["exports","global-utils/utils/is-browser"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var n=Ember.Service.extend(Ember.Evented,{router:Ember.inject.service("router"),lix:Ember.inject.service("lix"),init(){this._super.apply(this,arguments)
this._clearCountMap()
this.countMap={}
this.adBlockers={AD_BLOCK_PLUS:null,AD_BLOCK:!1,UBLOCK:!1}
this.router.on("routeDidChange",e=>{e.from!==e.to&&this._onDidTransition()})
this.showAds=!Ember.testing},register(e,t){const{countMap:n}=this,i=n[e]?n[e]:1
n[e]=i+1
t&&this.on("ad-banner-refresh",t)
return i},unregister(e){e&&this.off("ad-banner-refresh",e)},triggerRefreshAdEvent(){this.trigger("ad-banner-refresh")},_clearCountMap(){Ember.set(this,"countMap",{})},_onDidTransition(){this._clearCountMap()
this.triggerRefreshAdEvent()},_createScriptForDetectingABP(e,n){if(t.default){const t=document.createElement("script")
t.type="text/javascript"
t.async=!1
t.onload=function(){this.adBlockers.AD_BLOCK_PLUS=1===n}.bind(this)
t.src=`/voyager/abp-detection.js?ch=${n}`
e.appendChild(t)
e.removeChild(t)}},getAdBlockerList(){const e=[]
let t=!1
Object.keys(this.adBlockers).forEach(n=>{this.adBlockers[n]?e.push(`${n}`):null===this.adBlockers[n]&&(t=!0)})
t&&e.push("$UNKNOWN")
return e.join(",")}})
e.default=n})
define("ads/templates/components/ad-banner",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"KeCQGrdz",block:'{"symbols":[],"statements":[[7,"iframe",true],[10,"class","ad-banner"],[11,"width",[23,0,["width"]]],[11,"height",[23,0,["height"]]],[10,"src","about:blank"],[10,"scrolling","no"],[11,"title",[23,0,["title"]]],[8],[9],[0,"\\n\\n"],[4,"if",[[23,0,["isReporting"]]],null,{"statements":[[0,"  "],[1,[28,"ember-semaphore@ember-semaphore",null,[["entityUrn","authorUrn","contentSource","success","failure","track","cancel"],[[23,0,["adUrn"]],[23,0,["advertiserUrn"]],[23,0,["contentSource"]],[28,"action",[[23,0,[]],"semaphoreSuccess"],null],[28,"action",[[23,0,[]],"semaphoreFailure"],null],[28,"action",[[23,0,[]],"semaphoreTrack"],null],[28,"action",[[23,0,[]],"semaphoreClose"],null]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,0,["isAdMenu"]]],null,{"statements":[[0,"  "],[5,"ad-menu@modals/ad-menu-modal",[],[["@isOpen","@onDismissAdMenu"],[[23,0,["isAdMenu"]],[28,"action",[[23,0,[]],"onAdMenuOptionSelected"],null]]]],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,0,["isAdChoiceModalOpen"]]],null,{"statements":[[0,"  "],[5,"ad-choice@modals/ad-choice-modal",[],[["@isOpen","@adServingUrn","@onDismissAdChoice"],[[23,0,["isAdChoiceModalOpen"]],[23,0,["adServingUrn"]],[28,"action",[[23,0,[]],"dismissAdChoiceModal"],null]]]],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"ads/templates/components/ad-banner.hbs"}})
e.default=t})
define("appreciation/components/appreciation-container",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","global-helpers/helpers/name","appreciation/utils/appreciation-image-utils","appreciation/utils/appreciation-content","appreciation/utils/constants","ember-cli-pemberly-tracking/utils/tracking","appreciation/utils/tracking-utils","appreciation/utils/appreciation-typeahead-utils","extended/config/environment","appreciation/utils/kudos-detour-manager","detour-framework/utils/preview-utils","global-utils/utils/logger","global-utils/utils/create-cache-key-from-query","global-utils/utils/urn-converter","ember-test-waiters"],function(e,t,n,i,r,a,s,o,l,c,d,p,u,m,h,g,b,f,_,E){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var y,T,v,C,O,S,w,A,I,P,N,k,R,x,M,D,U,L,F,j,z,V,H,G,B,K,W,Y,q,$,X,Z,J,Q,ee
const te=Ember.HTMLBars.template({id:"7EwNRvFA",block:'{"symbols":["CurrentViewComponent","ShareTypeDropdownComponent","@isInEditMode","@organizationActorUrn","@exitApprFlow","&default","&attrs"],"statements":[[7,"div",false],[13,7],[8],[0,"\\n"],[4,"let",[[28,"component",[[28,"ember-holy-futuristic-template-namespacing-batman@-translate-dynamic-2",[[23,0,["currentViewComponent"]]],null]],null],[28,"component",["appreciation@share-type-dropdown"],null]],null,{"statements":[[0,"    "],[14,6,[[28,"hash",null,[["appreciationView","shareTypeDropdown"],[[28,"component",[[28,"ember-holy-futuristic-template-namespacing-batman@-translate-dynamic-2",[[23,1,[]]],null]],[["appreciationContent","showShareTypeDropdown","exitApprFlow","organizationActorUrn","handleAfterShareThenCloseModal","selectKudoTemplate","recipientsChanged","afterSendMessage","retryFetchingTemplates","fetchTypeaheadSearchHits","isInEditMode"],[[23,0,["appreciationContent"]],[23,0,["showShareTypeDropdown"]],[23,5,[]],[23,4,[]],[23,0,["handleAfterShareThenCloseModal"]],[23,0,["selectKudoTemplate"]],[23,0,["recipientsChanged"]],[23,0,["afterSendMessage"]],[23,0,["retryFetchingTemplates"]],[23,0,["fetchTypeaheadSearchHits"]],[23,3,[]]]]],[28,"component",[[28,"ember-holy-futuristic-template-namespacing-batman@-translate-dynamic-2",[[23,2,[]]],null]],[["setShareType","shareType","sendAsMessageOptionText","shareToFeedOptionText"],[[28,"ember-simple-set-helper@set",[[23,0,[]],"shareType"],null],[23,0,["shareType"]],[28,"t",["send_as_message_title","appreciation/components/appreciation-container"],null],[28,"t",["share_to_feed_title","appreciation/components/appreciation-container"],null]]]]]]],[28,"hash",null,[["onDetourNext","onNext","onBack","transitionToChooserMenuOrSharebox"],[[23,0,["handleDetourNext"]],[23,0,["handleSubactionButtonClick"]],[23,0,["goToPreviousView"]],[23,0,["transitionToChooserMenuOrSharebox"]]]]],[28,"hash",null,[["pageKey","modalTitle","subaction","showShareTypeDropdown","canVisitPreviousView","currentView"],[[23,0,["currentPageKey"]],[23,0,["currentModalTitle"]],[23,0,["currentSubaction"]],[23,0,["showShareTypeDropdown"]],[23,0,["canVisitPreviousView"]],[23,0,["currentView"]]]]]]],[0,"\\n"]],"parameters":[1,2]},null],[9]],"hasEval":false}',meta:{moduleName:"appreciation/components/appreciation-container.hbs"}})
let ne=(y=Ember.inject.service("authentication@authenticated-user"),T=Ember.inject.service("formatter"),v=Ember.inject.service("i18n"),C=Ember.inject.service("jet"),O=Ember.inject.service("persistent-toast-manager@persistent-toast-manager"),S=Ember.inject.service("store"),w=Ember.inject.service("tracking"),A=Ember.inject.service("vector@vector-upload"),I=Ember._tracked,P=Ember._tracked,N=Ember._tracked,k=Ember._tracked,R=Ember._action,x=Ember._action,M=Ember._action,D=Ember._action,U=Ember._action,L=Ember._action,F=Ember._action,j=Ember._action,z=Ember._action,V=Ember._action,H=class extends a.default{get currentViewComponent(){return c.APPR_VIEW_STATES[this.currentView].viewComponent}get currentPageKey(){const{pageKey:e}=c.APPR_VIEW_STATES[this.currentView]
return e?`${m.default.tracking.pageKeyPrefix}${e}`:null}get currentModalTitle(){return this.i18n.lookupTranslation("component",this._componentName,c.APPR_VIEW_STATES[this.currentView].modalTitleKey)()}get showShareTypeDropdown(){return this.currentView===c.APPR_VIEWS.SELECT_KUDO_VIEW&&this.args.origin!==c.VALID_APPR_ORIGIN_TYPES.FEED_POST}get currentSubaction(){const{currentView:e,i18n:t,shareType:n}=this,i=t.lookupTranslation("component",this._componentName,c.APPR_VIEW_STATES[e].subactionNameKey)(),r=t.lookupTranslation("component",this._componentName,c.APPR_I18N_KEYS.BACK_BUTTON_KEY)()
if(!i)return null
const{subactionControlName:a}=c.APPR_VIEW_STATES[e]
return{subactionName:i,subactionControlName:a,isSubactionDisabled:e===c.APPR_VIEWS.SELECT_RECIPIENTS_VIEW&&Ember.isEmpty(Ember.get(this,"appreciationContent.recipientMiniProfiles"))||e===c.APPR_VIEWS.SELECT_KUDO_VIEW&&(Ember.isEmpty(Ember.get(this,"appreciationContent.recipientMiniProfiles"))||!Ember.get(this,"appreciationContent.selectedKudoTemplate")),backButtonName:r,useDetourNext:this.args.isDetour&&e===c.APPR_VIEWS.SELECT_KUDO_VIEW&&n===c.APPR_SHARE_TYPES.FEED}}get canVisitPreviousView(){const{currentView:e,visitedViews:t}=this,n=c.APPR_VIEW_STATES[e].defaultPrevView
return n&&t.includes(n)}get nextView(){return this.currentView===c.APPR_VIEWS.SELECT_KUDO_VIEW&&this.shareType===c.APPR_SHARE_TYPES.MSG?c.APPR_VIEWS.EDIT_MSG_VIEW:c.APPR_VIEW_STATES[this.currentView].defaultNextView}constructor(){var e,i
super(...arguments);(0,t.default)(this,"authenticatedUser",G,this);(0,t.default)(this,"formatter",B,this);(0,t.default)(this,"i18n",K,this);(0,t.default)(this,"jet",W,this);(0,t.default)(this,"persistentToastManager",Y,this);(0,t.default)(this,"store",q,this);(0,t.default)(this,"tracking",$,this);(0,t.default)(this,"vectorUpload",X,this);(0,t.default)(this,"appreciationContent",Z,this);(0,t.default)(this,"currentView",J,this);(0,t.default)(this,"shareType",Q,this);(0,t.default)(this,"visitedViews",ee,this);(0,n.default)(this,"_componentName","appreciation@appreciation-container")
this.appreciationContent=new l.default(this.args.origin,this.i18n.lookupTranslation("component",this._componentName,"kudos_hashtag_text")())
null===(e=(i=this.args).updateShareboxModalConfig)||void 0===e||e.call(i,{modalHeader:this.currentModalTitle,controlName:c.APPR_VIEW_STATES[this.currentView].shareboxCloseControlName})
this._fetchTemplates()}handleDetourNext(e){e&&this._fireCIE(e);(0,o.generateAppreciationImage)(this.appreciationContent).then(e=>{if(!this.isDestroying){var t,n
this.appreciationContent.kudoImageFile=e
null===(t=(n=this.args).updateModalHeader)||void 0===t||t.call(n,void 0)
this.args.onDetourComplete(this._getKudosDetourManager())}})}handleSubactionButtonClick(e){e&&this._fireCIE(e)
const t=Ember.get(this,"appreciationContent.recipientMiniProfiles")
switch(this.currentView){case c.APPR_VIEWS.SELECT_RECIPIENTS_VIEW:this.appreciationContent.recipientFullNames=this._getRecipientFullNames(t)
this.appreciationContent.recipientNameLines=this._getFormattedNameLines(t)
this._goToNextView()
break
case c.APPR_VIEWS.SELECT_KUDO_VIEW:(0,E.waitForPromise)((0,o.generateAppreciationImage)(this.appreciationContent).then(e=>{if(!this.isDestroying){this.appreciationContent.kudoImageFile=e
return this._goToNextView()}return null}),"image-loading-waiter")
break
default:this._goToNextView()}}goToPreviousView(){this._fireCIE(c.APPR_CONTROL_NAMES.BACK)
const{currentView:e}=this
if(c.APPR_VIEW_STATES[e].defaultPrevView){const t=c.APPR_VIEW_STATES[e].defaultPrevView
this._setCurrentView(t)}}transitionToChooserMenuOrSharebox(){const{isInEditMode:e,goToCreation:t,transitionToChooserMenu:n}=this.args
e?t():n()}handleAfterShareThenCloseModal(){if(!this.isDestroying){var e,t,n,i
null===(e=(t=this.args).afterKudoShare)||void 0===e||e.call(t)
null===(n=(i=this.args).exitApprFlow)||void 0===n||n.call(i)}}selectKudoTemplate(e){this._fireCIE(c.APPR_CONTROL_NAMES.AWARD_SELECT_AWARD)
this.appreciationContent.selectedKudoTemplate=e}recipientsChanged(e,t){e&&this._fireCIE(c.APPR_CONTROL_NAMES.TYPEAHEAD_TEXT_ENTRY)
this.appreciationContent.recipientMiniProfiles=t}afterSendMessage(e){var t,n
if(this.isDestroying)return
const{persistentToastManager:i,i18n:r}=this
null===(t=(n=this.args).exitApprFlow)||void 0===t||t.call(n)
if(e){var a,s
this._fireAppreciationCustomEvent(c.APPR_CUSTOM_TRACKING_EVENTS.MSG_EVENT)
i.success({message:r.lookupTranslation("component",this._componentName,c.APPR_I18N_KEYS.KUDO_MSG_SUCCESS_TOAST_KEY)()})
null===(a=(s=this.args).afterKudoShare)||void 0===a||a.call(s)}else i.error({message:r.lookupTranslation("component",this._componentName,c.APPR_I18N_KEYS.KUDO_MSG_FAILURE_TOAST_KEY)()})}retryFetchingTemplates(){if(!this.isDestroying){this.appreciationContent.isLoading=!0
this._fetchTemplates()}}fetchTypeaheadSearchHits(e){const{organizationActorUrn:t}=this.args,n={query:e,types:["PEOPLE"],q:"federated"}
if(t){const{id:e}=(0,_.fromUrn)(t)
n.companyIds=[e]}return this.store.queryURL("typeahead/hits",{params:n,cacheKey:(0,f.default)("typeahead/appreciation-typeahead-hit",n)}).then(e=>{return(Ember.get(e,"elements")||[]).map(e=>(0,u.default)(e))})}_setUpInitView(e){const t=Ember.get(e,"elements")
this.appreciationContent.kudoTemplates=t
this.appreciationContent.selectedKudoTemplate=Ember.get(t,"firstObject")
this._startCreationFlow()}_startCreationFlow(){const{recipientId:e,recipientMiniProfiles:t,origin:n}=this.args
if(t){this._setRecipientData(t)
n===c.VALID_APPR_ORIGIN_TYPES.FEED_POST||n===c.VALID_APPR_ORIGIN_TYPES.NONE||n===c.VALID_APPR_ORIGIN_TYPES.PROMO?this._setCurrentView(c.APPR_VIEWS.SELECT_RECIPIENTS_VIEW):this._setCurrentView(c.APPR_VIEWS.SELECT_KUDO_VIEW)}else if(e)this.store.queryURL(`identity/miniprofiles/${e}`).then(e=>{if(!this.isDestroying){this._setRecipientData([e])
this._setCurrentView(c.APPR_VIEWS.SELECT_KUDO_VIEW)}})
else{this._setCurrentView(c.APPR_VIEWS.SELECT_RECIPIENTS_VIEW)
this.appreciationContent.startPageInstance=this.tracking.getCurrentPageInstance()}}_setRecipientData(e){this.appreciationContent.recipientMiniProfiles=e
this.appreciationContent.recipientFullNames=this._getRecipientFullNames(e)
this.appreciationContent.recipientNameLines=this._getFormattedNameLines(e)}_setCurrentView(e){this.currentView=e
this.visitedViews.push(e)
const t=c.APPR_VIEW_STATES[e],{impressionEvent:n}=c.APPR_VIEW_STATES[e]
n&&this._fireAppreciationCustomEvent(n)
if(t.shareboxCloseControlName){var i,r
null===(i=(r=this.args).updateShareboxModalConfig)||void 0===i||i.call(r,{modalHeader:this.currentModalTitle,controlName:t.shareboxCloseControlName})}if(this.args.isDetour){var a,s
null===(a=(s=this.args).updateModalHeader)||void 0===a||a.call(s,this.i18n.lookupTranslation("component",this._componentName,t.modalTitleKey)())}}_getFormattedNameLines(e){let t=""
if(1===e.length)t=this.formatter.formatName((0,s.getName)(e[0]),"full")
else{const n=e.map(e=>(0,s.getName)(e))
t=this.i18n.lookupTranslation("component",this._componentName,c.APPR_I18N_KEYS.FORMATTED_NAME_TEXT_KEY)([{names:n}])}return(0,o.getTruncatedNameLines)(t)}_getRecipientFullNames(e){return Ember.isEmpty(e)?[]:e.map(e=>this.formatter.formatName((0,s.getName)(e),"full"))}_goToNextView(){const{nextView:e}=this
if(e===c.APPR_VIEWS.EDIT_MSG_VIEW)return this._generateAppreciation().then(t=>{let{newId:n}=t
if(!this.isDestroying&&n){this.appreciationContent.appreciationUrn=n
this.appreciationContent.kudosPreviewData=(0,g.getImagePreviewRenderModelFromImageUrls)(this.store,[Ember.get(this,"appreciationContent.kudoImageFile")])
this._fireAppreciationCustomEvent(c.APPR_CUSTOM_TRACKING_EVENTS.SUBMIT_EVENT)
this._setCurrentView(e)}})
e===c.APPR_VIEWS.EDIT_POST_VIEW&&(this.appreciationContent.initialDetourManager=this._getKudosDetourManager())
e&&this._setCurrentView(e)
return null}_generateAppreciation(e){const{appreciationContent:t}=this,{contextUrn:n,organizationActorUrn:i}=this.args,r={recipients:Ember.get(t,"recipientMiniProfiles").map(e=>Ember.get(e,"entityUrn")),reason:Ember.get(t,"selectedKudoTemplate.type")}
e&&(r.mediaUrns=[e])
n?r.context=n:Ember.get(t,"origin")===c.VALID_APPR_ORIGIN_TYPES.NON_SELF_PROFILE&&([r.context]=r.recipients)
i&&(r.companyActorUrn=(0,_.convertUrnType)("organization/company",i))
const a=`/${m.default.namespace}/${c.APPR_GENERATE_URL}`
return this.store.adapterFor("-ember-m3").ajax(a,"POST",{data:r})}_fireCIE(e){const t=(0,d.createControlUrn)(this.currentPageKey,e)
this.tracking.fireCustomUrnInteractionEvent(t)}_fireAppreciationCustomEvent(e){(0,p.default)(this.tracking,e,this.appreciationContent)}_fetchTemplates(){const e={}
this.args.organizationActorUrn&&(e.companyActorUrn=(0,_.convertUrnType)("organization/company",this.args.organizationActorUrn))
this.store.queryURL("identity/appreciationTemplate",{params:e,reload:!0}).then(e=>{if(!this.isDestroying){this.appreciationContent.isError=!1
this._setUpInitView(e)}}).catch(e=>{this.isDestroying||(this.appreciationContent.isError=!0);(0,b.errorLogger)(this.jet,"Error fetching templates in appreciation-container.js",e,["appreciation-fetch-templates-error"])
throw e}).finally(()=>{this.isDestroying||(this.appreciationContent.isLoading=!1)})}_getKudosDetourManager(){const{store:e,i18n:t,vectorUpload:n}=this,{contextUrn:i,exitApprFlow:r,afterKudoShare:a,occasion:s,updateModalHeader:o}=this.args,{"appreciationContent.recipientMiniProfiles":l,"appreciationContent.origin":d,"appreciationContent.defaultTextAndMentions":p,"appreciationContent.kudoImageFile":u}=Ember.getProperties(this,"appreciationContent.recipientMiniProfiles","appreciationContent.origin","appreciationContent.defaultTextAndMentions","appreciationContent.kudoImageFile"),m=(0,g.getFeedComponentFromImageUrls)(e,[u]),b=new h.default({previewComponent:m,processingHeadline:t.lookupTranslation("component",this._componentName,"kudo_detour_in_progress")(),successHeadline:t.lookupTranslation("component",this._componentName,"kudo_detour_success")(),errorHeadline:t.lookupTranslation("component",this._componentName,"kudo_detour_failure")(),vectorUploadService:n,recipientMiniProfiles:l,origin:d,contextUrn:i,exitApprFlow:r,afterKudoShare:a,defaultTextAndMentions:p,kudoImageFile:u,generateAppreciation:e=>this._generateAppreciation(Ember.get(e,"meta.urn")),successCallback:e=>{this.appreciationContent.appreciationUrn=e
this._fireAppreciationCustomEvent(c.APPR_CUSTOM_TRACKING_EVENTS.SUBMIT_EVENT)},occasion:s,updateModalHeader:o})
return b}},G=(0,i.default)(H.prototype,"authenticatedUser",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=(0,i.default)(H.prototype,"formatter",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=(0,i.default)(H.prototype,"i18n",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=(0,i.default)(H.prototype,"jet",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=(0,i.default)(H.prototype,"persistentToastManager",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=(0,i.default)(H.prototype,"store",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=(0,i.default)(H.prototype,"tracking",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=(0,i.default)(H.prototype,"vectorUpload",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=(0,i.default)(H.prototype,"appreciationContent",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=(0,i.default)(H.prototype,"currentView",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return c.APPR_VIEWS.EMPTY_VIEW}}),Q=(0,i.default)(H.prototype,"shareType",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return c.APPR_SHARE_TYPES.FEED}}),ee=(0,i.default)(H.prototype,"visitedViews",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),(0,i.default)(H.prototype,"handleDetourNext",[R],Object.getOwnPropertyDescriptor(H.prototype,"handleDetourNext"),H.prototype),(0,i.default)(H.prototype,"handleSubactionButtonClick",[x],Object.getOwnPropertyDescriptor(H.prototype,"handleSubactionButtonClick"),H.prototype),(0,i.default)(H.prototype,"goToPreviousView",[M],Object.getOwnPropertyDescriptor(H.prototype,"goToPreviousView"),H.prototype),(0,i.default)(H.prototype,"transitionToChooserMenuOrSharebox",[D],Object.getOwnPropertyDescriptor(H.prototype,"transitionToChooserMenuOrSharebox"),H.prototype),(0,i.default)(H.prototype,"handleAfterShareThenCloseModal",[U],Object.getOwnPropertyDescriptor(H.prototype,"handleAfterShareThenCloseModal"),H.prototype),(0,i.default)(H.prototype,"selectKudoTemplate",[L],Object.getOwnPropertyDescriptor(H.prototype,"selectKudoTemplate"),H.prototype),(0,i.default)(H.prototype,"recipientsChanged",[F],Object.getOwnPropertyDescriptor(H.prototype,"recipientsChanged"),H.prototype),(0,i.default)(H.prototype,"afterSendMessage",[j],Object.getOwnPropertyDescriptor(H.prototype,"afterSendMessage"),H.prototype),(0,i.default)(H.prototype,"retryFetchingTemplates",[z],Object.getOwnPropertyDescriptor(H.prototype,"retryFetchingTemplates"),H.prototype),(0,i.default)(H.prototype,"fetchTypeaheadSearchHits",[V],Object.getOwnPropertyDescriptor(H.prototype,"fetchTypeaheadSearchHits"),H.prototype),H)
e.default=ne
Ember._setComponentTemplate(te,ne)})
define("appreciation/components/appreciation-modal",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","ember-cli-pemberly-tracking/utils/tracking","appreciation/utils/constants","global-utils/utils/url"],function(e,t,n,i,r,a,s,o,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var c,d,p,u,m,h
const g=Ember.HTMLBars.template({id:"k6GhXLP9",block:'{"symbols":["subcomponents","actions","properties","modal","ShareTypeDropdown","&attrs","@afterKudoShare","@onDismiss","@isOpen"],"statements":[[7,"div",false],[13,6],[8],[0,"\\n  "],[5,"appreciation@appreciation-container",[],[["@origin","@contextUrn","@recipientId","@afterKudoShare","@exitApprFlow","@updateModalHeader"],[[23,0,["origin"]],[23,0,["contextUrn"]],[23,0,["recipientId"]],[23,7,[]],[23,8,[]],[28,"ember-simple-set-helper@set",[[23,0,[]],"innerModalTitle"],null]]],{"statements":[[0,"\\n    "],[5,"artdeco-modal@artdeco-modal",[],[["@isOpen","@headerId","@dismissModal","@size","@modalClasses"],[[23,9,[]],"appreciation-modal-header",[28,"fn",[[23,0,["trackedCloseApprModal"]],[23,3,["pageKey"]]],null],"medium","appr-modal"]],{"statements":[[0,"\\n      "],[6,[23,4,["artdeco-modal-header"]],[],[[],[]],{"statements":[[0,"\\n        "],[7,"h2",true],[10,"id","appreciation-modal-header"],[10,"class","t-20"],[8],[0,"\\n"],[4,"if",[[23,0,["innerModalTitle"]]],null,{"statements":[[0,"            "],[1,[23,0,["innerModalTitle"]],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"            "],[1,[23,3,["modalTitle"]],false],[0,"\\n"]],"parameters":[]}],[0,"        "],[9],[0,"\\n      "]],"parameters":[]}],[0,"\\n      "],[6,[23,4,["artdeco-modal-content"]],[],[["@classNames"],["appr-modal__content"]],{"statements":[[0,"\\n        "],[1,[28,"component",[[28,"ember-holy-futuristic-template-namespacing-batman@-translate-dynamic-2",[[23,1,["appreciationView"]]],null]],null],false],[0,"\\n      "]],"parameters":[]}],[0,"\\n"],[4,"if",[[23,3,["subaction"]]],null,{"statements":[[0,"        "],[6,[23,4,["artdeco-modal-footer"]],[],[["@has-divider"],["true"]],{"statements":[[0,"\\n"],[4,"if",[[23,3,["showShareTypeDropdown"]]],null,{"statements":[[4,"let",[[28,"component",[[28,"ember-holy-futuristic-template-namespacing-batman@-translate-dynamic-2",[[23,1,["shareTypeDropdown"]]],null]],null]],null,{"statements":[[0,"              "],[6,[23,5,[]],[[12,"class","fl"]],[[],[]]],[0,"\\n"]],"parameters":[5]},null]],"parameters":[]},null],[0,"          "],[7,"div",true],[10,"class","fr"],[8],[0,"\\n"],[4,"if",[[23,3,["canVisitPreviousView"]]],null,{"statements":[[0,"              "],[5,"artdeco-button@artdeco-button",[],[["@type","@color","@text","@click"],["secondary","muted",[23,3,["subaction","backButtonName"]],[23,2,["onBack"]]]]],[0,"\\n"]],"parameters":[]},null],[0,"            "],[5,"artdeco-button@artdeco-button",[],[["@text","@disabled","@click"],[[23,3,["subaction","subactionName"]],[23,3,["subaction","isSubactionDisabled"]],[28,"fn",[[23,2,["onNext"]],[23,3,["subaction","subactionControlName"]]],null]]]],[0,"\\n          "],[9],[0,"\\n        "]],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"    "]],"parameters":[4]}],[0,"\\n  "]],"parameters":[1,2,3]}],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"appreciation/components/appreciation-modal.hbs"}})
let b=(c=Ember.inject.service("tracking"),d=Ember._tracked,p=Ember._action,u=class extends a.default{constructor(){var e
super(...arguments);(0,t.default)(this,"tracking",m,this);(0,n.default)(this,"contextUrn",this.args.contextUrn);(0,n.default)(this,"origin",null!==(e=this.args.origin)&&void 0!==e?e:o.VALID_APPR_ORIGIN_TYPES.NONE);(0,n.default)(this,"recipientId",this.args.recipientId);(0,t.default)(this,"innerModalTitle",h,this)
const{appreciationUrl:i}=this.args
if(i){const{origin:e=o.VALID_APPR_ORIGIN_TYPES.NONE,contextUrn:t,recipients:n}=(0,l.parseQueryString)(i)
this.origin=e
this.contextUrn=t
this.recipientId=n}}trackedCloseApprModal(e){var t,n
if(e){const t=(0,s.createControlUrn)(e,o.APPR_CONTROL_NAMES.MODAL_CLOSE)
this.tracking.fireCustomUrnInteractionEvent(t)}null===(t=(n=this.args).onDismiss)||void 0===t||t.call(n)}},m=(0,i.default)(u.prototype,"tracking",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=(0,i.default)(u.prototype,"innerModalTitle",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(u.prototype,"trackedCloseApprModal",[p],Object.getOwnPropertyDescriptor(u.prototype,"trackedCloseApprModal"),u.prototype),u)
e.default=b
Ember._setComponentTemplate(g,b)})
define("appreciation/components/appreciation-trigger",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","global-utils/utils/is-browser"],function(e,t,n,i,r,a,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var o,l,c,d,p
const u=Ember.HTMLBars.template({id:"xfq49XMX",block:'{"symbols":["@origin","@contextUrn","@recipientId","@afterKudoShare","&attrs","@apprTriggerClasses","@buttonColor","@disabled","@buttonType","@dataControlName","&default"],"statements":[[7,"div",false],[12,"class","appr-trigger"],[13,5],[8],[0,"\\n  "],[5,"artdeco-button@artdeco-button",[[3,"ember-cli-pemberly-tracking@track-interaction",[[23,10,[]]]]],[["@class","@click","@color","@controlType","@disabled","@type"],[[23,6,[]],[23,0,["startAppreciationFlow"]],[28,"global-helpers@or",[[23,7,[]],"default"],null],"button",[23,8,[]],[23,9,[]]]],{"statements":[[0,"\\n    "],[14,11],[0,"\\n  "]],"parameters":[]}],[0,"\\n\\n"],[4,"if",[[23,0,["showAppreciationModal"]]],null,{"statements":[[0,"    "],[5,"appreciation@appreciation-modal",[],[["@isOpen","@onDismiss","@origin","@contextUrn","@recipientId","@afterKudoShare"],[[23,0,["showAppreciationModal"]],[23,0,["closeAppreciationModal"]],[23,1,[]],[23,2,[]],[23,3,[]],[23,4,[]]]]],[0,"\\n"]],"parameters":[]},null],[9]],"hasEval":false}',meta:{moduleName:"appreciation/components/appreciation-trigger.hbs"}})
let m=(o=Ember._tracked,l=Ember._action,c=Ember._action,d=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"showAppreciationModal",p,this)}startAppreciationFlow(){var e,t
null===(e=(t=this.args).beforeTrigger)||void 0===e||e.call(t)
this.showAppreciationModal=!0}closeAppreciationModal(){this.showAppreciationModal=!1
const{triggerElem:e}=this.args
e&&s.default&&e.focus()}},p=(0,i.default)(d.prototype,"showAppreciationModal",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,i.default)(d.prototype,"startAppreciationFlow",[l],Object.getOwnPropertyDescriptor(d.prototype,"startAppreciationFlow"),d.prototype),(0,i.default)(d.prototype,"closeAppreciationModal",[c],Object.getOwnPropertyDescriptor(d.prototype,"closeAppreciationModal"),d.prototype),d)
e.default=m
Ember._setComponentTemplate(u,m)})
define("appreciation/components/edit-message-view-component",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","msg-shared/utils/attachments-handler","appreciation/utils/constants"],function(e,t,n,i,r,a,s,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var l,c,d,p,u,m,h,g,b,f,_,E,y,T,v,C,O,S,w,A,I,P,N
const k=Ember.HTMLBars.template({id:"YJCPWm8H",block:'{"symbols":["assetLoader","@appreciationContent","&attrs","@recipientsChanged"],"statements":[[7,"div",false],[12,"class","appr-edit-message-view full-width"],[13,3],[8],[0,"\\n  "],[5,"msg-typeahead@connections-typeahead",[],[["@a11yText","@classNames","@prefilledRecipients","@placeholder","@recipientsChanged","@includeGroupConversationResults"],[[28,"t",["i18n_new_compose_recipients_label","appreciation/components/edit-message-view-component"],null],"appr-edit-message-view__typeahead",[23,2,["recipientMiniProfiles"]],[28,"t",["i18n_msg_typeahead_placeholder","appreciation/components/edit-message-view-component"],null],[28,"fn",[[23,4,[]],false],null],false]]],[0,"\\n  "],[7,"div",true],[10,"class","appr-edit-message-view__content"],[8],[0,"\\n    "],[7,"label",true],[10,"for","appr-edit-message-textarea"],[10,"class","visually-hidden"],[8],[0,"\\n      "],[1,[28,"t",["i18n_write_a_message","appreciation/components/edit-message-view-component"],null],false],[0,"\\n    "],[9],[0,"\\n    "],[5,"textarea",[[12,"placeholder",[28,"t",["i18n_write_a_message","appreciation/components/edit-message-view-component"],null]]],[["@name","@value","@id","@classNames","@spellcheck"],["message",[23,0,["message"]],"appr-edit-message-textarea","appr-edit-message-view__textarea t-14",true]]],[0,""],[4,"if",[[23,0,["uploadingKudoAttachmentError"]]],null,{"statements":[[0,"      "],[5,"asset-loader@deferred-asset-loader",[],[["@bundle"],["msg-rich-media"]],{"statements":[[0,"\\n"],[4,"if",[[23,1,["state","fulfilled"]]],null,{"statements":[[0,"          "],[5,"msg-rich-media@upload-attachment-previews",[],[["@attachments","@classNames","@removeAttachment","@hideAttachmentInfo"],[[23,0,["kudoAttachments"]],"appr-edit-message-view__attachment-previews",[23,0,["removeKudoAttachments"]],true]]],[0,"\\n"]],"parameters":[]},null],[0,"      "]],"parameters":[1]}],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,0,["kudoAttachments","length"]]],null,{"statements":[[0,"      "],[7,"div",true],[10,"class","m2 relative"],[8],[0,"\\n"],[4,"if",[[23,0,["isUploadingKudoAttachment"]]],null,{"statements":[[0,"          "],[5,"artdeco-loader@artdeco-loader",[],[[],[]]],[0,"\\n"]],"parameters":[]},{"statements":[[0,"          "],[5,"artdeco-button@artdeco-button",[[12,"aria-label",[28,"t",["i18n_close_btn_a11y","appreciation/components/edit-message-view-component"],null]]],[["@type","@size","@color","@class","@icon","@click","@circle"],["primary","1","muted","appr-edit-message-view__preview-container-controls","cancel-icon",[23,0,["removeKudoAttachments"]],true]]],[0,"\\n          "],[5,"feed-shared@render-models/mini-update-v2",[],[["@showContentOnly","@update","@class"],[true,[23,2,["kudosPreviewData"]],"appr-edit-message-view__preview-container--as-box"]]],[0,"\\n"]],"parameters":[]}],[0,"      "],[9],[0,"\\n    "]],"parameters":[]},null]],"parameters":[]}],[0,"  "],[9],[0,"\\n\\n  "],[7,"footer",true],[10,"class","appr-edit-message-view__footer"],[8],[0,"\\n    "],[5,"artdeco-button@artdeco-button",[],[["@classNames","@size","@disabled","@text","@click"],["mlA","2",[28,"unless",[[23,0,["isValidForm"]],"disabled"],null],[28,"t",["i18n_send_message","appreciation/components/edit-message-view-component"],null],[23,0,["sendMessage"]]]]],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"appreciation/components/edit-message-view-component.hbs"}})
let R=(l=Ember.inject.service("authentication@authenticated-user"),c=Ember.inject.service("i18n"),d=Ember.inject.service("jet"),p=Ember.inject.service("msg-data@data-manager"),u=Ember.inject.service("tracking"),m=Ember.inject.service("vector@vector-upload"),h=Ember._tracked,g=Ember._tracked,b=Ember._tracked,f=Ember._tracked,_=Ember._action,E=Ember._action,y=class extends a.default{get isValidForm(){if(this.uploadingKudoAttachmentError)return!1
const e=this.kudoAttachments.length,t=Ember.get(this.args,"appreciationContent.recipientMiniProfiles.length")>0
return e?t:t&&this.message}constructor(){super(...arguments);(0,t.default)(this,"authenticatedUser",T,this);(0,t.default)(this,"i18n",v,this);(0,t.default)(this,"jet",C,this);(0,t.default)(this,"msgDataManager",O,this);(0,t.default)(this,"tracking",S,this);(0,t.default)(this,"vectorUpload",w,this);(0,t.default)(this,"isUploadingKudoAttachment",A,this);(0,t.default)(this,"kudoAttachments",I,this);(0,t.default)(this,"message",P,this);(0,t.default)(this,"uploadingKudoAttachmentError",N,this)
this.message=Ember.get(this.args,"appreciationContent.prefilledText")
let e=0
const n=this.i18n.lookupTranslation("component","appreciation@edit-message-view-component","kudos_error_label")(),i=Ember.get(this.args,"appreciationContent.kudoImageFile"),r=new s.default({vectorUpload:this.vectorUpload,tracking:this.tracking,jet:this.jet,updateUI:e=>{this.kudoAttachments=[e]},beforeUpload:()=>{this.isUploadingKudoAttachment=!0
e+=1},onUploadSuccess:()=>{if(!this.isDestroying){this.isUploadingKudoAttachment=!1
this.uploadingKudoAttachmentError=!1}},onUploadFailure:t=>{if(!this.isDestroying){if(e===o.KUDO_ATTACHMENT_ATTEMPTS_LIMIT){this.isUploadingKudoAttachment=!1
this.uploadingKudoAttachmentError=!0
throw t}r.uploadAttachment(i,!1,n)}}})
r.uploadAttachment(i,!1,n)}removeKudoAttachments(){this.kudoAttachments=[]}sendMessage(){if(!this.isValidForm)return Ember.RSVP.resolve()
const e=Ember.get(this.args,"appreciationContent.recipientMiniProfiles"),t={attachments:this.kudoAttachments,message:this.message.trim(),messageReplyType:"MEMBER_TO_MEMBER",recipientIDs:e.map(e=>Ember.get(e,"entityUrn")),senderID:Ember.get(this,"authenticatedUser.miniProfile.entityUrn")}
return this.msgDataManager.createAndSaveConversation(t).then(()=>{this.args.afterSendMessage(!0)}).catch(e=>{this.args.afterSendMessage(!1)
throw e})}},T=(0,i.default)(y.prototype,"authenticatedUser",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=(0,i.default)(y.prototype,"i18n",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=(0,i.default)(y.prototype,"jet",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=(0,i.default)(y.prototype,"msgDataManager",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=(0,i.default)(y.prototype,"tracking",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=(0,i.default)(y.prototype,"vectorUpload",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=(0,i.default)(y.prototype,"isUploadingKudoAttachment",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),I=(0,i.default)(y.prototype,"kudoAttachments",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),P=(0,i.default)(y.prototype,"message",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),N=(0,i.default)(y.prototype,"uploadingKudoAttachmentError",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,i.default)(y.prototype,"removeKudoAttachments",[_],Object.getOwnPropertyDescriptor(y.prototype,"removeKudoAttachments"),y.prototype),(0,i.default)(y.prototype,"sendMessage",[E],Object.getOwnPropertyDescriptor(y.prototype,"sendMessage"),y.prototype),y)
e.default=R
Ember._setComponentTemplate(k,R)})
define("appreciation/components/edit-post-view-component",["exports","@glimmer/component","appreciation/utils/constants"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=Ember.HTMLBars.template({id:"6I5IGJsS",block:'{"symbols":["&attrs","@appreciationContent","@handleAfterShareThenCloseModal"],"statements":[[7,"div",false],[12,"class","appr-edit-post-view full-width"],[13,1],[8],[0,"\\n  "],[5,"sharing-entry@legacy-share-box",[],[["@initialDetourManager","@isShareboxInModal","@onShareSuccess","@shareOrigin"],[[23,2,["initialDetourManager"]],true,[28,"action",[[23,0,[]],[23,3,[]]],null],[23,0,["shareOrigin"]]]]],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"appreciation/components/edit-post-view-component.hbs"}})
class r extends t.default{get shareOrigin(){switch(Ember.get(this.args,"appreciationContent.origin")){case n.VALID_APPR_ORIGIN_TYPES.NON_SELF_PROFILE:case n.VALID_APPR_ORIGIN_TYPES.HIGHLIGHTS_CONNECTION_ANNIVERSARY:return"PROFILE"
case n.VALID_APPR_ORIGIN_TYPES.NOTIFICATION_CONNECTION_ANNIVERSARY:return"NOTIFICATION"
case n.VALID_APPR_ORIGIN_TYPES.FEED_POST:case n.VALID_APPR_ORIGIN_TYPES.NONE:case n.VALID_APPR_ORIGIN_TYPES.PROMO:case n.VALID_APPR_ORIGIN_TYPES.FEED_CTA:return"FEED"
default:return}}}e.default=r
Ember._setComponentTemplate(i,r)})
define("appreciation/components/empty-view-component",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const t=Ember.HTMLBars.template({id:"htPuj1cZ",block:'{"symbols":["@retryFetchingTemplates","@appreciationContent","&attrs"],"statements":[[7,"div",false],[12,"class","appr-empty-view full-width"],[13,3],[3,"ember-cli-pemberly-tracking@track-render",null,[["pageKey","routeName","currentRoute"],["flagship3_appreciations",[28,"get",[[28,"-get-dynamic-var",["outletState"],null],"render.name"],null],[28,"get",[[28,"-get-dynamic-var",["outletState"],null],"render"],null]]]],[8],[0,"\\n"],[4,"if",[[23,2,["isLoading"]]],null,{"statements":[[0,"    "],[5,"artdeco-loader@artdeco-loader",[],[[],[]]],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,2,["isError"]]],null,{"statements":[[0,"    "],[7,"div",true],[10,"class","appr-empty-view__error-illustration"],[8],[9],[0,"\\n\\n    "],[7,"section",true],[10,"class","appr-empty-view__error-content"],[8],[0,"\\n      "],[7,"h3",true],[10,"class","t-32 t-black t-normal"],[8],[0,"\\n        "],[1,[28,"t",["error_headline","appreciation/components/empty-view-component"],null],false],[0,"\\n      "],[9],[0,"\\n      "],[5,"artdeco-button@artdeco-button",[[3,"ember-cli-pemberly-tracking@track-interaction",["appreciations_404_error"]]],[["@size","@text","@type","@click","@class"],["4",[28,"t",["retry_button_label","appreciation/components/empty-view-component"],null],"secondary",[23,1,[]],"mv6"]]],[0,"\\n    "],[9],[0,"\\n  "]],"parameters":[]},null]],"parameters":[]}],[9]],"hasEval":false}',meta:{moduleName:"appreciation/components/empty-view-component.hbs"}})
var n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})
define("appreciation/components/kudos-detour",["exports","@glimmer/component","appreciation/utils/constants"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=Ember.HTMLBars.template({id:"ktvurR4H",block:'{"symbols":["subcomponents","actions","properties","ShareTypeDropdown","@isFromTeamMomentsDetour","&attrs","@occasion","@detourData","@onDetourComplete","@goToCreation","@organizationActorUrn","@updateShareboxModalConfig","@transitionToChooserMenu"],"statements":[[7,"div",false],[12,"class","appr-kudos-detour full-height"],[13,6],[8],[0,"\\n  "],[5,"appreciation@appreciation-container",[[12,"class","appr-kudos-detour__container"]],[["@origin","@occasion","@contextUrn","@afterKudoShare","@exitApprFlow","@isInEditMode","@isDetour","@onDetourComplete","@goToCreation","@organizationActorUrn","@recipientMiniProfiles","@updateModalHeader","@updateShareboxModalConfig","@transitionToChooserMenu"],[[23,0,["kudosOrigin"]],[23,7,[]],[23,8,["contextUrn"]],[23,8,["afterKudoShare"]],[23,8,["exitApprFlow"]],[23,8,["isInEditMode"]],true,[23,9,[]],[23,10,[]],[23,11,[]],[23,8,["recipientMiniProfiles"]],[23,8,["updateModalHeader"]],[23,12,[]],[23,13,[]]]],{"statements":[[0,"\\n\\n    "],[7,"div",true],[10,"class","share-box-modal-content__container"],[8],[0,"\\n      "],[1,[28,"component",[[28,"ember-holy-futuristic-template-namespacing-batman@-translate-dynamic-2",[[23,1,["appreciationView"]]],null]],null],false],[0,"\\n    "],[9],[0,"\\n\\n"],[4,"if",[[23,3,["subaction"]]],null,{"statements":[[4,"if",[[23,5,[]]],null,{"statements":[[0,"        "],[5,"detour-framework@share-box-footer",[],[["@showBackButton","@onBackClick","@showNextButton","@onNextClick","@disableNextButton","@onDoneClick"],[true,[28,"if",[[23,3,["canVisitPreviousView"]],[23,2,["onBack"]],[23,2,["transitionToChooserMenuOrSharebox"]]],null],[28,"global-helpers@not",[[23,3,["subaction","useDetourNext"]]],null],[28,"fn",[[23,2,["onNext"]],[23,3,["subaction","subactionControlName"]]],null],[23,3,["subaction","isSubactionDisabled"]],[28,"fn",[[23,2,["onDetourNext"]],[23,3,["subaction","subactionControlName"]]],null]]]],[0,"\\n"]],"parameters":[]},{"statements":[[0,"        "],[7,"section",true],[10,"class","appr-kudos-detour__footer"],[8],[0,"\\n"],[4,"if",[[23,3,["showShareTypeDropdown"]]],null,{"statements":[[4,"let",[[28,"component",[[28,"ember-holy-futuristic-template-namespacing-batman@-translate-dynamic-2",[[23,1,["shareTypeDropdown"]]],null]],null]],null,{"statements":[[0,"              "],[6,[23,4,[]],[[12,"class","fl"]],[[],[]]],[0,"\\n"]],"parameters":[4]},null]],"parameters":[]},null],[0,"          "],[7,"div",true],[10,"class","mlA"],[8],[0,"\\n"],[4,"if",[[28,"global-helpers@and",[[23,3,["canVisitPreviousView"]],[23,0,["showBackButton"]]],null]],null,{"statements":[[0,"              "],[5,"artdeco-button@artdeco-button",[],[["@type","@color","@text","@click"],["secondary","muted",[23,3,["subaction","backButtonName"]],[23,2,["onBack"]]]]],[0,"\\n"]],"parameters":[]},null],[0,"            "],[5,"artdeco-button@artdeco-button",[],[["@text","@disabled","@click"],[[23,3,["subaction","subactionName"]],[23,3,["subaction","isSubactionDisabled"]],[28,"fn",[[28,"if",[[23,3,["subaction","useDetourNext"]],[23,2,["onDetourNext"]],[23,2,["onNext"]]],null],[23,3,["subaction","subactionControlName"]]],null]]]],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]}]],"parameters":[]},{"statements":[[4,"if",[[28,"global-helpers@and",[[28,"global-helpers@eq",[[23,3,["currentView"]],"emptyView"],null],[23,5,[]]],null]],null,{"statements":[[0,"      "],[5,"detour-framework@share-box-footer",[],[["@showBackButton","@onBackClick","@deprecatedHideDoneButton"],[true,[23,2,["transitionToChooserMenuOrSharebox"]],true]]],[0,"\\n    "]],"parameters":[]},null]],"parameters":[]}],[0,"  "]],"parameters":[1,2,3]}],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"appreciation/components/kudos-detour.hbs"}})
class r extends t.default{get kudosOrigin(){var e,t
return(null===(e=this.args)||void 0===e?void 0:null===(t=e.detourData)||void 0===t?void 0:t.origin)||n.VALID_APPR_ORIGIN_TYPES.FEED_POST}get showBackButton(){return this.kudosOrigin!==n.VALID_APPR_ORIGIN_TYPES.FEED_POST}}e.default=r
Ember._setComponentTemplate(i,r)})
define("appreciation/components/select-kudo-view-component",["exports","@glimmer/component","global-utils/utils/is-browser"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=Ember.HTMLBars.template({id:"PV4JenwS",block:'{"symbols":["kudoTemplate","recipientNameLine","@appreciationContent","@selectKudoTemplate","@isInEditMode","&attrs"],"statements":[[7,"div",false],[12,"tabindex","-1"],[12,"class",[29,["appr-select-kudo-view ",[28,"unless",[[23,5,[]],"appr-select-kudo-view--non-edit"],null]]]],[13,6],[3,"ember-cli-pemberly-tracking@track-render",null,[["pageKey","routeName","currentRoute"],["flagship3_appreciations_award",[28,"get",[[28,"-get-dynamic-var",["outletState"],null],"render.name"],null],[28,"get",[[28,"-get-dynamic-var",["outletState"],null],"render"],null]]]],[8],[0,"\\n  "],[7,"section",true],[10,"class","appr-select-kudo-view__preview relative full-width"],[8],[0,"\\n    "],[7,"img",true],[10,"class","appr-select-kudo-view__preview-background-image full-width"],[11,"src",[23,3,["selectedKudoTemplate","backgroundImageUrl"]]],[11,"alt",[28,"t",["preview_background_img_alt","appreciation/components/select-kudo-view-component"],null]],[8],[9],[0,"\\n    "],[7,"h3",true],[10,"class","appr-select-kudo-view__preview-text appr-select-kudo-view__preview-kudo-text"],[8],[0,"\\n      "],[1,[28,"text-view-model@text-view-model",[[23,3,["selectedKudoTemplate","title"]]],null],false],[0,"\\n    "],[9],[0,"\\n    "],[7,"h3",true],[11,"class",[28,"concat",["appr-select-kudo-view__preview-text appr-select-kudo-view__preview-name-text",[28,"if",[[23,3,["recipientNameLines","useSmallFont"]]," appr-select-kudo-view__preview-name-text--small"],null]],null]],[8],[0,"\\n"],[4,"each",[[23,3,["recipientNameLines","textLines"]]],null,{"statements":[[0,"        "],[7,"div",true],[8],[1,[23,2,[]],false],[9],[0,"\\n"]],"parameters":[2]},null],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[7,"section",true],[11,"class",[28,"concat",["appr-select-kudo-view__kudos-templates-section mt2 mh4"],null]],[8],[0,"\\n    "],[7,"ul",true],[10,"class","appr-select-kudo-view__kudo-templates-list"],[8],[0,"\\n"],[4,"each",[[23,3,["kudoTemplates"]]],null,{"statements":[[0,"        "],[7,"li",true],[11,"class",[28,"concat",["appr-select-kudo-view__kudo-templates-list-item appr-select-kudo-view__kudo-templates-list-item--",[28,"if",[[28,"global-helpers@eq",[[23,3,["selectedKudoTemplate"]],[23,1,[]]],null],"is-selected","muted"],null]],null]],[8],[0,"\\n          "],[7,"button",false],[12,"class","appr-select-kudo-view__kudo-template-button"],[12,"aria-pressed",[28,"if",[[28,"global-helpers@eq",[[23,3,["selectedKudoTemplate"]],[23,1,[]]],null],"true","false"],null]],[12,"type","button"],[3,"action",[[23,0,[]],[23,4,[]],[23,1,[]]]],[8],[0,"\\n            "],[5,"image-view-model@image-view-model-base",[],[["@images","@imgWidth","@imgClasses"],[[23,1,["iconImage"]],800,"appr-select-kudo-view__kudo-template-icon appr-select-kudo-view__kudo-template-icon--muted"]]],[0,"\\n            "],[7,"p",true],[10,"class","appr-select-kudo-view__kudo-template-title appr-select-kudo-view__kudo-template-title--muted t-16"],[8],[0,"\\n"],[4,"if",[[28,"global-helpers@eq",[[23,3,["selectedKudoTemplate"]],[23,1,[]]],null]],null,{"statements":[[0,"                "],[7,"span",true],[10,"class","visually-hidden"],[8],[1,[28,"t",["selected_a11y","appreciation/components/select-kudo-view-component"],null],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"              "],[7,"span",true],[11,"aria-hidden",[28,"if",[[23,0,["isEdgeBrowser"]],"false","true"],null]],[8],[0,"\\n                "],[1,[28,"text-view-model@text-view-model",[[23,1,["title"]]],null],false],[0,"\\n              "],[9],[0,"\\n            "],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"appreciation/components/select-kudo-view-component.hbs"}})
class r extends t.default{constructor(){super(...arguments)
n.default&&(this.isEdgeBrowser=/Edge/.test(window.navigator.userAgent))}}e.default=r
Ember._setComponentTemplate(i,r)})
define("appreciation/components/select-recipients-view-component",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const t=Ember.HTMLBars.template({id:"wS79/LN5",block:'{"symbols":["@recipientsChanged","@appreciationContent","@fetchTypeaheadSearchHits","&attrs","@organizationActorUrn"],"statements":[[7,"div",false],[12,"class","appr-select-recipients-view"],[13,4],[3,"ember-cli-pemberly-tracking@track-render",null,[["pageKey","routeName","currentRoute"],["flagship3_appreciations_typeahead",[28,"get",[[28,"-get-dynamic-var",["outletState"],null],"render.name"],null],[28,"get",[[28,"-get-dynamic-var",["outletState"],null],"render"],null]]]],[8],[0,"\\n"],[4,"if",[[23,5,[]]],null,{"statements":[[0,"    "],[5,"team-moments@multi-select-typeahead",[],[["@typeaheadSearchFn","@onSelectionsChanged","@placeholder","@prefilledSelections","@entitySelectedControlName","@entityUnselectedControlName"],[[28,"action",[[23,0,[]],[23,3,[]]],null],[28,"fn",[[23,1,[]],true],null],[28,"t",["search_members_placeholder","appreciation/components/select-recipients-view-component"],null],[23,2,["recipientMiniProfiles"]],"appreciation_typeahead_textentry","appreciation_typeahead_textentry"]]],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[5,"msg-typeahead@connections-typeahead",[],[["@a11yText","@class","@placeholder","@recipientsChanged","@prefilledRecipients"],[[28,"t",["a11y_kudo_recipients_label","appreciation/components/select-recipients-view-component"],null],"appr-select-recipients-view__connections-typeahead",[28,"t",["search_placeholder","appreciation/components/select-recipients-view-component"],null],[28,"fn",[[23,1,[]],true],null],[23,2,["recipientMiniProfiles"]]]]],[0,"\\n"]],"parameters":[]}],[0,"\\n\\n  "],[7,"section",true],[10,"class","appr-select-recipients-view__content"],[8],[0,"\\n    "],[7,"h3",true],[10,"class","t-24 t-black t-normal ph6"],[8],[0,"\\n"],[4,"if",[[23,5,[]]],null,{"statements":[[0,"        "],[1,[28,"t",["select_member_recipient_headline","appreciation/components/select-recipients-view-component"],null],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"        "],[1,[28,"t",["select_recipient_headline","appreciation/components/select-recipients-view-component"],null],false],[0,"\\n"]],"parameters":[]}],[0,"    "],[9],[0,"\\n    "],[7,"p",true],[10,"class","t-14 t-black--light t-normal pt2 ph6"],[8],[0,"\\n"],[4,"if",[[23,5,[]]],null,{"statements":[[0,"        "],[1,[28,"t",["select_members_recipient_sub_headline","appreciation/components/select-recipients-view-component"],null],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"        "],[1,[28,"t",["select_recipient_sub_headline","appreciation/components/select-recipients-view-component"],null],false],[0,"\\n"]],"parameters":[]}],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"appreciation/components/select-recipients-view-component.hbs"}})
var n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})
define("appreciation/components/share-type-dropdown",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","appreciation/utils/constants","global-utils/utils/is-browser","ember-lifeline"],function(e,t,n,i,r,a,s,o,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var c,d,p,u,m,h,g
const b=Ember.HTMLBars.template({id:"7W0AMbCF",block:'{"symbols":["dropdown","&attrs","@setShareType","@shareToFeedOptionText","@sendAsMessageOptionText"],"statements":[[7,"div",false],[13,2],[8],[0,"\\n  "],[5,"artdeco-dropdown@artdeco-dropdown",[],[["@isOpen","@onVisibilityChange","@placement","@useNewFocusModel","@class"],[[23,0,["isDropdownOpen"]],[28,"ember-simple-set-helper@set",[[23,0,[]],"isDropdownOpen"],null],[23,0,["dropdownPlacement"]],true,"appr-share-type-dropdown"]],{"statements":[[0,"\\n    "],[6,[23,1,["dropdown-trigger"]],[],[["@class","@withIcon"],["appr-share-type-dropdown__trigger artdeco-button artdeco-button--secondary artdeco-button--muted",true]],{"statements":[[0,"\\n      "],[7,"span",true],[10,"class","a11y-text"],[8],[1,[28,"t",["i18n_kudos_visibility","appreciation/components/share-type-dropdown"],null],false],[9],[0,"\\n      "],[7,"span",true],[10,"class","appr-share-type-dropdown__trigger-text t-16"],[11,"title",[23,0,["triggerLabel"]]],[8],[0,"\\n        "],[1,[23,0,["triggerLabel"]],false],[0,"\\n      "],[9],[0,"\\n    "]],"parameters":[]}],[0,"\\n\\n    "],[6,[23,1,["dropdown-content"]],[],[[],[]],{"statements":[[0,"\\n      "],[7,"ul",true],[8],[0,"\\n        "],[7,"li",true],[10,"role","option"],[8],[0,"\\n          "],[5,"artdeco-dropdown@artdeco-dropdown-item",[[12,"aria-selected",[23,0,["isFeedShareType"]]],[12,"aria-label",[28,"if",[[23,0,["isFeedShareType"]],[28,"t",["i18n_selected","appreciation/components/share-type-dropdown"],[["selectedOption"],[[23,4,[]]]]],[23,4,[]]],null]]],[["@itemSelected","@selected","@class"],[[28,"fn",[[23,1,["invokeAndClose"]],[28,"fn",[[23,3,[]],[23,0,["feedShareType"]]],null]],null],[23,0,["isFeedShareType"]],"cursor-pointer t-16"]],{"statements":[[0,"\\n            "],[1,[23,4,[]],false],[0,"\\n          "]],"parameters":[]}],[0,"\\n        "],[9],[0,"\\n        "],[7,"li",true],[10,"role","option"],[8],[0,"\\n          "],[5,"artdeco-dropdown@artdeco-dropdown-item",[[12,"aria-selected",[23,0,["isMessageShareType"]]],[12,"aria-label",[28,"if",[[23,0,["isMessageShareType"]],[28,"t",["i18n_selected","appreciation/components/share-type-dropdown"],[["selectedOption"],[[23,5,[]]]]],[23,5,[]]],null]]],[["@itemSelected","@selected","@class"],[[28,"fn",[[23,1,["invokeAndClose"]],[28,"fn",[[23,3,[]],[23,0,["messageShareType"]]],null]],null],[23,0,["isMessageShareType"]],"cursor-pointer t-16"]],{"statements":[[0,"\\n            "],[1,[23,5,[]],false],[0,"\\n          "]],"parameters":[]}],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n    "]],"parameters":[]}],[0,"\\n  "]],"parameters":[1]}],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"appreciation/components/share-type-dropdown.hbs"}})
let f=(c=Ember.inject.service("global-services@window"),d=Ember._tracked,p=Ember._tracked,u=class extends a.default{get isFeedShareType(){return this.args.shareType===this.feedShareType}get isMessageShareType(){return this.args.shareType===this.messageShareType}get triggerLabel(){return this.typeToLabelMap[this.args.shareType]}constructor(){super(...arguments);(0,t.default)(this,"windowService",m,this);(0,t.default)(this,"dropdownPlacement",h,this);(0,t.default)(this,"isDropdownOpen",g,this);(0,n.default)(this,"feedShareType",s.APPR_SHARE_TYPES.FEED);(0,n.default)(this,"messageShareType",s.APPR_SHARE_TYPES.MSG);(0,n.default)(this,"typeToLabelMap",{[this.feedShareType]:this.args.shareToFeedOptionText,[this.messageShareType]:this.args.sendAsMessageOptionText})
this._setDropdownPlacement()
o.default&&(0,l.addEventListener)(this,window,"resize",this._debounceSetDropdownPlacement)}willDestroy(){super.willDestroy.apply(this,arguments)
o.default&&(0,l.runDisposables)(this)}_setDropdownPlacement(){if(!o.default||this.isDestroying)return
const e=Ember.get(this,"windowService.window").innerHeight,{dropdownPlacement:t}=this
e<600&&t!==s.SHARE_TYPE_DROPDOWN_PLACEMENTS.TOP?this.dropdownPlacement=s.SHARE_TYPE_DROPDOWN_PLACEMENTS.TOP:e>=600&&t!==s.SHARE_TYPE_DROPDOWN_PLACEMENTS.BOTTOM&&(this.dropdownPlacement=s.SHARE_TYPE_DROPDOWN_PLACEMENTS.BOTTOM)}_debounceSetDropdownPlacement(){(0,l.debounceTask)(this,"_setDropdownPlacement",500)}},m=(0,i.default)(u.prototype,"windowService",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=(0,i.default)(u.prototype,"dropdownPlacement",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return s.SHARE_TYPE_DROPDOWN_PLACEMENTS.BOTTOM}}),g=(0,i.default)(u.prototype,"isDropdownOpen",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),u)
e.default=f
Ember._setComponentTemplate(b,f)})
define("appreciation/utils/appreciation-content",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper"],function(e,t,n,i,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var a,s,o,l,c,d,p,u,m,h,g,b,f,_,E,y,T,v,C,O,S,w,A
let I=(a=Ember._tracked,s=Ember._tracked,o=Ember._tracked,l=Ember._tracked,c=Ember._tracked,d=Ember._tracked,p=Ember._tracked,u=Ember._tracked,m=Ember._tracked,h=Ember._tracked,g=Ember._tracked,b=class{constructor(e,i){(0,t.default)(this,"appreciationUrn",f,this);(0,t.default)(this,"isError",_,this);(0,t.default)(this,"isLoading",E,this);(0,t.default)(this,"kudoImageFile",y,this);(0,t.default)(this,"kudoTemplates",T,this);(0,t.default)(this,"kudosPreviewData",v,this);(0,t.default)(this,"recipientFullNames",C,this);(0,t.default)(this,"recipientMiniProfiles",O,this);(0,t.default)(this,"recipientNameLines",S,this);(0,t.default)(this,"selectedKudoTemplate",w,this);(0,t.default)(this,"startPageInstance",A,this);(0,n.default)(this,"origin",void 0);(0,n.default)(this,"translatedKudosHashtagText",void 0)
this.origin=e
this.translatedKudosHashtagText=i}get imageSrc(){var e
return null!==(e=Ember.get(this,"selectedKudoTemplate.backgroundImageUrl"))&&void 0!==e?e:""}get kudoText(){var e
return null!==(e=Ember.get(this,"selectedKudoTemplate.title.text"))&&void 0!==e?e:""}get prefilledText(){return this.selectedKudoTemplate?`${Ember.get(this,"selectedKudoTemplate.contextSuggestion.text")} `:""}get defaultTextAndMentions(){let e="",t=null
Ember.isEmpty(this.recipientFullNames)||Ember.isEmpty(this.recipientMiniProfiles)||(t=this._getDefaultMentions())
this.selectedKudoTemplate&&!Ember.isEmpty(this.recipientFullNames)&&(e=this._getDefaultShareText(this.recipientFullNames))
return{text:e,mentions:t}}_getDefaultShareText(e){return`${e.join(" ")} #${this.translatedKudosHashtagText} ${this.prefilledText}`}_getDefaultMentions(){let e=0
return this.recipientFullNames.map((t,n)=>{const i={entity:this.recipientMiniProfiles[n],match:{start:e,length:t.length,text:t}}
e+=t.length+1
return i})}},f=(0,i.default)(b.prototype,"appreciationUrn",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=(0,i.default)(b.prototype,"isError",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),E=(0,i.default)(b.prototype,"isLoading",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),y=(0,i.default)(b.prototype,"kudoImageFile",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=(0,i.default)(b.prototype,"kudoTemplates",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),v=(0,i.default)(b.prototype,"kudosPreviewData",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=(0,i.default)(b.prototype,"recipientFullNames",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),O=(0,i.default)(b.prototype,"recipientMiniProfiles",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),S=(0,i.default)(b.prototype,"recipientNameLines",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=(0,i.default)(b.prototype,"selectedKudoTemplate",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=(0,i.default)(b.prototype,"startPageInstance",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b)
e.default=I})
define("appreciation/utils/appreciation-image-utils",["exports","global-utils/utils/is-browser","global-utils/utils/image-utils","appreciation/utils/constants"],function(e,t,n,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.generateAppreciationImage=function(){let{imageSrc:e,kudoText:r,recipientNameLines:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return new Ember.RSVP.Promise(o=>{if(t.default){const t=new window.Image
t.crossOrigin="anonymous"
t.onload=(e=>{Ember.run(()=>{const{height:g,width:f}=e.srcElement,_=document.createElement("canvas"),E=(function(){let{canvas:e,image:t,kudoText:n,recipientNameLines:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
e.width=t.width
e.height=t.height
const r=e.getContext("2d")
r.drawImage(t,0,0)
r.textAlign="center"
r.fillStyle="rgba(0, 0, 0, 0.9)"
r.translate(0,d)
b(r,n,c)
r.translate(0,l+a)
const s=i.useSmallFont?m:p,o=i.useSmallFont?h:u
i.textLines.forEach(e=>{b(r,e,s)
r.translate(0,o)})
return e.toDataURL()})({canvas:_,image:t,kudoText:r,recipientNameLines:s}),y=(0,n.generateImageBlob)(E)
Ember.setProperties(y,{src:E,height:g,width:f,name:i.KUDOS_IMAGE_FILE_NAME,accessibilityText:`${r}, ${s.textLines.join(" ")}`})
o(y)})})
t.src=e}else o(null)})}
e.getTruncatedNameLines=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2
if(t.default){const t=document.createElement("canvas"),i=t.getContext("2d"),r=e.split(" "),a=o-2*s
i.font=p
let l=_(r,a,i)
if(l.length<=n)return{textLines:l,useSmallFont:!1}
i.font=m
if((l=_(r,a,i)).length<=n)return{textLines:l,useSmallFont:!0}
const c=[]
for(let e=0;e<n;e++){let t=l[e]
e===n-1&&(t=f(t,a,i))
c.push(t)}return{textLines:c,useSmallFont:!0}}return null}
const r=Ember.testing?"Arial":"system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,\nRoboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell,\nDroid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Emoji, Segoe UI Symbol,\nLucida Grande, Helvetica, Arial, sans-serif",a=4,s=210,o=1108,l=60,c=`44px ${r}`,d=44+8*a,p=`bold 52px ${r}`,u=67,m=`bold 40px ${r}`,h=54,g="…"
function b(e,t,n){e.font=n
e.fillText(t,e.canvas.width/2,0)}function f(e,t,n){let i=e
for(;n.measureText(`${i} ${g}`).width>t;){const e=i.split(" ")
e.pop()
i=e.join(" ")}return`${i} ${g}`}function _(e,t,n){const i=[]
let r=""
e.forEach((a,s)=>{const o=r.length?r.concat(` ${a}`):a,l=n.measureText(o).width
if(l>t)if(r.length){i.push(r)
r=a}else{i.push(o)
r=""}else if(l===t){i.push(o)
r=""}else{if(s===e.length-1){i.push(o)
r=""
return}r=o}})
r.length&&i.push(r)
return i}})
define("appreciation/utils/appreciation-typeahead-utils",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=function(e){const{subtext:t,text:n,trackingId:i}=Ember.getProperties(e,"subtext","text","trackingId"),r=Ember.get(e,"hitInfo.miniProfile"),{entityUrn:a,firstName:s,lastName:o,maidenName:l,objectUrn:c,picture:d,publicIdentifier:p}=Ember.getProperties(r,"entityUrn","firstName","lastName","maidenName","objectUrn","picture","publicIdentifier")
return Ember.Object.create({image:d||{attributes:[{sourceType:"PROFILE_GHOST"}],accessibilityTextAttributes:[],$type:"com.linkedin.voyager.common.ImageViewModel"},subtext:{text:t},type:"PEOPLE",$type:"com.linkedin.voyager.typeahead.TypeaheadHitV2",targetUrn:a,text:n,trackingId:i,objectUrn:c,entityUrn:a,firstName:s,lastName:o,maidenName:l,publicIdentifier:p,miniProfile:r})}})
define("appreciation/utils/constants",["exports","global-utils/utils/url"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.APPRECIATION_BASE_URL=e.SHARE_TYPE_DROPDOWN_PLACEMENTS=e.KUDO_ATTACHMENT_ATTEMPTS_LIMIT=e.KUDOS_IMAGE_FILE_NAME=e.APPR_GENERATE_URL=e.APPR_LIX_KEYS=e.APPR_I18N_KEYS=e.APPR_VIEW_STATES=e.APPR_VIEWS=e.APPR_PAGE_KEYS=e.APPR_CONTROL_NAMES=e.APPR_CUSTOM_TRACKING_EVENTS=e.APPR_SHARE_TYPES=e.VALID_APPR_ORIGIN_TYPES=void 0
e.VALID_APPR_ORIGIN_TYPES={NON_SELF_PROFILE:"NON_SELF_PROFILE",FEED_POST:"FEED_POST",NOTIFICATION_CONNECTION_ANNIVERSARY:"NOTIFICATION_CONNECTION_ANNIVERSARY",HIGHLIGHTS_CONNECTION_ANNIVERSARY:"HIGHLIGHTS_CONNECTION_ANNIVERSARY",NONE:"NONE",PROMO:"PROMO",FEED_CTA:"FEED_CTA"}
e.APPR_SHARE_TYPES={FEED:"feed",MSG:"message"}
const n={MEMBER_SELECT_IMPRESSION_EVENT:"AppreciationMemberSelectImpressionEvent",CREATE_IMPRESSION_EVENT:"AppreciationCreateImpressionEvent",SUBMIT_EVENT:"AppreciationSubmitEvent",POST_EVENT:"AppreciationPostEvent",MSG_EVENT:"AppreciationMessageEvent"}
e.APPR_CUSTOM_TRACKING_EVENTS=n
const i={TYPEAHEAD_NEXT:"appreciations_typeahead_next",TYPEAHEAD_TEXT_ENTRY:"appreciations_typeahead_textentry",AWARD_NEXT:"appreciations_award_next",AWARD_SELECT_AWARD:"appreciations_award_selectaward",MODAL_CLOSE:"appreciations_modalclose",RETRY:"appreciations_404_error",BACK:"back"}
e.APPR_CONTROL_NAMES=i
const r={EMPTY:"flagship3_appreciations",TYPEAHEAD:"flagship3_appreciations_typeahead",AWARD:"flagship3_appreciations_award"}
e.APPR_PAGE_KEYS=r
const a={EMPTY_VIEW:"emptyView",SELECT_RECIPIENTS_VIEW:"selectRecipientsView",SELECT_KUDO_VIEW:"selectKudoView",EDIT_MSG_VIEW:"editMessageView",EDIT_POST_VIEW:"editPostView"}
e.APPR_VIEWS=a
const s={[a.EMPTY_VIEW]:{viewComponent:"appreciation@empty-view-component",modalTitleKey:"give_kudos_title",shareboxCloseControlName:"appreciations_error_exit"},[a.SELECT_RECIPIENTS_VIEW]:{viewComponent:"appreciation@select-recipients-view-component",modalTitleKey:"select_recipients_title",pageKey:r.TYPEAHEAD,subactionNameKey:"next_button",subactionControlName:i.TYPEAHEAD_NEXT,defaultNextView:"selectKudoView",impressionEvent:n.MEMBER_SELECT_IMPRESSION_EVENT,shareboxCloseControlName:"appreciations_typeahead_exit"},[a.SELECT_KUDO_VIEW]:{viewComponent:"appreciation@select-kudo-view-component",modalTitleKey:"select_kudos_title",pageKey:r.AWARD,subactionNameKey:"next_button",subactionControlName:i.AWARD_NEXT,defaultNextView:"editPostView",defaultPrevView:"selectRecipientsView",impressionEvent:n.CREATE_IMPRESSION_EVENT,shareboxCloseControlName:"appreciations_award_exit"},[a.EDIT_POST_VIEW]:{viewComponent:"appreciation@edit-post-view-component",modalTitleKey:"share_to_feed_title"},[a.EDIT_MSG_VIEW]:{viewComponent:"appreciation@edit-message-view-component",modalTitleKey:"send_as_message_title",defaultPrevView:"selectKudoView"}}
e.APPR_VIEW_STATES=s
e.APPR_I18N_KEYS={FORMATTED_NAME_TEXT_KEY:"i18n_recipient_familiar_names",BACK_BUTTON_KEY:"back_button",KUDO_MSG_SUCCESS_TOAST_KEY:"kudo_message_success_toast",KUDO_MSG_FAILURE_TOAST_KEY:"kudo_message_failure_toast"}
e.APPR_LIX_KEYS={}
e.APPR_GENERATE_URL="identity/appreciation"
e.KUDOS_IMAGE_FILE_NAME="Kudos.png"
e.KUDO_ATTACHMENT_ATTEMPTS_LIMIT=2
e.SHARE_TYPE_DROPDOWN_PLACEMENTS={TOP:"top",BOTTOM:"bottom"}
const o=`${(0,t.getDomainUrl)()}/appreciation/create/`
e.APPRECIATION_BASE_URL=o})
define("appreciation/utils/kudos-detour-manager",["exports","ember-m3-pdsc-model-builder","detour-framework/utils/detour-manager","detour-framework/utils/detour-preview-data","detour-framework/utils/detour-status-data","detour-framework/utils/progress-data","detour-framework/utils/detour-constants","vector/utils/constants","rich-text/utils/annotated-text"],function(e,t,n,i,r,a,s,o,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
e.default=class extends n.default{constructor(){let{previewComponent:e,vectorUploadService:t,defaultTextAndMentions:n,kudoImageFile:o,generateAppreciation:l,successCallback:c,recipientMiniProfiles:d,origin:p,contextUrn:u,exitApprFlow:m,afterKudoShare:h,occasion:g,updateModalHeader:b,processingHeadline:f,successHeadline:_,errorHeadline:E}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const y=new a.default({headline:f})
super({detourStatusData:new r.default({detourData:{recipientMiniProfiles:d,origin:p,contextUrn:u,exitApprFlow:m,afterKudoShare:h,occasion:g,updateModalHeader:b,isInEditMode:!0},detourState:s.DETOUR_STATES.IN_PROGRESS,progressData:y}),detourPreviewData:new i.default({previewComponent:e,previewState:s.DETOUR_PREVIEW_STATES.SUCCEEDED}),detourType:s.DETOUR_TYPES.kudos,isDetourV2:!0})
this.defaultTextAndMentions=n
this.vectorUploadService=t
this.kudoImageFile=o
this.generateAppreciation=l
this.successCallback=c
this.previewComponent=e
this.successHeadline=_
this.errorHeadline=E
this.getShareText=this._getShareText.bind(this)
this.getShareMedia=this._getShareMedia.bind(this)}_getShareText(){const{text:e,mentions:n}=this.defaultTextAndMentions
return(0,t.buildModel)("com.linkedin.voyager.feed.shared.AnnotatedText",{values:(0,l.generateAnnotatedText)(e,n)})}_getShareMedia(){return this.vectorUploadService.upload(this.kudoImageFile,{mediaUploadType:o.UPLOAD_MEDIA_TYPES.APPRECIATION}).then(e=>this.generateAppreciation(e)).then(e=>{let{newId:n}=e
this._publishNewStatusData(s.DETOUR_STATES.SUCCEEDED,this.successHeadline)
this.successCallback(n)
return[(0,t.buildModel)("com.linkedin.voyager.contentcreation.ShareMedia",{mediaUrn:n})]}).catch(e=>{this._publishNewStatusData(s.DETOUR_STATES.FAILED,this.errorHeadline)
throw e})}_publishNewStatusData(e,t){const n=new a.default({headline:t}),i=new r.default({detourState:e,progressData:n,detourData:this.detourData})
this.detourStatus.publishData(i)}}})
define("appreciation/utils/tracking-utils",["exports","appreciation/utils/constants"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=function(e,i,r){let a
switch(i){case t.APPR_CUSTOM_TRACKING_EVENTS.MEMBER_SELECT_IMPRESSION_EVENT:a={origin:n(r)}
break
case t.APPR_CUSTOM_TRACKING_EVENTS.CREATE_IMPRESSION_EVENT:{a={origin:n(r)}
const e=Ember.get(r,"startPageInstance")
e&&(a.startPageInstance=e)
break}case t.APPR_CUSTOM_TRACKING_EVENTS.SUBMIT_EVENT:{const e=Ember.get(r,"recipientMiniProfiles").map(e=>Ember.get(e,"objectUrn")),t=Ember.get(r,"appreciationUrn"),n=Ember.get(r,"selectedKudoTemplate"),i=Ember.get(n,"type")
a={recipientUrns:e,appreciationType:i,appreciationUrn:t}
break}case t.APPR_CUSTOM_TRACKING_EVENTS.MSG_EVENT:{const e=Ember.get(r,"appreciationUrn")
a={appreciationUrn:e}
break}}e.fireTrackingPayload(i,a)}
function n(e){const t=Ember.get(e,"origin")
return t}})
define("artdeco-button/components/artdeco-button",["exports","artdeco-button/templates/components/artdeco-button","artdeco-button/utils/constants"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var i=Ember.Component.extend({layout:t.default,tagName:"button",classNames:["artdeco-button"],classNameBindings:["_classCircle","_classColor","_classIconRight","_classSize","_classStretch","_classTheme","_classType","disabled:artdeco-button--disabled"],attributeBindings:["aria-controls","aria-expanded","aria-pressed","aria-label","aria-labelledby","aria-describedby","disabled","_outputtedTabIndex:tabindex","controlType:type","title"],circle:!1,color:n.COLORS.DEFAULT,controlType:void 0,disabled:!1,size:2,stretch:n.STRETCHES.NONE,theme:n.THEMES.STANDARD,type:n.TYPES.PRIMARY,tabindex:0,icon:null,iconRight:!1,iconSize:Ember.computed("circle","isIconInBug","size",(function(){const{circle:e,isIconInBug:t,size:n}=Ember.getProperties(this,["circle","isIconInBug","size"]),i=parseInt(n,10)
return t?4===i?"21dp":"14dp":e&&1===i||!e&&i<4?"small":null})).readOnly(),iconColor:Ember.computed("color","isIconInBug",(function(){const{color:e,isIconInBug:t}=Ember.getProperties(this,["color","isIconInBug"])
return t?"inverse"===e?"brand":"inverse":null})).readOnly(),isIconInBug:Ember.computed("icon","type",(function(){const e=Ember.get(this,"icon")===n.IN_BUG
return e})).readOnly(),_classCircle:Ember.computed("circle","color","icon","theme",(function(){const{circle:e,color:t,icon:i,theme:r}=Ember.getProperties(this,["circle","color","icon","theme"])
if(!e)return""
n.THEMES.PRO
return"artdeco-button--circle"})).readOnly(),_classColor:Ember.computed("color",(function(){const e=Ember.get(this,"color")
return e===n.COLORS.DEFAULT?"":`artdeco-button--${e}`})).readOnly(),_classIconRight:Ember.computed("circle","icon","iconRight",(function(){const{circle:e,icon:t,iconRight:n}=Ember.getProperties(this,["icon","iconRight"])
return n?"artdeco-button--icon-right":""})).readOnly(),_classSize:Ember.computed("size",(function(){const e=Ember.get(this,"size"),t=parseInt(e,10)
return`artdeco-button--${t}`})).readOnly(),_classStretch:Ember.computed("circle","size","stretch","type",(function(){const{circle:e,stretch:t}=Ember.getProperties(this,["circle","stretch"])
return t&&t!==n.STRETCHES.NONE?`artdeco-button--${t}`:""})).readOnly(),_classTheme:Ember.computed("color","theme","type",(function(){const{color:e,theme:t,type:i}=Ember.getProperties(this,["color","theme","type"])
if(t===n.THEMES.STANDARD)return""
n.THEMES.PRO
n.THEMES.PREMIUM
return`artdeco-button--${t}`})).readOnly(),_classType:Ember.computed("type",(function(){const e=Ember.get(this,"type")
return`artdeco-button--${e}`})).readOnly(),_outputtedTabIndex:Ember.computed("tabindex",(function(){const e=this.get("tabindex")
return 0!==e?e:null})).readOnly(),_isValuePresent:(e,t)=>Object.keys(e).map(t=>e[t]).indexOf(t)>-1,didReceiveAttrs(){this._super(...arguments)
Ember.isEmpty(Ember.get(this,"title"))
const e=[...Ember.get(this,"attributeBindings")]
Object.keys(this).forEach(t=>{"data-"===t.substring(0,5)&&e.push(t)})
Ember.set(this,"attributeBindings",e)}})
e.default=i})
define("artdeco-button/templates/components/artdeco-button",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"YmB6lrMK",block:'{"symbols":["&default"],"statements":[[4,"if",[[24,["icon"]]],null,{"statements":[[0,"  "],[1,[28,"li-icon",null,[["class","color","size","type"],[[28,"concat",["artdeco-button__icon",[28,"if",[[24,["isIconInBug"]]," artdeco-button__icon--in-bug"],null]],null],[24,["iconColor"]],[24,["iconSize"]],[24,["icon"]]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[7,"span",true],[10,"class","artdeco-button__text"],[8],[0,"\\n"],[4,"if",[[25,1]],null,{"statements":[[0,"    "],[14,1],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[1,[22,"text"],false],[0,"\\n"]],"parameters":[]}],[9]],"hasEval":false}',meta:{moduleName:"artdeco-button/templates/components/artdeco-button.hbs"}})
e.default=t})
define("artdeco-button/utils/constants",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.IN_BUG=e.STRETCHES=e.SIZES=e.TYPES=e.COLORS=e.THEMES=void 0
e.THEMES={STANDARD:"standard",PREMIUM:"premium",PRO:"pro"}
e.COLORS={DEFAULT:"default",INVERSE:"inverse",MUTED:"muted"}
e.TYPES={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"}
e.SIZES=[1,2,3,4]
e.STRETCHES={NONE:"none",FLUID:"fluid",FULL:"full"}
e.IN_BUG="linkedin-bug"})
define("artdeco-button/utils/get-key-from-event",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=function(e){return e.key||t[e.which]||null}
const t={13:"Enter",27:"Escape",32:" "}})
define("artdeco-empty-state/components/artdeco-empty-state",["exports","artdeco-empty-state/templates/components/artdeco-empty-state","artdeco-empty-state/utils/constants"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var i=Ember.Component.extend({layout:t.default,tagName:"section",classNames:["artdeco-empty-state"],actionText:null,buttonType:"secondary",headline:null,message:null,illustration:null,muted:!1,onButtonClick:null,size:n.ILLUSTRATION_SIZE_DEFAULT,theme:"standard",url:null,mercadoSize:1,actions:{buttonClick(){Ember.tryInvoke(this,"onButtonClick")}},init(){this._super(...arguments)
this._assertAttrs()},_assertAttrs(){const{buttonType:e,headline:t,illustration:n,message:i,muted:r,onButtonClick:a,size:s,theme:o,url:l,mercadoSize:c}=Ember.getProperties(this,["buttonType","headline","illustration","message","muted","onButtonClick","size","theme","url","mercadoSize"])},_isIllustrationValid(e,t){return n.ILLUSTRATIONS.includes(e+(t?"-muted":""))||this._isMercadoIllustration},_isSpot:e=>n.ILLUSTRATION_SPOTS.includes(e),_isMicroSpot:e=>n.ILLUSTRATION_MICROSPOTS.includes(e),_isMercadoIllustration:Ember.computed("illustration",(function(){return this._isSpot(this.illustration)||this._isMicroSpot(this.illustration)})),_mercadoSizeString:Ember.computed("mercadoSize",(function(){const{mercadoSize:e}=this
return 1===e?"small":2===e?"large":""})),_mercadoPaddingClass:Ember.computed("mercadoSize","illustration",(function(){const e=this._mercadoSizeString
return this._isSpot(this.illustration)?`artdeco-empty-state__headline--mercado-spots-${e}`:this._isMicroSpot(this.illustration)?`artdeco-empty-state__headline--mercado-microspots-${e}`:""}))})
e.default=i})
define("artdeco-empty-state/templates/components/artdeco-empty-state",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"QwRsk/Oq",block:'{"symbols":[],"statements":[[0,"\\n"],[4,"if",[[24,["_isMercadoIllustration"]]],null,{"statements":[[0,"  "],[7,"h1",true],[11,"class",[29,["artdeco-empty-state__headline artdeco-empty-state__headline--mercado-",[22,"illustration"],"-",[22,"_mercadoSizeString"]," ",[22,"_mercadoPaddingClass"]]]],[8],[0,"\\n    "],[1,[22,"headline"],false],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[7,"h1",true],[11,"class",[29,["artdeco-empty-state__headline artdeco-empty-state__headline--",[22,"illustration"],[28,"if",[[24,["muted"]],"-muted"],null]," artdeco-empty-state__headline--",[22,"size"]]]],[8],[0,"\\n    "],[1,[22,"headline"],false],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]}],[0,"\\n"],[7,"p",true],[10,"class","artdeco-empty-state__message"],[8],[0,"\\n  "],[1,[22,"message"],false],[0,"\\n"],[9],[0,"\\n\\n"],[4,"if",[[24,["actionText"]]],null,{"statements":[[4,"if",[[24,["url"]]],null,{"statements":[[0,"    "],[7,"a",true],[11,"href",[29,[[22,"url"]]]],[11,"class",[29,["artdeco-button artdeco-button--",[22,"buttonType"]," artdeco-button--",[22,"theme"]," artdeco-empty-state__action"]]],[11,"target",[29,[[22,"ctaTarget"]]]],[11,"rel",[29,[[22,"ctaRel"]]]],[11,"data-control-name",[29,[[22,"ctaDataControlName"]]]],[8],[0,"\\n      "],[1,[22,"actionText"],false],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[1,[28,"artdeco-button",null,[["class","click","text","type","theme","data-control-name"],["artdeco-empty-state__action",[28,"action",[[23,0,[]],"buttonClick"],null],[24,["actionText"]],[24,["buttonType"]],[24,["theme"]],[24,["ctaDataControlName"]]]]],false],[0,"\\n"]],"parameters":[]}]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"artdeco-empty-state/templates/components/artdeco-empty-state.hbs"}})
e.default=t})
define("artdeco-empty-state/utils/constants",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.MERCADO_SIZES=e.THEMES=e.BUTTON_TYPES=e.ILLUSTRATION_SIZES=e.ILLUSTRATION_SIZE_DEFAULT=e.ILLUSTRATION_SPOTS=e.ILLUSTRATION_MICROSPOTS=e.ILLUSTRATIONS=void 0
e.ILLUSTRATIONS=["add-attachment","add-connection-inverse","add-feed","add-media","add-school","address-book-import","blank-page-muted","blank-page","calendar-import","camera-lens-muted","camera-lens","clipboard-muted","clipboard-check","contacts-sync","deserted-island","desktop-mobile-screens","desktop-text-ads","edit-pipeline","empty-clipboard","empty-course-bookmark","empty-globe-search","empty-monitor-unfollow","empty-pencil-paper","empty-rocket-launch","empty-search-company","empty-search-groups","empty-search-jobs","empty-search-people","empty-search-results","empty-search-school","empty-trophy","empty-video-bookmark","empty-video-course","empty-video-single","folder-data-transfer","gray-missing-profile","inmail-personalized","laptop-personal-ads","missing-piece-muted","missing-piece","missing-profile-muted","no-connection-muted","no-connection","no-entities-muted","no-entities","no-invites-muted","no-invites","no-jobs-muted","no-jobs","no-likers-muted","no-likers","no-messages-muted","no-messages","no-profile-views-muted","no-profile-views","paper-move-folder","people-comment","people-nearby-muted","sad-browser-muted","sad-browser","saved-articles","search-companies-muted","search-groups-muted","search-jobs-muted","search-people-muted","search-results-muted","search-schools-muted","shooting-star-muted","shooting-star","star-empty-muted","star-empty","star-muted","star","success-award","success-check","success-inbug","upload-media-muted","upload-media"]
e.ILLUSTRATION_MICROSPOTS=["address-book","company","gift","mail","salary","ui-chart","article","compass","glasses","mail-open","school","ui-dashboard","article-stack","dartboard","globe","megaphone","search","ui-feed-profile","award","dashboard","id-badge","messages","shield","unlocked","binders","document","image","notebook","signal-caution","video","birthday","document-comment","image-stack","notepad","signal-error","video-course","briefcase-jobs","document-folder","industry","patent","signal-success","calendar","document-report","location-marker","pencil-ruler","slides-stack","camera","flowers","locked","phone","toolbox","certificate","folder","magnet","rocket","trophy"]
e.ILLUSTRATION_SPOTS=["empty-leaving","error-construction","main-broadcast","main-coworkers-2","main-presentation","empty-no-mail","error-crossing","main-collaboration","main-coworkers-3","main-relax","empty-room","error-fail","main-commute","main-coworkers-4","success-individual","empty-waiting","error-pit-crew","main-conversation","main-coworkers-5","success-individual-2","error-connection","error-server","main-coworkers","main-person","success-team"]
e.ILLUSTRATION_SIZE_DEFAULT=3
e.ILLUSTRATION_SIZES=[1,2,3]
e.BUTTON_TYPES=["secondary","tertiary"]
e.THEMES=["standard","pro"]
e.MERCADO_SIZES=[1,2]})
define("ember-get-config/index",["exports","extended/config/environment"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})
define("lazy-modal/components/lazy-modal-container",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","lazy-modal/utils/constants","lazy-modal/utils/lazy-modal-helpers"],function(e,t,n,i,r,a,s,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var l,c,d,p,u
let m=(l=Ember._tracked,c=Ember._action,d=Ember._action,p=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"isModalOpen",u,this)}get modalName(){const e=(0,o.getLazyModalPath)(this.args.url)
return e&&(s.PATH_TO_MODAL[e]||(0,o.getModalNameFromPathWithDynamicSegments)(e))}get bundleName(){const{modalName:e}=this
return e&&s.MODAL_TO_BUNDLE[e]}get shouldOpenModal(){return this.bundleName&&this.modalName}openModal(){var e,t
null===(e=(t=this.args).onModalOpen)||void 0===e||e.call(t)
this.isModalOpen=!0}closeModal(){var e,t
null===(e=(t=this.args).onModalClose)||void 0===e||e.call(t)
this.isModalOpen=!1}},u=(0,i.default)(p.prototype,"isModalOpen",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,i.default)(p.prototype,"openModal",[c],Object.getOwnPropertyDescriptor(p.prototype,"openModal"),p.prototype),(0,i.default)(p.prototype,"closeModal",[d],Object.getOwnPropertyDescriptor(p.prototype,"closeModal"),p.prototype),p)
e.default=m})
define("lazy-modal/templates/components/lazy-modal-container",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"tR3RkiLS",block:'{"symbols":["&default"],"statements":[[14,1,[[28,"hash",null,[["shouldOpenModal","bundleName","modalName","isModalOpen"],[[23,0,["shouldOpenModal"]],[23,0,["bundleName"]],[23,0,["modalName"]],[23,0,["isModalOpen"]]]]],[28,"hash",null,[["openModal","closeModal"],[[23,0,["openModal"]],[23,0,["closeModal"]]]]]]]],"hasEval":false}',meta:{moduleName:"lazy-modal/templates/components/lazy-modal-container.hbs"}})
e.default=t})
define("lazy-modal/utils/constants",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.RESOURCE_PATH_PATTERN=e.MODAL_TO_BUNDLE=e.PATH_WITH_DYNAMIC_SEGMENTS_TO_MODAL=e.PATH_TO_MODAL=void 0
const t=Object.freeze({"/appreciation/create/":"appreciation$appreciation-modal","/hiring/jobs/create/":"share-job$share-job-modal"})
e.PATH_TO_MODAL=t
e.PATH_WITH_DYNAMIC_SEGMENTS_TO_MODAL=[{pattern:/^\/celebration\/create\/.+$/,modalName:"team-moments$celebration-modal"}]
const n=Object.freeze({"appreciation$appreciation-modal":"appreciation","share-job$share-job-modal":"share-job","team-moments$celebration-modal":"sharing-v2"})
e.MODAL_TO_BUNDLE=n
e.RESOURCE_PATH_PATTERN=/https?:\/\/www\.linkedin(?:-ei)?\.[a-z]{2,3}(\/[^?#$]+)?/})
define("lazy-modal/utils/lazy-modal-helpers",["exports","lazy-modal/utils/constants"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.isSupportedLazyModalPath=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
const n=Object.keys(t.PATH_TO_MODAL).some(t=>e.includes(t)),i=t.PATH_WITH_DYNAMIC_SEGMENTS_TO_MODAL.some(t=>t.pattern.test(e))
return n||i}
e.getLazyModalPath=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
const n=t.RESOURCE_PATH_PATTERN.exec(e)
if(n){const[,e=""]=n
return e&&(e.endsWith("/")?e:`${e}/`)}return e.split("?")[0]}
e.getModalNameFromPathWithDynamicSegments=function(e){const n=t.PATH_WITH_DYNAMIC_SEGMENTS_TO_MODAL.find(t=>t.pattern.test(e))
return n&&n.modalName}})
define("msg-facepile-grid/components/conversation-facepile-grid",["exports","@babel/runtime/helpers/esm/toConsumableArray","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component"],function(e,t,n,i,r,a,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var o,l,c,d,p,u,m
const h=Ember.HTMLBars.template({id:"haFVIAve",block:'{"symbols":["@conversation","@entitySize","@iconSize","&attrs"],"statements":[[4,"if",[[23,0,["conversationParticipants"]]],null,{"statements":[[0,"  "],[5,"msg-facepile-grid@facepile-grid",[[13,4]],[["@participants","@groupChat","@entitySize","@iconSize"],[[23,0,["conversationParticipants"]],[23,1,["groupChat"]],[23,2,[]],[23,3,[]]]]],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"msg-facepile-grid/components/conversation-facepile-grid.hbs"}})
let g=(o=Ember.inject.service("formatter"),l=Ember.inject.service("authentication@authenticated-user"),c=Ember.inject.service("lix"),d=class extends s.default{constructor(){super(...arguments);(0,n.default)(this,"formatter",p,this);(0,n.default)(this,"authenticatedUser",u,this);(0,n.default)(this,"lix",m,this)}get conversationParticipants(){const e=Ember.get(this,"args.conversation.latestParticipants")
if(e&&Ember.get(this,"args.conversation.groupChat")&&Ember.get(this,"args.conversation.viewerCurrentParticipant")){const n=Ember.get(this,"authenticatedUser.miniProfile")
return[].concat((0,t.default)(e),[{miniProfile:n,picture:Ember.get(n,"picture"),ghostType:"person",fullName:this.formatter.formatName(n,"full")}])}return e}},p=(0,r.default)(d.prototype,"formatter",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=(0,r.default)(d.prototype,"authenticatedUser",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=(0,r.default)(d.prototype,"lix",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d)
e.default=g
Ember._setComponentTemplate(h,g)})
define("msg-facepile-grid/components/facepile-grid",["exports","@glimmer/component"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const n=Ember.HTMLBars.template({id:"a72UQyzY",block:'{"symbols":["p","@iconSize","@participants","@groupChat","&attrs"],"statements":[[7,"div",false],[12,"class",[29,["msg-facepile-grid\\n    ",[28,"if",[[28,"global-helpers@or",[[23,4,[]],[28,"global-helpers@gt",[[23,3,["length"]],1],null]],null],"msg-facepile-grid--group-size-2","msg-facepile-grid--no-facepile"],null],"\\n    ",[23,0,["sizeClass"]]]]],[13,5],[8],[0,"\\n"],[4,"if",[[28,"global-helpers@and",[[23,4,[]],[28,"global-helpers@eq",[[23,3,["length"]],1],null]],null]],null,{"statements":[[0,"    "],[7,"div",true],[10,"class","msg-facepile-grid__img msg-facepile-grid__group-chat-icon"],[8],[0,"\\n      "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size","class"],["people-icon",[23,2,[]],"t-black--light"]]],false],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[4,"each",[[23,0,["participantsToPrint"]]],null,{"statements":[[0,"    "],[5,"ember-vector-images@lazy-image",[],[["@classNames","@image","@alt","@desiredWidth","@desiredHeight","@ghostType"],[[28,"concat",["msg-facepile-grid__img msg-facepile-grid__img--",[23,1,["ghostType"]]],null],[23,1,["picture"]],[23,1,["fullName"]],100,100,[23,1,["ghostType"]]]]],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"msg-facepile-grid/components/facepile-grid.hbs"}}),i={1:"msg-facepile-grid--1",2:"msg-facepile-grid--2",3:"msg-facepile-grid--3",4:"msg-facepile-grid--4"}
class r extends t.default{get sizeClass(){return i[this.args.entitySize]}get participantsToPrint(){return this.args.participants.slice(0,2)}}e.default=r
Ember._setComponentTemplate(n,r)})
define("msg-typeahead/components/connections-typeahead",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember-decorators/component","global-utils/utils/is-browser","msg-shared/utils/constants","ember-batcher","urn-utils","global-helpers/helpers/load"],function(e,t,n,i,r,a,s,o,l,c,d){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var p,u,m,h,g,b,f,_,E,y,T,v,C,O,S,w,A,I,P,N,k,R,x,M,D,U,L,F,j,z,V
const H=Ember.HTMLBars.template({id:"CHh1707/",block:'{"symbols":["recipient","index","openMessaging","entryPointData","recipient"],"statements":[[0,"\\n"],[4,"if",[[23,0,["a11yText"]]],null,{"statements":[[0,"  "],[7,"label",true],[11,"for",[29,[[23,0,["elementId"]],"-search-field"]]],[10,"class","visually-hidden"],[8],[1,[23,0,["a11yText"]],false],[9],[0,"\\n"]],"parameters":[]},null],[7,"section",true],[10,"class","msg-connections-typeahead__top-fixed-section"],[8],[0,"\\n  "],[7,"div",true],[10,"class","scrollable msg-connections-typeahead__added-recipients display-flex align-items-center pl2 pv1"],[11,"onclick",[28,"action",[[23,0,[]],"setFocusToParticipantTextField"],null]],[8],[0,"\\n"],[4,"each",[[23,0,["recipientsWithContext"]]],null,{"statements":[[0,"      "],[5,"artdeco-pill@artdeco-pill-dismiss",[],[["@class","@text","@a11yText","@onDismiss","@size"],["msg-connections-typeahead__added-recipient mv1 mr1",[28,"ember-cli-pemberly-i18n@format-name",null,[["firstName","lastName","type"],[[23,5,["miniProfile","firstName"]],[23,5,["miniProfile","lastName"]],"full"]]],[28,"t",["i18n_remove_recipient","msg-typeahead/components/connections-typeahead"],[["recipientName"],[[28,"global-helpers@name",[[23,5,[]]],null]]]],[28,"action",[[23,0,[]],"removeRecipientFromTypeahead",[23,5,[]]],null],1]]],[0,"\\n"]],"parameters":[5]},null],[0,"\\n    "],[7,"input",false],[12,"id",[28,"concat",[[23,0,["elementId"]],"-search-field"],null]],[12,"class",[28,"concat",["msg-connections-typeahead__search-field",[28,"unless",[[23,0,["recipients"]]," msg-connections-typeahead__search-field--no-recipients"],null]," ml1 mv1"],null]],[12,"autofocus",[23,0,["autofocus"]]],[12,"placeholder",[28,"unless",[[23,0,["recipients"]],[23,0,["placeholder"]]],null]],[12,"role","combobox"],[12,"aria-autocomplete","list"],[12,"aria-owns",[28,"concat",[[23,0,["elementId"]],"-suggestions-menu"],null]],[12,"autocomplete","off"],[12,"aria-expanded",[28,"if",[[23,0,["possibleRecipients"]],"true","false"],null]],[12,"aria-activedescendant",[23,0,["highlightedRecipient","domId"]]],[12,"type","text"],[3,"on",["input",[28,"fn",[[23,0,["debounceFetchRecipients"]]],null]]],[3,"on",["focus",[28,"ember-simple-set-helper@set",[[23,0,[]],"isFocusedOnSearchField",true],null]]],[3,"on",["blur",[28,"ember-simple-set-helper@set",[[23,0,[]],"isFocusedOnSearchField",false],null]]],[8],[9],[0,"\\n\\n"],[4,"if",[[23,0,["displayPlusIcon"]]],null,{"statements":[[0,"      "],[5,"artdeco-button@artdeco-button",[],[["@class","@color","@size","@icon","@circle","@text","@click"],["msg-connections-typeahead__plus-icon mv2 ml2","muted",1,"plus-icon",true,[28,"t",["i18n_show_recipient_suggestions","msg-typeahead/components/connections-typeahead"],null],[28,"ember-cli-pemberly-tracking@tracked-action",[[23,0,["plusIconControlName"]],[28,"action",[[23,0,[]],"showSuggestions"],null]],null]]]],[0,"\\n"]],"parameters":[]},null],[0,"\\n    "],[7,"div",true],[10,"class","msg-connections-typeahead__hidden-field"],[8],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[4,"if",[[23,0,["displaySearchResults"]]],null,{"statements":[[0,"  "],[7,"div",true],[11,"class",[29,["scrollable ",[28,"concat",[[28,"if",[[23,0,["renderInPlace"]],"msg-connections-typeahead__inplace-search-results","msg-connections-typeahead__search-results container"],null],[28,"if",[[23,0,["showJumboExpandedSearchResults"]]," msg-connections-typeahead__search-results--jumbo-bubble-expanded"],null],[28,"if",[[23,0,["showExpandedSearchResults"]]," msg-connections-typeahead__search-results--expanded"],null]],null]]]],[8],[0,"\\n"],[4,"if",[[23,0,["activeFetch","isLoading"]]],null,{"statements":[[0,"      "],[5,"artdeco-loader@artdeco-loader",[[12,"class","mhA"]],[["@size"],["small"]]],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,0,["activeFetch","isLoaded"]]],null,{"statements":[[4,"if",[[23,0,["possibleRecipients"]]],null,{"statements":[[4,"if",[[23,0,["showSuggestedLabel"]]],null,{"statements":[[0,"          "],[7,"div",true],[10,"class","t-bold t-14 t-black--light pb2 pl3 pt2"],[8],[0,"\\n            "],[1,[28,"t",["i18n_suggested","msg-typeahead/components/connections-typeahead"],null],false],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]},null],[0,"        "],[7,"ul",true],[10,"class","list-style-none"],[10,"role","listbox"],[11,"id",[28,"concat",[[23,0,["elementId"]],"-suggestions-menu"],null]],[8],[0,"\\n"],[4,"each",[[23,0,["possibleRecipients"]]],null,{"statements":[[0,"            "],[7,"li",true],[10,"role","presentation"],[11,"onmouseover",[28,"action",[[23,0,[]],"onListItemHover",[23,1,[]]],null]],[8],[0,"\\n"],[4,"if",[[28,"global-helpers@eq",[[23,1,["recipientType"]],[23,0,["CONVERSATION"]]],null]],null,{"statements":[[0,"                "],[5,"msg-typeahead@conversation-result",[[12,"onmousedown",[28,"action",[[23,0,[]],"preventEventChain"],null]]],[["@highlightedRecipient","@recipient","@listPosition","@openConversationControlName","@openConversation"],[[23,0,["highlightedRecipient"]],[23,1,[]],[23,2,[]],[28,"if",[[23,0,["isSuggestedList"]],[23,0,["quickOpenConversationControlName"]],[23,0,["openConversationControlName"]]],null],[28,"action",[[23,0,[]],[23,0,["openConversation"]]],null]]]],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,0,["includeNonConnectionResults"]]],null,{"statements":[[4,"if",[[28,"global-helpers@or",[[28,"global-helpers@or",[[28,"global-helpers@eq",[[23,1,["recipientType"]],[23,0,["CONNECTIONS"]]],null],[28,"global-helpers@and",[[23,0,["enableGroupMessageRequests"]],[28,"global-helpers@eq",[[23,1,["type"]],[23,0,["COWORKERS"]]],null]],null]],null],[23,0,["isSuggestedList"]]],null]],null,{"statements":[[0,"                    "],[5,"msg-typeahead@person-result",[[12,"onclick",[28,"ember-cli-pemberly-tracking@tracked-action",[[28,"if",[[28,"global-helpers@eq",[[23,1,["type"]],[23,0,["COWORKERS"]]],null],[23,0,["addCoworkerControlName"]],[28,"if",[[23,0,["isSuggestedList"]],[23,0,["quickAddRecipientControlName"]],[23,0,["addRecipientControlName"]]],null]],null],[28,"action",[[23,0,[]],"handleTypeaheadResultClick",[23,1,[]]],null]],null]],[12,"onmousedown",[28,"action",[[23,0,[]],"preventEventChain"],null]]],[["@highlightedRecipient","@recipient","@listPosition","@trackingUsecase"],[[23,0,["highlightedRecipient"]],[23,1,[]],[23,2,[]],[28,"if",[[23,0,["renderInPlace"]],"GROUP_COMPOSE_MEMBER_FOR_GROUP","COMPOSE_MEMBER_FOR_GROUP_THREAD"],null]]]],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                    "],[5,"message-button@entry-point",[],[["@interstitialUpsellOrigin","@recipientUrns","@contextEntityUrn","@screenContext"],["premium_inmail_message_compose_typeahead_upsell_modal",[23,1,["entityUrn"]],[23,1,["contextEntityUrn"]],"MESSAGING"]],{"statements":[[0,"\\n                      "],[5,"msg-typeahead@person-result",[[12,"onclick",[28,"ember-cli-pemberly-tracking@tracked-action",[[28,"if",[[28,"global-helpers@eq",[[23,1,["type"]],[23,0,["COWORKERS"]]],null],[23,0,["addCoworkerControlName"]],[23,0,["addNonConnectionControlName"]]],null],[28,"action",[[23,0,[]],[23,0,["composeToNonConnection"]],[23,3,[]],[23,4,[]]],null]],null]],[12,"onmousedown",[28,"action",[[23,0,[]],"preventEventChain"],null]]],[["@highlightedRecipient","@recipient"],[[23,0,["highlightedRecipient"]],[23,1,[]]]]],[0,"\\n                    "]],"parameters":[3,4]}],[0,"\\n"]],"parameters":[]}]],"parameters":[]},{"statements":[[0,"                  "],[5,"msg-typeahead@person-result",[[12,"onclick",[28,"ember-cli-pemberly-tracking@tracked-action",[[28,"if",[[23,0,["isSuggestedList"]],[23,0,["quickAddRecipientControlName"]],[23,0,["addRecipientControlName"]]],null],[28,"action",[[23,0,[]],"handleTypeaheadResultClick",[23,1,[]]],null]],null]],[12,"onmousedown",[28,"action",[[23,0,[]],"preventEventChain"],null]]],[["@highlightedRecipient","@recipient","@selectedRecipientUrns","@listPosition","@trackingUsecase"],[[23,0,["highlightedRecipient"]],[23,1,[]],[23,0,["selectedRecipientUrns"]],[23,2,[]],[28,"if",[[23,0,["renderInPlace"]],"GROUP_COMPOSE_MEMBER_FOR_GROUP","COMPOSE_MEMBER_FOR_GROUP_THREAD"],null]]]],[0,"\\n"]],"parameters":[]}]],"parameters":[]}],[0,"            "],[9],[0,"\\n"]],"parameters":[1,2]},null],[0,"        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"        "],[7,"div",true],[10,"class","msg-connections-typeahead__no-result p2 display-flex align-items-center"],[8],[0,"\\n          "],[5,"artdeco-inline-feedback@artdeco-inline-feedback",[],[["@message"],[[28,"if",[[23,0,["onlyConnectionResults"]],[28,"t",["i18n_no_connection_results","msg-typeahead/components/connections-typeahead"],null],[28,"t",["i18n_no_results","msg-typeahead/components/connections-typeahead"],null]],null]]]],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]}],[0,"    "]],"parameters":[]},null]],"parameters":[]}],[0,"  "],[9],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"msg-typeahead/components/connections-typeahead.hbs"}}),G={},{KEYCODES:B,MESSAGE_TYPEAHEAD_SEARCH_TYPES:{CONNECTIONS:K,COWORKERS:W,GROUP_THREADS:Y,PEOPLE:q},MESSAGE_TYPEAHEAD_RESULT_TYPES:{CONVERSATION:$}}=o.default
let X=(p=(0,a.classNameBindings)("renderInPlace:msg-connections-typeahead-with-full-suggested-list","isFocused:msg-connections-typeahead--is-focused"),u=(0,a.classNames)("msg-connections-typeahead","relative"),m=Ember.inject.service("global-services@a11y-notification"),h=Ember.inject.service("i18n"),g=Ember.inject.service("lix"),b=Ember.inject.service("msg-data@data-manager"),f=Ember.inject.service("store"),_=Ember.inject.service("tracking"),E=Ember.computed("recipientSuggestionEnabled","recipients.length","searchTerm","displaySearchResults").readOnly(),y=Ember.computed("isFocusedOnSearchField","renderInPlace","activeFetch").readOnly(),T=Ember.computed("recipients.length","includeGroupConversationResults","includeNonConnectionResults").readOnly(),v=Ember.computed.mapBy("recipients","entityUrn").readOnly(),C=Ember.computed("recipientsWithContext.[]").readOnly(),O=Ember.computed.mapBy("recipientsWithContext","miniProfile").readOnly(),S=Ember._action,w=Ember._action,A=Ember._action,I=Ember._action,P=Ember._action,N=Ember._action,k=Ember._action,p(R=u(R=(x=class extends Ember.Component{constructor(){super(...arguments);(0,t.default)(this,"a11yNotification",M,this);(0,t.default)(this,"i18n",D,this);(0,t.default)(this,"lix",U,this);(0,t.default)(this,"msgDataManager",L,this);(0,t.default)(this,"store",F,this);(0,t.default)(this,"tracking",j,this);(0,n.default)(this,"addRecipientControlName","search_add");(0,n.default)(this,"quickAddRecipientControlName","quick_add");(0,n.default)(this,"addNonConnectionControlName","search_add_nonconnection");(0,n.default)(this,"addCoworkerControlName","search_add_coworker");(0,n.default)(this,"openConversationControlName","search_add_group");(0,n.default)(this,"quickOpenConversationControlName","quick_add_group");(0,n.default)(this,"beginSearchControlName","begin_recipient_search");(0,n.default)(this,"plusIconControlName","plus_icon");(0,n.default)(this,"searchTerm","");(0,n.default)(this,"recipientsWithContext",[]);(0,n.default)(this,"searchFieldClass","msg-connections-typeahead__search-field");(0,n.default)(this,"searchFieldSelector",".msg-connections-typeahead__search-field");(0,n.default)(this,"searchResultClass","msg-connections-typeahead__search-result");(0,n.default)(this,"searchResultsSelector",".msg-connections-typeahead__search-results");(0,n.default)(this,"addedRecipientsSelector",".msg-connections-typeahead__added-recipients");(0,n.default)(this,"CONVERSATION",$);(0,n.default)(this,"CONNECTIONS",K);(0,n.default)(this,"COWORKERS",W);(0,t.default)(this,"selectedRecipientUrns",z,this);(0,t.default)(this,"recipients",V,this)}get displayPlusIcon(){return this.recipientSuggestionEnabled&&0===this.searchTerm.length&&!this.displaySearchResults&&this.recipients.length>0}get displaySearchResults(){return this.renderInPlace||this.isFocusedOnSearchField&&this.activeFetch}get onlyConnectionResults(){return this.recipients.length||!(this.includeGroupConversationResults||this.includeNonConnectionResults)}get contextByRecipients(){const e=[]
this.recipientsWithContext.forEach(t=>{t.contextEntityUrn&&e.addObject({recipient:(0,c.extractEntityInfoFromUrn)(Ember.get(t,"miniProfile.entityUrn")).id,contextEntityUrn:t.contextEntityUrn})})
return e}init(){super.init.apply(this,arguments)
this._normalizeRecipientsWithContext()
if(this.withSuggestedList){this.renderInPlace&&Ember.set(this,"searchResultsSelector",".msg-connections-typeahead__inplace-search-results")
this._fetchSuggestedRecipients(this.includeGroupConversationResults)}}didUpdateAttrs(){var e
super.didUpdateAttrs.apply(this,arguments);(null===(e=this.prefilledRecipients)||void 0===e?void 0:e.length)>this.recipientsWithContext.length&&this._normalizeRecipientsWithContext()}didInsertElement(){super.didInsertElement.apply(this,arguments)
this.addedRecipientsContainer=this.element.querySelector(this.addedRecipientsSelector)
this._focusSearchField()}focusIn(e){this.runTask(()=>{var t
if(this.isDestroying)return
Ember.set(this,"isFocused",!0)
null===(t=this.onFocusInTypeahead)||void 0===t||t.call(this)
const{possibleRecipients:n}=this
if(!n)return
const i=e.target&&e.target.id,r=n.findBy("domId",i)
r&&this._setHighlightedRecipient(r)})}focusOut(){this.runTask(()=>{var e
if(!this.isDestroying){Ember.set(this,"isFocused",!1)
null===(e=this.onFocusOutTypeahead)||void 0===e||e.call(this)}})}click(e){e.target===this.element&&this._focusSearchField()}keyDown(e){switch(e.keyCode){case B.UP_ARROW:this._moveHighlightedRecipient(-1)
e.preventDefault()
break
case B.DOWN_ARROW:this._moveHighlightedRecipient(1)
e.preventDefault()
break
case B.BACKSPACE:if(e.target.classList.contains(this.searchFieldClass)&&!e.target.value){const e=Ember.get(this,"recipientsWithContext.lastObject")
e&&this.actions.removeRecipientFromTypeahead.call(this,e)}break
case B.ENTER:e.target===this._getSearchField()&&this._handleEnterKey()
break
case B.ESC:this._closeDropdown(!0)}}_closeDropdown(e){this.renderInPlace||Ember.set(this,"activeFetch",null)
e?Ember.set(this,"isFocused",!1):this.withSuggestedList?Ember.setProperties(this,{isSuggestedList:!0,possibleRecipients:this.suggestedRecipients,showSuggestedLabel:!0}):Ember.set(this,"possibleRecipients",null)}_ensureHighlightedRecipientIsScrolledIntoView(){const e=this._getHighlightedRecipientElement()
if(!e)return
const t=e.offsetTop,n=t+e.offsetHeight,i=this.element.querySelector(this.searchResultsSelector),r=i.offsetHeight,a=i.scrollTop
n>a+r?i.scrollTop=n-r:t<a&&(i.scrollTop=t)}_handleEnterKey(){const e=this._getHighlightedRecipientElement()
!e&&this.actionOnTypeaheadEnter&&"function"==typeof this.actionOnTypeaheadEnter?this.actionOnTypeaheadEnter():this._selectHighlightedRecipient(e)}_selectHighlightedRecipient(e){if(s.default&&e){e.click()
this.tracking.fireInteractionEvent("search_add_enterkey")}}_getHighlightedRecipientElement(){var e
const t=Ember.get(this,"highlightedRecipient.domId")
return t&&(null===(e=this.element)||void 0===e?void 0:e.querySelector(`#${t}`))}_focusSearchField(){this._getSearchField().focus()
Ember.set(this,"isFocusedOnSearchField",!0)}_getSearchField(){return this.element.querySelector(this.searchFieldSelector)}_moveHighlightedRecipient(e){const{possibleRecipients:t}=this
if(!t||0===t.length)return
const n=this.highlightedRecipient,i=t.indexOf(n),r=Ember.get(this,"possibleRecipients.length"),a=n?(i+e+r)%r:0
this._setHighlightedRecipient(t.objectAt(a))}_setHighlightedRecipient(e){Ember.set(this,"highlightedRecipient",e)
this._ensureHighlightedRecipientIsScrolledIntoView(e)}_sendA11yNotification(e,t){let n=G[e]
if(!n){n=this.i18n.lookupTranslation("component","msg-typeahead@connections-typeahead",e)
G[e]=n}return this.a11yNotification.setTextInLiveRegion(n([t]))}_fetchRecipients(e){if(!e){this._closeDropdown()
return}const t=[K]
if(Ember.get(this,"recipients.length"))this.enableGroupMessageRequests&&t.push(W)
else{this.includeGroupConversationResults&&t.push(Y)
this.includeNonConnectionResults&&t.push(q)
this.includeCoworkerResults&&t.push(W)}Ember.setProperties(this,{isSuggestedList:!1,showSuggestedLabel:!1})
const n=this.msgDataManager.fetchTypeaheadResults(e,t).then(t=>{t.forEach(e=>Ember.set(e,"domId",Ember.guidFor(e)))
if(!this.isDestroying){const n=this._filterOutExistingRecipients(t)
n.length?Ember.setProperties(this,{highlightedRecipient:Ember.get(n,"firstObject"),possibleRecipients:n,isSuggestedList:!1,showSuggestedLabel:!1}):this.withSuggestedList&&!e?Ember.setProperties(this,{isSuggestedList:!0,highlightedRecipient:Ember.get(this,"suggestedRecipients.firstObject"),possibleRecipients:this.suggestedRecipients,showSuggestedLabel:!0}):Ember.set(this,"possibleRecipients",null)
this._sendA11yNotification("i18n_a11y_suggestions_hint_text",{resultsLength:Ember.get(n,"length")})}})
Ember.set(this,"activeFetch",(0,d.load)(n))}_filterOutExistingRecipients(e){const t=new Set(this.recipients.mapBy("entityUrn")),n=new Set(this.recipientsToFilterOut?this.recipientsToFilterOut.mapBy("entityUrn"):[])
return e.filter(e=>!t.has(Ember.get(e,"entityUrn"))&&!n.has(Ember.get(e,"entityUrn")))}_fetchSuggestedRecipients(e,t){let n=[]
if(t){n=!this.renderInPlace||!this.isSuggestedList?this.recipients.mapBy("entityUrn"):[]}const i=this.msgDataManager.fetchSuggestedRecipients(e,n).then(e=>{if(!this.isDestroying){const t=this._filterOutExistingRecipients(e)
Ember.setProperties(this,{possibleRecipients:t,isSuggestedList:!0,suggestedRecipients:t,showSuggestedLabel:!0})
t&&t.length>0&&this._setHighlightedRecipient(t[0])}})
Ember.set(this,"activeFetch",(0,d.load)(i))
return i}_addRecipient(e){const t=Ember.get(e,"contextEntityUrn")
this.recipientsWithContext.addObject({contextEntityUrn:t,miniProfile:e.miniProfile})
this.recipientsChanged(this.recipients,this.contextByRecipients)
Ember.get(e,"suggestedRecipientProfile")&&this.tracking.fireTrackingPayload("MessagingRecommendationActionEvent",{actionCategory:"SELECT",controlUrn:this.isSuggestedList?this.quickAddRecipientControlName:this.addRecipientControlName,recommendationTrackingId:Ember.get(e,"trackingId"),usecase:this.renderInPlace?"GROUP_COMPOSE_MEMBER_FOR_GROUP":"COMPOSE_MEMBER_FOR_GROUP_THREAD"})
this._sendA11yNotification("i18n_a11y_added_recipient",{name:e.name})
this.renderInPlace&&!this.isSuggestedList&&this._fetchSuggestedRecipients(!1,!0)
if(this.enableGroupMessageRequests&&t&&1===this.recipientsWithContext.length){var n
null===(n=this.setComposeContext)||void 0===n||n.call(this,Ember.get(e,"entityUrn"),t)}this._closeDropdown()
this._getSearchField().value=""
Ember.set(this,"searchTerm","")
this._focusSearchField();(0,l.mutateDOM)(()=>{this.isDestroying||(this.addedRecipientsContainer.scrollTop=this.addedRecipientsContainer.scrollHeight)})}_removeRecipient(e,t){this.recipientsWithContext.removeObject(e)
this.recipientsChanged(this.recipients,this.contextByRecipients)
this._sendA11yNotification("i18n_a11y_removed_recipient",{name:t})
this._focusSearchField()}_normalizeRecipientsWithContext(){var e
null===(e=this.prefilledRecipients)||void 0===e||e.forEach(e=>{this.recipientsWithContext.findBy("miniProfile",e)||this.recipientsWithContext.addObject({miniProfile:e,contextEntityUrn:void 0})})}setFocusToParticipantTextField(){this._focusSearchField()}showSuggestions(){this._focusSearchField()
this._fetchSuggestedRecipients(!1,!0)}handleTypeaheadResultClick(e){const t=this.recipientsWithContext.findBy("miniProfile",e.miniProfile)
t?this._removeRecipient(t,e.name):this._addRecipient(e)}removeRecipientFromTypeahead(e){const t=this.recipientsWithContext.findBy("miniProfile",e.miniProfile)
this._removeRecipient(t,e.name)}debounceFetchRecipients(){const e=this.searchTerm,t=this._getSearchField().value
!e&&t&&this.tracking.fireInteractionEvent(this.beginSearchControlName)
Ember.set(this,"searchTerm",t)
if(Ember.testing)this._fetchRecipients(t)
else{Ember.run.cancel(this.debounce)
const e=Ember.testing?0:500
this.debounce=this.debounceTask("_fetchRecipients",t,e)}}onListItemHover(e){Ember.set(this,"highlightedRecipient",e)}preventEventChain(e){e.preventDefault()}},M=(0,i.default)(x.prototype,"a11yNotification",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=(0,i.default)(x.prototype,"i18n",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=(0,i.default)(x.prototype,"lix",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=(0,i.default)(x.prototype,"msgDataManager",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=(0,i.default)(x.prototype,"store",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=(0,i.default)(x.prototype,"tracking",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(x.prototype,"displayPlusIcon",[E],Object.getOwnPropertyDescriptor(x.prototype,"displayPlusIcon"),x.prototype),(0,i.default)(x.prototype,"displaySearchResults",[y],Object.getOwnPropertyDescriptor(x.prototype,"displaySearchResults"),x.prototype),(0,i.default)(x.prototype,"onlyConnectionResults",[T],Object.getOwnPropertyDescriptor(x.prototype,"onlyConnectionResults"),x.prototype),z=(0,i.default)(x.prototype,"selectedRecipientUrns",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(x.prototype,"contextByRecipients",[C],Object.getOwnPropertyDescriptor(x.prototype,"contextByRecipients"),x.prototype),V=(0,i.default)(x.prototype,"recipients",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(x.prototype,"setFocusToParticipantTextField",[S],Object.getOwnPropertyDescriptor(x.prototype,"setFocusToParticipantTextField"),x.prototype),(0,i.default)(x.prototype,"showSuggestions",[w],Object.getOwnPropertyDescriptor(x.prototype,"showSuggestions"),x.prototype),(0,i.default)(x.prototype,"handleTypeaheadResultClick",[A],Object.getOwnPropertyDescriptor(x.prototype,"handleTypeaheadResultClick"),x.prototype),(0,i.default)(x.prototype,"removeRecipientFromTypeahead",[I],Object.getOwnPropertyDescriptor(x.prototype,"removeRecipientFromTypeahead"),x.prototype),(0,i.default)(x.prototype,"debounceFetchRecipients",[P],Object.getOwnPropertyDescriptor(x.prototype,"debounceFetchRecipients"),x.prototype),(0,i.default)(x.prototype,"onListItemHover",[N],Object.getOwnPropertyDescriptor(x.prototype,"onListItemHover"),x.prototype),(0,i.default)(x.prototype,"preventEventChain",[k],Object.getOwnPropertyDescriptor(x.prototype,"preventEventChain"),x.prototype),x))||R)||R)
e.default=X
Ember._setComponentTemplate(H,X)})
define("msg-typeahead/components/conversation-result",["exports","@babel/runtime/helpers/esm/toConsumableArray","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper"],function(e,t,n,i,r,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var s,o,l,c,d,p,u,m,h,g,b,f
const _=Ember.HTMLBars.template({id:"896UUI04",block:'{"symbols":[],"statements":[[0,"\\n"],[7,"button",true],[11,"class",[29,["display-flex flex-row align-items-center msg-connections-typeahead__search-result\\n    ",[28,"if",[[28,"global-helpers@eq",[[23,0,["highlightedRecipient"]],[23,0,["recipient"]]],null],"msg-connections-typeahead__search-result--highlighted"],null]]]],[10,"tabindex","-1"],[10,"role","option"],[11,"id",[23,0,["recipient","domId"]]],[11,"aria-selected",[28,"if",[[28,"global-helpers@eq",[[23,0,["recipient","domId"]],[23,0,["highlightedRecipient","domId"]]],null],"true","false"],null]],[11,"onclick",[28,"ember-cli-pemberly-tracking@tracked-action",[[23,0,["openConversationControlName"]],[28,"action",[[23,0,[]],"selectConversation",[23,0,["recipient","conversationId"]]],null]],null]],[10,"type","button"],[8],[0,"\\n  "],[5,"msg-facepile-grid@facepile-grid",[],[["@participants","@groupChat","@entitySize","@iconSize"],[[28,"if",[[23,0,["isRecipientSuggestion"]],[24,["conversationParticipantsIncludingSelf"]],[23,0,["recipient","participants"]]],null],true,3,"small"]]],[0,"\\n  "],[7,"div",true],[10,"class","msg-connections-typeahead__entity-description display-flex"],[8],[0,"\\n    "],[7,"dl",true],[10,"class","display-flex flex-column truncate"],[8],[0,"\\n      "],[7,"dt",true],[10,"class","t-14 t-black t-bold truncate"],[8],[0,"\\n        "],[1,[28,"if",[[23,0,["recipient","text"]],[23,0,["recipient","text"]],[28,"t",["i18n_conversation_names","msg-typeahead/components/conversation-result"],[["names"],[[28,"msg-shared@participant-names-with-self",[[23,0,["recipient","conversation"]],true],null]]]]],null],false],[0,"\\n      "],[9],[0,"\\n      "],[7,"dd",true],[10,"class","t-12 t-black--light t-normal truncate"],[8],[0,"\\n        "],[1,[28,"if",[[23,0,["recipient","subtext"]],[23,0,["recipient","subtext"]],[28,"t",["i18n_group_message","msg-typeahead/components/conversation-result"],[["count"],[[23,0,["recipient","conversation","totalParticipantsCount"]]]]]],null],false],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"msg-typeahead/components/conversation-result.hbs"}})
let E=(s=Ember.inject.service("tracking"),o=Ember.inject.service("formatter"),l=Ember.inject.service("authentication@authenticated-user"),c=Ember.inject.service("lix"),d=Ember.computed("recipient.hitInfo").readOnly(),p=Ember.computed("recipient.participants.[]"),u=Ember._action,m=class extends Ember.Component{constructor(){super(...arguments);(0,n.default)(this,"tracking",h,this);(0,n.default)(this,"formatter",g,this);(0,n.default)(this,"authenticatedUser",b,this);(0,n.default)(this,"lix",f,this)}init(){super.init.apply(this,arguments)
this.tracking.setupTrackableComponent(this)}get isRecipientSuggestion(){return!Ember.get(this,"recipient.hitInfo")}get conversationParticipantsIncludingSelf(){const e=Ember.get(this,"authenticatedUser.miniProfile")
return[].concat((0,t.default)(Ember.get(this,"recipient.participants")),[{miniProfile:e,picture:Ember.get(e,"picture"),ghostType:"person",fullName:this.formatter.formatName(e,"full")}])}onImpression(e){let{duration:t,visibleTime:n}=e
this.tracking.fireTrackingPayload("MessagingRecommendationImpressionEvent",{recommendedEntity:{duration:t,usecase:"TYPEAHEAD_GROUP_THREAD",recommendedEntityUrn:Ember.get(this.recipient,"hitInfo.targetUrn"),listPosition:{index:this.listPosition},recommendationTrackingId:Ember.get(this.recipient,"hitInfo.trackingId"),visibleTime:n}})}selectConversation(e){this.tracking.fireTrackingPayload("MessagingRecommendationActionEvent",{actionCategory:"SELECT",controlUrn:this.openConversationControlName,recommendationTrackingId:Ember.get(this.recipient,"hitInfo.trackingId"),usecase:"TYPEAHEAD_GROUP_THREAD"})
this.openConversation(e)}},h=(0,r.default)(m.prototype,"tracking",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=(0,r.default)(m.prototype,"formatter",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=(0,r.default)(m.prototype,"authenticatedUser",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=(0,r.default)(m.prototype,"lix",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,r.default)(m.prototype,"isRecipientSuggestion",[d],Object.getOwnPropertyDescriptor(m.prototype,"isRecipientSuggestion"),m.prototype),(0,r.default)(m.prototype,"conversationParticipantsIncludingSelf",[p],Object.getOwnPropertyDescriptor(m.prototype,"conversationParticipantsIncludingSelf"),m.prototype),(0,r.default)(m.prototype,"selectConversation",[u],Object.getOwnPropertyDescriptor(m.prototype,"selectConversation"),m.prototype),m)
e.default=E
Ember._setComponentTemplate(_,E)})
define("msg-typeahead/components/person-result",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper"],function(e,t,n,i,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var a,s,o,l
const c=Ember.HTMLBars.template({id:"P0rpiIGU",block:'{"symbols":[],"statements":[[7,"button",true],[11,"class",[29,["display-flex flex-row align-items-center msg-connections-typeahead__search-result\\n    ",[28,"if",[[28,"global-helpers@eq",[[23,0,["highlightedRecipient"]],[23,0,["recipient"]]],null],"msg-connections-typeahead__search-result--highlighted"],null]]]],[10,"tabindex","-1"],[10,"role","option"],[11,"id",[23,0,["recipient","domId"]]],[11,"aria-selected",[28,"if",[[28,"global-helpers@eq",[[23,0,["recipient","domId"]],[23,0,["highlightedRecipient","domId"]]],null],"true","false"],null]],[10,"type","button"],[8],[0,"\\n\\n  "],[5,"presence@entity-with-presence",[],[["@classNames","@indicatorClasses","@miniProfile","@size"],["msg-connections-typeahead__presence-entity","msg-connections-typeahead__presence-entity-indicator",[23,0,["recipient","miniProfile"]],2]]],[0,"\\n  "],[7,"div",true],[10,"class","msg-connections-typeahead__entity-description"],[8],[0,"\\n    "],[7,"dl",true],[10,"class","display-flex flex-column truncate msg-connections-typeahead__entity-description-list"],[8],[0,"\\n"],[4,"if",[[23,0,["recipient","hitInfo","text","attributes"]]],null,{"statements":[[0,"        "],[7,"dt",true],[10,"class","t-14 t-black truncate"],[8],[0,"\\n          "],[1,[28,"global-helpers@attributed-text-html",[[23,0,["recipient","hitInfo","text"]]],null],false],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"        "],[7,"dt",true],[10,"class","t-14 t-black t-bold truncate"],[8],[0,"\\n          "],[1,[28,"ember-cli-pemberly-i18n@format-name",null,[["firstName","lastName","type","color"],[[23,0,["recipient","miniProfile","firstName"]],[23,0,["recipient","miniProfile","lastName"]],"full",true]]],false],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]}],[0,"      "],[7,"dd",true],[10,"class","t-12 t-black--light t-normal truncate"],[8],[1,[23,0,["recipient","subtext"]],false],[9],[0,"\\n"],[4,"if",[[23,0,["recipient","contextText"]]],null,{"statements":[[0,"        "],[7,"dd",true],[10,"class","t-12 t-black--light t-normal truncate"],[8],[1,[28,"text-view-model@text-view-model",[[23,0,["recipient","contextText"]]],null],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n"],[4,"if",[[23,0,["isChecked"]]],null,{"statements":[[0,"      "],[7,"span",true],[8],[1,[28,"artdeco-icons-web@li-icon",null,[["aria-hidden","class","type","size"],["true","msg-connections-typeahead__check-icon","check-icon","large"]]],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"msg-typeahead/components/person-result.hbs"}})
let d=(a=Ember.inject.service("tracking"),s=Ember.computed("recipient","selectedRecipientUrns.[]").readOnly(),o=class extends Ember.Component{constructor(){super(...arguments);(0,t.default)(this,"tracking",l,this)}init(){super.init.apply(this,arguments)
this.tracking.setupTrackableComponent(this)}get isChecked(){return!!this.selectedRecipientUrns&&-1!==this.selectedRecipientUrns.indexOf(Ember.get(this,"recipient.miniProfile.entityUrn"))}onImpression(e){let{duration:t,visibleTime:n}=e
const i=Ember.get(this.recipient,"suggestedRecipientProfile")
this.trackingUsecase&&i&&this.tracking.fireTrackingPayload("MessagingRecommendationImpressionEvent",{recommendedEntity:{duration:t,usecase:this.trackingUsecase,recommendationTrackingId:Ember.get(this.recipient,"trackingId"),visibleTime:n,listPosition:{index:this.listPosition},recommendedEntityUrn:Ember.get(this.recipient,"miniProfile.entityUrn")}})}},l=(0,i.default)(o.prototype,"tracking",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(o.prototype,"isChecked",[s],Object.getOwnPropertyDescriptor(o.prototype,"isChecked"),o.prototype),o)
e.default=d
Ember._setComponentTemplate(c,d)})
define("nt-card/components/nt-card-action-row",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","nt-card/utils/constants"],function(e,t,n,i,r,a,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var o,l,c,d
const p=Ember.HTMLBars.template({id:"XXZREVbn",block:'{"symbols":["currentCta","ctaIndex","ctaInfo","properties","actions","asset","openShareboxModal","ctaControlName","@onCtaClick","@onAfterCardActionComplete","@isInAggregatedBirthdayPage","@onAfterMessageSend","@markCardAsRead","@notificationTrackingObject","@ctas","&attrs"],"statements":[[7,"div",false],[12,"class","display-flex mt3"],[13,16],[8],[0,"\\n"],[4,"each",[[23,15,[]]],null,{"statements":[[0,"    "],[7,"div",true],[10,"class","mr2"],[8],[0,"\\n"],[4,"with",[[28,"nt-card@get-cta-info",[[23,1,[]],[23,2,[]],[23,15,["length"]]],null]],null,{"statements":[[4,"if",[[23,3,["isConfirmation"]]],null,{"statements":[[0,"          "],[5,"nt-card@nt-card/confirmation",[],[["@cta","@handleAfterMessageSent","@handleConfirmationClick"],[[23,1,[]],[23,12,[]],[28,"fn",[[23,9,[]],[23,1,["confirmationAction"]]],null]]]],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,3,["isOneClickMessage"]]],null,{"statements":[[0,"          "],[5,"nt-card@nt-card/action-row/one-click-message-cta",[],[["@ctaInfo","@isButtonLixEnabled","@isInAggregatedBirthdayPage","@markCardAsRead","@notificationTrackingObject","@onAfterSend"],[[23,3,[]],[23,0,["isOneClickButtonLixEnabled"]],[23,11,[]],[23,13,[]],[23,14,[]],[28,"fn",[[23,12,[]],[23,1,[]]],null]]]],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,3,["isMessage"]]],null,{"statements":[[4,"with",[[28,"if",[[23,11,[]],[23,0,["aggregatedMessageCtaControlName"]],[23,3,["controlName"]]],null]],null,{"statements":[[0,"            "],[5,"message-button@message-button",[[3,"on",["click",[28,"fn",[[23,9,[]],[23,1,[]],[23,8,[]]],null]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,8,[]]]]],[["@afterSend","@buttonClasses","@customButtonA11yText","@groupConversationName","@isRecipientNotRequired","@message","@msgAdapterOptions","@recipientDistance","@recipientId","@recipientIds"],[[28,"fn",[[23,12,[]],[23,1,[]],[28,"if",[[23,11,[]],[23,0,["aggregatedMessageCtaControlName"]],"cta_display"],null],"MESSAGE"],null],[29,["artdeco-button artdeco-button--",[23,3,["buttonType"]]," artdeco-button--",[23,3,["buttonColor"]]]],[23,1,["displayText","accessibilityText"]],[23,3,["groupConversationName"]],[23,3,["isRecipientNotRequired"]],[23,3,["prefilledMessage"]],[23,3,["msgAdapterOptions"]],"DISTANCE_1",[23,3,["recipientId"]],[23,3,["recipientIds"]]]],{"statements":[[0,"\\n              "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,1,["displayText"]]]]],[0,"\\n            "]],"parameters":[]}],[0,"\\n"]],"parameters":[8]},null]],"parameters":[]},{"statements":[[4,"if",[[23,3,["isAppreciation"]]],null,{"statements":[[0,"          "],[5,"appreciation@appreciation-trigger",[],[["@afterKudoShare","@beforeTrigger","@buttonColor","@buttonType","@contextUrn","@dataControlName","@origin","@recipientId"],[[28,"fn",[[23,10,[]],[23,1,[]]],null],[28,"fn",[[23,9,[]],[23,1,[]]],null],[23,3,["buttonColor"]],[23,3,["buttonType"]],[23,3,["appreciationContextUrn"]],[23,3,["controlName"]],[23,3,["appreciationOrigin"]],[23,3,["recipientId"]]]],{"statements":[[0,"\\n            "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,1,["displayText"]]]]],[0,"\\n          "]],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,3,["isShare"]]],null,{"statements":[[0,"          "],[5,"nt-card@nt-card/action-row/share-cta",[],[["@beforeTrigger","@prefilledText","@urlToPreview"],[[28,"fn",[[23,9,[]],[23,1,[]]],null],[23,3,["prefilledText"]],[23,3,["urlToPreview"]]]],{"statements":[[0,"\\n            "],[5,"artdeco-button@artdeco-button",[[3,"ember-cli-pemberly-tracking@track-interaction",[[23,3,["controlName"]]]]],[["@click","@color","@type"],[[23,7,[]],[23,3,["buttonColor"]],[23,3,["buttonType"]]]],{"statements":[[0,"\\n              "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,1,["displayText"]]]]],[0,"\\n            "]],"parameters":[]}],[0,"\\n          "]],"parameters":[7]}],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,3,["isLazyModal"]]],null,{"statements":[[0,"          "],[5,"lazy-modal@lazy-modal-container",[],[["@onModalOpen","@url"],[[28,"fn",[[23,9,[]],[23,1,[]]],null],[23,3,["actionTarget"]]]],{"statements":[[0,"\\n"],[4,"if",[[23,4,["shouldOpenModal"]]],null,{"statements":[[0,"              "],[5,"artdeco-button@artdeco-button",[[3,"ember-cli-pemberly-tracking@track-interaction",[[23,3,["controlName"]]]]],[["@color","@controlType","@click","@type"],[[23,3,["buttonColor"]],"button",[23,5,["openModal"]],[23,3,["buttonType"]]]],{"statements":[[0,"\\n                "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,1,["displayText"]]]]],[0,"\\n              "]],"parameters":[]}],[0,"\\n"],[4,"if",[[23,4,["isModalOpen"]]],null,{"statements":[[0,"                "],[5,"asset-loader@deferred-asset-loader",[],[["@bundle","@retryLimit"],[[23,4,["bundleName"]],1]],{"statements":[[0,"\\n"],[4,"if",[[23,6,["state","fulfilled"]]],null,{"statements":[[0,"                    "],[1,[28,"component",[[28,"ember-holy-futuristic-template-namespacing-batman@-translate-dynamic-2",[[23,4,["modalName"]]],null]],[["isOpen","url","onDismiss"],[[23,4,["isModalOpen"]],[23,3,["actionTarget"]],[23,5,["closeModal"]]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"                "]],"parameters":[6]}],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},{"statements":[[0,"              "],[5,"app-aware-link@app-aware-link",[],[["@href"],[[23,3,["actionTarget"]]]]],[0,"\\n"]],"parameters":[]}],[0,"          "]],"parameters":[4,5]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"          "],[5,"artdeco-button@artdeco-button",[[3,"ember-cli-pemberly-tracking@track-interaction",[[23,3,["controlName"]]]]],[["@color","@click","@type"],[[23,3,["buttonColor"]],[28,"if",[[23,3,["isSendFeedback"]],[23,0,["sendFeedback"]],[28,"fn",[[23,9,[]],[23,1,[]]],null]],null],[23,3,["buttonType"]]]],{"statements":[[0,"\\n            "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,1,["displayText"]]]]],[0,"\\n          "]],"parameters":[]}],[0,"\\n        "]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}]],"parameters":[3]},null],[0,"    "],[9],[0,"\\n"]],"parameters":[1,2]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card-action-row.hbs"}})
let u=(o=Ember.inject.service("lix"),l=Ember._action,c=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"lix",d,this);(0,n.default)(this,"aggregatedMessageCtaControlName",s.CONTROL_NAMES.AGGREGATED_MESSAGE_CTA)
this.isOneClickButtonLixEnabled=this.lix.getTreatmentIsEnabled("voyager.web.props-one-click-message-button-style")}sendFeedback(){this.args.getNotificationsFeedbackInfo()}},d=(0,i.default)(c.prototype,"lix",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(c.prototype,"sendFeedback",[l],Object.getOwnPropertyDescriptor(c.prototype,"sendFeedback"),c.prototype),c)
e.default=u
Ember._setComponentTemplate(p,u)})
define("nt-card/components/nt-card-content-action",["exports","@glimmer/component","nt-card/utils/constants"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=Ember.HTMLBars.template({id:"2mQRWHcb",block:'{"symbols":["contentActionInfo","@card","@handleContentClick","@redesigned","@handleAfterMessageSent"],"statements":[[4,"if",[[23,0,["isConfirmation"]]],null,{"statements":[[0,"  "],[5,"nt-card@nt-card/confirmation",[],[["@cta","@handleAfterMessageSent","@handleConfirmationClick"],[[23,2,["contentAction"]],[23,5,[]],[28,"fn",[[23,3,[]],[23,2,["contentAction","confirmationAction"]]],null]]]],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,0,["isMessageContentAction"]]],null,{"statements":[[4,"with",[[28,"nt-card@get-message-cta-info",[[23,2,["contentAction"]]],null]],null,{"statements":[[0,"    "],[5,"message-button@message-button",[[3,"on",["click",[28,"fn",[[23,3,[]],[23,2,["contentAction"]],[23,1,["controlName"]]],null]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,1,["controlName"]]]]],[["@afterSend","@buttonClasses","@customButtonA11yText","@groupConversationName","@isRecipientNotRequired","@message","@msgAdapterOptions","@recipientId","@recipientIds"],[[28,"fn",[[23,5,[]],[23,2,["contentAction"]],[23,1,["controlName"]],"MESSAGE"],null],"artdeco-card mt3 p2 full-width display-flex t-12",[23,2,["contentAccessibilityText"]],[23,1,["groupConversationName"]],[23,1,["isRecipientNotRequired"]],[23,1,["prefilledMessage"]],[23,1,["msgAdapterOptions"]],[23,1,["recipientId"]],[23,1,["recipientIds"]]]],{"statements":[[0,"\\n      "],[7,"div",true],[10,"class","nt-card__text--1-line full-width text-align-left text-align-start t-black"],[8],[0,"\\n        "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,2,["contentPrimaryText","firstObject"]]]]],[0,"\\n      "],[9],[0,"\\n      "],[7,"div",true],[10,"class","t-black--light t-bold ml1"],[8],[0,"\\n        "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,2,["contentAction","displayText"]]]]],[0,"\\n      "],[9],[0,"\\n    "]],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null]],"parameters":[]},{"statements":[[0,"  "],[7,"button",false],[12,"aria-label",[23,2,["contentAccessibilityText"]]],[12,"aria-hidden",[28,"if",[[23,2,["contentAccessibilityText"]],"false","true"],null]],[12,"class","artdeco-card overflow-hidden mt3"],[12,"type","button"],[3,"on",["click",[28,"fn",[[23,3,[]],[23,2,["contentAction"]]],null]]],[3,"ember-cli-pemberly-tracking@track-interaction",["update_content"]],[8],[0,"\\n    "],[5,"nt-card@nt-card-content",[],[["@content","@redesigned"],[[28,"nt-card@get-card-content-model",[[23,2,[]]],[["entitySize","largeImgWidth","smallImgWidth"],[2,114,102]]],[23,4,[]]]]],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]}]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card-content-action.hbs"}}),r=/\/messaging\/compose/
class a extends t.default{get isConfirmation(){const e=Ember.get(this.args,"card.contentAction.type")
return e&&e===n.CARD_ACTION_ENUMS.CONFIRMATION}get isMessageContentAction(){const e=Ember.get(this.args,"card.contentAction.actionTarget")
return e&&r.test(e)}}e.default=a
Ember._setComponentTemplate(i,a)})
define("nt-card/components/nt-card-content",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const t=Ember.HTMLBars.template({id:"ULZwZaKz",block:'{"symbols":["fontSizeClasses","fontColorClass","@content","@redesigned"],"statements":[[4,"with",[[28,"if",[[23,4,[]],"nt-card__text--2-line t-12","nt-card__text--2-line-large t-14"],null]],null,{"statements":[[4,"if",[[28,"global-helpers@neq",[[23,3,["contentType"]],"ENTITY_WITH_SUPPORTING_TEXT"],null]],null,{"statements":[[4,"if",[[23,3,["ref"]]],null,{"statements":[[0,"      "],[7,"div",true],[11,"class",[29,["nt-card__text--word-wrap text-align-left text-align-start m2 ",[23,1,[]]," ",[28,"if",[[23,4,[]],"t-black","t-black--light"],null]]]],[8],[0,"\\n        "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["ref","text"]]]]],[0,"\\n      "],[9],[0,"\\n      "],[7,"hr",true],[10,"class","m0"],[8],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"  "],[7,"div",true],[11,"class",[29,[[23,3,["body","classes"]]," display-flex"]]],[8],[0,"\\n"],[4,"if",[[23,3,["media"]]],null,{"statements":[[0,"      "],[7,"div",true],[11,"class",[29,["relative overflow-hidden flex-shrink-0 ",[23,3,["media","wrapperClasses"]]]]],[8],[0,"\\n        "],[5,"image-view-model@image-view-model",[],[["@imgClasses","@isVideo","@images","@entitySize","@illustrationSize"],[[23,3,["media","classes"]],[23,3,["media","isVideo"]],[23,3,["media","imageViewModel"]],[28,"if",[[23,3,["media","entitySize"]],[23,3,["media","entitySize"]],8],null],[23,3,["media","illustrationSize"]]]]],[0,"\\n"],[4,"if",[[23,3,["media","showLiveIndicator"]]],null,{"statements":[[0,"          "],[7,"span",true],[10,"class","nt-card-content__media-live-label pv1 ph2 t-sans t-12 t-white t-bold"],[8],[0,"\\n            "],[1,[28,"t",["live","nt-card/components/nt-card-content"],null],false],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]},null],[0,"      "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n    "],[7,"div",true],[11,"class",[29,[[23,3,["body","textClasses"]]," full-width display-flex flex-column justify-center align-items-flex-start p2"]]],[8],[0,"\\n"],[4,"if",[[23,3,["header"]]],null,{"statements":[[0,"        "],[7,"div",true],[10,"class","nt-card-content__body-text nt-card__text--word-wrap nt-card__text--1-line text-align-left text-align-start mb1 t-12 t-black t-bold"],[8],[0,"\\n          "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["header","text"]]]]],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,3,["badge"]]],null,{"statements":[[0,"        "],[7,"div",true],[10,"class","nt-card-content__badge mv1"],[8],[0,"\\n          "],[5,"image-view-model@image-view-model",[],[["@images","@entitySize"],[[23,3,["badge"]],1]]],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"with",[[28,"if",[[28,"global-helpers@and",[[23,4,[]],[28,"global-helpers@not",[[23,3,["body","classes"]]],null]],null],"t-black","t-black--light"],null]],null,{"statements":[[4,"if",[[23,3,["main"]]],null,{"statements":[[0,"          "],[7,"div",true],[11,"class",[29,["nt-card-content__body-text nt-card__text--word-wrap text-align-left text-align-start ",[23,1,[]]," ",[23,2,[]]]]],[8],[0,"\\n            "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["main","text"]]]]],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,3,["footer"]]],null,{"statements":[[0,"          "],[7,"div",true],[11,"class",[29,["nt-card-content__body-text nt-card__text--word-wrap nt-card__text--1-line text-align-left text-align-start t-12 ",[23,3,["footer","classes"]]," ",[23,2,[]]]]],[8],[0,"\\n            "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["footer","text"]]]]],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[2]},null],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n"],[4,"if",[[28,"global-helpers@eq",[[23,3,["contentType"]],"ENTITY_WITH_SUPPORTING_TEXT"],null]],null,{"statements":[[4,"if",[[23,3,["ref"]]],null,{"statements":[[0,"      "],[7,"div",true],[11,"class",[29,["nt-card-content__body--secondary nt-card__text--word-wrap text-align-left text-align-start t-black--light ph2 ",[23,1,[]]]]],[8],[0,"\\n        "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["ref","text"]]]]],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card-content.hbs"}})
var n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})
define("nt-card/components/nt-card-list",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const t=Ember.HTMLBars.template({id:"+sFHA870",block:'{"symbols":["card","index","&default","@canInfiniteScroll","@onGetNextCardPage","&attrs","@cards"],"statements":[[5,"infinite-scroll@infinite-scroll-container",[],[["@canInfiniteScroll","@onInfiniteScroll"],[[23,4,[]],[23,5,[]]]],{"statements":[[0,"\\n  "],[7,"div",false],[12,"class","nt-card-list relative full-width"],[13,6],[8],[0,"\\n"],[4,"each",[[23,7,[]]],null,{"statements":[[0,"      "],[5,"occludable-area@occludable-area",[],[["@hintClassName","@occlusionEnabled","@class"],["nt-card__occlusion-wrapper--placeholder",[28,"global-helpers@gte",[[23,2,[]],2],null],"nt-card-list__occludable-area"]],{"statements":[[0,"\\n        "],[14,3,[[23,1,[]],[23,2,[]]]],[0,"\\n      "]],"parameters":[]}],[0,"\\n"]],"parameters":[1,2]},null],[0,"  "],[9],[0,"\\n"]],"parameters":[]}],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card-list.hbs"}})
var n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})
define("nt-card/components/nt-card",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","nt-card/utils/constants","nt-card/utils/tracking-utils","global-utils/utils/url","urn-utils","global-utils/utils/logger","ember-lifeline"],function(e,t,n,i,r,a,s,o,l,c,d,p){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var u,m,h,g,b,f,_,E,y,T,v,C,O,S,w,A,I,P,N,k,R
const x=Ember.HTMLBars.template({id:"W6NRkB8y",block:'{"symbols":["primaryText","ctaInfo","@card","@markCardAsRead","@redesigned","&attrs"],"statements":[[4,"if",[[23,3,["deleted"]]],null,{"statements":[[0,"  "],[7,"article",true],[11,"class",[29,["nt-card p4 justify-space-between align-items-center ",[28,"if",[[23,5,[]],"nt-card--redesigned"],null]]]],[8],[0,"\\n    "],[7,"p",true],[10,"class","t-14"],[8],[0,"\\n      "],[1,[28,"t",["i18n_notification_deleted","nt-card/components/nt-card"],null],false],[0,"\\n    "],[9],[0,"\\n    "],[5,"artdeco-button@artdeco-button",[[3,"ember-cli-pemberly-tracking@track-interaction",["delete"],[["onInteract"],[[23,0,["undoDeleteCustomTracking"]]]]]],[["@icon","@type","@color","@size","@text","@click"],["undo-icon","tertiary","muted",1,[28,"t",["i18n_undo","nt-card/components/nt-card"],null],[28,"fn",[[23,0,["handleSettingClick"]],[23,3,["option"]]],null]]]],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[7,"article",false],[12,"class",[29,["nt-card ",[28,"unless",[[23,3,["read"]],[23,0,["ntCardUnreadClass"]]],null]," ",[28,"if",[[23,5,[]],"nt-card--redesigned"],null]," ",[28,"if",[[23,0,["verticallyCentered"]],"align-items-center"],null]," ",[28,"if",[[23,0,["usingBlueDot"]],"pl5"],null]]]],[13,6],[3,"did-insert",[[23,0,["handleFirstCardRendered"]]]],[3,"ember-cli-pemberly-tracking@track-impression",[[23,0,["handleImpression"]]],[["routeName","currentRoute"],[[28,"get",[[28,"-get-dynamic-var",["outletState"],null],"render.name"],null],[28,"get",[[28,"-get-dynamic-var",["outletState"],null],"render"],null]]]],[8],[0,"\\n    "],[7,"div",true],[11,"class",[29,["nt-card__left-rail ",[28,"if",[[23,5,[]],"mr2"],null]]]],[8],[0,"\\n"],[4,"if",[[23,0,["shouldShowUnreadBlueDot"]]],null,{"statements":[[0,"        "],[7,"figure",true],[10,"class","nt-card__blue-dot-figure mt5"],[8],[0,"\\n          "],[7,"svg",true],[10,"viewBox","0 0 100 100"],[10,"class","nt-card__blue-dot"],[10,"role","img"],[11,"alt",[28,"t",["i18n_new","nt-card/components/nt-card"],null]],[8],[0,"\\n            "],[7,"circle",true],[10,"cx","50"],[10,"cy","50"],[10,"r","50"],[10,"fill","currentColor"],[8],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[23,3,["headerImage","accessibilityText"]]],null,{"statements":[[0,"        "],[7,"a",false],[12,"href",[23,0,["entityActionTarget"]]],[3,"on",["click",[28,"fn",[[23,0,["handleTrackedCardAction"]],[23,3,["headerImage","actionTarget"]],[23,0,["cardImageClickControlName"]]],null]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,0,["cardImageClickControlName"]]]],[8],[0,"\\n          "],[5,"image-view-model@image-view-model",[],[["@images","@entitySize","@isPresenceEnabled"],[[23,3,["headerImage"]],4,true]]],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"        "],[5,"image-view-model@image-view-model",[],[["@images","@entitySize","@isPresenceEnabled"],[[23,3,["headerImage"]],4,true]]],[0,"\\n"]],"parameters":[]}],[0,"    "],[9],[0,"\\n\\n    "],[7,"div",true],[11,"class",[29,["display-flex flex-column flex-grow-1 mr3 ",[28,"unless",[[23,5,[]],"mt1"],null]]]],[8],[0,"\\n"],[4,"if",[[28,"global-helpers@or",[[23,3,["kickerIcon"]],[23,3,["kickerText"]]],null]],null,{"statements":[[0,"        "],[7,"div",true],[11,"class",[29,["display-flex align-items-center ",[28,"if",[[23,5,[]],"mb2","mb1"],null]]]],[8],[0,"\\n"],[4,"if",[[23,3,["kickerIcon"]]],null,{"statements":[[0,"            "],[5,"image-view-model@image-view-model",[],[["@class","@images","@entitySize"],["mr1",[23,3,["kickerIcon"]],1]]],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,3,["kickerText"]]],null,{"statements":[[0,"            "],[7,"span",true],[11,"class",[23,0,["kickerTextClasses"]]],[8],[0,"\\n              "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["kickerText"]]]]],[0,"\\n            "],[9],[0,"\\n"]],"parameters":[]},null],[0,"        "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,3,["cardAction"]]],null,{"statements":[[4,"if",[[23,0,["isMessageHeadlineApplied"]]],null,{"statements":[[4,"with",[[28,"nt-card@get-message-cta-info",[[23,3,["cardAction"]]],null]],null,{"statements":[[0,"            "],[5,"message-button@message-button",[[3,"on",["click",[28,"fn",[[23,0,["handleTrackedCardAction"]],[23,3,["cardAction"]],[23,0,["cardClickControlName"]]],null]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,0,["cardClickControlName"]]]]],[["@isRecipientNotRequired","@recipientId","@recipientIds","@recipientDistance","@message","@msgAdapterOptions","@groupConversationName","@buttonClasses","@afterSend"],[[23,2,["isRecipientNotRequired"]],[23,2,["recipientId"]],[23,2,["recipientIds"]],"DISTANCE_1",[23,2,["prefilledMessage"]],[23,2,["msgAdapterOptions"]],[23,2,["groupConversationName"]],"nt-card__headline nt-card__text--3-line nt-card__text--word-wrap t-14 t-black t-normal text-align-left",[28,"fn",[[23,0,["handleTrackedAfterMessageSent"]],[23,3,["cardAction"]]],null]]],{"statements":[[0,"\\n              "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["headline"]]]]],[0,"\\n            "]],"parameters":[]}],[0,"\\n"]],"parameters":[2]},null]],"parameters":[]},{"statements":[[0,"          "],[7,"a",false],[12,"class","nt-card__headline nt-card__text--3-line nt-card__text--word-wrap t-14 t-black t-normal"],[12,"href",[23,0,["nonP1RouteActionTarget"]]],[12,"tabindex","0"],[3,"on",["click",[28,"fn",[[23,0,["handleTrackedCardAction"]],[23,3,["cardAction"]],[23,0,["cardClickControlName"]]],null]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,0,["cardClickControlName"]]]],[8],[0,"\\n            "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["headline"]]]]],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]}]],"parameters":[]},{"statements":[[0,"        "],[7,"span",false],[12,"class","nt-card__text--3-line nt-card__text--word-wrap t-14"],[3,"on",["click",[28,"fn",[[23,0,["handleTrackedCardAction"]],[23,3,["cardAction"]],[23,0,["cardClickControlName"]]],null]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,0,["cardClickControlName"]]]],[8],[0,"\\n          "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["headline"]]]]],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]}],[0,"\\n"],[4,"if",[[23,3,["subHeadline"]]],null,{"statements":[[0,"        "],[7,"span",true],[10,"class","nt-card__text--2-line t-12 t-black--light t-normal mt1"],[8],[0,"\\n          "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["subHeadline"]]]]],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,5,[]]],null,{"statements":[[0,"        "],[5,"nt-card@nt-card/tertiary",[[12,"class","mt1"]],[["@tertiaryImage","@tertiaryTarget","@tertiaryText"],[[23,3,["tertiaryImage"]],[23,3,["tertiaryTarget"]],[23,3,["tertiaryText"]]]]],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[28,"nt-card@has-card-content",[[23,3,["contentType"]]],null]],null,{"statements":[[4,"if",[[28,"global-helpers@not",[[23,0,["confirmation"]]],null]],null,{"statements":[[0,"          "],[5,"nt-card@nt-card-content-action",[],[["@card","@handleAfterMessageSent","@handleContentClick","@redesigned"],[[23,3,[]],[23,0,["handleTrackedAfterMessageSent"]],[23,0,["handleTrackedCardAction"]],[23,5,[]]]]],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},{"statements":[[4,"if",[[28,"global-helpers@eq",[[23,3,["contentType"]],"TEXT_LIST"],null]],null,{"statements":[[0,"        "],[7,"ul",true],[10,"class","mt3"],[8],[0,"\\n"],[4,"each",[[23,3,["contentPrimaryText"]]],null,{"statements":[[0,"            "],[7,"li",true],[10,"class","nt-card__text--1-line-large t-14 t-black--light t-normal"],[8],[0,"\\n              "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,1,[]]]]],[0,"\\n            "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"nt-card@is-entity-list-content",[[23,3,["contentType"]]],null]],null,{"statements":[[0,"        "],[7,"div",true],[10,"class","nt-card-content__entity-list mt3"],[8],[0,"\\n          "],[5,"image-view-model@entity-pile",[],[["@entitySize","@imgList","@imgCount","@renderImgCount","@isSmallList"],[3,[23,3,["contentImages"]],[23,3,["additionalContentImagesCount"]],[28,"if",[[23,0,["renderImgCount"]],[23,0,["renderImgCount"]],5],null],[23,0,["isEntityPileSmall"]]]]],[0,"\\n        "],[9],[0,"\\n      "]],"parameters":[]},null]],"parameters":[]}]],"parameters":[]}],[0,"\\n"],[4,"if",[[28,"global-helpers@eq",[[23,3,["insightType"]],"TEXT"],null]],null,{"statements":[[0,"        "],[7,"span",true],[10,"class","nt-card__insight nt-card__text--2-line-small t-12 t-black--light t-normal"],[8],[0,"\\n          "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,3,["insight"]]]]],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"global-helpers@eq",[[23,3,["insightType"]],"SOCIAL_ACTIVITY_COUNTS"],null]],null,{"statements":[[4,"if",[[23,3,["socialActivityCounts"]]],null,{"statements":[[0,"          "],[5,"nt-card@nt-card/social-counts",[[12,"class","mt3"]],[["@socialActivityCounts"],[[23,3,["socialActivityCounts"]]]]],[0,"\\n"]],"parameters":[]},null],[0,"      "]],"parameters":[]},null]],"parameters":[]}],[0,"\\n"],[4,"if",[[23,3,["actions","length"]]],null,{"statements":[[0,"        "],[5,"nt-card@nt-card-action-row",[],[["@ctas","@getNotificationsFeedbackInfo","@isInAggregatedBirthdayPage","@markCardAsRead","@notificationTrackingObject","@onAfterCardActionComplete","@onAfterMessageSend","@onCtaClick","@redesigned"],[[23,0,["ctas"]],[23,0,["getNotificationsFeedbackInfo"]],[23,0,["isInAggregatedBirthdayPage"]],[23,4,[]],[23,0,["trackingObject"]],[23,0,["handleAfterCardActionComplete"]],[23,0,["handleTrackedAfterMessageSent"]],[23,0,["handleTrackedCardAction"]],[23,5,[]]]]],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n\\n    "],[7,"div",true],[10,"class","display-flex flex-column text-align-right align-self-flex-start"],[8],[0,"\\n"],[4,"if",[[23,3,["publishedAt"]]],null,{"statements":[[0,"        "],[7,"p",true],[10,"class","nt-card__time-ago t-12 t-black--light t-normal"],[8],[0,"\\n          "],[1,[28,"global-helpers@time-ago",[[23,3,["publishedAt"]],"short"],null],false],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,0,["showSettingsDropdown"]]],null,{"statements":[[0,"        "],[5,"nt-card@nt-card/settings-dropdown",[],[["@handleSettingClick","@settingOptions","@tooltipText","@tooltipTrackingId","@markCardAsRead","@notificationTrackingObject","@getNotificationsFeedbackInfo"],[[23,0,["handleSettingClick"]],[23,3,["settingOptions"]],[23,3,["settingTooltipText"]],[23,3,["settingTooltipTrackingId"]],[23,4,[]],[23,0,["trackingObject"]],[23,0,["getNotificationsFeedbackInfo"]]]]],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card.hbs"}}),{MESSAGE_ACTION_CATEGORY:M,UNDO_DELETE_ACTION_CATEGORY:D}=s.ACTION_CATEGORIES,{AGGREGATED_CARD_CLICK:U,AGGREGATED_ONE_CLICK_CARD_CLICK:L,AGGREGATED_ONE_CLICK_PROFILE_IMAGE:F,AGGREGATED_PROFILE_IMAGE:j,CARD_CLICK_CONTROL_NAME:z,CARD_IMAGE_CLICK_CONTROL_NAME:V,DISPLAY_CTA_CLICK:H}=s.CONTROL_NAMES,G=/\/messaging\/compose/,{TURN_OFF:B}=s.CARD_SETTING_OPTIONS
let K=(u=Ember.inject.service("ads@ad-banner-manager"),m=Ember.inject.service("lego@tracking"),h=Ember.inject.service("lix"),g=Ember.inject.service("store"),b=Ember.inject.service("tracking"),f=Ember.inject.service("jet"),_=Ember._action,E=Ember._action,y=Ember._action,T=Ember._action,v=Ember._action,C=Ember._action,O=Ember._action,S=Ember._action,w=class extends a.default{get cardClickControlName(){return this.isInAggregatedBirthdayPage?this.isOneClickMessageEnabled?L:U:z}get cardImageClickControlName(){return this.isInAggregatedBirthdayPage?this.isOneClickMessageEnabled?F:j:V}get confirmation(){return Ember.get(this.args,"card.actions").find(e=>Ember.get(e,"type")===s.CARD_ACTION_ENUMS.CONFIRMATION)}get ctas(){return this.confirmation?[this.confirmation]:Ember.get(this.args,"card.actions")}get entityActionTarget(){const e=Ember.get(this.args,"card.headerImage.actionTarget")||Ember.get(this.args,"card.cardAction.actionTarget")
return e?jSecure.sanitizeUrl(e):void 0}get isEntityPileSmall(){const e=Ember.get(this.args,"card.contentType")
return e&&e.startsWith("ENTITY_LIST_SMALL")}get isInAggregatedBirthdayPage(){var e
const{"card.actions":t,isInAggregatedPage:n}=Ember.getProperties(this.args,"card.actions","isInAggregatedPage")
if(!Ember.isArray(t)||!t.length||!n)return!1
const i=null!==(e=Ember.get(t,"firstObject.actionTarget"))&&void 0!==e?e:"",r=(0,l.parseQueryString)(i)
return i.startsWith("/messaging")&&"BIRTHDAY_PROP"===r.propType}get isMessageHeadlineApplied(){const e=Ember.get(this.args,"card.cardAction.actionTarget")
return e&&G.test(e)}get isOneClickMessageEnabled(){var e
const t=Ember.get(this.args,"card.actions")
return!(!Ember.isArray(t)||!t.length)&&(null!==(e=Ember.get(t,"firstObject.actionTarget"))&&void 0!==e?e:"").startsWith("/messaging/oneclick")}get kickerTextClasses(){return this.args.redesigned?Ember.get(this.args,"card.kickerIcon")?"text-body-xsmall t-black--light":"text-heading-small":"nt-card__text--2-line t-12 t-black t-bold"}get listPosition(){var e,t,n,i
const r=null!==(e=this.args.segmentIndex)&&void 0!==e?e:0
return(null!==(t=this.args.zeroBasedIndex)&&void 0!==t?t:0)+((null===(n=(i=this.args).getSegmentOffset)||void 0===n?void 0:n.call(i,r))||0)+1}get nonP1RouteActionTarget(){const e=Ember.get(this.args,"card.cardAction.actionTarget")
if(!e.includes("p1-route")){if(e.includes("jobs/view")&&!e.includes("refId")){const{id:e}=(0,c.extractEntityInfoFromUrn)(Ember.get(this,"args.card.entityUrn")),t=e.substring(0,e.lastIndexOf(":"));(0,p.runTask)(this,()=>{(0,d.errorLogger)(this.jet,`Jobs notification with missing ref ID: ${t}`,null,["REFERENCE_ID_TRACKING"])})}return e?jSecure.sanitizeUrl(e):void 0}}get ntCardUnreadClass(){return this.usingBlueDot?"":"nt-card--unread"}get shouldShowUnreadBlueDot(){return this.usingBlueDot&&!Ember.get(this.args.card,"read")}get showSettingsDropdown(){var e
return null===(e=this.args.showSettingsDropdown)||void 0===e||e}get trackingObject(){return{objectUrn:Ember.get(this.args,"card.objectUrn"),trackingId:Ember.get(this.args,"card.trackingId")}}get verticallyCentered(){return this.args.redesigned&&!Ember.get(this.args,"card.contentType")&&!Ember.get(this.args,"card.insightType")&&!Ember.get(this.args,"card.actions.length")}constructor(){super(...arguments);(0,t.default)(this,"adBannerManager",A,this);(0,t.default)(this,"legoTracking",I,this);(0,t.default)(this,"lix",P,this);(0,t.default)(this,"store",N,this);(0,t.default)(this,"tracking",k,this);(0,t.default)(this,"jet",R,this);(0,n.default)(this,"pageViewKey",this.args.pageViewKey||s.PAGE_KEYS.FEED_LIST)
this.showSettingsDropdown
this.usingBlueDot=this.lix.getTreatmentIsEnabled("voyager.web.notifications-unread-dot")}willDestroy(){super.willDestroy.apply(this,arguments);(0,p.runDisposables)(this)}handleFirstCardRendered(){1===this.listPosition&&this.tracking.firePageViewEvent(s.PAGE_KEYS.FEED_LIST)}handleImpression(e){if(this.listPosition%10==0){this.tracking.firePageViewEvent(this.pageViewKey)
this.adBannerManager.triggerRefreshAdEvent()}return(0,o.buildImpressionTrackingEvent)(this.args.card,this.listPosition,e)}handleTrackedCardAction(e,t,n){var i,r,a
let s=e
"string"==typeof e&&(s=Ember.Object.create({actionTarget:e,type:"DISPLAY"}))
if(!(s=s||e||Ember.get(this.args,"card.cardAction")))return Ember.RSVP.resolve(null)
const{controlName:l,actionCategory:c}=(0,o.deriveTrackingParams)(this.args.card,s,t)
this._fireActionEvent(l,c)
null===(i=(r=this.args).markCardAsRead)||void 0===i||i.call(r)
if(n&&(null===(a=n.currentTarget)||void 0===a?void 0:a.href)){if(n.ctrlKey||n.metaKey)return Ember.RSVP.resolve(null)
n.preventDefault()}return this.args.actionTargetHandler.handleCardActionClick(this.args.card,s)}handleTrackedAfterMessageSent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:M
this._fireActionEvent(t,n)
return this.handleAfterCardActionComplete(e)}handleAfterCardActionComplete(e){return this.args.actionTargetHandler.handleAfterCardActionComplete(this.args.card,e)}undoDeleteCustomTracking(e){let{controlUrn:t}=e
return(0,o.buildMeCustomTrackingInfo)(this.trackingObject,t,D)}getNotificationsFeedbackInfo(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._getNotificationTypeUrn()
this.store.queryURL("/voyager/api/voyagerNotificationsDashFeedbackInfo",{params:{q:"notificationType",notificationTypeUrn:e,recipe:"com.linkedin.voyager.dash.deco.notifications.FullNotificationsFeedbackInfo"}}).then(e=>{const t=Ember.get(e,"elements.firstObject")
this.args.openFeedbackModal(t)}).catch(e=>{this.args.openFeedbackModal()
throw e})}handleSettingClick(e){const t=Ember.get(this.args,"card.deleted"),n=Ember.get(e,"optionType")
return this.args.ntSettingsHandler.setNewSettingValue(this.args.card,e,t).then(()=>{var i,r
n===B&&this.tracking.fireTrackingPayload("NotificationSettingChangeActionEvent",{notification:this.trackingObject,notificationTypeUrn:Ember.get(e,"notificationTypeUrn"),currentValue:"ON",newValue:"OFF"})
null===(i=(r=this.args).afterSettingClick)||void 0===i||i.call(r,this.args.card,t,n)})}_getNotificationTypeUrn(){const e=Ember.get(this.args,"card.settingOptions").find(e=>Ember.get(e,"notificationTypeUrn"))
return e?Ember.get(e,"notificationTypeUrn"):null}_fireActionEvent(e,t){e&&t&&(0,o.fireMeCustomTracking)(this.tracking,this.trackingObject,e,t)}},A=(0,i.default)(w.prototype,"adBannerManager",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=(0,i.default)(w.prototype,"legoTracking",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=(0,i.default)(w.prototype,"lix",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=(0,i.default)(w.prototype,"store",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=(0,i.default)(w.prototype,"tracking",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=(0,i.default)(w.prototype,"jet",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(w.prototype,"handleFirstCardRendered",[_],Object.getOwnPropertyDescriptor(w.prototype,"handleFirstCardRendered"),w.prototype),(0,i.default)(w.prototype,"handleImpression",[E],Object.getOwnPropertyDescriptor(w.prototype,"handleImpression"),w.prototype),(0,i.default)(w.prototype,"handleTrackedCardAction",[y],Object.getOwnPropertyDescriptor(w.prototype,"handleTrackedCardAction"),w.prototype),(0,i.default)(w.prototype,"handleTrackedAfterMessageSent",[T],Object.getOwnPropertyDescriptor(w.prototype,"handleTrackedAfterMessageSent"),w.prototype),(0,i.default)(w.prototype,"handleAfterCardActionComplete",[v],Object.getOwnPropertyDescriptor(w.prototype,"handleAfterCardActionComplete"),w.prototype),(0,i.default)(w.prototype,"undoDeleteCustomTracking",[C],Object.getOwnPropertyDescriptor(w.prototype,"undoDeleteCustomTracking"),w.prototype),(0,i.default)(w.prototype,"getNotificationsFeedbackInfo",[O],Object.getOwnPropertyDescriptor(w.prototype,"getNotificationsFeedbackInfo"),w.prototype),(0,i.default)(w.prototype,"handleSettingClick",[S],Object.getOwnPropertyDescriptor(w.prototype,"handleSettingClick"),w.prototype),w)
e.default=K
Ember._setComponentTemplate(x,K)})
define("nt-card/components/nt-card/action-row/one-click-message-cta",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","nt-card/utils/tracking-utils","nt-card/utils/constants","global-utils/utils/keyboard-utils"],function(e,t,n,i,r,a,s,o,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var c,d,p,u,m,h,g,b,f,_,E,y,T,v,C,O,S,w
const A=Ember.HTMLBars.template({id:"r2kwwC5x",block:'{"symbols":["&attrs","@ctaInfo","@isButtonLixEnabled"],"statements":[[7,"div",false],[12,"class","display-flex full-width"],[13,1],[8],[0,"\\n  "],[7,"div",true],[10,"class","nt-one-click-message-cta__input-container"],[8],[0,"\\n"],[4,"if",[[23,0,["showInputTrigger"]]],null,{"statements":[[0,"      "],[7,"button",false],[12,"aria-label",[28,"t",["i18n_one_click_message_trigger_label","nt-card/components/nt-card/action-row/one-click-message-cta"],null]],[12,"class","nt-one-click-message-cta__input-trigger"],[12,"type","button"],[3,"on",["click",[23,0,["clickInputTrigger"]]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,0,["editControlName"]]],[["onInteract"],[[23,0,["fireCustomEditEvent"]]]]],[8],[0,"\\n        "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size","class"],["pencil-icon","small","nt-one-click-message-cta__input-trigger-icon"]]],false],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null],[0,"    "],[5,"artdeco-text-input@artdeco-text-input",[[12,"class",[29,["nt-one-click-message-cta__input ",[28,"if",[[23,0,["showInputTrigger"]],"nt-one-click-message-cta__input--truncated"],null]]]],[3,"global-modifiers@focus",null,[["when","onSelector","withCursorAtEnd"],[[28,"global-helpers@not",[[23,0,["showInputTrigger"]]],null],"input",true]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,0,["editControlName"]]],[["onInteract"],[[23,0,["fireCustomEditEvent"]]]]]],[["@value","@onInput","@onFocusIn","@onFocusOut","@onKeyUp","@placeholder","@aria-label"],[[23,0,["inputValue"]],[23,0,["updateInputValue"]],[23,0,["clickInputTrigger"]],[28,"ember-simple-set-helper@set",[[23,0,[]],"showInputTrigger",true],null],[23,0,["handleKeyUp"]],[23,2,["hintText"]],[28,"t",["i18n_one_click_message_input_label","nt-card/components/nt-card/action-row/one-click-message-cta"],null]]]],[0,"\\n  "],[9],[0,"\\n  "],[5,"artdeco-button@artdeco-button",[[3,"ember-cli-pemberly-tracking@track-interaction",[[23,0,["sendControlName"]]]]],[["@controlType","@text","@type","@color","@disabled","@click","@class"],["button",[28,"t",["i18n_one_click_message_send_button_label","nt-card/components/nt-card/action-row/one-click-message-cta"],null],[28,"if",[[23,3,[]],"secondary","tertiary"],null],[28,"if",[[23,3,[]],"default","muted"],null],[28,"global-helpers@not",[[23,0,["inputValue"]]],null],[23,0,["sendMessage"]],"ml1"]]],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card/action-row/one-click-message-cta.hbs"}}),{EDIT_ACTION_CATEGORY:I,MESSAGE_ACTION_CATEGORY:P,SEND_PREFILLED_MESSAGE_ACTION_CATEGORY:N}=o.ACTION_CATEGORIES,{AGGREGATED_ONE_CLICK_EDIT:k,AGGREGATED_ONE_CLICK_SEND:R,ONE_CLICK_EDIT:x,ONE_CLICK_SEND:M}=o.CONTROL_NAMES
let D=(c=Ember.inject.service("authentication@authenticated-user"),d=Ember.inject.service("i18n"),p=Ember.inject.service("msg-data@data-manager"),u=Ember.inject.service("persistent-toast-manager@persistent-toast-manager"),m=Ember._tracked,h=Ember._tracked,g=Ember._action,b=Ember._action,f=Ember._action,_=Ember._action,E=Ember._action,y=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"authenticatedUser",T,this);(0,t.default)(this,"i18n",v,this);(0,t.default)(this,"msgDataManager",C,this);(0,t.default)(this,"persistentToastManager",O,this);(0,t.default)(this,"showInputTrigger",S,this);(0,t.default)(this,"inputValue",w,this)}get editControlName(){return this.args.isInAggregatedBirthdayPage?k:x}get sendControlName(){return this.args.isInAggregatedBirthdayPage?R:M}clickInputTrigger(){var e,t
this.showInputTrigger=!1
null===(e=(t=this.args).markCardAsRead)||void 0===e||e.call(t)}updateInputValue(e){this.inputValue=e.target.value}sendMessage(){var e,t
const n=null!==(e=null===(t=this.args.ctaInfo)||void 0===t?void 0:t.recipientUrn)&&void 0!==e?e:"",i={message:this.inputValue.trim(),messageReplyType:"MEMBER_TO_MEMBER",recipientIDs:[n],senderID:Ember.get(this,"authenticatedUser.miniProfile.entityUrn")}
return this.msgDataManager.createAndSaveConversation(i).then(()=>this._handleSendSuccess()).catch(e=>{this._handleSendError()
throw e})}fireCustomEditEvent(e){let{controlUrn:t}=e
return(0,s.buildMeCustomTrackingInfo)(this.args.notificationTrackingObject,t,I)}handleKeyUp(e){(0,l.isEnterKey)(e)&&this.inputValue&&this.sendMessage()}_handleSendSuccess(){var e
const t=this.inputValue===(null===(e=this.args.ctaInfo)||void 0===e?void 0:e.prefilledText)?N:P
this.args.onAfterSend(this.sendControlName,t)}_handleSendError(){const e=this.i18n.lookupTranslation("component","nt-card@nt-card/action-row/one-click-message-cta","i18n_one_click_message_send_error_toast")()
this.persistentToastManager.error({message:e})}},T=(0,i.default)(y.prototype,"authenticatedUser",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=(0,i.default)(y.prototype,"i18n",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=(0,i.default)(y.prototype,"msgDataManager",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=(0,i.default)(y.prototype,"persistentToastManager",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=(0,i.default)(y.prototype,"showInputTrigger",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),w=(0,i.default)(y.prototype,"inputValue",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e,t
return null!==(e=null===(t=this.args.ctaInfo)||void 0===t?void 0:t.prefilledText)&&void 0!==e?e:""}}),(0,i.default)(y.prototype,"clickInputTrigger",[g],Object.getOwnPropertyDescriptor(y.prototype,"clickInputTrigger"),y.prototype),(0,i.default)(y.prototype,"updateInputValue",[b],Object.getOwnPropertyDescriptor(y.prototype,"updateInputValue"),y.prototype),(0,i.default)(y.prototype,"sendMessage",[f],Object.getOwnPropertyDescriptor(y.prototype,"sendMessage"),y.prototype),(0,i.default)(y.prototype,"fireCustomEditEvent",[_],Object.getOwnPropertyDescriptor(y.prototype,"fireCustomEditEvent"),y.prototype),(0,i.default)(y.prototype,"handleKeyUp",[E],Object.getOwnPropertyDescriptor(y.prototype,"handleKeyUp"),y.prototype),y)
e.default=D
Ember._setComponentTemplate(A,D)})
define("nt-card/components/nt-card/action-row/share-cta",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","url-preview-detour/utils/url-preview-detour-manager","rich-text/utils/annotated-text","ember-m3-pdsc-model-builder"],function(e,t,n,i,r,a,s,o,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var c,d,p,u,m
const h=Ember.HTMLBars.template({id:"czDENGJG",block:'{"symbols":["openShareboxModal","@beforeTrigger","@prefilledText","&default"],"statements":[[5,"sharing-entry@share-button",[],[["@beforeTrigger","@initialDetourManager","@prefilledText","@shareOrigin"],[[23,2,[]],[23,0,["initialDetourManager"]],[23,3,[]],"NOTIFICATION"]],{"statements":[[0,"\\n  "],[14,4,[[23,1,[]]]],[0,"\\n"]],"parameters":[1]}],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card/action-row/share-cta.hbs"}})
let g=(c=Ember.inject.service("i18n"),d=Ember.inject.service("store"),p=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"i18n",u,this);(0,t.default)(this,"store",m,this)}get initialDetourManager(){if(!this.args.urlToPreview)return null
const e=encodeURIComponent(this.args.urlToPreview),t=this.store.queryURL(`/voyager/api/contentcreation/urlPreview/${e}`,{cacheKey:e}),n=new s.default(t,this.i18n)
n.getShareText=(()=>(0,l.buildModel)("com.linkedin.voyager.feed.shared.AnnotatedText",{values:(0,o.generateAnnotatedText)(this.args.prefilledText,[])}))
return n}},u=(0,i.default)(p.prototype,"i18n",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=(0,i.default)(p.prototype,"store",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p)
e.default=g
Ember._setComponentTemplate(h,g)})
define("nt-card/components/nt-card/confirmation",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","nt-card/utils/constants"],function(e,t,n,i,r,a,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var o,l,c
const d=Ember.HTMLBars.template({id:"lKQFLOaH",block:'{"symbols":["inlineFeedbackType","confirmationActionInfo","openShareboxModal","@handleConfirmationClick","@cta","@handleAfterMessageSent","&attrs"],"statements":[[7,"div",false],[12,"aria-live","polite"],[12,"class","display-flex align-items-center"],[13,7],[8],[0,"\\n"],[4,"if",[[23,0,["isMuteConfirmation"]]],null,{"statements":[[0,"    "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size","class"],["mute-icon","small","nt-confirmation--note mr1"]]],false],[0,"\\n"]],"parameters":[]},null],[4,"let",[[28,"global-helpers@or",[[28,"nt-card@get-inline-feedback-type",[[23,5,["confirmationInlineFeedbackType"]]],null],"success"],null]],null,{"statements":[[0,"    "],[5,"artdeco-inline-feedback@artdeco-inline-feedback",[],[["@isIconHidden","@linkText","@message","@onClick","@type"],[[23,0,["isMuteConfirmation"]],[23,0,["confirmationLinkText"]],[23,5,["displayText","text"]],[23,0,["handleConfirmationClick"]],[28,"if",[[23,0,["isMuteConfirmation"]],"note",[23,1,[]]],null]]]],[0,"\\n\\n"],[4,"if",[[23,0,["isCustomConfirmationAction"]]],null,{"statements":[[4,"with",[[28,"nt-card@get-cta-info",[[23,5,["confirmationAction"]]],null]],null,{"statements":[[4,"if",[[23,2,["isMessage"]]],null,{"statements":[[0,"          "],[5,"message-button@message-button",[[3,"on",["click",[28,"fn",[[23,4,[]],[23,2,["controlName"]]],null]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,2,["controlName"]]]]],[["@afterSend","@buttonClasses","@groupConversationName","@isRecipientNotRequired","@message","@msgAdapterOptions","@recipientId","@recipientIds"],[[28,"fn",[[23,6,[]],[23,5,["confirmationAction"]],[23,2,["controlName"]],"MESSAGE"],null],[29,["nt-confirmation__action nt-confirmation--",[23,1,[]]," t-14 t-bold ml1"]],[23,2,["groupConversationName"]],[23,2,["isRecipientNotRequired"]],[23,2,["prefilledMessage"]],[23,2,["msgAdapterOptions"]],[23,2,["recipientId"]],[23,2,["recipientIds"]]]],{"statements":[[0,"\\n            "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,5,["confirmationAction","displayText"]]]]],[0,"\\n          "]],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,2,["isShare"]]],null,{"statements":[[0,"          "],[5,"nt-card@nt-card/action-row/share-cta",[],[["@beforeTrigger","@prefilledText","@urlToPreview"],[[28,"fn",[[23,4,[]],[23,2,["controlName"]]],null],[23,2,["prefilledText"]],[23,2,["urlToPreview"]]]],{"statements":[[0,"\\n            "],[7,"button",false],[12,"class",[29,["nt-confirmation__action nt-confirmation--",[23,1,[]]," t-14 t-bold ml1"]]],[12,"type","button"],[3,"on",["click",[23,3,[]]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,2,["controlName"]]]],[8],[0,"\\n              "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,5,["confirmationAction","displayText"]]]]],[0,"\\n            "],[9],[0,"\\n          "]],"parameters":[3]}],[0,"\\n        "]],"parameters":[]},null]],"parameters":[]}]],"parameters":[2]},null]],"parameters":[]},null]],"parameters":[1]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card/confirmation.hbs"}}),p=/\/messaging\/compose/,u=/^\/share/
let m=(o=Ember.inject.service("tracking"),l=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"tracking",c,this)}get confirmationLinkText(){return this.isCustomConfirmationAction?null:Ember.get(this.args,"cta.confirmationAction.displayText.text")}get handleConfirmationClick(){return Ember.get(this.args,"cta.confirmationAction")&&!this.isCustomConfirmationAction?()=>{this.tracking.fireInteractionEvent(s.CONTROL_NAMES.DISPLAY_CTA_CLICK)
this.args.handleConfirmationClick()}:null}get isCustomConfirmationAction(){const e=Ember.get(this.args,"cta.confirmationAction.actionTarget")
return e&&(p.test(e)||u.test(e))}get isMuteConfirmation(){return Ember.get(this.args,"cta.type")!==s.CARD_ACTION_ENUMS.CONFIRMATION}},c=(0,i.default)(l.prototype,"tracking",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l)
e.default=m
Ember._setComponentTemplate(d,m)})
define("nt-card/components/nt-card/settings-dropdown",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","nt-card/utils/tracking-utils"],function(e,t,n,i,r,a,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var o,l,c,d,p,u,m,h,g,b,f
const _=Ember.HTMLBars.template({id:"jHDpaiWX",block:'{"symbols":["dropdown","opt","controlName","openOptInModal","card","@handleSettingClick","@getNotificationsFeedbackInfo","@notificationTrackingObject","@markCardAsRead","@tooltipText","&attrs","@settingOptions"],"statements":[[7,"div",false],[13,11],[3,"did-insert",[[23,0,["setDropdownTrigger"]]]],[8],[0,"\\n  "],[5,"artdeco-dropdown@artdeco-dropdown",[],[["@isOpen","@onVisibilityChange","@placement","@justification","@useNewFocusModel"],[[23,0,["isDropdownOpen"]],[28,"ember-simple-set-helper@set",[[23,0,[]],"isDropdownOpen"],null],"bottom","right",true]],{"statements":[[0,"\\n"],[4,"if",[[23,10,[]]],null,{"statements":[[0,"      "],[5,"artdeco-hoverables@artdeco-hoverable-trigger",[],[["@on","@placement"],["init","top"]],{"statements":[[0,"\\n        "],[7,"div",true],[11,"aria-describedby",[23,5,["ariaId"]]],[8],[0,"\\n          "],[6,[23,1,["dropdown-trigger"]],[[12,"aria-label",[28,"t",["i18n_notification_options","nt-card/components/nt-card/settings-dropdown"],null]],[3,"ember-cli-pemberly-tracking@track-interaction",["cta_settings_edit"],[["onInteract"],[[28,"fn",[[23,0,["fireMeCustomTracking"]],"TRIGGER"],null]]]]],[["@class","@onClick"],["artdeco-button artdeco-button--muted artdeco-button--tertiary artdeco-button--circle",[23,9,[]]]],{"statements":[[0,"\\n            "],[1,[28,"artdeco-icons-web@li-icon",null,[["class","type","size","aria-hidden"],["nt-card-settings-dropdown__trigger-icon","ellipsis-horizontal-icon","large",true]]],false],[0,"\\n          "]],"parameters":[]}],[0,"\\n        "],[9],[0,"\\n        "],[6,[23,5,["artdeco-hoverable-content"]],[],[["@contentClass","@onShow","@onHide"],["nt-card-settings-dropdown__tooltip",[23,0,["showSettingsDropDownTooltip"]],[23,0,["hideSettingsDropDownTooltip"]]]],{"statements":[[0,"\\n          "],[1,[23,10,["text"]],false],[0,"\\n        "]],"parameters":[]}],[0,"\\n      "]],"parameters":[5]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[6,[23,1,["dropdown-trigger"]],[[12,"aria-label",[28,"t",["i18n_notification_options","nt-card/components/nt-card/settings-dropdown"],null]],[3,"ember-cli-pemberly-tracking@track-interaction",["cta_settings_edit"],[["onInteract"],[[28,"fn",[[23,0,["fireMeCustomTracking"]],"TRIGGER"],null]]]]],[["@class","@onClick"],["artdeco-button artdeco-button--muted artdeco-button--tertiary artdeco-button--circle",[23,9,[]]]],{"statements":[[0,"\\n        "],[1,[28,"artdeco-icons-web@li-icon",null,[["class","type","size","aria-hidden"],["nt-card-settings-dropdown__trigger-icon","ellipsis-horizontal-icon","large",true]]],false],[0,"\\n      "]],"parameters":[]}],[0,"\\n"]],"parameters":[]}],[0,"\\n    "],[6,[23,1,["dropdown-content"]],[],[["@occlusionCulling","@class","@arrowDir"],[false,"nt-card-settings-dropdown__content","right"]],{"statements":[[0,"\\n"],[4,"each",[[23,12,[]]],null,{"statements":[[4,"if",[[28,"global-helpers@eq",[[23,2,["optionType"]],"OPT_IN"],null]],null,{"statements":[[0,"          "],[5,"nt-edgesetting@nt-edgesetting",[[12,"class","full-width p0"]],[["@edgeSettingUrn","@notification","@notificationTypeUrn"],[[23,2,["edgeSettingUrn"]],[23,8,[]],[23,2,["notificationTypeUrn"]]]],{"statements":[[0,"\\n            "],[5,"artdeco-dropdown@artdeco-dropdown-item",[[3,"ember-cli-pemberly-tracking@track-interaction",["opt_in"]]],[["@class","@itemSelected"],["pv1 ph4",[28,"fn",[[23,1,["invokeAndCloseNoRefocus"]],[28,"fn",[[23,4,[]],[23,0,["dropdownTrigger"]]],null]],null]]],{"statements":[[0,"\\n              "],[7,"button",true],[10,"class","display-flex align-items-center text-align-left full-width"],[10,"type","button"],[8],[0,"\\n                "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","class","size"],[[28,"nt-card@get-settings-dropdown-icon",[[23,2,["optionType"]]],null],"nt-card-settings-dropdown__icon mr3 display-flex","medium"]]],false],[0,"\\n                "],[7,"div",true],[8],[0,"\\n                  "],[7,"p",true],[10,"class","t-14 t-bold t-black--light"],[8],[0,"\\n                    "],[1,[28,"global-helpers@attributed-text-html",[[23,2,["title"]]],null],false],[0,"\\n                  "],[9],[0,"\\n                  "],[7,"p",true],[10,"class","t-12 t-black--light t-normal"],[8],[0,"\\n                    "],[1,[28,"global-helpers@attributed-text-html",[[23,2,["description"]]],null],false],[0,"\\n                  "],[9],[0,"\\n                "],[9],[0,"\\n              "],[9],[0,"\\n            "]],"parameters":[]}],[0,"\\n          "]],"parameters":[4]}],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[28,"global-helpers@eq",[[23,2,["optionType"]],"SEND_FEEDBACK"],null]],null,{"statements":[[0,"          "],[5,"artdeco-dropdown@artdeco-dropdown-item",[[3,"ember-cli-pemberly-tracking@track-interaction",["send_feedback"]]],[["@class","@itemSelected"],["pv2 ph4 full-width",[28,"fn",[[23,1,["invokeAndClose"]],[28,"fn",[[23,7,[]],[23,2,["notificationTypeUrn"]]],null]],null]]],{"statements":[[0,"\\n              "],[7,"button",true],[10,"class","display-flex align-items-center text-align-left full-width"],[10,"type","button"],[8],[0,"\\n                "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","class","size"],[[28,"nt-card@get-settings-dropdown-icon",[[23,2,["optionType"]]],null],"nt-card-settings-dropdown__icon mr3 display-flex","medium"]]],false],[0,"\\n                "],[7,"div",true],[8],[0,"\\n                  "],[7,"p",true],[10,"class","t-14 t-bold t-black--light"],[8],[0,"\\n                    "],[1,[28,"global-helpers@attributed-text-html",[[23,2,["title"]]],null],false],[0,"\\n                  "],[9],[0,"\\n                  "],[7,"p",true],[10,"class","t-12 t-black--light t-normal"],[8],[0,"\\n                    "],[1,[28,"global-helpers@attributed-text-html",[[23,2,["description"]]],null],false],[0,"\\n                  "],[9],[0,"\\n                "],[9],[0,"\\n              "],[9],[0,"\\n            "]],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[4,"let",[[28,"nt-card@get-settings-control-name",[[23,2,["optionType"]]],null]],null,{"statements":[[0,"            "],[5,"artdeco-dropdown@artdeco-dropdown-item",[[3,"ember-cli-pemberly-tracking@track-interaction",[[23,3,[]]],[["onInteract"],[[28,"fn",[[23,0,["fireMeCustomTracking"]],[23,2,["optionType"]]],null]]]]],[["@class","@itemSelected"],["pv2 ph4 full-width",[28,"fn",[[23,1,["invokeAndClose"]],[28,"fn",[[23,6,[]],[23,2,[]]],null]],null]]],{"statements":[[0,"\\n              "],[7,"button",true],[10,"class","display-flex align-items-center text-align-left full-width"],[10,"type","button"],[8],[0,"\\n                "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","class","size"],[[28,"nt-card@get-settings-dropdown-icon",[[23,2,["optionType"]]],null],"nt-card-settings-dropdown__icon mr3 display-flex","medium"]]],false],[0,"\\n                "],[7,"div",true],[8],[0,"\\n                  "],[7,"p",true],[10,"class","t-14 t-bold t-black--light"],[8],[0,"\\n                    "],[1,[28,"global-helpers@attributed-text-html",[[23,2,["title"]]],null],false],[0,"\\n                  "],[9],[0,"\\n                  "],[7,"p",true],[10,"class","t-12 t-black--light t-normal"],[8],[0,"\\n                    "],[1,[28,"global-helpers@attributed-text-html",[[23,2,["description"]]],null],false],[0,"\\n                  "],[9],[0,"\\n                "],[9],[0,"\\n              "],[9],[0,"\\n            "]],"parameters":[]}],[0,"\\n"]],"parameters":[3]},null],[0,"        "]],"parameters":[]}]],"parameters":[]}]],"parameters":[2]},null],[0,"    "]],"parameters":[]}],[0,"\\n  "]],"parameters":[1]}],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card/settings-dropdown.hbs"}}),E={DELETE:"DELETE",LEAVE_GROUP:"LEAVE_GROUP",MUTE:"MUTE_CONTENT",TURN_OFF:"TURN_OFF",TRIGGER:"OPEN_SETTING",UNFOLLOW:"UNFOLLOW",UNMUTE:"UNMUTE_CONTENT"}
let y=(o=Ember.inject.service("lego@tracking"),l=Ember._tracked,c=Ember._tracked,d=Ember._action,p=Ember._action,u=Ember._action,m=Ember._action,h=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"legoTracking",g,this);(0,t.default)(this,"isDropdownOpen",b,this);(0,t.default)(this,"dropdownTrigger",f,this)}setDropdownTrigger(e){this.dropdownTrigger=e.querySelector(".artdeco-dropdown__trigger")}showSettingsDropDownTooltip(){this.legoTracking.sendLegoImpression(this.args.tooltipTrackingId,this.legoTracking.LEGO_IMPRESSION_VISIBILITY_SHOW)}hideSettingsDropDownTooltip(){this.legoTracking.sendLegoAction(this.args.tooltipTrackingId,this.legoTracking.LEGO_ACTION_DISMISS,1)}fireMeCustomTracking(e,t){let{controlUrn:n}=t
return(0,s.buildMeCustomTrackingInfo)(this.args.notificationTrackingObject,n,E[e])}},g=(0,i.default)(h.prototype,"legoTracking",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=(0,i.default)(h.prototype,"isDropdownOpen",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),f=(0,i.default)(h.prototype,"dropdownTrigger",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),(0,i.default)(h.prototype,"setDropdownTrigger",[d],Object.getOwnPropertyDescriptor(h.prototype,"setDropdownTrigger"),h.prototype),(0,i.default)(h.prototype,"showSettingsDropDownTooltip",[p],Object.getOwnPropertyDescriptor(h.prototype,"showSettingsDropDownTooltip"),h.prototype),(0,i.default)(h.prototype,"hideSettingsDropDownTooltip",[u],Object.getOwnPropertyDescriptor(h.prototype,"hideSettingsDropDownTooltip"),h.prototype),(0,i.default)(h.prototype,"fireMeCustomTracking",[m],Object.getOwnPropertyDescriptor(h.prototype,"fireMeCustomTracking"),h.prototype),h)
e.default=y
Ember._setComponentTemplate(_,y)})
define("nt-card/components/nt-card/social-counts",["exports","@glimmer/component"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const n=Ember.HTMLBars.template({id:"dKkBASjo",block:'{"symbols":["numLikesOrReactions","@socialActivityCounts","&attrs"],"statements":[[7,"section",false],[12,"class","nt-social-counts t-12 t-black--light t-normal mt2"],[13,3],[8],[0,"\\n"],[4,"let",[[28,"global-helpers@or",[[23,0,["numReactions"]],[23,2,["numLikes"]]],null]],null,{"statements":[[4,"if",[[23,1,[]]],null,{"statements":[[0,"      "],[7,"span",true],[10,"class","nt-social-counts__count"],[8],[0,"\\n        "],[1,[28,"t",["reaction_stat","nt-card/components/nt-card/social-counts"],[["reactionCount"],[[23,1,[]]]]],false],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[23,2,["numComments"]]],null,{"statements":[[0,"      "],[7,"span",true],[10,"class","nt-social-counts__count"],[8],[0,"\\n        "],[1,[28,"t",["comment_stat","nt-card/components/nt-card/social-counts"],[["commentCount"],[[23,2,["numComments"]]]]],false],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null],[9]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card/social-counts.hbs"}})
class i extends t.default{get numReactions(){const e=Ember.get(this.args,"socialActivityCounts.reactionTypeCounts")||[]
return Ember.isEmpty(e)?0:e.reduce((e,t)=>e+Ember.get(t,"count"),0)}}e.default=i
Ember._setComponentTemplate(n,i)})
define("nt-card/components/nt-card/tertiary",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const t=Ember.HTMLBars.template({id:"Cv7te/HZ",block:'{"symbols":["@tertiaryImage","@tertiaryText","@tertiaryTarget","&attrs"],"statements":[[4,"if",[[23,2,[]]],null,{"statements":[[0,"  "],[7,"div",false],[13,4],[8],[0,"\\n"],[4,"if",[[23,3,[]]],null,{"statements":[[0,"      "],[7,"a",false],[12,"class","nt-card-tertiary__link display-flex align-items-center t-12 t-black--light t-normal"],[12,"href",[23,3,["actionTarget"]]],[3,"ember-cli-pemberly-tracking@track-interaction",["tertiary"]],[8],[0,"\\n"],[4,"if",[[23,1,[]]],null,{"statements":[[0,"          "],[5,"image-view-model@image-view-model",[[12,"class","mr1"]],[["@images","@imgHeight","@imgWidth"],[[23,1,[]],16,16]]],[0,"\\n"]],"parameters":[]},null],[0,"        "],[7,"span",true],[8],[0,"\\n          "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,2,[]]]]],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[7,"div",true],[10,"class","display-flex align-items-center t-12 t-black--light t-normal"],[8],[0,"\\n"],[4,"if",[[23,1,[]]],null,{"statements":[[0,"          "],[5,"image-view-model@image-view-model",[[12,"class","mr1"]],[["@images","@imgHeight","@imgWidth"],[[23,1,[]],16,16]]],[0,"\\n"]],"parameters":[]},null],[0,"        "],[7,"span",true],[8],[0,"\\n          "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,2,[]]]]],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]}],[0,"  "],[9],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-card/tertiary.hbs"}})
var n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})
define("nt-card/components/nt-segment-list-container",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","ember-app-scheduler","nt-card/utils/constants"],function(e,t,n,i,r,a,s,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var l,c,d,p,u,m,h,g,b,f,_,E,y
const T=Ember.HTMLBars.template({id:"6VrafCCT",block:'{"symbols":["&default"],"statements":[[7,"div",false],[3,"did-insert",[[23,0,["listenBadgeCount"]]]],[8],[0,"\\n  "],[14,1,[[28,"hash",null,[["handleNewPillClick","handleSegmentScroll","afterSettingClick"],[[23,0,["handleNewPillClick"]],[23,0,["handleSegmentScroll"]],[23,0,["afterSettingClick"]]]]],[28,"hash",null,[["isRefreshing","getSegmentOffset","shouldShowNewNtPill"],[[23,0,["isRefreshing"]],[23,0,["getSegmentOffset"]],[23,0,["shouldShowNewNtPill"]]]]]]],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-segment-list-container.hbs"}}),{TURN_OFF:v,UNFOLLOW:C,LEAVE_GROUP:O,DELETE:S}=o.CARD_SETTING_OPTIONS
let w=(l=Ember.inject.service("global-services@badge"),c=Ember.inject.service("lix"),d=Ember._tracked,p=Ember._tracked,u=Ember._action,m=Ember._action,h=Ember._action,g=Ember._action,b=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"badge",f,this);(0,t.default)(this,"lix",_,this);(0,t.default)(this,"isRefreshing",E,this);(0,t.default)(this,"shouldShowNewNtPill",y,this)
this.getSegmentOffset=this._getSegmentOffset.bind(this)}willDestroy(){super.willDestroy.apply(this,arguments)
this.badge.off("badgeCountChanged",this,this._handleNewBadgeCount)}listenBadgeCount(){(0,s.whenRouteIdle)().then(()=>{this.badge.on("badgeCountChanged",this,this._handleNewBadgeCount)})}handleNewPillClick(){this.shouldShowNewNtPill=!1
this.isRefreshing=!0
return this._resetFirstPage()}handleSegmentScroll(){const{done:e,value:t}=this.args.segmentIterator.next()
return!e&&t.then(()=>!e)}afterSettingClick(e,t,n){if(!this.isDestroying)if(n===v||n===C||n===O){this.isRefreshing=!0
this._resetFirstPage()}else n===S&&(t?this.args.segmentIterator.undoDeleteCardFromSegments(e):this.args.segmentIterator.deleteCardFromSegments(e))}_getSegmentOffset(e){const{segments:t}=this.args.segmentIterator
let n=0
for(let i=0;i<t.length&&i<e;i++)n+=Ember.get(t.objectAt(i),"cards.length")
return n}_handleNewBadgeCount(e){if(!e)return
this.badge.getBadgeCount("notifications")>0&&!this.isRefreshing&&(this.shouldShowNewNtPill=!0)}_resetFirstPage(){this.args.segmentIterator.resetFirstPage().then(e=>{if(!this.isDestroying){this.badge.markAllItemsAsSeen("notifications",Date.now(),!0)
return this.args.segmentIterator.next()}return e}).finally(()=>{this.isDestroying||(this.isRefreshing=!1)})}},f=(0,i.default)(b.prototype,"badge",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=(0,i.default)(b.prototype,"lix",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=(0,i.default)(b.prototype,"isRefreshing",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),y=(0,i.default)(b.prototype,"shouldShowNewNtPill",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,i.default)(b.prototype,"listenBadgeCount",[u],Object.getOwnPropertyDescriptor(b.prototype,"listenBadgeCount"),b.prototype),(0,i.default)(b.prototype,"handleNewPillClick",[m],Object.getOwnPropertyDescriptor(b.prototype,"handleNewPillClick"),b.prototype),(0,i.default)(b.prototype,"handleSegmentScroll",[h],Object.getOwnPropertyDescriptor(b.prototype,"handleSegmentScroll"),b.prototype),(0,i.default)(b.prototype,"afterSettingClick",[g],Object.getOwnPropertyDescriptor(b.prototype,"afterSettingClick"),b.prototype),b)
e.default=w
Ember._setComponentTemplate(T,w)})
define("nt-card/components/nt-segment-list/empty-segment-card",["exports","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@glimmer/component","nt-card/utils/tracking-utils"],function(e,t,n,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var r,a,s,o
const l=Ember.HTMLBars.template({id:"T78s5Ug8",block:'{"symbols":["&attrs","@card"],"statements":[[7,"article",false],[12,"class","nt-segment__empty-state"],[13,1],[3,"ember-cli-pemberly-tracking@track-impression",[[23,0,["fireImpressionEvent"]]],[["routeName","currentRoute"],[[28,"get",[[28,"-get-dynamic-var",["outletState"],null],"render.name"],null],[28,"get",[[28,"-get-dynamic-var",["outletState"],null],"render"],null]]]],[8],[0,"\\n  "],[7,"div",true],[10,"class","nt-segment__empty-state-illustration"],[8],[9],[0,"\\n  "],[7,"div",true],[10,"class","ml4"],[8],[0,"\\n    "],[7,"p",true],[10,"class","t-16 t-black t-bold"],[8],[0,"\\n      "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,2,["headline"]]]]],[0,"\\n    "],[9],[0,"\\n    "],[5,"app-aware-link@app-aware-link",[[12,"class","t-14 t-normal link-without-hover-visited"],[3,"ember-cli-pemberly-tracking@track-interaction",["empty_state_redirect"],[["onInteract"],[[23,0,["fireMeCustomTracking"]]]]]],[["@href"],[[23,2,["cardAction","actionTarget"]]]],{"statements":[[0,"\\n      "],[5,"text-view-model@text-view-model-v2",[],[["@tvm"],[[23,2,["cardAction","displayText"]]]]],[0,"\\n    "]],"parameters":[]}],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"nt-card/components/nt-segment-list/empty-segment-card.hbs"}})
let c=(r=Ember._action,a=Ember._action,s=Ember._action,o=class extends n.default{handleCardClick(){this.args.actionTargetHandler.handleCardActionClick(this.args.card,Ember.get(this.args,"card.cardAction"))}fireImpressionEvent(e){return(0,i.buildImpressionTrackingEvent)(this.args.card,1,e)}fireMeCustomTracking(e){let{controlUrn:t}=e
return(0,i.buildMeCustomTrackingInfo)({objectUrn:Ember.get(this.args,"card.objectUrn"),trackingId:Ember.get(this.args,"card.trackingId")},t,"VIEW")}},(0,t.default)(o.prototype,"handleCardClick",[r],Object.getOwnPropertyDescriptor(o.prototype,"handleCardClick"),o.prototype),(0,t.default)(o.prototype,"fireImpressionEvent",[a],Object.getOwnPropertyDescriptor(o.prototype,"fireImpressionEvent"),o.prototype),(0,t.default)(o.prototype,"fireMeCustomTracking",[s],Object.getOwnPropertyDescriptor(o.prototype,"fireMeCustomTracking"),o.prototype),o)
e.default=c
Ember._setComponentTemplate(l,c)})
define("nt-card/helpers/get-card-content-model",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getCardContentModel=l
e.default=void 0
const t="nt-card-content__body-text--entity",n="nt-card-content__body-text--image",i="contentPrimaryText",r="contentSecondaryText",a="NONE"
class s{constructor(e,t,n){const{entitySize:i=4,largeImgWidth:r=114,smallImgWidth:a=102}=n
this.card=e
this.contentType=t
this.entitySize=i
this.largeImgWidth=r
this.smallImgWidth=a
this.body={classes:0===t.indexOf("SUPPORTING_")?"nt-card-content__body--secondary":"",textClasses:""}
this.badge=null
this.main=null
this.header=null
this.footer=null
this.ref=null
this.media=null}setText(e,t,n,i){const r=Ember.get(this.card,n).objectAt(i)
r&&(this[e]={classes:t||"",text:r})}setMedia(e,t){const n=-1!==this.contentType.indexOf("ENTITY"),i=0===this.contentType.indexOf("SUPPORTING"),r=-1!==this.contentType.indexOf("LIVE"),a=-1!==this.contentType.indexOf("VIDEO")&&!r,s=n?"":"nt-card-content__img"
this.body.textClasses=t
this.media={classes:s,imageViewModel:e,isVideo:a,showLiveIndicator:r,illustrationSize:r?"56":null,entitySize:n?this.entitySize:null,imgWidth:null,wrapperClasses:n?"pl2 pv2":""}
n||(this.media.imgWidth=i?this.smallImgWidth:this.largeImgWidth)}}function o(e,t,n,a){t.setMedia(Ember.get(e,"contentImages").objectAt(0),a)
t.setText("main",null,n?r:i,0)
t.setText("footer","mt1",n?r:i,1)}function l(e){let[l]=e,{entitySize:c,largeImgWidth:d,smallImgWidth:p}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const u=Ember.get(l,"contentType")||a
if(u===a||!Ember.get(l,i))return null
let m=new s(l,u,{entitySize:c,largeImgWidth:d,smallImgWidth:p})
switch(u){case"ENTITY":m.setMedia(Ember.get(l,"contentImages").objectAt(0),t)
m.setText("main",null,i,0)
m.setText("footer",null,i,1)
break
case"ENTITY_WITH_SUPPORTING_TEXT":m.setText("ref",null,r,0)
m.setMedia(Ember.get(l,"contentImages").objectAt(0),t)
m.setText("main",null,i,0)
m.setText("footer",null,i,1)
break
case"IMAGE":o(l,m,!1,n)
break
case"SUPPORTING_ENTITY":m.setText("ref",null,i,0)
m.setMedia(Ember.get(l,"contentImages").objectAt(0),t)
m.setText("main",null,r,0)
m.setText("footer",null,r,1)
break
case"SUPPORTING_IMAGE":m.setText("ref",null,i,0)
o(l,m,!0,n)
break
case"SUPPORTING_TEXT":m.setText("ref",null,i,0)
m.setText("main",null,r,0)
break
case"SUPPORTING_TEXT_WITH_HEADER":m.setText("ref",null,i,0)
m.setText("header",null,r,0)
m.setText("main",null,r,1)
break
case"SUPPORTING_VIDEO":case"SUPPORTING_LIVE_VIDEO":m.setText("ref",null,i,0)
o(l,m,!0,n)
break
case"TEXT":m.setText("main",null,i,0)
break
case"TEXT_WITH_BADGE_AND_FOOTER":m.badge=Ember.get(l,"contentImages").objectAt(0)
m.setText("main",null,i,0)
m.setText("footer","mt1",i,1)
break
case"TEXT_WITH_FOOTER":m.setText("main",null,i,0)
m.setText("footer","mt1",i,1)
break
case"TEXT_WITH_HEADER":m.setText("header",null,i,0)
m.setText("main",null,i,1)
break
case"VIDEO":case"LIVE_VIDEO":o(l,m,!1,n)
break
default:m=null}return m}var c=Ember.Helper.helper(l)
e.default=c})
define("nt-card/helpers/get-cta-info",["exports","global-utils/utils/url","nt-card/utils/constants","nt-card/helpers/get-message-cta-info","lazy-modal/utils/lazy-modal-helpers"],function(e,t,n,i,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getCtaInfo=f
e.default=void 0
const{CONFIRMATION:a,CONNECT:s,DISPLAY:o,FOLLOW:l,NOTIFICATION_ROUTE:c,SEND_FEEDBACK:d}=n.CARD_ACTION_ENUMS,{CONNECT_CTA_CLICK:p,DISPLAY_CTA_CLICK:u,FOLLOW_CTA_CLICK:m,NOTIFICATION_ROUTE_CTA_CLICK:h,SEND_FEEDBACK_CTA_CLICK:g}=n.CONTROL_NAMES,b=Object.freeze({[a]:u,[s]:p,[o]:u,[l]:m,[c]:h,[d]:g})
function f(e){const[n,s=0,l=1]=e,c=Ember.get(n,"actionTarget")||"",p=Ember.get(n,"type"),u={controlName:b[p],actionTarget:c,isConfirmation:p.indexOf("CONFIRMATION")>-1,isMessage:(p===o||p===a)&&c.startsWith("/messaging/compose"),isAppreciation:p===o&&c.startsWith("/appreciation/create/"),isShare:(p===o||p===a)&&c.startsWith("/share"),isLazyModal:(0,r.isSupportedLazyModalPath)(c),isSendFeedback:p===d,isOneClickMessage:p===o&&c.startsWith("/messaging/oneclick"),buttonType:l>1&&0===s?"primary":"secondary",buttonColor:l>1&&s>0?"muted":"default"}
if(u.isMessage)return(0,i.getMessageCtaInfo)(e)
if(u.isAppreciation){const e=(0,t.parseQueryString)(c)
if(e){u.appreciationOrigin=Ember.get(e,"origin")
u.appreciationContextUrn=Ember.get(e,"contextUrn")
u.recipientId=Ember.get(e,"recipients")}}if(u.isShare){const e=(0,t.parseQueryString)(c)
if(e){const t=Ember.get(e,"url")
if(t){u.urlToPreview=t
u.prefilledText=Ember.get(e,"text")}}}if(u.isOneClickMessage){const e=(0,t.parseQueryString)(c)
if(e){u.propUrn=Ember.get(e,"propUrn")
u.recipientUrn=Ember.get(e,"recipientUrn")
u.prefilledText=Ember.get(e,"text")
u.hintText=Ember.get(e,"hint")}}return u}var _=Ember.Helper.helper(f)
e.default=_})
define("nt-card/helpers/get-inline-feedback-type",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getInlineFeedbackType=n
e.default=void 0
const t={ERROR:"error",NOTICE:"note",SUCCESS:"success",WARNING:"yield"}
function n(e){let[n]=e
return t[n]}var i=Ember.Helper.helper(n)
e.default=i})
define("nt-card/helpers/get-message-cta-info",["exports","global-utils/utils/url","nt-card/utils/constants"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getMessageCtaInfo=o
e.default=void 0
const i=/\/messaging\/compose\/(.+)$/,r=/\/messaging\/compose\/\?/,a=/\/messaging\/compose\/([^/]+)\/body\/([^?]+)/,s=(Object.freeze(["Colleagues","Birthday"]),"/birthday-collection/")
function o(e){let[o,l=0,c=1]=e
const d=Ember.get(o,"actionTarget")||"",p={controlName:n.CONTROL_NAMES.DISPLAY_CTA_CLICK,isMessage:!0,prefilledMessage:null,recipientId:null,msgAdapterOptions:void 0,buttonType:c>1&&0===l?"primary":"secondary",buttonColor:c>1&&l>0?"muted":"default"},u=(0,t.parseQueryString)(d),m=Ember.get(o,"afterActionTarget"),h=Ember.get(u,"contextType"),g=Ember.get(u,"recipients")
g&&g.indexOf(",")>=0&&(p.recipientIds=g.split(","))
m&&m.includes(s)&&(p.isBirthday=!0)
p.groupConversationName=Ember.get(u,"groupName")
if(h){const e="Colleagues"===h,t=e?"COLLEAGUES_TEAM":"PROP",n=e?"colleaguesTeamUrn":"prop"
p.prefilledMessage=Ember.get(u,"body")
p.msgAdapterOptions={extensionContentType:t,[n]:Ember.get(u,"contextUrn")}}else if(a.test(d)){const e=a.exec(d)
p.prefilledMessage=decodeURIComponent(e[2])
p.recipientId=decodeURIComponent(e[1])}else if(!r.test(d)||Ember.get(u,"recipient")||Ember.get(u,"connId")){const e=i.exec(d)
p.recipientId=e?decodeURIComponent(e[1]):void 0}else{p.prefilledMessage=Ember.get(u,"body")
p.isRecipientNotRequired=!0}const b=Ember.get(u,"propUrn")
b&&(p.msgAdapterOptions={extensionContentType:"PROP",prop:b})
return p}var l=Ember.Helper.helper(o)
e.default=l})
define("nt-card/helpers/get-settings-control-name",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getSettingsControlName=n
e.default=void 0
const t={LEAVE_GROUP:"leave_group",TURN_OFF:"turn_off",MUTE:"mute",UNMUTE:"unmute",UNFOLLOW:"unfollow",DELETE:"delete",FAIL_SAFE:"settings"}
function n(e){let[n]=e
return t[n]||t.FAIL_SAFE}var i=Ember.Helper.helper(n)
e.default=i})
define("nt-card/helpers/get-settings-dropdown-icon",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getSettingsIcon=n
e.default=void 0
const t={LEAVE_GROUP:"leave-icon",TURN_OFF:"bell-slash-icon",MUTE:"mute-icon",UNMUTE:"mute-icon",UNFOLLOW:"clear-icon",DELETE:"trash-icon",OPT_IN:"bell-icon",SEND_FEEDBACK:"compose-icon",FAIL_SAFE:"gear-icon"}
function n(e){let[n]=e
return t[n]||t.FAIL_SAFE}var i=Ember.Helper.helper(n)
e.default=i})
define("nt-card/helpers/has-card-content",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.hasCardContent=n
e.default=void 0
const t={ENTITY:!0,ENTITY_WITH_SUPPORTING_TEXT:!0,IMAGE:!0,SUPPORTING_ENTITY:!0,SUPPORTING_IMAGE:!0,SUPPORTING_TEXT:!0,SUPPORTING_TEXT_WITH_HEADER:!0,SUPPORTING_VIDEO:!0,SUPPORTING_LIVE_VIDEO:!0,TEXT:!0,TEXT_WITH_ACTION:!0,TEXT_WITH_FOOTER:!0,TEXT_WITH_HEADER:!0,TEXT_WITH_BADGE_AND_FOOTER:!0,VIDEO:!0,LIVE_VIDEO:!0}
function n(e){let[n]=e
return n&&t[n]}var i=Ember.Helper.helper(n)
e.default=i})
define("nt-card/helpers/is-entity-list-content",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.isEntityListContent=t
e.default=void 0
function t(e){let[t]=e
return t&&0===t.indexOf("ENTITY_LIST")}var n=Ember.Helper.helper(t)
e.default=n})
define("nt-card/utils/action-intent-registry",["exports","global-utils/utils/url","nt-card/utils/action-intent"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getRoutableParamsFromIntentCollection=r
e.getRoutableParams=function(e){return r(e,i)}
const i=Object.freeze([Object.freeze(new n.default("notifications-ca.share-analytics.index",/^\/p1-route\/content-analytics\?socialUpdateUrn=(.*activity:.+)/,[0])),Object.freeze(new n.default("notifications-ca.post-analytics.index",/^\/p1-route\/content-analytics\?socialUpdateUrn=(.+)/,[0])),Object.freeze(new n.default("p1.web.view",/^\/p1-route\/web-view/)),Object.freeze(new n.default("learning.app",/^\/learning-app/)),Object.freeze(new n.default("titan-profile-pending-endorsements",/^\/p1-route\/pending-endorsements/)),Object.freeze(new n.default("notifications-ca.post-analytics.reshares",/^\/(?:in|profile)\/(?:.+)\/recent-activity\/posts\/ca\/post-analytics\/(.+)\/reshares/,[0])),Object.freeze(new n.default("payments.paymentaccounts.personal",/^\/payments\/paymentaccounts\/personal/)),Object.freeze(new n.default("profile-ge.category",/^\/profile\/guided\/([^/|?]+)/,[0])),Object.freeze(new n.default("search.results",/^\/p1-route\/search/))])
function r(e,n){const i=(0,t.isUrl)(e)?(0,t.getRoutablePathFromInternalUrl)(e):e,r=n.find(e=>e.matches(i))
return r?r.getRouteTransitionParams(i):null}})
define("nt-card/utils/action-intent",["exports","@babel/runtime/helpers/esm/toConsumableArray","global-utils/utils/url"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
e.default=class{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
this.routeName=e
this.pattern=t
this.modelIndexes=n}matches(e){return this.pattern.test(e)}getModels(e){const t=this.pattern.exec(e)
return this.modelIndexes.reduce((e,n)=>{const i=decodeURIComponent(t[n+1])
return i?e.concat(i):e},[])}getRouteTransitionParams(e){const i=e.includes("?")?(0,n.parseQueryString)(e):{}
return[this.routeName].concat((0,t.default)(this.getModels(e)),[{queryParams:i}])}}})
define("nt-card/utils/action-target-handler",["exports","@babel/runtime/helpers/esm/toConsumableArray","ember-m3-pdsc-model-builder","global-utils/utils/is-browser","global-utils/utils/urn-id-helpers","global-utils/utils/url","global-utils/utils/api-compat","nt-card/utils/action-intent-registry","nt-card/utils/constants","lazy-modal/utils/lazy-modal-helpers"],function(e,t,n,i,r,a,s,o,l,c){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const d=/\/messaging\/compose/,p=/\/messaging\/oneclick/,u=/\/appreciation\/create/,m=/^\/share/,h=/^\/invitation_op/,g="/voyager/api/"
function b(e){const t=(function(e){const t=Ember.get(e,"actionTarget")||""
return(0,a.parseQueryString)(t).propUrn})(e)
return{addActionType:(function(e){const t=Ember.get(e,"actionTarget")
return d.test(t)||p.test(t)?"MESSAGE":null})(e),itemUrn:t}}function f(e,t){const i=Ember.get(t,"confirmationText")
if(i){const r=(0,s.classNameOf)(t),a=(0,n.buildModel)(r,{displayText:i,type:"CONFIRMATION"})
Ember.set(e,"actions",[a])}return Ember.RSVP.resolve()}function _(e,t){if(!Ember.get(t,"reloadCard"))return Ember.RSVP.resolve(e)
e.rollbackAttributes()
const n=`/voyager/api/notifications/dash/cards/${Ember.get(e,"entityUrn")}`
return e.reload({adapterOptions:{url:n}})}e.default=class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{invitationPlatform:n,lix:i,router:r,store:a,windowService:s}=e,{routeTransformMap:o={}}=t
this.invitationPlatform=n
this.lixService=i
this.router=r
this.store=a
this.windowService=s
this.routeTransformMap=o}handleExternalDisplayAction(e){i.default&&e&&(this.windowService.open(jSecure.sanitizeUrl(decodeURIComponent(e)),"_blank").opener=null)}handleAfterCardActionComplete(e,t){return f(e,t).then(()=>this._resolveAddAction(t)).then(()=>_(e,t))}handleCardActionClick(e,t){const n=t||Ember.get(e,"cardAction"),i=Ember.get(n,"type")
let r
switch(i){case l.CARD_ACTION_ENUMS.CONNECT:return this.handleInviteToConnect(e,n)
case l.CARD_ACTION_ENUMS.CONFIRMATION:case l.CARD_ACTION_ENUMS.DISPLAY:r=Ember.get(n,"actionTarget")||Ember.get(e,"cardAction.actionTarget")
if(d.test(r)||p.test(r))return!1
if(u.test(r)||m.test(r)||(0,c.isSupportedLazyModalPath)(r))break
return Ember.RSVP.resolve(this.handleDisplayCardAction(r))
case l.CARD_ACTION_ENUMS.FOLLOW:return this.handleFollowAction(e,n)
case l.CARD_ACTION_ENUMS.NOTIFICATION_ROUTE:r=Ember.get(n,"actionTarget")||Ember.get(e,"cardAction.actionTarget")
return!!h.test(r)&&this.handleInvitationOpAction(e,n,r)
default:Ember.Logger.error(`No action available for CTA of type ${i}`)}return Ember.RSVP.resolve(null)}handleDisplayWithoutIntent(e){return Ember.RSVP.resolve(this.router.transitionTo(e))}handleDisplayCardAction(e){const n=(0,o.getRoutableParams)(e)
if(!n)return this.handleDisplayWithoutIntent(e)
const i=n?n[0]:""
if(0===i.indexOf("p1.web.view")){const t=/\/p1-route\/web-view\?url=(.+)/.exec(e)[1]
return this.handleExternalDisplayAction(t)}if(0===i.indexOf("learning.app")){const t=/\/learning-app\?url=(.+)/.exec(e)[1]
return this.handleExternalDisplayAction(t)}if(0===i.indexOf("payments.paymentaccounts.personal")){const t=`${a.default.getDomainUrl()}${e}`
return this.handleExternalDisplayAction(t)}if(n){var r
this.routeTransformMap[i]&&(n[0]=this.routeTransformMap[i])
return(r=this.router).transitionTo.apply(r,(0,t.default)(n))}return Ember.Logger.error(`No route ActionIntent found for ${e}.`)}handleFollowAction(e,t){const n=t||Ember.get(e,"cardAction"),i=Ember.get(n,"actionTarget")
return this._handlePostAjaxAction(i,{patch:{$set:{following:!0}}}).then(()=>f(e,n)).then(()=>_(e,n)).then(()=>this._resolveRedirection(n))}handleInvitationOpAction(e,t,n){const i=(0,a.parseQueryString)(n),{action:r,invitationId:s,invitationType:o,sharedSecret:l}=i
return this.invitationPlatform.singleInvitationActionRequest(s,l,r,o).then(()=>f(e,t)).then(()=>this._resolveAddAction(t)).then(()=>_(e,t))}handleInviteToConnect(e,t){const n=(0,r.extractUrnParts)(Ember.get(t,"memberToConnectUrn"))[1]
return this.invitationPlatform.sendInvitationByProfileId(n).then(()=>f(e,t)).then(()=>this._resolveAddAction(t)).then(()=>_(e,t))}_resolveAddAction(e){const{addActionType:t,itemUrn:n}=b(e)
return t&&n?this.store.adapterFor("-ember-m3").ajax(l.CTA_ADD_ACTION,"POST",{data:JSON.stringify({actionType:t,item:n})}):Ember.RSVP.resolve()}_resolveRedirection(e){const t=Ember.get(e,"afterActionTarget")
return t?this.handleDisplayWithoutIntent(t):Ember.RSVP.resolve()}_handlePostAjaxAction(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;-1===n.indexOf(g)&&(n=`${g}${e}`)
return this.store.adapterFor("-ember-m3").ajax(n,"POST",{data:JSON.stringify(t)})}}})
define("nt-card/utils/constants",["exports","extended/config/environment","@linkedin/ember-pem/utils/degradation-tracking-metadata"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.fetchBirthdayLegoData=function(e){return e.queryURL(`/${t.default.namespace}/growth/pageContent/birthday_splash`)}
e.PEM_TRACKING_METADATA=e.SMART_ROUTING_LEGO_CONFIG=e.CARD_SETTING_OPTIONS=e.MIN_CARD_HEIGHT=e.PAGE_KEYS=e.NT_SETTINGS_ENDPOINT=e.CTA_REMOVE_ACTION=e.CTA_ADD_ACTION=e.CONTROL_NAMES=e.CARD_SETTINGS_VALUES=e.COUNTS=e.CARD_ACTION_ENUMS=e.ACTION_CATEGORIES=void 0
const i=Object.freeze({CONNECT_ACTION_CATEGORY:"CONNECT",DISPLAY_ACTION_CATEGORY:"VIEW",EDIT_ACTION_CATEGORY:"EDIT",FOLLOW_ACTION_CATEGORY:"FOLLOW",MESSAGE_ACTION_CATEGORY:"MESSAGE",NOTIFICATION_ROUTE_ACTION_CATEGORY:"NOTIFICATION_ROUTE",SEND_PREFILLED_MESSAGE_ACTION_CATEGORY:"SEND_PREFILLED_MESSAGE",UNDO_DELETE_ACTION_CATEGORY:"UNDO"})
e.ACTION_CATEGORIES=i
const r=Object.freeze({CONFIRMATION:"CONFIRMATION",CONNECT:"CONNECT",DISPLAY:"DISPLAY",FOLLOW:"FOLLOW",MUTED_CONFIRMATION:"MUTED_CONFIRMATION",NOTIFICATION_ROUTE:"NOTIFICATION_ROUTE",SEND_FEEDBACK:"SEND_FEEDBACK"})
e.CARD_ACTION_ENUMS=r
const a=Object.freeze({DEFAULT_PAGE_COUNT:10,PROJECT_ONE_CARD_COUNT:5})
e.COUNTS=a
const s=Object.freeze({ON:"ON",OFF:"OFF"})
e.CARD_SETTINGS_VALUES=s
const o=Object.freeze({AGGREGATED_CARD_CLICK:"aggregated_notification_card",AGGREGATED_MESSAGE_CTA:"aggregated_message_cta",AGGREGATED_ONE_CLICK_CARD_CLICK:"aggregated_oneclick_notification_card",AGGREGATED_ONE_CLICK_EDIT:"aggregated_oneclick_editfield",AGGREGATED_ONE_CLICK_PROFILE_IMAGE:"aggregated_oneclick_profile_image",AGGREGATED_ONE_CLICK_SEND:"aggregated_oneclick_sendfromnotif",AGGREGATED_PROFILE_IMAGE:"aggregated_profile_image",CARD_CLICK_CONTROL_NAME:"update",CARD_IMAGE_CLICK_CONTROL_NAME:"update_image",CONNECT_CTA_CLICK:"cta_connect",CONTENT_CLICK_CONTROL_NAME:"update_content",DISPLAY_CTA_CLICK:"cta_display",FOLLOW_CTA_CLICK:"cta_follow",NOTIFICATION_ROUTE_CTA_CLICK:"cta_notification_route",ONE_CLICK_EDIT:"oneclick_editfield",ONE_CLICK_SEND:"oneclick_sendfromnotif",SEND_FEEDBACK_CTA_CLICK:"cta_send_feedback"})
e.CONTROL_NAMES=o
e.CTA_ADD_ACTION="/voyager/api/identity/cards?action=addAction"
e.CTA_REMOVE_ACTION="/voyager/api/identity/cards?action=removeAction"
e.NT_SETTINGS_ENDPOINT="/voyager/api/identity/notificationSettings/"
const l=Object.freeze({AGGREGATE:"flagship3_notifications_aggregate_landing",AGGREGATE_LIST:"flagship3_notifications_aggregate_landing_list",FEED:"flagship3_notifications",FEED_LIST:"flagship3_notifications_updates"})
e.PAGE_KEYS=l
e.MIN_CARD_HEIGHT=90
const c=Object.freeze({LEAVE_GROUP:"LEAVE_GROUP",TURN_OFF:"TURN_OFF",MUTE:"MUTE",UNMUTE:"UNMUTE",UNFOLLOW:"UNFOLLOW",DELETE:"DELETE",SOFT_DELETE:"SOFT_DELETE"})
e.CARD_SETTING_OPTIONS=c
const d=Object.freeze({SLOT_ID:"smart_routing",GROUP_ID:"default",WIDGET_ID:"voyager_takeover_birthday_collection"})
e.SMART_ROUTING_LEGO_CONFIG=d
const p=Object.freeze({FETCH_NOTIFICATIONS_CARDS:new n.default("notifications-cards","failed-to-load-cards",{productName:"Voyager - Notifications"})})
e.PEM_TRACKING_METADATA=p})
define("nt-card/utils/nt-card-iterator",["exports","@babel/runtime/helpers/esm/toConsumableArray","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","nt-card/utils/page-count-calculator","nt-requests/requests/cards","nt-card/utils/constants"],function(e,t,n,i,r,a,s,o,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var c,d,p,u,m,h,g
const{DEFAULT_PAGE_COUNT:b}=l.COUNTS
function f(e){return{entityUrn:Ember.get(e,"entityUrn"),deleted:!0,read:!0,option:{optionType:"DELETE"},objectUrn:Ember.get(e,"objectUrn"),trackingId:Ember.get(e,"trackingId")}}let _=(c=Ember._tracked,d=Ember._tracked,p=Ember._tracked,u=class{constructor(e,t){let{store:r,windowService:a}=t;(0,n.default)(this,"cards",m,this);(0,n.default)(this,"emptyCard",h,this);(0,n.default)(this,"hasMoreCards",g,this);(0,i.default)(this,"_cardIdHash",{});(0,i.default)(this,"_countCalculator",void 0);(0,i.default)(this,"_deletedCardsHash",{});(0,i.default)(this,"_initialRequestedCardCount",null);(0,i.default)(this,"_nextStart",0);(0,i.default)(this,"_returnedCardCount",0);(0,i.default)(this,"_store",void 0)
this._initialize(e)
this._countCalculator=new s.default(b,l.MIN_CARD_HEIGHT,{windowService:a})
this._store=r}addCards(e){const t=e.filter(e=>{const t=Ember.get(e,"entityUrn")
return!this._cardIdHash[t]}).map(e=>{const t=Ember.get(e,"entityUrn")
this._cardIdHash[t]=!0
return this._deletedCardsHash[t]?f(e):e})
this.cards.pushObjects(t)
return t.length}deleteCard(e){const t=this.cards.indexOf(e)
t>=0&&this.cards.replace(t,1,[f(e)])
const n=Ember.get(e,"entityUrn")
this._deletedCardsHash[n]=e}undoDeleteCard(e){const t=Ember.get(e,"entityUrn"),n=this._deletedCardsHash[t]
if(n){const t=this.cards.indexOf(e)
t>=0&&this.cards.replace(t,1,[n])}this._deletedCardsHash[t]=null}next(){var e
const n=this._countCalculator.getItemCount()
this._initialRequestedCardCount=this._initialRequestedCardCount||n
const i={degradations:[l.PEM_TRACKING_METADATA.FETCH_NOTIFICATIONS_CARDS],degradedEntityIDsToRemove:[]}
return(e=this._store).queryURL.apply(e,(0,t.default)((0,o.buildCardsM3Request)({count:n,start:this._nextStart,adapterOptions:i}))).then(e=>{const t=Ember.get(e,"elements"),n=this.addCards(t)
this._returnedCardCount+=n
this._nextStart=Ember.get(e,"metadata.nextStart")
if(0===n)this.hasMoreCards=!1
else if(this._nextStart&&this._returnedCardCount<this._initialRequestedCardCount)return this.next()
this._initialRequestedCardCount=null
this._returnedCardCount=0
return e})}reset(){this.cards=[]
this.emptyCard=null
this.hasMoreCards=!0
this._cardIdHash={}
this._countCalculator.reset()
this._deletedCardsHash={}
this._initialRequestedCardCount=null
this._returnedCardCount=0}refresh(){var e
this.reset()
return(e=this._store).queryURL.apply(e,(0,t.default)((0,o.buildCardsM3Request)())).then(e=>this._initialize(e))}_initialize(e){this.addCards(Ember.get(e,"elements"))
this.emptyCard=Ember.get(e,"metadata.emptySectionCard")
this.emptyCard&&(this.hasMoreCards=!1)
this._nextStart=Ember.get(e,"metadata.nextStart")
return e}},m=(0,r.default)(u.prototype,"cards",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h=(0,r.default)(u.prototype,"emptyCard",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=(0,r.default)(u.prototype,"hasMoreCards",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),u)
e.default=_})
define("nt-card/utils/nt-segment-iterator",["exports","@babel/runtime/helpers/esm/toConsumableArray","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","nt-requests/requests/segments","nt-card/utils/page-count-calculator","nt-requests/requests/cards","nt-card/utils/constants"],function(e,t,n,i,r,a,s,o,l,c){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.initializeSegments=h
e.default=e.SegmentViewModel=void 0
var d,p,u
const{DEFAULT_PAGE_COUNT:m}=c.COUNTS
function h(e){return e.reduce((e,t)=>{const n=Ember.get(e,"lastObject")
n&&!Ember.isPresent(n.emptySectionCard)||e.pushObject(t)
return e},[])}function g(e){return{entityUrn:Ember.get(e,"entityUrn"),deleted:!0,read:!0,option:{optionType:"DELETE"},objectUrn:Ember.get(e,"objectUrn"),trackingId:Ember.get(e,"trackingId")}}class b{constructor(e){this.cards=[]
this.emptySectionCard=Ember.get(e,"cards.metadata.emptySectionCard")||null
this.headerText=Ember.get(e,"headerText")
this.numUnseen=Ember.get(e,"cards.metadata.numUnseen")||0
this.nextStart=0
this.type=Ember.get(e,"type")
this._cardIdHash=Object.create(null)
this._segmentRecord=e
this._deletedCardsHash=Object.create(null)}get hasMoreCardsToFetch(){return this.nextStart>=0}addCards(e){const t=e.filter(e=>{const t=Ember.get(e,"entityUrn")
return!this._cardIdHash[t]}).map(e=>{const t=Ember.get(e,"entityUrn")
return this._deletedCardsHash[t]?g(e):e})
t.forEach(e=>{const t=Ember.get(e,"entityUrn")
this._cardIdHash[t]=!0})
this.cards.pushObjects(t)}deleteCard(e){const t=this.cards.indexOf(e)
t>=0&&this.cards.replace(t,1,[g(e)])
const n=Ember.get(e,"entityUrn")
this._deletedCardsHash[n]=e}undoDeleteCard(e){const t=Ember.get(e,"entityUrn"),n=this._deletedCardsHash[t]
if(n){const t=this.cards.indexOf(e)
t>=0&&this.cards.replace(t,1,[n])}this._deletedCardsHash[t]=null}}e.SegmentViewModel=b
let f=(d=Ember._tracked,p=class{constructor(e,t){let{store:i,windowService:r}=t,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};(0,n.default)(this,"segments",u,this)
const s=Ember.get(e,"elements").map(e=>new b(e))
this.segments=h(s)
this.emptySectionCard=this.segments.reduce((e,t)=>e&&t.emptySectionCard,!0)
this._countCalculator=new o.default(m,c.MIN_CARD_HEIGHT,{windowService:r})
this._returnedCardCount=0
this._initialRequestedCardCount=null
this._remainingSegments=s.slice(this.segments.length).reverse()
this._store=i
this._onMoreCardsFetched=a}get _cardCount(){return this.segments.reduce((e,t)=>e+(Ember.get(t,"cards.length")||0),0)}get _currentSegment(){return Ember.get(this.segments,"lastObject")}deleteCardFromSegments(e){this.segments.forEach(t=>{var n
null===(n=t.deleteCard)||void 0===n||n.call(t,e)})}undoDeleteCardFromSegments(e){this.segments.forEach(t=>{var n
null===(n=t.undoDeleteCard)||void 0===n||n.call(t,e)})}next(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._countCalculator.getItemCount(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!1,i=null
const r=this._currentSegment
if(r&&this._currentSegment.hasMoreCardsToFetch){const n=this._cardCount
i=this._fetchMoreCards(r,e).then(i=>{const r=this._cardCount-n+t
return r<e?this.next(e,r).value:i})}else{if(!Ember.isEmpty(this._remainingSegments)){const n=this._remainingSegments.pop()
this.segments.pushObject(n)
return this.next(e,t)}n=!0}return{done:n,value:i}}reset(){this.segments=[]
this._countCalculator.reset()
this._remainingSegments=null}resetFirstPage(){var e
this.reset()
return(e=this._store).queryURL.apply(e,(0,t.default)((0,s.buildSegmentsM3Request)({reload:!0}))).then(e=>{const t=Ember.get(e,"elements").map(e=>new b(e))
this.segments=h(t)
this._remainingSegments=t.slice(this.segments.length).reverse()
return this.next().value})}_fetchMoreCards(){var e
let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._currentSegment,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._countCalculator.getItemCount()
this._initialRequestedCardCount=this._initialRequestedCardCount||i
const r={degradations:[c.PEM_TRACKING_METADATA.FETCH_NOTIFICATIONS_CARDS],degradedEntityIDsToRemove:[]}
return(e=this._store).queryURL.apply(e,(0,t.default)((0,l.buildCardsM3Request)({count:i,segment:n.type,start:n.nextStart,adapterOptions:r}))).then(e=>{const t=Ember.get(e,"metadata.nextStart"),i=Ember.get(e,"elements").toArray()
this._returnedCardCount+=i.length
n.addCards(i)
n.nextStart=t
this._onMoreCardsFetched(n,i)
if(t&&this._returnedCardCount<this._initialRequestedCardCount)return this._fetchMoreCards(n)
this._initialRequestedCardCount=null
this._returnedCardCount=null
return e})}},u=(0,r.default)(p.prototype,"segments",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p)
e.default=f})
define("nt-card/utils/nt-settings-handler",["exports","@babel/runtime/helpers/esm/toConsumableArray","nt-requests/requests/cards","groups-shared/utils/requests/membership-actions","nt-card/utils/constants"],function(e,t,n,i,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const{OFF:a}=r.CARD_SETTINGS_VALUES,{LEAVE_GROUP:s,TURN_OFF:o,MUTE:l,UNMUTE:c,UNFOLLOW:d,DELETE:p,SOFT_DELETE:u}=r.CARD_SETTING_OPTIONS,{MUTED_CONFIRMATION:m}=r.CARD_ACTION_ENUMS,h={UNMUTE:r.CTA_REMOVE_ACTION,MUTE:r.CTA_ADD_ACTION}
e.default=class{constructor(e,t,n,i,r){this.i18n=t
this.store=n
this.identityStore=i
this.persistentToastManager=r
this.authenticatedUser=e}setNewSettingValue(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
const i=Ember.get(t,"optionType")
switch(i){case s:return this._leaveGroup(t)
case o:return this._turnOffNotification(t)
case l:case c:return this._handleMuteNotification(e,i)
case p:return this._handleDeletedNotification(e,n)
case d:return this._handleUnfollow(t)
default:Ember.Logger.error(`No action handler for setting type ${i}`)
return Ember.RSVP.reject(`No action handler for setting type ${i}`)}}_leaveGroup(e){return(0,i.leaveGroup)(this.store,Ember.get(e,"followingStateUrn"),this.authenticatedUser.memberId).then(()=>this._successToast(e)).catch(e=>{this._errorToast()
throw e})}_turnOffNotification(e){const t=encodeURIComponent(Ember.get(e,"notificationTypeUrn"))
return this.store.adapterFor("-ember-m3").ajax(`${r.NT_SETTINGS_ENDPOINT}${t}`,"POST",{data:JSON.stringify({patch:{currentValue:{$set:{value:a}}}})}).then(()=>this._successToast(e)).catch(e=>{this._errorToast()
throw e})}_handleMuteNotification(e,i){const r=Ember.get(e,"objectUrn"),a=h[i]
return this._resolveAction(a,r,l).then(()=>{var i
return(i=this.store).queryURL.apply(i,(0,t.default)((0,n.buildSingleCardM3Request)(Ember.get(e,"entityUrn"))))}).then(()=>((function(e,t){if(t===l)Ember.set(e,"socialActivityCounts",null)
else if(t===c){const t=Ember.get(e,"actions.firstObject");(t?Ember.get(t,"type"):"")===m&&Ember.set(e,"actions",[])}}))(e,i)).catch(e=>{this._errorToast()
throw e})}_handleUnfollow(e){const t=Ember.get(e,"followingStateUrn")
return this.store.adapterFor("-ember-m3").ajax(`/voyager/api/feed/dash/followingStates/${t}`,"POST",{data:JSON.stringify({following:!1})}).then(()=>this._successToast(e)).catch(e=>{this._errorToast()
throw e})}_handleDeletedNotification(e,t){const n=Ember.get(e,"objectUrn"),i=t?r.CTA_REMOVE_ACTION:r.CTA_ADD_ACTION
return this._resolveAction(i,n,u).catch(e=>{this._errorToast()
throw e})}_successToast(e){const t=Ember.get(e,"successToastText.text")||Ember.get(e,"successToastText")
this.persistentToastManager.success({message:t})}_errorToast(){const e=this.i18n.lookupTranslation("notifications@application","setting_error_message")()
this.persistentToastManager.error({message:e})}_resolveAction(e,t,n){return t&&n?this.store.adapterFor("-ember-m3").ajax(e,"POST",{data:JSON.stringify({actionType:n,item:t})}):Ember.RSVP.resolve()}}})
define("nt-card/utils/page-count-calculator",["exports","global-utils/utils/is-browser"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
e.default=class{constructor(e,n,i){let{windowService:r}=i,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{}
const{overrideDebug:o,isBrowser:l=t.default}=s,c=!!Ember.isPresent(o)&&o
this.basePageCount=e
this.itemBufferCount=a
this.itemHeight=n
this._isFirstCalc=!0
this._shouldCalculate=l&&!c
this._windowService=r}getItemCount(){if(this._shouldCalculate&&this._isFirstCalc){this._isFirstCalc=!1
return Math.ceil(Ember.get(this,"_windowService.window.innerHeight")/this.itemHeight)+this.itemBufferCount}return this.basePageCount}reset(){this._isFirstCalc=!0
return this}}})
define("nt-card/utils/tracking-utils",["exports","nt-card/utils/constants"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.fireMeCustomTracking=function(e,t,n,i){return e.fireTrackingPayload("MeNotificationActionEvent",{actionCategory:i,controlUrn:e.generateControlUrn(n),notification:t})}
e.buildMeCustomTrackingInfo=function(e,t,n){return{name:"MeNotificationActionEvent",body:{actionCategory:n,controlUrn:t,notification:e}}}
e.buildImpressionTrackingEvent=function(e,t,n){var i,r
const a={notification:{objectUrn:Ember.get(e,"objectUrn"),trackingId:Ember.get(e,"trackingId")},visibleTime:n.visibleTime,duration:n.duration,listPosition:{index:t},size:{width:(null===(i=n.boundingClientRect)||void 0===i?void 0:i.width)||0,height:(null===(r=n.boundingClientRect)||void 0===r?void 0:r.height)||0}},s=Ember.get(e,"insight")
s&&(a.insight={trackingId:Ember.get(s,"trackingId"),objectUrn:Ember.get(s,"objectUrn")})
return{name:"MeNotificationImpressionEvent",body:{notifications:[a]}}}
e.deriveTrackingParams=function(e,p,u){const m=p||Ember.get(e,"cardAction"),h=Ember.get(m,"type")
let g=null,b=null
switch(h){case t.CARD_ACTION_ENUMS.CONNECT:g=o
b=n
break
case t.CARD_ACTION_ENUMS.CONFIRMATION:case t.CARD_ACTION_ENUMS.DISPLAY:g=l
b=r
break
case t.CARD_ACTION_ENUMS.FOLLOW:g=c
b=a
break
case t.CARD_ACTION_ENUMS.NOTIFICATION_ROUTE:g=d
b=s
break
default:throw new Error(`Cannot derive tracking params for CTA of type: ${h}`)}b="string"==typeof u?u:b
return{controlName:b=Ember.get(e,"contentAction")===p?i:b,actionCategory:g}}
const{CONNECT_CTA_CLICK:n,CONTENT_CLICK_CONTROL_NAME:i,DISPLAY_CTA_CLICK:r,FOLLOW_CTA_CLICK:a,NOTIFICATION_ROUTE_CTA_CLICK:s}=t.CONTROL_NAMES,{CONNECT_ACTION_CATEGORY:o,DISPLAY_ACTION_CATEGORY:l,FOLLOW_ACTION_CATEGORY:c,NOTIFICATION_ROUTE_ACTION_CATEGORY:d}=t.ACTION_CATEGORIES})
define("nt-edgesetting/components/nt-edgesetting",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component"],function(e,t,n,i,r,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var s,o,l,c,d,p,u,m,h,g,b,f,_,E,y,T,v,C,O
const S=Ember.HTMLBars.template({id:"W5gs+TV3",block:'{"symbols":["result","modal","opt","controlName","&attrs","&default"],"statements":[[7,"div",false],[12,"class","nt-edgesetting"],[13,5],[8],[0,"\\n"],[0,"  "],[14,6,[[23,0,["fetchEdgeSettingData"]]]],[0,"\\n\\n"],[4,"if",[[23,0,["promise"]]],null,{"statements":[[4,"let",[[28,"global-helpers@load",[[23,0,["promise"]]],null]],null,{"statements":[[4,"if",[[23,0,["showModal"]]],null,{"statements":[[0,"        "],[5,"artdeco-modal@artdeco-modal",[],[["@isOpen","@size","@dismissModal"],[[23,0,["showModal"]],"small",[28,"ember-simple-set-helper@set",[[23,0,[]],"showModal",false],null]]],{"statements":[[0,"\\n          "],[6,[23,2,["artdeco-modal-header"]],[],[[],[]],{"statements":[[0,"\\n            "],[7,"h2",true],[10,"id","nt-edgesetting-modal__header"],[10,"class","t-18 mb1"],[8],[1,[28,"t",["i18n_manage_notifications","nt-edgesetting/components/nt-edgesetting"],null],false],[9],[0,"\\n"],[4,"if",[[23,1,["isLoaded"]]],null,{"statements":[[0,"              "],[7,"p",true],[10,"class","t-14 t-black--light"],[8],[1,[23,1,["value","title"]],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"          "]],"parameters":[]}],[0,"\\n          "],[6,[23,2,["artdeco-modal-content"]],[],[[],[]],{"statements":[[0,"\\n"],[4,"if",[[23,1,["isLoaded"]]],null,{"statements":[[0,"              "],[7,"form",true],[10,"class","ph2"],[8],[0,"\\n                "],[7,"fieldset",true],[8],[0,"\\n"],[4,"each",[[23,1,["value","edgeSettingOptions"]]],null,{"statements":[[4,"let",[[28,"concat",["opt_in_",[28,"global-helpers@lowercase",[[23,3,["optionType"]]],null]],null]],null,{"statements":[[0,"                      "],[7,"input",false],[12,"id",[29,["id_",[23,3,["optionType"]]]]],[12,"name","optionType"],[12,"value",[23,3,["optionType"]]],[12,"checked",[28,"global-helpers@eq",[[23,0,["selectedOptionType"]],[23,3,["optionType"]]],null]],[12,"type","radio"],[3,"on",["change",[28,"fn",[[23,0,["updateSelected"]],[23,3,[]]],null]]],[3,"ember-cli-pemberly-tracking@track-interaction",[[23,4,[]]]],[8],[9],[0,"\\n"]],"parameters":[4]},null],[0,"                    "],[7,"label",true],[11,"for",[29,["id_",[23,3,["optionType"]]]]],[10,"class","mt2 pb2"],[8],[0,"\\n                      "],[7,"h4",true],[10,"class","t-14"],[8],[1,[23,3,["optionName"]],false],[9],[0,"\\n                      "],[7,"p",true],[10,"class","t-14 t-black--light"],[8],[1,[23,3,["optionDescription"]],false],[9],[0,"\\n                    "],[9],[0,"\\n"]],"parameters":[3]},null],[0,"                "],[9],[0,"\\n              "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,1,["isLoading"]]],null,{"statements":[[0,"              "],[5,"artdeco-loader@artdeco-loader",[],[["@class","@a11yText"],["block mlA mrA mv6",[28,"t",["i18n_loading","nt-edgesetting/components/nt-edgesetting"],null]]]],[0,"\\n"]],"parameters":[]},{"statements":[[0,"              "],[5,"artdeco-empty-state@artdeco-empty-state",[],[["@class","@headline","@illustration","@mercadoSize","@message","@size"],["full-width",[28,"t",["i18n_error_headline","nt-edgesetting/components/nt-edgesetting"],null],"error-fail",1,[28,"t",["i18n_error_message","nt-edgesetting/components/nt-edgesetting"],null],1]]],[0,"\\n              "],[5,"artdeco-button@artdeco-button",[[3,"ember-cli-pemberly-tracking@track-interaction",["opt_in_retry"]]],[["@class","@text","@type","@click"],["block mlA mrA",[28,"t",["i18n_retry","nt-edgesetting/components/nt-edgesetting"],null],"secondary",[23,0,["fetchEdgeSettingData"]]]]],[0,"\\n            "]],"parameters":[]}]],"parameters":[]}],[0,"          "]],"parameters":[]}],[0,"\\n"],[4,"if",[[23,1,["isLoaded"]]],null,{"statements":[[0,"            "],[6,[23,2,["artdeco-modal-footer"]],[],[[],[]],{"statements":[[0,"\\n              "],[7,"span",true],[10,"class","fr"],[8],[0,"\\n                "],[5,"artdeco-button@artdeco-button",[[3,"ember-cli-pemberly-tracking@track-interaction",["opt_in_confirm"],[["onInteract"],[[23,0,["fireCustomTracking"]]]]]],[["@text","@click"],[[28,"t",["i18n_save","nt-edgesetting/components/nt-edgesetting"],null],[23,0,["submitModal"]]]]],[0,"\\n              "],[9],[0,"\\n            "]],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"        "]],"parameters":[2]}],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null]],"parameters":[]},null],[9]],"hasEval":false}',meta:{moduleName:"nt-edgesetting/components/nt-edgesetting.hbs"}})
let w=(s=Ember.inject.service("i18n"),o=Ember.inject.service("persistent-toast-manager@persistent-toast-manager"),l=Ember.inject.service("store"),c=Ember.inject.service("tracking"),d=Ember._tracked,p=Ember._tracked,u=Ember._tracked,m=Ember._action,h=Ember._action,g=Ember._action,b=Ember._action,f=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"i18n",_,this);(0,t.default)(this,"persistentToastManager",E,this);(0,t.default)(this,"store",y,this);(0,t.default)(this,"tracking",T,this);(0,t.default)(this,"showModal",v,this);(0,t.default)(this,"promise",C,this);(0,t.default)(this,"selectedOptionType",O,this);(0,n.default)(this,"_edgeSettingModel",null);(0,n.default)(this,"_successMessage","")
const e=this.args.consumerPageKey||this.tracking.getCurrentPageKey()
this.consumerPageKey=e}fetchEdgeSettingData(e){e&&e instanceof HTMLElement&&e.focus()
const t=this.showModal
this.promise=this._getPromise()
this.showModal=!0
t||this.tracking.firePageViewEvent("flagship3_notifications_optin")}updateSelected(e){this.selectedOptionType=Ember.get(e,"optionType")
this._successMessage=Ember.get(e,"successToastText")}submitModal(){const e=Ember.get(this,"_edgeSettingModel.selectedOptionType")
this.selectedOptionType!==e?this.store.adapterFor("-ember-m3").ajax(`/voyager/api/notifications/dash/edgesetting/${this.args.edgeSettingUrn}`,"POST",{data:JSON.stringify({patch:{$set:{selectedOptionType:this.selectedOptionType}}})}).then(()=>{var e,t
this.isDestroying||(this.showModal=!1)
this.persistentToastManager.success({message:this._successMessage})
null===(e=(t=this.args).settingChangeSuccessCallback)||void 0===e||e.call(t,this.selectedOptionType)},e=>{this.isDestroying||(this.showModal=!1)
const t=this.i18n.lookupTranslation("component","nt-edgesetting@nt-edgesetting","i18n_error_toast")()
this.persistentToastManager.error({message:t})
throw e}):this.showModal=!1}fireCustomTracking(){const e=Ember.get(this,"_edgeSettingModel.selectedOptionType"),t={edgeSettingUrn:this.args.edgeSettingUrn,consumerPageKey:this.consumerPageKey,currentValue:e,newValue:this.selectedOptionType}
this.args.notification&&(t.notification=this.args.notification)
this.args.notificationTypeUrn&&(t.notificationTypeUrn=this.args.notificationTypeUrn)
return{name:"EdgeSettingChangeActionEvent",body:t}}_getPromise(){return this.store.queryURL(`notifications/dash/edgesetting/${this.args.edgeSettingUrn}`,{params:{recipe:"com.linkedin.voyager.dash.deco.identity.notifications.FullEdgeSetting"},reload:!0}).then(e=>{if(!this.isDestroying){this._edgeSettingModel=e
this.selectedOptionType=Ember.get(e,"selectedOptionType")}return e})}},_=(0,i.default)(f.prototype,"i18n",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=(0,i.default)(f.prototype,"persistentToastManager",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=(0,i.default)(f.prototype,"store",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=(0,i.default)(f.prototype,"tracking",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=(0,i.default)(f.prototype,"showModal",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),C=(0,i.default)(f.prototype,"promise",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=(0,i.default)(f.prototype,"selectedOptionType",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),(0,i.default)(f.prototype,"fetchEdgeSettingData",[m],Object.getOwnPropertyDescriptor(f.prototype,"fetchEdgeSettingData"),f.prototype),(0,i.default)(f.prototype,"updateSelected",[h],Object.getOwnPropertyDescriptor(f.prototype,"updateSelected"),f.prototype),(0,i.default)(f.prototype,"submitModal",[g],Object.getOwnPropertyDescriptor(f.prototype,"submitModal"),f.prototype),(0,i.default)(f.prototype,"fireCustomTracking",[b],Object.getOwnPropertyDescriptor(f.prototype,"fireCustomTracking"),f.prototype),f)
e.default=w
Ember._setComponentTemplate(S,w)})
define("sticky/components/collapsable-sticky-header",["exports","sticky/templates/components/collapsable-sticky-header","ember-singularity-mixins/mixins/scroll-handler","global-utils/utils/is-browser"],function(e,t,n,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var r=Ember.Component.extend(n.default,{layout:t.default,classNames:["collapsable-sticky-header"],classNameBindings:["showHeader"],scrollPosition:0,showHeader:!0,minScrollPosition:48,_updateShowHeader(){if(i.default){const e=window.pageYOffset<0?0:window.pageYOffset,t=e-this.scrollPosition,{minScrollPosition:n}=this
Ember.setProperties(this,{showHeader:e<=n||t<0,scrollPosition:e})}},scroll(){this._updateShowHeader()
this.debounceTask("_updateShowHeader",200)}})
e.default=r})
define("sticky/components/sticky-container",["exports","ember-batcher","ember-singularity-mixins/mixins/scroll-handler","global-utils/utils/is-browser","sticky/templates/components/sticky-container"],function(e,t,n,i,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const a="UP_SCROLL",s="DOWN_SCROLL"
var o=Ember.Component.extend(n.default,{layout:r.default,lix:Ember.inject.service("lix"),windowService:Ember.inject.service("global-services@window"),classNames:["sticky"],classNameBindings:["stuck","bottomStuck"],offset:void 0,bottomOffset:void 0,bottomStickyEnabled:void 0,stuck:!1,topMargin:0,shouldSetChildDimensions:!0,_lastScrollPosition:0,setChildDimension(){this.shouldSetChildDimensions&&(0,t.readDOM)(()=>{if(this.isDestroying)return
const e=this.getElement(),n=e.firstElementChild
if(!n)return
const i=n.clientHeight,r=n.clientWidth;(0,t.mutateDOM)(()=>{if(!this.isDestroying){e.style.height=`${i}px`
e.style.width=`${r}px`
e.style.margin="0 auto"}})})},didRender(){this.setChildDimension()},didInsertElement(){this.scroll()},getElement(){return this.element},scroll(){if(this.bottomStickyEnabled){this._updateBottomTopStuck()
this.debounceTask("_updateBottomTopStuck",200)}else if(this.bottomStickyOnly){this._updateBottomStuck()
this.debounceTask("_updateBottomStuck",200)}else{this._updateStuck()
this.debounceTask("_updateStuck",200)}},_updateStuck(){(0,t.readDOM)(()=>{if(i.default&&!this.isDestroying){const e=this.getElement().getBoundingClientRect(),n=Ember.getWithDefault(this,"offset",52);(0,t.mutateDOM)(()=>{this.isDestroying||Ember.set(this,"stuck",Math.round(e.top)<n)})}})},_updateBottomStuck(){(0,t.readDOM)(()=>{if(i.default&&!this.isDestroying){const e=this.getElement().getBoundingClientRect(),n=Ember.get(this,"windowService.window").innerHeight;(0,t.mutateDOM)(()=>{this.isDestroying||Ember.set(this,"bottomStuck",Math.round(e.bottom)>n)})}})},_updateBottomTopStuck(){(0,t.readDOM)(()=>{if(i.default&&!this.isDestroying){const e=this.getElement(),n=e.getBoundingClientRect(),i=Ember.getWithDefault(this,"offset",52),r=Ember.getWithDefault(this,"bottomOffset",12),o=Ember.get(this,"windowService.window"),l=e.firstElementChild,c=o.pageYOffset,d=this._lastScrollPosition
Ember.set(this,"_lastScrollPosition",c)
const p=o.innerHeight,u=Math.round(n.height)>p-i,m=Math.round(n.bottom)<=p-r,h=u&&m;(0,t.mutateDOM)(()=>{if(!this.isDestroying)if(h){const e=Math.abs(c-d),t=l.style.bottom||`${r}px`,o=parseInt(t.split("px")[0],10)
let u,m
switch(this._getScrollDirection(c,d)){case a:m=-1*(n.height-p+i+this.topMargin)
u=Math.max(m,o-e)
break
case s:u=Math.min(r,o+e)}if(u){Ember.set(this,"bottomStuck",!0)
l.style.bottom=`${u}px`}}else if(u){if(n.top>=i){Ember.set(this,"bottomStuck",!1)
l.style.bottom=""}}else{Ember.setProperties(this,{bottomStuck:!1,stuck:n.top<i})
l.style.bottom=""}})}})},_getScrollDirection:(e,t)=>e<t?a:e>t?s:void 0})
e.default=o})
define("sticky/templates/components/collapsable-sticky-header",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"pihGPTq6",block:'{"symbols":["&default"],"statements":[[7,"div",true],[10,"class","header-container"],[8],[0,"\\n  "],[7,"div",true],[10,"class","header-content"],[8],[14,1],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"sticky/templates/components/collapsable-sticky-header.hbs"}})
e.default=t})
define("sticky/templates/components/sticky-container",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"xTJoI5G7",block:'{"symbols":["&default"],"statements":[[14,1,[[23,0,["stuck"]],[23,0,["bottomStuck"]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"sticky/templates/components/sticky-container.hbs"}})
e.default=t})
define("title-bar/components/nav-profile-button",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component"],function(e,t,n,i,r,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var s,o,l
const c=Ember.HTMLBars.template({id:"uEDfEv8u",block:'{"symbols":["&attrs"],"statements":[[7,"div",false],[12,"class","nav-profile mt1"],[13,1],[8],[0,"\\n"],[0,"  "],[5,"ember-engines@link-to-external",[[12,"class","nav-profile__link js-nav-item-link"]],[["@route","@model"],["profile.view",[23,0,["userId"]]]],{"statements":[[0,"\\n"],[4,"if",[[23,0,["hasProfilePicture"]]],null,{"statements":[[0,"      "],[5,"ember-vector-images@custom-image",[],[["@image","@alt","@width","@ghostType","@class"],[[23,0,["miniProfile","picture"]],[28,"t",["i18n_member_full_name","title-bar/components/nav-profile-button"],[["memberName"],[[28,"global-helpers@name",[[23,0,["miniProfile"]]],null]]]],24,"person","nav-profile__member-photo"]]],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","a11y-text"],["nav-small-me-icon",[28,"t",["i18n_member_full_name","title-bar/components/nav-profile-button"],[["memberName"],[[28,"global-helpers@name",[[23,0,["miniProfile"]]],null]]]]]]],false],[0,"\\n"]],"parameters":[]}],[0,"  "]],"parameters":[]}],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"title-bar/components/nav-profile-button.hbs"}})
let d=(s=Ember.inject.service("authentication@authenticated-user"),o=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"authenticatedUser",l,this)}get hasProfilePicture(){return!Ember.isEmpty(Ember.get(this,"miniProfile.picture"))}get userId(){return this.authenticatedUser.memberId}get miniProfile(){return this.authenticatedUser.miniProfile}},l=(0,i.default)(o.prototype,"authenticatedUser",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o)
e.default=d
Ember._setComponentTemplate(c,d)})
define("title-bar/components/title-bar",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const t=Ember.HTMLBars.template({id:"JcVhjZpz",block:'{"symbols":["dismissIcon","@title","@iconAriaLabel","@dismissalAction","&default","@labelledby","@bemPrefix","&attrs","@icon"],"statements":[[0,"\\n"],[7,"div",false],[12,"class",[29,[[23,7,[]]," global-title-container shared-title-bar"]]],[13,8],[8],[0,"\\n"],[4,"let",[[28,"global-helpers@or",[[23,9,[]],"cancel-icon"],null]],null,{"statements":[[4,"if",[[23,7,[]]],null,{"statements":[[0,"      "],[7,"div",true],[11,"class",[29,["shared-title-bar__title ",[23,7,[]],"__title-bar-title"]]],[8],[0,"\\n"],[4,"if",[[23,4,[]]],null,{"statements":[[0,"          "],[7,"button",false],[12,"class",[29,["shared-title-bar__button ",[23,7,[]],"__title-bar-button"]]],[12,"aria-label",[28,"if",[[23,3,[]],[23,3,[]],[28,"t",["dismiss","title-bar/components/title-bar"],null]],null]],[12,"type","button"],[3,"on",["click",[23,4,[]]]],[8],[0,"\\n            "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size"],[[23,1,[]],"large"]]],false],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,2,[]]],null,{"statements":[[0,"          "],[7,"h1",true],[11,"id",[23,6,[]]],[11,"class",[29,["shared-title-bar__text ",[23,7,[]],"__title-bar-text t-16 t-black t-normal"]]],[8],[1,[23,2,[]],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[14,5],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[7,"div",true],[10,"class","global-title"],[8],[0,"\\n"],[4,"if",[[23,4,[]]],null,{"statements":[[0,"          "],[7,"button",false],[12,"class","global-title-button"],[12,"aria-label",[28,"if",[[23,3,[]],[23,3,[]],[28,"t",["dismiss","title-bar/components/title-bar"],null]],null]],[12,"type","button"],[3,"on",["click",[23,4,[]]]],[8],[0,"\\n            "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size"],[[23,1,[]],"large"]]],false],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,2,[]]],null,{"statements":[[0,"          "],[7,"h1",true],[10,"class","global-title-text"],[8],[0,"\\n"],[4,"if",[[28,"title-bar@is-title-tvm",[[23,2,[]]],null]],null,{"statements":[[0,"              "],[1,[28,"text-view-model@text-view-model",[[23,2,[]]],null],false],[0,"\\n"]],"parameters":[]},{"statements":[[1,[23,2,[]],false]],"parameters":[]}],[0,"          "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[14,5],[9],[0,"\\n"]],"parameters":[]}]],"parameters":[1]},null],[9]],"hasEval":false}',meta:{moduleName:"title-bar/components/title-bar.hbs"}})
var n=Ember._setComponentTemplate(t,Ember._templateOnlyComponent())
e.default=n})
define("title-bar/helpers/is-title-tvm",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.Helper.helper((function(e){let[t]=e
return t instanceof Ember.Object&&"string"==typeof Ember.get(t,"text")}))
e.default=t})
define("url-preview-detour/components/edit-title",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component"],function(e,t,n,i,r,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var s,o,l,c
const d=Ember.HTMLBars.template({id:"HYBvvroA",block:'{"symbols":["&attrs","@articleTitle","@onCancel","@onSave"],"statements":[[0,"\\n"],[7,"div",false],[12,"class","url-preview-detour-edit-title__overlay"],[13,1],[8],[0,"\\n  "],[7,"form",true],[10,"class","url-preview-detour-edit-title__form"],[10,"tabindex","-1"],[8],[0,"\\n    "],[7,"h3",true],[10,"class","t-14 t-white t-bold mv2"],[10,"id","url-preview-detour-edit-title__heading"],[8],[0,"\\n      "],[1,[28,"t",["i18n_edit_form_heading","url-preview-detour/components/edit-title"],null],false],[0,"\\n    "],[9],[0,"\\n    "],[7,"p",true],[10,"class","t-12 t-white--light t-normal"],[10,"id","url-preview-detour-edit-title__desc"],[8],[0,"\\n      "],[1,[28,"t",["i18n_edit_form_description","url-preview-detour/components/edit-title"],null],false],[0,"\\n    "],[9],[0,"\\n    "],[5,"artdeco-text-input@artdeco-text-input",[[12,"aria-labelledby","url-preview-detour-edit-title__heading"],[12,"aria-describedby","url-preview-detour-edit-title__desc"]],[["@type","@color","@value","@onInput","@maxLength","@restrictToMaxLength","@inputClasses"],["text","inverse",[23,2,[]],[23,0,["onEditTitle"]],140,true,"url-preview-detour-edit-title__text-input mt4"]]],[0,"\\n    "],[7,"div",true],[10,"class","fr mv4"],[8],[0,"\\n      "],[5,"artdeco-button@artdeco-button",[[12,"aria-label",[28,"t",["i18n_cancel","url-preview-detour/components/edit-title"],null]]],[["@text","@color","@type","@size","@controlType","@click"],[[28,"t",["i18n_cancel","url-preview-detour/components/edit-title"],null],"inverse","secondary",1,"button",[23,3,[]]]]],[0,"\\n      "],[5,"artdeco-button@artdeco-button",[[12,"aria-label",[28,"t",["i18n_save_article_title","url-preview-detour/components/edit-title"],null]]],[["@text","@color","@type","@class","@size","@controlType","@click","@disabled"],[[28,"t",["i18n_save","url-preview-detour/components/edit-title"],null],"inverse","primary","ml2",1,"button",[28,"fn",[[23,4,[]],[23,0,["updatedTitle"]]],null],[23,0,["saveBtnDisabled"]]]]],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"url-preview-detour/components/edit-title.hbs"}})
let p=(s=Ember._tracked,o=Ember._action,l=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"updatedTitle",c,this)}get saveBtnDisabled(){return Ember.isEmpty(this.updatedTitle)}onEditTitle(e){let{target:{value:t}}=e
this.updatedTitle=t}},c=(0,i.default)(l.prototype,"updatedTitle",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(l.prototype,"onEditTitle",[o],Object.getOwnPropertyDescriptor(l.prototype,"onEditTitle"),l.prototype),l)
e.default=p
Ember._setComponentTemplate(d,p)})
define("url-preview-detour/components/url-preview-detour",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","ember-m3-pdsc-model-builder","detour-framework/utils/media-upload","vector/utils/constants","detour-framework/utils/preview-utils","url-preview-detour/utils/url-preview-detour-manager","url-preview-detour/utils/url-preview-utils"],function(e,t,n,i,r,a,s,o,l,c,d){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var p,u,m,h,g,b,f,_,E,y,T,v,C,O,S,w,A,I,P,N,k
const R=Ember.HTMLBars.template({id:"ZsrIjPgI",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","url-preview-detour__preview-container-wrapper"],[8],[0,"\\n  "],[7,"div",true],[10,"class","share-box__preview-container"],[8],[0,"\\n    "],[7,"div",true],[10,"class","share-box__preview-container-controls"],[8],[0,"\\n      "],[5,"artdeco-button@artdeco-button",[],[["@type","@size","@color","@class","@icon","@click","@text"],["primary","1","muted","url-preview-detour__edit-title-button","pencil-icon",[28,"action",[[23,0,[]],"openEditTitleForm"],null],[28,"t",["i18n_edit-article-title","url-preview-detour/components/url-preview-detour"],null]]]],[0,"\\n      "],[5,"detour-framework@upload-media-input",[],[["@class","@onMediaData","@id","@controlName","@mediaType"],["share-box__custom-image-upload visually-hidden",[28,"action",[[23,0,[]],"onUrlPreviewImageUpload"],null],"url-preview-image",[23,0,["controlInteractionEvents","CUSTOM_URL_PREVIEW_BTN"]],"IMAGE_SHARING"]]],[0,"\\n      "],[7,"label",true],[10,"for","url-preview-image"],[10,"class","share-box__custom-image-btn\\n              mv0\\n              mh2\\n              artdeco-button\\n              artdeco-button--muted\\n              artdeco-button--1"],[8],[0,"\\n        "],[1,[28,"artdeco-icons-web@li-icon",null,[["size","type"],["small","camera-icon"]]],false],[0,"\\n        "],[7,"span",true],[10,"class","visually-hidden"],[8],[0,"\\n          "],[1,[28,"t",["i18n_upload_image_preview","url-preview-detour/components/url-preview-detour"],null],false],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n"],[4,"if",[[23,0,["editTitleOpen"]]],null,{"statements":[[0,"      "],[5,"url-preview-detour@edit-title",[],[["@articleTitle","@onCancel","@onSave"],[[23,0,["articleTitle"]],[28,"action",[[23,0,[]],"onCancelEditTitle"],null],[28,"action",[[23,0,[]],"onSaveTitle"],null]]]],[0,"\\n"]],"parameters":[]},null],[0,"\\n    "],[5,"feed-shared@render-models/mini-update-v2",[],[["@showContentOnly","@disableContentDisplayed","@update","@class"],[[23,0,["showContentOnlyInPreviewedUpdate"]],[23,0,["isPreviewDisabled"]],[23,0,["previewedUpdateV2"]],"share-box__preview-container--as-box mt5"]]],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n\\n"],[5,"detour-framework@share-box-footer",[],[["@showBackButton","@onBackClick","@onDoneClick"],[true,[23,0,["goToCreation"]],[28,"action",[[23,0,[]],"onNext"],null]]]]],"hasEval":false}',meta:{moduleName:"url-preview-detour/components/url-preview-detour.hbs"}})
let x=(p=Ember.inject.service("i18n"),u=Ember.inject.service("lix"),m=Ember.inject.service("store"),h=Ember.inject.service("vector@vector-upload"),g=Ember.computed.alias("detourData.initialUpdateV2").readOnly(),b=Ember.computed.alias("detourData.mediaUrn").readOnly(),f=Ember.computed.alias("detourData.originalUrl").readOnly(),_=Ember.computed("initialUpdateV2","newImageViewComponent","customArticleTitle").readOnly(),E=Ember._action,y=Ember._action,T=Ember._action,v=Ember._action,C=Ember._action,O=class extends Ember.Component{constructor(){super(...arguments);(0,t.default)(this,"i18n",S,this);(0,t.default)(this,"lix",w,this);(0,t.default)(this,"store",A,this);(0,t.default)(this,"vectorUpload",I,this);(0,t.default)(this,"initialUpdateV2",P,this);(0,t.default)(this,"mediaUrn",N,this);(0,t.default)(this,"originalUrl",k,this)}get previewedUpdateV2(){return this.newImageViewComponent||this.customArticleTitle?(0,d.getUpdateV2WithGivenArticleImageOrTitle)(this.store,this.initialUpdateV2,this.newImageViewComponent,(0,a.buildModel)("com.linkedin.voyager.common.TextViewModel",{text:this.customArticleTitle})):this.initialUpdateV2}didInsertElement(){var e
super.didInsertElement.apply(this,arguments)
null===(e=this.updateShareboxModalConfig)||void 0===e||e.call(this,{modalHeader:this.i18n.lookupTranslation("component","url-preview-detour@url-preview-detour","i18n_detour_header")(),controlName:"url_preview_exit",shouldFocusOnHeader:!0})}openEditTitleForm(){this._onToggleEditTitle()
const e=Ember.get(this.previewedUpdateV2,"content.title.text")
Ember.set(this,"articleTitle",e)}onSaveTitle(e){Ember.set(this,"customArticleTitle",e)
this._onToggleEditTitle()}onCancelEditTitle(){this._onToggleEditTitle()}onUrlPreviewImageUpload(e){((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
const n=Ember.isArray(e)?e:[e]
return Ember.RSVP.Promise.all(n.map(e=>(0,l.getImageProps)(e,t)))}))(e.data).then(e=>{if(this.isDestroying)return
const t=e.filter(e=>"string"==typeof e.src).map(e=>{let{src:t,height:n,width:i,accessibilityText:r}=e
return(0,l.getImageViewComponentFromImageUrls)(t,n,i,r)})
t[0]&&Ember.set(this,"newImageViewComponent",t[0])})
const t=new s.default(e,o.UPLOAD_MEDIA_TYPES.IMAGE_SHARING,this.vectorUpload,this.organizationActorUrn)
Ember.set(this,"articleImageUploadPromise",t.uploadMedia())}onNext(){var e
null===(e=this.onDetourComplete)||void 0===e||e.call(this,new c.default(Ember.RSVP.resolve({update:this.previewedUpdateV2,originalUrl:this.originalUrl}),this.i18n,this.articleImageUploadPromise,this.customArticleTitle))}_focusOnElement(e){const t=this.element.querySelector(e)
t&&t.focus()}_onToggleEditTitle(){Ember.set(this,"editTitleOpen",!this.editTitleOpen)
const e=this.editTitleOpen?".url-preview-detour-edit-title__form":".url-preview-detour__edit-title-button"
Ember.run.scheduleOnce("afterRender",this,this._focusOnElement,e)}},S=(0,i.default)(O.prototype,"i18n",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=(0,i.default)(O.prototype,"lix",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=(0,i.default)(O.prototype,"store",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=(0,i.default)(O.prototype,"vectorUpload",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=(0,i.default)(O.prototype,"initialUpdateV2",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=(0,i.default)(O.prototype,"mediaUrn",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=(0,i.default)(O.prototype,"originalUrl",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(O.prototype,"previewedUpdateV2",[_],Object.getOwnPropertyDescriptor(O.prototype,"previewedUpdateV2"),O.prototype),(0,i.default)(O.prototype,"openEditTitleForm",[E],Object.getOwnPropertyDescriptor(O.prototype,"openEditTitleForm"),O.prototype),(0,i.default)(O.prototype,"onSaveTitle",[y],Object.getOwnPropertyDescriptor(O.prototype,"onSaveTitle"),O.prototype),(0,i.default)(O.prototype,"onCancelEditTitle",[T],Object.getOwnPropertyDescriptor(O.prototype,"onCancelEditTitle"),O.prototype),(0,i.default)(O.prototype,"onUrlPreviewImageUpload",[v],Object.getOwnPropertyDescriptor(O.prototype,"onUrlPreviewImageUpload"),O.prototype),(0,i.default)(O.prototype,"onNext",[C],Object.getOwnPropertyDescriptor(O.prototype,"onNext"),O.prototype),O)
e.default=x
Ember._setComponentTemplate(R,x)})
define("url-preview-detour/utils/url-preview-detour-manager",["exports","detour-framework/utils/detour-manager","detour-framework/utils/detour-constants","detour-framework/utils/detour-status-data","detour-framework/utils/detour-preview-data","ember-m3-pdsc-model-builder","detour-framework/utils/progress-data","url-preview-detour/utils/url-preview-utils"],function(e,t,n,i,r,a,s,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
e.default=class extends t.default{constructor(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ember.RSVP.resolve(),c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.DETOUR_TYPES.urlPreview
super({detourStatusData:new i.default({detourState:n.DETOUR_STATES.IN_PROGRESS,progressData:new s.default({headline:"whatever",thumbnailLiIcon:"whatever-icon"}),percentComplete:0}),detourPreviewData:new r.default({previewState:n.DETOUR_PREVIEW_STATES.IN_PROGRESS}),isDetourV2:!0,detourType:d})
e.then(e=>{this.detourStatus.publishData(new i.default({detourState:n.DETOUR_STATES.SUCCEEDED,progressData:new s.default({headline:"whatever",thumbnailLiIcon:"whatever-icon"}),detourData:(0,o.isUpdateV2AThirdPartyArticle)(Ember.get(e,"update"))?{initialUpdateV2:Ember.get(e,"update"),mediaUrn:Ember.get(e,"update.updateMetadata.shareMediaUrn"),originalUrl:Ember.get(e,"originalUrl")}:null}))
this.detourPreview.publishData(new r.default({previewComponent:Ember.get(e,"update.content"),previewState:n.DETOUR_PREVIEW_STATES.SUCCEEDED}))}).catch(()=>{this.detourPreview.publishData(new r.default({previewState:n.DETOUR_STATES.FAILED,previewStatusData:{message:t.lookupTranslation("component","url-preview-detour@url-preview-detour","i18n_url_preview_error")()}}))
this.detourStatus.publishData(new i.default({detourState:n.DETOUR_STATES.FAILED,progressData:new s.default({headline:"whatever",thumbnailLiIcon:"whatever-icon"}),percentComplete:0}))
throw new Error("Ember Data Request GET /voyager/api/contentcreation/urlPreview [url-preview-detour]")})
this.getShareMedia=(()=>Ember.RSVP.hash({urlPreviewData:e,customArticleImage:l}).then(e=>{let{urlPreviewData:t,customArticleImage:n}=e
const i={}
c&&(i.title=(0,a.buildModel)("com.linkedin.pemberly.text.AttributedText",{text:c}))
if(n&&n[0]){i.thumbnailUrns=[n[0].meta.urn]
i.recipes=n[0].meta.recipes}i.mediaUrn=Ember.get(t,"update.updateMetadata.shareMediaUrn")
i.originalUrl=Ember.get(t,"originalUrl")
return[(0,a.buildModel)("com.linkedin.voyager.contentcreation.ShareMedia",i)]}))}}})
define("url-preview-detour/utils/url-preview-utils",["exports","ember-m3-pdsc-model-builder","global-utils/utils/api-compat"],function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getUpdateV2WithGivenArticleImageOrTitle=function(e,n){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0
const a={urn:Ember.get(n,"content.urn")}
Ember.get(n,"content.type")&&(a.type=Ember.get(n,"content.type"))
r&&r.text?a.title=r:Ember.get(n,"content.title")&&(a.title=Ember.get(n,"content.title"))
Ember.get(n,"content.subtitle")&&(a.subtitle=Ember.get(n,"content.subtitle"))
Ember.get(n,"content.description")&&(a.description=Ember.get(n,"content.description"))
Ember.get(n,"content.navigationContext")&&(a.navigationContext=Ember.get(n,"content.navigationContext"));(i||Ember.get(n,"content.largeImage"))&&(a.largeImage=i||Ember.get(n,"content.largeImage"))
const s=(0,t.buildModel)("com.linkedin.voyager.feed.render.ArticleComponent",a)
return e.createRecord("com.linkedin.voyager.feed.render.UpdateV2",{entityUrn:Ember.get(n,"entityUrn"),content:s,updateMetadata:Ember.get(n,"updateMetadata")})}
e.isUpdateV2AThirdPartyArticle=function(e){const t=Ember.get(e,"content")
if(t)return(0,n.classNameOf)(t)===i&&"FIRST_PARTY"!==Ember.get(t,"type")
return!1}
const i="com.linkedin.voyager.feed.render.ArticleComponent"})

//# sourceMappingURL=engine-vendor.map