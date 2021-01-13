define("@glimmer/component/-private/base-component-manager",["exports","@babel/runtime/helpers/esm/defineProperty","@glimmer/component/-private/component"],function(e,t,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=function(e,a,n){return class{static create(e){let t=a(e)
return new this(t)}constructor(a){(0,t.default)(this,"capabilities",n)
e(this,a)}createComponent(e,t){0
return new e(a(this),t.named)}getContext(e){return e}}}})
define("@glimmer/component/-private/component",["exports","@babel/runtime/helpers/esm/defineProperty","@glimmer/component/-private/owner"],function(e,t,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.setDestroying=function(e){n.set(e,!0)}
e.setDestroyed=function(e){i.set(e,!0)}
e.default=e.ARGS_SET=void 0
const n=new WeakMap,i=new WeakMap
let s
e.ARGS_SET=s
0
e.default=class{constructor(e,s){(0,t.default)(this,"args",void 0)
this.args=s;(0,a.setOwner)(this,e)
n.set(this,!1)
i.set(this,!1)}get isDestroying(){return n.get(this)}get isDestroyed(){return i.get(this)}willDestroy(){}}})
define("@glimmer/component/-private/ember-component-manager",["exports","@glimmer/component/-private/base-component-manager","@glimmer/component/-private/component"],function(e,t,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const n=Ember._componentManagerCapabilities("3.13",{destructor:!0,asyncLifecycleCallbacks:!1,updateHook:!1})
class i extends((0,t.default)(Ember.setOwner,Ember.getOwner,n)){destroyComponent(e){if(e.isDestroying)return
let t=Ember.meta(e)
t.setSourceDestroying();(0,a.setDestroying)(e)
Ember.run.schedule("actions",e,e.willDestroy)
Ember.run.schedule("destroy",this,s,e,t)}}function s(e,t){if(!e.isDestroyed){Ember.destroy(e)
t.setSourceDestroyed();(0,a.setDestroyed)(e)}}0
var r=i
e.default=r})
define("@glimmer/component/-private/owner",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.setOwner=void 0
var t=Ember.setOwner
e.setOwner=t})
define("@glimmer/component/index",["exports","@glimmer/component/-private/ember-component-manager","@glimmer/component/-private/component"],function(e,t,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
let n=a.default
0
Ember._setComponentManager(e=>new t.default(e),n)
var i=n
e.default=i})
define("ads/components/ad-banner",["exports","fetch","ads/templates/components/ad-banner","ember-cli-pemberly-tracking/utils/user-timing","global-utils/utils/intersection-observer","@linkedin/core-web-tracking","global-utils/utils/is-browser","global-utils/utils/url","global-utils/utils/urn-converter","extended/config/environment"],function(e,t,a,n,i,s,r,o,l,c){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const{addQueryParam:d}=o.default,u=`${`https://${o.default.getDomain()}`}/tscp-serving/dtag`,m=["300x250","160x600","700x17","974x506","496x80","728x90","300x125","175x350","300x375","200x200","320x300"],p={COLLEAGUES:"colleagues",COMPANIES:"companies",COMPANIES_DIRECTORY:"companies_directory",DISCOVER:"discover",EDUCATION:"edu",EVENTS:"events",FEED:"home",GROUPS:"groups",JOBS:"jobs",LOGOUT:"logout",MESSAGING:"inbox",MYNETWORK:"network",NOTIFICATIONS:"notifications",PROFILE:"profile",PROFILE_ACTIVITY:"profile_activity",PULSE:"pulse",RECOMMENDATIONS:"recs",SEARCH_JOB:"search_job",SEARCH_PEOPLE:"search_people",SLIDESHARE:"slideshare",OTHER:"other",WVMP:"who_viewed_my_profile"},h={PAGE_ZONE_HEADER:"H",PAGE_ZONE_BODY_LEFT:"BL",PAGE_ZONE_BODY_MIDDLE:"BM",PAGE_ZONE_BODY_RIGHT:"BR",PAGE_ZONE_FOOTER:"F"},g={appId:"com.linkedin.tscp-rendering",appVersion:null},_={"app-render-mode":"VANILLA","is-app-render-failed":!1},f={"app-version":null,"web-ui-framework":null,"is-single-page-app":!1,"beacon-timeout":1e3},b=.1
var y=Ember.Component.extend({layout:a.default,adBannerManager:Ember.inject.service("ads@ad-banner-manager"),i18n:Ember.inject.service("i18n"),tracking:Ember.inject.service("tracking"),authenticatedUser:Ember.inject.service("authentication@authenticated-user"),lix:Ember.inject.service("lix"),locale:Ember.inject.service("locale"),tagName:"section",classNames:["ad-banner-container"],classNameBindings:["isHeaderZone"],src:null,width:null,height:null,refreshCallback:null,isHeaderZone:!1,isDarkBg:!1,adType:null,isReporting:!1,isAdMenu:!1,isAdChoiceModalOpen:!1,init(){this._super.apply(this,arguments)
Ember.set(this,"refreshCallback",this.refreshIframe.bind(this))
this.initAdInfo()
this.renderIframeContentBound=this.renderIframeContent.bind(this)
this._messageListener=this.handlePostMessage.bind(this)},didReceiveAttrs(){this._super.apply(this,arguments)
let e=this.baseSrc
const{vieweeMemberId:t}=this,{adZone:n}=this
!t||n!==p.PROFILE&&n!==p.PROFILE_ACTIVITY||(e=d(e,"vmid",t))
const i=this.contextualData
i&&(e=d(e,"_x",i))
const s=this.title||this.i18n.getMessageRenderer(a.default,"i18n_advertisement")()
Ember.set(this,"src",Ember.get(this,"adBannerManager.showAds")?e:"")
Ember.setProperties(this,{title:s,srcWithoutAdBlockerList:this.src})},didInsertElement(){this._super.apply(this,arguments)
r.default&&window.addEventListener("message",this._messageListener)
const e=this.element.querySelector("iframe")
if(e){this.boundOnIframeLoaded=this.onIframeLoaded.bind(this,e)
this.addEventListener(e,"load",this.boundOnIframeLoaded)
this.refreshIframe()}},willDestroyElement(){this._super.apply(this,arguments)
this.adBannerManager.unregister(this.refreshCallback)
this.viewportObserver&&this.viewportObserver.disconnect()
r.default&&window.removeEventListener("message",this._messageListener)},initAdInfo(){const e=this.zone,t=this.pageZone,a=this.slotSize,n=this.getAdZone(e),i=this.getPageZone(t),s=this.getSlotSize(a),r=this.adBannerManager.register(i,this.refreshCallback)
let[o,l]=s.split("x")
"700"===o&&(o="100%")
let c=u
c=d(c,"sz",this.getSlotSizeForApi(s))
c=d(c,"ti",r)
c=d(c,"p","1")
c=d(c,"c","1")
c=d(c,"z",n)
c=d(c,"pk",this.tracking.getCurrentPageKey())
c=d(c,"pz",i)
Ember.setProperties(this,{baseSrc:c,width:o,height:l,tileNumber:r,adZone:n})
"PAGE_ZONE_HEADER"===t&&Ember.set(this,"isHeaderZone",!0)
Ember.set(this,"userTimingMeasureKey",`mark_ad-banner#${this.elementId}`)},refreshIframe(){const e=this.element
this.viewportObserver=(0,i.onInViewportOnce)(e,()=>{this.renderIframeContentBound()})},renderIframeContent(){if(this.src){const e=this.element&&this.element.querySelector("iframe")
if(e&&e.contentWindow){this.beginLoadPhaseMeasure()
e.contentWindow.location.replace(jSecure.sanitizeUrl(this.src))}}},onIframeLoaded(e){this.isDarkBg&&this.adjustTextColorForDarkBg(e)
Ember.set(this,"adType",this.attemptExtractAdType(e))
this.endLoadPhaseMeasure()
this.attemptStartRum(e)
this._attemptInjectReportAd(e)},adjustTextColorForDarkBg(e){try{let a=e.contentWindow.document
const n=a.querySelector("iframe")
if(n)a=n.contentWindow.document
else{const e=a.querySelector(".ad.follow-company.f17x700")
if(!e)return
e.style.margin="0 auto"}const i=a.createElement("style")
let s=a.createTextNode(".follow-company.f17x700 #hd h1,\n         .follow-company.f17x700 #hd h1 .company-name,\n         .follow-company.f17x700 #ft .follow-start,\n         .follow-company.f17x700 #ft .follow-start:before,\n         .ad-pipe,\n         .ad-label { color: #FFFFFF }")
i.appendChild(s)
s=a.createTextNode(".follow-company.f17x700 #ft { border-left-color: #FFFFFF; }")
i.appendChild(s)
a.head.appendChild(i)}catch(t){}},getSlotSizeForApi:e=>"700x17"===e?"1x1":e,getPageZone(e){const t=h[e]
return t},getSlotSize(e){m.indexOf(e)
return e},getAdZone(e){const t=p[e]
return t},_hideSemaphore(){this.isReporting&&Ember.setProperties(this,{isReporting:!1,contentSource:null,adUrn:null,advertiserUrn:null})},_openSemaphore(){Ember.set(this,"isReporting",!0)},reportAd(e,t,a){Ember.set(this,"contentSource",e)
Ember.set(this,"adUrn",t)
Ember.set(this,"advertiserUrn",a)
Ember.setProperties(this,{contentSource:e,adUrn:t,advertiserUrn:a})
this._openSemaphore()},_attemptInjectReportAd(e){try{e.contentWindow.reportAd=this.reportAd.bind(this)}catch(t){if("SecurityError"!==t.name||!o.default.isEIDomain()&&!o.default.isDevDomain())throw t}},handlePostMessage(e){const t="test"===c.default.environment,a=this.element&&this.element.querySelector("iframe")
if(t||a&&a.contentWindow===e.source&&e.data)try{const t=JSON.parse(e.data)
if(t&&"AD_MENU"===t.type){const{contentType:e,creative:a,account:n,matchedAt:i}=t
e&&a&&n&&i&&Ember.setProperties(this,{isAdMenu:!0,contentSource:e,adUrn:a,advertiserUrn:n,matchedAt:i})}}catch(n){Ember.Logger.warn("Error occured while parsing the json",n)
throw n}},attemptExtractAdType(e){let t=null
try{const n=e.contentWindow.document.querySelector('meta[name="adType"]')
n&&n.hasAttribute("content")&&(t=n.getAttribute("content"))}catch(a){if("SecurityError"!==a.name)throw a}return t},attemptStartRum(e){const{tracking:a,adType:n,locale:i}=this
if(Math.random()<=b&&r.default&&null!==n){const r=`ads_${n}`,o=a.config.APP.rumConfig["beacon-url"]
let l={},c=null
const d=e.contentWindow
c=i&&i.interfaceLocale||a.config.APP.locale||d.navigator&&d.navigator.language||null
l={AbortController:t.AbortController,performance:d.performance,PerformanceObserver:d.PerformanceObserver,connection:d.navigator.connection,locale:c,Promise:Ember.RSVP.Promise,assign:Ember.assign,fetch:t.default,location:d.location,sendBeacon:d.navigator.sendBeacon&&d.navigator.sendBeacon.bind(d.navigator),document:d.document,requestIdleCallback:d.requestIdleCallback}
const u=Ember.assign({endpoint:o,api:l,locale:c},g),m=new s.BrowserTransporter(u),p=new s.TrackingCore(m)
p.setCurrentContext({pageInstance:{pageUrn:(0,s.generatePageUrn)(r),trackingId:(0,s.generateTrackingId)()},pageKey:r})
const h=new s.RumCore(_,f,p),b=h.start()
h.end(b)}},beginLoadPhaseMeasure(){n.default.addMarker(`${this.userTimingMeasureKey}_load_start`)},endLoadPhaseMeasure(){const{userTimingMeasureKey:e,pageZone:t,adType:a}=this,i=this.getPageZone(t).toLowerCase(),s=`${e}_load_start`,r=`${e}_load_end`
if(n.default.hasMarkerName(s)){n.default.addMarker(r)
n.default.measureTime(`mark_ad-banner_${i}_load_phase`,s,r)
null!==a&&n.default.measureTime(`mark_ad-banner_${i}_ads_${a}_load_phase`,s,r)}},actions:{semaphoreSuccess(){this._hideSemaphore()
this.refreshIframe()},semaphoreFailure(){this._hideSemaphore()},semaphoreClose(){this._hideSemaphore()},semaphoreTrack(e){const t=e&&e.moduleKey
t&&this.tracking.fireInteractionEvent(t)},onAdMenuOptionSelected(e){Ember.set(this,"isAdMenu",!1)
if("REPORT_AD"===e)Ember.set(this,"isReporting",!0)
else if("AD_CHOICE"===e){const e=(0,l.toUrn)("com.linkedin.voyager.dash.common.urn.AdServingUrn",(0,l.composeUrnId)(this.adUrn,this.matchedAt),!0)
Ember.setProperties(this,{adServingUrn:e,isAdChoiceModalOpen:!0})}},dismissAdChoiceModal(e){Ember.setProperties(this,{isAdChoiceModalOpen:!1,contentSource:null,adUrn:null,advertiserUrn:null,matchedAt:null,adServingUrn:null})
e&&this.refreshIframe()}}})
e.default=y})
define("ads/services/ad-banner-manager",["exports","global-utils/utils/is-browser"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var a=Ember.Service.extend(Ember.Evented,{router:Ember.inject.service("router"),lix:Ember.inject.service("lix"),init(){this._super.apply(this,arguments)
this._clearCountMap()
this.countMap={}
this.adBlockers={AD_BLOCK_PLUS:null,AD_BLOCK:!1,UBLOCK:!1}
this.router.on("routeDidChange",e=>{e.from!==e.to&&this._onDidTransition()})
this.showAds=!Ember.testing},register(e,t){const{countMap:a}=this,n=a[e]?a[e]:1
a[e]=n+1
t&&this.on("ad-banner-refresh",t)
return n},unregister(e){e&&this.off("ad-banner-refresh",e)},triggerRefreshAdEvent(){this.trigger("ad-banner-refresh")},_clearCountMap(){Ember.set(this,"countMap",{})},_onDidTransition(){this._clearCountMap()
this.triggerRefreshAdEvent()},_createScriptForDetectingABP(e,a){if(t.default){const t=document.createElement("script")
t.type="text/javascript"
t.async=!1
t.onload=function(){this.adBlockers.AD_BLOCK_PLUS=1===a}.bind(this)
t.src=`/voyager/abp-detection.js?ch=${a}`
e.appendChild(t)
e.removeChild(t)}},getAdBlockerList(){const e=[]
let t=!1
Object.keys(this.adBlockers).forEach(a=>{this.adBlockers[a]?e.push(`${a}`):null===this.adBlockers[a]&&(t=!0)})
t&&e.push("$UNKNOWN")
return e.join(",")}})
e.default=a})
define("ads/templates/components/ad-banner",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"KeCQGrdz",block:'{"symbols":[],"statements":[[7,"iframe",true],[10,"class","ad-banner"],[11,"width",[23,0,["width"]]],[11,"height",[23,0,["height"]]],[10,"src","about:blank"],[10,"scrolling","no"],[11,"title",[23,0,["title"]]],[8],[9],[0,"\\n\\n"],[4,"if",[[23,0,["isReporting"]]],null,{"statements":[[0,"  "],[1,[28,"ember-semaphore@ember-semaphore",null,[["entityUrn","authorUrn","contentSource","success","failure","track","cancel"],[[23,0,["adUrn"]],[23,0,["advertiserUrn"]],[23,0,["contentSource"]],[28,"action",[[23,0,[]],"semaphoreSuccess"],null],[28,"action",[[23,0,[]],"semaphoreFailure"],null],[28,"action",[[23,0,[]],"semaphoreTrack"],null],[28,"action",[[23,0,[]],"semaphoreClose"],null]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,0,["isAdMenu"]]],null,{"statements":[[0,"  "],[5,"ad-menu@modals/ad-menu-modal",[],[["@isOpen","@onDismissAdMenu"],[[23,0,["isAdMenu"]],[28,"action",[[23,0,[]],"onAdMenuOptionSelected"],null]]]],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,0,["isAdChoiceModalOpen"]]],null,{"statements":[[0,"  "],[5,"ad-choice@modals/ad-choice-modal",[],[["@isOpen","@adServingUrn","@onDismissAdChoice"],[[23,0,["isAdChoiceModalOpen"]],[23,0,["adServingUrn"]],[28,"action",[[23,0,[]],"dismissAdChoiceModal"],null]]]],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"ads/templates/components/ad-banner.hbs"}})
e.default=t})
define("content-analytics/components/analytics-highlight",["exports","content-analytics/mixins/impression-tracking","content-analytics/templates/components/analytics-highlight"],function(e,t,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const n=/content-analytics\/analytics-highlights\//g,i={occupation:"ca-analytics-highlight__trophy",region:"ca-analytics-highlight__location-pin",source:"ca-analytics-highlight__radar",slideshare:"ca-analytics-highlight__slideshare"}
var s=Ember.Component.extend(t.default,{layout:a.default,classNames:["ca-analytics-highlight"],trackImpressions:!0,showInitialView:!0,tracking:Ember.inject.service("tracking"),isSlideshare:Ember.computed.equal("model.componentType","content-analytics/analytics-highlights/slideshare-highlight").readOnly(),init(){this._super.apply(this,arguments)
const e=this.get("model.controlNameSuffix"),t=this._getExpandedHighlightArray()
this.setProperties({expandedHighlightArray:t,type:this.get("model.componentType").replace(n,""),icon:i[e],controlName:`analytics_${e}_card`,impressionEvent:{eventName:"SocialUpdateAnalyticsHighlightImpressionEvent",objectCollection:"analyticsHighlights",object:"analyticsHighlight"}})
this.tracking.setupTrackableComponent(this)},actions:{toggleInitialView(){const{showInitialView:e}=this,{controlName:t}=this,a=e?"expand":"collapse"
this.tracking.fireInteractionEvent(`${t}_arrow_${a}`)
Ember.set(this,"showInitialView",!this.showInitialView)}},_getExpandedHighlightArray(){if(this.isSlideshare)return[]
return(this.get("model.companyHighlightInfos")||this.get("model.regionHighlightInfos")||this.get("model.occupationHighlightInfos")||this.get("model.referrerSources")).slice(1)}})
e.default=s})
define("content-analytics/components/error-view",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.Component
e.default=t})
define("content-analytics/components/reshare-list",["exports","content-analytics/templates/components/reshare-list","infinite-scroll/mixins/infinite-scroll","content-analytics/utils/constants"],function(e,t,a,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var i=Ember.Component.extend(a.default,{layout:t.default,eventTarget:n.INFINITE_SCROLLING_ELEMENT_CLASS,scrollingElementSelector:n.INFINITE_SCROLLING_ELEMENT_CLASS,triggerInfiniteScrollOnInsert:!0,infiniteScroll(){const{reshareStart:e,numShares:t}=this.getProperties("reshareStart","numShares")
if(!(e>=t))return this.onGetReshares(e).then(e=>e)}})
e.default=i})
define("content-analytics/components/single-view",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.Component
e.default=t})
define("content-analytics/components/social-gesture-highlights",["exports","content-analytics/templates/components/social-gesture-highlights","content-analytics/mixins/impression-tracking","content-analytics/utils/analytics-module"],function(e,t,a,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var i=Ember.Component.extend(a.default,{layout:t.default,onImpression:n.onImpression,tagName:"section",classNames:["ca-social-gesture-highlights"],trackImpressions:!0,impressionEvent:n.IMPRESSION_EVENT,socialUpdateModuleType:"HIGHLIGHTS",showInitialView:!0,tracking:Ember.inject.service("tracking"),init(){this._super()
this.showExapndedHighlightsButton=this._determineToShowExpandedHighlightsButton()
this.tracking.setupTrackableComponent(this)},actions:{toggleInitialView(){const{showInitialView:e}=this,t=e?"expand":"collapse"
this.tracking.fireInteractionEvent(`expanded_highlights_arrow_${t}`)
Ember.set(this,"showInitialView",!this.showInitialView)}},_determineToShowExpandedHighlightsButton(){const{highlights:e}=this
for(let t=0;t<e.length;t++)if(e.objectAt(t).getWithDefault("value.companyHighlightInfos",[]).length>5||e.objectAt(t).getWithDefault("value.referrerSourcesInfoArray",[]).length>5||e.objectAt(t).getWithDefault("value.occupationHighlightInfos",[]).length>5||e.objectAt(t).getWithDefault("value.regionHighlightInfos",[]).length>5)return!0
return!1}})
e.default=i})
define("content-analytics/components/tabs-view",["exports","content-analytics/templates/components/tabs-view","global-utils/utils/is-browser","content-analytics/utils/constants"],function(e,t,a,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=["VIDEO"]
var s=Ember.Component.extend({layout:t.default,router:Ember.inject.service("router"),isShowTooltip:!1,isTooltipAdded:!1,tooltipContainerId:`tooltipContainer-${Ember.guidFor(void 0)}`,tooltipId:`tooltip-${Ember.guidFor(void 0)}`,modalInfiniteScrollClass:n.INFINITE_SCROLLING_ELEMENT_CLASS.slice(1),isTooltipType:Ember.computed("shareType",(function(){return-1!==i.indexOf(this.shareType)})),shouldAddTooltip:Ember.computed("isTooltipType","isTooltipAdded",(function(){return this.isTooltipType&&!this.isTooltipAdded})),shouldShowSubHeader:Ember.computed("showNumReactions","showNumComments",(function(){return this.showNumReactions||this.showNumComments})),_addTooltipListener(e){this.addEventListener(e,"mouseenter",this._handleMouseEnter)
this.addEventListener(e,"mouseleave",this._handleMouseLeave)},_addTooltipComponent(e,t){e.appendChild(t)},_handleMouseEnter(){this.set("isShowTooltip",!0)},_handleMouseLeave(){this.set("isShowTooltip",!1)},selectedTab:Ember.computed("router.currentRouteName",(function(){const e=this.get("router.currentRouteName"),{showResharesTab:t}=this
if(!e)return n.VIEWS_TAB_NAME
const a=e.split(".").slice(-1)[0]
return t&&n.TABS_NAME_WHITELIST.includes(a)?a:n.VIEWS_TAB_NAME})).readOnly(),init(){this._super.apply(this,arguments)},didRender(){this._super.apply(this,arguments)
if(a.default&&this.shouldAddTooltip){const e=document.getElementById(this.tooltipContainerId),t=document.getElementById(this.tooltipId)
if(e){this._addTooltipListener(e)
this._addTooltipComponent(e,t)
this.set("isTooltipAdded",!0)}}}})
e.default=s})
define("content-analytics/helpers/get-expanded-highlights",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getHighlightsArray=a
e.default=void 0
const t=4
function a(e,a){let[n]=e
return a.showInitialView?n.slice(0,t):n}var n=Ember.Helper.helper(a)
e.default=n})
define("content-analytics/mixins/impression-tracking",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.Mixin.create({tracking:Ember.inject.service("tracking"),onImpression(e){if(this.element){const t=this.getImpressionTrackingInfo(e)
this.tracking.fireTrackingPayload(t.eventName,{[t.objectCollection]:[t.body]})}},getImpressionTrackingInfo(e){const{impressionEvent:t}=this,a={[t.object]:{objectUrn:this.objectUrn,trackingId:this.trackingId},visibleTime:e.visibleTime,duration:e.duration,listPosition:{index:this.index+1},size:{width:this.element.clientWidth,height:this.element.clientHeight}}
this.hasInsight&&(a.insight={trackingId:this.insightTrackingId,objectUrn:this.insightObjectUrn})
return Ember.assign({body:a},t)}})
e.default=t})
define("content-analytics/routes/application",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const t=["profile-subroutes"]
var a=Ember.Route.extend({parentPath(){let e=this._router.currentPath
e=(e=e.replace(/.*authentication./,"")).replace(`.${this._router.currentRouteName}`,"")
const a=t.find(t=>e.indexOf(t)>=0)
a&&(e=e.substr(e.lastIndexOf(a)))
return e},modalCloseTransitionMethod:"replaceWithExternal",afterModel(e){Ember.set(e,"parentPath",this.parentPath.bind(this))
Ember.set(e,"modalCloseTransitionMethod",this.modalCloseTransitionMethod)}})
e.default=a})
define("content-analytics/routes/content-analytics",["exports","content-analytics/utils/get-update-urn","content-analytics/utils/constants","feed-requests/updates","social-details/utils/get-reactions-total","content-analytics/utils/supported-social-update-type","content-analytics/utils/content-insights-utils","global-utils/utils/is-network-error"],function(e,t,a,n,i,s,r,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const l="header_title_video",c="header_title_image",d="header_title_post"
var u=Ember.Route.extend({pageKey:"flagship3_me_content_analytics",templateName:"content-analytics",formatter:Ember.inject.service("formatter"),store:Ember.inject.service("store"),tracking:Ember.inject.service("tracking"),lix:Ember.inject.service("lix"),jet:Ember.inject.service("jet"),authenticatedUser:Ember.inject.service("authentication@authenticated-user"),assetLoader:Ember.inject.service("asset-loader"),_currentTab:"",model(e){const i=e.contentUrn,{store:s}=this,r=(0,t.default)(i),l={q:"socialUpdateAnalytics",numHighlightInfos:9,urn:i},c=`identity/socialUpdateAnalytics|${l.q}|${l.numHighlightInfos}|${i}`,d=s.queryURL("identity/socialUpdateAnalytics",{cacheKey:c,params:l,reload:!0}),u=(0,n.findRequestV2)(r,"feed-item:phone"),m=s.queryURL(u).then(e=>e.get("elements.firstObject")).catch(e=>{this.jet.logError(new Error("Network request failed to get feed update for content analytics dashboard"),a.JET_TAGS_LEGACY.GET_FEED_UPDATE,!1)
if(e&&(e.isAdaptorError||(0,o.default)(e)))return Ember.Object.create({hasError:!0,updateError:e})
throw e})
return d.then(e=>{const t=`/voyager/api/identity/socialUpdateAnalyticsHeader/${i}`,n=s.queryURL(t,{cacheKey:i,reload:!0}).catch(e=>{this.jet.logError(new Error("Network request failed to get socialUpdateAnalytics header for content analytics dashboard"),a.JET_TAGS_LEGACY.GET_SOCIAL_UPDATE_ANALYTICS_HEADER,!1)
if(e&&(e.isAdaptorError||(0,o.default)(e)))return{hasError:e}
throw e})
return Ember.RSVP.hash({header:n,update:m,urn:i}).then(t=>t.header.hasError&&t.update?Ember.Object.create({hasError:!0,headerError:t.header.hasError,update:t.update}):Ember.Object.create({header:t.header,modules:e.get("elements"),update:t.update,urn:t.urn}))}).catch(e=>{this.jet.logError(new Error("Network request failed to get socialUpdateAnalytics for content analytics dashboard"),a.JET_TAGS_LEGACY.GET_SOCIAL_UPDATE_ANALYTICS,!1)
if(e&&(e.isAdaptorError||(0,o.default)(e)))return Ember.Object.create({hasError:!0,modulesError:e})
throw e})},afterModel(e,t){if(Ember.get(e,"headerError")&&Ember.get(e,"update")&&!(0,r.checkIfUserOwnsUpdateV2)(Ember.get(e,"update"),Ember.get(this,"authenticatedUser.miniProfile")))throw Ember.get(e,"headerError")
if(Ember.get(e,"hasError"))return
const n=Ember.get(e,"header.totalSocialActivityCounts.reactionTypeCounts"),o=(0,i.default)(n),u=o>0,m=Ember.get(e,"header.totalSocialActivityCounts.numComments")||0,p=m>0,h=Ember.get(e,"header.totalSocialActivityCounts.numShares")||0,g=e.get("header.socialUpdateType"),_=e.get("update.updateMetadata.shareAudience"),f=h>0&&(0,s.isSupportedSocialUpdateType)(g),b=f,y=e.get("urn")
f&&this._getReshareFeed(y).then(t=>{e.set("reshares",t)})
let v=null
const E=this._getCreatedDate(e),T=this._formatDate(E),{socialGestureHighlights:S}=this._getAnalyticsSections(e.get("modules"))
Ember.isPresent(S)&&"com.linkedin.voyager.identity.me.socialUpdateAnalytics.EmptyAnalyticsState"===Ember.get(S,"value.highlights.firstObject.value.$type")&&(v=Ember.get(S,"value.highlights.firstObject.value.title"))
const A=Ember.isPresent(S)&&!v,O=this._getHasAnalyticsExpired(E),I=!O&&Ember.isPresent(S)
let C=d
e.get("header.title")||(g===a.SOCIAL_UPDATE_TYPES.VIDEO?C=l:e.get("header.image.url")&&(C=c))
const P=!I,w=Ember.get(e,"header.totalSocialActivityCounts.numViews")||0,D=u&&p,N=`tooltip-${Ember.guidFor(this)}`
e.setProperties({createdDate:T,emptyAnalyticsExpirationMessage:v,hasAnalytics:I,hasAnalyticsExpired:O,hasNoAnalytics:P,headerTitleTemplateKey:C,isShowTooltip:!1,numComments:m,numReactions:o,numShares:h,numViews:w,reshareStart:10,shareType:g,shouldShowSocialGestureHighlights:A,showNumComments:p,showNumReactions:u,showNumShares:b,showSocialCounts:D,socialGestureHighlights:S,tooltipId:N})
"GROUP"!==_&&"CONNECTIONS"!==_||t.abort()},actions:{fireTabControlEvent(e){this.tracking.fireInteractionEvent(`content_analytics_${e}_tab`)},navigateToDetail(){const e=this.routeName,t=this.modelFor(e).get("update.updateMetadata.urn")
this.tracking.fireInteractionEvent("content_analytics_social_count")
this.transitionToExternal("feed.update",t)},getReshares(e){const t=this.routeName,a=this.modelFor(t)
if(!Ember.get(a,"reshares"))return Ember.RSVP.resolve(!0)
const{store:n}=this,i=a.get("urn"),s=e+10,r={start:e,q:"reshareFeed",targetUrn:i,count:10},o=`feed/updates|${r.q}|${r.count}|${r.start}|${i}`
return n.queryURL("feed/updatesV2",{cacheKey:o,params:r,reload:!0}).then(e=>{a.get("reshares.elements").pushObjects(e.get("elements"))
a.set("reshareStart",s)
return e.get("elements.firstObject")})},handleMouseEnter(e){"VIDEO"===e.shareType&&Ember.set(e,"isShowTooltip",!0)},handleMouseLeave(e){Ember.set(e,"isShowTooltip",!1)},changeTabs(e){if(a.TABS_NAME_WHITELIST.includes(e)){this._currentTab&&this.tracking.fireInteractionEvent(`content_analytics_${e}_tab`)
this._currentTab=e
e===a.VIEWS_TAB_NAME?this.transitionTo(this.routeName):this.transitionTo(`${this.routeName}.${e}`)}},onModalClose(){const{parentPath:e,modalCloseTransitionMethod:t}=this.modelFor("application")
this[t](e())},onRefreshRoute(){this.refresh()}},_getAnalyticsSections(e){const t={}
for(let a,n=0;n<e.length;n++)t[(a=e.objectAt(n)).get("value.sectionType")]=a
return t},_getReshareFeed(e){const{store:t}=this,a={q:"reshareFeed",targetUrn:e},n=`feed/updates|${a.q}|${e}`
return t.queryURL("feed/updatesV2",{cacheKey:n,params:a,reload:!0})},_getCreatedDate(e){const t=e.get("header.createdOn.year"),a=e.get("header.createdOn.month")-1,n=e.get("header.createdOn.day")
return new Date(t,a,n)},_formatDate(e){return this.formatter.formatDate(e,"fmt_mdy_long")},_getHasAnalyticsExpired:e=>Date.now()-e.getTime()>=a.ANALYTICS_EXPIRE_TIME})
e.default=u})
define("content-analytics/routes/post-analytics",["exports","content-analytics/routes/content-analytics"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var a=t.default.extend({pageKey:"flagship3_me_post_analytics"})
e.default=a})
define("content-analytics/routes/share-analytics",["exports","content-analytics/routes/content-analytics"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var a=t.default.extend({pageKey:"flagship3_me_share_analytics"})
e.default=a})
define("content-analytics/templates/application",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"/tofzJz2",block:'{"symbols":[],"statements":[[7,"div",true],[10,"id","me-ca"],[8],[0,"\\n  "],[1,[22,"outlet"],false],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"content-analytics/templates/application.hbs"}})
e.default=t})
define("content-analytics/templates/components/analytics-highlight",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"KBS5Zg7l",block:'{"symbols":["&default"],"statements":[[14,1,[[28,"hash",null,[["type","icon","showInitialView","isSlideshare","slideshareMigrationInfo","toggleInitialView","company","primaryHighlight","secondaryHighlight","expandedHighlightArray"],[[23,0,["type"]],[23,0,["icon"]],[23,0,["showInitialView"]],[23,0,["isSlideshare"]],[23,0,["model","migrationInfo"]],[28,"action",[[23,0,[]],"toggleInitialView"],null],[23,0,["model","miniCompany"]],[23,0,["model","highlight"]],[23,0,["model","secondaryHighlight"]],[23,0,["expandedHighlightArray"]]]]]]],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"content-analytics/templates/components/analytics-highlight.hbs"}})
e.default=t})
define("content-analytics/templates/components/content-insights/collapsible-card",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"NUwtUzKL",block:'{"symbols":["@navigateToLearnMoreView","&default"],"statements":[[0,"\\n"],[7,"div",true],[10,"class","ph5 pv4"],[8],[0,"\\n  "],[7,"span",true],[10,"class","display-flex justify-space-between"],[8],[0,"\\n    "],[7,"span",true],[10,"class","display-flex"],[8],[0,"\\n      "],[7,"h3",true],[10,"class","t-16"],[8],[0,"\\n"],[0,"        "],[1,[28,"t",[[23,0,["headerI18NText"]],"content-analytics/templates/components/content-insights/collapsible-card"],null],false],[0,"\\n"],[0,"      "],[9],[0,"\\n      "],[5,"artdeco-button@artdeco-button",[],[["@class","@type","@color","@controlType","@click"],[[29,["content-analytics-content-insights__learn-more-cta ",[23,0,["focusSelector"]]]],"tertiary","muted","button",[28,"action",[[23,0,[]],[23,1,[]]],null]]],{"statements":[[0,"\\n        "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size","a11y-text"],["question-pebble-icon","small",[28,"t",["i18n_learn_more_engagement_a11y","content-analytics/templates/components/content-insights/collapsible-card"],null]]]],false],[0,"\\n      "]],"parameters":[]}],[0,"\\n    "],[9],[0,"\\n    "],[7,"span",true],[8],[0,"\\n      "],[5,"artdeco-button@artdeco-button",[],[["@class","@type","@color","@controlType","@click"],["content-analytics-content-insights__collapse-card-cta","tertiary","muted","button",[28,"ember-simple-set-helper@set",[[23,0,[]],"isCardCollapsed",[28,"if",[[23,0,["isCardCollapsed"]],false,true],null]],null]]],{"statements":[[0,"\\n        "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size","a11y-text"],[[28,"if",[[23,0,["isCardCollapsed"]],"chevron-down-icon","chevron-up-icon"],null],"large",[28,"t",["i18n_learn_more_engagement_a11y","content-analytics/templates/components/content-insights/collapsible-card"],null]]]],false],[0,"\\n      "]],"parameters":[]}],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n\\n  "],[14,2,[[28,"hash",null,[["isCardCollapsed"],[[23,0,["isCardCollapsed"]]]]]]],[0,"\\n\\n  "],[7,"div",true],[10,"class","pt1"],[8],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"content-analytics/templates/components/content-insights/collapsible-card.hbs"}})
e.default=t})
define("content-analytics/templates/components/error-view",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"nZFoKBgl",block:'{"symbols":["modal"],"statements":[[0,"\\n"],[5,"artdeco-modal@artdeco-modal",[],[["@isOpen","@size","@dismissModal"],[true,"medium",[23,0,["onModalClose"]]]],{"statements":[[0,"\\n  "],[6,[23,1,["artdeco-modal-header"]],[],[[],[]],{"statements":[[0,"\\n    "],[7,"h6",true],[10,"id","content-analytics-error-modal__header"],[8],[0,"\\n      "],[1,[28,"t",["i18n_error_modal_header","content-analytics/templates/components/error-view"],null],false],[0,"\\n    "],[9],[0,"\\n  "]],"parameters":[]}],[0,"\\n  "],[6,[23,1,["artdeco-modal-content"]],[],[["@classNames"],["pb8 display-block"]],{"statements":[[0,"\\n    "],[5,"artdeco-empty-state@artdeco-empty-state",[],[["@headline","@illustration","@message"],[[28,"t",["i18n_error_headline","content-analytics/templates/components/error-view"],null],"sad-browser",[28,"t",["i18n_error_message","content-analytics/templates/components/error-view"],null]]]],[0,"\\n    "],[5,"artdeco-button@artdeco-button",[],[["@classNames","@text","@click"],["content-analytics-error-modal__cta-btn",[28,"t",["i18n_refresh_page","content-analytics/templates/components/error-view"],null],[28,"action",[[23,0,[]],[23,0,["onRefreshRoute"]]],null]]]],[0,"\\n  "]],"parameters":[]}],[0,"\\n"]],"parameters":[1]}],[0,"\\n\\n"]],"hasEval":false}',meta:{moduleName:"content-analytics/templates/components/error-view.hbs"}})
e.default=t})
define("content-analytics/templates/components/reshare-list",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"KC7PG6L9",block:'{"symbols":["reshare"],"statements":[[7,"div",true],[10,"class","ca-tabs__reshares feed-container-theme"],[8],[0,"\\n"],[4,"each",[[23,0,["reshares"]]],null,{"statements":[[0,"    "],[1,[28,"feed-shared@update/generic-update",null,[["model","hideCaEntryPoint"],[[23,1,[]],true]]],false],[0,"\\n"]],"parameters":[1]},null],[0,"\\n"],[4,"if",[[23,0,["isLoading"]]],null,{"statements":[[0,"    "],[1,[28,"artdeco-loader@artdeco-loader",null,[["size"],["small"]]],false],[0,"\\n"]],"parameters":[]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"content-analytics/templates/components/reshare-list.hbs"}})
e.default=t})
define("content-analytics/templates/components/single-view",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"+3lu6VGe",block:'{"symbols":[],"statements":[[0,"\\n"]],"hasEval":false}',meta:{moduleName:"content-analytics/templates/components/single-view.hbs"}})
e.default=t})
define("content-analytics/templates/components/social-gesture-highlights",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"aQ8KREHJ",block:'{"symbols":["highlight","index","highlight","highlight"],"statements":[[7,"div",true],[10,"class","ca-social-gesture-highlights__highlights"],[8],[0,"\\n"],[4,"each",[[23,0,["highlights"]]],null,{"statements":[[0,"    "],[7,"article",true],[10,"class","ca-social-gesture-highlights__carousel-item"],[8],[0,"\\n"],[4,"content-analytics@analytics-highlight",null,[["model","objectUrn","trackingId","index"],[[23,1,["value"]],[28,"unbound",[[23,1,["objectUrn"]]],null],[28,"unbound",[[23,1,["trackingId"]]],null],[23,2,[]]]],{"statements":[[0,"\\n        "],[7,"header",true],[10,"class","ca-analytics-highlight__image-container"],[11,"aria-labelledby",[29,["ca-analytics-highlight__primary-",[23,2,[]]]]],[8],[0,"\\n"],[4,"if",[[23,3,["company"]]],null,{"statements":[[4,"ember-engines@link-to-external",["companies.company",[23,3,["company","universalName"]]],[["data-control-name","class"],["analytics_company_logo","ca-analytics-highlight__logo-container ca-analytics-highlight__image"]],{"statements":[[0,"              "],[1,[28,"ember-vector-images@lazy-image",null,[["image","alt","class","desiredWidth","ghostType"],[[28,"unbound",[[23,3,["company","logo"]]],null],[28,"unbound",[[23,3,["company","name"]]],null],"ca-analytics-highlight__company-logo",100,"company"]]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},{"statements":[[0,"            "],[7,"span",true],[10,"class","visually-hidden"],[8],[1,[28,"if",[[23,3,["type"]],[28,"t",[[23,3,["type"]],"content-analytics/templates/components/social-gesture-highlights"],null]],null],false],[9],[0,"\\n            "],[7,"span",true],[11,"class",[29,["ca-analytics-highlight__icon ca-analytics-highlight__image ",[23,3,["icon"]]]]],[8],[0,"\\n"],[4,"if",[[23,3,["isSlideshare"]]],null,{"statements":[[0,"                "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","size"],["app-slideshare-icon","large"]]],false],[0,"\\n"]],"parameters":[]},null],[0,"            "],[9],[0,"\\n"]],"parameters":[]}],[0,"        "],[9],[0,"\\n        "],[7,"section",true],[10,"class","card ca-analytics-highlight__section"],[8],[0,"\\n          "],[7,"section",true],[10,"class","ca-analytics-highlight__message"],[8],[0,"\\n            "],[7,"h2",true],[11,"id",[29,["ca-analytics-highlight__primary-",[23,2,[]]]]],[10,"class","t-20 mt3 mb4"],[8],[0,"\\n              "],[1,[28,"global-helpers@attributed-text-html",[[23,3,["primaryHighlight"]]],null],false],[0,"\\n            "],[9],[0,"\\n            "],[7,"section",true],[10,"class","ca-analytics-highlight__info"],[8],[0,"\\n              "],[7,"ul",true],[10,"class","ca-analytics-highlight__info-list"],[8],[0,"\\n"],[4,"each",[[28,"content-analytics@get-expanded-highlights",[[23,3,["expandedHighlightArray"]]],[["showInitialView"],[[23,0,["showInitialView"]]]]]],null,{"statements":[[0,"                  "],[7,"li",true],[10,"class","ca-analytics-highlight__info-list-item display-flex justify-space-between t-16 t-black t-normal pt3 pb3 mr2 ml2"],[8],[0,"\\n                    "],[7,"span",true],[10,"class","text-align-left"],[8],[0,"\\n"],[4,"if",[[23,4,["miniCompany"]]],null,{"statements":[[0,"                        "],[1,[23,4,["miniCompany","name"]],false],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,4,["regionName"]]],null,{"statements":[[0,"                        "],[1,[23,4,["regionName"]],false],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,4,["viewerTitle"]]],null,{"statements":[[0,"                        "],[1,[23,4,["viewerTitle"]],false],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,4,["referrer"]]],null,{"statements":[[0,"                        "],[1,[23,4,["referrer","text"]],false],[0,"\\n                      "]],"parameters":[]},null]],"parameters":[]}]],"parameters":[]}]],"parameters":[]}],[0,"                    "],[9],[0,"\\n                    "],[7,"span",true],[8],[0,"\\n                      "],[1,[28,"ember-cli-pemberly-i18n@format-number",[[23,4,["numViews"]]],null],false],[0,"\\n                    "],[9],[0,"\\n                  "],[9],[0,"\\n"]],"parameters":[4]},null],[4,"if",[[23,3,["isSlideshare"]]],null,{"statements":[[0,"                  "],[7,"li",true],[10,"class","ca-analytics-highlight__info-list-item display-flex justify-space-between t-16 t-black t-normal pt3 pb3 mr2 ml2"],[8],[0,"\\n                    "],[1,[23,3,["slideshareMigrationInfo","text"]],false],[0,"\\n                  "],[9],[0,"\\n"]],"parameters":[]},null],[0,"              "],[9],[0,"\\n            "],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[3]},null],[0,"    "],[9],[0,"\\n"]],"parameters":[1,2]},null],[9],[0,"\\n"],[7,"div",true],[10,"class","ca-social-gesture-highlights__expand text-align-center"],[8],[0,"\\n"],[4,"if",[[28,"unbound",[[23,0,["showExapndedHighlightsButton"]]],null]],null,{"statements":[[0,"    "],[7,"button",false],[12,"class","ca-social-gesture-highlights__expand-action t-16 t-black t-normal pr2 pl2 pt5"],[12,"aria-expanded",[28,"if",[[23,0,["showInitialView"]],"false","true"],null]],[12,"type","button"],[3,"action",[[23,0,[]],"toggleInitialView"],[["bubbles"],[false]]],[8],[0,"\\n      "],[1,[28,"if",[[23,0,["showInitialView"]],[28,"t",["show_more","content-analytics/templates/components/social-gesture-highlights"],null],[28,"t",["show_less","content-analytics/templates/components/social-gesture-highlights"],null]],null],false],[0,"\\n      "],[1,[28,"artdeco-icons-web@li-icon",null,[["class","size","type"],["ca-social-gesture-highlights__expand-action-icon","large",[28,"if",[[23,0,["showInitialView"]],"chevron-down-icon","chevron-up-icon"],null]]]],false],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"content-analytics/templates/components/social-gesture-highlights.hbs"}})
e.default=t})
define("content-analytics/templates/components/tabs-view",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"k4q1uHr3",block:'{"symbols":["modal","tabs","tablist"],"statements":[[0,"\\n"],[4,"artdeco-modal@artdeco-modal",null,[["isOpen","headerId","dismissModal","modalClasses","size"],[true,"content-analytics-modal-label",[23,0,["onModalClose"]],"content-analytics-modal","x-large"]],{"statements":[[4,"component",[[28,"-assert-implicit-component-helper-argument",[[23,1,["artdeco-modal-header"]],"expected `modal.artdeco-modal-header` to be a contextual component but found a string. Did you mean `(component modal.artdeco-modal-header)`? (\'content-analytics/templates/components/tabs-view.hbs\' @ L39:C5) "],null]],[["classNames"],["display-flex flex-column"]],{"statements":[[0,"    "],[7,"h1",true],[10,"class","ca-activity-header__title t-20 t-black"],[10,"id","content-analytics-modal-label"],[8],[0,"\\n      "],[1,[28,"if",[[23,0,["header","title"]],[23,0,["header","title"]],[28,"t",[[23,0,["headerTitleTemplateKey"]],"content-analytics/templates/components/tabs-view"],[["date"],[[23,0,["createdDate"]]]]]],null],false],[0,"\\n    "],[9],[0,"\\n\\n"],[4,"if",[[23,0,["shouldShowSubHeader"]]],null,{"statements":[[0,"      "],[7,"div",true],[10,"class","mt1"],[8],[0,"\\n        "],[7,"button",false],[12,"role","link"],[12,"class","t-16 t-black--light t-bold"],[12,"type","button"],[3,"action",[[23,0,[]],[23,0,["onNavigateToDetail"]]],[["bubbles"],[false]]],[8],[0,"\\n"],[4,"if",[[23,0,["showNumReactions"]]],null,{"statements":[[0,"            "],[1,[28,"t",["header_count_reactions","content-analytics/templates/components/tabs-view"],[["numReactions"],[[23,0,["numReactions"]]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[28,"global-helpers@and",[[23,0,["showNumReactions"]],[23,0,["showNumComments"]]],null]],null,{"statements":[[0,"            ·\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,0,["showNumComments"]]],null,{"statements":[[0,"            "],[1,[28,"t",["header_count_comments","content-analytics/templates/components/tabs-view"],[["numComments"],[[23,0,["numComments"]]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"        "],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n"],[4,"component",[[28,"-assert-implicit-component-helper-argument",[[23,1,["artdeco-modal-content"]],"expected `modal.artdeco-modal-content` to be a contextual component but found a string. Did you mean `(component modal.artdeco-modal-content)`? (\'content-analytics/templates/components/tabs-view.hbs\' @ L69:C5) "],null]],[["classNames"],[[23,0,["modalInfiniteScrollClass"]]]],{"statements":[[4,"ember-cli-artdeco-tabs@artdeco-tabs",null,[["class","selection","activeTab"],["ca-activity-header__tabs",[23,0,["selectedTab"]],[23,0,["selectedTab"]]]],{"statements":[[4,"component",[[28,"-assert-implicit-component-helper-argument",[[23,2,["tablist"]],"expected `tabs.tablist` to be a contextual component but found a string. Did you mean `(component tabs.tablist)`? (\'content-analytics/templates/components/tabs-view.hbs\' @ L76:C9) "],null]],null,{"statements":[[4,"component",[[28,"-assert-implicit-component-helper-argument",[[23,3,["tab"]],"expected `tablist.tab` to be a contextual component but found a string. Did you mean `(component tablist.tab)`? (\'content-analytics/templates/components/tabs-view.hbs\' @ L77:C11) "],null],"views"],[["on-select","id","class"],[[28,"action",[[23,0,[]],[23,0,["onChangeTab"]]],null],[23,0,["tooltipContainerId"]],"ca-activity-header__analytics-tooltip-container ca-activity-header__tablist-views-tab"]],{"statements":[[4,"if",[[28,"global-helpers@eq",[[23,0,["header","socialUpdateType"]],"POST"],null]],null,{"statements":[[0,"            "],[1,[28,"t",["header_count_type_views","content-analytics/templates/components/tabs-view"],[["numViews","shareType"],[[23,0,["numViews"]],[23,0,["header","socialUpdateType"]]]]],false],[0,"\\n"]],"parameters":[]},{"statements":[[0,"            "],[1,[28,"t",["header_count_views","content-analytics/templates/components/tabs-view"],[["numViews"],[[23,0,["numViews"]]]]],false],[0,"\\n"]],"parameters":[]}]],"parameters":[]},null],[4,"if",[[23,0,["showResharesTab"]]],null,{"statements":[[4,"component",[[28,"-assert-implicit-component-helper-argument",[[23,3,["tab"]],"expected `tablist.tab` to be a contextual component but found a string. Did you mean `(component tablist.tab)`? (\'content-analytics/templates/components/tabs-view.hbs\' @ L86:C13) "],null],"reshares"],[["on-select","class"],[[28,"action",[[23,0,[]],[23,0,["onChangeTab"]]],null],"ca-activity-header__tablist-reshares-tab"]],{"statements":[[0,"            "],[1,[28,"t",["header_count_reshares","content-analytics/templates/components/tabs-view"],[["numShares"],[[23,0,["numShares"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[3]},null],[0,"\\n"],[4,"component",[[28,"-assert-implicit-component-helper-argument",[[23,2,["tabpanel"]],"expected `tabs.tabpanel` to be a contextual component but found a string. Did you mean `(component tabs.tabpanel)`? (\'content-analytics/templates/components/tabs-view.hbs\' @ L92:C9) "],null],"views"],null,{"statements":[[4,"if",[[23,0,["shouldShowSocialGestureHighlights"]]],null,{"statements":[[0,"          "],[1,[28,"content-analytics@social-gesture-highlights",null,[["highlights","contentType","index","objectUrn","trackingId"],[[23,0,["socialGestureHighlights","value","highlights"]],[23,0,["header","socialUpdateType"]],0,[23,0,["socialGestureHighlights","objectUrn"]],[23,0,["socialGestureHighlights","trackingId"]]]]],false],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[23,0,["emptyAnalyticsExpirationMessage"]]],null,{"statements":[[0,"          "],[7,"h2",true],[10,"class","ca-activity-header__null-analytics-title t-16 t-black--light t-normal"],[8],[0,"\\n            "],[1,[28,"rich-text@attributed-text",null,[["attributedText"],[[23,0,["emptyAnalyticsExpirationMessage"]]]]],false],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,0,["hasAnalyticsExpired"]]],null,{"statements":[[0,"          "],[7,"h2",true],[10,"class","ca-activity-header__null-analytics-title t-16 t-black--light t-normal"],[8],[0,"\\n            "],[1,[28,"t",["analytics_expired","content-analytics/templates/components/tabs-view"],null],false],[0,"\\n          "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[23,0,["hasNoAnalytics"]]],null,{"statements":[[0,"          "],[7,"h2",true],[10,"class","ca-activity-header__null-analytics-title t-16 t-black--light t-normal"],[8],[0,"\\n            "],[1,[28,"t",["analytics_not_available","content-analytics/templates/components/tabs-view"],null],false],[0,"\\n          "],[9],[0,"\\n        "]],"parameters":[]},null]],"parameters":[]}]],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[4,"if",[[23,0,["showResharesTab"]]],null,{"statements":[[4,"component",[[28,"-assert-implicit-component-helper-argument",[[23,2,["tabpanel"]],"expected `tabs.tabpanel` to be a contextual component but found a string. Did you mean `(component tabs.tabpanel)`? (\'content-analytics/templates/components/tabs-view.hbs\' @ L119:C11) "],null],"reshares"],null,{"statements":[[0,"          "],[1,[28,"content-analytics@reshare-list",null,[["reshares","reshareStart","numShares","onGetReshares"],[[23,0,["reshares"]],[23,0,["reshareStart"]],[23,0,["numShares"]],[23,0,["onGetReshares"]]]]],false],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"\\n"]],"parameters":[2]},null],[0,"\\n"],[4,"if",[[23,0,["isTooltipType"]]],null,{"statements":[[0,"      "],[7,"div",true],[11,"class",[29,["tooltip-inverse ca-activity-header__video-analytics-tooltip ",[28,"if",[[23,0,["isShowTooltip"]],"active"],null]]]],[10,"role","tooltip"],[11,"id",[23,0,["tooltipId"]]],[8],[0,"\\n        "],[7,"span",true],[8],[1,[28,"t",["views_on_your_video_tooltip","content-analytics/templates/components/tabs-view"],null],false],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"content-analytics/templates/components/tabs-view.hbs"}})
e.default=t})
define("content-analytics/templates/content-analytics",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"kOax6ijB",block:'{"symbols":[],"statements":[[7,"div",true],[10,"id","content-analytics"],[10,"class","ca-content-analytics"],[8],[0,"\\n"],[4,"if",[[23,0,["model","hasError"]]],null,{"statements":[[0,"    "],[5,"content-analytics@error-view",[],[["@onModalClose","@onRefreshRoute"],[[28,"ember-route-action-helper@route-action",["onModalClose"],null],[28,"ember-route-action-helper@route-action",["onRefreshRoute"],null]]]],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[1,[28,"content-analytics@tabs-view",null,[["activeTab","createdDate","hasAnalytics","hasNoAnalytics","hasAnalyticsExpired","emptyAnalyticsExpirationMessage","shouldShowSocialGestureHighlights","header","headerTitleTemplateKey","reshares","reshareStart","shareType","showNumComments","showNumReactions","showResharesTab","socialGestureHighlights","numComments","numShares","numViews","numReactions","onModalClose","onFireTabControlEvent","onGetReshares","onNavigateToDetail","onChangeTab"],[[23,0,["model","activeTab"]],[23,0,["model","createdDate"]],[23,0,["model","hasAnalytics"]],[23,0,["model","hasNoAnalytics"]],[23,0,["model","hasAnalyticsExpired"]],[23,0,["model","emptyAnalyticsExpirationMessage"]],[23,0,["model","shouldShowSocialGestureHighlights"]],[23,0,["model","header"]],[23,0,["model","headerTitleTemplateKey"]],[23,0,["model","reshares","elements"]],[23,0,["model","reshareStart"]],[23,0,["model","shareType"]],[23,0,["model","showNumComments"]],[23,0,["model","showNumReactions"]],[23,0,["model","showNumShares"]],[23,0,["model","socialGestureHighlights"]],[23,0,["model","numComments"]],[23,0,["model","numShares"]],[23,0,["model","numViews"]],[23,0,["model","numReactions"]],[28,"ember-route-action-helper@route-action",["onModalClose"],null],[28,"ember-route-action-helper@route-action",["fireTabControlEvent"],null],[28,"ember-route-action-helper@route-action",["getReshares"],null],[28,"ember-route-action-helper@route-action",["navigateToDetail"],null],[28,"ember-route-action-helper@route-action",["changeTabs"],null]]]],false],[0,"\\n"]],"parameters":[]}],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"content-analytics/templates/content-analytics.hbs"}})
e.default=t})
define("content-analytics/utils/analytics-module",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.onImpression=t
e.default=e.IMPRESSION_EVENT=void 0
function t(e){if(this.element){const t=this.getImpressionTrackingInfo(e)
t.body[this.get("impressionEvent.object")]=this.socialUpdateModuleType
this.tracking.fireTrackingPayload(t.eventName,{socialUpdate:{objectUrn:this.objectUrn,trackingId:this.trackingId},[t.objectCollection]:[t.body]})}}const a={eventName:"SocialUpdateAnalyticsModuleImpressionEvent",objectCollection:"analyticsModules",object:"analyticsModule"}
e.IMPRESSION_EVENT=a
var n={IMPRESSION_EVENT:a,onImpression:t,name:"analytics-module"}
e.default=n})
define("content-analytics/utils/constants",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.JET_TAGS=e.JET_TAGS_LEGACY=e.SUPPORTED_URN_TYPES=e.SUPPORTED_URN_TYPE_MAP=e.SOCIAL_UPDATE_TYPES=e.INFINITE_SCROLLING_ELEMENT_CLASS=e.TABS_NAME_WHITELIST=e.VIEWS_TAB_NAME=e.RESHARES_TAB_NAME=e.LIX=e.ANALYTICS_EXPIRE_TIME=void 0
e.ANALYTICS_EXPIRE_TIME=63072e6
e.LIX={}
e.RESHARES_TAB_NAME="reshares"
e.VIEWS_TAB_NAME="views"
const t=["reshares","views"]
e.TABS_NAME_WHITELIST=t
e.INFINITE_SCROLLING_ELEMENT_CLASS=".ca-modal__content"
e.SOCIAL_UPDATE_TYPES={VIDEO:"VIDEO",POST:"POST",SHARE:"SHARE"}
const a={article:"article",activity:"activity",linkedInArticle:"linkedInArticle",profilePost:"linkedInArticle",share:"share",ugcPost:"ugcPost"}
e.SUPPORTED_URN_TYPE_MAP=a
const n=Object.keys(a)
e.SUPPORTED_URN_TYPES=n
const i=Object.freeze({GET_FEED_UPDATE:"content-analytics-legacy-feed-update",GET_SOCIAL_UPDATE_ANALYTICS_HEADER:"content-analytics-legacy-social-update-analytics-header",GET_SOCIAL_UPDATE_ANALYTICS:"content-analytics-legacy-social-update-analytics"})
e.JET_TAGS_LEGACY=i
const s=Object.freeze({GET_FEED_UPDATE:"content-insights-feed-update"})
e.JET_TAGS=s})
define("content-analytics/utils/content-insights-utils",["exports","global-utils/utils/urn-converter"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.checkIfUserOwnsUpdateV2=function(e,a){const n=(0,t.fromUrn)(Ember.get(e,"actor.urn")).id
return(0,t.fromUrn)(Ember.get(a,"objectUrn")).id===n}})
define("content-analytics/utils/get-update-urn",["exports","urn-utils","content-analytics/utils/constants"],function(e,t,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=function(e){const{type:n,id:i}=(0,t.extractEntityInfoFromUrn)(e)
if(!i)return e
if(!a.SUPPORTED_URN_TYPES.includes(n))throw new Error("Unsupported urn type provided to content analytics")
const s=a.SUPPORTED_URN_TYPE_MAP[n],r=i.split(",")[0]
return`${s}:${r}`}})
define("content-analytics/utils/supported-social-update-type",["exports","content-analytics/utils/constants"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.isSupportedSocialUpdateType=function(e){return Object.values(t.SOCIAL_UPDATE_TYPES).indexOf(e)>-1}})
define("heathrow/components/heathrow-toast",["exports","@babel/runtime/helpers/esm/toConsumableArray","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember-decorators/component"],function(e,t,a,n,i,s,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var o,l,c,d,u,m,p
let h=(o=(0,r.tagName)("section"),l=(0,r.classNames)("mn-heathrow-toast","artdeco-card"),c=Ember.inject.service("tracking"),d=Ember._action,o(u=l(u=(m=class extends Ember.Component{constructor(){super(...arguments);(0,a.default)(this,"tracking",p,this);(0,n.default)(this,"isMarkedUnknown",!1)}init(){super.init.apply(this,arguments)
const{inviteActionFailed:e}=this
Ember.setProperties(this,{showMarkUnknownBtn:!e&&this.ignoreInvite,showPersonPicture:this.acceptInvite&&!e||this.sendInvite})}rejectInvitationWithAction(e){var a
this.tracking.fireInteractionEvent("i_don't_know")
Ember.set(this,"isMarkedUnknown",!0)
null===(a=this.rejectInvitationAction)||void 0===a||a.call.apply(a,[this].concat((0,t.default)(e)))}},p=(0,i.default)(m.prototype,"tracking",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(m.prototype,"rejectInvitationWithAction",[d],Object.getOwnPropertyDescriptor(m.prototype,"rejectInvitationWithAction"),m.prototype),m))||u)||u)
e.default=h})
define("heathrow/services/heathrow",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","global-utils/utils/is-browser","ember-cli-pemberly-tracking/utils/tracking","heathrow/utils/constants"],function(e,t,a,n,i,s,r,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var l,c,d,u,m,p,h,g,_,f,b
let y=(l=Ember.inject.service("store"),c=Ember.inject.service("tracking"),d=Ember.inject.service("lego@tracking"),u=Ember.inject.service("global-services@local-storage"),m=Ember.inject.service("lix"),p=class extends Ember.Service{constructor(){super(...arguments);(0,t.default)(this,"store",h,this);(0,t.default)(this,"tracking",g,this);(0,t.default)(this,"legoTracking",_,this);(0,t.default)(this,"localStorage",f,this);(0,t.default)(this,"lix",b,this)}_hasSeenPhoto(){const{localStorage:e}=this
if(e&&e.cacheAvailable){const t=(new Date).getTime(),a=e.getKeyedObject("heathrowPhotoTimestamp",0),n=a&&a.lastSeen
if(n)return Math.abs(t-n)<864e5}return!1}_normalizeEntityName(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(/[/.]/).pop().replace("-","").toLowerCase()}_getRouteServed(e,t,a){const n=this._normalizeEntityName(t),i={abiroute:function(e){return"SKIP_SPLASH"===e?o.HEATHROW_ROUTES.ABI_RESULTS_LANDING:o.HEATHROW_ROUTES.ABI_SPLASH},feedroute:o.HEATHROW_ROUTES.FEED,pymkroute:o.HEATHROW_ROUTES.PYMK,profilephotouploadroute:this._hasSeenPhoto()?o.HEATHROW_ROUTES.PYMK:o.HEATHROW_ROUTES.PROFILE_PHOTO_UPLOAD,genericroute:o.HEATHROW_ROUTES.GENERIC_ROUTE,entityactivityfeedroute:o.HEATHROW_ROUTES.ENTITY_ACTIVITY_FEED,colleaguesroute:o.HEATHROW_ROUTES.COLLEAGUES,default:e.get("fallbackRoute")||o.HEATHROW_ROUTES.PYMK}
return n===o.HEATHROW_NORMAL_NAME_MAP.ABI?i[n](a):i[n]||i.default}_handleSuggestedRouteResponse(e){const t=e.get("elements.firstObject.route"),a=e.get("elements.firstObject.suggestedRoute"),n=t.get("splashOperation"),{emberEntityName:i,legoTrackingToken:s,$type:r}=Ember.getProperties(t,"emberEntityName","legoTrackingToken","$type"),l=this._getRouteServed(t,i||r,n)
this._fireSuggestedRouteActionEvent(this.trackingId,a||l)
s&&this._fireLegoImpressionEvent(s)
return l===o.HEATHROW_ROUTES.GENERIC_ROUTE?{route:a}:l===o.HEATHROW_ROUTES.COLLEAGUES?{route:l,colleaguesCompanyUrn:e.get("elements.firstObject.route.miniCompany.entityUrn")}:{route:l}}organicAbiShouldSkipImport(){if(!s.default)return Ember.RSVP.resolve(!1)
const e=o.HEATHROW_ROUTES.ORGANIC_ABI,t=o.HEATHROW_USER_ACTION_TYPES.USER_NAVIGATION,a=[o.HEATHROW_ROUTES.ABI_RESULTS_LANDING,o.HEATHROW_ROUTES.ABI_SPLASH]
return this.getSuggestedRoute(e,t,a).then(e=>{let{route:t}=e
return o.HEATHROW_ROUTES.ABI_RESULTS_LANDING===t})}_fireSuggestedRouteRequestEvent(e,t,a){this.tracking.fireTrackingPayload("SuggestedRouteRequestEvent",{trackingId:a,origin:e,userActionType:t})}_fireSuggestedRouteActionEvent(e,t,a){this.tracking.fireTrackingPayload("SuggestedRouteActionEvent",{trackingId:e,routeServed:t,error:a})}_fireLegoImpressionEvent(e){const{legoTracking:t}=this
t.sendLegoImpression(e,t.LEGO_IMPRESSION_VISIBILITY_SHOW)}getSuggestedRoute(e,t,a,n){const i=(0,r.generateTrackingId)(),s={origin:e,trackingId:i,userActionType:t,q:"viewerAndAction",platform:"DESKTOP"}
this.setProperties({trackingId:i})
n&&(s.actor=n)
a&&a.length>0&&Ember.assign(s,{list:[{key:"supportedRoutes",values:a}]})
this._fireSuggestedRouteRequestEvent(e,t,i)
let o="growth/suggestedRoutes"
const l=Object.keys(s)
for(let r=0;r<l.length;r++){const e=s[l[r]]
o+=`|${"object"==typeof e?JSON.stringify(e):e}`}return this.store.queryURL("growth/suggestedRoutes",{cacheKey:o,params:s,reload:!0}).then(e=>this._handleSuggestedRouteResponse(e))}},h=(0,n.default)(p.prototype,"store",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=(0,n.default)(p.prototype,"tracking",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=(0,n.default)(p.prototype,"legoTracking",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=(0,n.default)(p.prototype,"localStorage",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=(0,n.default)(p.prototype,"lix",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p)
e.default=y})
define("heathrow/utils/constants",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.HEATHROW_NORMAL_NAME_MAP=e.HEATHROW_USER_ACTION_TYPES=e.HEATHROW_ROUTE_MAP=e.HEATHROW_ROUTES=void 0
e.HEATHROW_ROUTES={ABI_SPLASH:"ABI_SPLASH",ABI_RESULTS_LANDING:"ABI_RESULTS_LANDING",ORGANIC_ABI:"ORGANIC_ABI",FEED:"FEED",PYMK:"PYMK",SPLASH:"SPLASH",PROFILE_PHOTO_UPLOAD:"PROFILE_PHOTO_UPLOAD",ENTITY_ACTIVITY_FEED:"ENTITY_ACTIVITY_FEED",GENERIC_ROUTE:"GENERIC_ROUTE",GET_THE_APP:"GET_THE_APP",FOLLOW_HUB:"FOLLOW_HUB",COLLEAGUES:"COLLEAGUES"}
e.HEATHROW_ROUTE_MAP={ABI_SPLASH:"abi.intro",ABI_RESULTS_LANDING:"abi.results",FEED:"feed.index",PROFILE_PHOTO_UPLOAD:"mynetwork.index",ENTITY_ACTIVITY_FEED:"profile-subroutes.detail-recent-activity",PYMK:"index",GET_THE_APP:"index",FOLLOW_HUB:"feed.follow.confirmation.invite-accept",COLLEAGUES:"index"}
e.HEATHROW_USER_ACTION_TYPES={USER_NAVIGATION:"USER_NAVIGATION",ACCEPT_INVITATION:"ACCEPT_INVITATION",INVITATION_ACCEPTANCE_NOTIFICATION:"INVITATION_ACCEPTANCE_NOTIFICATION",CONNECT:"CONNECT",IGNORE_INVTATION:"IGNORE_INVTATION"}
e.HEATHROW_NORMAL_NAME_MAP={ABI:"abiroute",FEED:"feedroute",PYMK:"pymkroute",PROFILE_PHOTO_UPLOAD:"profilephotouploadroute"}})
define("sticky/components/collapsable-sticky-header",["exports","sticky/templates/components/collapsable-sticky-header","ember-singularity-mixins/mixins/scroll-handler","global-utils/utils/is-browser"],function(e,t,a,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var i=Ember.Component.extend(a.default,{layout:t.default,classNames:["collapsable-sticky-header"],classNameBindings:["showHeader"],scrollPosition:0,showHeader:!0,minScrollPosition:48,_updateShowHeader(){if(n.default){const e=window.pageYOffset<0?0:window.pageYOffset,t=e-this.scrollPosition,{minScrollPosition:a}=this
Ember.setProperties(this,{showHeader:e<=a||t<0,scrollPosition:e})}},scroll(){this._updateShowHeader()
this.debounceTask("_updateShowHeader",200)}})
e.default=i})
define("sticky/components/sticky-container",["exports","ember-batcher","ember-singularity-mixins/mixins/scroll-handler","global-utils/utils/is-browser","sticky/templates/components/sticky-container"],function(e,t,a,n,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const s="UP_SCROLL",r="DOWN_SCROLL"
var o=Ember.Component.extend(a.default,{layout:i.default,lix:Ember.inject.service("lix"),windowService:Ember.inject.service("global-services@window"),classNames:["sticky"],classNameBindings:["stuck","bottomStuck"],offset:void 0,bottomOffset:void 0,bottomStickyEnabled:void 0,stuck:!1,topMargin:0,shouldSetChildDimensions:!0,_lastScrollPosition:0,setChildDimension(){this.shouldSetChildDimensions&&(0,t.readDOM)(()=>{if(this.isDestroying)return
const e=this.getElement(),a=e.firstElementChild
if(!a)return
const n=a.clientHeight,i=a.clientWidth;(0,t.mutateDOM)(()=>{if(!this.isDestroying){e.style.height=`${n}px`
e.style.width=`${i}px`
e.style.margin="0 auto"}})})},didRender(){this.setChildDimension()},didInsertElement(){this.scroll()},getElement(){return this.element},scroll(){if(this.bottomStickyEnabled){this._updateBottomTopStuck()
this.debounceTask("_updateBottomTopStuck",200)}else if(this.bottomStickyOnly){this._updateBottomStuck()
this.debounceTask("_updateBottomStuck",200)}else{this._updateStuck()
this.debounceTask("_updateStuck",200)}},_updateStuck(){(0,t.readDOM)(()=>{if(n.default&&!this.isDestroying){const e=this.getElement().getBoundingClientRect(),a=Ember.getWithDefault(this,"offset",52);(0,t.mutateDOM)(()=>{this.isDestroying||Ember.set(this,"stuck",Math.round(e.top)<a)})}})},_updateBottomStuck(){(0,t.readDOM)(()=>{if(n.default&&!this.isDestroying){const e=this.getElement().getBoundingClientRect(),a=Ember.get(this,"windowService.window").innerHeight;(0,t.mutateDOM)(()=>{this.isDestroying||Ember.set(this,"bottomStuck",Math.round(e.bottom)>a)})}})},_updateBottomTopStuck(){(0,t.readDOM)(()=>{if(n.default&&!this.isDestroying){const e=this.getElement(),a=e.getBoundingClientRect(),n=Ember.getWithDefault(this,"offset",52),i=Ember.getWithDefault(this,"bottomOffset",12),o=Ember.get(this,"windowService.window"),l=e.firstElementChild,c=o.pageYOffset,d=this._lastScrollPosition
Ember.set(this,"_lastScrollPosition",c)
const u=o.innerHeight,m=Math.round(a.height)>u-n,p=Math.round(a.bottom)<=u-i,h=m&&p;(0,t.mutateDOM)(()=>{if(!this.isDestroying)if(h){const e=Math.abs(c-d),t=l.style.bottom||`${i}px`,o=parseInt(t.split("px")[0],10)
let m,p
switch(this._getScrollDirection(c,d)){case s:p=-1*(a.height-u+n+this.topMargin)
m=Math.max(p,o-e)
break
case r:m=Math.min(i,o+e)}if(m){Ember.set(this,"bottomStuck",!0)
l.style.bottom=`${m}px`}}else if(m){if(a.top>=n){Ember.set(this,"bottomStuck",!1)
l.style.bottom=""}}else{Ember.setProperties(this,{bottomStuck:!1,stuck:a.top<n})
l.style.bottom=""}})}})},_getScrollDirection:(e,t)=>e<t?s:e>t?r:void 0})
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
define("video-analytics/components/audience-tab",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.Component
e.default=t})
define("video-analytics/components/content-header",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.Component
e.default=t})
define("video-analytics/components/engagement-highlights",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.Component
e.default=t})
define("video-analytics/components/high-charts-container",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","ember-highcharts/components/high-charts","video-analytics/utils/common","video-analytics/templates/components/video-performance-graph"],function(e,t,a,n,i,s,r,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var l,c,d,u,m
const p=60,h="#fff",g="#d9d9d9",_="rgba(0, 0, 0, 0.1)",f="rgba(0, 0, 0, 0.15)",b="rgba(0, 0, 0, 0.55)",y=Object.freeze({chart:{type:"line",style:{fontFamily:"inherit"},height:400,spacingLeft:14,spacingRight:24,spacingTop:24,spacingBottom:12},title:{text:null},legend:{itemStyle:{color:b,fontWeight:"null",fontSize:"14px"},enabled:!0,align:"left",verticalAlign:"bottom",x:30,layout:"horizontal",alignColumns:!1},tooltip:{useHTML:!0,backgroundColor:h,borderColor:_,style:{fontSize:"12px"},padding:0},plotOptions:{series:{marker:{enabled:!1,fillColor:h,lineWidth:2,radius:5}}},xAxis:{allowDecimals:!1,type:"datetime",minRange:1,labels:{style:{fontSize:"12px",color:b}},crosshair:{color:f,width:2},startOnTick:!1,minorTickLength:0,tickLength:0},yAxis:{allowDecimals:!1,title:null,labels:{style:{fontSize:"12px",color:b}},gridLineColor:g,gridLineWidth:1,plotLines:[{color:f,width:2,value:0,zIndex:5}]}})
function v(e,t){const a=e.getMessageRenderer(o.default,"i18n_high_charts_container_cvc_xaxis_labels"),n=new Date(t)
return a([{numMinutes:n.getHours()*p+n.getMinutes()}])}let E=(l=Ember.inject.service("formatter"),c=Ember.inject.service("i18n"),d=class extends s.default{constructor(){super(...arguments);(0,t.default)(this,"formatter",u,this);(0,t.default)(this,"i18n",m,this);(0,a.default)(this,"theme",y)}init(){super.init.apply(this,arguments)
Ember.set(this,"chartOptions",(function(e,t,a){const n=t===r.GRAPH_CONTENT_TYPES.SHOW_CVC
return{tooltip:{formatter(){return`${this.point.series.name}: ${e.formatNumber(this.y)}`}},legend:{opposite:Ember.get(a,"i18nRtlLanguage")},xAxis:{labels:{formatter(){return n?v(a,this.value):e.formatDate(this.value,"fmt_mdy_medium")}},reversed:Ember.get(a,"i18nRtlLanguage")},yAxis:{labels:{formatter(){return e.formatNumber(this.value)}},opposite:Ember.get(a,"i18nRtlLanguage")}}})(this.formatter,this.graphContentType,this.i18n))}didUpdateAttrs(){super.didUpdateAttrs.apply(this,arguments)
this._redrawChart()}_redrawChart(){const{chart:e,content:t,i18n:a,formatter:n}=this,i=Ember.get(t,"0.data")
if(!e||!t||Ember.isEmpty(i))return
const s=i.length,o=i.mapBy("x").filter((e,t)=>t%Math.ceil(s/13)==0),l=this.graphContentType===r.GRAPH_CONTENT_TYPES.SHOW_CVC
e.xAxis[0].update({tickPositions:o,labels:{formatter(){return l?v(a,this.value):n.formatDate(this.value,"fmt_mdy_medium")}}})}},u=(0,n.default)(d.prototype,"formatter",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=(0,n.default)(d.prototype,"i18n",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d)
e.default=E})
define("video-analytics/components/va-entry-point",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember-decorators/component","ember-cli-pemberly-tracking/utils/tracking","video-analytics/templates/components/va-entry-point"],function(e,t,a,n,i,s,r,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var l,c,d,u,m,p,h,g
let _=(l=(0,s.layout)(o.default),c=(0,s.classNames)("video-analytics-entry-point"),d=Ember.inject.service("tracking"),u=Ember.inject.service("lix"),l(m=c(m=(p=class extends Ember.Component{constructor(){super(...arguments);(0,t.default)(this,"tracking",h,this);(0,t.default)(this,"lix",g,this);(0,a.default)(this,"data-test-va-entry-point",!0)}init(){super.init.apply(this,arguments)
this.tracking.setupTrackableComponent(this)}onImpression(e){this.isDestroying||this.tracking.fireTrackingPayload("SocialUpdateAnalyticsEntryPointImpressionEvent",{socialUpdate:{objectUrn:this.entityUrn,trackingId:(0,r.generateTrackingId)()},analyticsEntryPoints:[{analyticsEntryPoint:this.videoAnalyticsRouteName,visibleTime:e.visibleTime,duration:e.duration,listPosition:{index:0},size:{width:this.element.clientWidth,height:this.element.clientHeight}}]})}},h=(0,n.default)(p.prototype,"tracking",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=(0,n.default)(p.prototype,"lix",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p))||m)||m)
e.default=_})
define("video-analytics/components/video-performance-graph",["exports","@babel/runtime/helpers/esm/toConsumableArray","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember-decorators/component","global-utils/utils/get-asset-url-for-environment","ember-copy","video-analytics/templates/components/video-performance-graph","video-analytics/utils/common"],function(e,t,a,n,i,s,r,o,l,c,d){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var u,m,p,h,g,_,f,b,y,v,E,T,S,A,O,I,C
function P(e){return e.some(e=>{let{infos:t}=e
return t.length>0})}function w(e,t){return e.reduce((e,a)=>{e[a.type]=a[t]
return e},{})}let D=(u=(0,r.layout)(c.default),m=Ember.inject.service("asset-loader"),p=Ember.inject.service("i18n"),h=Ember.computed.notEmpty("cvcSocialUpdateStatisticsData.infos").readOnly(),g=Ember.computed.and("isLiveVideo","isCvcSocialUpdateStatisticsDataNotEmpty").readOnly(),_=Ember.computed.readOnly("cvcSocialUpdateStatisticsData.peakCount"),f=Ember.computed("weeklySocialUpdateStatisticsData").readOnly(),b=Ember.computed("isDisplayDailyData","dailySocialUpdateStatisticsData","weeklySocialUpdateStatisticsData").readOnly(),y=Ember.computed("isDisplayDailyData","graphContentType","cvcSocialUpdateStatisticsData","dailySocialUpdateStatisticsData","weeklySocialUpdateStatisticsData").readOnly(),v=Ember._action,u(E=(T=class extends Ember.Component{constructor(){super(...arguments);(0,a.default)(this,"assetLoader",S,this);(0,a.default)(this,"i18n",A,this);(0,n.default)(this,"GRAPH_CONTENT_TYPES",d.GRAPH_CONTENT_TYPES);(0,n.default)(this,"isDisplayDailyData",!0);(0,n.default)(this,"isChartDataAvailable",!0);(0,n.default)(this,"isDisableWeeklyRadioButton",!1);(0,a.default)(this,"isCvcSocialUpdateStatisticsDataNotEmpty",O,this);(0,a.default)(this,"isShowCvcTab",I,this);(0,a.default)(this,"cvcPeakCount",C,this);(0,n.default)(this,"graphContentType",d.GRAPH_CONTENT_TYPES.SHOW_TOTAL_TIME_WATCH);(0,n.default)(this,"isHighchartDependencyReady",!1)}get totalCounts(){return w(this.weeklySocialUpdateStatisticsData,"totalCount")}get currentCounts(){return w(this.isDisplayDailyData?this.dailySocialUpdateStatisticsData:this.weeklySocialUpdateStatisticsData,"currentCount")}get highChartData(){const{isDisplayDailyData:e,graphContentType:a,cvcSocialUpdateStatisticsData:n}=this,i=e?this.dailySocialUpdateStatisticsData:this.weeklySocialUpdateStatisticsData
return (function(e,t,a){const n=e.findBy("type",t)||{}
return[{data:(0,l.copy)(Ember.get(n,"infos"),!0),name:a[t],color:"#0091CA",marker:{lineColor:"#0091CA",symbol:"circle"},visible:!0}]})([n].concat((0,t.default)(i)),a,this.legendTexts)}init(){super.init.apply(this,arguments)
Ember.set(this,"legendTexts",(function(e){let{i18n:t,layout:a}=e
return Object.entries({CONCURRENT_VIEWER_COUNT:"i18n_engagement_metrics_cvc",TIME_WATCHED:"i18n_engagement_metrics_total_watch_time",PLAYS:"i18n_engagement_metrics_total_views",UNIQUE_PLAYS:"i18n_engagement_metrics_total_viewers"}).reduce((e,n)=>{let[i,s]=n
e[i]=t.getMessageRenderer(a,s)()
return e},{})})({i18n:this.i18n,layout:this.layout}))}didReceiveAttrs(){const{isShowCvcTab:e,cvcSocialUpdateStatisticsData:a,dailySocialUpdateStatisticsData:n,weeklySocialUpdateStatisticsData:i}=this
let s=[].concat((0,t.default)(n),(0,t.default)(i))
if(e){Ember.set(this,"graphContentType",d.GRAPH_CONTENT_TYPES.SHOW_CVC)
s=[a].concat((0,t.default)(s))}P(s)||Ember.set(this,"isChartDataAvailable",!1)
P(i)||Ember.set(this,"isDisableWeeklyRadioButton",!0)
this.isHighchartDependencyReady||this.loadHighchartDependency().then(()=>{this.isDestroying||Ember.set(this,"isHighchartDependencyReady",!0)})}loadHighchartDependency(){return new Ember.RSVP.Promise((e,t)=>{this.assetLoader.loadAsset({uri:(0,o.default)("assets/highcharts/highcharts.js"),type:"js"}).then(e).catch(a=>{if(this.isDestroying||"AssetLoadError"!==a.name)t(a)
else{Ember.Logger.warn(`There was an error trying to load the assets for video analytics chart: ${a}`)
a.retryLoad().then(e).catch(t)}})})}updateGraph(e){Ember.set(this,"graphContentType",e)}},S=(0,i.default)(T.prototype,"assetLoader",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=(0,i.default)(T.prototype,"i18n",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=(0,i.default)(T.prototype,"isCvcSocialUpdateStatisticsDataNotEmpty",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=(0,i.default)(T.prototype,"isShowCvcTab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=(0,i.default)(T.prototype,"cvcPeakCount",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(T.prototype,"totalCounts",[f],Object.getOwnPropertyDescriptor(T.prototype,"totalCounts"),T.prototype),(0,i.default)(T.prototype,"currentCounts",[b],Object.getOwnPropertyDescriptor(T.prototype,"currentCounts"),T.prototype),(0,i.default)(T.prototype,"highChartData",[y],Object.getOwnPropertyDescriptor(T.prototype,"highChartData"),T.prototype),(0,i.default)(T.prototype,"updateGraph",[v],Object.getOwnPropertyDescriptor(T.prototype,"updateGraph"),T.prototype),T))||E)
e.default=D})
define("video-analytics/controllers/index",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","global-utils/utils/is-browser","video-analytics/utils/get-feed-update","video-analytics/utils/get-reshares","video-analytics/utils/get-social-counts","video-analytics/utils/get-social-gesture-highlights","video-analytics/utils/get-social-update-statistics","video-analytics/utils/constants"],function(e,t,a,n,i,s,r,o,l,c,d,u){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var m,p,h,g,_,f,b,y,v,E,T,S,A,O,I,C,P,w,D,N,R,x,M,k,H,U,L
let j=(m=Ember.inject.service("global-services@window"),p=Ember.inject.service("router"),h=Ember.inject.service("store"),g=Ember.computed.readOnly("carouselPath.lastObject"),_=Ember.computed("model.feedUpdate").readOnly(),f=Ember.computed("model.socialDetail").readOnly(),b=Ember.computed.equal("model.feedUpdate.updateMetadata.detailPageType","LIVE_VIDEO").readOnly(),y=Ember.computed("model.socialGestureHighlights").readOnly(),v=Ember.computed("socialGestureHighlightsData").readOnly(),E=Ember.computed("model.dailySocialUpdateStatistics").readOnly(),T=Ember.computed("model.weeklySocialUpdateStatistics").readOnly(),S=Ember.computed("model.cvcSocialUpdateStatistics").readOnly(),A=Ember.computed.readOnly("model.reshares.elements"),O=Ember.computed("isLiveVideo","headerData.duration","cvcSocialUpdateStatisticsData").readOnly(),I=Ember.computed.readOnly("model.dailySocialUpdateStatistics.elements.firstObject.createdAt"),C=Ember._action,P=Ember._action,w=Ember._action,D=Ember._action,N=class extends Ember.Controller{constructor(){super(...arguments);(0,t.default)(this,"windowService",R,this);(0,t.default)(this,"router",x,this);(0,t.default)(this,"store",M,this);(0,t.default)(this,"currentCarouselPath",k,this);(0,t.default)(this,"isLiveVideo",H,this);(0,t.default)(this,"resharesData",U,this);(0,t.default)(this,"createdAtTimestamp",L,this)}get headerData(){return(0,r.extractUpdateData)(Ember.get(this,"model.feedUpdate"))}get socialCountsData(){return(0,l.extractSocialCountsData)(Ember.get(this,"model.socialDetail"))}get socialGestureHighlightsData(){return(0,c.extractSocialGestureHighlightsData)(Ember.get(this,"model.socialGestureHighlights"))}get isSocialGestureHighlightsAvailable(){return(0,c.isSocialGestureHighlightsDataAvailable)(this.socialGestureHighlightsData)}get dailySocialUpdateStatisticsData(){return(0,d.formatSocialUpdateStatistics)(Ember.get(this,"model.dailySocialUpdateStatistics"))}get weeklySocialUpdateStatisticsData(){return(0,d.formatSocialUpdateStatistics)(Ember.get(this,"model.weeklySocialUpdateStatistics"),!0)}get cvcSocialUpdateStatisticsData(){return(0,d.formatCvcSocialUpdateStatistics)(Ember.get(this,"model.cvcSocialUpdateStatistics"))}get videoDuration(){return this.isLiveVideo?(0,d.getLiveVideoDuration)(this.cvcSocialUpdateStatisticsData):Ember.get(this,"headerData.duration")}init(){super.init.apply(this,arguments)
const e={reshare:"reshare",videoAnalytics:"videoAnalytics"}
Ember.setProperties(this,{carouselItemMap:e,carouselPath:[e.videoAnalytics]})}dismissModal(){const{carouselItemMap:e}=this
Ember.set(this,"carouselPath",[e.videoAnalytics])
const t=s.default&&this.windowService.getHistory()
if(t.length>2&&!Ember.testing)t.back()
else{const e=Ember.get(this,"router.currentRouteName")
this.transitionToRoute(u.VIDEO_ANALYTICS_TRANSITION_BACK_ROUTE_MAP[e]||"index")}}setCarouselPathToReshare(){const{carouselItemMap:e,carouselPath:t,socialCountsData:a}=this
Ember.get(a,"shares")&&t.pushObject(e.reshare)}loadMoreReshares(){const{companyId:e,paging:t,store:a,updateId:n}=this
return(0,o.fetchMoreReshares)(a,n,e,t).then(e=>{let{elements:t,hasMoreItems:a,paging:n}=e
if(this.isDestroying)return!1
if(a){Ember.get(this,"model.reshares.elements").pushObjects(t)
Ember.set(this,"paging",n)
return!0}return!1})}carouselBack(){this.carouselPath.popObject()}},R=(0,n.default)(N.prototype,"windowService",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=(0,n.default)(N.prototype,"router",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=(0,n.default)(N.prototype,"store",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=(0,n.default)(N.prototype,"currentCarouselPath",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,n.default)(N.prototype,"headerData",[_],Object.getOwnPropertyDescriptor(N.prototype,"headerData"),N.prototype),(0,n.default)(N.prototype,"socialCountsData",[f],Object.getOwnPropertyDescriptor(N.prototype,"socialCountsData"),N.prototype),H=(0,n.default)(N.prototype,"isLiveVideo",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,n.default)(N.prototype,"socialGestureHighlightsData",[y],Object.getOwnPropertyDescriptor(N.prototype,"socialGestureHighlightsData"),N.prototype),(0,n.default)(N.prototype,"isSocialGestureHighlightsAvailable",[v],Object.getOwnPropertyDescriptor(N.prototype,"isSocialGestureHighlightsAvailable"),N.prototype),(0,n.default)(N.prototype,"dailySocialUpdateStatisticsData",[E],Object.getOwnPropertyDescriptor(N.prototype,"dailySocialUpdateStatisticsData"),N.prototype),(0,n.default)(N.prototype,"weeklySocialUpdateStatisticsData",[T],Object.getOwnPropertyDescriptor(N.prototype,"weeklySocialUpdateStatisticsData"),N.prototype),(0,n.default)(N.prototype,"cvcSocialUpdateStatisticsData",[S],Object.getOwnPropertyDescriptor(N.prototype,"cvcSocialUpdateStatisticsData"),N.prototype),U=(0,n.default)(N.prototype,"resharesData",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,n.default)(N.prototype,"videoDuration",[O],Object.getOwnPropertyDescriptor(N.prototype,"videoDuration"),N.prototype),L=(0,n.default)(N.prototype,"createdAtTimestamp",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,n.default)(N.prototype,"dismissModal",[C],Object.getOwnPropertyDescriptor(N.prototype,"dismissModal"),N.prototype),(0,n.default)(N.prototype,"setCarouselPathToReshare",[P],Object.getOwnPropertyDescriptor(N.prototype,"setCarouselPathToReshare"),N.prototype),(0,n.default)(N.prototype,"loadMoreReshares",[w],Object.getOwnPropertyDescriptor(N.prototype,"loadMoreReshares"),N.prototype),(0,n.default)(N.prototype,"carouselBack",[D],Object.getOwnPropertyDescriptor(N.prototype,"carouselBack"),N.prototype),N)
e.default=j})
define("video-analytics/routes/index",["exports","@babel/runtime/helpers/esm/objectSpread2","@babel/runtime/helpers/esm/toConsumableArray","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","feed-requests/updates","video-analytics/utils/requests/social-update-analytics-header","video-analytics/utils/get-reshares","video-analytics/utils/get-social-gesture-highlights","video-analytics/utils/get-social-update-statistics","video-analytics/utils/constants"],function(e,t,a,n,i,s,r,o,l,c,d,u,m){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var p,h,g,_,f,b,y,v,E
let T=(p=Ember.inject.service("feed-tracking@feed-action-event"),h=Ember.inject.service("lix"),g=Ember.inject.service("router"),_=Ember.inject.service("store"),f=class extends Ember.Route{constructor(){super(...arguments);(0,n.default)(this,"feedActionEvent",b,this);(0,n.default)(this,"lix",y,this);(0,n.default)(this,"router",v,this);(0,n.default)(this,"store",E,this);(0,i.default)(this,"pageKey","flagship3_video_analytics")}model(){var e,n
let{updateId:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0
const{companyId:r}=null!==(e=null===(n=s.to)||void 0===n?void 0:n.queryParams)&&void 0!==e?e:{}
this._companyId=r
this._updateId=i
const p=this.feedActionEvent.getModuleKeyForCurrentPage(),h=this.store,g=(0,o.findRequestV2)(i,p)
return Ember.RSVP.hash({feedUpdate:h.queryURL(g).then(e=>Ember.get(e,"elements.firstObject")),socialGestureHighlights:(0,d.findSocialGestureHighlights)(h,i),dailySocialUpdateStatistics:(0,u.findSocialUpdateStatistics)(h,i),weeklySocialUpdateStatistics:(0,u.findSocialUpdateStatistics)(h,i,!0),reshares:(0,c.fetchReshares)(h,i,r)}).then(e=>{const n=h.findRecord.apply(h,(0,a.default)((0,l.default)(i))),s="LIVE_VIDEO"===Ember.get(e,"feedUpdate.updateMetadata.detailPageType")?(0,u.findCvcSocialUpdateStatistics)(h,i):{elements:[]}
return Ember.RSVP.hash((0,t.default)({socialDetail:n,cvcSocialUpdateStatistics:s},e))}).catch(e=>{const t=Ember.get(this,"router.currentRouteName")
this.transitionTo(m.VIDEO_ANALYTICS_TRANSITION_TO_DEFAULT_ROUTE_MAP[t])
throw e})}setupController(e,t){super.setupController.apply(this,arguments)
const a=Ember.get(e,"paging")||Ember.get(t,"reshares.paging")
Ember.setProperties(e,{paging:a,companyId:this._companyId,updateId:this._updateId})}},b=(0,s.default)(f.prototype,"feedActionEvent",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=(0,s.default)(f.prototype,"lix",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=(0,s.default)(f.prototype,"router",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=(0,s.default)(f.prototype,"store",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f)
e.default=T})
define("video-analytics/templates/components/audience-tab",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"64kcqB6I",block:'{"symbols":["highlight","index","info"],"statements":[[4,"if",[[23,0,["isSocialGestureHighlightsAvailable"]]],null,{"statements":[[0,"  "],[7,"div",true],[10,"class","display-flex"],[8],[0,"\\n"],[4,"each",[[23,0,["socialGestureHighlights"]]],null,{"statements":[[0,"      "],[7,"div",true],[11,"class",[29,["mv6\\n          ",[28,"if",[[28,"global-helpers@eq",[[23,2,[]],0],null],"video-analytics-modal-audience-tab__highlight-left-container b0 pr5"],null],"\\n\\n          ",[28,"if",[[28,"global-helpers@eq",[[23,2,[]],1],null],"video-analytics-modal-audience-tab__highlight-middle-container ph5"],null],"\\n\\n          ",[28,"if",[[28,"global-helpers@eq",[[23,2,[]],2],null],"video-analytics-modal-audience-tab__highlight-right-container b0 pl5"],null]]]],[8],[0,"\\n        "],[7,"article",true],[10,"class","video-analytics-modal-audience-tab__highlight ph2 pb0"],[8],[0,"\\n          "],[7,"header",true],[10,"class","text-align-center"],[8],[0,"\\n            "],[7,"figure",true],[11,"class",[29,[[23,1,["icon"]],"\\n                 video-analytics-modal-audience-tab__highlight-icon inline-block EntityPhoto-square-4"]]],[8],[9],[0,"\\n          "],[9],[0,"\\n          "],[7,"main",true],[10,"class","video-analytics-modal-audience-tab__highlight-main pt6"],[8],[0,"\\n            "],[7,"h4",true],[10,"class","text-align-center t-20 t-black t-normal p0"],[8],[0,"\\n"],[0,"              "],[1,[28,"t",[[23,1,["cardHeader"]],"video-analytics/templates/components/audience-tab"],null],false],[0,"\\n"],[0,"            "],[9],[0,"\\n            "],[7,"ul",true],[10,"class","ph2 pt6 pb0"],[8],[0,"\\n"],[4,"each",[[23,1,["infos"]]],null,{"statements":[[0,"                "],[7,"li",true],[10,"class","video-analytics-modal-audience-tab__highlight-info-list-item t-16 t-black t-normal display-flex justify-space-between pv3 ph0"],[8],[0,"\\n                  "],[7,"span",true],[10,"class","text-align-left"],[8],[0,"\\n                    "],[1,[23,3,["name"]],false],[0,"\\n                  "],[9],[0,"\\n                  "],[7,"span",true],[8],[0,"\\n                    "],[1,[28,"ember-cli-pemberly-i18n@format-number",[[23,3,["numViews"]]],null],false],[0,"\\n                  "],[9],[0,"\\n                "],[9],[0,"\\n"]],"parameters":[3]},null],[0,"            "],[9],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[1,2]},null],[0,"  "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[7,"div",true],[10,"class","video-analytics-modal-audience-tab__no-data"],[8],[0,"\\n    "],[7,"div",true],[10,"class","video-analytics-modal__no-data-indicator"],[8],[0,"\\n      "],[1,[28,"t",["i18n_audience_tab_no_data","video-analytics/templates/components/audience-tab"],null],false],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"video-analytics/templates/components/audience-tab.hbs"}})
e.default=t})
define("video-analytics/templates/components/content-header",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"9lHsCBPC",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","display-flex"],[8],[0,"\\n  "],[7,"div",true],[10,"class","video-analytics-modal-content-header__video-info-left-container"],[8],[0,"\\n    "],[7,"div",true],[10,"class","video-analytics-modal-content-header__video-thumbnail-container"],[8],[0,"\\n      "],[5,"ember-cli-pemberly-tracking@shared/external-link",[],[["@href","@class","@target"],[[23,0,["permalink"]],"link-without-hover-visited","_blank"]],{"statements":[[0,"\\n        "],[5,"ember-vector-images@custom-image",[],[["@image","@desiredWidth","@alt","@class"],[[23,0,["thumbnail"]],200,[23,0,["thumbnailAltText"]],"video-analytics-modal-content-header__video-thumbnail"]]],[0,"\\n      "]],"parameters":[]}],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[7,"div",true],[10,"class","video-analytics-modal-content-header__video-info-right-container"],[8],[0,"\\n    "],[7,"div",true],[10,"class","t-14 t-black--light t-normal mb3"],[8],[0,"\\n      "],[7,"span",true],[10,"class","pr2"],[8],[0,"\\n        "],[1,[28,"if",[[23,0,["createdAtTimestamp"]],[28,"ember-cli-pemberly-i18n@format-date",[[23,0,["createdAtTimestamp"]]],[["format"],["fmt_mdy_medium"]]],[28,"t",["i18n_published_on","video-analytics/templates/components/content-header"],[["createdAt"],[[23,0,["createdAt"]]]]]],null],false],[0,"\\n      "],[9],[0,"\\n"],[4,"if",[[23,0,["duration"]]],null,{"statements":[[0,"        "],[7,"span",true],[10,"class","video-analytics-modal-content-header__video-info-duration"],[8],[1,[28,"t",["i18n_video_duration","video-analytics/templates/components/content-header"],[["duration"],[[23,0,["duration"]]]]],false],[9],[0,"\\n"]],"parameters":[]},null],[0,"    "],[9],[0,"\\n"],[4,"if",[[23,0,["title"]]],null,{"statements":[[0,"      "],[5,"ember-cli-pemberly-tracking@shared/external-link",[],[["@href","@target"],[[23,0,["permalink"]],"_blank"]],{"statements":[[0,"\\n        "],[7,"h4",true],[10,"class","t-20 t-black t-bold"],[8],[1,[23,0,["title"]],false],[9],[0,"\\n      "]],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"    "],[7,"span",true],[10,"class","t-16 t-black t-normal"],[8],[1,[23,0,["description"]],false],[9],[0,"\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"video-analytics/templates/components/content-header.hbs"}})
e.default=t})
define("video-analytics/templates/components/engagement-highlights",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"sB2OsAvI",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","display-flex"],[8],[0,"\\n  "],[7,"div",true],[10,"class","full-width"],[8],[0,"\\n    "],[7,"div",true],[10,"class","video-analytics-modal__video-engagement-highlights-container"],[8],[0,"\\n      "],[7,"div",true],[10,"class","display-flex align-items-center justify-space-between pv3 ph5"],[8],[0,"\\n        "],[7,"h4",true],[10,"class","t-16 t-black--light t-normal"],[8],[1,[28,"t",["i18n_engagement_highlights","video-analytics/templates/components/engagement-highlights"],null],false],[9],[0,"\\n        "],[7,"div",true],[10,"class","display-flex align-items-center"],[8],[0,"\\n          "],[1,[28,"artdeco-icons-web@li-icon",null,[["class","type","size"],["video-analytics-modal__video-engagement-highlights-info-icon","notify-pebble-icon","small"]]],false],[0,"\\n          "],[1,[28,"t",["i18n_engagement_highlights_info","video-analytics/templates/components/engagement-highlights"],null],false],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n      "],[7,"div",true],[10,"class","video-analytics-modal__video-engagement-highlights-list-container"],[8],[0,"\\n        "],[7,"div",true],[10,"class","video-analytics-modal__video-engagement-highlights-list-item pv3 ph5"],[8],[0,"\\n          "],[7,"h4",true],[10,"class","t-14 t-black--light t-normal"],[8],[1,[28,"t",["i18n_video_engagement_highlights_reactions_total","video-analytics/templates/components/engagement-highlights"],[["numReactions"],[[23,0,["reactions"]]]]],false],[9],[0,"\\n        "],[9],[0,"\\n        "],[7,"div",true],[10,"class","video-analytics-modal__video-engagement-highlights-list-item pv3 ph5"],[8],[0,"\\n          "],[7,"h4",true],[10,"class","t-14 t-black--light t-normal"],[8],[1,[28,"t",["i18n_video_engagement_highlights_comments_total","video-analytics/templates/components/engagement-highlights"],[["numComments"],[[23,0,["comments"]]]]],false],[9],[0,"\\n        "],[9],[0,"\\n        "],[7,"div",true],[11,"class",[28,"concat",["video-analytics-modal__video-engagement-highlights-list-item pv3 ph5",[28,"if",[[28,"global-helpers@neq",[[23,0,["shares"]],0],null]," video-analytics-modal__video-engagement-highlights-list-item--has-share"],null]],null]],[8],[0,"\\n          "],[7,"h4",false],[12,"class","t-14 t-black--light t-normal"],[3,"action",[[23,0,[]],[23,0,["setCarouselPathToReshare"]]]],[8],[1,[28,"t",["i18n_video_engagement_highlights_shares_total","video-analytics/templates/components/engagement-highlights"],[["numShares"],[[23,0,["shares"]]]]],false],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"video-analytics/templates/components/engagement-highlights.hbs"}})
e.default=t})
define("video-analytics/templates/components/va-entry-point",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"DXHC0t6J",block:'{"symbols":["trigger"],"statements":[[5,"link-to",[[12,"class","analytics-entry-point"]],[["@route","@model"],[[28,"concat",["",[23,0,["videoAnalyticsRouteName"]]],null],[23,0,["entityUrn"]]]],{"statements":[[0,"\\n  "],[7,"div",true],[10,"class","t-14 t-black--light t-normal pl2 pv2"],[8],[0,"\\n    "],[5,"artdeco-hoverables@artdeco-hoverable-trigger",[],[["@on"],["hover"]],{"statements":[[0,"\\n      "],[7,"span",true],[11,"aria-describedby",[23,1,["ariaId"]]],[10,"class","inline-block"],[8],[0,"\\n        "],[7,"div",true],[10,"class","display-flex align-items-center"],[8],[0,"\\n          "],[1,[28,"artdeco-icons-web@li-icon",null,[["type","a11y-text","aria-hidden","class"],["play-icon",[28,"t",["video_analytics_icon_a11y","video-analytics/templates/components/va-entry-point"],null],"true","mr2"]]],false],[0,"\\n          "],[7,"span",true],[10,"class","va-entry-point__num-views"],[8],[1,[28,"t",["views_on_your_video","video-analytics/templates/components/va-entry-point"],[["numViews"],[[23,0,["numViews"]]]]],false],[9],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n      "],[6,[23,1,["artdeco-hoverable-content"]],[],[["@theme"],["inverse"]],{"statements":[[0,"\\n        "],[7,"span",true],[8],[1,[28,"t",["views_on_your_video_tooltip","video-analytics/templates/components/va-entry-point"],null],false],[9],[0,"\\n      "]],"parameters":[]}],[0,"\\n    "]],"parameters":[1]}],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"video-analytics/templates/components/va-entry-point.hbs"}})
e.default=t})
define("video-analytics/templates/components/video-performance-graph",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"R57YZ+cs",block:'{"symbols":[],"statements":[[7,"div",true],[10,"class","video-performance-graph__timerange-container pv5"],[8],[0,"\\n"],[4,"if",[[28,"global-helpers@eq",[[23,0,["graphContentType"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_CVC"]]],null]],null,{"statements":[[0,"    "],[7,"span",true],[8],[0,"\\n      "],[1,[28,"t",["i18n_video_performace_graph_video_performance_live","video-analytics/templates/components/video-performance-graph"],null],false],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[7,"form",true],[10,"class","display-flex"],[8],[0,"\\n      "],[7,"input",true],[10,"id","video-performance-graph-timerange-last-seven-days"],[10,"name","video-performance-graph-timerange"],[10,"value","last-seven-days"],[11,"checked",[28,"if",[[23,0,["isDisplayDailyData"]],"checked",""],null]],[11,"onchange",[28,"ember-simple-set-helper@set",[[23,0,[]],"isDisplayDailyData",true],null]],[10,"type","radio"],[8],[9],[0,"\\n\\n      "],[7,"label",true],[10,"class","mr5 mt0"],[10,"for","video-performance-graph-timerange-last-seven-days"],[8],[0,"\\n        "],[1,[28,"t",["i18n_video_performace_graph_video_performance_timerange_last_seven_days","video-analytics/templates/components/video-performance-graph"],null],false],[0,"\\n      "],[9],[0,"\\n      "],[7,"input",true],[10,"id","video-performance-graph-timerange-weekly"],[10,"name","video-performance-graph-timerange"],[10,"value","weekly"],[11,"checked",[28,"unless",[[23,0,["isDisplayDailyData"]],"checked",""],null]],[11,"disabled",[23,0,["isDisableWeeklyRadioButton"]]],[11,"onchange",[28,"ember-simple-set-helper@set",[[23,0,[]],"isDisplayDailyData",false],null]],[10,"type","radio"],[8],[9],[0,"\\n\\n      "],[7,"label",true],[10,"class","mt0"],[10,"for","video-performance-graph-timerange-weekly"],[8],[0,"\\n        "],[1,[28,"t",["i18n_video_performace_graph_video_performance_timerange_weekly","video-analytics/templates/components/video-performance-graph"],null],false],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n    "],[7,"div",true],[10,"class","video-performance-graph__timerange-info"],[8],[0,"\\n      "],[1,[28,"artdeco-icons-web@li-icon",null,[["class","type","size"],["video-performance-graph__timerange-info-icon","notify-pebble-icon","small"]]],false],[0,"\\n      "],[1,[28,"if",[[23,0,["isDisplayDailyData"]],[28,"t",["i18n_video_performace_graph_video_performance_timerange_last_seven_days_info","video-analytics/templates/components/video-performance-graph"],null],[28,"t",["i18n_video_performace_graph_video_performance_timerange_weekly_info","video-analytics/templates/components/video-performance-graph"],null]],null],false],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]}],[9],[0,"\\n"],[7,"div",true],[10,"class","video-performance-graph__tab-container"],[8],[0,"\\n"],[4,"if",[[23,0,["isShowCvcTab"]]],null,{"statements":[[0,"    "],[7,"a",false],[12,"href","#cvc-tab"],[12,"role","button"],[12,"class",[28,"concat",["video-performance-graph__tab Elevation-2dp",[28,"if",[[23,0,["isShowCvcTab"]]," video-performance-graph__tab--narrow"],null],[28,"if",[[28,"global-helpers@eq",[[23,0,["graphContentType"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_CVC"]]],null]," video-performance-graph__tab--active"],null]],null]],[3,"action",[[23,0,[]],"updateGraph",[23,0,["GRAPH_CONTENT_TYPES","SHOW_CVC"]]]],[8],[0,"\\n      "],[7,"p",true],[10,"class","mb2"],[8],[0,"\\n        "],[1,[28,"t",["i18n_video_performace_graph_video_performance_cvc","video-analytics/templates/components/video-performance-graph"],[["numCvc"],[[28,"video@format-large-number",[[23,0,["cvcPeakCount"]]],null]]]],false],[0,"\\n      "],[9],[0,"\\n      "],[7,"p",true],[10,"class","video-performance-graph__tab-info-body mb4 t-12 t-black--light t-normal"],[8],[0,"\\n        "],[1,[28,"t",["i18n_video_performace_graph_video_performance_cvc_info","video-analytics/templates/components/video-performance-graph"],null],false],[0,"\\n      "],[9],[0,"\\n      "],[7,"div",true],[10,"class","video-performance-graph__tab-info-footer t-12 t-black--light t-normal"],[8],[9],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"  "],[7,"a",false],[12,"href","#time-watch-tab"],[12,"role","button"],[12,"class",[28,"concat",["video-performance-graph__tab Elevation-2dp",[28,"if",[[23,0,["isShowCvcTab"]]," video-performance-graph__tab--narrow"],null],[28,"if",[[28,"global-helpers@eq",[[23,0,["graphContentType"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_TIME_WATCH"]]],null]," video-performance-graph__tab--active"],null]],null]],[3,"action",[[23,0,[]],"updateGraph",[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_TIME_WATCH"]]]],[8],[0,"\\n    "],[7,"p",true],[10,"class","mb2"],[8],[0,"\\n      "],[1,[28,"t",["i18n_video_performace_graph_video_performance_time_watch_total","video-analytics/templates/components/video-performance-graph"],[["numTimeWatch"],[[28,"video@format-large-number",[[28,"get",[[23,0,["totalCounts"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_TIME_WATCH"]]],null]],null]]]],false],[0,"\\n    "],[9],[0,"\\n    "],[7,"p",true],[10,"class","video-performance-graph__tab-info-body mb4 t-12 t-black--light t-normal"],[8],[0,"\\n      "],[1,[28,"t",["i18n_video_performace_graph_video_performance_time_watch_total_info","video-analytics/templates/components/video-performance-graph"],null],false],[0,"\\n    "],[9],[0,"\\n    "],[7,"div",true],[10,"class","video-performance-graph__tab-info-footer t-12 t-black--light t-normal"],[8],[0,"\\n      "],[7,"span",true],[10,"class","video-performance-graph__tab-current-count t-12 t-black--light t-bold"],[8],[0,"\\n        "],[1,[28,"t",["i18n_video_performace_graph_video_performance_analytics_time_watch_today","video-analytics/templates/components/video-performance-graph"],[["isDailyData","numTimeWatch"],[[23,0,["isDisplayDailyData"]],[28,"video@format-large-number",[[28,"get",[[23,0,["currentCounts"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_TIME_WATCH"]]],null]],null]]]],false],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[7,"a",false],[12,"href","#total-views-tab"],[12,"role","button"],[12,"class",[28,"concat",["video-performance-graph__tab Elevation-2dp",[28,"if",[[23,0,["isShowCvcTab"]]," video-performance-graph__tab--narrow"],null],[28,"if",[[28,"global-helpers@eq",[[23,0,["graphContentType"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWS"]]],null]," video-performance-graph__tab--active"],null]],null]],[3,"action",[[23,0,[]],"updateGraph",[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWS"]]]],[8],[0,"\\n    "],[7,"p",true],[10,"class","mb2"],[8],[0,"\\n      "],[1,[28,"t",["i18n_video_performace_graph_video_performance_views_total_with_plural","video-analytics/templates/components/video-performance-graph"],[["numViewsFormatted","numViews"],[[28,"video@format-large-number",[[28,"get",[[23,0,["totalCounts"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWS"]]],null]],null],[28,"get",[[23,0,["totalCounts"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWS"]]],null]]]],false],[0,"\\n    "],[9],[0,"\\n    "],[7,"p",true],[10,"class","video-performance-graph__tab-info-body mb4 t-12 t-black--light t-normal"],[8],[0,"\\n      "],[1,[28,"t",["i18n_video_performace_graph_video_performance_views_total_info","video-analytics/templates/components/video-performance-graph"],null],false],[0,"\\n    "],[9],[0,"\\n    "],[7,"div",true],[10,"class","video-performance-graph__tab-info-footer t-12 t-black--light t-normal"],[8],[0,"\\n      "],[7,"span",true],[10,"class","video-performance-graph__tab-current-count t-12 t-black--light t-bold"],[8],[0,"\\n        "],[1,[28,"t",["i18n_video_performace_graph_video_performance_analytics_views_today_plural","video-analytics/templates/components/video-performance-graph"],[["isDailyData","numViewsFormatted","numViews"],[[23,0,["isDisplayDailyData"]],[28,"video@format-large-number",[[28,"get",[[23,0,["currentCounts"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWS"]]],null]],null],[28,"get",[[23,0,["currentCounts"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWS"]]],null]]]],false],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[7,"a",false],[12,"href","#total-viewers-tab"],[12,"role","button"],[12,"class",[28,"concat",["video-performance-graph__tab Elevation-2dp",[28,"if",[[23,0,["isShowCvcTab"]]," video-performance-graph__tab--narrow"],null],[28,"if",[[28,"global-helpers@eq",[[23,0,["graphContentType"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWERS"]]],null]," video-performance-graph__tab--active"],null]],null]],[3,"action",[[23,0,[]],"updateGraph",[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWERS"]]]],[8],[0,"\\n    "],[7,"p",true],[10,"class","mb2"],[8],[0,"\\n      "],[1,[28,"t",["i18n_video_performace_graph_video_performance_viewers_total_with_plural","video-analytics/templates/components/video-performance-graph"],[["numViewersFormatted","numViewers"],[[28,"video@format-large-number",[[28,"get",[[23,0,["totalCounts"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWERS"]]],null]],null],[28,"get",[[23,0,["totalCounts"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWERS"]]],null]]]],false],[0,"\\n    "],[9],[0,"\\n    "],[7,"p",true],[10,"class","video-performance-graph__tab-info-body mb4 t-12 t-black--light t-normal"],[8],[0,"\\n      "],[1,[28,"t",["i18n_video_performace_graph_video_performance_viewers_total_info","video-analytics/templates/components/video-performance-graph"],null],false],[0,"\\n    "],[9],[0,"\\n    "],[7,"div",true],[10,"class","video-performance-graph__tab-info-footer t-12 t-black--light t-normal"],[8],[0,"\\n      "],[7,"span",true],[10,"class","video-performance-graph__tab-current-count t-12 t-black--light t-bold"],[8],[0,"\\n        "],[1,[28,"t",["i18n_video_performace_graph_video_performance_analytics_viewers_today_plural","video-analytics/templates/components/video-performance-graph"],[["isDailyData","numViewersFormatted","numViewers"],[[23,0,["isDisplayDailyData"]],[28,"video@format-large-number",[[28,"get",[[23,0,["currentCounts"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWERS"]]],null]],null],[28,"get",[[23,0,["currentCounts"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_TOTAL_VIEWERS"]]],null]]]],false],[0,"\\n      "],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"],[7,"div",true],[10,"class","video-performance-graph__graph-container Elevation-2dp relative"],[8],[0,"\\n"],[4,"if",[[23,0,["isChartDataAvailable"]]],null,{"statements":[[4,"if",[[23,0,["isHighchartDependencyReady"]]],null,{"statements":[[0,"      "],[5,"video-analytics@high-charts-container",[],[["@content","@graphContentType"],[[23,0,["highChartData"]],[23,0,["graphContentType"]]]]],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[5,"artdeco-loader@artdeco-loader",[],[["@class"],["video-performance-graph__loader"]]],[0,"\\n"]],"parameters":[]}]],"parameters":[]},{"statements":[[0,"    "],[7,"div",true],[10,"class","video-analytics-modal__no-data-indicator"],[8],[1,[28,"t",["i18n_video_performace_graph_no_data","video-analytics/templates/components/video-performance-graph"],null],false],[9],[0,"\\n"]],"parameters":[]}],[0,"\\n"],[4,"if",[[28,"global-helpers@neq",[[23,0,["graphContentType"]],[23,0,["GRAPH_CONTENT_TYPES","SHOW_CVC"]]],null]],null,{"statements":[[0,"    "],[7,"span",true],[10,"class","video-analytics-modal__time-zone t-12 t-black--light t-normal"],[8],[1,[28,"t",["i18n_time_zone","video-analytics/templates/components/video-performance-graph"],null],false],[9],[0,"\\n"]],"parameters":[]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"video-analytics/templates/components/video-performance-graph.hbs"}})
e.default=t})
define("video-analytics/templates/index",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var t=Ember.HTMLBars.template({id:"MFgWxw7Q",block:'{"symbols":["modal","carousel","body","reshare","tabs","tablist","header"],"statements":[[5,"artdeco-modal@artdeco-modal",[],[["@isOpen","@modalClasses","@headerId","@dismissModal"],[true,"video-analytics-modal","video-analytics-modal-header",[28,"action",[[23,0,[]],"dismissModal"],null]]],{"statements":[[0,"\\n  "],[6,[23,1,["artdeco-modal-header"]],[],[["@classNames"],["visually-hidden"]],{"statements":[[0,"\\n    "],[7,"h3",true],[10,"id","video-analytics-modal-header"],[8],[1,[28,"t",["i18n_video_analytics_header","video-analytics/templates/index"],null],false],[9],[0,"\\n  "]],"parameters":[]}],[0,"\\n  "],[6,[23,1,["artdeco-modal-content"]],[],[[],[]],{"statements":[[0,"\\n    "],[5,"breadcrumb-carousel@breadcrumb-carousel",[],[["@carouselPath","@carouselBack"],[[23,0,["carouselPath"]],[28,"action",[[23,0,[]],"carouselBack"],null]]],{"statements":[[0,"\\n      "],[6,[23,2,["header"]],[],[[],[]],{"statements":[[0,"\\n        "],[6,[23,7,["item"]],[],[["@carouselItemId"],[[23,0,["carouselItemMap","videoAnalytics"]]]],{"statements":[[0,"\\n          "],[7,"h3",true],[10,"class","t-24"],[8],[1,[28,"t",["i18n_video_analytics_header","video-analytics/templates/index"],null],false],[9],[0,"\\n        "]],"parameters":[]}],[0,"\\n        "],[6,[23,7,["item"]],[],[["@carouselItemId"],[[23,0,["carouselItemMap","reshare"]]]],{"statements":[[0,"\\n          "],[7,"h3",true],[10,"class","t-24"],[8],[1,[28,"t",["i18n_reshare_header","video-analytics/templates/index"],[["numReshare"],[[23,0,["socialCountsData","shares"]]]]],false],[9],[0,"\\n        "]],"parameters":[]}],[0,"\\n      "]],"parameters":[7]}],[0,"\\n      "],[6,[23,2,["body"]],[],[[],[]],{"statements":[[0,"\\n        "],[6,[23,3,["item"]],[],[["@carouselItemId"],[[23,0,["carouselItemMap","videoAnalytics"]]]],{"statements":[[0,"\\n          "],[7,"div",true],[10,"class","ph6 pv4"],[8],[0,"\\n            "],[5,"video-analytics@content-header",[],[["@createdAt","@createdAtTimestamp","@description","@duration","@thumbnailAltText","@thumbnail","@title","@permalink","@publishDate"],[[23,0,["headerData","createdAt"]],[23,0,["createdAtTimestamp"]],[23,0,["headerData","description"]],[23,0,["videoDuration"]],[23,0,["headerData","thumbnailAltText"]],[23,0,["headerData","thumbnail"]],[23,0,["headerData","title"]],[23,0,["headerData","permalink"]],[23,0,["headerData","publishDate"]]]]],[0,"\\n            "],[5,"video-analytics@engagement-highlights",[],[["@comments","@reactions","@shares","@setCarouselPathToReshare"],[[23,0,["socialCountsData","comments"]],[23,0,["socialCountsData","reactions"]],[23,0,["socialCountsData","shares"]],[28,"action",[[23,0,[]],"setCarouselPathToReshare"],null]]]],[0,"\\n            "],[7,"div",true],[10,"class","display-flex"],[8],[0,"\\n              "],[7,"div",true],[10,"class","video-analytics-modal__analytics-tab full-width mt5"],[8],[0,"\\n                "],[5,"ember-cli-artdeco-tabs@artdeco-tabs",[],[["@selection","@in-modal","@size"],[[23,0,["selection"]],true,"48dp"]],{"statements":[[0,"\\n                  "],[6,[23,5,["tablist"]],[],[[],[]],{"statements":[[0,"\\n                    "],[6,[23,6,["tab"]],[],[["@model","@class","@tabindex","@on-select"],["video_performance","video-analytics-modal__analytics-tab-performance","0",[28,"ember-simple-set-helper@set",[[23,0,[]],"selection"],null]]],{"statements":[[0,"\\n                      "],[1,[28,"t",["i18n_video_tab_performance","video-analytics/templates/index"],null],false],[0,"\\n                    "]],"parameters":[]}],[0,"\\n                    "],[6,[23,6,["tab"]],[],[["@model","@class","@tabindex","@on-select"],["audience","video-analytics-modal__analytics-tab-audience","0",[28,"ember-simple-set-helper@set",[[23,0,[]],"selection"],null]]],{"statements":[[0,"\\n                      "],[1,[28,"t",["i18n_video_tab_audience","video-analytics/templates/index"],null],false],[0,"\\n                    "]],"parameters":[]}],[0,"\\n                  "]],"parameters":[6]}],[0,"\\n                  "],[6,[23,5,["tabpanel"]],[],[["@model"],["video_performance"]],{"statements":[[0,"\\n                    "],[5,"video-analytics@video-performance-graph",[],[["@cvcSocialUpdateStatisticsData","@dailySocialUpdateStatisticsData","@weeklySocialUpdateStatisticsData","@isLiveVideo"],[[23,0,["cvcSocialUpdateStatisticsData"]],[23,0,["dailySocialUpdateStatisticsData"]],[23,0,["weeklySocialUpdateStatisticsData"]],[23,0,["isLiveVideo"]]]]],[0,"\\n                  "]],"parameters":[]}],[0,"\\n                  "],[6,[23,5,["tabpanel"]],[],[["@model"],["audience"]],{"statements":[[0,"\\n                    "],[5,"video-analytics@audience-tab",[],[["@socialGestureHighlights","@isSocialGestureHighlightsAvailable"],[[23,0,["socialGestureHighlightsData"]],[23,0,["isSocialGestureHighlightsAvailable"]]]]],[0,"\\n                  "]],"parameters":[]}],[0,"\\n                "]],"parameters":[5]}],[0,"\\n              "],[9],[0,"\\n            "],[9],[0,"\\n          "],[9],[0,"\\n        "]],"parameters":[]}],[0,"\\n        "],[6,[23,3,["item"]],[],[["@carouselItemId"],[[23,0,["carouselItemMap","reshare"]]]],{"statements":[[0,"\\n          "],[5,"infinite-scroll@infinite-scroll-container",[],[["@scrollingElementSelector","@eventTarget","@onInfiniteScroll"],[".video-analytics-modal__reshares",".video-analytics-modal__reshares",[28,"action",[[23,0,[]],"loadMoreReshares"],null]]],{"statements":[[0,"\\n            "],[7,"div",true],[10,"class","video-analytics-modal__reshares"],[8],[0,"\\n"],[4,"each",[[23,0,["resharesData"]]],null,{"statements":[[0,"                "],[5,"feed-shared@update/generic-update",[],[["@model","@hideCaEntryPoint"],[[23,4,[]],true]]],[0,"\\n"]],"parameters":[4]},{"statements":[[0,"                "],[7,"div",true],[10,"class","video-analytics-modal__reshares-no-data-indicator pv6"],[8],[1,[28,"t",["i18n_reshare_no_data","video-analytics/templates/index"],null],false],[9],[0,"\\n"]],"parameters":[]}],[0,"            "],[9],[0,"\\n          "]],"parameters":[]}],[0,"\\n        "]],"parameters":[]}],[0,"\\n      "]],"parameters":[3]}],[0,"\\n    "]],"parameters":[2]}],[0,"\\n  "]],"parameters":[]}],[0,"\\n"],[4,"if",[[28,"global-helpers@eq",[[23,0,["currentCarouselPath"]],[23,0,["carouselItemMap","reshare"]]],null]],null,{"statements":[[0,"    "],[6,[23,1,["artdeco-modal-footer"]],[],[[],[]],{"statements":[[0,"\\n      "],[7,"div",true],[10,"class","display-flex align-items-center"],[8],[0,"\\n        "],[1,[28,"artdeco-icons-web@li-icon",null,[["class","type","size"],["mr1","notify-pebble-icon","small"]]],false],[0,"\\n        "],[1,[28,"t",["i18n_reshare_footnote","video-analytics/templates/index"],null],false],[0,"\\n      "],[9],[0,"\\n    "]],"parameters":[]}],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]}]],"hasEval":false}',meta:{moduleName:"video-analytics/templates/index.hbs"}})
e.default=t})
define("video-analytics/utils/common",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.createCacheKey=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return Object.keys(t).reduce((e,a)=>{const n=t[a],i="object"==typeof n?JSON.stringify(n):n
return`${e}|${a}=${i}`},e)}
e.VIDEO_ANALYTICS_VAPI_RESOURCE_END_POINT=e.TIME_VALUES=e.GRAPH_CONTENT_TYPES=e.FAKE_TIME=void 0
e.FAKE_TIME={DATE_NOW:1555534759522,DAILY_START:1554929959522,WEEKLY_START:1540414759522}
e.GRAPH_CONTENT_TYPES={SHOW_CVC:"CONCURRENT_VIEWER_COUNT",SHOW_TOTAL_TIME_WATCH:"TIME_WATCHED",SHOW_TOTAL_VIEWS:"PLAYS",SHOW_TOTAL_VIEWERS:"UNIQUE_PLAYS"}
e.TIME_VALUES={SECOND_IN_MS:1e3,MINUTE_IN_MS:6e4,HOUR_IN_MS:36e5,DAY_IN_MS:864e5,WEEK_IN_MS:6048e5,MONTH_IN_MS:2592e6}
e.VIDEO_ANALYTICS_VAPI_RESOURCE_END_POINT={VOYAGER_IDENTITY_SOCIAL_UPDATE_STATISTICS:"voyagerIdentitySocialUpdateStatistics",SOCIAL_UPDATE_ANALYTICS:"identity/socialUpdateAnalytics"}})
define("video-analytics/utils/constants",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.VIDEO_ANALYTICS_TRANSITION_TO_DEFAULT_ROUTE_MAP=e.VIDEO_ANALYTICS_TRANSITION_BACK_ROUTE_MAP=void 0
e.VIDEO_ANALYTICS_TRANSITION_BACK_ROUTE_MAP={"feed.update.video-analytics":"index","profile-subroutes.detail-recent-activity.activity.video-analytics":"detail-recent-activity.activity","profile-subroutes.detail-recent-activity.shares.video-analytics":"detail-recent-activity.shares","organization-admin.admin.index.video-analytics":"admin","organization-admin.admin.analytics.updates.video-analytics":"admin.analytics.updates","school-admin.admin.index.video-analytics":"admin","school-admin.admin.analytics.updates.video-analytics":"admin.analytics.updates","showcase-admin.admin.index.video-analytics":"admin","showcase-admin.admin.analytics.updates.video-analytics":"admin.analytics.updates"}
e.VIDEO_ANALYTICS_TRANSITION_TO_DEFAULT_ROUTE_MAP={"feed.update.index":"index","profile-subroutes.detail-recent-activity.activity.index":"detail-recent-activity.activity","profile-subroutes.detail-recent-activity.shares.index":"detail-recent-activity.shares","organization-admin.admin.index.index":"admin","organization-admin.admin.analytics.updates.index":"admin.analytics.updates","school-admin.admin.index.index":"admin","school-admin.admin.analytics.updates.index":"admin.analytics.updates","showcase-admin.admin.index.index":"admin","showcase-admin.admin.analytics.updates.index":"admin.analytics.updates"}})
define("video-analytics/utils/get-feed-update",["exports","video/utils/video-helpers","global-utils/utils/url"],function(e,t,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.extractUpdateData=function(e){const n=Ember.get(e,"updateMetadata.urn"),i=`${(0,a.getDomainUrl)()}/feed/update/${n}`,s=Ember.get(e,"actor.subDescription.text"),r=Ember.get(e,"commentary.text.text"),o=Ember.get(e,"content.title.text"),l=Ember.get(e,"content.videoPlayMetadata"),c=Ember.get(l,"duration")/1e3
return{createdAt:s,description:r,permalink:i,thumbnailAltText:o||r,title:o,urn:n,duration:(0,t.formatTime)(c),thumbnail:Ember.get(l,"thumbnail")}}})
define("video-analytics/utils/get-reshares",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.fetchReshares=function(e,t,a){const n={targetUrn:t,q:"reshareFeed"}
a&&(n.organizationActor=`urn:li:company:${a}`)
return e.queryURL("feed/updatesV2",{params:n}).then(e=>{const{elements:t,paging:a}=Ember.getProperties(e,"elements","paging")
return{elements:t,paging:a}})}
e.fetchMoreReshares=function(e,t,a){let{count:n,start:i,total:s}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
const r=i+n
if(r<s){const n={targetUrn:t,start:r,count:Math.min(s-r,10),q:"reshareFeed"}
a&&(n.organizationActor=`urn:li:company:${a}`)
return e.queryURL("feed/updatesV2",{params:n}).then(e=>{const{elements:t,paging:a}=Ember.getProperties(e,"elements","paging")
return{elements:t,paging:a,hasMoreItems:!0}})}return Ember.RSVP.resolve({hasMoreItems:!1})}})
define("video-analytics/utils/get-social-counts",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.extractReactions=t
e.extractSocialCountsData=function(e){const a=Ember.get(e,"totalSocialActivityCounts.numComments")||0,n=t(e)||0,i=Ember.get(e,"totalSocialActivityCounts.numShares")||0,s=Ember.get(e,"totalSocialActivityCounts.numViews")||0
return{comments:a,reactions:n,shares:i,views:s}}
function t(e){const t=Ember.get(e,"totalSocialActivityCounts.reactionTypeCounts.value")
return t?t.reduce((e,t)=>t.count+e,0):Ember.get(e,"totalSocialActivityCounts.numLikes")}})
define("video-analytics/utils/get-social-gesture-highlights",["exports","video-analytics/utils/common"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.findSocialGestureHighlights=function(e,a){const n={urn:a,q:"socialUpdateAnalytics",numHighlightInfos:s}
return e.queryURL(t.VIDEO_ANALYTICS_VAPI_RESOURCE_END_POINT.SOCIAL_UPDATE_ANALYTICS,{cacheKey:(0,t.createCacheKey)(t.VIDEO_ANALYTICS_VAPI_RESOURCE_END_POINT.SOCIAL_UPDATE_ANALYTICS,n),params:n})}
e.extractSocialGestureHighlightsData=function(e){return Ember.get(e,"elements").filterBy("value.sectionType","socialGestureHighlights").map(e=>Ember.get(e,"value.highlights").map(e=>{const t=Ember.get(e,"value.controlNameSuffix")||"company",s=(Ember.get(e,a[t])||[]).map(e=>({name:Ember.get(e,n[t]),numViews:Ember.get(e,"numViews")})).sort((e,t)=>t.numViews-e.numViews)
return{infos:s,cardHeader:`i18n_audience_tab_${t}_card_header`,icon:i[t],type:t}})).reduce((e,t)=>e.concat(t),[])}
e.isSocialGestureHighlightsDataAvailable=function(e){return e.any(e=>Ember.get(e,"infos.firstObject.numViews")>0)}
const a={company:"value.companyHighlightInfos",occupation:"value.occupationHighlightInfos",region:"value.regionHighlightInfos"},n={company:"miniCompany.name",occupation:"viewerTitle",region:"regionName"},i={company:"company-buildings",occupation:"trophy",region:"location-pin"},s=8})
define("video-analytics/utils/get-social-update-statistics",["exports","@babel/runtime/helpers/esm/objectSpread2","video-analytics/utils/common","video/utils/video-helpers"],function(e,t,a,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.formatSocialUpdateStatistics=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return Ember.get(e,"elements").map(e=>{const{totalCount:a,statistics:n,statisticsForCurrentPeriod:s}=Ember.getProperties(e,"totalCount","statistics","statisticsForCurrentPeriod"),r=Ember.get(e,"type"),o=s&&Ember.get(s,"organicCount")||0,l=n.map(e=>{const{organicCount:a,timeRange:n}=Ember.getProperties(e,"organicCount","timeRange"),{start:s,end:o}=Ember.getProperties(n,"start","end"),l=i(a,r)
return{y:l,x:s,timeRange:{start:s,end:t?o-1:o}}}).sort((e,t)=>e.x-t.x)
return{type:r,infos:l,currentCount:i(o,r),totalCount:i(a,r)}})}
e.formatCvcSocialUpdateStatistics=function(e){let t=0
const n=Ember.get(e,"elements.firstObject.statistics")||[],i=(function(e){if(!e)return 0
const t=new Date(e)
return t.getHours()*a.TIME_VALUES.HOUR_IN_MS+t.getMinutes()*a.TIME_VALUES.MINUTE_IN_MS+t.getSeconds()*a.TIME_VALUES.SECOND_IN_MS})(Ember.get(n,"firstObject.timeRange.start"))
return{infos:n.map(e=>{const{organicCount:a,timeRange:n}=Ember.getProperties(e,"organicCount","timeRange")
t=Math.max(a,t)
const s=Ember.get(n,"start")-i,r=Ember.get(n,"end")-i
return{x:s,y:a,timeRange:{start:s,end:r}}}).sort((e,t)=>e.x-t.x),peakCount:t,type:a.GRAPH_CONTENT_TYPES.SHOW_CVC}}
e.getLiveVideoDuration=function(e){const t=Ember.get(e,"infos"),{firstObject:i,lastObject:s}=Ember.getProperties(t,"firstObject","lastObject")
if(!i||!s)return
return(0,n.formatTime)((s.x-i.x)/a.TIME_VALUES.SECOND_IN_MS)}
e.findSocialUpdateStatistics=function(e,n){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2]
const{SHOW_TOTAL_TIME_WATCH:s,SHOW_TOTAL_VIEWS:r,SHOW_TOTAL_VIEWERS:o}=a.GRAPH_CONTENT_TYPES,l=[s,r,o],c=Ember.testing?a.FAKE_TIME.DATE_NOW:Date.now(),d={types:l,urn:n,q:"socialUpdateStatistics"},u=i?"WEEKLY":"DAILY",m={start:c-(i?25:1)*a.TIME_VALUES.WEEK_IN_MS},p=(0,t.default)((0,t.default)({},d),{},{timeRange:m,granularity:u})
return e.queryURL(a.VIDEO_ANALYTICS_VAPI_RESOURCE_END_POINT.VOYAGER_IDENTITY_SOCIAL_UPDATE_STATISTICS,{params:p,cacheKey:(0,a.createCacheKey)(a.VIDEO_ANALYTICS_VAPI_RESOURCE_END_POINT.VOYAGER_IDENTITY_SOCIAL_UPDATE_STATISTICS,p),reload:!0})}
e.findCvcSocialUpdateStatistics=function(e,t){const n={urn:t,q:"concurrentViewerCounts"}
return e.queryURL(a.VIDEO_ANALYTICS_VAPI_RESOURCE_END_POINT.VOYAGER_IDENTITY_SOCIAL_UPDATE_STATISTICS,{params:n,cacheKey:(0,a.createCacheKey)(a.VIDEO_ANALYTICS_VAPI_RESOURCE_END_POINT.VOYAGER_IDENTITY_SOCIAL_UPDATE_STATISTICS,n),reload:!0})}
function i(e,t){return t===a.GRAPH_CONTENT_TYPES.SHOW_TOTAL_TIME_WATCH?Number((e/a.TIME_VALUES.MINUTE_IN_MS).toFixed(1)):e}})
define("video-analytics/utils/requests/social-update-analytics-header",["exports","extended/config/environment"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getUrl=a
e.default=function(e){const t=a(e)
return["com.linkedin.voyager.identity.me.socialUpdateAnalytics.Header",e,{adapterOptions:{url:t},reload:!0}]}
function a(e){return`/${t.default.namespace}/identity/socialUpdateAnalyticsHeader/${encodeURIComponent(e)}`}})

//# sourceMappingURL=engine-vendor.map