(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-libs-0874f110"],{1020:function(e,t){function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var a=e[t];"object"!=typeof a||Object.isFrozen(a)||n(a)})),e}var a=n,r=n;a.default=r;class g{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...t){const n=Object.create(null);for(const a in e)n[a]=e[a];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const l="</span>",o=e=>!!e.kind;class u{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!o(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){o(e)&&(this.buffer+=l)}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){while(this.closeNode());}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"===typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach(t=>this._walk(e,t)),e.closeNode(t)),e}static _collapse(e){"string"!==typeof e&&e.children&&(e.children.every(e=>"string"===typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{c._collapse(e)}))}}class d extends c{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){const e=new u(this,this.options);return e.value()}finalize(){return!0}}function h(e){return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function f(e){return e?"string"===typeof e?e:e.source:null}function p(...e){const t=e.map(e=>f(e)).join("");return t}function b(...e){const t="("+e.map(e=>f(e)).join("|")+")";return t}function L(e){return new RegExp(e.toString()+"|").exec("").length-1}function m(e,t){const n=e&&e.exec(t);return n&&0===n.index}const x=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(e,t="|"){let n=0;return e.map(e=>{n+=1;const t=n;let a=f(e),r="";while(a.length>0){const e=x.exec(a);if(!e){r+=a;break}r+=a.substring(0,e.index),a=a.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+t):(r+=e[0],"("===e[0]&&n++)}return r}).map(e=>`(${e})`).join(t)}const w=/\b\B/,v="[a-zA-Z]\\w*",y="[a-zA-Z_]\\w*",N="\\b\\d+(\\.\\d+)?",R="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",_="\\b(0b[01]+)",k="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",M=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=p(t,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},O={begin:"\\\\[\\s\\S]",relevance:0},j={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[O]},A={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[O]},I={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},B=function(e,t,n={}){const a=s({className:"comment",begin:e,end:t,contains:[]},n);return a.contains.push(I),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},T=B("//","$"),S=B("/\\*","\\*/"),P=B("#","$"),D={className:"number",begin:N,relevance:0},C={className:"number",begin:R,relevance:0},H={className:"number",begin:_,relevance:0},$={className:"number",begin:N+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},q={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[O,{begin:/\[/,end:/\]/,relevance:0,contains:[O]}]}]},U={className:"title",begin:v,relevance:0},z={className:"title",begin:y,relevance:0},K={begin:"\\.\\s*"+y,relevance:0},G=function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})};var V=Object.freeze({__proto__:null,MATCH_NOTHING_RE:w,IDENT_RE:v,UNDERSCORE_IDENT_RE:y,NUMBER_RE:N,C_NUMBER_RE:R,BINARY_NUMBER_RE:_,RE_STARTERS_RE:k,SHEBANG:M,BACKSLASH_ESCAPE:O,APOS_STRING_MODE:j,QUOTE_STRING_MODE:A,PHRASAL_WORDS_MODE:I,COMMENT:B,C_LINE_COMMENT_MODE:T,C_BLOCK_COMMENT_MODE:S,HASH_COMMENT_MODE:P,NUMBER_MODE:D,C_NUMBER_MODE:C,BINARY_NUMBER_MODE:H,CSS_NUMBER_MODE:$,REGEXP_MODE:q,TITLE_MODE:U,UNDERSCORE_TITLE_MODE:z,METHOD_GUARD:K,END_SAME_AS_BEGIN:G});function W(e,t){const n=e.input[e.index-1];"."===n&&t.ignoreMatch()}function X(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=W,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function F(e,t){Array.isArray(e.illegal)&&(e.illegal=b(...e.illegal))}function J(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Z(e,t){void 0===e.relevance&&(e.relevance=1)}const Y=["of","and","for","in","not","or","if","then","parent","list","value"],Q="keyword";function ee(e,t,n=Q){const a={};return"string"===typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((function(n){Object.assign(a,ee(e[n],t,n))})),a;function r(e,n){t&&(n=n.map(e=>e.toLowerCase())),n.forEach((function(t){const n=t.split("|");a[n[0]]=[e,te(n[0],n[1])]}))}}function te(e,t){return t?Number(t):ne(e)?0:1}function ne(e){return Y.includes(e.toLowerCase())}function ae(e,{plugins:t}){function n(t,n){return new RegExp(f(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=L(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(E(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex((e,t)=>t>0&&void 0!==e),a=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,a)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new a;return this.rules.slice(e).forEach(([e,n])=>t.addRule(e,n)),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}function g(e){const t=new r;return e.contains.forEach(e=>t.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}function i(t,a){const r=t;if(t.isCompiled)return r;[J].forEach(e=>e(t,a)),e.compilerExtensions.forEach(e=>e(t,a)),t.__beforeBegin=null,[X,F,Z].forEach(e=>e(t,a)),t.isCompiled=!0;let s=null;if("object"===typeof t.keywords&&(s=t.keywords.$pattern,delete t.keywords.$pattern),t.keywords&&(t.keywords=ee(t.keywords,e.case_insensitive)),t.lexemes&&s)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return s=s||t.lexemes||/\w+/,r.keywordPatternRe=n(s,!0),a&&(t.begin||(t.begin=/\B|\b/),r.beginRe=n(t.begin),t.endSameAsBegin&&(t.end=t.begin),t.end||t.endsWithParent||(t.end=/\B|\b/),t.end&&(r.endRe=n(t.end)),r.terminatorEnd=f(t.end)||"",t.endsWithParent&&a.terminatorEnd&&(r.terminatorEnd+=(t.end?"|":"")+a.terminatorEnd)),t.illegal&&(r.illegalRe=n(t.illegal)),t.contains||(t.contains=[]),t.contains=[].concat(...t.contains.map((function(e){return ge("self"===e?t:e)}))),t.contains.forEach((function(e){i(e,r)})),t.starts&&i(t.starts,a),r.matcher=g(r),r}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),i(e)}function re(e){return!!e&&(e.endsWithParent||re(e.starts))}function ge(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return s(e,{variants:null},t)}))),e.cachedVariants?e.cachedVariants:re(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}var ie="10.7.3";function se(e){return Boolean(e||""===e)}function le(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,i(this.code);let t={};return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||se(this.autodetect)},ignoreIllegals(){return!0}},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}},n={install(e){e.component("highlightjs",t)}};return{Component:t,VuePlugin:n}}const oe={"after:highlightElement":({el:e,result:t,text:n})=>{const a=ce(e);if(!a.length)return;const r=document.createElement("div");r.innerHTML=t.value,t.value=de(a,ce(r),n)}};function ue(e){return e.nodeName.toLowerCase()}function ce(e){const t=[];return function e(n,a){for(let r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(t.push({event:"start",offset:a,node:r}),a=e(r,a),ue(r).match(/br|hr|img|input/)||t.push({event:"stop",offset:a,node:r}));return a}(e,0),t}function de(e,t,n){let a=0,r="";const g=[];function s(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){function t(e){return" "+e.nodeName+'="'+i(e.value)+'"'}r+="<"+ue(e)+[].map.call(e.attributes,t).join("")+">"}function o(e){r+="</"+ue(e)+">"}function u(e){("start"===e.event?l:o)(e.node)}while(e.length||t.length){let t=s();if(r+=i(n.substring(a,t[0].offset)),a=t[0].offset,t===e){g.reverse().forEach(o);do{u(t.splice(0,1)[0]),t=s()}while(t===e&&t.length&&t[0].offset===a);g.reverse().forEach(l)}else"start"===t[0].event?g.push(t[0].node):g.pop(),u(t.splice(0,1)[0])}return r+i(n.substr(a))}const he={},fe=e=>{console.error(e)},pe=(e,...t)=>{console.log("WARN: "+e,...t)},be=(e,t)=>{he[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),he[`${e}/${t}`]=!0)},Le=i,me=s,xe=Symbol("nomatch"),Ee=function(e){const t=Object.create(null),n=Object.create(null),r=[];let i=!0;const s=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let u={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:d};function c(e){return u.noHighlightRe.test(e)}function f(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=u.languageDetectRe.exec(t);if(n){const t=P(n[1]);return t||(pe(l.replace("{}",n[1])),pe("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find(e=>c(e)||P(e))}function p(e,t,n,a){let r="",g="";"object"===typeof t?(r=e,n=t.ignoreIllegals,g=t.language,a=void 0):(be("10.7.0","highlight(lang, code, ...args) has been deprecated."),be("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),g=e,r=t);const i={code:r,language:g};q("before:highlight",i);const s=i.result?i.result:b(i.language,i.code,n,a);return s.code=i.code,q("after:highlight",s),s}function b(e,n,a,s){function o(e,t){const n=_.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function c(){if(!O.keywords)return void A.addText(I);let e=0;O.keywordPatternRe.lastIndex=0;let t=O.keywordPatternRe.exec(I),n="";while(t){n+=I.substring(e,t.index);const a=o(O,t);if(a){const[e,r]=a;if(A.addText(n),n="",B+=r,e.startsWith("_"))n+=t[0];else{const n=_.classNameAliases[e]||e;A.addKeyword(t[0],n)}}else n+=t[0];e=O.keywordPatternRe.lastIndex,t=O.keywordPatternRe.exec(I)}n+=I.substr(e),A.addText(n)}function d(){if(""===I)return;let e=null;if("string"===typeof O.subLanguage){if(!t[O.subLanguage])return void A.addText(I);e=b(O.subLanguage,I,!0,j[O.subLanguage]),j[O.subLanguage]=e.top}else e=x(I,O.subLanguage.length?O.subLanguage:null);O.relevance>0&&(B+=e.relevance),A.addSublanguage(e.emitter,e.language)}function f(){null!=O.subLanguage?d():c(),I=""}function p(e){return e.className&&A.openNode(_.classNameAliases[e.className]||e.className),O=Object.create(e,{parent:{value:O}}),O}function L(e,t,n){let a=m(e.endRe,n);if(a){if(e["on:end"]){const n=new g(e);e["on:end"](t,n),n.isMatchIgnored&&(a=!1)}if(a){while(e.endsParent&&e.parent)e=e.parent;return e}}if(e.endsWithParent)return L(e.parent,t,n)}function E(e){return 0===O.matcher.regexIndex?(I+=e[0],1):(D=!0,0)}function w(e){const t=e[0],n=e.rule,a=new g(n),r=[n.__beforeBegin,n["on:begin"]];for(const g of r)if(g&&(g(e,a),a.isMatchIgnored))return E(t);return n&&n.endSameAsBegin&&(n.endRe=h(t)),n.skip?I+=t:(n.excludeBegin&&(I+=t),f(),n.returnBegin||n.excludeBegin||(I=t)),p(n),n.returnBegin?0:t.length}function v(e){const t=e[0],a=n.substr(e.index),r=L(O,e,a);if(!r)return xe;const g=O;g.skip?I+=t:(g.returnEnd||g.excludeEnd||(I+=t),f(),g.excludeEnd&&(I=t));do{O.className&&A.closeNode(),O.skip||O.subLanguage||(B+=O.relevance),O=O.parent}while(O!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),p(r.starts)),g.returnEnd?0:t.length}function y(){const e=[];for(let t=O;t!==_;t=t.parent)t.className&&e.unshift(t.className);e.forEach(e=>A.openNode(e))}let N={};function R(t,r){const g=r&&r[0];if(I+=t,null==g)return f(),0;if("begin"===N.type&&"end"===r.type&&N.index===r.index&&""===g){if(I+=n.slice(r.index,r.index+1),!i){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=N.rule,t}return 1}if(N=r,"begin"===r.type)return w(r);if("illegal"===r.type&&!a){const e=new Error('Illegal lexeme "'+g+'" for mode "'+(O.className||"<unnamed>")+'"');throw e.mode=O,e}if("end"===r.type){const e=v(r);if(e!==xe)return e}if("illegal"===r.type&&""===g)return 1;if(S>1e5&&S>3*r.index){const e=new Error("potential infinite loop, way more iterations than matches");throw e}return I+=g,g.length}const _=P(e);if(!_)throw fe(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const k=ae(_,{plugins:r});let M="",O=s||k;const j={},A=new u.__emitter(u);y();let I="",B=0,T=0,S=0,D=!1;try{for(O.matcher.considerAll();;){S++,D?D=!1:O.matcher.considerAll(),O.matcher.lastIndex=T;const e=O.matcher.exec(n);if(!e)break;const t=n.substring(T,e.index),a=R(t,e);T=e.index+a}return R(n.substr(T)),A.closeAllNodes(),A.finalize(),M=A.toHTML(),{relevance:Math.floor(B),value:M,language:e,illegal:!1,emitter:A,top:O}}catch(C){if(C.message&&C.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:C.message,context:n.slice(T-100,T+100),mode:C.mode},sofar:M,relevance:0,value:Le(n),emitter:A};if(i)return{illegal:!1,relevance:0,value:Le(n),emitter:A,language:e,top:O,errorRaised:C};throw C}}function L(e){const t={relevance:0,emitter:new u.__emitter(u),value:Le(e),illegal:!1,top:o};return t.emitter.addText(e),t}function x(e,n){n=n||u.languages||Object.keys(t);const a=L(e),r=n.filter(P).filter(C).map(t=>b(t,e,!1));r.unshift(a);const g=r.sort((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(P(e.language).supersetOf===t.language)return 1;if(P(t.language).supersetOf===e.language)return-1}return 0}),[i,s]=g,l=i;return l.second_best=s,l}function E(e){return u.tabReplace||u.useBR?e.replace(s,e=>"\n"===e?u.useBR?"<br>":e:u.tabReplace?e.replace(/\t/g,u.tabReplace):e):e}function w(e,t,a){const r=t?n[t]:a;e.classList.add("hljs"),r&&e.classList.add(r)}const v={"before:highlightElement":({el:e})=>{u.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:e})=>{u.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},y=/^(<[^>]+>|\t)+/gm,N={"after:highlightElement":({result:e})=>{u.tabReplace&&(e.value=e.value.replace(y,e=>e.replace(/\t/g,u.tabReplace)))}};function R(e){let t=null;const n=f(e);if(c(n))return;q("before:highlightElement",{el:e,language:n}),t=e;const a=t.textContent,r=n?p(a,{language:n,ignoreIllegals:!0}):x(a);q("after:highlightElement",{el:e,result:r,text:a}),e.innerHTML=r.value,w(e,n,r.language),e.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}function _(e){e.useBR&&(be("10.3.0","'useBR' will be removed entirely in v11.0"),be("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),u=me(u,e)}const k=()=>{if(k.called)return;k.called=!0,be("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead.");const e=document.querySelectorAll("pre code");e.forEach(R)};function M(){be("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),O=!0}let O=!1;function j(){if("loading"===document.readyState)return void(O=!0);const e=document.querySelectorAll("pre code");e.forEach(R)}function A(){O&&j()}function I(n,a){let r=null;try{r=a(e)}catch(g){if(fe("Language definition for '{}' could not be registered.".replace("{}",n)),!i)throw g;fe(g),r=o}r.name||(r.name=n),t[n]=r,r.rawDefinition=a.bind(null,e),r.aliases&&D(r.aliases,{languageName:n})}function B(e){delete t[e];for(const t of Object.keys(n))n[t]===e&&delete n[t]}function T(){return Object.keys(t)}function S(e){be("10.4.0","requireLanguage will be removed entirely in v11."),be("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const t=P(e);if(t)return t;const n=new Error("The '{}' language is required, but not loaded.".replace("{}",e));throw n}function P(e){return e=(e||"").toLowerCase(),t[e]||t[n[e]]}function D(e,{languageName:t}){"string"===typeof e&&(e=[e]),e.forEach(e=>{n[e.toLowerCase()]=t})}function C(e){const t=P(e);return t&&!t.disableAutodetect}function H(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}function $(e){H(e),r.push(e)}function q(e,t){const n=e;r.forEach((function(e){e[n]&&e[n](t)}))}function U(e){return be("10.2.0","fixMarkup will be removed entirely in v11.0"),be("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),E(e)}function z(e){return be("10.7.0","highlightBlock will be removed entirely in v12.0"),be("10.7.0","Please use highlightElement now."),R(e)}"undefined"!==typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",A,!1),Object.assign(e,{highlight:p,highlightAuto:x,highlightAll:j,fixMarkup:U,highlightElement:R,highlightBlock:z,configure:_,initHighlighting:k,initHighlightingOnLoad:M,registerLanguage:I,unregisterLanguage:B,listLanguages:T,getLanguage:P,registerAliases:D,requireLanguage:S,autoDetection:C,inherit:me,addPlugin:$,vuePlugin:le(e).VuePlugin}),e.debugMode=function(){i=!1},e.safeMode=function(){i=!0},e.versionString=ie;for(const g in V)"object"===typeof V[g]&&a(V[g]);return Object.assign(e,V),e.addPlugin(v),e.addPlugin(oe),e.addPlugin(N),e};var we=Ee({});e.exports=we},1487:function(e,t,n){var a=n("1020");a.registerLanguage("1c",n("f71c")),a.registerLanguage("abnf",n("b528")),a.registerLanguage("accesslog",n("998d")),a.registerLanguage("actionscript",n("f9f0")),a.registerLanguage("ada",n("01ac")),a.registerLanguage("angelscript",n("dbcc")),a.registerLanguage("apache",n("f0aa")),a.registerLanguage("applescript",n("7bc1")),a.registerLanguage("arcade",n("305e")),a.registerLanguage("arduino",n("944e7")),a.registerLanguage("armasm",n("a33c")),a.registerLanguage("xml",n("8dcb")),a.registerLanguage("asciidoc",n("0290")),a.registerLanguage("aspectj",n("9814")),a.registerLanguage("autohotkey",n("0481")),a.registerLanguage("autoit",n("ef99")),a.registerLanguage("avrasm",n("a6fb")),a.registerLanguage("awk",n("1069")),a.registerLanguage("axapta",n("a885")),a.registerLanguage("bash",n("f0f8")),a.registerLanguage("basic",n("a15aa")),a.registerLanguage("bnf",n("75da")),a.registerLanguage("brainfuck",n("5921")),a.registerLanguage("c-like",n("af9a")),a.registerLanguage("c",n("1fe5")),a.registerLanguage("cal",n("7781")),a.registerLanguage("capnproto",n("4a5e")),a.registerLanguage("ceylon",n("ba76")),a.registerLanguage("clean",n("51ab")),a.registerLanguage("clojure",n("b884")),a.registerLanguage("clojure-repl",n("149d")),a.registerLanguage("cmake",n("eaab")),a.registerLanguage("coffeescript",n("a995")),a.registerLanguage("coq",n("80b3")),a.registerLanguage("cos",n("8261")),a.registerLanguage("cpp",n("0209")),a.registerLanguage("crmsh",n("c8e5")),a.registerLanguage("crystal",n("294a")),a.registerLanguage("csharp",n("98af")),a.registerLanguage("csp",n("4272")),a.registerLanguage("css",n("ee8c")),a.registerLanguage("d",n("8d6d")),a.registerLanguage("markdown",n("04b0")),a.registerLanguage("dart",n("7c46")),a.registerLanguage("delphi",n("1f8a")),a.registerLanguage("diff",n("48b8")),a.registerLanguage("django",n("d248")),a.registerLanguage("dns",n("8a86")),a.registerLanguage("dockerfile",n("44b5")),a.registerLanguage("dos",n("7cff")),a.registerLanguage("dsconfig",n("b91e")),a.registerLanguage("dts",n("b0cf")),a.registerLanguage("dust",n("f4da")),a.registerLanguage("ebnf",n("1b4d")),a.registerLanguage("elixir",n("7727")),a.registerLanguage("elm",n("5051")),a.registerLanguage("ruby",n("82cb")),a.registerLanguage("erb",n("1367")),a.registerLanguage("erlang-repl",n("f492")),a.registerLanguage("erlang",n("b3c5")),a.registerLanguage("excel",n("f5cf")),a.registerLanguage("fix",n("2b22")),a.registerLanguage("flix",n("a14e")),a.registerLanguage("fortran",n("485f")),a.registerLanguage("fsharp",n("0215")),a.registerLanguage("gams",n("7d9d")),a.registerLanguage("gauss",n("ae7a")),a.registerLanguage("gcode",n("94a2")),a.registerLanguage("gherkin",n("351a")),a.registerLanguage("glsl",n("df06")),a.registerLanguage("gml",n("e6ea")),a.registerLanguage("go",n("0b22")),a.registerLanguage("golo",n("919d")),a.registerLanguage("gradle",n("9544")),a.registerLanguage("groovy",n("1f64")),a.registerLanguage("haml",n("4f4a")),a.registerLanguage("handlebars",n("e55c")),a.registerLanguage("haskell",n("3f38")),a.registerLanguage("haxe",n("7c71")),a.registerLanguage("hsp",n("c22d")),a.registerLanguage("htmlbars",n("79b5")),a.registerLanguage("http",n("c01d")),a.registerLanguage("hy",n("8667")),a.registerLanguage("inform7",n("2e5d")),a.registerLanguage("ini",n("2a93")),a.registerLanguage("irpf90",n("074e")),a.registerLanguage("isbl",n("bb43")),a.registerLanguage("java",n("332f")),a.registerLanguage("javascript",n("4dd1")),a.registerLanguage("jboss-cli",n("04a8")),a.registerLanguage("json",n("5ad2")),a.registerLanguage("julia",n("2265")),a.registerLanguage("julia-repl",n("b7aa")),a.registerLanguage("kotlin",n("a941")),a.registerLanguage("lasso",n("25bd")),a.registerLanguage("latex",n("1555")),a.registerLanguage("ldif",n("1a06")),a.registerLanguage("leaf",n("2e9b")),a.registerLanguage("less",n("1846")),a.registerLanguage("lisp",n("9b32")),a.registerLanguage("livecodeserver",n("1beb")),a.registerLanguage("livescript",n("2e11")),a.registerLanguage("llvm",n("7c30")),a.registerLanguage("lsl",n("28ad")),a.registerLanguage("lua",n("ecfe")),a.registerLanguage("makefile",n("7a5e")),a.registerLanguage("mathematica",n("ef7a")),a.registerLanguage("matlab",n("8ca5")),a.registerLanguage("maxima",n("399d")),a.registerLanguage("mel",n("bb7e")),a.registerLanguage("mercury",n("2425")),a.registerLanguage("mipsasm",n("a342")),a.registerLanguage("mizar",n("0f16")),a.registerLanguage("perl",n("6a51")),a.registerLanguage("mojolicious",n("66ba")),a.registerLanguage("monkey",n("a710")),a.registerLanguage("moonscript",n("b1b9")),a.registerLanguage("n1ql",n("f4c8")),a.registerLanguage("nginx",n("f54f")),a.registerLanguage("nim",n("861d1")),a.registerLanguage("nix",n("46ae")),a.registerLanguage("node-repl",n("0118")),a.registerLanguage("nsis",n("b322")),a.registerLanguage("objectivec",n("9bf21")),a.registerLanguage("ocaml",n("ee6c")),a.registerLanguage("openscad",n("02c4")),a.registerLanguage("oxygene",n("6de8")),a.registerLanguage("parser3",n("3728")),a.registerLanguage("pf",n("767a")),a.registerLanguage("pgsql",n("f851")),a.registerLanguage("php",n("2907")),a.registerLanguage("php-template",n("e05a")),a.registerLanguage("plaintext",n("44e5")),a.registerLanguage("pony",n("95d0")),a.registerLanguage("powershell",n("508e")),a.registerLanguage("processing",n("afba")),a.registerLanguage("profile",n("b90a")),a.registerLanguage("prolog",n("4396")),a.registerLanguage("properties",n("56b2")),a.registerLanguage("protobuf",n("2e8e")),a.registerLanguage("puppet",n("5027")),a.registerLanguage("purebasic",n("1b02")),a.registerLanguage("python",n("9510")),a.registerLanguage("python-repl",n("4168")),a.registerLanguage("q",n("5dfb")),a.registerLanguage("qml",n("612a")),a.registerLanguage("r",n("26bc")),a.registerLanguage("reasonml",n("e990")),a.registerLanguage("rib",n("0faf")),a.registerLanguage("roboconf",n("f50f")),a.registerLanguage("routeros",n("d959")),a.registerLanguage("rsl",n("a0a7")),a.registerLanguage("ruleslanguage",n("8aba")),a.registerLanguage("rust",n("2ce7")),a.registerLanguage("sas",n("40f4")),a.registerLanguage("scala",n("9f7fc")),a.registerLanguage("scheme",n("4108")),a.registerLanguage("scilab",n("ea4d")),a.registerLanguage("scss",n("6113")),a.registerLanguage("shell",n("b65b")),a.registerLanguage("smali",n("1b1c")),a.registerLanguage("smalltalk",n("8d4f")),a.registerLanguage("sml",n("dc41")),a.registerLanguage("sqf",n("e2a7")),a.registerLanguage("sql_more",n("f761")),a.registerLanguage("sql",n("de09")),a.registerLanguage("stan",n("8931")),a.registerLanguage("stata",n("d4b5")),a.registerLanguage("step21",n("0081")),a.registerLanguage("stylus",n("bd88")),a.registerLanguage("subunit",n("02ac")),a.registerLanguage("swift",n("2a39")),a.registerLanguage("taggerscript",n("2468")),a.registerLanguage("yaml",n("2e7b")),a.registerLanguage("tap",n("06b4")),a.registerLanguage("tcl",n("a27d")),a.registerLanguage("thrift",n("adf9")),a.registerLanguage("tp",n("a613")),a.registerLanguage("twig",n("f46e")),a.registerLanguage("typescript",n("af44")),a.registerLanguage("vala",n("f122")),a.registerLanguage("vbnet",n("89e7")),a.registerLanguage("vbscript",n("5a3e")),a.registerLanguage("vbscript-html",n("f45a")),a.registerLanguage("verilog",n("e10f")),a.registerLanguage("vhdl",n("310f")),a.registerLanguage("vim",n("3c69")),a.registerLanguage("x86asm",n("a154")),a.registerLanguage("xl",n("2639")),a.registerLanguage("xquery",n("268a")),a.registerLanguage("zephir",n("9f0c")),e.exports=a}}]);