define("xmessage",["exports","@linkedin/jsecure"],function(e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.Rtl=function(){return{isRtl:(i=" \n\r\t\f \u2028\u2029".split(""),t="~!@#$%^&*()_+`1234567890-={}|[]\\:\";'<>?,./".split(""),o=i.concat(t),"֐","ۿ",a=(e=["nbsp"," ","lt","<","gt",">","amp","&","quot",'"'],n=/&(?:(lt|gt|amp|quot|nbsp)|#x([\da-f]{1,4})|#(\d{1,5}));/gi,function(i){return null==i?null:"".concat(i).replace(n,(function(n,i,t,o){return i?e[e.indexOf(i)+1]:t||o?String.fromCharCode(parseInt(t||o,t?16:10)||65533):"�"}))}),r=di(o,"֐","ۿ"),function(e){return-1!==r(a(e))})}
var e,n
var i,t,o,a,r}
e.formatCurrency=Jn
e.formatDate=hn
e.formatInteger=Hn
e.formatName=kn
e.formatNumber=Bn
e.formatPercent=Kn
e.formatTime=ii
e.fromString=function(e,n,i){return Hi(Vi(e),n,i)}
e.getOutputFilter=function(){return Bi}
e.getRules=Be
e.getSantizeUrl=me
e.getUserDataFilter=function(){return _e()}
e.makeInterpolator=Hi
e.render=function(e,n,i){if(1===e.length&&"string"==typeof e[0])return Bi(e[0])
return Bi(Ji(e,n,i))}
e.setOutputFilter=function(e){Bi=e}
e.setSanitizeUrl=function(e){de=e}
e.setUserDataFilter=function(e){le(e)}
e.toAst=Vi
e.TruncationFormatter=e.TimeFormatter=e.PossessiveFormatter=e.PluralFormatter=e.NumberFormatter=e.NameFormatter=e.NAME_STYLES=e.DateFormatter=e.DEFAULT_TIME_PATTERN=e.DEFAULT_NAME_STYLE=e.DEFAULT_DATE_PATTERN=e.CurrencyFormatter=e.ChooserFormatter=e.default=void 0
function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}})
n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,n){e.__proto__=n
return e})(e,n)}function o(e){var n=(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})))
return!0}catch(e){return!1}})()
return function(){var i,t=a(e)
if(n){var o=a(this).constructor
i=Reflect.construct(t,arguments,o)}else i=t.apply(this,arguments)
return (function(e,n){if(n&&("object"===s(n)||"function"==typeof n))return n
return (function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e})(e)})(this,i)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n]
for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){for(var i=0;i<n.length;i++){var t=n[i]
t.enumerable=t.enumerable||!1
t.configurable=!0
"value"in t&&(t.writable=!0)
Object.defineProperty(e,t.key,t)}}function c(e,n,i){n&&l(e.prototype,n)
i&&l(e,i)
return e}var d=(function(){function e(n){_(this,e)
this.value=m(n)}c(e,[{key:"toString",value:function(){switch(s(this.value)){case"object":case"function":break
default:return String(this.value)}return""}}])
return e})()
function m(e){return e instanceof d?e.value:e}function u(e){return e instanceof d?e:new d(e)}function p(e,n){return e.parameters.hasOwnProperty(n)}function g(e,n){return-1!==e.indexOf(n,e.length-n.length)}function h(e,n){return 0===e.indexOf(n)}function y(e,n,i){var t=""
if(e.parameters){var o=e.parameters
for(var a in o)if(o.hasOwnProperty(a)&&!n.test(a)){t='Invalid style "'.concat(a,'"')
i&&(t+=" ".concat(i))
break}}return t}function b(e,n,i){var t,o,a="Placeholder must have exactly ".concat(n," style(s)"),r="Placeholder must have at least ".concat(n," style(s)"),s=0
if(e.parameters){for(o in e.parameters)e.parameters.hasOwnProperty(o)&&s++
"eq"===i&&s!==n?t=a:"gte"===i&&s<n&&(t=r)}else n>0&&(t="Placeholder must have styles")
return t}function f(e,n){return b(e,n,"eq")}function w(e,n,i){var t,o,a,r
if(e.parameters)for(o=0,a=n.length;o<a;++o){t=e.parameters[n[o]]
"without"===i?t&&t.value&&(r='Invalid value for style "'.concat(t.key,'"')):"with"===i&&t&&(t.value||(r='Style "'.concat(t.key,'" must have a value')))}return r}function v(e,n){return w(e,n,"with")}var k="text",S=[k],x=new RegExp("^(".concat([k,"title"].join("|"),")$"))
var C=new RegExp("^(true|false)$")
var N=/-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/,T=/^(zero|singular|dual|few|many|plural|other)$/
var E=["prefix","suffix"],A=/^(familiar|family|full|given|list|maiden|micro|possessive|salutation|prefix|suffix|compact)$/
var I=["prefix","suffix"],j=["name","text"],L=/^(?:familiar|family|full|given|list|maiden|micro|possessive|salutation|prefix|suffix)$/
var P="sep",R="nosep",D=[P,R],O=new RegExp("^(".concat([P,R].join("|"),")$"))
var M=new RegExp("prefix|possessive|suffix")
var q={anchor:function(e){var n=(function(e,n){var i,t,o,a,r
if(e.parameters){t=e.parameters
for(a=0,r=n.length;a<r;++a){o=n[a]
t.hasOwnProperty(o)||(i='Missing required style key "'.concat(o,'"'))}}else i="Placeholder must have styles"
return i})(e,S)
n||(n=y(e,x,'The anchor placeholder only supports "text" and "title" styles.'))
return n},boolean:function(e){var n=(function(e,n){return b(e,n,"gte")})(e,1)
n||(n=y(e,C,'The key must be either "true" or "false".'))
return n},choice:function(e){var n,i,t,o,a,r,s,_,l=e.parameters,c=!1
r=[]
for(_ in l)if(l.hasOwnProperty(_)){r[(s=l[_]).order]=s
T.test(_)&&(c=!0)}s=void 0
for(o=0,a=r.length;o<a;++o){s=r[o]
if(N.test(s.key)){t=parseInt(s.key,10)
if(void 0===i)i=t
else{if(!(i<t)){n="Invalid number order. Cannot list ".concat(t," after ").concat(i,". Numbers must be ascending.")
break}i=t}}else{if(!T.test(s.key)){n='Invalid category key "'.concat(s.key,'".')
break}c=!0}}c&&(l.singular?l.plural||(n='Missing required category "plural"'):n='Missing required category "singular"')
return n},list:function(e){var n=!1
""!==e.subtype&&-1===j.indexOf(e.subtype)&&(n='Invalid list subtype "'.concat(e.subtype,'"'))
n||(n=y(e,L,"Invalid style for list placeholder."))
n||(n=v(e,I))
return n},map:function(e){var n
e.parameters?0===Object.keys(e.parameters).length&&(n="MapPlaceholder must have at least one style argument."):n="MapPlaceholder must have parameters."
return n},name:function(e){var n=y(e,A,"Invalid style for name placeholder.")
n||(n=v(e,E))
return n},possessive:function(e){return f(e,0)},suffix:function(e){var n=f(e,1)
n||(n=y(e,O,"Invalid style for suffix placeholder."))
n||(n=(function(e,n){return w(e,n,"without")})(e,D))
return n},text:function(e){return y(e,M,"Invalid style for text placeholder.")}}
function Y(e){var n,i,t
if("string"!=typeof e){(t=(function(e){return e?e.index?void 0:"Placeholder must have an index.":"Placeholder is invalid."})(e))||q.hasOwnProperty(e.type)&&(t=q[e.type](e))
if(t)throw new Error(t)
if(e&&e.parameters instanceof Object)for(n in e.parameters)e.parameters.hasOwnProperty(n)&&(i=e.parameters[n]).value&&i.value instanceof Array&&i.value.forEach(Y)}}var z=(function(){function e(n){_(this,e)
this.source=n
this.index=0
this.cursor=n.charCodeAt(0)
this.previousCharCode=0
0===n.length&&(this.cursor=0)}c(e,[{key:"next",value:function(){this.previousCharCode=this.cursor
this.index++
this.index<this.source.length?this.cursor=this.source.charCodeAt(this.index):this.cursor=0}},{key:"toString",value:function(){return"index ".concat(this.index,' in string "').concat(this.source,'"')}},{key:"isEscaped",get:function(){return 92===this.previousCharCode}},{key:"hasNext",get:function(){return 0!==this.cursor}},{key:"currentChar",get:function(){return this.index<this.source.length?this.source.charAt(this.index):""}},{key:"currentCharCode",get:function(){return this.cursor}}])
return e})(),F="'",U=-1,W="",G=/[a-zA-Z]/,V=/[1-9]/,B=/[0-9]/,H=/[a-zA-Z0-9]/,J=/[a-zA-Z0-9_\-~.|\[\]\/]/,K=/[#]/,X={},Q={choice:/[#+<]/,plural:/[#+<]/},Z={number:U,keyword:W},$="simple"
function ee(e,n){throw new SyntaxError("XMessage parsing error: ".concat(e," at ").concat(n.toString()))}function ne(e,n,i){var t=(function(e){for(var n=[],i=[],t=[];e.hasNext;){123===e.currentCharCode?n.push(e.currentChar):125===e.currentCharCode&&n.pop()
if(0===n.length&&124===e.currentCharCode){0===t.length&&ee('Unexpected "|" in style list.',e)
i.push(t.join(W))
t.length=0
e.next()}else{t.push(e.currentChar)
e.next()}}if(t.length>0){i.push(t.join(W))
t.length=0}return{parsedStyles:{},unprocessedStyles:i}})(e),o=t.unprocessedStyles,a=t.parsedStyles
o.map((function(e){return (function(e,n){for(var i=Q[n]||K,t=[],o="",a="",r=null;e.hasNext;){if(i.test(e.currentChar))if(0===t.length)ee('Error parsing style key/value. Found delimiter "'.concat(e.currentChar,'" but expected key.'),e)
else if(""===a){a=t.join(W)
t.length=0
o=e.currentChar
e.next()}t.push(e.currentChar)
e.next()}if(""===o){a=t.join(W)
t.length=0}else{if(t.length>0){var s=t.join(W)
void 0!==s&&(r=ae(s))}t.length=0}(h(a," ")||g(a," "))&&ee("leading/trailing spaces not allowed in keys",e)
"map"===n&&""!==a&&null===r&&ee('missing style value for "'.concat(a,'"'),e)
return{key:a,value:r,delimiter:o}})(new z(e),n)})).forEach((function(n,t){n.order=t+i
a.hasOwnProperty(n.key)?ee('Found duplicate style key "'.concat(n.key,'". Styles must have unique names.'),e):a[n.key]=n}))
return a}function ie(e){for(var n={};e.hasNext;){for(var i=[];e.hasNext&&124!==e.currentCharCode;){i.push(e.currentChar)
e.next()}var t=i.join(W);(h(t," ")||g(t," "))&&ee("leading/trailing spaces not allowed in keys",e)
n[t]={key:t,value:null,delimiter:"",order:0}
e.hasNext&&e.next()}return n}X.choice=function(e,n){return ne(e,n,0)}
X.date=function(e){return ie(e)}
X.number=function(e){return ie(e)}
function te(e){var n=Z,i=$,t=W,o={}
if(e.hasNext){n=(function(e){var n=[],i=[],t=U,o=W,a=!1
if(48===e.currentCharCode){n.push(e.currentChar)
e.next()
a=!0}a&&e.hasNext&&44!==e.currentCharCode&&58!==e.currentCharCode&&ee('Could not parse index; expected ":" or end of identifier but found "'.concat(e.currentChar,'"'),e)
if(V.test(e.currentChar))for(;e.currentChar&&B.test(e.currentChar);){n.push(e.currentChar)
e.next()}if(58===e.currentCharCode){e.next()
if(e.currentChar&&H.test(e.currentChar)){i.push(e.currentChar)
e.next()}else ee('Expected letter (a-zA-Z) or number (0-9) but found "'.concat(e.currentChar,'"'),e)
for(;e.currentChar&&J.test(e.currentChar);){i.push(e.currentChar)
e.next()}}else 0===n.length&&e.hasNext&&ee('Unexpected character; expected ":" but found "'.concat(e.currentChar,'"'),e)
if(44===e.currentCharCode||0===e.currentCharCode){t=parseInt(n.join(W),10)
isNaN(t)&&(t=U)
o=i.join(W)}else ee('Unexpected character; expected "," or end of identifier but found "'.concat(e.currentChar,'"'),e)
return{number:t,keyword:o}})(e)
if(44===e.currentCharCode){e.next()
i=(function(e){var n=[]
if(0===e.currentCharCode)ee('Unable to parse type. Expected letter (a-zA-Z) but found end of identifier after ","',e)
else for(;e.currentChar&&G.test(e.currentChar);){n.push(e.currentChar)
e.next()}return n.join(W)})(e)
if(44===e.currentCharCode){e.next()
t=(function(e,n){var i=W
if("list"===n){for(var t=[];e.hasNext&&44!==e.currentCharCode;){t.push(e.currentChar)
e.next()}i=t.join(W)}return i})(e,i)
44!==e.currentCharCode&&124!==e.currentCharCode||e.next()
e.currentCharCode&&(o=(function(e,n){return X[n]?X[n](e,n):ne(e,n,0)})(e,i))}}else i=$}else ee("Error parsing placeholder. Unexpected end of input.",e)
e.currentCharCode&&ee('Unexpected character "'.concat(e.currentChar,'".'),e)
return{index:n,type:i,subtype:t,parameters:o}}function oe(e){return"string"==typeof e?e:(n=e.text,te(new z(n)))
var n}function ae(e){if(-1===e.indexOf("{")&&-1===e.indexOf("'"))return[e]
for(var n=(function(e){for(var n=[],i=[],t=[],o=new z(e),a=!1;o.hasNext;)if(92!==o.currentCharCode||o.isEscaped)if(o.isEscaped){t.push(o.currentChar)
o.next()}else{if(0===i.length&&39===o.currentCharCode){o.next()
if(39===o.currentCharCode){t.push(F)
o.next()
continue}a=!a
if(t.length>0){n.push(t.join(W))
t.length=0}}if(a){o.hasNext&&t.push(o.currentChar)
o.next()}else if(125!==o.currentCharCode||o.isEscaped||0!==i.length)if(123===o.currentCharCode){if(0===i.length){if(t.length>0){n.push(t.join(W))
t.length=0}}else t.push(o.currentChar)
i.push(o.currentChar)
o.next()}else if(125===o.currentCharCode){i.pop()
if(0===i.length)if(t.length>0){n.push({text:t.join(W)})
t.length=0}else ee("Unexpected end of placeholder (found no content)",o)
else t.push(o.currentChar)
o.next()}else{o.hasNext&&t.push(o.currentChar)
o.next()}else ee('Unexpected "}"',o)}else o.next()
0!==i.length&&ee('Unexpected end of placeholder (unmatched "{")',o)
if(t.length>0){n.push(t.join(W))
t.length=0}return n})(e),i=[],t=0;t<n.length;++t)i[t]=oe(n[t])
return i}var re,se=/{(\d+)}/g
function _e(){return re}function le(e){re=function(n){if(n instanceof d)return n
var i=e(n)
return new d(i)}}function ce(e){return n.default.htmlEncode(e)}le(ce)
var de=function(e){return n.default.sanitizeUrl(e)}
function me(){return de}function ue(e){console.warn(e)}function pe(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return e.replace(se,(function(e,i){return void 0!==n[i]?n[i]:e}))}function ge(e,n){for(var i=e.length,t=0;t<i;++t){var o=e[t]
if(n.hasOwnProperty(o))return n[o]}return null}var he=function(){return""}
function ye(e,n){var i=e.parameters[n]
if(i)return i.value}function be(e,n){var i,t=e.parameters
if(t)for(i in t)if(t.hasOwnProperty(i)&&t[i].order===n)return t[i]}function fe(e,n,i,t){var o=ye(e,n),a=_e()
if(""===o)return o
if(void 0!==o){for(var r="",s=0;s<o.length;++s){var _=o[s]
r+="string"==typeof _?_:m(a(he(_,i,t)))}return u(r)}}var we="text",ve="href",ke="title",Se="id",xe="class",Ce=/['"<>]/
function Ne(e){if(null==e)return""
var n=String(m(e))
return Ce.test(n)?ce(n):n}var Te="true",Ee="false"
var Ae={postFormatting:function(e,n,i){var t={AUD:"A$",CAD:"CA$",HKD:"HK$",NZD:"NZ$"}
void 0!==t[e]?i=i.replace(/^(\(|-)?\$/,t[e]):"INR"===e&&(i=i.replace(/Rs\./,"₹"))
n<0&&i.indexOf(")")>=0&&(i="-".concat(i.replace(/[\(\)]/g,"")))
return i.replace(/\s/,"")},getCurrencyDisplay:function(e){return/^(DKK|NOK|SGD|ZAR|SEK|CHF)$/.test(e)?"code":"symbol"}},Ie={month:"long"},je={month:"short",day:"numeric"},Le={month:"short"},Pe={weekday:"long"},Re={year:"numeric"},De={day:"numeric"},Oe=Le,Me={month:"long"},qe=De,Ye=Re
r({},Ie,qe),r({},Oe,qe),r({},Ie,qe,Ye),r({},Oe,qe,Ye),r({},Me,qe,Ye),r({},Ie,Ye),r({},Oe,Ye)
var ze={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},Fe={year:"numeric",month:"long",day:"numeric"},Ue={year:"numeric",month:"long"},We={year:"numeric",month:"short"},Ge={month:"long",day:"numeric"},Ve={en_US:{intlLocale:"en",currency:Ae,date:{postFormatting:function(e,n,i){var t=e.split(".")[0]
i=i.replace(/\s0/," ")
if("my"===t)i=i.replace(/,/g,"")
else if("time"===t){var o=i.split(" ")
5!==o.length||/,$/.test(o[2])?3!==o.length||/,$/.test(o[0])||(o[0]+=","):o[2]+=","
i=o.join(" ")}return i},narrowDayNames:["S","M","T","W","T","F","S"],intlOptions:{time:ze,"time.long":ze,"time.medium":ze,"time.short":{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"},mdy:Fe,"mdy.long":Fe,"mdy.medium":{year:"numeric",month:"short",day:"numeric"},"mdy.short":{year:"numeric",month:"numeric",day:"numeric"},my:Ue,"my.long":Ue,"my.medium":We,"my.short":We,md:Ge,"md.long":Ge,"md.medium":je,"md.short":je,m:Me,"m.long":Me,"m.medium":Le,"m.short":{month:"numeric"},d:Pe,"d.long":Pe,"d.medium":{weekday:"short"},"d.short":De,"d.narrow":{weekday:"narrow"},y:Re,"y.long":Re,"y.medium":Re,"y.short":{year:"2-digit"}}},possessive:{fallback:"’s",rules:{".*[Ss]$":"’",".*[A-RT-Z]$":"’S",".*[a-rt-z]$":"’s"}},number:{percent:"{0}%"},list:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0}, and {1}",2:"{0} and {1}"}}}
function Be(e,n){var i=Ve[e]
return n&&i?i[n]:i}function He(e){return e.legacyIntlLocale||e.intlLocale}function Je(e){var n=parseInt(e,10)
return isNaN(n)?null:n}var Ke=(function(){function e(){_(this,e)
this._formatters=new Map}c(e,[{key:"getWithDefault",value:function(e,n){return (function(e,n,i){if(e.has(n))return e.get(n)
var t=i()
e.set(n,t)
return t})(this._formatters,e,n)}}])
return e})(),Xe=/\u200e/g
function Qe(e,n){var i=e
if(!(e instanceof Date)){var t=s(e)
"number"===t?i=new Date(e):"string"===t&&(i=new Date(Date.parse(e)))}n&&(i=(function(e){var n=new Date(e.getTime())
n.setMinutes(e.getMinutes()-e.getTimezoneOffset())
return n})(i))
return i}var Ze={month:"long"},$e={month:"short"},en={weekday:"long"},nn={year:"numeric"},tn={day:"numeric"},on=$e,an={month:"long"},rn=tn,sn=nn
r({},Ze,rn),r({},on,rn),r({},Ze,rn,sn),r({},on,rn,sn),r({},an,rn,sn),r({},Ze,sn),r({},on,sn)
function _n(e){return e<10?"0".concat(e):e}function ln(e){return"".concat(e.getUTCFullYear(),"-").concat(_n(e.getUTCMonth()+1),"-").concat(_n(e.getUTCDate()))}var cn,dn={fmt_d:en,fmt_d_short:tn,fmt_d_medium:{weekday:"short"},fmt_d_long:en,fmt_m:an,fmt_m_short:{month:"numeric"},fmt_m_medium:$e,fmt_m_long:an,fmt_y:nn,fmt_y_short:{year:"2-digit"},fmt_md_medium:{month:"short",day:"numeric"},fmt_md_long:{month:"long",day:"numeric"},fmt_my_medium:{year:"numeric",month:"short"},fmt_my_long:{year:"numeric",month:"long"},fmt_mdy_short:{year:"numeric",month:"numeric",day:"numeric"},fmt_mdy_medium:{year:"numeric",month:"short",day:"numeric"},fmt_mdy_long:{year:"numeric",month:"long",day:"numeric"},fmt_mdy_hm_short:{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"},fmt_mdy_hm_long:{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}},mn=(function(e){i(t,Ke)
var n=o(t)
function t(){_(this,t)
return n.apply(this,arguments)}c(t,[{key:"format",value:function(e,n,i,t){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=Qe(e,t)
if("iso"===i&&!o)return ln(a)
if("fmt_mdy_iso"===i&&o)return ln(a)
var r=Ve[n].intlLocale,s=Ve[n].date.calendar,_=He(Ve[n])
if(o){var l=dn[i]
if(!l)throw new Error("[XMessage] Unsupported date format")
l.timeZone="UTC"
return this.getWithDefault("".concat(r,"-").concat(i),(function(){s&&(l.calendar=s)
return new Intl.DateTimeFormat(r,l)})).format(a)}var c=Ve[n].date
if("d.narrow"===i&&c.narrowDayNames)return c.narrowDayNames[a.getDay()]
if("iso"===i)return ln(a)
var d=c.legacyOverrides&&c.legacyOverrides[i]||c.intlOptions[i]
d.timeZone="UTC"
"zh"!==_&&(_+="-u-nu-latn-ca-gregory")
var m=this.getWithDefault("".concat(_,"-").concat(i),(function(){return new Intl.DateTimeFormat(_,d)})).format(a)
m=m.replace(Xe,"")
c&&c.postFormatting&&(m=c.postFormatting(i,e,m))
return m}}])
return t})()
e.DateFormatter=mn
var un={fmt_d:"d",fmt_d_short:"d.short",fmt_d_narrow:"d.narrow",fmt_d_medium:"d.medium",fmt_d_long:"d.long",fmt_m:"m",fmt_m_short:"m.short",fmt_m_medium:"m.medium",fmt_m_long:"m.long",fmt_y:"y",fmt_y_short:"y.short",fmt_md_medium:"md.medium",fmt_md_long:"md.long",fmt_my_medium:"my.medium",fmt_my_long:"my.long",fmt_mdy_short:"mdy.short",fmt_mdy_medium:"mdy.medium",fmt_mdy_long:"mdy.long",fmt_mdy_hm_short:"time.short",fmt_mdy_hm_long:"time.long",fmt_mdy_iso:"iso",iso:"iso"},pn={short:"fmt_mdy_short",medium:"fmt_mdy_medium",long:"fmt_mdy_long",full:"fmt_mdy_long"},gn="fmt_mdy_medium"
e.DEFAULT_DATE_PATTERN=gn
function hn(e,n,i,t,o){if(!un[n])if(pn[n]){console.log('The date pattern "'.concat(n,'" is deprecated, falling back to "').concat(pn[n],'".'))
n=pn[n]}else{console.log('Unknown date pattern "'.concat(n,'", falling back to "').concat(gn,'". Note: custom date patterns are not supported.'))
n=gn}var a=un[n]
cn||(cn=new mn)
if(o)return cn.format(e,i,n,t,!0)
try{return cn.format(e,i,a,t)}catch(s){if("function"==typeof e.toLocaleDateString)return e.toLocaleDateString()
var r=Je(e)
return"number"==typeof r?cn.format(new Date(r),i,a,t):e}}var yn=(function(){function e(){_(this,e)}c(e,[{key:"format",value:function(e,n,i){var t=(function(e){if(e){if(Array.isArray(e))return e.indexOf("MICROFORMAT")>-1
if("string"==typeof e)return"MICROFORMAT"===e}return!1})(n),o=t||e.lastNameWithHighlight,a=Dn(e.firstName,o),r=e.lastNameWithHighlight?Dn(e.lastNameWithHighlight,!1):Dn(e.lastName,o),s=Dn(e.maidenName,o),_=(function(e,n){!(function(e){if(!e)return!1
var n=e.charCodeAt(0)
return n>=44032&&n<=55215})(e.lastName)?(function(e){if(!e)return!1
for(var n=e.charCodeAt(0),i=0;i<Mn.length;i+=2){var t=Mn[i],o=Mn[i+1]
if(n>=t&&n>=o)return!0}return!1})(e.lastName)&&(n="ja_JP"===n?"CJK-ja_JP":"CJK"):n="CJK"
return n})(e,i)
if(t){var l=On.preprocess(a,r,s)
a=l[0]
r=l[1]
s=l[2]}return On.run((function(e){if(!e)return 0
"string"==typeof e&&(e=[e])
if(!Array.isArray(e))return 0
if(e.indexOf("FULL_NAME")>-1)return 1
if(e.indexOf("LIST_VIEW")>-1)return 2
return 0})(n),_,[a,r,s]).replace(Rn,"")}}])
return e})()
e.NameFormatter=yn
var bn="FULL_NAME",fn="familiar"
e.DEFAULT_NAME_STYLE=fn
var wn,vn=["familiar","family","full","given","list","maiden"]
e.NAME_STYLES=vn
function kn(e,n,i){var t
if(void 0!==e){var o={firstName:e.givenName||e.firstName,lastName:e.familyName||e.lastName,maidenName:e.maidenName}
n||(n=fn)
if(-1===vn.indexOf(n)){console.log('Unrecognized name format "'.concat(n,'", falling back to "').concat(fn,'".'))
n=fn}switch(n){case"given":t=o.firstName||""
break
case"family":t=o.lastName||""
break
case"maiden":t=o.maidenName||""
break
default:var a="full"===n||"given"===n||"family"===n||"maiden"===n?"FULL_NAME":"familiar"===n?"FAMILIAR_NAME":"list"===n?"LIST_VIEW":bn
wn||(wn=new yn)
t=wn.format(o,a,i)}}return t}var Sn=function(e,n){return"".concat(e," ").concat(n)},xn=function(e,n){return"".concat(n," ").concat(e)},Cn=function(e,n){return"".concat(n).concat(e)},Nn=function(e,n,i){return"".concat(i?" (".concat(i,")"):""," ")},Tn=function(e){return"".concat(e?" ".concat(e):"")},En=function(e){return function(n){return n?'<span class="'.concat(e,'">').concat(n,"</span>"):""}},An=En("given-name"),In=En("family-name"),jn=En("additional-name"),Ln=function(e,n,i){return"".concat(e).concat(Tn(i)).concat(Tn(n))},Pn=function(e){return function(n,i,t){return"".concat(n).concat(Tn(i)).concat(t?" ".concat(e," ").concat(t):"")}},Rn=/(^\s+|\s+$)/g
function Dn(e,n){if(!e)return""
var i=e.replace(Rn,"")
n&&(i=(function(e){if(null==e)return null
return e.toString().replace(/(.)/g,(function(e){return"<"===e?"&lt;":">"===e?"&gt;":"&"===e?"&amp;":'"'===e?"&quot;":"'"===e?"&#39;":"\\"===e?"&#92;":"="===e?"&#61;":"\0"===e?"�;":e}))})(i))
return i}var On=new((function(){function e(){_(this,e)
this.templates=[]}c(e,[{key:"preprocess",value:function(e,n,i){return[An(e),In(n),jn(i)]}},{key:"add",value:function(e,n,i){var t=this.templates.indexOf(e);-1===t?this.templates.push(e,[n,i]):this.templates[t+1].push(n,i)}},{key:"run",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",i=arguments.length>2?arguments[2]:void 0,t=this.templates.indexOf(e)
if(t>-1){var o=this.templates[t+1],a=o.indexOf(n);-1===a&&(a=o.indexOf("default"))
return(0,o[a+1])(i[0],i[1],i[2])}throw new Error("Could not find template function for ".concat(e," with ").concat(n," locale."))}}])
return e})())
On.add(0,"default",(function(e){return e}))
On.add(0,"de_DE",Sn)
On.add(0,"pl_PL",Sn)
On.add(0,"ro_RO",Sn)
On.add(0,"tr_TR",Sn)
On.add(0,"CJK",Cn)
On.add(0,"CJK-ja_JP",xn)
On.add(1,"default",(function(e,n,i){return"".concat(e).concat(Nn(0,0,i)).concat(n)}))
On.add(1,"ar_AE",Ln)
On.add(1,"th_TH",Ln)
On.add(1,"cs_CZ",(function(e,n,i){return"".concat(e).concat(Tn(n)).concat(i?" (roz. ".concat(i,")"):"")}))
On.add(1,"de_DE",Pn("geb."))
On.add(1,"CJK-ja_JP",(function(e,n,i){return"".concat(n).concat(Tn(e)).concat(Nn(0,0,i))}))
On.add(1,"CJK",(function(e,n,i){return"".concat(Cn(e,n)).concat(Nn(0,0,i))}))
On.add(1,"ms_MY",(function(e,n,i){return"".concat(e).concat(Tn(n)).concat(Nn(0,0,i))}))
On.add(1,"nl_NL",(function(e,n,i){return"".concat(e," ").concat(n).concat(i?"-".concat(i):"")}))
On.add(1,"pl_PL",Pn("z d."))
On.add(2,"default",(function(e,n,i){return"".concat(n?"".concat(n,", "):"").concat(e)}))
On.add(2,"CJK",Cn)
On.add(2,"CJK-ja_JP",xn)
On.add(2,"ar_AE",Sn)
On.add(2,"in_ID",Sn)
On.add(2,"ms_MY",Sn)
On.add(2,"th_TH",Sn)
var Mn=[19968,40895,12448,12543,65377,65439,12352,12447]
var qn=(function(){function e(){_(this,e)}c(e,[{key:"format",value:function(e,n){var i,t=Ve[n],o=t.possessive?t.possessive:{}
if(Object.keys(o).length>0){i=o.fallback
for(var a in o.rules)if(new RegExp(a).test(e)){i=o.rules[a]
break}return i}return""}}])
return e})()
e.PossessiveFormatter=qn
var Yn=(function(e){i(t,Ke)
var n=o(t)
function t(){_(this,t)
return n.apply(this,arguments)}c(t,[{key:"formatNumber",value:function(e,n,i){var t=Ve[n],o=i?Object.keys(i.parameters):[]
if(o.length>0&&!["integer","percent"].includes(o[0]))throw new Error("[XMessage] Unsupported number argument")
var a=o.length>1&&"compact"===o[1]?"compact":void 0,r=o.length>0&&"percent"===o[0]?o[0]:"decimal",s=o.length>0&&"integer"===o[0]?0:void 0
return this.getWithDefault("".concat(n,"-").concat(r,"-").concat(a,"-").concat(s),(function(){var e={style:r,maximumFractionDigits:s,notation:a}
return new Intl.NumberFormat(t.intlLocale,e)})).format(e)}},{key:"formatCurrency",value:function(e,n,i){var t=i?Object.keys(i.parameters):[],o=t.length>1?t[1]:"symbol",a=Ve[n],r=t.length>2?t[2]:void 0
return this.getWithDefault("".concat(n,"-").concat(e.currencyCode,"-").concat(o,"-").concat(r),(function(){var n={style:"currency",currency:e.currencyCode,currencyDisplay:o,notation:r}
return new Intl.NumberFormat(a.intlLocale,n)})).format(e.amount)}}])
return t})(),zn=(function(e){i(t,Ke)
var n=o(t)
function t(){_(this,t)
return n.apply(this,arguments)}c(t,[{key:"format",value:function(e,n,i){var t=Ve[i],o={style:"currency",currency:n,currencyDisplay:"code",minimumFractionDigits:"JPY"===n?0:2,maximumFractionDigits:"JPY"===n?0:2}
t.currency&&"function"==typeof t.currency.getCurrencyDisplay&&(o.currencyDisplay=t.currency.getCurrencyDisplay(n))
var a="".concat(He(t),"-u-nu-latn-ca-gregory"),r=""
try{r=this.getWithDefault("".concat(a,"-").concat(n),(function(){return new Intl.NumberFormat(a,o)})).format(e)}catch(s){"code"===o.currencyDisplay&&(r="".concat(e," ").concat(n))}r=r.replace(/\u0020/g," ")
t.currency&&t.currency.postFormatting&&(r=t.currency.postFormatting(n,e,r))
return r}}])
return t})()
e.CurrencyFormatter=zn
var Fn,Un,Wn,Gn=(function(e){i(t,Ke)
var n=o(t)
function t(){_(this,t)
return n.apply(this,arguments)}c(t,[{key:"format",value:function(e,n){var i=Ve[n],t={maximumFractionDigits:i.number&&i.number.maximumFractionDigits?i.number.maximumFractionDigits:3},o="".concat(He(i),"-u-nu-latn-ca-gregory"),a=this.getWithDefault(o,(function(){return new Intl.NumberFormat(o,t)})).format(e)
i.number&&i.number.postFormatting&&(a=i.number.postFormatting(e,a))
return a}}])
return t})()
e.NumberFormatter=Gn
function Vn(e,n,i){Wn||(Wn=new Yn)
return Wn.formatNumber(e,n,i)}function Bn(e,n,i){if(i)return Vn(e,n)
Fn||(Fn=new Gn)
return Fn.format(e,n)}function Hn(e,n,i){if(i)return Vn(e,n)
Fn||(Fn=new Gn)
return Fn.format(Math.floor(e),n)}function Jn(e,n,i,t){if(t)return (function(e,n,i){Wn||(Wn=new Yn)
return Wn.formatCurrency(e,n,i)})({amount:e,currencyCode:n},i)
Un||(Un=new zn)
return Un.format(e,n,i)}function Kn(e,n){return (function(e,n,i){return (function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return e.replace(/{(\d+)}/g,(function(e,i){return void 0!==n[i]?n[i]:e}))})(e,[Bn(parseInt((100*n).toFixed(1),10),i)])})(Ve[n].number.percent,e,n)}var Xn=(function(e){i(t,Ke)
var n=o(t)
function t(){_(this,t)
return n.apply(this,arguments)}c(t,[{key:"format",value:function(e,n){var i=Ve[n].intlLocale,t={}
return this.getWithDefault(i,(function(){return new Intl.PluralRules(i,t)})).select(e)}}])
return t})()
e.PluralFormatter=Xn
var Qn,Zn=(function(e){i(t,Ke)
var n=o(t)
function t(){_(this,t)
return n.apply(this,arguments)}c(t,[{key:"format",value:function(e,n,i,t,o){var a=Ve[n],r=a.intlLocale,s=He(Ve[n]),_={hm:{hour:"numeric",minute:"numeric"},hms:{hour:"numeric",minute:"numeric",second:"numeric"}}
if(o){var l=_[i]
l.timeZone="UTC"
return this.getWithDefault("".concat(r,"-").concat(i),(function(){return new Intl.DateTimeFormat(r,l)})).format(e)}var c=a.time&&a.time.intlOptions?a.time.intlOptions[i]:_[i]
c||(c=_.hms)
c.timeZone="UTC"
"zh"!==s&&(s+="-u-nu-latn-ca-gregory")
var d=this.getWithDefault("".concat(s,"-").concat(i),(function(){return new Intl.DateTimeFormat(s,c)})).format(Qe(e,t)).replace(Xe,"")
a.time&&a.time.postFormatting&&(d=a.time.postFormatting(i,e,d))
return d}}])
return t})()
e.TimeFormatter=Zn
var $n={fmt_hm:"hm",fmt_hms:"hms"},ei={short:"fmt_hm",medium:"fmt_hms",long:"fmt_hms",full:"fmt_hms"},ni="fmt_hms"
e.DEFAULT_TIME_PATTERN=ni
function ii(e,n,i,t,o){if(!$n[n])if(ei[n]){console.log('The time pattern "'.concat(n,'" is deprecated, falling back to "').concat(ei[n],'".'))
n=ei[n]}else{console.log('Unknown time pattern "'.concat(n,'", falling back to "').concat(ni,'". Note: custom time patterns are not supported.'))
n=ni}var a=$n[n]
Qn||(Qn=new Zn)
if(o)return Qn.format(e,i,a,!0)
try{return Qn.format(e,i,a,t)}catch(s){var r=Je(e)
return"number"==typeof r?Qn.format(new Date(r),i,a,t):e}}var ti=(function(){function e(){_(this,e)}c(e,[{key:"format",value:function(e,n,i){var t,o,a=Ve[i],r=a.chooser?a.chooser:ci,s=ai(e)
n.some((function(e){return!!e.category}))?t=(function(e,n,i){var t=(function(e,n){var i
n.forEach((function(n){if(void 0!==n.arg&&null!==n.arg&&"gte"===n.comparison){var t=ri.eq
t(e,n.arg)&&(!i||n.arg>i.arg)&&(i=n)}else if(n.comparison){var o=ri[n.comparison]
o(e,n.arg)&&(!i||n.arg>i.arg)&&(i=n)}}))
return i})(e=Math.floor(e),n)
if(t)return t
var o=(function(e,n){if(e&&null!=n){var i="".concat(n)
if(e.equals&&void 0!==e.equals[i])return e.equals[i]
if(e.endsWith)for(var t=Math.min(si,i.length),o=t;o>0;o--){var a=i.slice(-1*o)
if(void 0!==e.endsWith[a])return e.endsWith[a]}}})(i,e)
if(void 0!==o){var a,r,s=_i.indexOf(o);-1!==s&&(a=li[s].toLowerCase())
for(var _=0;_<n.length;_++){var l=n[_]
if(l.category===a)return l
"plural"===l.category&&(r=l)}if(r)return r}})(s,n,r):n.forEach((function(n){if(n.comparison){(0,ri[n.comparison])(e,n.arg)&&(!t||void 0!==n.arg&&n.arg>t.arg)&&(t=n)}}))
return t&&"function"==typeof(o=t.text)?o():o}}])
return e})()
e.ChooserFormatter=ti
var oi=1
var ai=function(e){return"number"!=typeof e||isNaN(e)?(function(e){try{if(void 0!==e){if(!isNaN(e))return parseInt("".concat(e),10)
var n=e.replace(/[^0-9]/g,""),i=parseInt(n,10)
return isNaN(i)?0:i}}catch(t){}return 0})(e):e},ri={eq:function(e,n){return e===n},gt:function(e,n){return e>n},gte:function(e,n){return e>=n},endsWith:function(e,n){return g("".concat(e),"".concat(n))}},si=2,_i=[0,1,2,3,4,5],li=["SINGULAR","PLURAL","DUAL","FEW","MANY","ZERO"],ci={equals:{1:0},endsWith:{0:oi,1:oi,2:oi,3:oi,4:oi,5:oi,6:oi,7:oi,8:oi,9:oi}}
function di(e,n,i){return function(t){if(null==t)return-1
var o=0,a="\0",r=t.length
for(o=0;o<r;o++){a=t.charAt(o)
if(e.indexOf(a)<0)break}return o>=r?-1:a>=n&&a<=i?o:-1}}var mi=(function(){function e(n){_(this,e)
this.ellipsis="..."
void 0!==n&&(this.ellipsis=n)}c(e,[{key:"format",value:function(e,n){if(!e||"string"!=typeof e)return void 0===e||""===e?"":null
if(void 0===n)return"..."
if(!n||"number"!=typeof n||n>=e.length||n<0)return e
for(var i=e.substr(0,n),t=i.split(""),o=n-1,a="",r=/\s|\?|\!|\.|\,|\;|\:/g;o>=0&&!r.test(t[o]);)o--
a=o>0?i.substr(0,o):i
return a+=this.ellipsis}}])
return e})()
e.TruncationFormatter=mi
var ui,pi,gi=/-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/,hi=/^(zero|singular|dual|few|many|plural|other)$/,yi=0
var bi={eq:function(e,n){return e===n},gt:function(e,n){return e>n},gte:function(e,n){return e>=n},endsWith:function(e,n){return g("".concat(e),"".concat(n))}}
var fi="DEFAULT_TEXT"
function wi(e,n){return"string"==typeof e?e:n[e.index.number]}function vi(e,n,i){var t=""
t=void 0===n?"{".concat(-1!==e.index.number?e.index.number:"").concat(""!==e.index.keyword?":".concat(e.index.keyword):"","}"):String(n)
return _e()(t)}var ki="prefix",Si="suffix"
function xi(e,n){var i=n instanceof d,t=i?m(n):n
if(e){var o=e[ki],a=e[Si]
o&&(t=o.value+t)
a&&(t+=a.value)}return t=i?u(t):t}var Ci=new qn
var Ni,Ti=(function(){function e(){_(this,e)
this._formatters=new Map}c(e,[{key:"getWithDefault",value:function(e,n){return (function(e,n,i){if(e.has(n))return e.get(n)
var t=i()
e.set(n,t)
return t})(this._formatters,e,n)}}])
return e})(),Ei=(function(e){i(t,Ti)
var n=o(t)
function t(){_(this,t)
return n.apply(this,arguments)}c(t,[{key:"formatNumber",value:function(e,n,i){var t=Ve[n],o=i?Object.keys(i.parameters):[]
if(o.length>0&&!["integer","percent"].includes(o[0]))throw new Error("[XMessage] Unsupported number argument")
var a=o.length>1&&"compact"===o[1]?"compact":void 0,r=o.length>0&&"percent"===o[0]?o[0]:"decimal",s=o.length>0&&"integer"===o[0]?0:void 0
return this.getWithDefault("".concat(n,"-").concat(r,"-").concat(a,"-").concat(s),(function(){var e={style:r,maximumFractionDigits:s,notation:a}
return new Intl.NumberFormat(t.intlLocale,e)})).format(e)}},{key:"formatCurrency",value:function(e,n,i){var t=i?Object.keys(i.parameters):[],o=t.length>1?t[1]:"symbol",a=Ve[n],r=t.length>2?t[2]:void 0
return this.getWithDefault("".concat(n,"-").concat(e.currencyCode,"-").concat(o,"-").concat(r),(function(){var n={style:"currency",currency:e.currencyCode,currencyDisplay:o,notation:r}
return new Intl.NumberFormat(a.intlLocale,n)})).format(e.amount)}}])
return t})()
var Ai="fmt_d_narrow"
var Ii=" ",ji="\t",Li="sep",Pi="reverseSearchForVowel"
var Ri=new qn
var Di="name",Oi="text",Mi="list",qi="start",Yi="middle",zi="end",Fi="2"
function Ui(e,n,i,t){if(Di===e){var o=ge(vn,n)
i=kn(i,null!==o?o.key:fn,t)}return i=xi(n,i=_e()(i))}var Wi={anchor:function(e,n,i,t){var o=me(),a=_e(),r=n,_=null!==r&&"object"===s(r),l=Ne(o(_?r[ve]:r)),c=Ne(_?a(r[Se]):null),d=Ne(_?a(r[xe]):null),p=m(fe(e,we,i,t)),g=Ne(fe(e,ke,i,t)),h={}
if(_)Object.keys(r).forEach((function(e){"href"!==e&&"title"!==e&&(h[Ne(a(e))]=Ne(a(r[e])))}))
else{d&&(h.class=d)
c&&(h.id=c)}var y="<a"
l&&(y+=' href="'.concat(l,'"'))
Object.keys(h).forEach((function(e){y+=" ".concat(e,'="').concat(h[e],'"')}))
g&&(y+=' title="'.concat(g,'"'))
return u(y+=">".concat(p,"</a>"))},boolean:function(e,n,i,t){var o=n,a=""
if(!0===o||o===Te)p(e,Te)&&(a=fe(e,Te,i,t))
else{if(!1!==o&&o!==Ee)throw new Error('Invalid argument for BooleanPlaceholder. Expected boolean or "true" or "false" but found "'.concat(o,'"'))
p(e,Ee)&&(a=fe(e,Ee,i,t))}return a},choice:function(e,n,i,t){var o,a,r,_,l,c=n,d="",m=e.parameters,u=yi
r=[]
for(l in m)m.hasOwnProperty(l)&&(r[(_=m[l]).order]=_)
var p,g=s(c)
if("number"!==g||isNaN(c))if("string"===g)if(gi.test(c))u=parseFloat(c)
else{ue("Invalid value for 'choice' placeholder. \"".concat(c,'" is not a number. Defaulting to 0.'))
u=yi}else"object"===g&&(u=Array.isArray(c)?c.length:Object.keys(c).length)
else u=c
o=r.map((function(e,n){var i={text:n.toString(),comparison:"eq"}
if(hi.test(e.key)){i.text=n.toString()
i.comparison="eq"
i.category=e.key}else{i.text=n.toString()
switch(e.delimiter){case"<":i.comparison="gt"
break
case"+":case"#":i.comparison="gte"
break
default:i.comparison="eq"}i.arg=parseFloat(e.key)
p||(p=i)}return i}))
ui||(ui=new ti)
void 0!==(a=ui.format(u,o,t))?d=fe(e,r[parseInt(a,10)].key,i,t):p&&(d=fe(e,p.arg,i,t))
return d},plural:function(e,n,i,t){pi||(pi=new Xn)
var o=pi.format(n,t),a=e.parameters[o],r=e.parameters,s=[],_=Object.keys(r)
if(isNaN(parseInt(_[0],10))&&!r.other)throw new Error("[XMessage] Plural placeholder must have `other` key")
for(var l=0;l<_.length;l++){var c=r[_[l]]
"number"==typeof c.order&&(s[c.order]=c)}var d,m=s.map((function(e,n){var i={text:n.toString(),comparison:"eq",arg:parseFloat(e.key)}
switch(e.delimiter){case"<":i.comparison="gt"
break
case"+":case"#":i.comparison="gte"
break
default:i.comparison="eq"}if(isNaN(i.arg)&&!e.key.match(/zero|one|two|few|many|other/))throw new Error("Invalid plural key: ".concat(e.key))
return i}))
if(a&&a.value){var u=e.index.number
return a.value[u>-1?u:0]}m.forEach((function(e){e.comparison&&(0,bi[e.comparison])(n,e.arg)&&(!d||void 0!==e.arg&&e.arg>d.arg)&&(d=e)}))
if(!d){if(m[0].arg&&n<=m[0].arg)return s[0].value
var p=m.length-1,g=m[p].arg
if(g&&n>=g)return s[p].value
throw new Error("No plural match found")}var h=s[parseInt(d.text,10)]
if(!h)throw new Error("No plural style found from ".concat(d.text))
return h.value},select:function(e,n,i){var t=e.parameters[n];((function(e){for(var n=Object.keys(e.parameters),i=0;i<n.length;i++){var t=n[i]
if(n.indexOf(t,i+1)>0)throw new Error("[XMessage] duplicate ".concat(t," keys in select placeholder"))
if(!e.parameters[t].value)throw new Error("[XMessage] select key ".concat(t," without a value"))}}))(e)
if(t&&t.value)return wi(t.value[0],i)
if(e.parameters.default&&e.parameters.default.value)return wi(e.parameters.default.value[0],i)
throw new Error("[XMessage] No value resolved for select placeholder")},date:function(e,n,i,t,o){var a=be(e,0),r=gn
a&&(r=a.key)
if(Ai===r){ue('The pattern "'.concat(r,'" is not to be used in XMessage strings. Falling back to "').concat(gn,'".'))
r=gn}return hn(n,r,t,!1,o)},list:function(e,n,i,t){var o,a,r,s,_,l=e.subtype||Oi,c="",d=Be(t,Mi)||Be("default",Mi)
if(n&&n instanceof Array){a=(o=n.length)-1
if(o>0)switch(o){case 1:c=Ui(l,e.parameters,n[0],t)
break
case 2:c=pe(d[Fi],[Ui(l,e.parameters,n[0],t).toString(),Ui(l,e.parameters,n[1],t).toString()])
break
default:s=0
_=1
do{c=pe(d[r=0===s?qi:_<a?Yi:zi],r===qi?[Ui(l,e.parameters,n[s],t).toString(),Ui(l,e.parameters,n[_],t).toString()]:[c,Ui(l,e.parameters,n[_],t).toString()])
s++
_++}while(r!==zi)}}return c},map:function(e,n,i,t){var o=n
return fe(e,void 0!==o&&ye(e,o=o.toString())?o:fi,i,t)},name:function(e,n,i,t){var o,a,r=ge(vn,e.parameters)
o=kn(n,r=r&&r.key,t)
e.parameters.possessive&&(o+=Ri.format(o,t))
a=_e()(o)
return o=xi(e.parameters,a)},number:function(e,n,i,t,o){var a,r=e.parameters
void 0!==n&&(a=r?o||r.currency&&"number"==typeof n.amount||e.parameters&&e.parameters.compact?r.currency?(function(e,n,i){Ni||(Ni=new Ei)
return Ni.formatCurrency(e,n,i)})(n,t,e):(function(e,n,i){Ni||(Ni=new Ei)
return Ni.formatNumber(e,n,i)})(n,t,e):r.integer?Hn(n,t):r.currency?Jn(n,"",t):r.percent?Kn(n,t):Bn(n,t):Bn(n,t))
return _e()(a)},possessive:function(e,n,i,t){var o="",a=new qn
void 0!==n&&(o=a.format(n,t))
return o},simple:vi,suffix:function(e,n,i,t){var o,a,r,s,_,l,c,d,m,u="",p=!1,g=e.parameters
if(void 0!==n){g&&(p=!!g[Li])
if(o=Be(t,"suffix")){d=(o.hardVowels||"")+(o.softVowels||"")
switch(o.strategy){case Pi:if(n.length>0){for(l=c=n.length-1;l>=0&&_!==Ii&&_!==ji;l--){_=n.charAt(l)
if(-1!==d.indexOf(_)){m=l===c
s=o.hardVowels&&o.hardVowels.indexOf(_)>-1?o.hardVowelSuffix:o.fallbackSuffix
u=String(m?o.bufferChar:"")+s
return p?o.separator+u:u}}for(a in o.nonVowelToSuffix)if(o.nonVowelToSuffix.hasOwnProperty(a)){r=o.nonVowelToSuffix[a]
if(new RegExp(a).test(n.charAt(c))){s=r
break}}s||(s=o.defaultBufferChar)
u=p?o.separator+s:s
break}}}}return u},text:function(e,n,i,t){var o=vi(e,n)
void 0!==o&&e.parameters.possessive&&(o=Ci.format(o,t))
return o=xi(e.parameters,o)},time:function(e,n,i,t,o){var a=be(e,0),r=ni
a&&(r=a.key)
return ii(n,r,t,!1,o)}}
function Gi(e,n,i,t){var o,a,r,s,_,l=""
if(e&&n&&i){var c=Wi[e.type]
if("function"==typeof c){var d=(function(e,n){var i=null
if(e&&e.index&&n){var t=e.index,o=t.number,a=t.keyword
if("function"==typeof n)return n(o,a)
i=null!=(i=n[o>-1?o:0])?"string"==typeof a&&""!==a?i[a]:i:void 0}return i})(e,n)
if(null==d)return u((o=e.index,a=o.number,r=o.keyword,s=-1!==a?a.toString():"",_=""!==r?":".concat(r):"","{".concat(s).concat(_,"}")))
l=c(e,d,n,i,t)}}return l}he=Gi
function Vi(e){var n=ae(e)
n.forEach(Y)
return n}var Bi=function(e){return n.default.sanitizeHTML(e)}
function Hi(e,n,i){if(e&&1===e.length&&"string"==typeof e[0]){var t=e[0]
return function(){return Bi(t)}}return function(t){return Bi(Ji(e,n,t,i))}}function Ji(e,n,i,t){for(var o="",a=0;a<e.length;++a){var r=e[a]
o+="string"==typeof r?r:Gi(r,i,n,t)}return o}var Ki=Gi
e.default=Ki})
define("@linkedin/ember-cli-pemberly-i18n/app-strings",["exports"],(function(e){"use strict"

//# sourceMappingURL=support_en_US.map