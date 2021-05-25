define.alias("artdeco-button/components/artdeco-button","participate-text-editor/components/artdeco-button")
define.alias("artdeco-modal/components/artdeco-confirmation-dialog","participate-text-editor/components/artdeco-confirmation-dialog")
define.alias("artdeco-dropdown/components/artdeco-dropdown-content","participate-text-editor/components/artdeco-dropdown-content")
define.alias("artdeco-dropdown/components/artdeco-dropdown-header","participate-text-editor/components/artdeco-dropdown-header")
define.alias("artdeco-dropdown/components/artdeco-dropdown-item","participate-text-editor/components/artdeco-dropdown-item")
define.alias("artdeco-dropdown/components/artdeco-dropdown-trigger","participate-text-editor/components/artdeco-dropdown-trigger")
define.alias("artdeco-dropdown/components/artdeco-dropdown","participate-text-editor/components/artdeco-dropdown")
define.alias("artdeco-modal/components/container","participate-text-editor/components/artdeco-modal-container")
define.alias("artdeco-modal/components/artdeco-modal-content","participate-text-editor/components/artdeco-modal-content")
define.alias("artdeco-modal/components/artdeco-modal-footer","participate-text-editor/components/artdeco-modal-footer")
define.alias("artdeco-modal/components/artdeco-modal-header","participate-text-editor/components/artdeco-modal-header")
define.alias("artdeco-modal/components/artdeco-modal","participate-text-editor/components/artdeco-modal")
define.alias("ember-vector-images/components/custom-image","participate-text-editor/components/custom-image")
define.alias("ember-wormhole/components/ember-wormhole","participate-text-editor/components/ember-wormhole")
define.alias("ember-vector-images/components/lazy-background","participate-text-editor/components/lazy-background")
define.alias("ember-vector-images/components/lazy-image","participate-text-editor/components/lazy-image")
define.alias("artdeco-icons-web/components/linkedin-logo","participate-text-editor/components/linkedin-logo")
define("participate-text-editor/components/text-editor-container",["exports","@glimmer/component"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=Ember.HTMLBars.template({id:"830nOQFx",block:'{"symbols":["typeahead","@class","@placeholder","@controlName","@jumpLinkTarget","@groupIdForMentionsTypeahead","@textChangeHandler","@onFoundUrl","@updateCharCount","@initialContent","@cursorRange","@setInsertContentHandler","@setResetEditorHandler","@associatedInputControlUrn","@controlType","@associatedEntityUrn","@rootObject","@updateMetadata","@recommendedMention","@lineHeightOffSet","@shouldFocusOnRender","@disabled","@onEditorFocus","@submitOnEnterKey","@onSubmitComment","@scrollableContainerSelector","@useScrollY"],"statements":[[5,"basic-typeahead@basic-typeahead",[],[["@alwaysExpanded"],[true]],{"statements":[[0,"\\n  "],[5,"participate-text-editor@text-editor",[],[["@class","@triggered-content","@arrowKeyPressed","@enterKeyPressed","@triggeredContentId","@ariaActiveId","@placeholder","@controlName","@jumpLinkTarget","@groupIdForMentionsTypeahead","@textChangeHandler","@onFoundUrl","@updateCharCount","@initialContent","@cursorRange","@setInsertContentHandler","@setResetEditorHandler","@associatedInputControlUrn","@controlType","@associatedEntityUrn","@rootObject","@updateMetadata","@recommendedMention","@lineHeightOffSet","@shouldFocusOnRender","@disabled","@onEditorFocus","@submitOnEnterKey","@onSubmitComment","@scrollableContainerSelector","@useScrollY"],[[23,2,[]],[23,1,["triggered-content"]],[23,1,["arrowKeyPressed"]],[23,1,["enterKeyPressed"]],[23,1,["triggeredContentId"]],[23,1,["ariaActiveId"]],[23,3,[]],[23,4,[]],[23,5,[]],[23,6,[]],[23,7,[]],[23,8,[]],[23,9,[]],[23,10,[]],[23,11,[]],[23,12,[]],[23,13,[]],[23,14,[]],[23,15,[]],[23,16,[]],[23,17,[]],[23,18,[]],[23,19,[]],[23,20,[]],[23,21,[]],[23,22,[]],[23,23,[]],[23,24,[]],[23,25,[]],[23,26,[]],[23,27,[]]]]],[0,"\\n"]],"parameters":[1]}]],"hasEval":false}',meta:{moduleName:"participate-text-editor/components/text-editor-container.hbs"}})
class n extends t.default{}e.default=n
Ember._setComponentTemplate(i,n)})
define("participate-text-editor/components/text-editor",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@glimmer/component","global-utils/utils/keyboard-utils","participate-text-editor/utils/constants","participate-text-editor/utils/text-editor-utils","participate-text-editor/utils/editor-setup","global-utils/utils/is-browser","participate-text-editor/utils/quill/utils","participate-text-editor/utils/quill/delta-model-transformers","global-utils/utils/url","ember-lifeline","participate-text-editor/utils/tracking/texteditor-tracking","ember-cli-pemberly-tracking/utils/tracking","participate-text-editor/utils/tracking/mentions-tracking","participate-text-editor/utils/tracking/hashtag-tracking"],function(e,t,i,n,r,a,o,s,l,d,c,u,h,p,g,m,f,T,E){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var y,b,x,v,S,_,A,M,I,O,k,C,w,D,N,P,q,H,R,U,j,L,Y,F,W,z,K,V,Q
const B=Ember.HTMLBars.template({id:"e5gFEfYY",block:'{"symbols":["queryFunction","@triggered-content","@groupIdForMentionsTypeahead","&attrs","@controlName","@jumpLinkTarget","@ariaActiveId","@disabled"],"statements":[[7,"div",false],[12,"class","editor-container"],[13,4],[8],[0,"\\n  "],[7,"div",false],[3,"did-insert",[[23,0,["initEditor"]]]],[8],[0,"\\n    "],[7,"div",false],[12,"class","editor-content"],[12,"data-control-name",[23,5,[]]],[12,"data-jump-link-target",[23,6,[]]],[12,"ondragover",[28,"fn",[[23,0,["onEditorDragover"]]],null]],[3,"did-update",[[23,0,["onAriaActiveIdAttrChange"]],[23,7,[]]]],[3,"did-update",[[23,0,["onDisabledAttrChange"]],[23,8,[]]]],[3,"participate-text-editor@editor-events",[[23,0,["onEditorEvents"]]]],[8],[0,"\\n    "],[9],[0,"\\n\\n"],[4,"if",[[23,0,["isTypeaheadAbleToExpand"]]],null,{"statements":[[4,"let",[[28,"if",[[23,0,["mentionShouldOpen"]],[28,"if",[[23,3,[]],[28,"search-ta-kit@fetch-results",null,[["transform","queryContext","type","useCase"],[[28,"action",[[23,0,[]],"transformTypeaheadResponse"],null],[28,"hash",null,[["groupId"],[[23,3,[]]]]],"GROUP_MEMBERS","MENTIONS"]]],[28,"search-ta-kit@fetch-results",null,[["transform","useCase"],[[28,"action",[[23,0,[]],"transformTypeaheadResponse"],null],"MENTIONS"]]]],null],[28,"search-ta-kit@fetch-hashtag-recommendations",null,[["commentary","urns"],[[23,0,["commentary"]],[23,0,["shareMediaUrns"]]]]]],null]],null,{"statements":[[0,"        "],[5,"participate-text-editor@typeahead-fetch",[],[["@fetchFn","@typeaheadQuery","@onTypeaheadResultsRendered","@typeaheadSelect","@triggered-content"],[[23,1,[]],[23,0,["typeaheadQuery"]],[28,"fn",[[23,0,["onTypeaheadResultsRendered"]]],null],[28,"fn",[[23,0,["typeaheadSelect"]]],null],[23,2,[]]]]],[0,"\\n"]],"parameters":[1]},null]],"parameters":[]},null],[0,"  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"participate-text-editor/components/text-editor.hbs"}})
let G=(y=Ember.inject.service("global-services@a11y-notification"),b=Ember.inject.service("authentication@authenticated-user"),x=Ember.inject.service("tracking"),v=Ember.inject.service("lix"),S=Ember._tracked,_=Ember._tracked,A=Ember._tracked,M=Ember._tracked,I=Ember._tracked,O=Ember._tracked,k=Ember._action,C=Ember._action,w=Ember._action,D=Ember._action,N=Ember._action,P=Ember._action,q=Ember._action,H=Ember._action,R=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"a11yNotification",U,this);(0,t.default)(this,"authenticatedUser",j,this);(0,t.default)(this,"tracking",L,this);(0,t.default)(this,"lix",Y,this);(0,t.default)(this,"hashtagShouldOpen",F,this);(0,t.default)(this,"mentionShouldOpen",W,this);(0,t.default)(this,"workflowId",z,this);(0,t.default)(this,"activeDescendantId",K,this);(0,t.default)(this,"typeaheadQuery",V,this);(0,t.default)(this,"commentary",Q,this)}get sharedMediaUrns(){var e
return[null===(e=this.args)||void 0===e?void 0:e.sharedMediaUrn]}get isTypeaheadAbleToExpand(){return this.hashtagShouldOpen||this.mentionShouldOpen}get texteditorTracker(){return new m.default(this.tracking,this.workflowId)}get dropDownIsActive(){return this.isTypeaheadAbleToExpand&&Ember.isPresent(this.activeDescendantId)}_getRecommendedMentionFromResultsList(e){const{recommendedMention:t}=this.args
return t?e.filter(e=>Ember.get(e,"objectUrn")===Ember.get(t,"objectUrn"))[0]:null}_filterTypeaheadResults(e){const t=this._getRecommendedMentionFromResultsList(e),i=e.filter(e=>!["ESCAPE_HATCH","AUTO_COMPLETE"].includes(Ember.get(e,"type")))
if(t){i.removeObject(t)
i.unshiftObject(t)
return i}if(this.shouldShowRecommendedMentionActor&&this.args.recommendedMention){i.unshiftObject(this.args.recommendedMention)
return i}return i}_setupScrollHandler(){if(c.default){const e=document.querySelector(this.args.scrollableContainerSelector)
this.scrollableContainerEl=e
e&&(0,g.addEventListener)(this,e,"scroll",this._onScroll)}}_onScroll(){(0,g.throttleTask)(this,"_closeTypeahead",100)}willDestroy(){super.willDestroy.apply(this,arguments);(0,g.runDisposables)(this)
this.scrollableContainerEl&&(0,g.removeEventListener)(this,this.scrollableContainerEl,"scroll",this._onScroll)}_dismissTypeaheadWithoutSelection(){var e
this.isDestroying||null===(e=this.onDismissWithoutSelection)||void 0===e||e.call(this,this.typeaheadQuery)}_generateNewWorkflowId(){this.workflowId=(0,f.generateTrackingId)()}_setActiveDescendent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
if(c.default){this.activeDescendantId=e
if(e){var t
null===(t=this.editorElement)||void 0===t||t.setAttribute("aria-activedescendant",e)}else{var i
null===(i=this.editorElement)||void 0===i||i.removeAttribute("aria-activedescendant")}}}_insertContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
t?this._insertTextAtCursor(e.text):this._appendTextAndMentions(e)}_resetEditor(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const{editor:t}=this
t.setContents([])
e&&t.history.clear()}_insertTextAtCursor(e){if(!e)return
const{editor:t}=this,{index:i=0}=t.getSelection(!0),n=t.getText()
let r=e
i>0&&!/\s/.test(n[i-1])&&(r=` ${r}`);["#","＃"].includes(e)||/\s/.test(r[r.length-1])||(r=`${r} `)
t.insertText(i,r,"user")
t.setSelection(i+r.length,0)}_appendTextAndMentions(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{editor:i}=this,{text:n,mentions:r}=e
if(n||r){const n=(0,h.deltaFromTextMentionsObject)(e),r=i.getContents(0,i.getLength()-1)
i.setContents(r.concat(n))
const{startCursor:a=i.getLength(),endCursor:o=0}=t
i.setSelection(a,o)}}_handleReportedTextChanges(e){var t,i,n,r
if(!e)return
const{mentions:a,text:o}=(0,h.deltaToTextMentionsObject)(e),s=e.ops.rejectBy("attributes").reduce((e,t)=>e.concat((0,p.getUrlsFromText)(t.insert)),[])
if(s.length){var l,d
null===(l=(d=this.args).onFoundUrl)||void 0===l||l.call(d,s[0])}null===(t=(i=this.args).updateCharCount)||void 0===t||t.call(i,o.length)
null===(n=(r=this.args).textChangeHandler)||void 0===n||n.call(r,a,o)}_handleArrowKey(e,t){var i,n
e.preventDefault()
null===(i=(n=this.args).arrowKeyPressed)||void 0===i||i.call(n,t)}_setShouldShowRecommendedMentionActor(e){const t=Ember.get(this.args,"recommendedMention.text.text"),i=t&&(0,l.mentionQueryMatchesRecommendedMention)(t,e)
this.shouldShowRecommendedMentionActor=i}_openTypeahead(e){let{typeaheadQuery:t,onTypeaheadSelect:i,typeaheadType:n,onDismissWithoutSelection:r}=e
if(c.default&&!this.editorWrapperElement.contains(document.activeElement))return
const{editor:a}=this
this.typeaheadType=n
if(a){this.typeaheadQuery=t
this.onTypeaheadSelect=i
this.onDismissWithoutSelection=r
this.commentary=a.getText()
this.typeaheadTopPosition=this._calculateTypeaheadTopOffset()
this[`${n}ShouldOpen`]=!0
this._setShouldShowRecommendedMentionActor(t)}}_handleFocusOut(e){let{relatedTarget:t}=e
if(!this.editorWrapperElement.contains(t)){this._dismissTypeaheadWithoutSelection()
this._closeTypeahead()}}_handleFocusIn(){var e,t
null===(e=(t=this.args).onEditorFocus)||void 0===e||e.call(t)}_fireControlInteractionEvent(e){this.tracking.fireInteractionEvent(e)}_fireCustomTexteditorTrackingEvent(e,t,i){this.texteditorTracker.fireTrackingEvent(e,t,i)}_dismissTypeaheadType(e){if(!this.isDestroying){if(this.typeaheadPopulatedwithType===e){this._dismissTypeaheadWithoutSelection()
this.typeaheadPopulatedwithType=null}this[`${e}ShouldOpen`]=!1
this.isTypeaheadAbleToExpand||this._closeTypeahead()}}_closeTypeahead(){var e
if(!this.isDestroying){this.mentionShouldOpen=!1
this.hashtagShouldOpen=!1
this.typeaheadPopulatedwithType=null
this.typeaheadQuery=null
this._setActiveDescendent()
null===(e=this.editorElement)||void 0===e||e.removeAttribute("aria-owns")}}_calculateTypeaheadTopOffset(){const e=c.default&&this.args.useScrollY?window.scrollY:0,t=c.default?(0,l.getElementDistanceFromTopOfWindow)(this.editorWrapperElement)-this.editorWrapperElement.getBoundingClientRect().top-e:0,{editor:i}=this,{index:n=0}=i.getSelection()||{},{top:r,height:a}=i.getBounds(n)
return this.editorWrapperElement.offsetTop+r+a*Ember.getWithDefault(this,"lineHeightOffSet",1.2)-t}_handleKeyUp(e){if(this.typeaheadPopulatedwithType&&(0,o.isEscapeKey)(e)){e.stopPropagation()
this._dismissTypeaheadWithoutSelection()
this._closeTypeahead()}}_getFormattedMentionsResults(e){const t=[]
e.forEach((e,i)=>{const n={entityUrn:Ember.get(e,"objectUrn"),position:{index:i},isCacheHit:!1}
t.push(n)})
return t}_getFormattedHashtagResults(e){const t=[]
e.forEach((e,i)=>{const n={entityUrn:Ember.get(e,"objectUrn"),position:{index:i},trackingId:Ember.get(e,"trackingId")}
t.push(n)})
return t}_trackTypeaheadRenderedImpressionsSetup(e){switch(this.typeaheadType){case s.TYPEAHEAD_TYPES_MAP.MENTION:{const t={searchHeader:(0,T.getSearchHeaderForMentionsTrackingEvent)(this.typeaheadQuery),results:this._getFormattedMentionsResults(e)}
this._fireCustomTexteditorTrackingEvent("MentionSuggestionImpressionEvent",t,s.TYPEAHEAD_TYPES_MAP.MENTION)
break}case s.TYPEAHEAD_TYPES_MAP.HASHTAG:{const t={searchHeader:(0,E.getSearchHeaderForHashtagTrackingEvent)(this.typeaheadQuery),results:this._getFormattedHashtagResults(e),hashtagSourceType:"TYPEAHEAD"}
this._fireCustomTexteditorTrackingEvent("HashtagSuggestionImpressionEvent",t,s.TYPEAHEAD_TYPES_MAP.HASHTAG)
break}}}_adjustTypeaheadPositioning(){const e=this.editorWrapperElement.querySelector(".editor-typeahead-fetch")
e&&(e.style.top=`${this.typeaheadTopPosition}px`)}initEditor(e){if(e){var t,i,n,r
const a=(0,d.setupQuillEditor)(e,()=>!this.isDestroying&&this.dropDownIsActive,this.args.placeholder,e=>(0,g.debounceTask)(this,"_handleReportedTextChanges",e,300),this._openTypeahead.bind(this),this._dismissTypeaheadType.bind(this),this._generateNewWorkflowId.bind(this),this._fireCustomTexteditorTrackingEvent.bind(this),this._fireControlInteractionEvent.bind(this),this.tracking.generateControlUrn(this.args.associatedInputControlUrn),this.args.associatedEntityUrn,this.args.controlType,this.args.rootObject,this.args.updateMetadata,this.args.shouldFocusOnRender)
this.editor=a
this.editorWrapperElement=e
this.editorElement=this.editorWrapperElement.querySelector(s.QUILL_EDITOR_SELECTOR)
this.args.initialContent&&this._appendTextAndMentions(this.args.initialContent,this.args.cursorRange)
this.args.disabled&&this.editor.disable()
null===(t=(i=this.args).setInsertContentHandler)||void 0===t||t.call(i,this._insertContent.bind(this))
null===(n=(r=this.args).setResetEditorHandler)||void 0===n||n.call(r,this._resetEditor.bind(this))
this._setupScrollHandler()}}onEditorEvents(e){switch(null==e?void 0:e.type){case"keydown":this._handleKeyDown(e)
break
case"keyup":this._handleKeyUp(e)
break
case"focusin":this._handleFocusIn()
break
case"focusout":this._handleFocusOut(e)}}_handleKeyDown(e){if(!e.isComposing)if(this.typeaheadPopulatedwithType){if((0,o.isDownArrowKey)(e))this._handleArrowKey(e,s.KEY_DOWN)
else if((0,o.isUpArrowKey)(e))this._handleArrowKey(e,s.KEY_UP)
else if((0,o.isTabKey)(e)){this._dismissTypeaheadWithoutSelection()
this._closeTypeahead()}else if((0,o.isEnterKey)(e))if(this.dropDownIsActive){var t,i
e.preventDefault()
null===(t=(i=this.args).enterKeyPressed)||void 0===t||t.call(i)}else{this._dismissTypeaheadWithoutSelection()
this._closeTypeahead()}}else if((0,o.isEnterKey)(e)&&this.args.submitOnEnterKey){var n,r
const{text:e,mentions:t}=(0,h.deltaToTextMentionsObject)(this.editor.getContents())
null===(n=(r=this.args).onSubmitComment)||void 0===n||n.call(r,e,t)}}onAriaActiveIdAttrChange(){this._setActiveDescendent(this.args.ariaActiveId)}onDisabledAttrChange(){this.editor.enable(!this.args.disabled)}onEditorDragover(e){e.preventDefault()
return!1}onTypeaheadResultsRendered(e){if(c.default&&!Ember.isEmpty(e)){var t
this._adjustTypeaheadPositioning()
this._setActiveDescendent()
this.typeaheadPopulatedwithType=this.typeaheadType
this.typeheadResultsList=e
null===(t=this.editorElement)||void 0===t||t.setAttribute("aria-owns",this.args.triggeredContentId)
this._trackTypeaheadRenderedImpressionsSetup(e)}}transformTypeaheadResponse(e){return e.length?this._filterTypeaheadResults(e):e}typeaheadSelect(e,t){var i
this._closeTypeahead()
const n=this.typeheadResultsList.indexOf(t),r=(0,u.normalizeTypeaheadResponse)(t)
null===(i=this.onTypeaheadSelect)||void 0===i||i.call(this,r,n)}},U=(0,n.default)(R.prototype,"a11yNotification",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=(0,n.default)(R.prototype,"authenticatedUser",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=(0,n.default)(R.prototype,"tracking",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Y=(0,n.default)(R.prototype,"lix",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=(0,n.default)(R.prototype,"hashtagShouldOpen",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),W=(0,n.default)(R.prototype,"mentionShouldOpen",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),z=(0,n.default)(R.prototype,"workflowId",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=(0,n.default)(R.prototype,"activeDescendantId",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=(0,n.default)(R.prototype,"typeaheadQuery",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=(0,n.default)(R.prototype,"commentary",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,n.default)(R.prototype,"initEditor",[k],Object.getOwnPropertyDescriptor(R.prototype,"initEditor"),R.prototype),(0,n.default)(R.prototype,"onEditorEvents",[C],Object.getOwnPropertyDescriptor(R.prototype,"onEditorEvents"),R.prototype),(0,n.default)(R.prototype,"onAriaActiveIdAttrChange",[w],Object.getOwnPropertyDescriptor(R.prototype,"onAriaActiveIdAttrChange"),R.prototype),(0,n.default)(R.prototype,"onDisabledAttrChange",[D],Object.getOwnPropertyDescriptor(R.prototype,"onDisabledAttrChange"),R.prototype),(0,n.default)(R.prototype,"onEditorDragover",[N],Object.getOwnPropertyDescriptor(R.prototype,"onEditorDragover"),R.prototype),(0,n.default)(R.prototype,"onTypeaheadResultsRendered",[P],Object.getOwnPropertyDescriptor(R.prototype,"onTypeaheadResultsRendered"),R.prototype),(0,n.default)(R.prototype,"transformTypeaheadResponse",[q],Object.getOwnPropertyDescriptor(R.prototype,"transformTypeaheadResponse"),R.prototype),(0,n.default)(R.prototype,"typeaheadSelect",[H],Object.getOwnPropertyDescriptor(R.prototype,"typeaheadSelect"),R.prototype),R)
e.default=G
Ember._setComponentTemplate(B,G)})
define("participate-text-editor/components/typeahead-fetch",["exports","@glimmer/component"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=Ember.HTMLBars.template({id:"ZJeZ0GAX",block:'{"symbols":["results","content","result","@typeaheadSelect","@triggered-content","&attrs","@typeaheadQuery","@onTypeaheadResultsRendered","@fetchFn"],"statements":[[7,"div",false],[12,"class","editor-typeahead-fetch"],[13,6],[8],[0,"\\n  "],[5,"basic-typeahead@ta-fetch",[],[["@keywords","@onFetchResolve","@fetchFn"],[[23,7,[]],[23,8,[]],[23,9,[]]]],{"statements":[[0,"\\n"],[4,"if",[[23,1,[]]],null,{"statements":[[4,"component",[[28,"ember-holy-futuristic-template-namespacing-batman@-translate-dynamic-2",[[23,5,[]]],null]],[["className"],["editor-typeahead__typeahead-tray"]],{"statements":[[4,"each",[[23,1,[]]],null,{"statements":[[0,"          "],[6,[23,2,["selectable"]],[],[["@class","@keywordsValue","@onSelect","@value"],["editor-typeahead__typeahead-item",[23,3,["text","text"]],[23,4,[]],[23,3,[]]]],{"statements":[[0,"\\n            "],[5,"search-ta-kit@typeahead-result",[],[["@hit"],[[23,3,[]]]]],[0,"\\n          "]],"parameters":[]}],[0,"\\n"]],"parameters":[3]},null]],"parameters":[2]},null]],"parameters":[]},null],[0,"  "]],"parameters":[1]}],[0,"\\n"],[9]],"hasEval":false}',meta:{moduleName:"participate-text-editor/components/typeahead-fetch.hbs"}})
class n extends t.default{}e.default=n
Ember._setComponentTemplate(i,n)})
define("participate-text-editor/config/environment",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
let t
try{const e="participate-text-editor/config/environment",i=document.querySelector('meta[name="'+e+'"]').getAttribute("content")
t=JSON.parse(unescape(i))}catch(n){t={}}var i=t
e.default=i})
define.alias("ember-m3/adapters/interop-debug-adapter","participate-text-editor/data-adapter")
define.alias("ember-cli-pemberly-i18n/helpers/bidi-dir","participate-text-editor/helpers/bidi-dir")
define.alias("ember-cli-pemberly-i18n/helpers/format-currency","participate-text-editor/helpers/format-currency")
define.alias("ember-cli-pemberly-i18n/helpers/format-date","participate-text-editor/helpers/format-date")
define.alias("ember-cli-pemberly-i18n/helpers/format-name","participate-text-editor/helpers/format-name")
define.alias("ember-cli-pemberly-i18n/helpers/format-number","participate-text-editor/helpers/format-number")
define.alias("ember-cli-pemberly-i18n/helpers/format-time","participate-text-editor/helpers/format-time")
define.alias("ember-cli-pemberly-i18n/helpers/format-truncate","participate-text-editor/helpers/format-truncate")
define.alias("ember-cli-pemberly-i18n/helpers/is-any-locale","participate-text-editor/helpers/is-any-locale")
define.alias("ember-cli-pemberly-i18n/helpers/is-cjk-language","participate-text-editor/helpers/is-cjk-language")
define.alias("ember-cli-pemberly-i18n/helpers/is-rtl-content","participate-text-editor/helpers/is-rtl-content")
define.alias("ember-cli-pemberly-i18n/helpers/is-rtl-language","participate-text-editor/helpers/is-rtl-language")
define.alias("artdeco-icons-web/helpers/li-icon","participate-text-editor/helpers/li-icon")
define.alias("ember-app-scheduler/helpers/route-idle","participate-text-editor/helpers/route-idle")
define.alias("ember-cli-pemberly-i18n/helpers/t-link-to","participate-text-editor/helpers/t-link-to")
define.alias("ember-cli-pemberly-i18n/helpers/t-make-name","participate-text-editor/helpers/t-make-name")
define.alias("ember-cli-pemberly-i18n/helpers/t","participate-text-editor/helpers/t")
define("participate-text-editor/initializers/artdeco",["exports","artdeco-eyeglass"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.initialize=r
e.default=void 0
const i=[t.default.contextClasses,t.default.floatingLabel,t.default.focusOutline]
function n(e,t){const n=e[t]
e[t]=function(){i.forEach(e=>e&&"function"==typeof e.teardown&&e.teardown())
n&&"function"==typeof n&&n.call(e)}}function r(e){if("undefined"!=typeof document){i.forEach(e=>e.install())
"function"==typeof e.willDestroy?n(e,"willDestroy"):"function"==typeof e.destroy&&n(e,"destroy")}}var a={name:"artdeco",initialize:r}
e.default=a})
define.alias("ember-cli-pemberly-i18n/initializers/i18n","participate-text-editor/initializers/i18n")
define("participate-text-editor/initializers/icons",["exports","artdeco-icons-web/src/icons","participate-text-editor/config/environment"],function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
function n(e){throw e}var r={name:"icons",initialize:function(){const{environment:e,APP:r}=i.default
let a,o
r&&({artdecoCustomSpriteUrl:a,artdecoCustomSpriteName:o}=r)
const s="test"!==e
t.default.load(s,a,o).catch(n)}}
e.default=r})
define.alias("ember-m3/initializers/m3-store","participate-text-editor/initializers/m3-store")
define("participate-text-editor/initializers/override-safestring",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.initialize=r
e.default=void 0
const t="ember-glimmer",i="ember-htmlbars/utils/string",n="@ember/-internals/glimmer"
function r(){let e,r=Ember.__loader.require.has
if(r(n))e=Ember.__loader.require(n).SafeString
else if(r(t))e=Ember.__loader.require(t).SafeString
else{if(!r(i))throw new Error("Cannot locate SafeString class for overriding")
e=Ember.__loader.require(i).SafeString}e.prototype.toHTML=function(){return jSecure.sanitizeHTML(this.toString())}
e.prototype.toString=function(){return`${this.string}`}}var a={name:"override-safestring",initialize:r}
e.default=a})
define("participate-text-editor/instance-initializers/-t-link-to",["exports","ember-stdlib/utils/is-browser"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.initialize=i
e.default=void 0
function i(e){t.default&&e.lookup("service:-t-link-to")}var n={name:"-t-link-to",initialize:i}
e.default=n})
define.alias("@ember/render-modifiers/modifiers/did-insert","participate-text-editor/modifiers/did-insert")
define.alias("@ember/render-modifiers/modifiers/did-update","participate-text-editor/modifiers/did-update")
define("participate-text-editor/modifiers/editor-events",["exports","ember-modifier"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var i=(0,t.modifier)((e,t)=>{let[i]=t
e.addEventListener("keydown",i)
e.addEventListener("keyup",i)
e.addEventListener("focusin",i)
e.addEventListener("focusout",i)
return()=>{e.removeEventListener("keydown",i)
e.removeEventListener("keyup",i)
e.removeEventListener("focusin",i)
e.removeEventListener("focusout",i)}})
e.default=i})
define.alias("@ember/render-modifiers/modifiers/will-destroy","participate-text-editor/modifiers/will-destroy")
define.alias("ember-cli-pemberly-i18n/services/-t-link-to","participate-text-editor/services/-t-link-to")
define.alias("artdeco-modal/services/artdeco-modal","participate-text-editor/services/artdeco-modal")
define.alias("client-sensor-web/services/client-sensor","participate-text-editor/services/client-sensor")
define.alias("ember-cli-pemberly-i18n/services/formatter","participate-text-editor/services/formatter")
define.alias("ember-cli-pemberly-i18n/services/i18n","participate-text-editor/services/i18n")
define.alias("@linkedin/ember-pem/services/internal-event-utils","participate-text-editor/services/internal-event-utils")
define.alias("@linkedin/ember-pem/services/internal-pem-tracking","participate-text-editor/services/internal-pem-tracking")
define.alias("ember-cli-pemberly-i18n/services/locale","participate-text-editor/services/locale")
define.alias("ember-m3/services/m3-schema-manager","participate-text-editor/services/m3-schema-manager")
define.alias("@linkedin/ember-pem/services/pem-tracking","participate-text-editor/services/pem-tracking")
define.alias("ember-cli-pemberly-m3/services/store","participate-text-editor/services/store")
define("participate-text-editor/utils/constants",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.TYPEAHEAD_TYPES_MAP=e.BLOT_WHITELIST=e.KEY_DOWN=e.KEY_RIGHT=e.KEY_UP=e.KEY_LEFT=e.QUILL_EDITOR_SELECTOR=e.QUILL_CONTAINER_SELECTOR=void 0
e.QUILL_CONTAINER_SELECTOR=".editor-content"
e.QUILL_EDITOR_SELECTOR=".ql-editor"
e.KEY_LEFT="Left"
e.KEY_UP="Up"
e.KEY_RIGHT="Right"
e.KEY_DOWN="Down"
const t=new Set(["hashtag","mention","guard"])
e.BLOT_WHITELIST=t
e.TYPEAHEAD_TYPES_MAP={MENTION:"mention",HASHTAG:"hashtag"}})
define.alias("client-sensor-web/utils/counter-buffer","participate-text-editor/utils/counter-buffer")
define("participate-text-editor/utils/editor-setup",["exports","@babel/runtime/helpers/esm/objectSpread2","participate-text-editor/utils/constants","participate-text-editor/utils/quill/modules/hashtag","participate-text-editor/utils/quill/modules/mention","participate-text-editor/utils/quill/modules/clipboard","quill","participate-text-editor/utils/quill/quill-keyboard-bindings"],function(e,t,i,n,r,a,o,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.setupQuillEditor=function(e,n,r,a,d,c,u,h,p,g,m,f,T,E,y){const b={"typeahead enter":{key:"enter",handler:()=>!n()}},x=(0,t.default)((0,t.default)({},s.enterKeyBinding),b),v=new o.default(e.querySelector(`${i.QUILL_CONTAINER_SELECTOR}`),{placeholder:r,formats:["hashtag","mention","guard","bold"],modules:{mention:{actions:{openTypeahead:d,closeTypeahead:c,generateNewWorkflowId:u,fireCustomTexteditorTrackingEvent:h,fireControlInteractionEvent:p},trackingData:{associatedInputControlUrn:g,associatedEntityUrn:m,controlType:f,rootObject:T,updateMetadata:E}},hashtag:{actions:{openTypeahead:d,closeTypeahead:c,generateNewWorkflowId:u,fireCustomTexteditorTrackingEvent:h,fireControlInteractionEvent:p},trackingData:{associatedInputControlUrn:g,controlType:f}},keyboard:{bindings:x},history:{delay:50,maxStack:300}}})
delete v.getModule("keyboard").bindings[l.keys.TAB]
const S=v.container.querySelector(i.QUILL_EDITOR_SELECTOR)
S.setAttribute("aria-placeholder",r)
S.setAttribute("aria-label",r)
S.setAttribute("role","textbox")
S.setAttribute("aria-multiline",!0)
S.setAttribute("data-test-ql-editor-contenteditable",!0)
a&&v.on("text-change",()=>{a(v.getContents())})
y&&v.focus()
return v}
o.default.register({"modules/mention":r.default,"modules/hashtag":n.default,"modules/clipboard":a.default})
const l=o.default.import("modules/keyboard")})
define.alias("client-sensor-web/utils/helpers","participate-text-editor/utils/helpers")
define("participate-text-editor/utils/quill/blots/hashtag",["exports","quill"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=t.default.import("blots/inline")
class n extends i{}n.className="ql-hashtag"
n.tagName="strong"
n.blotName="hashtag"
var r=n
e.default=r})
define("participate-text-editor/utils/quill/blots/mention",["exports","@babel/runtime/helpers/esm/toConsumableArray","quill","participate-text-editor/utils/quill/mention-utils"],function(e,t,i,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const r=i.default.import("blots/inline"),a=i.default.import("blots/cursor"),o={characterData:!0,characterDataOldValue:!0,subtree:!0,childList:!0}
let s=0
class l extends r{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
super(...arguments)
this.allowSegmentDeletion=!1
this.textSections=[]
this.originalText=""
t.entityUrn&&(this.entityUrn=t.entityUrn)
if(t.objectUrn){this.objectUrn=t.objectUrn
this.allowSegmentDeletion=(0,n.allowSegmentDeletion)(this.objectUrn)}if(t.originalText){this.textSections=l.getMentionTextSections(t.originalText)
this.originalText=t.originalText
this.cachedDomText=t.originalText}this.observer=new MutationObserver(e=>{this.update(e)})
this._enableMentionObserver()}static create(e){const t=super.create.apply(this,arguments)
t.setAttribute("href","#")
t.setAttribute("data-entity-urn",e.entityUrn)
t.setAttribute("data-guid",e.guid||l.createGuid())
t.setAttribute("data-object-urn",e.objectUrn)
t.setAttribute("data-original-text",e.originalText)
t.setAttribute("spellcheck","false")
return t}static formats(e){const t={}
t.entityUrn=e.getAttribute("data-entity-urn")||""
t.guid=e.getAttribute("data-guid")||""
t.objectUrn=e.getAttribute("data-object-urn")||""
t.originalText=e.getAttribute("data-original-text")||""
return t}static createGuid(){return s++}static getMentionTextSections(e){const t=/\s+/g,i=[]
let n=0,r=t.exec(e)
for(;r;){const[a]=r,o=e.slice(n,r.index)
o&&i.push({text:o,isSeparator:!1})
i.push({text:a,isSeparator:!0})
n=r.index+a.length
r=t.exec(e)}const a=e.slice(n,e.length)
a&&i.push({text:a,isSeparator:!1})
return i}static joinMentionTextSections(e){return e.map(e=>e.text).join("")}static getTextIndexOfSection(e,t){const i=e.indexOf(t)
if(-1===i)throw new Error(`Section not found in textSections - section: ${t}, textSections: ${e}`)
return e.slice(0,i).reduce((e,t)=>e+t.text.length,0)}optimize(){super.optimize.apply(this,arguments)
let{next:e,prev:t}=this
if((0,n.nextBlotIsEqualMention)(e,this)){this._disableMentionObserver()
for(;(0,n.nextBlotIsEqualMention)(e,this);){e.moveChildren(this)
e.remove()
e=e.next}this._enableMentionObserver()}else if((0,n.prevBlotIsEqualMention)(t,this)){this._disableMentionObserver()
for(;(0,n.nextBlotIsEqualMention)(e,this);){t.moveChildren(this)
t.remove()
t=t.prev}this._enableMentionObserver()}}update(e){super.update.apply(this,arguments)
e.forEach(e=>{if(!e.oldValue||!e.oldValue.includes(a.CONTENTS)){if("childList"===e.type&&e.target.className.includes(l.className)){if((0,t.default)(e.addedNodes).some(e=>e.classList&&e.classList.contains(a.className))){this.scroll.emitter.emit("mention-will-reload")
return}this.textSections=l.getMentionTextSections(this.domNode.innerText)}if("characterData"===e.type){const t=i.default.find(e.target)
if(!(t&&t.parent instanceof l))return
e.target.length<e.oldValue.length&&this.didRemoveMentionTextOnUpdate(e)
e.target.length>e.oldValue.length&&this.didAddMentionTextOnUpdate(e)
e.target.length===e.oldValue.length&&e.target.data!==e.oldValue&&this.didAddMentionTextOnUpdate(e)}}})}updateDomText(e){this._disableMentionObserver()
this.children.head.domNode.data=e
this._enableMentionObserver()
this.cachedDomText=e}deleteAt(e,t){if(0!==e||t!==this.length())if(this.cachedDomText.length<this.domNode.innerText.length)this.updateDomText(this.cachedDomText)
else{super.deleteAt.apply(this,arguments)
this.removeWordsInRange(e,e+t)}else{this.scroll.emitter.emit("mention-range-will-change",this,0)
super.deleteAt.apply(this,arguments)}}_disableMentionObserver(){this.observer.disconnect()}_enableMentionObserver(){this.observer.observe(this.domNode,o)}_shouldRemoveMentionSegment(){const e=l.joinMentionTextSections(this.textSections)
return this.domNode.innerText!==e}didAddMentionTextOnUpdate(e){const t=e.oldValue,i=e.target.textContent,r=i.length-t.length,a=(0,n.getIndexFirstDiff)(t,i),o=l.joinMentionTextSections(this.textSections)
if(0!==a)if(a+r!==this.length())this.scroll.emitter.emit("mention-will-unwrap",this)
else{const e=i.substring(a),n=t+e
if(n===o||n===this.originalText){this.textSections=l.getMentionTextSections(n)
return}this.scroll.emitter.emit("mention-move-text-after",this,e)
this.cachedDomText=this.domNode.innerText}else{const e=i.substring(a,r),n=e+t
if(n===o||n===this.originalText){this.textSections=l.getMentionTextSections(n)
return}this.scroll.emitter.emit("mention-move-text-before",this,e)
this.cachedDomText=this.domNode.innerText}}didRemoveMentionTextOnUpdate(e){if(this._shouldRemoveMentionSegment()){const t=e.oldValue,i=e.target.textContent,r=(0,n.getIndexFirstDiff)(t,i)
this.removeWordsInRange(r,r+1)}}static getSectionsToRevove(e,i,n){const r=new Set
e.forEach((t,a)=>{const o=l.getTextIndexOfSection(e,t),s=o+t.text.length
if(o<=i&&i<s){r.add(a)
t.isSeparator&&e[a-1]&&r.add(a-1)}if(o<n&&n<=s){r.add(a)
e[a-1]&&r.add(a-1)}i<o&&s<n&&r.add(a)})
return(0,t.default)(r).sort((e,t)=>e-t)}removeWordsInRange(e,t){if(this.textSections.length<=2||!this.allowSegmentDeletion){this.scroll.emitter.emit("mention-will-remove",this)
return}const i=l.getSectionsToRevove(this.textSections,e,t)
if(!i.length)return
const n=l.getTextIndexOfSection(this.textSections,this.textSections[i[0]])
this.textSections=this.textSections.filter((e,t)=>!i.includes(t))
if(this.textSections.length){this.textSections[0].isSeparator&&this.textSections.shift()
this.textSections[this.textSections.length-1].isSeparator&&this.textSections.pop()}this.updateDomText(l.joinMentionTextSections(this.textSections))
this.scroll.emitter.emit("mention-range-will-change",this,n)}}l.className="ql-mention"
l.tagName="a"
l.blotName="mention"
var d=l
e.default=d})
define("participate-text-editor/utils/quill/delta-model-transformers",["exports","rich-text/utils/constants","rich-text/utils/mentions-texteditor-helpers"],function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.deltaFromTextMentionsObject=function(e){const n={ops:[]},{text:r="",mentions:a=[]}=e,o=(function(e,n){const r=(0,t.getHashtagMatchRegex)()
let a=r.exec(e)
const o=[]
for(;a;){const t={}
t.match=(0,i.getHashtagAttributes)(a)
t.type="hashtag"
o.push(t)
a=r.exec(e)}return n.concat(o).sort((e,t)=>e.match.start-t.match.start)})(r,a)
o.length?o[0].match.start>0&&n.ops.push({insert:r.slice(0,o[0].match.start)}):n.ops.push({insert:r})
o.forEach((e,t)=>{const i=(function(e){if(Ember.get(e,"entity.entityUrn"))return{insert:e.match.text,attributes:{mention:{entityUrn:Ember.get(e,"entity.entityUrn"),objectUrn:Ember.get(e,"entity.objectUrn"),originalText:e.match.text,text:e.match.text}}}
if("hashtag"===e.type)return{insert:e.match.text,attributes:{hashtag:!0}}
return null})(e)
n.ops.push(i)
const a=e.match.start+e.match.length,s=o[t+1]
s?s.match.start>a&&n.ops.push({insert:r.slice(a,s.match.start)}):n.ops.push({insert:r.slice(a)})})
n.ops.push({insert:"\n"})
return n}
e.deltaToTextMentionsObject=function(e){let t=0
const i=e.ops.reduce((e,i)=>{const n=i.insert
e.text+=n
i.attributes&&i.attributes.mention&&e.mentions.push({match:{start:t,length:n.length,text:n},entity:{entityUrn:i.attributes.mention.entityUrn}})
t+=n.length
return e},{text:"",mentions:[]})
i.text.endsWith("\n")&&(i.text=i.text.slice(0,-1))
return i}})
define("participate-text-editor/utils/quill/formats/guard",["exports","quill"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=t.default.import("blots/inline")
class n extends i{static create(){return super.create()}static formats(){return!0}}n.className="ql-guard"
n.blotName="guard"
n.CONTENT="​"
var r=n
e.default=r})
define("participate-text-editor/utils/quill/hashtag-utils",["exports","@babel/runtime/helpers/esm/objectSpread2","quill","rich-text/utils/constants","participate-text-editor/utils/constants"],function(e,t,i,n,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getValidHashtags=s
e.createDeltaWithPotentialHashtag=l
e.transformDelta=function(e){let i=new a
e.forEach((e,o)=>{const{operations:s,previousOperation:d}=(function(e,i,a){const o=(0,t.default)((0,t.default)({},e),{},{attributes:Object.keys(e.attributes||{}).reduce((t,i)=>{r.BLOT_WHITELIST.has(i)&&(t[i]=e.attributes[i])
return t},{})}),s=o.insert,d=i>0&&a[a.length-1]
if(o.attributes.hashtag)return (function(e,t,i){const r=l(e)
if(t&&t.attributes&&t.attributes.hashtag){const e=r[0].insert,a=(0,n.getHashtagMatchRegex)()
let o=e.match(a)
if(o&&o[0]===e)return{operations:[{insert:i.insert}]}
const s=t.insert+i.insert
if((o=s.match(a))&&o[0]===s){t.insert+=i.insert
return{previousOperation:t}}}else if(t&&!t.attributes&&t.insert[t.insert.length-1].match(/[/&\w]/)){t.insert+=i.insert
return{previousOperation:t}}return{operations:r}})(s,d,o)
if(o.attributes.mention||o.attributes.guard)return{operations:[o]}
return (function(e,t){const i=l(e)
if(t&&t.attributes&&t.attributes.hashtag){const[e]=i
if(e.attributes&&e.attributes.hashtag)i[0]={insert:e.insert}
else if(!e.attributes){const r=(0,n.getHashtagMatchRegex)()
let a=t.insert
const o=e.insert
let s=0
for(;s<o.length;s++){const e=a+o.slice(s,s+1),t=e.match(r)
if(!t||t[0]!==e)break
a=e}const l=o.slice(s)
l?i[0].insert=l:i.shift()
if(t.insert!==a){t.insert=a
return{operations:i,previousOperation:t}}return{operations:i}}}else if(t&&!t.attributes&&t.insert.length&&t.insert[t.insert.length-1].match(/[/&\w]/)){t.insert+=i[0].insert
i.shift()
return{previousOperation:t,operations:i}}return{operations:i}})(s,d)})(e,o,i.ops)
d&&(i.ops[i.ops.length-1]=d)
s&&s.length>0&&(i=i.concat(new a(s)))})
return i}
const a=i.default.import("delta")
function o(e){const[,t,i]=e
return{text:i,start:t?e.index+1:e.index,length:i.length}}function s(e){const t=(0,n.getHashtagMatchRegex)()
let i=t.exec(e)
const r=[]
for(;i;){r.push(o(i))
i=t.exec(e)}return r}function l(e){const t=s(e),i=[]
if(0===t.length)i.push({insert:e})
else{const n=t[t.length-1],r=n.start+n.length===e.length
let a=0
t.forEach(t=>{a<t.start&&i.push({insert:e.slice(a,t.start)})
i.push({insert:t.text,attributes:{hashtag:!0}})
a=t.start+t.length})
r||i.push({insert:e.slice(a)})}return i}})
define("participate-text-editor/utils/quill/mention-utils",["exports","global-utils/utils/urn-converter","participate-text-editor/utils/quill/utils","participate-text-editor/utils/quill/blots/mention"],function(e,t,i,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.allowSegmentDeletion=function(e){if(!e)return!1
const{type:i}=(0,t.fromUrn)(e,!1)
return r.includes(i)}
e.getIndexFirstDiff=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(null!==e&&null!==t&&e!==t){let i=0
for(;e[i]===t[i];)i++
return i}return-1}
e.isCharacterWhiteSpace=function(e,t){if(e){const i=new RegExp(/^\s$/)
return i.test(e.charAt(t))}return!1}
e.nextBlotIsEqualMention=function(e,t){return e instanceof n.default&&e.prev===t&&(0,i.isShallowEqualObjects)(t.formats().mention,e.formats().mention)}
e.getSearchQuery=function(e,t){const{before:n,current:r}=(function(e,t){const i=[]
let n=null,r=0
for(let a=0;a<e.ops.length;a++){const o=e.ops[a]
if(!((r+=o.insert.length)<t)){n=o
break}i.push(o)}return{before:i,current:n}})(e,t.index)
if(!r)return null
const l=(function(e,t){const i=e.insert.slice(0,t.index)
return s.reduce((e,t)=>{const n=i.lastIndexOf(t)
if(-1===n)return e
const r=n+t.length
return e&&e.indexAfterToken>r?e:{indexAfterToken:r,token:t}},null)})(r,t)
if(null===l)return null
const d=l.indexAfterToken-l.token.length
if(d>0&&(0,i.isAlphaNumericCharacter)(r.insert[d-1]))return null
const c=n.reduce((e,t)=>e+t.insert.length,0),u=l.indexAfterToken+c,h=t.index-c
if(h===l.indexAfterToken){if(r.insert.slice(l.indexAfterToken).match(/^[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/))return{query:r.insert[l.indexAfterToken],queryStartIndex:l.indexAfterToken,queryToken:l.token}
const e=r.insert.slice(l.indexAfterToken).match(/^\w+/)
if(!e)return{query:a,queryStartIndex:u,queryToken:l.token}}let p=r.insert.slice(l.indexAfterToken,h)
const g=r.insert.slice(h).match(/^\w+/)
g&&(p+=g[0])
if(!(function(e){return-1===e.indexOf("\n")&&e.length<=o})(p))return null
return{query:p,queryToken:l.token,queryStartIndex:u}}
e.prevBlotIsEqualMention=function(e,t){return e instanceof n.default&&e.next===t&&(0,i.isShallowEqualObjects)(t.formats().mention,e.formats().mention)}
e.didDeleteTriggerCharacter=function(e,t){if(!e||!t)return!1
return t.diff(e).ops.some(e=>e.insert&&s.some(t=>e.insert.includes(t)))}
e.MENTION_DENOTATION_CHARACTERS=e.MENTION_QUERY_LENGTH_LIMIT=e.DEFAULT_TYPEAHEAD_QUERY_NO_TEXT=void 0
const r=["member"],a="a"
e.DEFAULT_TYPEAHEAD_QUERY_NO_TEXT=a
const o=100
e.MENTION_QUERY_LENGTH_LIMIT=o
const s=["@","@","＠"]
e.MENTION_DENOTATION_CHARACTERS=s})
define("participate-text-editor/utils/quill/modules/clipboard",["exports","quill"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=t.default.import("modules/clipboard"),n=t.default.import("delta")
e.default=class extends i{onPaste(e){var t
if(null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/link-preview")){const t=this.quill.getSelection()
if(!t)return super.onPaste(e)
e.preventDefault()
const i=e.clipboardData.getData("text/plain"),r=(new n).retain(t.index).delete(t.length).insert(i)
this.quill.updateContents(r,"silent")
const a=i.length+t.index,o=0
this.quill.setSelection(a,o,"silent")}return super.onPaste(e)}}})
define("participate-text-editor/utils/quill/modules/hashtag",["exports","@babel/runtime/helpers/esm/toConsumableArray","@babel/runtime/helpers/esm/objectSpread2","quill","participate-text-editor/utils/quill/blots/hashtag","participate-text-editor/utils/quill/hashtag-utils","participate-text-editor/utils/tracking/hashtag-tracking","participate-text-editor/utils/constants"],function(e,t,i,n,r,a,o,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const l=n.default.import("core/module"),d=n.default.import("delta")
class c extends l{static register(){n.default.register("blots/hashtag",r.default)}constructor(e,t){super(e,t)
this.options=(0,i.default)({actions:{openTypeahead:null,closeTypeahead:null,generateNewWorkflowId:null,fireCustomTexteditorTrackingEvent:null,fireControlInteractionEvent:null},trackingData:{associatedInputControlUrn:null,associatedEntityUrn:null,controlType:null,rootObject:null}},t)
this.actions=this.options.actions
this.trackingData=this.options.trackingData
this.context=this.options.context
this.hasTriggeredTypeahead=!1
this.attachMatchers()
this.attachEvents()}_setTypeaheadTriggeredValue(e){this.hasTriggeredTypeahead=e}compositionEnd(){const e=this.quill.getContents()
this.createFormattedHashtags(e)
const t=this.quill.getSelection()
t&&this.detectTypeaheadTrigger(t.index)}attachMatchers(){var e;(e=this.quill.clipboard).addMatcher.apply(e,(0,t.default)(c.matchHashtag()))}attachEvents(){this.quill.on("hashtag-unwrap",this.unwrapHashtag.bind(this))
this.quill.on("editor-change",this.onEditorChange.bind(this))
this.quill.root.addEventListener("compositionend",this.compositionEnd.bind(this))}static matchHashtag(){return[r.default.className,(e,t)=>{const[i]=t.ops
return(new d).insert(i.insert)}]}unwrapHashtag(e){const t=this.quill.getIndex(e),i=e.length()
this.quill.removeFormat(t,i)}onEditorChange(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r]
const a=i[2]
if(!this.quill.selection.composing)if(e===n.default.events.TEXT_CHANGE&&a===n.default.sources.USER){const e=this.quill.getContents(),t=i[0].ops.some(e=>e.insert&&e.insert.includes("\n"))
this.createFormattedHashtags(e,t)
const n=this.quill.getSelection()
if(!n)return
this.detectTypeaheadTrigger(n.index)}else if(e===n.default.events.SELECTION_CHANGE){const[e,t]=i
!e||t&&e.index===t.index||this.detectTypeaheadTrigger(e.index)}}insertHashtag(e,t,i){const r=e.text.length+t,a=(new d).retain(t).delete(i).insert(e.text,{hashtag:!0}).insert(" ")
this.quill.updateContents(a,n.default.sources.USER)
this.quill.setSelection(r+" ".length,n.default.sources.USER)}onTypeaheadSelect(e,t){const i=this.quill.getSelection(!0).index,[n]=this.quill.getLeaf(i),r=n.text.slice(1),a=(0,o.getSearchHeaderForHashtagTrackingEvent)(r)
if(!n)return
const l=this.quill.getIndex(n),d={text:e.text}
this.insertHashtag(d,l,n.text.length)
this.actions.fireControlInteractionEvent(`${this.trackingData.controlType}_select_hashtag_typeahead`)
this.actions.fireCustomTexteditorTrackingEvent(o.EVENTS.ACTION,(0,o.getHashtagSuggestionActionSelectEventPayload)(a,e,t),s.TYPEAHEAD_TYPES_MAP.HASHTAG)
this._setTypeaheadTriggeredValue(!1)}createFormattedHashtags(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
const i=e.diff((0,a.transformDelta)(e.ops))
i.ops.length>0?this.quill.updateContents(i):t&&this.quill.setContents(e)}fireDismissTypeaheadTracking(e){if(e){const t=(0,o.getSearchHeaderForHashtagTrackingEvent)(e)
this.actions.fireCustomTexteditorTrackingEvent(o.EVENTS.ACTION,(0,o.getHashtagSuggestionActionDismissEventPayload)(t),s.TYPEAHEAD_TYPES_MAP.HASHTAG)}}detectTypeaheadTrigger(e){const[t]=this.quill.getLeaf(e)
if(t&&t.parent instanceof r.default){const e=t.text.substring(1)
this.query=e
this.actions.openTypeahead({typeaheadQuery:e,typeaheadType:r.default.blotName,onTypeaheadSelect:this.onTypeaheadSelect.bind(this),onDismissWithoutSelection:this.fireDismissTypeaheadTracking.bind(this)})
if(!this.hasTriggeredTypeahead){this.actions.generateNewWorkflowId()
const t=(0,o.getSearchHeaderForHashtagTrackingEvent)(e)
this.actions.fireCustomTexteditorTrackingEvent(o.EVENTS.START,(0,o.getHashtagSuggestionStartEvent)(t,this.trackingData.associatedInputControlUrn),s.TYPEAHEAD_TYPES_MAP.HASHTAG)}this._setTypeaheadTriggeredValue(!0)}else{this._setTypeaheadTriggeredValue(!1)
this.actions.closeTypeahead(r.default.blotName)}}}e.default=c})
define("participate-text-editor/utils/quill/modules/mention",["exports","@babel/runtime/helpers/esm/objectSpread2","@babel/runtime/helpers/esm/toConsumableArray","quill","participate-text-editor/utils/quill/blots/mention","participate-text-editor/utils/quill/formats/guard","participate-text-editor/utils/quill/mention-utils","participate-text-editor/utils/quill/utils","participate-text-editor/utils/tracking/mentions-tracking","participate-text-editor/utils/constants","global-utils/utils/is-browser"],function(e,t,i,n,r,a,o,s,l,d,c){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const u=n.default.import("core/module"),h=n.default.import("delta"),p=n.default.import("parchment"),g=n.default.import("blots/text"),m=3
e.default=class extends u{static register(){n.default.register("blots/mention",r.default)
n.default.register("formats/guard",a.default)}constructor(e,t){super(e,t)
this.range=e.getSelection()
this.options={actions:{openTypeahead:null,closeTypeahead:null,generateNewWorkflowId:null,fireCustomTexteditorTrackingEvent:null,fireControlInteractionEvent:null},trackingData:{associatedInputControlUrn:null,associatedEntityUrn:null,controlType:null,rootObject:null,updateMetadata:null}}
Object.assign(this.options,t)
this.actions=this.options.actions
this.trackingData=this.options.trackingData
this.attachEvents()
this.attachMatchers()
this.hasTriggeredTypeahead=!1}attachMatchers(){var e,t;(e=this.quill.clipboard).addMatcher.apply(e,(0,i.default)(this.matchMention()));(t=this.quill.clipboard).addMatcher.apply(t,(0,i.default)(this.matchTextNode()))}attachEvents(){this.quill.on("mention-will-reload",this.onMentionWillReload.bind(this))
this.quill.on("mention-move-text-before",this.onMentionMoveTextBefore.bind(this))
this.quill.on("mention-move-text-after",this.onMentionMoveTextAfter.bind(this))
this.quill.on("mention-range-will-change",this.onMentionWillChange.bind(this))
this.quill.on("mention-will-unwrap",this.onMentionWillUnwrap.bind(this))
this.quill.on("mention-will-remove",this.onMentionWillRemove.bind(this))
this.quill.on(n.default.events.TEXT_CHANGE,this.onTextChange.bind(this))
this.quill.on(n.default.events.EDITOR_CHANGE,(e,t)=>{e===n.default.events.SELECTION_CHANGE&&this.onSelectionChange(t)})
this.quill.root.addEventListener("compositionstart",this.compositionStart.bind(this))
this.quill.root.addEventListener("compositionend",this.compositionEnd.bind(this))}_setTypeaheadTriggeredValue(e){this.hasTriggeredTypeahead=e}_removeGuards(){const e=this.quill.scroll.descendants(a.default,0,this.quill.getLength()),t=e.length
e.forEach((e,i)=>{const n=this.quill.getIndex(e)
e.domNode.parentNode.removeChild(e.domNode)
t===i+1&&this._queueSetSelection(n)})}_queueSetSelection(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
const{quill:i}=this
c.default&&window.requestAnimationFrame(()=>{i.setSelection(e,t,n.default.sources.USER)})}matchTextNode(){return[m,(e,t)=>{const i=this.range.index,[n]=this.quill.getLeaf(i),r=n.parent
this.isIndexInsideMention(i,r)&&this.quill.removeFormat(this.quill.getIndex(r),r.length())
return t}]}matchMention(){return[".ql-mention",(e,t)=>{const i=t.ops[0],n=r.default.formats(e)
n.guid=r.default.createGuid()
i.attributes={mention:n}
i.attributes.mention.originalText=i.insert
const o=new h([{insert:a.default.CONTENT,attributes:{guard:!0}}])
return(new h).concat(o).concat(t).concat(o)}]}isIndexInsideMention(e,t){if(t instanceof r.default){const{start:i,end:n}=(0,s.getBlotIndices)(this.quill,t)
return e>i&&e<n}return!1}onMentionMoveTextAfter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(!(e.next instanceof g)){const t=p.create("text","")
null==e.next?t.insertInto(e.parent):e.parent.insertBefore(t,e.next)}e.deleteAt(e.length()-t.length,t.length,!0)
e.next.insertAt(0,t)
this.onMentionWillChange(e,e.length()+1)}onMentionWillReload(){const e=this.quill.getSelection()
this.quill.setContents(this.quill.getContents())
e&&this.quill.setSelection(e.index)}onMentionMoveTextBefore(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
if(!(e.prev instanceof g)){const t=p.create("text","")
e.parent.insertBefore(t,e)}e.deleteAt(0,t.length,!0)
e.prev.insertAt(e.prev.length(),t)
this.onMentionWillChange(e,0)}onTextChange(e,t){if(this.quill.selection.composing)return
const i=this.quill.getSelection()
null!==i&&(this.range=i)
if(e&&e.ops){const i=e.ops.some(e=>e.attributes&&e.attributes.mention),n=this.quill.getContents()
i?this._removeGuards():(0,o.didDeleteTriggerCharacter)(t,n)&&this._setTypeaheadTriggeredValue(!1)}this.willDetectTypeaheadTrigger()}onSelectionChange(e){null!==e&&(this.range=e)
this.willDetectTypeaheadTrigger()}onMentionWillChange(e,t){const i=this.quill.getIndex(e)+t,n=(0,l.getSearchHeaderForMentionsTrackingEvent)()
this.actions.fireCustomTexteditorTrackingEvent(l.EVENTS.MENTION_ACTION,(0,l.getMentionSuggestionActionEventPayload)(n,l.ACTIONS.PERSONALIZE),d.TYPEAHEAD_TYPES_MAP.MENTION)
this._queueSetSelection(i)}onMentionWillRemove(e){const t=this.quill.getIndex(e)
e.remove()
const i=(0,l.getSearchHeaderForMentionsTrackingEvent)()
this.actions.fireCustomTexteditorTrackingEvent(l.EVENTS.MENTION_ACTION,(0,l.getMentionSuggestionActionEventPayload)(i,l.ACTIONS.DELETE),d.TYPEAHEAD_TYPES_MAP.MENTION)
this.currentMentionToken=null
this._queueSetSelection(t)}onMentionWillUnwrap(e){const t=this.range.index
this.quill.removeFormat(this.quill.getIndex(e),e.length())
const i=(0,l.getSearchHeaderForMentionsTrackingEvent)()
this.actions.fireCustomTexteditorTrackingEvent(l.EVENTS.MENTION_ACTION,(0,l.getMentionSuggestionActionEventPayload)(i,l.ACTIONS.DELETE),d.TYPEAHEAD_TYPES_MAP.MENTION)
this.quill.setSelection(t,0,n.default.sources.USER)}compositionStart(){this.actions.closeTypeahead(d.TYPEAHEAD_TYPES_MAP.MENTION)}compositionEnd(){const e=this.quill.getSelection()
if(e){this.range=e
this.willDetectTypeaheadTrigger()}}willDetectTypeaheadTrigger(){if(null==this.range)return
const e=(0,o.getSearchQuery)(this.quill.getContents(),this.range)
if(e){this.actions.openTypeahead({typeaheadQuery:e.query,typeaheadType:d.TYPEAHEAD_TYPES_MAP.MENTION,onTypeaheadSelect:this.insertMention.bind(this,e.queryStartIndex,e.queryToken,e.query.length),onDismissWithoutSelection:this.fireDismissTypeaheadTracking.bind(this)})
if(!this.hasTriggeredTypeahead){this.actions.generateNewWorkflowId()
this.actions.fireControlInteractionEvent(`${this.trackingData.controlType}_mention_start`)
const t=(0,l.getSearchHeaderForMentionsTrackingEvent)(e.query)
this.actions.fireCustomTexteditorTrackingEvent(l.EVENTS.START,(0,l.getMentionSuggestionStartEventPayload)(t,this.trackingData.associatedInputControlUrn,this.trackingData.associatedEntityUrn,this.trackingData.rootObject,this.trackingData.updateMetadata,e.queryToken),d.TYPEAHEAD_TYPES_MAP.MENTION)}this._setTypeaheadTriggeredValue(!0)}else this.actions.closeTypeahead(d.TYPEAHEAD_TYPES_MAP.MENTION)}fireDismissTypeaheadTracking(e){if(e){const t=(0,l.getSearchHeaderForMentionsTrackingEvent)(e)
this.actions.fireCustomTexteditorTrackingEvent(l.EVENTS.MENTION_ACTION,(0,l.getMentionSuggestionActionEventPayload)(t,l.ACTIONS.DISMISS),d.TYPEAHEAD_TYPES_MAP.MENTION)}}insertMention(e,i,r,s,c){const u=e-i.length,p=i.length,g=(0,t.default)((0,t.default)({},s),{},{originalText:s.text}),m=this.quill.getText(e,r).trim()||o.DEFAULT_TYPEAHEAD_QUERY_NO_TEXT
let f=0
const T=this.quill.getText(e,g.originalText.length).toLowerCase()
f=r>=g.originalText.length?p+r:T===g.originalText.toLowerCase()?p+g.originalText.length:p+r
delete g.text
const E=(new h).retain(u).delete(f).insert(a.default.CONTENT,{guard:!0}).insert(g.originalText,{mention:g}).insert(a.default.CONTENT,{guard:!0})
this.quill.updateContents(E,n.default.sources.USER)
const y=u+g.originalText.length
this._queueSetSelection(y)
const b=(0,l.getSearchHeaderForMentionsTrackingEvent)(m)
this.actions.fireControlInteractionEvent(`${this.trackingData.controlType}_mention_select`)
this.actions.fireCustomTexteditorTrackingEvent(l.EVENTS.MENTION_ACTION,(0,l.getMentionSuggestionActionSelectEventPayload)(b,g,c),d.TYPEAHEAD_TYPES_MAP.MENTION)
this._setTypeaheadTriggeredValue(!1)
this.actions.closeTypeahead(d.TYPEAHEAD_TYPES_MAP.MENTION)}}})
define("participate-text-editor/utils/quill/quill-keyboard-bindings",["exports","quill"],function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.enterKeyBinding=void 0
const i={"entity enter":{key:t.default.import("modules/keyboard").keys.ENTER,format:["mention"],handler:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=e.index
if(n&&""!==i.prefix&&""!==i.suffix){const[e]=this.quill.getLeaf(n)
this.quill.removeFormat(this.quill.getIndex(e),e.length(),t.default.sources.SILENT)
this.quill.setSelection(n)}return!0}}}
e.enterKeyBinding=i})
define("participate-text-editor/utils/quill/utils",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.normalizeTypeaheadResponse=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return{entityUrn:Ember.getWithDefault(e,"targetUrn",""),objectUrn:Ember.getWithDefault(e,"objectUrn",""),text:Ember.getWithDefault(e,"text.text",""),trackingId:Ember.getWithDefault(e,"trackingId","")}}
e.getBlotIndices=function(e,t){if(e&&t){const i={}
i.start=e.getIndex(t)
i.end=i.start+t.length()
return i}return}
e.trimLineBreakFromDelta=function(e){const t=e.ops[e.ops.length-1]
t.insert&&t.insert.endsWith("\n")&&(t.insert=t.insert.slice(0,-1))}
e.isShallowEqualObjects=function(e,t){if(e===t)return!0
if("object"!=typeof e||null==e)return!1
if("object"!=typeof t||null==t)return!1
const i=Object.keys(e)
if(i.length!==Object.keys(t).length)return!1
return i.every(i=>e[i]===t[i])}
e.isAlphaNumericCharacter=function(e){if(e)return!!e.match(t)
return!1}
const t=new RegExp(/\w/)})
define.alias("client-sensor-web/utils/run-loop-helpers","participate-text-editor/utils/run-loop-helpers")
define("participate-text-editor/utils/text-editor-utils",["exports","participate-text-editor/utils/constants","participate-text-editor/utils/quill/mention-utils"],function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.isValidTypeaheadType=function(e){return Object.values(t.TYPEAHEAD_TYPES_MAP).includes(e)}
e.mentionQueryMatchesRecommendedMention=function(e,t){if(t===i.DEFAULT_TYPEAHEAD_QUERY_NO_TEXT)return!0
const n=t.toLowerCase()
return e.toLowerCase().startsWith(n)}
e.getElementDistanceFromTopOfWindow=function(e){let t=0,i=e
for(;i;){t+=i.offsetTop-i.scrollTop+i.clientTop
i=i.offsetParent}return t}})
define("participate-text-editor/utils/tracking/hashtag-tracking",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getSearchHeaderForHashtagTrackingEvent=function(){return{query:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",platform:"TYPEAHEAD"}}
e.getHashtagSuggestionStartEvent=function(e,t,i,n){return{searchHeader:e,associatedInputControlUrn:`${t}_add_commentary`,associatedEntityUrn:i,rootObject:n,hashtagSourceType:"TYPEAHEAD"}}
e.getHashtagSuggestionActionDismissEventPayload=function(e){return{searchHeader:e,actionType:t.DISMISS,hashtagSourceType:"TYPEAHEAD"}}
e.getHashtagSuggestionActionSelectEventPayload=function(e,i,n){return{searchHeader:e,actionType:t.SELECT,result:{entityUrn:i.objectUrn,position:{index:n},trackingId:i.trackingId},hashtagSourceType:"TYPEAHEAD"}}
e.ACTIONS=e.EVENTS=void 0
e.EVENTS={START:"HashtagSuggestionStartEvent",ACTION:"HashtagSuggestionActionEvent"}
const t={SELECT:"SELECT",DISMISS:"DISMISS"}
e.ACTIONS=t})
define("participate-text-editor/utils/tracking/mentions-tracking",["exports"],function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getMentionSuggestionStartEventPayload=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5?arguments[5]:void 0
const o=r?{objectUrn:Ember.get(r,"shareUrn"),trackingId:Ember.get(r,"trackingData.trackingId")}:n
return{searchHeader:e,associatedInputControlUrn:`${t}_mention_start`,associatedEntityUrn:i,rootObject:o,mentionType:"EXPLICIT",mentionStartOperator:a}}
e.getSearchHeaderForMentionsTrackingEvent=function(){return{query:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",platform:"TYPEAHEAD",vertical:"PEOPLE"}}
e.getMentionSuggestionActionSelectEventPayload=function(e,i,n){return{searchHeader:e,actionType:t.SELECT,result:{entityUrn:i.objectUrn,position:{index:n}}}}
e.getMentionSuggestionActionEventPayload=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
return{searchHeader:e,actionType:t,result:i}}
e.ACTIONS=e.EVENTS=void 0
e.EVENTS={START:"MentionSuggestionStartEvent",VIEW_LIST:"MentionSuggestionImpressionEvent",MENTION_ACTION:"MentionSuggestionActionEvent",RESULT_IMPRESSION:"MentionResultHit"}
const t={SELECT:"SELECT",DELETE:"DELETE",DISMISS:"DISMISS",PERSONALIZE:"PERSONALIZE"}
e.ACTIONS=t})
define("participate-text-editor/utils/tracking/texteditor-tracking",["exports","participate-text-editor/utils/constants","ember-cli-pemberly-tracking/utils/uuid"],function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
e.default=class{constructor(e,t){this.trackingService=e
this.workflowId=t
this.typeaheadSearchId=i.default.v4()}fireTrackingEvent(e,i,n){i.searchHeader&&(i.searchHeader.rawSearchId=this.typeaheadSearchId)
switch(n){case t.TYPEAHEAD_TYPES_MAP.MENTION:i.mentionWorkflowId=this.workflowId
this.trackingService.fireTrackingPayload(e,i)
break
case t.TYPEAHEAD_TYPES_MAP.HASHTAG:i.hashtagWorkflowId=this.workflowId
this.trackingService.fireTrackingPayload(e,i)}}}})
define.alias("ember-vector-images/utils/vector-url","participate-text-editor/utils/vector-url")

//# sourceMappingURL=engine.map