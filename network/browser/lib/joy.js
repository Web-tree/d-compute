/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
    marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
    padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});;(function(){

    /* UNBUILD */
    var root;
    if(typeof window !== "undefined"){ root = window }
    if(typeof global !== "undefined"){ root = global }
    root = root || {};
    var console = root.console || {log: function(){}};
    function USE(arg, req){
        return req? require(arg) : arg.slice? USE[R(arg)] : function(mod, path){
            arg(mod = {exports: {}});
            USE[R(path)] = mod.exports;
        }
        function R(p){
            return p.split('/').slice(-1).toString().replace('.js','');
        }
    }
    if(typeof module !== "undefined"){ var common = module }
    /* UNBUILD */

    ;USE(function(module){
        // Generic javascript utilities.
        var Type = {};
        //Type.fns = Type.fn = {is: function(fn){ return (!!fn && fn instanceof Function) }}
        Type.fn = {is: function(fn){ return (!!fn && 'function' == typeof fn) }}
        Type.bi = {is: function(b){ return (b instanceof Boolean || typeof b == 'boolean') }}
        Type.num = {is: function(n){ return !list_is(n) && ((n - parseFloat(n) + 1) >= 0 || Infinity === n || -Infinity === n) }}
        Type.text = {is: function(t){ return (typeof t == 'string') }}
        Type.text.ify = function(t){
            if(Type.text.is(t)){ return t }
            if(typeof JSON !== "undefined"){ return JSON.stringify(t) }
            return (t && t.toString)? t.toString() : t;
        }
        Type.text.random = function(l, c){
            var s = '';
            l = l || 24; // you are not going to make a 0 length random number, so no need to check type
            c = c || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz';
            while(l > 0){ s += c.charAt(Math.floor(Math.random() * c.length)); l-- }
            return s;
        }
        Type.text.match = function(t, o){ var tmp, u;
            if('string' !== typeof t){ return false }
            if('string' == typeof o){ o = {'=': o} }
            o = o || {};
            tmp = (o['='] || o['*'] || o['>'] || o['<']);
            if(t === tmp){ return true }
            if(u !== o['=']){ return false }
            tmp = (o['*'] || o['>'] || o['<']);
            if(t.slice(0, (tmp||'').length) === tmp){ return true }
            if(u !== o['*']){ return false }
            if(u !== o['>'] && u !== o['<']){
                return (t >= o['>'] && t <= o['<'])? true : false;
            }
            if(u !== o['>'] && t >= o['>']){ return true }
            if(u !== o['<'] && t <= o['<']){ return true }
            return false;
        }
        Type.list = {is: function(l){ return (l instanceof Array) }}
        Type.list.slit = Array.prototype.slice;
        Type.list.sort = function(k){ // creates a new sort function based off some key
            return function(A,B){
                if(!A || !B){ return 0 } A = A[k]; B = B[k];
                if(A < B){ return -1 }else if(A > B){ return 1 }
                else { return 0 }
            }
        }
        Type.list.map = function(l, c, _){ return obj_map(l, c, _) }
        Type.list.index = 1; // change this to 0 if you want non-logical, non-mathematical, non-matrix, non-convenient array notation
        Type.obj = {is: function(o){ return o? (o instanceof Object && o.constructor === Object) || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === 'Object' : false }}
        Type.obj.put = function(o, k, v){ return (o||{})[k] = v, o }
        Type.obj.has = function(o, k){ return o && Object.prototype.hasOwnProperty.call(o, k) }
        Type.obj.del = function(o, k){
            if(!o){ return }
            o[k] = null;
            delete o[k];
            return o;
        }
        Type.obj.as = function(o, k, v, u){ return o[k] = o[k] || (u === v? {} : v) }
        Type.obj.ify = function(o){
            if(obj_is(o)){ return o }
            try{o = JSON.parse(o);
            }catch(e){o={}};
            return o;
        }
        ;(function(){ var u;
            function map(v,k){
                if(obj_has(this,k) && u !== this[k]){ return }
                this[k] = v;
            }
            Type.obj.to = function(from, to){
                to = to || {};
                obj_map(from, map, to);
                return to;
            }
        }());
        Type.obj.copy = function(o){ // because http://web.archive.org/web/20140328224025/http://jsperf.com/cloning-an-object/2
            return !o? o : JSON.parse(JSON.stringify(o)); // is shockingly faster than anything else, and our data has to be a subset of JSON anyways!
        }
        ;(function(){
            function empty(v,i){ var n = this.n;
                if(n && (i === n || (obj_is(n) && obj_has(n, i)))){ return }
                if(i){ return true }
            }
            Type.obj.empty = function(o, n){
                if(!o){ return true }
                return obj_map(o,empty,{n:n})? false : true;
            }
        }());
        ;(function(){
            function t(k,v){
                if(2 === arguments.length){
                    t.r = t.r || {};
                    t.r[k] = v;
                    return;
                } t.r = t.r || [];
                t.r.push(k);
            };
            var keys = Object.keys, map;
            Object.keys = Object.keys || function(o){ return map(o, function(v,k,t){t(k)}) }
            Type.obj.map = map = function(l, c, _){
                var u, i = 0, x, r, ll, lle, f = fn_is(c);
                t.r = null;
                if(keys && obj_is(l)){
                    ll = keys(l); lle = true;
                }
                if(list_is(l) || ll){
                    x = (ll || l).length;
                    for(;i < x; i++){
                        var ii = (i + Type.list.index);
                        if(f){
                            r = lle? c.call(_ || this, l[ll[i]], ll[i], t) : c.call(_ || this, l[i], ii, t);
                            if(r !== u){ return r }
                        } else {
                            //if(Type.test.is(c,l[i])){ return ii } // should implement deep equality testing!
                            if(c === l[lle? ll[i] : i]){ return ll? ll[i] : ii } // use this for now
                        }
                    }
                } else {
                    for(i in l){
                        if(f){
                            if(obj_has(l,i)){
                                r = _? c.call(_, l[i], i, t) : c(l[i], i, t);
                                if(r !== u){ return r }
                            }
                        } else {
                            //if(a.test.is(c,l[i])){ return i } // should implement deep equality testing!
                            if(c === l[i]){ return i } // use this for now
                        }
                    }
                }
                return f? t.r : Type.list.index? 0 : -1;
            }
        }());
        Type.time = {};
        Type.time.is = function(t){ return t? t instanceof Date : (+new Date().getTime()) }

        var fn_is = Type.fn.is;
        var list_is = Type.list.is;
        var obj = Type.obj, obj_is = obj.is, obj_has = obj.has, obj_map = obj.map;
        module.exports = Type;
    })(USE, './type');

    ;USE(function(module){
        // On event emitter generic javascript utility.
        module.exports = function onto(tag, arg, as){
            if(!tag){ return {to: onto} }
            var u, tag = (this.tag || (this.tag = {}))[tag] ||
                (this.tag[tag] = {tag: tag, to: onto._ = {
                        next: function(arg){ var tmp;
                            if((tmp = this.to)){
                                tmp.next(arg);
                            }}
                    }});
            if(arg instanceof Function){
                var be = {
                    off: onto.off ||
                        (onto.off = function(){
                            if(this.next === onto._.next){ return !0 }
                            if(this === this.the.last){
                                this.the.last = this.back;
                            }
                            this.to.back = this.back;
                            this.next = onto._.next;
                            this.back.to = this.to;
                            if(this.the.last === this.the){
                                delete this.on.tag[this.the.tag];
                            }
                        }),
                    to: onto._,
                    next: arg,
                    the: tag,
                    on: this,
                    as: as,
                };
                (be.back = tag.last || tag).to = be;
                return tag.last = be;
            }
            if((tag = tag.to) && u !== arg){ tag.next(arg) }
            return tag;
        };
    })(USE, './onto');

    ;USE(function(module){
        /* Based on the Hypothetical Amnesia Machine thought experiment */
        function HAM(machineState, incomingState, currentState, incomingValue, currentValue){
            if(machineState < incomingState){
                return {defer: true}; // the incoming value is outside the boundary of the machine's state, it must be reprocessed in another state.
            }
            if(incomingState < currentState){
                return {historical: true}; // the incoming value is within the boundary of the machine's state, but not within the range.

            }
            if(currentState < incomingState){
                return {converge: true, incoming: true}; // the incoming value is within both the boundary and the range of the machine's state.

            }
            if(incomingState === currentState){
                incomingValue = Lexical(incomingValue) || "";
                currentValue = Lexical(currentValue) || "";
                if(incomingValue === currentValue){ // Note: while these are practically the same, the deltas could be technically different
                    return {state: true};
                }
                /*
					The following is a naive implementation, but will always work.
					Never change it unless you have specific needs that absolutely require it.
					If changed, your data will diverge unless you guarantee every peer's algorithm has also been changed to be the same.
					As a result, it is highly discouraged to modify despite the fact that it is naive,
					because convergence (data integrity) is generally more important.
					Any difference in this algorithm must be given a new and different name.
				*/
                if(incomingValue < currentValue){ // Lexical only works on simple value types!
                    return {converge: true, current: true};
                }
                if(currentValue < incomingValue){ // Lexical only works on simple value types!
                    return {converge: true, incoming: true};
                }
            }
            return {err: "Invalid CRDT Data: "+ incomingValue +" to "+ currentValue +" at "+ incomingState +" to "+ currentState +"!"};
        }
        if(typeof JSON === 'undefined'){
            throw new Error(
                'JSON is not included in this browser. Please load it first: ' +
                'ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js'
            );
        }
        var Lexical = JSON.stringify, undefined;
        module.exports = HAM;
    })(USE, './HAM');

    ;USE(function(module){
        var Type = USE('./type');
        var Val = {};
        Val.is = function(v){ // Valid values are a subset of JSON: null, binary, number (!Infinity), text, or a soul relation. Arrays need special algorithms to handle concurrency, so they are not supported directly. Use an extension that supports them if needed but research their problems first.
            if(v === u){ return false }
            if(v === null){ return true } // "deletes", nulling out keys.
            if(v === Infinity){ return false } // we want this to be, but JSON does not support it, sad face.
            if(text_is(v) // by "text" we mean strings.
                || bi_is(v) // by "binary" we mean boolean.
                || num_is(v)){ // by "number" we mean integers or decimals.
                return true; // simple values are valid.
            }
            return Val.link.is(v) || false; // is the value a soul relation? Then it is valid and return it. If not, everything else remaining is an invalid data type. Custom extensions can be built on top of these primitives to support other types.
        }
        Val.link = Val.rel = {_: '#'};
        ;(function(){
            Val.link.is = function(v){ // this defines whether an object is a soul relation or not, they look like this: {'#': 'UUID'}
                if(v && v[rel_] && !v._ && obj_is(v)){ // must be an object.
                    var o = {};
                    obj_map(v, map, o);
                    if(o.id){ // a valid id was found.
                        return o.id; // yay! Return it.
                    }
                }
                return false; // the value was not a valid soul relation.
            }
            function map(s, k){ var o = this; // map over the object...
                if(o.id){ return o.id = false } // if ID is already defined AND we're still looping through the object, it is considered invalid.
                if(k == rel_ && text_is(s)){ // the key should be '#' and have a text value.
                    o.id = s; // we found the soul!
                } else {
                    return o.id = false; // if there exists anything else on the object that isn't the soul, then it is considered invalid.
                }
            }
        }());
        Val.link.ify = function(t){ return obj_put({}, rel_, t) } // convert a soul into a relation and return it.
        Type.obj.has._ = '.';
        var rel_ = Val.link._, u;
        var bi_is = Type.bi.is;
        var num_is = Type.num.is;
        var text_is = Type.text.is;
        var obj = Type.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
        module.exports = Val;
    })(USE, './val');

    ;USE(function(module){
        var Type = USE('./type');
        var Val = USE('./val');
        var Node = {_: '_'};
        Node.soul = function(n, o){ return (n && n._ && n._[o || soul_]) } // convenience function to check to see if there is a soul on a node and return it.
        Node.soul.ify = function(n, o){ // put a soul on an object.
            o = (typeof o === 'string')? {soul: o} : o || {};
            n = n || {}; // make sure it exists.
            n._ = n._ || {}; // make sure meta exists.
            n._[soul_] = o.soul || n._[soul_] || text_random(); // put the soul on it.
            return n;
        }
        Node.soul._ = Val.link._;
        ;(function(){
            Node.is = function(n, cb, as){ var s; // checks to see if an object is a valid node.
                if(!obj_is(n)){ return false } // must be an object.
                if(s = Node.soul(n)){ // must have a soul on it.
                    return !obj_map(n, map, {as:as,cb:cb,s:s,n:n});
                }
                return false; // nope! This was not a valid node.
            }
            function map(v, k){ // we invert this because the way we check for this is via a negation.
                if(k === Node._){ return } // skip over the metadata.
                if(!Val.is(v)){ return true } // it is true that this is an invalid node.
                if(this.cb){ this.cb.call(this.as, v, k, this.n, this.s) } // optionally callback each key/value.
            }
        }());
        ;(function(){
            Node.ify = function(obj, o, as){ // returns a node from a shallow object.
                if(!o){ o = {} }
                else if(typeof o === 'string'){ o = {soul: o} }
                else if(o instanceof Function){ o = {map: o} }
                if(o.map){ o.node = o.map.call(as, obj, u, o.node || {}) }
                if(o.node = Node.soul.ify(o.node || {}, o)){
                    obj_map(obj, map, {o:o,as:as});
                }
                return o.node; // This will only be a valid node if the object wasn't already deep!
            }
            function map(v, k){ var o = this.o, tmp, u; // iterate over each key/value.
                if(o.map){
                    tmp = o.map.call(this.as, v, ''+k, o.node);
                    if(u === tmp){
                        obj_del(o.node, k);
                    } else
                    if(o.node){ o.node[k] = tmp }
                    return;
                }
                if(Val.is(v)){
                    o.node[k] = v;
                }
            }
        }());
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_map = obj.map;
        var text = Type.text, text_random = text.random;
        var soul_ = Node.soul._;
        var u;
        module.exports = Node;
    })(USE, './node');

    ;USE(function(module){
        var Type = USE('./type');
        var Node = USE('./node');
        function State(){
            var t;
            /*if(perf){
				t = start + perf.now(); // Danger: Accuracy decays significantly over time, even if precise.
			} else {*/
            t = time();
            //}
            if(last < t){
                return N = 0, last = t + State.drift;
            }
            return last = t + ((N += 1) / D) + State.drift;
        }
        var time = Type.time.is, last = -Infinity, N = 0, D = 1000; // WARNING! In the future, on machines that are D times faster than 2016AD machines, you will want to increase D by another several orders of magnitude so the processing speed never out paces the decimal resolution (increasing an integer effects the state accuracy).
        var perf = (typeof performance !== 'undefined')? (performance.timing && performance) : false, start = (perf && perf.timing && perf.timing.navigationStart) || (perf = false);
        State._ = '>';
        State.drift = 0;
        State.is = function(n, k, o){ // convenience function to get the state on a key on a node and return it.
            var tmp = (k && n && n[N_] && n[N_][State._]) || o;
            if(!tmp){ return }
            return num_is(tmp = tmp[k])? tmp : -Infinity;
        }
        State.lex = function(){ return State().toString(36).replace('.','') }
        State.ify = function(n, k, s, v, soul){ // put a key's state on a node.
            if(!n || !n[N_]){ // reject if it is not node-like.
                if(!soul){ // unless they passed a soul
                    return;
                }
                n = Node.soul.ify(n, soul); // then make it so!
            }
            var tmp = obj_as(n[N_], State._); // grab the states data.
            if(u !== k && k !== N_){
                if(num_is(s)){
                    tmp[k] = s; // add the valid state.
                }
                if(u !== v){ // Note: Not its job to check for valid values!
                    n[k] = v;
                }
            }
            return n;
        }
        State.to = function(from, k, to){
            var val = (from||{})[k];
            if(obj_is(val)){
                val = obj_copy(val);
            }
            return State.ify(to, k, State.is(from, k), val, Node.soul(from));
        }
        ;(function(){
            State.map = function(cb, s, as){ var u; // for use with Node.ify
                var o = obj_is(o = cb || s)? o : null;
                cb = fn_is(cb = cb || s)? cb : null;
                if(o && !cb){
                    s = num_is(s)? s : State();
                    o[N_] = o[N_] || {};
                    obj_map(o, map, {o:o,s:s});
                    return o;
                }
                as = as || obj_is(s)? s : u;
                s = num_is(s)? s : State();
                return function(v, k, o, opt){
                    if(!cb){
                        map.call({o: o, s: s}, v,k);
                        return v;
                    }
                    cb.call(as || this || {}, v, k, o, opt);
                    if(obj_has(o,k) && u === o[k]){ return }
                    map.call({o: o, s: s}, v,k);
                }
            }
            function map(v,k){
                if(N_ === k){ return }
                State.ify(this.o, k, this.s) ;
            }
        }());
        var obj = Type.obj, obj_as = obj.as, obj_has = obj.has, obj_is = obj.is, obj_map = obj.map, obj_copy = obj.copy;
        var num = Type.num, num_is = num.is;
        var fn = Type.fn, fn_is = fn.is;
        var N_ = Node._, u;
        module.exports = State;
    })(USE, './state');

    ;USE(function(module){
        var Type = USE('./type');
        var Val = USE('./val');
        var Node = USE('./node');
        var Graph = {};
        ;(function(){
            Graph.is = function(g, cb, fn, as){ // checks to see if an object is a valid graph.
                if(!g || !obj_is(g) || obj_empty(g)){ return false } // must be an object.
                return !obj_map(g, map, {cb:cb,fn:fn,as:as}); // makes sure it wasn't an empty object.
            }
            function map(n, s){ // we invert this because the way'? we check for this is via a negation.
                if(!n || s !== Node.soul(n) || !Node.is(n, this.fn, this.as)){ return true } // it is true that this is an invalid graph.
                if(!this.cb){ return }
                nf.n = n; nf.as = this.as; // sequential race conditions aren't races.
                this.cb.call(nf.as, n, s, nf);
            }
            function nf(fn){ // optional callback for each node.
                if(fn){ Node.is(nf.n, fn, nf.as) } // where we then have an optional callback for each key/value.
            }
        }());
        ;(function(){
            Graph.ify = function(obj, env, as){
                var at = {path: [], obj: obj};
                if(!env){
                    env = {};
                } else
                if(typeof env === 'string'){
                    env = {soul: env};
                } else
                if(env instanceof Function){
                    env.map = env;
                }
                if(env.soul){
                    at.link = Val.link.ify(env.soul);
                }
                env.shell = (as||{}).shell;
                env.graph = env.graph || {};
                env.seen = env.seen || [];
                env.as = env.as || as;
                node(env, at);
                env.root = at.node;
                return env.graph;
            }
            function node(env, at){ var tmp;
                if(tmp = seen(env, at)){ return tmp }
                at.env = env;
                at.soul = soul;
                if(Node.ify(at.obj, map, at)){
                    at.link = at.link || Val.link.ify(Node.soul(at.node));
                    if(at.obj !== env.shell){
                        env.graph[Val.link.is(at.link)] = at.node;
                    }
                }
                return at;
            }
            function map(v,k,n){
                var at = this, env = at.env, is, tmp;
                if(Node._ === k && obj_has(v,Val.link._)){
                    return n._; // TODO: Bug?
                }
                if(!(is = valid(v,k,n, at,env))){ return }
                if(!k){
                    at.node = at.node || n || {};
                    if(obj_has(v, Node._) && Node.soul(v)){ // ? for safety ?
                        at.node._ = obj_copy(v._);
                    }
                    at.node = Node.soul.ify(at.node, Val.link.is(at.link));
                    at.link = at.link || Val.link.ify(Node.soul(at.node));
                }
                if(tmp = env.map){
                    tmp.call(env.as || {}, v,k,n, at);
                    if(obj_has(n,k)){
                        v = n[k];
                        if(u === v){
                            obj_del(n, k);
                            return;
                        }
                        if(!(is = valid(v,k,n, at,env))){ return }
                    }
                }
                if(!k){ return at.node }
                if(true === is){
                    return v;
                }
                tmp = node(env, {obj: v, path: at.path.concat(k)});
                if(!tmp.node){ return }
                return tmp.link; //{'#': Node.soul(tmp.node)};
            }
            function soul(id){ var at = this;
                var prev = Val.link.is(at.link), graph = at.env.graph;
                at.link = at.link || Val.link.ify(id);
                at.link[Val.link._] = id;
                if(at.node && at.node[Node._]){
                    at.node[Node._][Val.link._] = id;
                }
                if(obj_has(graph, prev)){
                    graph[id] = graph[prev];
                    obj_del(graph, prev);
                }
            }
            function valid(v,k,n, at,env){ var tmp;
                if(Val.is(v)){ return true }
                if(obj_is(v)){ return 1 }
                if(tmp = env.invalid){
                    v = tmp.call(env.as || {}, v,k,n);
                    return valid(v,k,n, at,env);
                }
                env.err = "Invalid value at '" + at.path.concat(k).join('.') + "'!";
                if(Type.list.is(v)){ env.err += " Use `.set(item)` instead of an Array." }
            }
            function seen(env, at){
                var arr = env.seen, i = arr.length, has;
                while(i--){ has = arr[i];
                    if(at.obj === has.obj){ return has }
                }
                arr.push(at);
            }
        }());
        Graph.node = function(node){
            var soul = Node.soul(node);
            if(!soul){ return }
            return obj_put({}, soul, node);
        }
        ;(function(){
            Graph.to = function(graph, root, opt){
                if(!graph){ return }
                var obj = {};
                opt = opt || {seen: {}};
                obj_map(graph[root], map, {obj:obj, graph: graph, opt: opt});
                return obj;
            }
            function map(v,k){ var tmp, obj;
                if(Node._ === k){
                    if(obj_empty(v, Val.link._)){
                        return;
                    }
                    this.obj[k] = obj_copy(v);
                    return;
                }
                if(!(tmp = Val.link.is(v))){
                    this.obj[k] = v;
                    return;
                }
                if(obj = this.opt.seen[tmp]){
                    this.obj[k] = obj;
                    return;
                }
                this.obj[k] = this.opt.seen[tmp] = Graph.to(this.graph, tmp, this.opt);
            }
        }());
        var fn_is = Type.fn.is;
        var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_has = obj.has, obj_empty = obj.empty, obj_put = obj.put, obj_map = obj.map, obj_copy = obj.copy;
        var u;
        module.exports = Graph;
    })(USE, './graph');

    ;USE(function(module){
        // request / response module, for asking and acking messages.
        USE('./onto'); // depends upon onto!
        module.exports = function ask(cb, as){
            if(!this.on){ return }
            if(!(cb instanceof Function)){
                if(!cb || !as){ return }
                var id = cb['#'] || cb, tmp = (this.tag||empty)[id];
                if(!tmp){ return }
                tmp = this.on(id, as);
                clearTimeout(tmp.err);
                return true;
            }
            var id = (as && as['#']) || Math.random().toString(36).slice(2);
            if(!cb){ return id }
            var to = this.on(id, cb, as);
            to.err = to.err || setTimeout(function(){
                to.next({err: "Error: No ACK received yet.", lack: true});
                to.off();
            }, (this.opt||{}).lack || 9000);
            return id;
        }
    })(USE, './ask');

    ;USE(function(module){
        var Type = USE('./type');
        function Dup(opt){
            var dup = {s:{}};
            opt = opt || {max: 1000, age: 1000 * 9};//1000 * 60 * 2};
            dup.check = function(id){ var tmp;
                if(!(tmp = dup.s[id])){ return false }
                if(tmp.pass){ return tmp.pass = false }
                return dup.track(id);
            }
            dup.track = function(id, pass){
                var it = dup.s[id] || (dup.s[id] = {});
                it.was = time_is();
                if(pass){ it.pass = true }
                if(!dup.to){
                    dup.to = setTimeout(function(){
                        var now = time_is();
                        Type.obj.map(dup.s, function(it, id){
                            if(it && opt.age > (now - it.was)){ return }
                            Type.obj.del(dup.s, id);
                        });
                        dup.to = null;
                    }, opt.age + 9);
                }
                return it;
            }
            return dup;
        }
        var time_is = Type.time.is;
        module.exports = Dup;
    })(USE, './dup');

    ;USE(function(module){

        function Gun(o){
            if(o instanceof Gun){ return (this._ = {gun: this, $: this}).$ }
            if(!(this instanceof Gun)){ return new Gun(o) }
            return Gun.create(this._ = {gun: this, $: this, opt: o});
        }

        Gun.is = function($){ return ($ instanceof Gun) || ($ && $._ && ($ === $._.$)) || false }

        Gun.version = 0.9;

        Gun.chain = Gun.prototype;
        Gun.chain.toJSON = function(){};

        var Type = USE('./type');
        Type.obj.to(Type, Gun);
        Gun.HAM = USE('./HAM');
        Gun.val = USE('./val');
        Gun.node = USE('./node');
        Gun.state = USE('./state');
        Gun.graph = USE('./graph');
        Gun.on = USE('./onto');
        Gun.ask = USE('./ask');
        Gun.dup = USE('./dup');

        ;(function(){
            Gun.create = function(at){
                at.root = at.root || at;
                at.graph = at.graph || {};
                at.on = at.on || Gun.on;
                at.ask = at.ask || Gun.ask;
                at.dup = at.dup || Gun.dup();
                var gun = at.$.opt(at.opt);
                if(!at.once){
                    at.on('in', root, at);
                    at.on('out', root, {at: at, out: root});
                    Gun.on('create', at);
                    at.on('create', at);
                }
                at.once = 1;
                return gun;
            }
            function root(msg){
                //add to.next(at); // TODO: MISSING FEATURE!!!
                var ev = this, as = ev.as, at = as.at || as, gun = at.$, dup, tmp;
                if(!(tmp = msg['#'])){ tmp = msg['#'] = text_rand(9) }
                if((dup = at.dup).check(tmp)){
                    if(as.out === msg.out){
                        msg.out = u;
                        ev.to.next(msg);
                    }
                    return;
                }
                dup.track(tmp);
                if(!at.ask(msg['@'], msg)){
                    if(msg.get){
                        Gun.on.get(msg, gun); //at.on('get', get(msg));
                    }
                    if(msg.put){
                        Gun.on.put(msg, gun); //at.on('put', put(msg));
                    }
                }
                ev.to.next(msg);
                if(!as.out){
                    msg.out = root;
                    at.on('out', msg);
                }
            }
        }());

        ;(function(){
            Gun.on.put = function(msg, gun){
                var at = gun._, ctx = {$: gun, graph: at.graph, put: {}, map: {}, souls: {}, machine: Gun.state(), ack: msg['@'], cat: at, stop: {}};
                if(!Gun.graph.is(msg.put, null, verify, ctx)){ ctx.err = "Error: Invalid graph!" }
                if(ctx.err){ return at.on('in', {'@': msg['#'], err: Gun.log(ctx.err) }) }
                obj_map(ctx.put, merge, ctx);
                if(!ctx.async){ obj_map(ctx.map, map, ctx) }
                if(u !== ctx.defer){
                    setTimeout(function(){
                        Gun.on.put(msg, gun);
                    }, ctx.defer - ctx.machine);
                }
                if(!ctx.diff){ return }
                at.on('put', obj_to(msg, {put: ctx.diff}));
            };
            function verify(val, key, node, soul){ var ctx = this;
                var state = Gun.state.is(node, key), tmp;
                if(!state){ return ctx.err = "Error: No state on '"+key+"' in node '"+soul+"'!" }
                var vertex = ctx.graph[soul] || empty, was = Gun.state.is(vertex, key, true), known = vertex[key];
                var HAM = Gun.HAM(ctx.machine, state, was, val, known);
                if(!HAM.incoming){
                    if(HAM.defer){ // pick the lowest
                        ctx.defer = (state < (ctx.defer || Infinity))? state : ctx.defer;
                    }
                    return;
                }
                ctx.put[soul] = Gun.state.to(node, key, ctx.put[soul]);
                (ctx.diff || (ctx.diff = {}))[soul] = Gun.state.to(node, key, ctx.diff[soul]);
                ctx.souls[soul] = true;
            }
            function merge(node, soul){
                var ctx = this, cat = ctx.$._, at = (cat.next || empty)[soul];
                if(!at){
                    if(!(cat.opt||empty).super){
                        ctx.souls[soul] = false;
                        return;
                    }
                    at = (ctx.$.get(soul)._);
                }
                var msg = ctx.map[soul] = {
                    put: node,
                    get: soul,
                    $: at.$
                }, as = {ctx: ctx, msg: msg};
                ctx.async = !!cat.tag.node;
                if(ctx.ack){ msg['@'] = ctx.ack }
                obj_map(node, each, as);
                if(!ctx.async){ return }
                if(!ctx.and){
                    // If it is async, we only need to setup one listener per context (ctx)
                    cat.on('node', function(m){
                        this.to.next(m); // make sure to call other context's listeners.
                        if(m !== ctx.map[m.get]){ return } // filter out events not from this context!
                        ctx.souls[m.get] = false; // set our many-async flag
                        obj_map(m.put, patch, m); // merge into view
                        if(obj_map(ctx.souls, function(v){ if(v){ return v } })){ return } // if flag still outstanding, keep waiting.
                        if(ctx.c){ return } ctx.c = 1; // failsafe for only being called once per context.
                        this.off();
                        obj_map(ctx.map, map, ctx); // all done, trigger chains.
                    });
                }
                ctx.and = true;
                cat.on('node', msg); // each node on the current context's graph needs to be emitted though.
            }
            function each(val, key){
                var ctx = this.ctx, graph = ctx.graph, msg = this.msg, soul = msg.get, node = msg.put, at = (msg.$._), tmp;
                graph[soul] = Gun.state.to(node, key, graph[soul]);
                if(ctx.async){ return }
                at.put = Gun.state.to(node, key, at.put);
            }
            function patch(val, key){
                var msg = this, node = msg.put, at = (msg.$._);
                at.put = Gun.state.to(node, key, at.put);
            }
            function map(msg, soul){
                if(!msg.$){ return }
                this.cat.stop = this.stop; // temporary fix till a better solution?
                (msg.$._).on('in', msg);
                this.cat.stop = null; // temporary fix till a better solution?
            }

            Gun.on.get = function(msg, gun){
                var root = gun._, get = msg.get, soul = get[_soul], node = root.graph[soul], has = get[_has], tmp;
                var next = root.next || (root.next = {}), at = next[soul];
                if(!node){ return root.on('get', msg) }
                if(has){
                    if('string' != typeof has || !obj_has(node, has)){ return root.on('get', msg) }
                    node = Gun.state.to(node, has);
                    // If we have a key in-memory, do we really need to fetch?
                    // Maybe... in case the in-memory key we have is a local write
                    // we still need to trigger a pull/merge from peers.
                } else {
                    node = Gun.obj.copy(node);
                }
                node = Gun.graph.node(node);
                tmp = (at||empty).ack;
                root.on('in', {
                    '@': msg['#'],
                    how: 'mem',
                    put: node,
                    $: gun
                });
                //if(0 < tmp){ return }
                root.on('get', msg);
            }
        }());

        ;(function(){
            Gun.chain.opt = function(opt){
                opt = opt || {};
                var gun = this, at = gun._, tmp = opt.peers || opt;
                if(!obj_is(opt)){ opt = {} }
                if(!obj_is(at.opt)){ at.opt = opt }
                if(text_is(tmp)){ tmp = [tmp] }
                if(list_is(tmp)){
                    tmp = obj_map(tmp, function(url, i, map){
                        i = {}; i.id = i.url = url; map(url, i);
                    });
                    if(!obj_is(at.opt.peers)){ at.opt.peers = {}}
                    at.opt.peers = obj_to(tmp, at.opt.peers);
                }
                at.opt.peers = at.opt.peers || {};
                obj_map(opt, function each(v,k){
                    if(!obj_has(this, k) || text.is(v) || obj.empty(v)){ this[k] = v ; return }
                    obj_map(v, each, this[k]);
                }, at.opt);
                Gun.on('opt', at);
                at.opt.uuid = at.opt.uuid || function(){ return state_lex() + text_rand(12) }
                return gun;
            }
        }());

        var list_is = Gun.list.is;
        var text = Gun.text, text_is = text.is, text_rand = text.random;
        var obj = Gun.obj, obj_is = obj.is, obj_has = obj.has, obj_to = obj.to, obj_map = obj.map, obj_copy = obj.copy;
        var state_lex = Gun.state.lex, _soul = Gun.val.link._, _has = '.', node_ = Gun.node._, rel_is = Gun.val.link.is;
        var empty = {}, u;

        console.debug = function(i, s){ return (console.debug.i && i === console.debug.i && console.debug.i++) && (console.log.apply(console, arguments) || s) };

        Gun.log = function(){ return (!Gun.log.off && console.log.apply(console, arguments)), [].slice.call(arguments).join(' ') }
        Gun.log.once = function(w,s,o){ return (o = Gun.log.once)[w] = o[w] || 0, o[w]++ || Gun.log(s) }

        ;"Please do not remove these messages unless you are paying for a monthly sponsorship, thanks!";
        Gun.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, feel free to ask for help on https://gitter.im/amark/gun and ask StackOverflow questions tagged with 'gun'!");
        ;"Please do not remove these messages unless you are paying for a monthly sponsorship, thanks!";

        if(typeof window !== "undefined"){ (window.GUN = window.Gun = Gun).window = window }
        try{ if(typeof common !== "undefined"){ common.exports = Gun } }catch(e){}
        module.exports = Gun;

        /*Gun.on('opt', function(ctx){ // FOR TESTING PURPOSES
			this.to.next(ctx);
			if(ctx.once){ return }
			ctx.on('node', function(msg){
				var to = this.to;
				//Gun.node.is(msg.put, function(v,k){ msg.put[k] = v + v });
				setTimeout(function(){
					to.next(msg);
				},1);
			});
		});*/
    })(USE, './root');

    ;USE(function(module){
        var Gun = USE('./root');
        Gun.chain.back = function(n, opt){ var tmp;
            n = n || 1;
            if(-1 === n || Infinity === n){
                return this._.root.$;
            } else
            if(1 === n){
                return (this._.back || this._).$;
            }
            var gun = this, at = gun._;
            if(typeof n === 'string'){
                n = n.split('.');
            }
            if(n instanceof Array){
                var i = 0, l = n.length, tmp = at;
                for(i; i < l; i++){
                    tmp = (tmp||empty)[n[i]];
                }
                if(u !== tmp){
                    return opt? gun : tmp;
                } else
                if((tmp = at.back)){
                    return tmp.$.back(n, opt);
                }
                return;
            }
            if(n instanceof Function){
                var yes, tmp = {back: at};
                while((tmp = tmp.back)
                && u === (yes = n(tmp, opt))){}
                return yes;
            }
            if(Gun.num.is(n)){
                return (at.back || at).$.back(n - 1);
            }
            return this;
        }
        var empty = {}, u;
    })(USE, './back');

    ;USE(function(module){
        // WARNING: GUN is very simple, but the JavaScript chaining API around GUN
        // is complicated and was extremely hard to build. If you port GUN to another
        // language, consider implementing an easier API to build.
        var Gun = USE('./root');
        Gun.chain.chain = function(sub){
            var gun = this, at = gun._, chain = new (sub || gun).constructor(gun), cat = chain._, root;
            cat.root = root = at.root;
            cat.id = ++root.once;
            cat.back = gun._;
            cat.on = Gun.on;
            cat.on('in', input, cat); // For 'in' if I add my own listeners to each then I MUST do it before in gets called. If I listen globally for all incoming data instead though, regardless of individual listeners, I can transform the data there and then as well.
            cat.on('out', output, cat); // However for output, there isn't really the global option. I must listen by adding my own listener individually BEFORE this one is ever called.
            return chain;
        }

        function output(msg){
            var put, get, at = this.as, back = at.back, root = at.root, tmp;
            if(!msg.$){ msg.$ = at.$ }
            this.to.next(msg);
            if(get = msg.get){
                /*if(u !== at.put){
					at.on('in', at);
					return;
				}*/
                if(at.lex){ msg.get = obj_to(at.lex, msg.get) }
                if(get['#'] || at.soul){
                    get['#'] = get['#'] || at.soul;
                    msg['#'] || (msg['#'] = text_rand(9));
                    back = (root.$.get(get['#'])._);
                    if(!(get = get['.'])){
                        tmp = back.ack;
                        if(!tmp){ back.ack = -1 }
                        if(obj_has(back, 'put')){
                            back.on('in', back);
                        }
                        if(tmp){ return }
                        msg.$ = back.$;
                    } else
                    if(obj_has(back.put, get)){ // TODO: support #LEX !
                        put = (back.$.get(get)._);
                        if(!(tmp = put.ack)){ put.ack = -1 }
                        back.on('in', {
                            $: back.$,
                            put: Gun.state.to(back.put, get),
                            get: back.get
                        });
                        if(tmp){ return }
                    } else
                    if('string' != typeof get){
                        var put = {}, meta = (back.put||{})._;
                        Gun.obj.map(back.put, function(v,k){
                            if(!Gun.text.match(k, get)){ return }
                            put[k] = v;
                        })
                        if(!Gun.obj.empty(put)){
                            put._ = meta;
                            back.on('in', {$: back.$, put: put, get: back.get})
                        }
                    }
                    root.ask(ack, msg);
                    return root.on('in', msg);
                }
                if(root.now){ root.now[at.id] = root.now[at.id] || true; at.pass = {} }
                if(get['.']){
                    if(at.get){
                        msg = {get: {'.': at.get}, $: at.$};
                        //if(back.ask || (back.ask = {})[at.get]){ return }
                        (back.ask || (back.ask = {}));
                        back.ask[at.get] = msg.$._; // TODO: PERFORMANCE? More elegant way?
                        return back.on('out', msg);
                    }
                    msg = {get: {}, $: at.$};
                    return back.on('out', msg);
                }
                at.ack = at.ack || -1;
                if(at.get){
                    msg.$ = at.$;
                    get['.'] = at.get;
                    (back.ask || (back.ask = {}))[at.get] = msg.$._; // TODO: PERFORMANCE? More elegant way?
                    return back.on('out', msg);
                }
            }
            return back.on('out', msg);
        }

        function input(msg){
            var eve = this, cat = eve.as, root = cat.root, gun = msg.$, at = (gun||empty)._ || empty, change = msg.put, rel, tmp;
            if(cat.get && msg.get !== cat.get){
                msg = obj_to(msg, {get: cat.get});
            }
            if(cat.has && at !== cat){
                msg = obj_to(msg, {$: cat.$});
                if(at.ack){
                    cat.ack = at.ack;
                    //cat.ack = cat.ack || at.ack;
                }
            }
            if(u === change){
                tmp = at.put;
                eve.to.next(msg);
                if(cat.soul){ return } // TODO: BUG, I believee the fresh input refactor caught an edge case that a `gun.get('soul').get('key')` that points to a soul that doesn't exist will not trigger val/get etc.
                if(u === tmp && u !== at.put){ return }
                echo(cat, msg, eve);
                if(cat.has){
                    not(cat, msg);
                }
                obj_del(at.echo, cat.id);
                obj_del(cat.map, at.id);
                return;
            }
            if(cat.soul){
                eve.to.next(msg);
                echo(cat, msg, eve);
                if(cat.next){ obj_map(change, map, {msg: msg, cat: cat}) }
                return;
            }
            if(!(rel = Gun.val.link.is(change))){
                if(Gun.val.is(change)){
                    if(cat.has || cat.soul){
                        not(cat, msg);
                    } else
                    if(at.has || at.soul){
                        (at.echo || (at.echo = {}))[cat.id] = at.echo[at.id] || cat;
                        (cat.map || (cat.map = {}))[at.id] = cat.map[at.id] || {at: at};
                        //if(u === at.put){ return } // Not necessary but improves performance. If we have it but at does not, that means we got things out of order and at will get it. Once at gets it, it will tell us again.
                    }
                    eve.to.next(msg);
                    echo(cat, msg, eve);
                    return;
                }
                if(cat.has && at !== cat && obj_has(at, 'put')){
                    cat.put = at.put;
                };
                if((rel = Gun.node.soul(change)) && at.has){
                    at.put = (cat.root.$.get(rel)._).put;
                }
                tmp = (root.stop || {})[at.id];
                //if(tmp && tmp[cat.id]){ } else {
                eve.to.next(msg);
                //}
                relate(cat, msg, at, rel);
                echo(cat, msg, eve);
                if(cat.next){ obj_map(change, map, {msg: msg, cat: cat}) }
                return;
            }
            var was = root.stop;
            tmp = root.stop || {};
            tmp = tmp[at.id] || (tmp[at.id] = {});
            //if(tmp[cat.id]){ return }
            tmp.is = tmp.is || at.put;
            tmp[cat.id] = at.put || true;
            //if(root.stop){
            eve.to.next(msg)
            //}
            relate(cat, msg, at, rel);
            echo(cat, msg, eve);
        }

        function relate(at, msg, from, rel){
            if(!rel || node_ === at.get){ return }
            var tmp = (at.root.$.get(rel)._);
            if(at.has){
                from = tmp;
            } else
            if(from.has){
                relate(from, msg, from, rel);
            }
            if(from === at){ return }
            if(!from.$){ from = {} }
            (from.echo || (from.echo = {}))[at.id] = from.echo[at.id] || at;
            if(at.has && !(at.map||empty)[from.id]){ // if we haven't seen this before.
                not(at, msg);
            }
            tmp = from.id? ((at.map || (at.map = {}))[from.id] = at.map[from.id] || {at: from}) : {};
            if(rel === tmp.link){
                if(!(tmp.pass || at.pass)){
                    return;
                }
            }
            if(at.pass){
                Gun.obj.map(at.map, function(tmp){ tmp.pass = true })
                obj_del(at, 'pass');
            }
            if(tmp.pass){ obj_del(tmp, 'pass') }
            if(at.has){ at.link = rel }
            ask(at, tmp.link = rel);
        }
        function echo(at, msg, ev){
            if(!at.echo){ return } // || node_ === at.get ?
            //if(at.has){ msg = obj_to(msg, {event: ev}) }
            obj_map(at.echo, reverb, msg);
        }
        function reverb(to){
            if(!to || !to.on){ return }
            to.on('in', this);
        }
        function map(data, key){ // Map over only the changes on every update.
            var cat = this.cat, next = cat.next || empty, via = this.msg, chain, at, tmp;
            if(node_ === key && !next[key]){ return }
            if(!(at = next[key])){
                return;
            }
            //if(data && data[_soul] && (tmp = Gun.val.link.is(data)) && (tmp = (cat.root.$.get(tmp)._)) && obj_has(tmp, 'put')){
            //	data = tmp.put;
            //}
            if(at.has){
                //if(!(data && data[_soul] && Gun.val.link.is(data) === Gun.node.soul(at.put))){
                if(u === at.put || !Gun.val.link.is(data)){
                    at.put = data;
                }
                chain = at.$;
            } else
            if(tmp = via.$){
                tmp = (chain = via.$.get(key))._;
                if(u === tmp.put || !Gun.val.link.is(data)){
                    tmp.put = data;
                }
            }
            at.on('in', {
                put: data,
                get: key,
                $: chain,
                via: via
            });
        }
        function not(at, msg){
            if(!(at.has || at.soul)){ return }
            var tmp = at.map, root = at.root;
            at.map = null;
            if(at.has){
                if(at.dub && at.root.stop){ at.dub = null }
                at.link = null;
            }
            //if(!root.now || !root.now[at.id]){
            if(!at.pass){
                if((!msg['@']) && null === tmp){ return }
                //obj_del(at, 'pass');
            }
            if(u === tmp && Gun.val.link.is(at.put)){ return } // This prevents the very first call of a thing from triggering a "clean up" call. // TODO: link.is(at.put) || !val.is(at.put) ?
            obj_map(tmp, function(proxy){
                if(!(proxy = proxy.at)){ return }
                obj_del(proxy.echo, at.id);
            });
            tmp = at.put;
            obj_map(at.next, function(neat, key){
                if(u === tmp && u !== at.put){ return true }
                neat.put = u;
                if(neat.ack){
                    neat.ack = -1; // TODO: BUG? Should this be 0?
                }
                neat.on('in', {
                    get: key,
                    $: neat.$,
                    put: u
                });
            });
        }
        function ask(at, soul){
            var tmp = (at.root.$.get(soul)._), lex = at.lex;
            if(at.ack || lex){
                (lex = lex||{})['#'] = soul;
                tmp.on('out', {get: lex});
                if(!at.ask){ return } // TODO: PERFORMANCE? More elegant way?
            }
            tmp = at.ask; Gun.obj.del(at, 'ask');
            obj_map(tmp || at.next, function(neat, key){
                var lex = neat.lex || {}; lex['#'] = soul; lex['.'] = lex['.'] || key;
                neat.on('out', {get: lex});
            });
            Gun.obj.del(at, 'ask'); // TODO: PERFORMANCE? More elegant way?
        }
        function ack(msg, ev){
            var as = this.as, get = as.get || empty, at = as.$._, tmp = (msg.put||empty)[get['#']];
            if(at.ack){ at.ack = (at.ack + 1) || 1; }
            if(!msg.put || ('string' == typeof get['.'] && !obj_has(tmp, at.get))){
                if(at.put !== u){ return }
                at.on('in', {
                    get: at.get,
                    put: at.put = u,
                    $: at.$,
                    '@': msg['@']
                });
                return;
            }
            if(node_ == get['.']){ // is this a security concern?
                at.on('in', {get: at.get, put: Gun.val.link.ify(get['#']), $: at.$, '@': msg['@']});
                return;
            }
            Gun.on.put(msg, at.root.$);
        }
        var empty = {}, u;
        var obj = Gun.obj, obj_has = obj.has, obj_put = obj.put, obj_del = obj.del, obj_to = obj.to, obj_map = obj.map;
        var text_rand = Gun.text.random;
        var _soul = Gun.val.link._, node_ = Gun.node._;
    })(USE, './chain');

    ;USE(function(module){
        var Gun = USE('./root');
        Gun.chain.get = function(key, cb, as){
            var gun, tmp;
            if(typeof key === 'string'){
                var back = this, cat = back._;
                var next = cat.next || empty;
                if(!(gun = next[key])){
                    gun = cache(key, back);
                }
                gun = gun.$;
            } else
            if(key instanceof Function){
                if(true === cb){ return soul(this, key, cb, as) }
                gun = this;
                var at = gun._, root = at.root, tmp = root.now, ev;
                as = cb || {};
                as.at = at;
                as.use = key;
                as.out = as.out || {};
                as.out.get = as.out.get || {};
                (ev = at.on('in', use, as)).rid = rid;
                (root.now = {$:1})[as.now = at.id] = ev;
                var mum = root.mum; root.mum = {};
                at.on('out', as.out);
                root.mum = mum;
                root.now = tmp;
                return gun;
            } else
            if(num_is(key)){
                return this.get(''+key, cb, as);
            } else
            if(tmp = rel.is(key)){
                return this.get(tmp, cb, as);
            } else
            if(obj.is(key)){
                gun = this;
                if(tmp = ((tmp = key['#'])||empty)['='] || tmp){ gun = gun.get(tmp) }
                gun._.lex = key;
                return gun;
            } else {
                (as = this.chain())._.err = {err: Gun.log('Invalid get request!', key)}; // CLEAN UP
                if(cb){ cb.call(as, as._.err) }
                return as;
            }
            if(tmp = this._.stun){ // TODO: Refactor?
                gun._.stun = gun._.stun || tmp;
            }
            if(cb && cb instanceof Function){
                gun.get(cb, as);
            }
            return gun;
        }
        function cache(key, back){
            var cat = back._, next = cat.next, gun = back.chain(), at = gun._;
            if(!next){ next = cat.next = {} }
            next[at.get = key] = at;
            if(back === cat.root.$){
                at.soul = key;
            } else
            if(cat.soul || cat.has){
                at.has = key;
                //if(obj_has(cat.put, key)){
                //at.put = cat.put[key];
                //}
            }
            return at;
        }
        function soul(gun, cb, opt, as){
            var cat = gun._, acks = 0, tmp;
            if(tmp = cat.soul || cat.link || cat.dub){ return cb(tmp, as, cat), gun }
            gun.get(function(msg, ev){
                if(u === msg.put && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks < tmp){
                    return;
                }
                ev.rid(msg);
                var at = ((at = msg.$) && at._) || {};
                tmp = at.link || at.soul || rel.is(msg.put) || node_soul(msg.put) || at.dub;
                cb(tmp, as, msg, ev);
            }, {out: {get: {'.':true}}});
            return gun;
        }
        function use(msg){
            var eve = this, as = eve.as, cat = as.at, root = cat.root, gun = msg.$, at = (gun||{})._ || {}, data = msg.put || at.put, tmp;
            if((tmp = root.now) && eve !== tmp[as.now]){ return eve.to.next(msg) }
            //console.log("USE:", cat.id, cat.soul, cat.has, cat.get, msg, root.mum);
            //if(at.async && msg.root){ return }
            //if(at.async === 1 && cat.async !== true){ return }
            //if(root.stop && root.stop[at.id]){ return } root.stop && (root.stop[at.id] = true);
            //if(!at.async && !cat.async && at.put && msg.put === at.put){ return }
            //else if(!cat.async && msg.put !== at.put && root.stop && root.stop[at.id]){ return } root.stop && (root.stop[at.id] = true);


            //root.stop && (root.stop.id = root.stop.id || Gun.text.random(2));
            //if((tmp = root.stop) && (tmp = tmp[at.id] || (tmp[at.id] = {})) && tmp[cat.id]){ return } tmp && (tmp[cat.id] = true);
            if(eve.seen && at.id && eve.seen[at.id]){ return eve.to.next(msg) }
            //if((tmp = root.stop)){ if(tmp[at.id]){ return } tmp[at.id] = msg.root; } // temporary fix till a better solution?
            if((tmp = data) && tmp[rel._] && (tmp = rel.is(tmp))){
                tmp = ((msg.$$ = at.root.gun.get(tmp))._);
                if(u !== tmp.put){
                    msg = obj_to(msg, {put: data = tmp.put});
                }
            }
            if((tmp = root.mum) && at.id){ // TODO: can we delete mum entirely now?
                var id = at.id + (eve.id || (eve.id = Gun.text.random(9)));
                if(tmp[id]){ return }
                if(u !== data && !rel.is(data)){ tmp[id] = true; }
            }
            as.use(msg, eve);
            if(eve.stun){
                eve.stun = null;
                return;
            }
            eve.to.next(msg);
        }
        function rid(at){
            var cat = this.on;
            if(!at || cat.soul || cat.has){ return this.off() }
            if(!(at = (at = (at = at.$ || at)._ || at).id)){ return }
            var map = cat.map, tmp, seen;
            //if(!map || !(tmp = map[at]) || !(tmp = tmp.at)){ return }
            if(tmp = (seen = this.seen || (this.seen = {}))[at]){ return true }
            seen[at] = true;
            return;
            //tmp.echo[cat.id] = {}; // TODO: Warning: This unsubscribes ALL of this chain's listeners from this link, not just the one callback event.
            //obj.del(map, at); // TODO: Warning: This unsubscribes ALL of this chain's listeners from this link, not just the one callback event.
            return;
        }
        var obj = Gun.obj, obj_map = obj.map, obj_has = obj.has, obj_to = Gun.obj.to;
        var num_is = Gun.num.is;
        var rel = Gun.val.link, node_soul = Gun.node.soul, node_ = Gun.node._;
        var empty = {}, u;
    })(USE, './get');

    ;USE(function(module){
        var Gun = USE('./root');
        Gun.chain.put = function(data, cb, as){
            // #soul.has=value>state
            // ~who#where.where=what>when@was
            // TODO: BUG! Put probably cannot handle plural chains!
            var gun = this, at = (gun._), root = at.root.$, ctx = root._, M = 100, tmp;
            if(!ctx.puta){ if(tmp = ctx.puts){ if(tmp > M){ // without this, when synchronous, writes to a 'not found' pile up, when 'not found' resolves it recursively calls `put` which incrementally resolves each write. Stack overflow limits can be as low as 10K, so this limit is hardcoded to 1% of 10K.
                (ctx.stack || (ctx.stack = [])).push([gun, data, cb, as]);
                if(ctx.puto){ return }
                ctx.puto = setTimeout(function drain(){
                    var d = ctx.stack.splice(0,M), i = 0, at; ctx.puta = true;
                    while(at = d[i++]){ at[0].put(at[1], at[2], at[3]) } delete ctx.puta;
                    if(ctx.stack.length){ return ctx.puto = setTimeout(drain, 0) }
                    ctx.stack = ctx.puts = ctx.puto = null;
                }, 0);
                return gun;
            } ++ctx.puts } else { ctx.puts = 1 } }
            as = as || {};
            as.data = data;
            as.via = as.$ = as.via || as.$ || gun;
            if(typeof cb === 'string'){
                as.soul = cb;
            } else {
                as.ack = as.ack || cb;
            }
            if(at.soul){
                as.soul = at.soul;
            }
            if(as.soul || root === gun){
                if(!obj_is(as.data)){
                    (as.ack||noop).call(as, as.out = {err: Gun.log("Data saved to the root level of the graph must be a node (an object), not a", (typeof as.data), 'of "' + as.data + '"!')});
                    if(as.res){ as.res() }
                    return gun;
                }
                as.soul = as.soul || (as.not = Gun.node.soul(as.data) || (as.via.back('opt.uuid') || Gun.text.random)());
                if(!as.soul){ // polyfill async uuid for SEA
                    as.via.back('opt.uuid')(function(err, soul){ // TODO: improve perf without anonymous callback
                        if(err){ return Gun.log(err) } // TODO: Handle error!
                        (as.ref||as.$).put(as.data, as.soul = soul, as);
                    });
                    return gun;
                }
                as.$ = root.get(as.soul);
                as.ref = as.$;
                ify(as);
                return gun;
            }
            if(Gun.is(data)){
                data.get(function(soul, o, msg){
                    if(!soul){
                        return Gun.log("The reference you are saving is a", typeof msg.put, '"'+ msg.put +'", not a node (object)!');
                    }
                    gun.put(Gun.val.link.ify(soul), cb, as);
                }, true);
                return gun;
            }
            if(at.has && (tmp = Gun.val.link.is(data))){ at.dub = tmp }
            as.ref = as.ref || (root._ === (tmp = at.back))? gun : tmp.$;
            if(as.ref._.soul && Gun.val.is(as.data) && at.get){
                as.data = obj_put({}, at.get, as.data);
                as.ref.put(as.data, as.soul, as);
                return gun;
            }
            as.ref.get(any, true, {as: as});
            if(!as.out){
                // TODO: Perf idea! Make a global lock, that blocks everything while it is on, but if it is on the lock it does the expensive lookup to see if it is a dependent write or not and if not then it proceeds full speed. Meh? For write heavy async apps that would be terrible.
                as.res = as.res || stun; // Gun.on.stun(as.ref); // TODO: BUG! Deal with locking?
                as.$._.stun = as.ref._.stun;
            }
            return gun;
        };

        function ify(as){
            as.batch = batch;
            var opt = as.opt||{}, env = as.env = Gun.state.map(map, opt.state);
            env.soul = as.soul;
            as.graph = Gun.graph.ify(as.data, env, as);
            if(env.err){
                (as.ack||noop).call(as, as.out = {err: Gun.log(env.err)});
                if(as.res){ as.res() }
                return;
            }
            as.batch();
        }

        function stun(cb){
            if(cb){ cb() }
            return;
            var as = this;
            if(!as.ref){ return }
            if(cb){
                as.after = as.ref._.tag;
                as.now = as.ref._.tag = {};
                cb();
                return;
            }
            if(as.after){
                as.ref._.tag = as.after;
            }
        }

        function batch(){ var as = this;
            if(!as.graph || obj_map(as.stun, no)){ return }
            as.res = as.res || function(cb){ if(cb){ cb() } };
            as.res(function(){
                var cat = (as.$.back(-1)._), ask = cat.ask(function(ack){
                    cat.root.on('ack', ack);
                    if(ack.err){ Gun.log(ack) }
                    if(++acks > (as.acks || 0)){ this.off() } // Adjustable ACKs! Only 1 by default.
                    if(!as.ack){ return }
                    as.ack(ack, this);
                    //--C;
                }, as.opt), acks = 0;
                //C++;
                // NOW is a hack to get synchronous replies to correctly call.
                // and STOP is a hack to get async behavior to correctly call.
                // neither of these are ideal, need to be fixed without hacks,
                // but for now, this works for current tests. :/
                var tmp = cat.root.now; obj.del(cat.root, 'now');
                var mum = cat.root.mum; cat.root.mum = {};
                (as.ref._).on('out', {
                    $: as.ref, put: as.out = as.env.graph, opt: as.opt, '#': ask
                });
                cat.root.mum = mum? obj.to(mum, cat.root.mum) : mum;
                cat.root.now = tmp;
            }, as);
            if(as.res){ as.res() }
        } function no(v,k){ if(v){ return true } }
        //console.debug(999,1); var C = 0; setInterval(function(){ try{ debug.innerHTML = C }catch(e){console.log(e)} }, 500);

        function map(v,k,n, at){ var as = this;
            var is = Gun.is(v);
            if(k || !at.path.length){ return }
            (as.res||iife)(function(){
                var path = at.path, ref = as.ref, opt = as.opt;
                var i = 0, l = path.length;
                for(i; i < l; i++){
                    ref = ref.get(path[i]);
                }
                if(is){ ref = v }
                var id = (ref._).dub;
                if(id || (id = Gun.node.soul(at.obj))){
                    ref.back(-1).get(id);
                    at.soul(id);
                    return;
                }
                (as.stun = as.stun || {})[path] = true;
                ref.get(soul, true, {as: {at: at, as: as, p:path}});
            }, {as: as, at: at});
            //if(is){ return {} }
        }

        function soul(id, as, msg, eve){
            var as = as.as, cat = as.at; as = as.as;
            var at = ((msg || {}).$ || {})._ || {};
            id = at.dub = at.dub || id || Gun.node.soul(cat.obj) || Gun.node.soul(msg.put || at.put) || Gun.val.link.is(msg.put || at.put) || (as.via.back('opt.uuid') || Gun.text.random)(); // TODO: BUG!? Do we really want the soul of the object given to us? Could that be dangerous?
            if(eve){ eve.stun = true }
            if(!id){ // polyfill async uuid for SEA
                at.via.back('opt.uuid')(function(err, id){ // TODO: improve perf without anonymous callback
                    if(err){ return Gun.log(err) } // TODO: Handle error.
                    solve(at, at.dub = at.dub || id, cat, as);
                });
                return;
            }
            solve(at, at.dub = id, cat, as);
        }

        function solve(at, id, cat, as){
            at.$.back(-1).get(id);
            cat.soul(id);
            as.stun[cat.path] = false;
            as.batch();
        }

        function any(soul, as, msg, eve){
            as = as.as;
            if(!msg.$ || !msg.$._){ return } // TODO: Handle
            if(msg.err){ // TODO: Handle
                console.log("Please report this as an issue! Put.any.err");
                return;
            }
            var at = (msg.$._), data = at.put, opt = as.opt||{}, root, tmp;
            if((tmp = as.ref) && tmp._.now){ return }
            if(eve){ eve.stun = true }
            if(as.ref !== as.$){
                tmp = (as.$._).get || at.get;
                if(!tmp){ // TODO: Handle
                    console.log("Please report this as an issue! Put.no.get"); // TODO: BUG!??
                    return;
                }
                as.data = obj_put({}, tmp, as.data);
                tmp = null;
            }
            if(u === data){
                if(!at.get){ return } // TODO: Handle
                if(!soul){
                    tmp = at.$.back(function(at){
                        if(at.link || at.soul){ return at.link || at.soul }
                        as.data = obj_put({}, at.get, as.data);
                    });
                }
                tmp = tmp || at.soul || at.link || at.dub;// || at.get;
                at = tmp? (at.root.$.get(tmp)._) : at;
                as.soul = tmp;
                data = as.data;
            }
            if(!as.not && !(as.soul = as.soul || soul)){
                if(as.path && obj_is(as.data)){
                    as.soul = (opt.uuid || as.via.back('opt.uuid') || Gun.text.random)();
                } else {
                    //as.data = obj_put({}, as.$._.get, as.data);
                    if(node_ == at.get){
                        as.soul = (at.put||empty)['#'] || at.dub;
                    }
                    as.soul = as.soul || at.soul || at.link || (opt.uuid || as.via.back('opt.uuid') || Gun.text.random)();
                }
                if(!as.soul){ // polyfill async uuid for SEA
                    as.via.back('opt.uuid')(function(err, soul){ // TODO: improve perf without anonymous callback
                        if(err){ return Gun.log(err) } // Handle error.
                        as.ref.put(as.data, as.soul = soul, as);
                    });
                    return;
                }
            }
            as.ref.put(as.data, as.soul, as);
        }
        var obj = Gun.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
        var u, empty = {}, noop = function(){}, iife = function(fn,as){fn.call(as||empty)};
        var node_ = Gun.node._;
    })(USE, './put');

    ;USE(function(module){
        var Gun = USE('./root');
        USE('./chain');
        USE('./back');
        USE('./put');
        USE('./get');
        module.exports = Gun;
    })(USE, './index');

    ;USE(function(module){
        var Gun = USE('./index');
        Gun.chain.on = function(tag, arg, eas, as){
            var gun = this, at = gun._, tmp, act, off;
            if(typeof tag === 'string'){
                if(!arg){ return at.on(tag) }
                act = at.on(tag, arg, eas || at, as);
                if(eas && eas.$){
                    (eas.subs || (eas.subs = [])).push(act);
                }
                return gun;
            }
            var opt = arg;
            opt = (true === opt)? {change: true} : opt || {};
            opt.at = at;
            opt.ok = tag;
            //opt.last = {};
            gun.get(ok, opt); // TODO: PERF! Event listener leak!!!?
            return gun;
        }

        function ok(msg, ev){ var opt = this;
            var gun = msg.$, at = (gun||{})._ || {}, data = at.put || msg.put, cat = opt.at, tmp;
            if(u === data){
                return;
            }
            if(tmp = msg.$$){
                tmp = (msg.$$._);
                if(u === tmp.put){
                    return;
                }
                data = tmp.put;
            }
            if(opt.change){ // TODO: BUG? Move above the undef checks?
                data = msg.put;
            }
            // DEDUPLICATE // TODO: NEEDS WORK! BAD PROTOTYPE
            //if(tmp.put === data && tmp.get === id && !Gun.node.soul(data)){ return }
            //tmp.put = data;
            //tmp.get = id;
            // DEDUPLICATE // TODO: NEEDS WORK! BAD PROTOTYPE
            //at.last = data;
            if(opt.as){
                opt.ok.call(opt.as, msg, ev);
            } else {
                opt.ok.call(gun, data, msg.get, msg, ev);
            }
        }

        Gun.chain.val = function(cb, opt){
            Gun.log.once("onceval", "Future Breaking API Change: .val -> .once, apologies unexpected.");
            return this.once(cb, opt);
        }
        Gun.chain.once = function(cb, opt){
            var gun = this, at = gun._, data = at.put;
            if(0 < at.ack && u !== data){
                (cb || noop).call(gun, data, at.get);
                return gun;
            }
            if(cb){
                (opt = opt || {}).ok = cb;
                opt.at = at;
                opt.out = {'#': Gun.text.random(9)};
                gun.get(val, {as: opt});
                opt.async = true; //opt.async = at.stun? 1 : true;
            } else {
                Gun.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
                var chain = gun.chain();
                chain._.nix = gun.once(function(){
                    chain._.on('in', gun._);
                });
                return chain;
            }
            return gun;
        }

        function val(msg, eve, to){
            if(!msg.$){ eve.off(); return }
            var opt = this.as, cat = opt.at, gun = msg.$, at = gun._, data = at.put || msg.put, link, tmp;
            if(tmp = msg.$$){
                link = tmp = (msg.$$._);
                if(u !== link.put){
                    data = link.put;
                }
            }
            if((tmp = eve.wait) && (tmp = tmp[at.id])){ clearTimeout(tmp) }
            eve.ack = (eve.ack||0)+1;
            if(!to && u === data && eve.ack <= (opt.acks || Object.keys(at.root.opt.peers).length)){ return }
            if((!to && (u === data || at.soul || at.link || (link && !(0 < link.ack))))
                || (u === data && (tmp = Object.keys(at.root.opt.peers).length) && (!to && (link||at).ack < tmp))){
                tmp = (eve.wait = {})[at.id] = setTimeout(function(){
                    val.call({as:opt}, msg, eve, tmp || 1);
                }, opt.wait || 99);
                return;
            }
            if(link && u === link.put && (tmp = rel.is(data))){ data = Gun.node.ify({}, tmp) }
            eve.rid(msg);
            opt.ok.call(gun || opt.$, data, msg.get);
        }

        Gun.chain.off = function(){
            // make off more aggressive. Warning, it might backfire!
            var gun = this, at = gun._, tmp;
            var cat = at.back;
            if(!cat){ return }
            at.ack = 0; // so can resubscribe.
            if(tmp = cat.next){
                if(tmp[at.get]){
                    obj_del(tmp, at.get);
                } else {

                }
            }
            if(tmp = cat.ask){
                obj_del(tmp, at.get);
            }
            if(tmp = cat.put){
                obj_del(tmp, at.get);
            }
            if(tmp = at.soul){
                obj_del(cat.root.graph, tmp);
            }
            if(tmp = at.map){
                obj_map(tmp, function(at){
                    if(at.link){
                        cat.root.$.get(at.link).off();
                    }
                });
            }
            if(tmp = at.next){
                obj_map(tmp, function(neat){
                    neat.$.off();
                });
            }
            at.on('off', {});
            return gun;
        }
        var obj = Gun.obj, obj_map = obj.map, obj_has = obj.has, obj_del = obj.del, obj_to = obj.to;
        var rel = Gun.val.link;
        var empty = {}, noop = function(){}, u;
    })(USE, './on');

    ;USE(function(module){
        var Gun = USE('./index');
        Gun.chain.map = function(cb, opt, t){
            var gun = this, cat = gun._, chain;
            if(!cb){
                if(chain = cat.each){ return chain }
                cat.each = chain = gun.chain();
                chain._.nix = gun.back('nix');
                gun.on('in', map, chain._);
                return chain;
            }
            Gun.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
            chain = gun.chain();
            gun.map().on(function(data, key, at, ev){
                var next = (cb||noop).call(this, data, key, at, ev);
                if(u === next){ return }
                if(data === next){ return chain._.on('in', at) }
                if(Gun.is(next)){ return chain._.on('in', next._) }
                chain._.on('in', {get: key, put: next});
            });
            return chain;
        }
        function map(msg){
            if(!msg.put || Gun.val.is(msg.put)){ return this.to.next(msg) }
            if(this.as.nix){ this.off() } // TODO: Ugly hack!
            obj_map(msg.put, each, {at: this.as, msg: msg});
            this.to.next(msg);
        }
        function each(v,k){
            if(n_ === k){ return }
            var msg = this.msg, gun = msg.$, at = gun._, cat = this.at, tmp = at.lex;
            if(tmp && !Gun.text.match(k, tmp['.'] || tmp['#'] || tmp)){ return } // review?
            ((tmp = gun.get(k)._).echo || (tmp.echo = {}))[cat.id] = tmp.echo[cat.id] || cat;
        }
        var obj_map = Gun.obj.map, noop = function(){}, event = {stun: noop, off: noop}, n_ = Gun.node._, u;
    })(USE, './map');

    ;USE(function(module){
        var Gun = USE('./index');
        Gun.chain.set = function(item, cb, opt){
            var gun = this, soul;
            cb = cb || function(){};
            opt = opt || {}; opt.item = opt.item || item;
            if(soul = Gun.node.soul(item)){ item = Gun.obj.put({}, soul, Gun.val.link.ify(soul)) }
            if(!Gun.is(item)){
                if(Gun.obj.is(item)){;
                    item = gun.back(-1).get(soul = soul || Gun.node.soul(item) || gun.back('opt.uuid')()).put(item);
                }
                return gun.get(soul || (Gun.state.lex() + Gun.text.random(7))).put(item, cb, opt);
            }
            item.get(function(soul, o, msg){
                if(!soul){ return cb.call(gun, {err: Gun.log('Only a node can be linked! Not "' + msg.put + '"!')}) }
                gun.put(Gun.obj.put({}, soul, Gun.val.link.ify(soul)), cb, opt);
            },true);
            return item;
        }
    })(USE, './set');

    ;USE(function(module){
        if(typeof Gun === 'undefined'){ return } // TODO: localStorage is Browser only. But it would be nice if it could somehow plugin into NodeJS compatible localStorage APIs?

        var root, noop = function(){}, store, u;
        try{store = (Gun.window||noop).localStorage}catch(e){}
        if(!store){
            console.log("Warning: No localStorage exists to persist data to!");
            store = {setItem: function(k,v){this[k]=v}, removeItem: function(k){delete this[k]}, getItem: function(k){return this[k]}};
        }
        /*
			NOTE: Both `lib/file.js` and `lib/memdisk.js` are based on this design!
			If you update anything here, consider updating the other adapters as well.
		*/

        Gun.on('create', function(root){
            // This code is used to queue offline writes for resync.
            // See the next 'opt' code below for actual saving of data.
            var ev = this.to, opt = root.opt;
            if(root.once){ return ev.next(root) }
            //if(false === opt.localStorage){ return ev.next(root) } // we want offline resynce queue regardless!
            opt.prefix = opt.file || 'gun/';
            var gap = Gun.obj.ify(store.getItem('gap/'+opt.prefix)) || {};
            var empty = Gun.obj.empty, id, to, go;
            // add re-sync command.
            if(!empty(gap)){
                var disk = Gun.obj.ify(store.getItem(opt.prefix)) || {}, send = {};
                Gun.obj.map(gap, function(node, soul){
                    Gun.obj.map(node, function(val, key){
                        send[soul] = Gun.state.to(disk[soul], key, send[soul]);
                    });
                });
                setTimeout(function(){
                    // TODO: Holy Grail dangling by this thread! If gap / offline resync doesn't trigger, it doesn't work. Ouch, and this is a localStorage specific adapter. :(
                    root.on('out', {put: send, '#': root.ask(ack)});
                },1);
            }

            root.on('out', function(msg){
                if(msg.lS){ return } // TODO: for IndexedDB and others, shouldn't send to peers ACKs to our own GETs.
                if(Gun.is(msg.$) && msg.put && !msg['@']){
                    id = msg['#'];
                    Gun.graph.is(msg.put, null, map);
                    if(!to){ to = setTimeout(flush, opt.wait || 1) }
                }
                this.to.next(msg);
            });
            root.on('ack', ack);

            function ack(ack){ // TODO: This is experimental, not sure if we should keep this type of event hook.
                if(ack.err || !ack.ok){ return }
                var id = ack['@'];
                setTimeout(function(){
                    Gun.obj.map(gap, function(node, soul){
                        Gun.obj.map(node, function(val, key){
                            if(id !== val){ return }
                            delete node[key];
                        });
                        if(empty(node)){
                            delete gap[soul];
                        }
                    });
                    flush();
                }, opt.wait || 1);
            };
            ev.next(root);

            var map = function(val, key, node, soul){
                (gap[soul] || (gap[soul] = {}))[key] = id;
            }
            var flush = function(){
                clearTimeout(to);
                to = false;
                try{store.setItem('gap/'+opt.prefix, JSON.stringify(gap));
                }catch(e){ Gun.log(err = e || "localStorage failure") }
            }
        });

        Gun.on('create', function(root){
            this.to.next(root);
            var opt = root.opt;
            if(root.once){ return }
            if(false === opt.localStorage){ return }
            opt.prefix = opt.file || 'gun/';
            var graph = root.graph, acks = {}, count = 0, to;
            var disk = Gun.obj.ify(store.getItem(opt.prefix)) || {};
            var lS = function(){}, u;
            root.on('localStorage', disk); // NON-STANDARD EVENT!

            root.on('put', function(at){
                this.to.next(at);
                Gun.graph.is(at.put, null, map);
                if(!at['@']){ acks[at['#']] = true; } // only ack non-acks.
                count += 1;
                if(count >= (opt.batch || 1000)){
                    return flush();
                }
                if(to){ return }
                to = setTimeout(flush, opt.wait || 1);
            });

            root.on('get', function(msg){
                this.to.next(msg);
                var lex = msg.get, soul, data, u;
                function to(){
                    if(!lex || !(soul = lex['#'])){ return }
                    //if(0 >= msg.cap){ return }
                    var has = lex['.'];
                    data = disk[soul] || u;
                    if(data && has){
                        data = Gun.state.to(data, has);
                    }
                    //if(!data && !Gun.obj.empty(opt.peers)){ return } // if data not found, don't ack if there are peers. // Hmm, what if we have peers but we are disconnected?
                    //console.log("lS get", lex, data);
                    root.on('in', {'@': msg['#'], put: Gun.graph.node(data), how: 'lS', lS: msg.$});// || root.$});
                };
                Gun.debug? setTimeout(to,1) : to();
            });

            var map = function(val, key, node, soul){
                disk[soul] = Gun.state.to(node, key, disk[soul]);
            }

            var flush = function(data){
                var err;
                count = 0;
                clearTimeout(to);
                to = false;
                var ack = acks;
                acks = {};
                if(data){ disk = data }
                try{store.setItem(opt.prefix, JSON.stringify(disk));
                }catch(e){
                    Gun.log(err = (e || "localStorage failure") + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install");
                    root.on('localStorage:error', {err: err, file: opt.prefix, flush: disk, retry: flush});
                }
                if(!err && !Gun.obj.empty(opt.peers)){ return } // only ack if there are no peers.
                Gun.obj.map(ack, function(yes, id){
                    root.on('in', {
                        '@': id,
                        err: err,
                        ok: 0 // localStorage isn't reliable, so make its `ok` code be a low number.
                    });
                });
            }
        });
    })(USE, './adapters/localStorage');

    ;USE(function(module){
        var Type = USE('../type');

        function Mesh(root){
            var mesh = function(){};
            var opt = root.opt || {};
            opt.log = opt.log || console.log;
            opt.gap = opt.gap || opt.wait || 1;
            opt.pack = opt.pack || (opt.memory? (opt.memory * 1000 * 1000) : 1399000000) * 0.3; // max_old_space_size defaults to 1400 MB.

            var dup = root.dup;

            mesh.hear = function(raw, peer){
                if(!raw){ return }
                var msg, id, hash, tmp = raw[0];
                if(opt.pack <= raw.length){ return mesh.say({dam: '!', err: "Message too big!"}, peer) }
                if('{' != raw[2]){ mesh.hear.d += raw.length||0; ++mesh.hear.c; } // STATS! // ugh, stupid double JSON encoding
                if('[' === tmp){
                    try{msg = JSON.parse(raw);}catch(e){opt.log('DAM JSON parse error', e)}
                    if(!msg){ return }
                    var i = 0, m;
                    while(m = msg[i++]){
                        mesh.hear(m, peer);
                    }
                    return;
                }
                if('{' === tmp || (Type.obj.is(raw) && (msg = raw))){
                    try{msg = msg || JSON.parse(raw);
                    }catch(e){return opt.log('DAM JSON parse error', e)}
                    if(!msg){ return }
                    if(!(id = msg['#'])){ id = msg['#'] = Type.text.random(9) }
                    if(dup.check(id)){ return }
                    dup.track(id, true).it = msg; // GUN core also dedups, so `true` is needed. // Does GUN core need to dedup anymore?
                    if(!(hash = msg['##']) && u !== msg.put){ hash = msg['##'] = Type.obj.hash(msg.put) }
                    if(hash && (tmp = msg['@'] || (msg.get && id))){ // Reduces backward daisy in case varying hashes at different daisy depths are the same.
                        if(dup.check(tmp+hash)){ return }
                        dup.track(tmp+hash, true).it = msg; // GUN core also dedups, so `true` is needed. // Does GUN core need to dedup anymore?
                    }
                    (msg._ = function(){}).via = peer;
                    if(tmp = msg['><']){ (msg._).to = Type.obj.map(tmp.split(','), tomap) }
                    if(msg.dam){
                        if(tmp = mesh.hear[msg.dam]){
                            tmp(msg, peer, root);
                        }
                        return;
                    }
                    root.on('in', msg);
                    return;
                }
            }
            var tomap = function(k,i,m){m(k,true)};
            mesh.hear.c = mesh.hear.d = 0;

            ;(function(){
                var message;
                function each(peer){ mesh.say(message, peer) }
                mesh.say = function(msg, peer){
                    if(this.to){ this.to.next(msg) } // compatible with middleware adapters.
                    if(!msg){ return false }
                    var id, hash, tmp, raw;
                    var meta = msg._||(msg._=function(){});
                    if(!(id = msg['#'])){ id = msg['#'] = Type.text.random(9) }
                    if(!(hash = msg['##']) && u !== msg.put){ hash = msg['##'] = Type.obj.hash(msg.put) }
                    if(!(raw = meta.raw)){
                        raw = meta.raw = mesh.raw(msg);
                        if(hash && (tmp = msg['@'])){
                            dup.track(tmp+hash).it = msg;
                            if(tmp = (dup.s[tmp]||ok).it){
                                if(hash === tmp['##']){ return false }
                                tmp['##'] = hash;
                            }
                        }
                    }
                    dup.track(id).it = msg; // track for 9 seconds, default. Earth<->Mars would need more!
                    if(!peer){ peer = (tmp = dup.s[msg['@']]) && (tmp = tmp.it) && (tmp = tmp._) && (tmp = tmp.via) }
                    if(!peer && mesh.way){ return mesh.way(msg) }
                    if(!peer || !peer.id){ message = msg;
                        if(!Type.obj.is(peer || opt.peers)){ return false }
                        Type.obj.map(peer || opt.peers, each); // in case peer is a peer list.
                        return;
                    }
                    if(!peer.wire && mesh.wire){ mesh.wire(peer) }
                    if(id === peer.last){ return } peer.last = id;  // was it just sent?
                    if(peer === meta.via){ return false }
                    if((tmp = meta.to) && (tmp[peer.url] || tmp[peer.pid] || tmp[peer.id]) /*&& !o*/){ return false }
                    if(peer.batch){
                        peer.tail = (tmp = peer.tail || 0) + raw.length;
                        if(peer.tail <= opt.pack){
                            peer.batch.push(raw); // peer.batch += (tmp?'':',')+raw; // TODO: Prevent double JSON! // FOR v1.0 !?
                            return;
                        }
                        flush(peer);
                    }
                    peer.batch = []; // peer.batch = '['; // TODO: Prevent double JSON!
                    setTimeout(function(){flush(peer)}, opt.gap);
                    send(raw, peer);
                }
                function flush(peer){
                    var tmp = peer.batch; // var tmp = peer.batch + ']'; // TODO: Prevent double JSON!
                    peer.batch = peer.tail = null;
                    if(!tmp){ return }
                    if(!tmp.length){ return } // if(3 > tmp.length){ return } // TODO: ^
                    try{tmp = (1 === tmp.length? tmp[0] : JSON.stringify(tmp));
                    }catch(e){return opt.log('DAM JSON stringify error', e)}
                    if(!tmp){ return }
                    send(tmp, peer);
                }
                mesh.say.c = mesh.say.d = 0;
            }());

            // for now - find better place later.
            function send(raw, peer){ try{
                var wire = peer.wire;
                if(peer.say){
                    peer.say(raw);
                } else
                if(wire.send){
                    wire.send(raw);
                }
                mesh.say.d += raw.length||0; ++mesh.say.c; // STATS!
            }catch(e){
                (peer.queue = peer.queue || []).push(raw);
            }}

            ;(function(){
                mesh.raw = function(msg){ // TODO: Clean this up / delete it / move logic out!
                    if(!msg){ return '' }
                    var meta = (msg._) || {}, put, hash, tmp;
                    if(tmp = meta.raw){ return tmp }
                    if(typeof msg === 'string'){ return msg }
                    if(!msg.dam){
                        var i = 0, to = []; Type.obj.map(opt.peers, function(p){
                            to.push(p.url || p.pid || p.id); if(++i > 9){ return true } // limit server, fast fix, improve later! // For "tower" peer, MUST include 6 surrounding ids.
                        }); if(i > 1){ msg['><'] = to.join() }
                    }
                    var raw = $(msg); // optimize by reusing put = the JSON.stringify from .hash?
                    /*if(u !== put){
						tmp = raw.indexOf(_, raw.indexOf('put'));
						raw = raw.slice(0, tmp-1) + put + raw.slice(tmp + _.length + 1);
						//raw = raw.replace('"'+ _ +'"', put); // NEVER USE THIS! ALSO NEVER DELETE IT TO NOT MAKE SAME MISTAKE! https://github.com/amark/gun/wiki/@$$ Heisenbug
					}*/
                    if(meta){ meta.raw = raw }
                    return raw;
                }
                var $ = JSON.stringify, _ = ':])([:';

            }());

            mesh.hi = function(peer){
                var tmp = peer.wire || {};
                if(peer.id){
                    opt.peers[peer.url || peer.id] = peer;
                } else {
                    tmp = peer.id = peer.id || Type.text.random(9);
                    mesh.say({dam: '?'}, opt.peers[tmp] = peer);
                }
                peer.met = peer.met || +(new Date);
                if(!tmp.hied){ root.on(tmp.hied = 'hi', peer) }
                // @rogowski I need this here by default for now to fix go1dfish's bug
                tmp = peer.queue; peer.queue = [];
                Type.obj.map(tmp, function(msg){
                    send(msg, peer);
                });
            }
            mesh.bye = function(peer){
                root.on('bye', peer);
                var tmp = +(new Date); tmp = (tmp - (peer.met||tmp));
                mesh.bye.time = ((mesh.bye.time || tmp) + tmp) / 2;
            }
            mesh.hear['!'] = function(msg, peer){ opt.log('Error:', msg.err) }
            mesh.hear['?'] = function(msg, peer){
                if(!msg.pid){
                    mesh.say({dam: '?', pid: opt.pid, '@': msg['#']}, peer);
                    // @rogowski I want to re-enable this AXE logic with some fix/merge later.
                    /* var tmp = peer.queue; peer.queue = [];
					Type.obj.map(tmp, function(msg){
						mesh.say(msg, peer);
					}); */
                    // @rogowski 2: I think with my PID fix we can delete this and use the original.
                    return;
                }
                if(peer.pid){ return }
                peer.pid = msg.pid;
            }

            root.on('create', function(root){
                root.opt.pid = root.opt.pid || Type.text.random(9);
                this.to.next(root);
                root.on('out', mesh.say);
            });

            root.on('bye', function(peer, tmp){
                peer = opt.peers[peer.id || peer] || peer;
                this.to.next(peer);
                peer.bye? peer.bye() : (tmp = peer.wire) && tmp.close && tmp.close();
                Type.obj.del(opt.peers, peer.id);
                peer.wire = null;
            });

            var gets = {};
            root.on('bye', function(peer, tmp){ this.to.next(peer);
                if(!(tmp = peer.url)){ return } gets[tmp] = true;
                setTimeout(function(){ delete gets[tmp] },opt.lack || 9000);
            });
            root.on('hi', function(peer, tmp){ this.to.next(peer);
                if(!(tmp = peer.url) || !gets[tmp]){ return } delete gets[tmp];
                Type.obj.map(root.next, function(node, soul){
                    tmp = {}; tmp[soul] = root.graph[soul];
                    mesh.say({'##': Type.obj.hash(tmp), get: {'#': soul}}, peer);
                })
            });

            return mesh;
        }

        ;(function(){
            Type.text.hash = function(s){ // via SO
                if(typeof s !== 'string'){ return {err: 1} }
                var c = 0;
                if(!s.length){ return c }
                for(var i=0,l=s.length,n; i<l; ++i){
                    n = s.charCodeAt(i);
                    c = ((c<<5)-c)+n;
                    c |= 0;
                }
                return c; // Math.abs(c);
            }

            var $ = JSON.stringify, u;

            Type.obj.hash = function(obj, hash){
                if(!hash && u === (obj = $(obj, sort))){ return }
                return Type.text.hash(hash || obj || '');
            }

            function sort(k, v){ var tmp;
                if(!(v instanceof Object)){ return v }
                Type.obj.map(Object.keys(v).sort(), map, {to: tmp = {}, on: v});
                return tmp;
            }
            Type.obj.hash.sort = sort;

            function map(k){
                this.to[k] = this.on[k];
            }
        }());

        var empty = {}, ok = true, u;

        try{ module.exports = Mesh }catch(e){}

    })(USE, './adapters/mesh');

    ;USE(function(module){
        var Gun = USE('../index');
        Gun.Mesh = USE('./mesh');

        Gun.on('opt', function(root){
            this.to.next(root);
            var opt = root.opt;
            if(root.once){ return }
            if(false === opt.WebSocket){ return }

            var env;
            if(typeof window !== "undefined"){ env = window }
            if(typeof global !== "undefined"){ env = global }
            env = env || {};

            var websocket = opt.WebSocket || env.WebSocket || env.webkitWebSocket || env.mozWebSocket;
            if(!websocket){ return }
            opt.WebSocket = websocket;

            var mesh = opt.mesh = opt.mesh || Gun.Mesh(root);

            var wire = mesh.wire || opt.wire;
            mesh.wire = opt.wire = open;
            function open(peer){ try{
                if(!peer || !peer.url){ return wire && wire(peer) }
                var url = peer.url.replace('http', 'ws');
                var wire = peer.wire = new opt.WebSocket(url);
                wire.onclose = function(){
                    opt.mesh.bye(peer);
                    reconnect(peer);
                };
                wire.onerror = function(error){
                    reconnect(peer);
                };
                wire.onopen = function(){
                    opt.mesh.hi(peer);
                }
                wire.onmessage = function(msg){
                    if(!msg){ return }
                    opt.mesh.hear(msg.data || msg, peer);
                };
                return wire;
            }catch(e){}}

            var wait = 2 * 1000;
            function reconnect(peer){
                clearTimeout(peer.defer);
                if(doc && peer.retry <= 0){ return } peer.retry = (peer.retry || opt.retry || 60) - 1;
                peer.defer = setTimeout(function to(){
                    if(doc && doc.hidden){ return setTimeout(to,wait) }
                    open(peer);
                }, wait);
            }
            var doc = 'undefined' !== typeof document && document;
        });
        var noop = function(){};
    })(USE, './adapters/websocket');

}());;(function(){

    /* UNBUILD */
    var root;
    if(typeof window !== "undefined"){ root = window }
    if(typeof global !== "undefined"){ root = global }
    root = root || {};
    var console = root.console || {log: function(){}};
    function USE(arg, req){
        return req? require(arg) : arg.slice? USE[R(arg)] : function(mod, path){
            arg(mod = {exports: {}});
            USE[R(path)] = mod.exports;
        }
        function R(p){
            return p.split('/').slice(-1).toString().replace('.js','');
        }
    }
    if(typeof module !== "undefined"){ var common = module }
    /* UNBUILD */

    ;USE(function(module){
        // Security, Encryption, and Authorization: SEA.js
        // MANDATORY READING: https://gun.eco/explainers/data/security.html
        // IT IS IMPLEMENTED IN A POLYFILL/SHIM APPROACH.
        // THIS IS AN EARLY ALPHA!

        if(typeof window !== "undefined"){ module.window = window }

        var tmp = module.window || module;
        var SEA = tmp.SEA || {};

        if(SEA.window = module.window){ SEA.window.SEA = SEA }

        try{ if(typeof common !== "undefined"){ common.exports = SEA } }catch(e){}
        module.exports = SEA;
    })(USE, './root');

    ;USE(function(module){
        var SEA = USE('./root');
        try{ if(SEA.window){
            if(location.protocol.indexOf('s') < 0
                && location.host.indexOf('localhost') < 0
                && location.protocol.indexOf('file:') < 0){
                location.protocol = 'https:'; // WebCrypto does NOT work without HTTPS!
            }
        } }catch(e){}
    })(USE, './https');

    ;USE(function(module){
        // This is Array extended to have .toString(['utf8'|'hex'|'base64'])
        function SeaArray() {}
        Object.assign(SeaArray, { from: Array.from })
        SeaArray.prototype = Object.create(Array.prototype)
        SeaArray.prototype.toString = function(enc, start, end) { enc = enc || 'utf8'; start = start || 0;
            const length = this.length
            if (enc === 'hex') {
                const buf = new Uint8Array(this)
                return [ ...Array(((end && (end + 1)) || length) - start).keys()]
                    .map((i) => buf[ i + start ].toString(16).padStart(2, '0')).join('')
            }
            if (enc === 'utf8') {
                return Array.from(
                    { length: (end || length) - start },
                    (_, i) => String.fromCharCode(this[ i + start])
                ).join('')
            }
            if (enc === 'base64') {
                return btoa(this)
            }
        }
        module.exports = SeaArray;
    })(USE, './array');

    ;USE(function(module){
        // This is Buffer implementation used in SEA. Functionality is mostly
        // compatible with NodeJS 'safe-buffer' and is used for encoding conversions
        // between binary and 'hex' | 'utf8' | 'base64'
        // See documentation and validation for safe implementation in:
        // https://github.com/feross/safe-buffer#update
        var SeaArray = USE('./array');
        function SafeBuffer(...props) {
            console.warn('new SafeBuffer() is depreciated, please use SafeBuffer.from()')
            return SafeBuffer.from(...props)
        }
        SafeBuffer.prototype = Object.create(Array.prototype)
        Object.assign(SafeBuffer, {
            // (data, enc) where typeof data === 'string' then enc === 'utf8'|'hex'|'base64'
            from() {
                if (!Object.keys(arguments).length) {
                    throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
                }
                const input = arguments[0]
                let buf
                if (typeof input === 'string') {
                    const enc = arguments[1] || 'utf8'
                    if (enc === 'hex') {
                        const bytes = input.match(/([\da-fA-F]{2})/g)
                            .map((byte) => parseInt(byte, 16))
                        if (!bytes || !bytes.length) {
                            throw new TypeError('Invalid first argument for type \'hex\'.')
                        }
                        buf = SeaArray.from(bytes)
                    } else if (enc === 'utf8') {
                        const length = input.length
                        const words = new Uint16Array(length)
                        Array.from({ length: length }, (_, i) => words[i] = input.charCodeAt(i))
                        buf = SeaArray.from(words)
                    } else if (enc === 'base64') {
                        const dec = atob(input)
                        const length = dec.length
                        const bytes = new Uint8Array(length)
                        Array.from({ length: length }, (_, i) => bytes[i] = dec.charCodeAt(i))
                        buf = SeaArray.from(bytes)
                    } else if (enc === 'binary') {
                        buf = SeaArray.from(input)
                    } else {
                        console.info('SafeBuffer.from unknown encoding: '+enc)
                    }
                    return buf
                }
                const byteLength = input.byteLength // what is going on here? FOR MARTTI
                const length = input.byteLength ? input.byteLength : input.length
                if (length) {
                    let buf
                    if (input instanceof ArrayBuffer) {
                        buf = new Uint8Array(input)
                    }
                    return SeaArray.from(buf || input)
                }
            },
            // This is 'safe-buffer.alloc' sans encoding support
            alloc(length, fill = 0 /*, enc*/ ) {
                return SeaArray.from(new Uint8Array(Array.from({ length: length }, () => fill)))
            },
            // This is normal UNSAFE 'buffer.alloc' or 'new Buffer(length)' - don't use!
            allocUnsafe(length) {
                return SeaArray.from(new Uint8Array(Array.from({ length : length })))
            },
            // This puts together array of array like members
            concat(arr) { // octet array
                if (!Array.isArray(arr)) {
                    throw new TypeError('First argument must be Array containing ArrayBuffer or Uint8Array instances.')
                }
                return SeaArray.from(arr.reduce((ret, item) => ret.concat(Array.from(item)), []))
            }
        })
        SafeBuffer.prototype.from = SafeBuffer.from
        SafeBuffer.prototype.toString = SeaArray.prototype.toString

        module.exports = SafeBuffer;
    })(USE, './buffer');

    ;USE(function(module){
        const SEA = USE('./root')
        const Buffer = USE('./buffer')
        const api = {Buffer: Buffer}
        var o = {};

        if(SEA.window){
            api.crypto = window.crypto || window.msCrypto;
            api.subtle = (api.crypto||o).subtle || (api.crypto||o).webkitSubtle;
            api.TextEncoder = window.TextEncoder;
            api.TextDecoder = window.TextDecoder;
            api.random = (len) => Buffer.from(api.crypto.getRandomValues(new Uint8Array(Buffer.alloc(len))))
        }
        if(!api.crypto){try{
            var crypto = USE('crypto', 1);
            const { TextEncoder, TextDecoder } = USE('text-encoding', 1)
            Object.assign(api, {
                crypto,
                //subtle,
                TextEncoder,
                TextDecoder,
                random: (len) => Buffer.from(crypto.randomBytes(len))
            });
            //try{
            const WebCrypto = USE('node-webcrypto-ossl', 1);
            api.ossl = api.subtle = new WebCrypto({directory: 'ossl'}).subtle // ECDH
            //}catch(e){
            //console.log("node-webcrypto-ossl is optionally needed for ECDH, please install if needed.");
            //}
        }catch(e){
            console.log("node-webcrypto-ossl and text-encoding may not be included by default, please add it to your package.json!");
            OSSL_WEBCRYPTO_OR_TEXT_ENCODING_NOT_INSTALLED;
        }}

        module.exports = api
    })(USE, './shim');

    ;USE(function(module){
        var SEA = USE('./root');
        var Buffer = USE('./buffer');
        var s = {};
        s.pbkdf2 = {hash: 'SHA-256', iter: 100000, ks: 64};
        s.ecdsa = {
            pair: {name: 'ECDSA', namedCurve: 'P-256'},
            sign: {name: 'ECDSA', hash: {name: 'SHA-256'}}
        };
        s.ecdh = {name: 'ECDH', namedCurve: 'P-256'};

        // This creates Web Cryptography API compliant JWK for sign/verify purposes
        s.jwk = function(pub, d){  // d === priv
            pub = pub.split('.');
            var x = pub[0], y = pub[1];
            var jwk = {kty: "EC", crv: "P-256", x: x, y: y, ext: true};
            jwk.key_ops = d ? ['sign'] : ['verify'];
            if(d){ jwk.d = d }
            return jwk;
        };
        s.recall = {
            validity: 12 * 60 * 60, // internally in seconds : 12 hours
            hook: function(props){ return props } // { iat, exp, alias, remember } // or return new Promise((resolve, reject) => resolve(props)
        };

        s.check = function(t){ return (typeof t == 'string') && ('SEA{' === t.slice(0,4)) }
        s.parse = function p(t){ try {
            var yes = (typeof t == 'string');
            if(yes && 'SEA{' === t.slice(0,4)){ t = t.slice(3) }
            return yes ? JSON.parse(t) : t;
        } catch (e) {}
            return t;
        }

        SEA.opt = s;
        module.exports = s
    })(USE, './settings');

    ;USE(function(module){
        var shim = USE('./shim');
        module.exports = async function(d, o){
            var t = (typeof d == 'string')? d : JSON.stringify(d);
            var hash = await shim.subtle.digest({name: o||'SHA-256'}, new shim.TextEncoder().encode(t));
            return shim.Buffer.from(hash);
        }
    })(USE, './sha256');

    ;USE(function(module){
        // This internal func returns SHA-1 hashed data for KeyID generation
        const __shim = USE('./shim')
        const subtle = __shim.subtle
        const ossl = __shim.ossl ? __shim.ossl : subtle
        const sha1hash = (b) => ossl.digest({name: 'SHA-1'}, new ArrayBuffer(b))
        module.exports = sha1hash
    })(USE, './sha1');

    ;USE(function(module){
        var SEA = USE('./root');
        var shim = USE('./shim');
        var S = USE('./settings');
        var sha = USE('./sha256');
        var u;

        SEA.work = SEA.work || (async (data, pair, cb, opt) => { try { // used to be named `proof`
            var salt = (pair||{}).epub || pair; // epub not recommended, salt should be random!
            var opt = opt || {};
            if(salt instanceof Function){
                cb = salt;
                salt = u;
            }
            salt = salt || shim.random(9);
            data = (typeof data == 'string')? data : JSON.stringify(data);
            if('sha' === (opt.name||'').toLowerCase().slice(0,3)){
                var rsha = shim.Buffer.from(await sha(data, opt.name), 'binary').toString(opt.encode || 'base64')
                if(cb){ try{ cb(rsha) }catch(e){console.log(e)} }
                return rsha;
            }
            var key = await (shim.ossl || shim.subtle).importKey('raw', new shim.TextEncoder().encode(data), {name: opt.name || 'PBKDF2'}, false, ['deriveBits']);
            var work = await (shim.ossl || shim.subtle).deriveBits({
                name: opt.name || 'PBKDF2',
                iterations: opt.iterations || S.pbkdf2.iter,
                salt: new shim.TextEncoder().encode(opt.salt || salt),
                hash: opt.hash || S.pbkdf2.hash,
            }, key, opt.length || (S.pbkdf2.ks * 8))
            data = shim.random(data.length)  // Erase data in case of passphrase
            var r = shim.Buffer.from(work, 'binary').toString(opt.encode || 'base64')
            if(cb){ try{ cb(r) }catch(e){console.log(e)} }
            return r;
        } catch(e) {
            console.log(e);
            SEA.err = e;
            if(SEA.throw){ throw e }
            if(cb){ cb() }
            return;
        }});

        module.exports = SEA.work;
    })(USE, './work');

    ;USE(function(module){
        var SEA = USE('./root');
        var shim = USE('./shim');
        var S = USE('./settings');

        SEA.name = SEA.name || (async (cb, opt) => { try {
            if(cb){ try{ cb() }catch(e){console.log(e)} }
            return;
        } catch(e) {
            console.log(e);
            SEA.err = e;
            if(SEA.throw){ throw e }
            if(cb){ cb() }
            return;
        }});

        //SEA.pair = async (data, proof, cb) => { try {
        SEA.pair = SEA.pair || (async (cb, opt) => { try {

            var ecdhSubtle = shim.ossl || shim.subtle;
            // First: ECDSA keys for signing/verifying...
            var sa = await shim.subtle.generateKey(S.ecdsa.pair, true, [ 'sign', 'verify' ])
                .then(async (keys) => {
                    // privateKey scope doesn't leak out from here!
                    //const { d: priv } = await shim.subtle.exportKey('jwk', keys.privateKey)
                    var key = {};
                    key.priv = (await shim.subtle.exportKey('jwk', keys.privateKey)).d;
                    var pub = await shim.subtle.exportKey('jwk', keys.publicKey);
                    //const pub = Buff.from([ x, y ].join(':')).toString('base64') // old
                    key.pub = pub.x+'.'+pub.y; // new
                    // x and y are already base64
                    // pub is UTF8 but filename/URL safe (https://www.ietf.org/rfc/rfc3986.txt)
                    // but split on a non-base64 letter.
                    return key;
                })

            // To include PGPv4 kind of keyId:
            // const pubId = await SEA.keyid(keys.pub)
            // Next: ECDH keys for encryption/decryption...

            try{
                var dh = await ecdhSubtle.generateKey(S.ecdh, true, ['deriveKey'])
                    .then(async (keys) => {
                        // privateKey scope doesn't leak out from here!
                        var key = {};
                        key.epriv = (await ecdhSubtle.exportKey('jwk', keys.privateKey)).d;
                        var pub = await ecdhSubtle.exportKey('jwk', keys.publicKey);
                        //const epub = Buff.from([ ex, ey ].join(':')).toString('base64') // old
                        key.epub = pub.x+'.'+pub.y; // new
                        // ex and ey are already base64
                        // epub is UTF8 but filename/URL safe (https://www.ietf.org/rfc/rfc3986.txt)
                        // but split on a non-base64 letter.
                        return key;
                    })
            }catch(e){
                if(SEA.window){ throw e }
                if(e == 'Error: ECDH is not a supported algorithm'){ console.log('Ignoring ECDH...') }
                else { throw e }
            } dh = dh || {};

            var r = { pub: sa.pub, priv: sa.priv, /* pubId, */ epub: dh.epub, epriv: dh.epriv }
            if(cb){ try{ cb(r) }catch(e){console.log(e)} }
            return r;
        } catch(e) {
            console.log(e);
            SEA.err = e;
            if(SEA.throw){ throw e }
            if(cb){ cb() }
            return;
        }});

        module.exports = SEA.pair;
    })(USE, './pair');

    ;USE(function(module){
        var SEA = USE('./root');
        var shim = USE('./shim');
        var S = USE('./settings');
        var sha = USE('./sha256');
        var u;

        SEA.sign = SEA.sign || (async (data, pair, cb, opt) => { try {
            opt = opt || {};
            if(!(pair||opt).priv){
                pair = await SEA.I(null, {what: data, how: 'sign', why: opt.why});
            }
            if(u === data){ throw '`undefined` not allowed.' }
            var json = S.parse(data);
            var check = opt.check = opt.check || json;
            if(SEA.verify && (SEA.opt.check(check) || (check && check.s && check.m))
                && u !== await SEA.verify(check, pair)){ // don't sign if we already signed it.
                var r = S.parse(check);
                if(!opt.raw){ r = 'SEA'+JSON.stringify(r) }
                if(cb){ try{ cb(r) }catch(e){console.log(e)} }
                return r;
            }
            var pub = pair.pub;
            var priv = pair.priv;
            var jwk = S.jwk(pub, priv);
            var hash = await sha(json);
            var sig = await (shim.ossl || shim.subtle).importKey('jwk', jwk, S.ecdsa.pair, false, ['sign'])
                .then((key) => (shim.ossl || shim.subtle).sign(S.ecdsa.sign, key, new Uint8Array(hash))) // privateKey scope doesn't leak out from here!
            var r = {m: json, s: shim.Buffer.from(sig, 'binary').toString(opt.encode || 'base64')}
            if(!opt.raw){ r = 'SEA'+JSON.stringify(r) }

            if(cb){ try{ cb(r) }catch(e){console.log(e)} }
            return r;
        } catch(e) {
            console.log(e);
            SEA.err = e;
            if(SEA.throw){ throw e }
            if(cb){ cb() }
            return;
        }});

        module.exports = SEA.sign;
    })(USE, './sign');

    ;USE(function(module){
        var SEA = USE('./root');
        var shim = USE('./shim');
        var S = USE('./settings');
        var sha = USE('./sha256');
        var u;

        SEA.verify = SEA.verify || (async (data, pair, cb, opt) => { try {
            var json = S.parse(data);
            if(false === pair){ // don't verify!
                var raw = S.parse(json.m);
                if(cb){ try{ cb(raw) }catch(e){console.log(e)} }
                return raw;
            }
            opt = opt || {};
            // SEA.I // verify is free! Requires no user permission.
            var pub = pair.pub || pair;
            var key = SEA.opt.slow_leak? await SEA.opt.slow_leak(pub) : await (shim.ossl || shim.subtle).importKey('jwk', jwk, S.ecdsa.pair, false, ['verify']);
            var hash = await sha(json.m);
            var buf, sig, check, tmp; try{
                buf = shim.Buffer.from(json.s, opt.encode || 'base64'); // NEW DEFAULT!
                sig = new Uint8Array(buf);
                check = await (shim.ossl || shim.subtle).verify(S.ecdsa.sign, key, sig, new Uint8Array(hash));
                if(!check){ throw "Signature did not match." }
            }catch(e){
                if(SEA.opt.fallback){
                    return await SEA.opt.fall_verify(data, pair, cb, opt);
                }
            }
            var r = check? S.parse(json.m) : u;

            if(cb){ try{ cb(r) }catch(e){console.log(e)} }
            return r;
        } catch(e) {
            console.log(e); // mismatched owner FOR MARTTI
            SEA.err = e;
            if(SEA.throw){ throw e }
            if(cb){ cb() }
            return;
        }});

        module.exports = SEA.verify;
        // legacy & ossl leak mitigation:

        var knownKeys = {};
        var keyForPair = SEA.opt.slow_leak = pair => {
            if (knownKeys[pair]) return knownKeys[pair];
            var jwk = S.jwk(pair);
            knownKeys[pair] = (shim.ossl || shim.subtle).importKey("jwk", jwk, S.ecdsa.pair, false, ["verify"]);
            return knownKeys[pair];
        };


        SEA.opt.fall_verify = async function(data, pair, cb, opt, f){
            if(f === SEA.opt.fallback){ throw "Signature did not match" } f = f || 1;
            var json = S.parse(data), pub = pair.pub || pair, key = await SEA.opt.slow_leak(pub);
            var hash = (f <= SEA.opt.fallback)? shim.Buffer.from(await shim.subtle.digest({name: 'SHA-256'}, new shim.TextEncoder().encode(S.parse(json.m)))) : await sha(json.m); // this line is old bad buggy code but necessary for old compatibility.
            var buf; var sig; var check; try{
                buf = shim.Buffer.from(json.s, opt.encode || 'base64') // NEW DEFAULT!
                sig = new Uint8Array(buf)
                check = await (shim.ossl || shim.subtle).verify(S.ecdsa.sign, key, sig, new Uint8Array(hash))
                if(!check){ throw "Signature did not match." }
            }catch(e){
                buf = shim.Buffer.from(json.s, 'utf8') // AUTO BACKWARD OLD UTF8 DATA!
                sig = new Uint8Array(buf)
                check = await (shim.ossl || shim.subtle).verify(S.ecdsa.sign, key, sig, new Uint8Array(hash))
                if(!check){ throw "Signature did not match." }
            }
            var r = check? S.parse(json.m) : u;
            if(cb){ try{ cb(r) }catch(e){console.log(e)} }
            return r;
        }
        SEA.opt.fallback = 2;

    })(USE, './verify');

    ;USE(function(module){
        var shim = USE('./shim');
        var sha256hash = USE('./sha256');

        const importGen = async (key, salt, opt) => {
            //const combo = shim.Buffer.concat([shim.Buffer.from(key, 'utf8'), salt || shim.random(8)]).toString('utf8') // old
            var opt = opt || {};
            const combo = key + (salt || shim.random(8)).toString('utf8'); // new
            const hash = shim.Buffer.from(await sha256hash(combo), 'binary')
            return await shim.subtle.importKey('raw', new Uint8Array(hash), opt.name || 'AES-GCM', false, ['encrypt', 'decrypt'])
        }
        module.exports = importGen;
    })(USE, './aeskey');

    ;USE(function(module){
        var SEA = USE('./root');
        var shim = USE('./shim');
        var S = USE('./settings');
        var aeskey = USE('./aeskey');
        var u;

        SEA.encrypt = SEA.encrypt || (async (data, pair, cb, opt) => { try {
            opt = opt || {};
            var key = (pair||opt).epriv || pair;
            if(u === data){ throw '`undefined` not allowed.' }
            if(!key){
                pair = await SEA.I(null, {what: data, how: 'encrypt', why: opt.why});
                key = pair.epriv || pair;
            }
            var msg = (typeof data == 'string')? data : JSON.stringify(data);
            var rand = {s: shim.random(9), iv: shim.random(15)}; // consider making this 9 and 15 or 18 or 12 to reduce == padding.
            var ct = await aeskey(key, rand.s, opt).then((aes) => (/*shim.ossl ||*/ shim.subtle).encrypt({ // Keeping the AES key scope as private as possible...
                name: opt.name || 'AES-GCM', iv: new Uint8Array(rand.iv)
            }, aes, new shim.TextEncoder().encode(msg)));
            var r = {
                ct: shim.Buffer.from(ct, 'binary').toString(opt.encode || 'base64'),
                iv: rand.iv.toString(opt.encode || 'base64'),
                s: rand.s.toString(opt.encode || 'base64')
            }
            if(!opt.raw){ r = 'SEA'+JSON.stringify(r) }

            if(cb){ try{ cb(r) }catch(e){console.log(e)} }
            return r;
        } catch(e) {
            console.log(e);
            SEA.err = e;
            if(SEA.throw){ throw e }
            if(cb){ cb() }
            return;
        }});

        module.exports = SEA.encrypt;
    })(USE, './encrypt');

    ;USE(function(module){
        var SEA = USE('./root');
        var shim = USE('./shim');
        var S = USE('./settings');
        var aeskey = USE('./aeskey');

        SEA.decrypt = SEA.decrypt || (async (data, pair, cb, opt) => { try {
            opt = opt || {};
            var key = (pair||opt).epriv || pair;
            if(!key){
                pair = await SEA.I(null, {what: data, how: 'decrypt', why: opt.why});
                key = pair.epriv || pair;
            }
            var json = S.parse(data);
            var buf, bufiv, bufct; try{
                buf = shim.Buffer.from(json.s, opt.encode || 'base64');
                bufiv = shim.Buffer.from(json.iv, opt.encode || 'base64');
                bufct = shim.Buffer.from(json.ct, opt.encode || 'base64');
                var ct = await aeskey(key, buf, opt).then((aes) => (/*shim.ossl ||*/ shim.subtle).decrypt({  // Keeping aesKey scope as private as possible...
                    name: opt.name || 'AES-GCM', iv: new Uint8Array(bufiv)
                }, aes, new Uint8Array(bufct)));
            }catch(e){
                if('utf8' === opt.encode){ throw "Could not decrypt" }
                if(SEA.opt.fallback){
                    opt.encode = 'utf8';
                    return await SEA.decrypt(data, pair, cb, opt);
                }
            }
            var r = S.parse(new shim.TextDecoder('utf8').decode(ct));
            if(cb){ try{ cb(r) }catch(e){console.log(e)} }
            return r;
        } catch(e) {
            console.log(e);
            SEA.err = e;
            if(SEA.throw){ throw e }
            if(cb){ cb() }
            return;
        }});

        module.exports = SEA.decrypt;
    })(USE, './decrypt');

    ;USE(function(module){
        var SEA = USE('./root');
        var shim = USE('./shim');
        var S = USE('./settings');
        // Derive shared secret from other's pub and my epub/epriv
        SEA.secret = SEA.secret || (async (key, pair, cb, opt) => { try {
            opt = opt || {};
            if(!pair || !pair.epriv || !pair.epub){
                pair = await SEA.I(null, {what: key, how: 'secret', why: opt.why});
            }
            var pub = key.epub || key;
            var epub = pair.epub;
            var epriv = pair.epriv;
            var ecdhSubtle = shim.ossl || shim.subtle;
            var pubKeyData = keysToEcdhJwk(pub);
            var props = Object.assign(S.ecdh, { public: await ecdhSubtle.importKey(...pubKeyData, true, []) });
            var privKeyData = keysToEcdhJwk(epub, epriv);
            var derived = await ecdhSubtle.importKey(...privKeyData, false, ['deriveKey']).then(async (privKey) => {
                // privateKey scope doesn't leak out from here!
                var derivedKey = await ecdhSubtle.deriveKey(props, privKey, { name: 'AES-GCM', length: 256 }, true, [ 'encrypt', 'decrypt' ]);
                return ecdhSubtle.exportKey('jwk', derivedKey).then(({ k }) => k);
            })
            var r = derived;
            if(cb){ try{ cb(r) }catch(e){console.log(e)} }
            return r;
        } catch(e) {
            console.log(e);
            SEA.err = e;
            if(SEA.throw){ throw e }
            if(cb){ cb() }
            return;
        }});

        // can this be replaced with settings.jwk?
        var keysToEcdhJwk = (pub, d) => { // d === priv
            //var [ x, y ] = Buffer.from(pub, 'base64').toString('utf8').split(':') // old
            var [ x, y ] = pub.split('.') // new
            var jwk = d ? { d: d } : {}
            return [  // Use with spread returned value...
                'jwk',
                Object.assign(
                    jwk,
                    { x: x, y: y, kty: 'EC', crv: 'P-256', ext: true }
                ), // ??? refactor
                S.ecdh
            ]
        }

        module.exports = SEA.secret;
    })(USE, './secret');

    ;USE(function(module){
        var shim = USE('./shim');
        // Practical examples about usage found from ./test/common.js
        var SEA = USE('./root');
        SEA.work = USE('./work');
        SEA.sign = USE('./sign');
        SEA.verify = USE('./verify');
        SEA.encrypt = USE('./encrypt');
        SEA.decrypt = USE('./decrypt');

        SEA.random = SEA.random || shim.random;

        // This is Buffer used in SEA and usable from Gun/SEA application also.
        // For documentation see https://nodejs.org/api/buffer.html
        SEA.Buffer = SEA.Buffer || USE('./buffer');

        // These SEA functions support now ony Promises or
        // async/await (compatible) code, use those like Promises.
        //
        // Creates a wrapper library around Web Crypto API
        // for various AES, ECDSA, PBKDF2 functions we called above.
        // Calculate public key KeyID aka PGPv4 (result: 8 bytes as hex string)
        SEA.keyid = SEA.keyid || (async (pub) => {
            try {
                // base64('base64(x):base64(y)') => Buffer(xy)
                const pb = Buffer.concat(
                    pub.replace(/-/g, '+').replace(/_/g, '/').split('.')
                        .map((t) => Buffer.from(t, 'base64'))
                )
                // id is PGPv4 compliant raw key
                const id = Buffer.concat([
                    Buffer.from([0x99, pb.length / 0x100, pb.length % 0x100]), pb
                ])
                const sha1 = await sha1hash(id)
                const hash = Buffer.from(sha1, 'binary')
                return hash.toString('hex', hash.length - 8)  // 16-bit ID as hex
            } catch (e) {
                console.log(e)
                throw e
            }
        });
        // all done!
        // Obviously it is missing MANY necessary features. This is only an alpha release.
        // Please experiment with it, audit what I've done so far, and complain about what needs to be added.
        // SEA should be a full suite that is easy and seamless to use.
        // Again, scroll naer the top, where I provide an EXAMPLE of how to create a user and sign in.
        // Once logged in, the rest of the code you just read handled automatically signing/validating data.
        // But all other behavior needs to be equally easy, like opinionated ways of
        // Adding friends (trusted public keys), sending private messages, etc.
        // Cheers! Tell me what you think.
        var Gun = (SEA.window||{}).Gun || USE((typeof common == "undefined"?'.':'')+'./gun', 1);
        Gun.SEA = SEA;
        SEA.GUN = SEA.Gun = Gun;

        module.exports = SEA
    })(USE, './sea');

    ;USE(function(module){
        var Gun = USE('./sea').Gun;
        Gun.chain.then = function(cb){
            var gun = this, p = (new Promise(function(res, rej){
                gun.once(res);
            }));
            return cb? p.then(cb) : p;
        }
    })(USE, './then');

    ;USE(function(module){
        var SEA = USE('./sea');
        var Gun = SEA.Gun;
        var then = USE('./then');

        function User(root){
            this._ = {$: this};
        }
        User.prototype = (function(){ function F(){}; F.prototype = Gun.chain; return new F() }()) // Object.create polyfill
        User.prototype.constructor = User;

        // let's extend the gun chain with a `user` function.
        // only one user can be logged in at a time, per gun instance.
        Gun.chain.user = function(pub){
            var gun = this, root = gun.back(-1), user;
            if(pub){ return root.get('~'+pub) }
            if(user = root.back('user')){ return user }
            var root = (root._), at = root, uuid = at.opt.uuid || Gun.state.lex;
            (at = (user = at.user = gun.chain(new User))._).opt = {};
            at.opt.uuid = function(cb){
                var id = uuid(), pub = root.user;
                if(!pub || !(pub = pub.is) || !(pub = pub.pub)){ return id }
                id = id + '~' + pub + '.';
                if(cb && cb.call){ cb(null, id) }
                return id;
            }
            return user;
        }
        Gun.User = User;
        module.exports = User;
    })(USE, './user');

    ;USE(function(module){
        // TODO: This needs to be split into all separate functions.
        // Not just everything thrown into 'create'.

        var SEA = USE('./sea');
        var User = USE('./user');
        var authsettings = USE('./settings');
        var Gun = SEA.Gun;

        var noop = function(){};

        // Well first we have to actually create a user. That is what this function does.
        User.prototype.create = function(alias, pass, cb, opt){
            var gun = this, cat = (gun._), root = gun.back(-1);
            cb = cb || noop;
            if(cat.ing){
                cb({err: Gun.log("User is already being created or authenticated!"), wait: true});
                return gun;
            }
            cat.ing = true;
            opt = opt || {};
            var act = {}, u;
            act.a = function(pubs){
                act.pubs = pubs;
                if(pubs && !opt.already){
                    // If we can enforce that a user name is already taken, it might be nice to try, but this is not guaranteed.
                    var ack = {err: Gun.log('User already created!')};
                    cat.ing = false;
                    cb(ack);
                    gun.leave();
                    return;
                }
                act.salt = Gun.text.random(64); // pseudo-randomly create a salt, then use PBKDF2 function to extend the password with it.
                SEA.work(pass, act.salt, act.b); // this will take some short amount of time to produce a proof, which slows brute force attacks.
            }
            act.b = function(proof){
                act.proof = proof;
                SEA.pair(act.c); // now we have generated a brand new ECDSA key pair for the user account.
            }
            act.c = function(pair){ var tmp;
                act.pair = pair || {};
                if(tmp = cat.root.user){
                    tmp._.sea = pair;
                    tmp.is = {pub: pair.pub, epub: pair.epub, alias: alias};
                }
                // the user's public key doesn't need to be signed. But everything else needs to be signed with it! // we have now automated it! clean up these extra steps now!
                act.data = {pub: pair.pub};
                act.d();
            }
            act.d = function(){
                act.data.alias = alias;
                act.e();
            }
            act.e = function(){
                act.data.epub = act.pair.epub;
                SEA.encrypt({priv: act.pair.priv, epriv: act.pair.epriv}, act.proof, act.f, {raw:1}); // to keep the private key safe, we AES encrypt it with the proof of work!
            }
            act.f = function(auth){
                act.data.auth = JSON.stringify({ek: auth, s: act.salt});
                act.g(act.data.auth);
            }
            act.g = function(auth){ var tmp;
                act.data.auth = act.data.auth || auth;
                root.get(tmp = '~'+act.pair.pub).put(act.data); // awesome, now we can actually save the user with their public key as their ID.
                root.get('~@'+alias).put(Gun.obj.put({}, tmp, Gun.val.link.ify(tmp))); // next up, we want to associate the alias with the public key. So we add it to the alias list.
                setTimeout(function(){ // we should be able to delete this now, right?
                    cat.ing = false;
                    cb({ok: 0, pub: act.pair.pub}); // callback that the user has been created. (Note: ok = 0 because we didn't wait for disk to ack)
                    if(noop === cb){ gun.auth(alias, pass) } // if no callback is passed, auto-login after signing up.
                },10);
            }
            root.get('~@'+alias).once(act.a);
            return gun;
        }
        // now that we have created a user, we want to authenticate them!
        User.prototype.auth = function(alias, pass, cb, opt){
            var gun = this, cat = (gun._), root = gun.back(-1);
            cb = cb || function(){};
            if(cat.ing){
                cb({err: Gun.log("User is already being created or authenticated!"), wait: true});
                return gun;
            }
            cat.ing = true;
            opt = opt || {};
            var pair = (alias && (alias.pub || alias.epub))? alias : (pass && (pass.pub || pass.epub))? pass : null;
            var act = {}, u;
            act.a = function(data){
                if(!data){ return act.b() }
                if(!data.pub){
                    var tmp = [];
                    Gun.node.is(data, function(v){ tmp.push(v) })
                    return act.b(tmp);
                }
                if(act.name){ return act.f(data) }
                act.c((act.data = data).auth);
            }
            act.b = function(list){
                var get = (act.list = (act.list||[]).concat(list||[])).shift();
                if(u === get){
                    if(act.name){ return act.err('Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.') }
                    return act.err('Wrong user or password.')
                }
                root.get(get).once(act.a);
            }
            act.c = function(auth){
                if(u === auth){ return act.b() }
                if(Gun.text.is(auth)){ return act.c(Gun.obj.ify(auth)) } // in case of legacy
                SEA.work(pass, (act.auth = auth).s, act.d, act.enc); // the proof of work is evidence that we've spent some time/effort trying to log in, this slows brute force.
            }
            act.d = function(proof){
                SEA.decrypt(act.auth.ek, proof, act.e, act.enc);
            }
            act.e = function(half){
                if(u === half){
                    if(!act.enc){ // try old format
                        act.enc = {encode: 'utf8'};
                        return act.c(act.auth);
                    } act.enc = null; // end backwards
                    return act.b();
                }
                act.half = half;
                act.f(act.data);
            }
            act.f = function(data){
                if(!data || !data.pub){ return act.b() }
                var tmp = act.half || {};
                act.g({pub: data.pub, epub: data.epub, priv: tmp.priv, epriv: tmp.epriv});
            }
            act.g = function(pair){
                act.pair = pair;
                var user = (root._).user, at = (user._);
                var tmp = at.tag;
                var upt = at.opt;
                at = user._ = root.get('~'+pair.pub)._;
                at.opt = upt;
                // add our credentials in-memory only to our root user instance
                user.is = {pub: pair.pub, epub: pair.epub, alias: alias};
                at.sea = act.pair;
                cat.ing = false;
                try{if(pass && !Gun.obj.has(Gun.obj.ify(cat.root.graph['~'+pair.pub].auth), ':')){ opt.shuffle = opt.change = pass; } }catch(e){} // migrate UTF8 & Shuffle!
                opt.change? act.z() : cb(at);
                if(SEA.window && ((gun.back('user')._).opt||opt).remember){
                    // TODO: this needs to be modular.
                    try{var sS = {};
                        sS = window.sessionStorage;
                        sS.recall = true;
                        sS.alias = alias;
                        sS.tmp = pass;
                    }catch(e){}
                }
                try{
                    (root._).on('auth', at) // TODO: Deprecate this, emit on user instead! Update docs when you do.
                    //at.on('auth', at) // Arrgh, this doesn't work without event "merge" code, but "merge" code causes stack overflow and crashes after logging in & trying to write data.
                }catch(e){
                    Gun.log("Your 'auth' callback crashed with:", e);
                }
            }
            act.z = function(){
                // password update so encrypt private key using new pwd + salt
                act.salt = Gun.text.random(64); // pseudo-random
                SEA.work(opt.change, act.salt, act.y);
            }
            act.y = function(proof){
                SEA.encrypt({priv: act.pair.priv, epriv: act.pair.epriv}, proof, act.x, {raw:1});
            }
            act.x = function(auth){
                act.w(JSON.stringify({ek: auth, s: act.salt}));
            }
            act.w = function(auth){
                if(opt.shuffle){ // delete in future!
                    console.log('migrate core account from UTF8 & shuffle');
                    var tmp = Gun.obj.to(act.data);
                    Gun.obj.del(tmp, '_');
                    tmp.auth = auth;
                    root.get('~'+act.pair.pub).put(tmp);
                } // end delete
                root.get('~'+act.pair.pub).get('auth').put(auth, cb);
            }
            act.err = function(e){
                var ack = {err: Gun.log(e || 'User cannot be found!')};
                cat.ing = false;
                cb(ack);
            }
            act.plugin = function(name){
                if(!(act.name = name)){ return act.err() }
                var tmp = [name];
                if('~' !== name[0]){
                    tmp[1] = '~'+name;
                    tmp[2] = '~@'+name;
                }
                act.b(tmp);
            }
            if(pair){
                act.g(pair);
            } else
            if(alias){
                root.get('~@'+alias).once(act.a);
            } else
            if(!alias && !pass){
                SEA.name(act.plugin);
            }
            return gun;
        }
        User.prototype.pair = function(){
            console.log("user.pair() IS DEPRECATED AND WILL BE DELETED!!!");
            var user = this;
            if(!user.is){ return false }
            return user._.sea;
        }
        User.prototype.leave = function(opt, cb){
            var gun = this, user = (gun.back(-1)._).user;
            if(user){
                delete user.is;
                delete user._.is;
                delete user._.sea;
            }
            if(SEA.window){
                try{var sS = {};
                    sS = window.sessionStorage;
                    delete sS.alias;
                    delete sS.tmp;
                    delete sS.recall;
                }catch(e){};
            }
            return gun;
        }
        // If authenticated user wants to delete his/her account, let's support it!
        User.prototype.delete = async function(alias, pass, cb){
            var gun = this, root = gun.back(-1), user = gun.back('user');
            try {
                user.auth(alias, pass, function(ack){
                    var pub = (user.is||{}).pub;
                    // Delete user data
                    user.map().once(function(){ this.put(null) });
                    // Wipe user data from memory
                    user.leave();
                    (cb || noop)({ok: 0});
                });
            } catch (e) {
                Gun.log('User.delete failed! Error:', e);
            }
            return gun;
        }
        User.prototype.recall = function(opt, cb){
            var gun = this, root = gun.back(-1), tmp;
            opt = opt || {};
            if(opt && opt.sessionStorage){
                if(SEA.window){
                    try{var sS = {};
                        sS = window.sessionStorage;
                        if(sS){
                            (root._).opt.remember = true;
                            ((gun.back('user')._).opt||opt).remember = true;
                            if(sS.recall || (sS.alias && sS.tmp)){
                                root.user().auth(sS.alias, sS.tmp, cb);
                            }
                        }
                    }catch(e){}
                }
                return gun;
            }
            /*
        TODO: copy mhelander's expiry code back in.
        Although, we should check with community,
        should expiry be core or a plugin?
      */
            return gun;
        }
        User.prototype.alive = async function(){
            const gunRoot = this.back(-1)
            try {
                // All is good. Should we do something more with actual recalled data?
                await authRecall(gunRoot)
                return gunRoot._.user._
            } catch (e) {
                const err = 'No session!'
                Gun.log(err)
                throw { err }
            }
        }
        User.prototype.trust = async function(user){
            // TODO: BUG!!! SEA `node` read listener needs to be async, which means core needs to be async too.
            //gun.get('alice').get('age').trust(bob);
            if (Gun.is(user)) {
                user.get('pub').get((ctx, ev) => {
                    console.log(ctx, ev)
                })
            }
        }
        User.prototype.grant = function(to, cb){
            console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
            var gun = this, user = gun.back(-1).user(), pair = user.pair(), path = '';
            gun.back(function(at){ if(at.is){ return } path += (at.get||'') });
            (async function(){
                var enc, sec = await user.get('trust').get(pair.pub).get(path).then();
                sec = await SEA.decrypt(sec, pair);
                if(!sec){
                    sec = SEA.random(16).toString();
                    enc = await SEA.encrypt(sec, pair);
                    user.get('trust').get(pair.pub).get(path).put(enc);
                }
                var pub = to.get('pub').then();
                var epub = to.get('epub').then();
                pub = await pub; epub = await epub;
                var dh = await SEA.secret(epub, pair);
                enc = await SEA.encrypt(sec, dh);
                user.get('trust').get(pub).get(path).put(enc, cb);
            }());
            return gun;
        }
        User.prototype.secret = function(data, cb){
            console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
            var gun = this, user = gun.back(-1).user(), pair = user.pair(), path = '';
            gun.back(function(at){ if(at.is){ return } path += (at.get||'') });
            (async function(){
                var enc, sec = await user.get('trust').get(pair.pub).get(path).then();
                sec = await SEA.decrypt(sec, pair);
                if(!sec){
                    sec = SEA.random(16).toString();
                    enc = await SEA.encrypt(sec, pair);
                    user.get('trust').get(pair.pub).get(path).put(enc);
                }
                enc = await SEA.encrypt(data, sec);
                gun.put(enc, cb);
            }());
            return gun;
        }
        module.exports = User
    })(USE, './create');

    ;USE(function(module){
        const SEA = USE('./sea')
        const Gun = SEA.Gun;
        // After we have a GUN extension to make user registration/login easy, we then need to handle everything else.

        // We do this with a GUN adapter, we first listen to when a gun instance is created (and when its options change)
        Gun.on('opt', function(at){
            if(!at.sea){ // only add SEA once per instance, on the "at" context.
                at.sea = {own: {}};
                at.on('in', security, at); // now listen to all input data, acting as a firewall.
                at.on('out', signature, at); // and output listeners, to encrypt outgoing data.
                at.on('node', each, at);
            }
            this.to.next(at); // make sure to call the "next" middleware adapter.
        });

        // Alright, this next adapter gets run at the per node level in the graph database.
        // This will let us verify that every property on a node has a value signed by a public key we trust.
        // If the signature does not match, the data is just `undefined` so it doesn't get passed on.
        // If it does match, then we transform the in-memory "view" of the data into its plain value (without the signature).
        // Now NOTE! Some data is "system" data, not user data. Example: List of public keys, aliases, etc.
        // This data is self-enforced (the value can only match its ID), but that is handled in the `security` function.
        // From the self-enforced data, we can see all the edges in the graph that belong to a public key.
        // Example: ~ASDF is the ID of a node with ASDF as its public key, signed alias and salt, and
        // its encrypted private key, but it might also have other signed values on it like `profile = <ID>` edge.
        // Using that directed edge's ID, we can then track (in memory) which IDs belong to which keys.
        // Here is a problem: Multiple public keys can "claim" any node's ID, so this is dangerous!
        // This means we should ONLY trust our "friends" (our key ring) public keys, not any ones.
        // I have not yet added that to SEA yet in this alpha release. That is coming soon, but beware in the meanwhile!
        function each(msg){ // TODO: Warning: Need to switch to `gun.on('node')`! Do not use `Gun.on('node'` in your apps!
            // NOTE: THE SECURITY FUNCTION HAS ALREADY VERIFIED THE DATA!!!
            // WE DO NOT NEED TO RE-VERIFY AGAIN, JUST TRANSFORM IT TO PLAINTEXT.
            var to = this.to, vertex = (msg.$._).put, c = 0, d;
            Gun.node.is(msg.put, function(val, key, node){
                // only process if SEA formatted?
                var tmp = Gun.obj.ify(val) || noop;
                if(u !== tmp[':']){
                    node[key] = SEA.opt.unpack(tmp);
                    return;
                }
                if(!SEA.opt.check(val)){ return }
                c++; // for each property on the node
                SEA.verify(val, false, function(data){ c--; // false just extracts the plain data.
                    node[key] = SEA.opt.unpack(data, key, node);; // transform to plain value.
                    if(d && !c && (c = -1)){ to.next(msg) }
                });
            });
            if((d = true) && !c){ to.next(msg) }
        }

        // signature handles data output, it is a proxy to the security function.
        function signature(msg){
            if((msg._||noop).user){
                return this.to.next(msg);
            }
            var ctx = this.as;
            (msg._||(msg._=function(){})).user = ctx.user;
            security.call(this, msg);
        }

        // okay! The security function handles all the heavy lifting.
        // It needs to deal read and write of input and output of system data, account/public key data, and regular data.
        // This is broken down into some pretty clear edge cases, let's go over them:
        function security(msg){
            var at = this.as, sea = at.sea, to = this.to;
            if(at.opt.faith && (msg._||noop).faith){ // you probably shouldn't have faith in this!
                this.to.next(msg); // why do we allow skipping security? I'm very scared about it actually.
                return; // but so that way storage adapters that already verified something can get performance boost. This was a community requested feature. If anybody finds an exploit with it, please report immediately. It should only be exploitable if you have XSS control anyways, which if you do, you can bypass security regardless of this.
            }
            if(msg.get){
                // if there is a request to read data from us, then...
                var soul = msg.get['#'];
                if(soul){ // for now, only allow direct IDs to be read.
                    if(typeof soul !== 'string'){ return to.next(msg) } // do not handle lexical cursors.
                    if('alias' === soul){ // Allow reading the list of usernames/aliases in the system?
                        return to.next(msg); // yes.
                    } else
                    if('~@' === soul.slice(0,2)){ // Allow reading the list of public keys associated with an alias?
                        return to.next(msg); // yes.
                    } else { // Allow reading everything?
                        return to.next(msg); // yes // TODO: No! Make this a callback/event that people can filter on.
                    }
                }
            }
            if(msg.put){
                // potentially parallel async operations!!!
                var check = {}, each = {}, u;
                each.node = function(node, soul){
                    if(Gun.obj.empty(node, '_')){ return check['node'+soul] = 0 } // ignore empty updates, don't reject them.
                    Gun.obj.map(node, each.way, {soul: soul, node: node});
                };
                each.way = function(val, key){
                    var soul = this.soul, node = this.node, tmp;
                    if('_' === key){ return } // ignore meta data
                    if('~@' === soul){  // special case for shared system data, the list of aliases.
                        each.alias(val, key, node, soul); return;
                    }
                    if('~@' === soul.slice(0,2)){ // special case for shared system data, the list of public keys for an alias.
                        each.pubs(val, key, node, soul); return;
                    }
                    if('~' === soul.slice(0,1) && 2 === (tmp = soul.slice(1)).split('.').length){ // special case, account data for a public key.
                        each.pub(val, key, node, soul, tmp, (msg._||noop).user); return;
                    }
                    each.any(val, key, node, soul, (msg._||noop).user); return;
                    return each.end({err: "No other data allowed!"});
                };
                each.alias = function(val, key, node, soul){ // Example: {_:#~@, ~@alice: {#~@alice}}
                    if(!val){ return each.end({err: "Data must exist!"}) } // data MUST exist
                    if('~@'+key === Gun.val.link.is(val)){ return check['alias'+key] = 0 } // in fact, it must be EXACTLY equal to itself
                    each.end({err: "Mismatching alias."}); // if it isn't, reject.
                };
                each.pubs = function(val, key, node, soul){ // Example: {_:#~@alice, ~asdf: {#~asdf}}
                    if(!val){ return each.end({err: "Alias must exist!"}) } // data MUST exist
                    if(key === Gun.val.link.is(val)){ return check['pubs'+soul+key] = 0 } // and the ID must be EXACTLY equal to its property
                    each.end({err: "Alias must match!"}); // that way nobody can tamper with the list of public keys.
                };
                each.pub = function(val, key, node, soul, pub, user){ var tmp; // Example: {_:#~asdf, hello:'world'~fdsa}}
                    if('pub' === key){
                        if(val === pub){ return (check['pub'+soul+key] = 0) } // the account MUST match `pub` property that equals the ID of the public key.
                        return each.end({err: "Account must match!"});
                    }
                    check['user'+soul+key] = 1;
                    if(Gun.is(msg.$) && user && user.is && pub === user.is.pub){
                        SEA.sign(SEA.opt.prep(tmp = SEA.opt.parse(val), key, node, soul), (user._).sea, function(data){ var rel;
                            if(u === data){ return each.end({err: SEA.err || 'Pub signature fail.'}) }
                            if(rel = Gun.val.link.is(val)){
                                (at.sea.own[rel] = at.sea.own[rel] || {})[pub] = true;
                            }
                            node[key] = JSON.stringify({':': SEA.opt.unpack(data.m), '~': data.s});
                            check['user'+soul+key] = 0;
                            each.end({ok: 1});
                        }, {check: SEA.opt.pack(tmp, key, node, soul), raw: 1});
                        return;
                    }
                    SEA.verify(SEA.opt.pack(val,key,node,soul), pub, function(data){ var rel, tmp;
                        data = SEA.opt.unpack(data, key, node);
                        if(u === data){ // make sure the signature matches the account it claims to be on.
                            return each.end({err: "Unverified data."}); // reject any updates that are signed with a mismatched account.
                        }
                        if((rel = Gun.val.link.is(data)) && pub === SEA.opt.pub(rel)){
                            (at.sea.own[rel] = at.sea.own[rel] || {})[pub] = true;
                        }
                        check['user'+soul+key] = 0;
                        each.end({ok: 1});
                    });
                };
                each.any = function(val, key, node, soul, user){ var tmp, pub;
                    if(!(pub = SEA.opt.pub(soul))){
                        if(at.opt.secure){
                            each.end({err: "Soul is missing public key at '" + key + "'."});
                            return;
                        }
                        // TODO: Ask community if should auto-sign non user-graph data.
                        check['any'+soul+key] = 1;
                        at.on('secure', function(msg){ this.off();
                            check['any'+soul+key] = 0;
                            if(at.opt.secure){ msg = null }
                            each.end(msg || {err: "Data cannot be modified."});
                        }).on.on('secure', msg);
                        //each.end({err: "Data cannot be modified."});
                        return;
                    }
                    if(Gun.is(msg.$) && user && user.is && pub === user.is.pub){
                        /*var other = Gun.obj.map(at.sea.own[soul], function(v, p){
              if((user.is||{}).pub !== p){ return p }
            });
            if(other){
              each.any(val, key, node, soul);
              return;
            }*/
                        check['any'+soul+key] = 1;
                        SEA.sign(SEA.opt.prep(tmp = SEA.opt.parse(val), key, node, soul), (user._).sea, function(data){
                            if(u === data){ return each.end({err: 'My signature fail.'}) }
                            node[key] = JSON.stringify({':': SEA.opt.unpack(data.m), '~': data.s});
                            check['any'+soul+key] = 0;
                            each.end({ok: 1});
                        }, {check: SEA.opt.pack(tmp, key, node, soul), raw: 1});
                        return;
                    }
                    check['any'+soul+key] = 1;
                    SEA.verify(SEA.opt.pack(val,key,node,soul), pub, function(data){ var rel;
                        data = SEA.opt.unpack(data, key, node);
                        if(u === data){ return each.end({err: "Mismatched owner on '" + key + "'."}) } // thanks @rogowski !
                        if((rel = Gun.val.link.is(data)) && pub === SEA.opt.pub(rel)){
                            (at.sea.own[rel] = at.sea.own[rel] || {})[pub] = true;
                        }
                        check['any'+soul+key] = 0;
                        each.end({ok: 1});
                    });
                }
                each.end = function(ctx){ // TODO: Can't you just switch this to each.end = cb?
                    if(each.err){ return }
                    if((each.err = ctx.err) || ctx.no){
                        console.log('NO!', each.err, msg.put); // 451 mistmached data FOR MARTTI
                        return;
                    }
                    if(!each.end.ed){ return }
                    if(Gun.obj.map(check, function(no){
                        if(no){ return true }
                    })){ return }
                    (msg._||{}).user = at.user || security; // already been through firewall, does not need to again on out.
                    to.next(msg);
                };
                Gun.obj.map(msg.put, each.node);
                each.end({end: each.end.ed = true});
                return; // need to manually call next after async.
            }
            to.next(msg); // pass forward any data we do not know how to handle or process (this allows custom security protocols).
        }
        SEA.opt.pub = function(s){
            if(!s){ return }
            s = s.split('~');
            if(!s || !(s = s[1])){ return }
            s = s.split('.');
            if(!s || 2 > s.length){ return }
            s = s.slice(0,2).join('.');
            return s;
        }
        SEA.opt.prep = function(d,k, n,s){ // prep for signing
            return {'#':s,'.':k,':':SEA.opt.parse(d),'>':Gun.state.is(n, k)};
        }
        SEA.opt.pack = function(d,k, n,s){ // pack for verifying
            if(SEA.opt.check(d)){ return d }
            var meta = (Gun.obj.ify(d)||noop), sig = meta['~'];
            return sig? {m: {'#':s,'.':k,':':meta[':'],'>':Gun.state.is(n, k)}, s: sig} : d;
        }
        SEA.opt.unpack = function(d, k, n){ var tmp;
            if(u === d){ return }
            if(d && (u !== (tmp = d[':']))){ return tmp }
            if(!k || !n){ return }
            if(d === n[k]){ return d }
            if(!SEA.opt.check(n[k])){ return d }
            var soul = Gun.node.soul(n), s = Gun.state.is(n, k);
            if(d && 4 === d.length && soul === d[0] && k === d[1] && fl(s) === fl(d[3])){
                return d[2];
            }
            if(s < SEA.opt.shuffle_attack){
                return d;
            }
        }
        SEA.opt.shuffle_attack = 1546329600000; // Jan 1, 2019
        var noop = function(){}, u;
        var fl = Math.floor; // TODO: Still need to fix inconsistent state issue.
        var rel_is = Gun.val.rel.is;
        // TODO: Potential bug? If pub/priv key starts with `-`? IDK how possible.

    })(USE, './index');
}());;(function(){
    function as(el, gun, cb, opt){
        el = $(el);
        if(gun === as.gui && as.el && as.el.is(el)){ return }

        opt = opt || {};
        opt.match = opt.match || '{{ ';
        opt.end = opt.end || ' }}';
        ;(function(){ // experimental
            function nest(t, s,e, r, i,tmp,u){
                if(r && !r.length){ return t||'' }
                if(!t){ return [] }
                e = e || s;
                i = t.indexOf(s, i||0);
                if(0 > i){ return [] }
                tmp = t.indexOf(e, i+1);
                if(!r){ return [t.slice(i+s.length, tmp)].concat(nest(t, s,e, r, tmp,tmp,u)) }
                return t.slice(0,i)+r[0]+nest(t.slice(tmp+e.length), s,e, r.slice(1), 0,tmp,u);
            }

            /* experimental */
            function template(tag, attr){
                var html = (tag = $(tag))[0].outerHTML, sub, tmp;
                if(html && (0 > html.indexOf(opt.match))){ return }
                if(!attr){
                    $.each(tag[0].attributes, function(i,v){
                        if(!v){ return }
                        if(!nest(v.value, opt.match, opt.end).length){ return }
                        template(tag, v.name)
                    });
                    if((sub = tag.children()).length){
                        return sub.each(function(){ template(this) });
                    }
                }
                var data = [], plate = attr? tag.attr(attr) : tag.html();
                tmp = nest(plate, opt.match, opt.end);
                if(!tmp.length){ return }
                $.each(tmp, function(pos, match){
                    var expr = match.split(' ');
                    var path = (expr[0]).split('.');
                    if(expr = expr.slice(1).join(' ')){
                        expr = new Function("_", "b", "return (_)" + expr);
                    }
                    var val = (expr && expr('')) || '';
                    data.push(val);
                    if(!attr){ tag.text(val) }

                    var ref = gun, sup = [], tmp;
                    if(tmp = tag.attr('name')){ sup.push(tmp) }
                    tag.parents("[name]").each(function(){
                        sup.push($(this).attr('name'));
                    });
                    $.each(path = sup.reverse().concat(path), function(i,v){
                        ref = ref.get(v);
                    });
                    ref.on(function(v){
                        v = data[pos] = expr? expr(v) : v;
                        var tmp = nest(plate, opt.match, opt.end, data);
                        if(attr){
                            tag.attr(attr, tmp);
                        } else {
                            tag.text(tmp);
                        }
                    });
                });
            }
            template(el);

        }());

        as.gui = gun;
        as.el = el;
        if(el.data('as')){
            el.html(el.data('as').fresh);
        } else {
            el.data('as', {
                fresh: el.html()
            })
        }
        el.find("[name]").each(function(){
            if($(this).find("[name]").length){ return }
            var name = $(this),
                parents = name.parents("[name]"),
                path = [],
                ref = gun;

            path.push(name.attr('name'));
            parents.each(function(){
                path.push($(this).attr('name'));
            });
            path = path.reverse();

            path.forEach(function(key){
                if('#' === key){
                    ref = ref.map()
                } else {
                    ref = ref.get(key);
                }
            });

            var many = path.slice().reverse().indexOf('#'), model;
            many = (0 < ++many)? many : false;
            if(many){
                model = name.closest("[name='#']");
                model = model.data('model') || model.data('model', {$: model.clone(), on: model.parent(), has: {}}).hide().data('model');
            }

            ref.get(function(at){
                var data = at.put, key = at.get, gui = at.gun || at.$, ui = name, back;
                if(model){
                    ui = model.has[(gui._).id];
                    if(!ui){
                        back = gui.back(many - 1);
                        ui = model.has[(back._).id];
                        if(!ui){
                            if(!(back._).get){ return }
                            ui = (model.has[(back._).id] = model.$.clone(true).prependTo(model.on));
                        }
                        ui = ui.find("[name='"+key+"']").first();
                        model.has[(gui._).id] = ui;
                    }
                }
                ui.data('gun', gui);
                if(ui.data('was') === data){ return }
                if(many && ui.is('.sort')){
                    var up = ui.closest("[name='#']");
                    var tmp = as.sort(data, up.parent().children().last());
                    tmp? up.insertAfter(tmp) : up.prependTo(up.parent());
                }
                if(as.lock === gui){ return }
                if(!(data && data instanceof Object)){
                    (ui[0] && u === ui[0].value)? ui.text(data) : ui.val(data);
                }
                ui.data('was', data);
                if(cb){
                    cb(data, key, ui);
                }
            });
        });
    }
    as.wait = function(cb, wait, to){
        return function(a,b,c){
            var me = as.typing = this;
            clearTimeout(to);
            to = setTimeout(function(){
                cb.call(me, a,b,c);
                as.typing = me = false;
            }, wait || 200);
        }
    }
    as.sort = function sort(num, li){ return parseFloat(num) >= parseFloat($(li).find('.sort').text() || -Infinity)? li : sort(num, li.prev()) }
    $(document).on('keyup', 'input, textarea, [contenteditable]', as.wait(function(){
        var el = $(this);
        var data = (el[0] && u === el[0].value)? el.text() : el.val();
        var g = el.data('gun');
        if(!g){ return }
        as.lock = g;
        g.put(data);
    }, 99));
    //$(document).on('submit', 'form', function(e){ e.preventDefault() });
    var u;
    window.as = as;
    $.as = as;
}());

;(function(){
    $(document).on('click', 'a, button', function(e){
        var tmp = $(this).attr('href') || '';
        if(0 === tmp.indexOf('http')){ return }
        e.preventDefault();
        r(tmp);
    });
    function r(href){
        if(!href){ return }
        if(href[0] == '#'){ href = href.slice(1) }
        var h = href.split('/')[0];
        $('.page').hide();
        $('#' + h).show();
        if(r.on === h){ return }
        location.hash = href;
        (r.page[h] || {on:function(){}}).on();
        r.on = h;
        return r;
    };
    r.page = function(h, cb){
        r.page[h] = r.page[h] || {on: cb};
        return r;
    }
    r.render = function(id, model, onto, data){
        var $data = $(
            $('#' + id).get(0) ||
            $('.model').find(model).clone(true).attr('id', id).appendTo(onto)
        );
        $.each(data, function(field, val){
            if($.isPlainObject(val)){ return }
            $data.find("[name='" + field + "']").val(val).text(val);
        });
        return $data;
    }
    window.onhashchange = function(){ r(location.hash.slice(1)) };
    $.as && ($.as.route = r);
    if(window.as){
        as.route = r;
    } else {
        $.route = r;
    }
}());

;$(function(){
    $('.page').not(':first').hide();
    $.as.route(location.hash.slice(1));
    $(JOY.start = JOY.start || function(){ $.as(document, gun, null, JOY.opt) });

    if($('body').attr('peers')){ (console.warn || console.log)('Warning: Please upgrade <body peers=""> to https://github.com/eraeco/joydb#peers !') }

});
;(function(){ // need to isolate into separate module!
    var joy = window.JOY = function(){};
    joy.auth = function(a,b,cb,o){/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
        !function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
        }return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
            marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
            padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});;(function(){

            /* UNBUILD */
            var root;
            if(typeof window !== "undefined"){ root = window }
            if(typeof global !== "undefined"){ root = global }
            root = root || {};
            var console = root.console || {log: function(){}};
            function USE(arg, req){
                return req? require(arg) : arg.slice? USE[R(arg)] : function(mod, path){
                    arg(mod = {exports: {}});
                    USE[R(path)] = mod.exports;
                }
                function R(p){
                    return p.split('/').slice(-1).toString().replace('.js','');
                }
            }
            if(typeof module !== "undefined"){ var common = module }
            /* UNBUILD */

            ;USE(function(module){
                // Generic javascript utilities.
                var Type = {};
                //Type.fns = Type.fn = {is: function(fn){ return (!!fn && fn instanceof Function) }}
                Type.fn = {is: function(fn){ return (!!fn && 'function' == typeof fn) }}
                Type.bi = {is: function(b){ return (b instanceof Boolean || typeof b == 'boolean') }}
                Type.num = {is: function(n){ return !list_is(n) && ((n - parseFloat(n) + 1) >= 0 || Infinity === n || -Infinity === n) }}
                Type.text = {is: function(t){ return (typeof t == 'string') }}
                Type.text.ify = function(t){
                    if(Type.text.is(t)){ return t }
                    if(typeof JSON !== "undefined"){ return JSON.stringify(t) }
                    return (t && t.toString)? t.toString() : t;
                }
                Type.text.random = function(l, c){
                    var s = '';
                    l = l || 24; // you are not going to make a 0 length random number, so no need to check type
                    c = c || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz';
                    while(l > 0){ s += c.charAt(Math.floor(Math.random() * c.length)); l-- }
                    return s;
                }
                Type.text.match = function(t, o){ var tmp, u;
                    if('string' !== typeof t){ return false }
                    if('string' == typeof o){ o = {'=': o} }
                    o = o || {};
                    tmp = (o['='] || o['*'] || o['>'] || o['<']);
                    if(t === tmp){ return true }
                    if(u !== o['=']){ return false }
                    tmp = (o['*'] || o['>'] || o['<']);
                    if(t.slice(0, (tmp||'').length) === tmp){ return true }
                    if(u !== o['*']){ return false }
                    if(u !== o['>'] && u !== o['<']){
                        return (t >= o['>'] && t <= o['<'])? true : false;
                    }
                    if(u !== o['>'] && t >= o['>']){ return true }
                    if(u !== o['<'] && t <= o['<']){ return true }
                    return false;
                }
                Type.list = {is: function(l){ return (l instanceof Array) }}
                Type.list.slit = Array.prototype.slice;
                Type.list.sort = function(k){ // creates a new sort function based off some key
                    return function(A,B){
                        if(!A || !B){ return 0 } A = A[k]; B = B[k];
                        if(A < B){ return -1 }else if(A > B){ return 1 }
                        else { return 0 }
                    }
                }
                Type.list.map = function(l, c, _){ return obj_map(l, c, _) }
                Type.list.index = 1; // change this to 0 if you want non-logical, non-mathematical, non-matrix, non-convenient array notation
                Type.obj = {is: function(o){ return o? (o instanceof Object && o.constructor === Object) || Object.prototype.toString.call(o).match(/^\[object (\w+)\]$/)[1] === 'Object' : false }}
                Type.obj.put = function(o, k, v){ return (o||{})[k] = v, o }
                Type.obj.has = function(o, k){ return o && Object.prototype.hasOwnProperty.call(o, k) }
                Type.obj.del = function(o, k){
                    if(!o){ return }
                    o[k] = null;
                    delete o[k];
                    return o;
                }
                Type.obj.as = function(o, k, v, u){ return o[k] = o[k] || (u === v? {} : v) }
                Type.obj.ify = function(o){
                    if(obj_is(o)){ return o }
                    try{o = JSON.parse(o);
                    }catch(e){o={}};
                    return o;
                }
                ;(function(){ var u;
                    function map(v,k){
                        if(obj_has(this,k) && u !== this[k]){ return }
                        this[k] = v;
                    }
                    Type.obj.to = function(from, to){
                        to = to || {};
                        obj_map(from, map, to);
                        return to;
                    }
                }());
                Type.obj.copy = function(o){ // because http://web.archive.org/web/20140328224025/http://jsperf.com/cloning-an-object/2
                    return !o? o : JSON.parse(JSON.stringify(o)); // is shockingly faster than anything else, and our data has to be a subset of JSON anyways!
                }
                ;(function(){
                    function empty(v,i){ var n = this.n;
                        if(n && (i === n || (obj_is(n) && obj_has(n, i)))){ return }
                        if(i){ return true }
                    }
                    Type.obj.empty = function(o, n){
                        if(!o){ return true }
                        return obj_map(o,empty,{n:n})? false : true;
                    }
                }());
                ;(function(){
                    function t(k,v){
                        if(2 === arguments.length){
                            t.r = t.r || {};
                            t.r[k] = v;
                            return;
                        } t.r = t.r || [];
                        t.r.push(k);
                    };
                    var keys = Object.keys, map;
                    Object.keys = Object.keys || function(o){ return map(o, function(v,k,t){t(k)}) }
                    Type.obj.map = map = function(l, c, _){
                        var u, i = 0, x, r, ll, lle, f = fn_is(c);
                        t.r = null;
                        if(keys && obj_is(l)){
                            ll = keys(l); lle = true;
                        }
                        if(list_is(l) || ll){
                            x = (ll || l).length;
                            for(;i < x; i++){
                                var ii = (i + Type.list.index);
                                if(f){
                                    r = lle? c.call(_ || this, l[ll[i]], ll[i], t) : c.call(_ || this, l[i], ii, t);
                                    if(r !== u){ return r }
                                } else {
                                    //if(Type.test.is(c,l[i])){ return ii } // should implement deep equality testing!
                                    if(c === l[lle? ll[i] : i]){ return ll? ll[i] : ii } // use this for now
                                }
                            }
                        } else {
                            for(i in l){
                                if(f){
                                    if(obj_has(l,i)){
                                        r = _? c.call(_, l[i], i, t) : c(l[i], i, t);
                                        if(r !== u){ return r }
                                    }
                                } else {
                                    //if(a.test.is(c,l[i])){ return i } // should implement deep equality testing!
                                    if(c === l[i]){ return i } // use this for now
                                }
                            }
                        }
                        return f? t.r : Type.list.index? 0 : -1;
                    }
                }());
                Type.time = {};
                Type.time.is = function(t){ return t? t instanceof Date : (+new Date().getTime()) }

                var fn_is = Type.fn.is;
                var list_is = Type.list.is;
                var obj = Type.obj, obj_is = obj.is, obj_has = obj.has, obj_map = obj.map;
                module.exports = Type;
            })(USE, './type');

            ;USE(function(module){
                // On event emitter generic javascript utility.
                module.exports = function onto(tag, arg, as){
                    if(!tag){ return {to: onto} }
                    var u, tag = (this.tag || (this.tag = {}))[tag] ||
                        (this.tag[tag] = {tag: tag, to: onto._ = {
                                next: function(arg){ var tmp;
                                    if((tmp = this.to)){
                                        tmp.next(arg);
                                    }}
                            }});
                    if(arg instanceof Function){
                        var be = {
                            off: onto.off ||
                                (onto.off = function(){
                                    if(this.next === onto._.next){ return !0 }
                                    if(this === this.the.last){
                                        this.the.last = this.back;
                                    }
                                    this.to.back = this.back;
                                    this.next = onto._.next;
                                    this.back.to = this.to;
                                    if(this.the.last === this.the){
                                        delete this.on.tag[this.the.tag];
                                    }
                                }),
                            to: onto._,
                            next: arg,
                            the: tag,
                            on: this,
                            as: as,
                        };
                        (be.back = tag.last || tag).to = be;
                        return tag.last = be;
                    }
                    if((tag = tag.to) && u !== arg){ tag.next(arg) }
                    return tag;
                };
            })(USE, './onto');

            ;USE(function(module){
                /* Based on the Hypothetical Amnesia Machine thought experiment */
                function HAM(machineState, incomingState, currentState, incomingValue, currentValue){
                    if(machineState < incomingState){
                        return {defer: true}; // the incoming value is outside the boundary of the machine's state, it must be reprocessed in another state.
                    }
                    if(incomingState < currentState){
                        return {historical: true}; // the incoming value is within the boundary of the machine's state, but not within the range.

                    }
                    if(currentState < incomingState){
                        return {converge: true, incoming: true}; // the incoming value is within both the boundary and the range of the machine's state.

                    }
                    if(incomingState === currentState){
                        incomingValue = Lexical(incomingValue) || "";
                        currentValue = Lexical(currentValue) || "";
                        if(incomingValue === currentValue){ // Note: while these are practically the same, the deltas could be technically different
                            return {state: true};
                        }
                        /*
					The following is a naive implementation, but will always work.
					Never change it unless you have specific needs that absolutely require it.
					If changed, your data will diverge unless you guarantee every peer's algorithm has also been changed to be the same.
					As a result, it is highly discouraged to modify despite the fact that it is naive,
					because convergence (data integrity) is generally more important.
					Any difference in this algorithm must be given a new and different name.
				*/
                        if(incomingValue < currentValue){ // Lexical only works on simple value types!
                            return {converge: true, current: true};
                        }
                        if(currentValue < incomingValue){ // Lexical only works on simple value types!
                            return {converge: true, incoming: true};
                        }
                    }
                    return {err: "Invalid CRDT Data: "+ incomingValue +" to "+ currentValue +" at "+ incomingState +" to "+ currentState +"!"};
                }
                if(typeof JSON === 'undefined'){
                    throw new Error(
                        'JSON is not included in this browser. Please load it first: ' +
                        'ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js'
                    );
                }
                var Lexical = JSON.stringify, undefined;
                module.exports = HAM;
            })(USE, './HAM');

            ;USE(function(module){
                var Type = USE('./type');
                var Val = {};
                Val.is = function(v){ // Valid values are a subset of JSON: null, binary, number (!Infinity), text, or a soul relation. Arrays need special algorithms to handle concurrency, so they are not supported directly. Use an extension that supports them if needed but research their problems first.
                    if(v === u){ return false }
                    if(v === null){ return true } // "deletes", nulling out keys.
                    if(v === Infinity){ return false } // we want this to be, but JSON does not support it, sad face.
                    if(text_is(v) // by "text" we mean strings.
                        || bi_is(v) // by "binary" we mean boolean.
                        || num_is(v)){ // by "number" we mean integers or decimals.
                        return true; // simple values are valid.
                    }
                    return Val.link.is(v) || false; // is the value a soul relation? Then it is valid and return it. If not, everything else remaining is an invalid data type. Custom extensions can be built on top of these primitives to support other types.
                }
                Val.link = Val.rel = {_: '#'};
                ;(function(){
                    Val.link.is = function(v){ // this defines whether an object is a soul relation or not, they look like this: {'#': 'UUID'}
                        if(v && v[rel_] && !v._ && obj_is(v)){ // must be an object.
                            var o = {};
                            obj_map(v, map, o);
                            if(o.id){ // a valid id was found.
                                return o.id; // yay! Return it.
                            }
                        }
                        return false; // the value was not a valid soul relation.
                    }
                    function map(s, k){ var o = this; // map over the object...
                        if(o.id){ return o.id = false } // if ID is already defined AND we're still looping through the object, it is considered invalid.
                        if(k == rel_ && text_is(s)){ // the key should be '#' and have a text value.
                            o.id = s; // we found the soul!
                        } else {
                            return o.id = false; // if there exists anything else on the object that isn't the soul, then it is considered invalid.
                        }
                    }
                }());
                Val.link.ify = function(t){ return obj_put({}, rel_, t) } // convert a soul into a relation and return it.
                Type.obj.has._ = '.';
                var rel_ = Val.link._, u;
                var bi_is = Type.bi.is;
                var num_is = Type.num.is;
                var text_is = Type.text.is;
                var obj = Type.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
                module.exports = Val;
            })(USE, './val');

            ;USE(function(module){
                var Type = USE('./type');
                var Val = USE('./val');
                var Node = {_: '_'};
                Node.soul = function(n, o){ return (n && n._ && n._[o || soul_]) } // convenience function to check to see if there is a soul on a node and return it.
                Node.soul.ify = function(n, o){ // put a soul on an object.
                    o = (typeof o === 'string')? {soul: o} : o || {};
                    n = n || {}; // make sure it exists.
                    n._ = n._ || {}; // make sure meta exists.
                    n._[soul_] = o.soul || n._[soul_] || text_random(); // put the soul on it.
                    return n;
                }
                Node.soul._ = Val.link._;
                ;(function(){
                    Node.is = function(n, cb, as){ var s; // checks to see if an object is a valid node.
                        if(!obj_is(n)){ return false } // must be an object.
                        if(s = Node.soul(n)){ // must have a soul on it.
                            return !obj_map(n, map, {as:as,cb:cb,s:s,n:n});
                        }
                        return false; // nope! This was not a valid node.
                    }
                    function map(v, k){ // we invert this because the way we check for this is via a negation.
                        if(k === Node._){ return } // skip over the metadata.
                        if(!Val.is(v)){ return true } // it is true that this is an invalid node.
                        if(this.cb){ this.cb.call(this.as, v, k, this.n, this.s) } // optionally callback each key/value.
                    }
                }());
                ;(function(){
                    Node.ify = function(obj, o, as){ // returns a node from a shallow object.
                        if(!o){ o = {} }
                        else if(typeof o === 'string'){ o = {soul: o} }
                        else if(o instanceof Function){ o = {map: o} }
                        if(o.map){ o.node = o.map.call(as, obj, u, o.node || {}) }
                        if(o.node = Node.soul.ify(o.node || {}, o)){
                            obj_map(obj, map, {o:o,as:as});
                        }
                        return o.node; // This will only be a valid node if the object wasn't already deep!
                    }
                    function map(v, k){ var o = this.o, tmp, u; // iterate over each key/value.
                        if(o.map){
                            tmp = o.map.call(this.as, v, ''+k, o.node);
                            if(u === tmp){
                                obj_del(o.node, k);
                            } else
                            if(o.node){ o.node[k] = tmp }
                            return;
                        }
                        if(Val.is(v)){
                            o.node[k] = v;
                        }
                    }
                }());
                var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_map = obj.map;
                var text = Type.text, text_random = text.random;
                var soul_ = Node.soul._;
                var u;
                module.exports = Node;
            })(USE, './node');

            ;USE(function(module){
                var Type = USE('./type');
                var Node = USE('./node');
                function State(){
                    var t;
                    /*if(perf){
				t = start + perf.now(); // Danger: Accuracy decays significantly over time, even if precise.
			} else {*/
                    t = time();
                    //}
                    if(last < t){
                        return N = 0, last = t + State.drift;
                    }
                    return last = t + ((N += 1) / D) + State.drift;
                }
                var time = Type.time.is, last = -Infinity, N = 0, D = 1000; // WARNING! In the future, on machines that are D times faster than 2016AD machines, you will want to increase D by another several orders of magnitude so the processing speed never out paces the decimal resolution (increasing an integer effects the state accuracy).
                var perf = (typeof performance !== 'undefined')? (performance.timing && performance) : false, start = (perf && perf.timing && perf.timing.navigationStart) || (perf = false);
                State._ = '>';
                State.drift = 0;
                State.is = function(n, k, o){ // convenience function to get the state on a key on a node and return it.
                    var tmp = (k && n && n[N_] && n[N_][State._]) || o;
                    if(!tmp){ return }
                    return num_is(tmp = tmp[k])? tmp : -Infinity;
                }
                State.lex = function(){ return State().toString(36).replace('.','') }
                State.ify = function(n, k, s, v, soul){ // put a key's state on a node.
                    if(!n || !n[N_]){ // reject if it is not node-like.
                        if(!soul){ // unless they passed a soul
                            return;
                        }
                        n = Node.soul.ify(n, soul); // then make it so!
                    }
                    var tmp = obj_as(n[N_], State._); // grab the states data.
                    if(u !== k && k !== N_){
                        if(num_is(s)){
                            tmp[k] = s; // add the valid state.
                        }
                        if(u !== v){ // Note: Not its job to check for valid values!
                            n[k] = v;
                        }
                    }
                    return n;
                }
                State.to = function(from, k, to){
                    var val = (from||{})[k];
                    if(obj_is(val)){
                        val = obj_copy(val);
                    }
                    return State.ify(to, k, State.is(from, k), val, Node.soul(from));
                }
                ;(function(){
                    State.map = function(cb, s, as){ var u; // for use with Node.ify
                        var o = obj_is(o = cb || s)? o : null;
                        cb = fn_is(cb = cb || s)? cb : null;
                        if(o && !cb){
                            s = num_is(s)? s : State();
                            o[N_] = o[N_] || {};
                            obj_map(o, map, {o:o,s:s});
                            return o;
                        }
                        as = as || obj_is(s)? s : u;
                        s = num_is(s)? s : State();
                        return function(v, k, o, opt){
                            if(!cb){
                                map.call({o: o, s: s}, v,k);
                                return v;
                            }
                            cb.call(as || this || {}, v, k, o, opt);
                            if(obj_has(o,k) && u === o[k]){ return }
                            map.call({o: o, s: s}, v,k);
                        }
                    }
                    function map(v,k){
                        if(N_ === k){ return }
                        State.ify(this.o, k, this.s) ;
                    }
                }());
                var obj = Type.obj, obj_as = obj.as, obj_has = obj.has, obj_is = obj.is, obj_map = obj.map, obj_copy = obj.copy;
                var num = Type.num, num_is = num.is;
                var fn = Type.fn, fn_is = fn.is;
                var N_ = Node._, u;
                module.exports = State;
            })(USE, './state');

            ;USE(function(module){
                var Type = USE('./type');
                var Val = USE('./val');
                var Node = USE('./node');
                var Graph = {};
                ;(function(){
                    Graph.is = function(g, cb, fn, as){ // checks to see if an object is a valid graph.
                        if(!g || !obj_is(g) || obj_empty(g)){ return false } // must be an object.
                        return !obj_map(g, map, {cb:cb,fn:fn,as:as}); // makes sure it wasn't an empty object.
                    }
                    function map(n, s){ // we invert this because the way'? we check for this is via a negation.
                        if(!n || s !== Node.soul(n) || !Node.is(n, this.fn, this.as)){ return true } // it is true that this is an invalid graph.
                        if(!this.cb){ return }
                        nf.n = n; nf.as = this.as; // sequential race conditions aren't races.
                        this.cb.call(nf.as, n, s, nf);
                    }
                    function nf(fn){ // optional callback for each node.
                        if(fn){ Node.is(nf.n, fn, nf.as) } // where we then have an optional callback for each key/value.
                    }
                }());
                ;(function(){
                    Graph.ify = function(obj, env, as){
                        var at = {path: [], obj: obj};
                        if(!env){
                            env = {};
                        } else
                        if(typeof env === 'string'){
                            env = {soul: env};
                        } else
                        if(env instanceof Function){
                            env.map = env;
                        }
                        if(env.soul){
                            at.link = Val.link.ify(env.soul);
                        }
                        env.shell = (as||{}).shell;
                        env.graph = env.graph || {};
                        env.seen = env.seen || [];
                        env.as = env.as || as;
                        node(env, at);
                        env.root = at.node;
                        return env.graph;
                    }
                    function node(env, at){ var tmp;
                        if(tmp = seen(env, at)){ return tmp }
                        at.env = env;
                        at.soul = soul;
                        if(Node.ify(at.obj, map, at)){
                            at.link = at.link || Val.link.ify(Node.soul(at.node));
                            if(at.obj !== env.shell){
                                env.graph[Val.link.is(at.link)] = at.node;
                            }
                        }
                        return at;
                    }
                    function map(v,k,n){
                        var at = this, env = at.env, is, tmp;
                        if(Node._ === k && obj_has(v,Val.link._)){
                            return n._; // TODO: Bug?
                        }
                        if(!(is = valid(v,k,n, at,env))){ return }
                        if(!k){
                            at.node = at.node || n || {};
                            if(obj_has(v, Node._) && Node.soul(v)){ // ? for safety ?
                                at.node._ = obj_copy(v._);
                            }
                            at.node = Node.soul.ify(at.node, Val.link.is(at.link));
                            at.link = at.link || Val.link.ify(Node.soul(at.node));
                        }
                        if(tmp = env.map){
                            tmp.call(env.as || {}, v,k,n, at);
                            if(obj_has(n,k)){
                                v = n[k];
                                if(u === v){
                                    obj_del(n, k);
                                    return;
                                }
                                if(!(is = valid(v,k,n, at,env))){ return }
                            }
                        }
                        if(!k){ return at.node }
                        if(true === is){
                            return v;
                        }
                        tmp = node(env, {obj: v, path: at.path.concat(k)});
                        if(!tmp.node){ return }
                        return tmp.link; //{'#': Node.soul(tmp.node)};
                    }
                    function soul(id){ var at = this;
                        var prev = Val.link.is(at.link), graph = at.env.graph;
                        at.link = at.link || Val.link.ify(id);
                        at.link[Val.link._] = id;
                        if(at.node && at.node[Node._]){
                            at.node[Node._][Val.link._] = id;
                        }
                        if(obj_has(graph, prev)){
                            graph[id] = graph[prev];
                            obj_del(graph, prev);
                        }
                    }
                    function valid(v,k,n, at,env){ var tmp;
                        if(Val.is(v)){ return true }
                        if(obj_is(v)){ return 1 }
                        if(tmp = env.invalid){
                            v = tmp.call(env.as || {}, v,k,n);
                            return valid(v,k,n, at,env);
                        }
                        env.err = "Invalid value at '" + at.path.concat(k).join('.') + "'!";
                        if(Type.list.is(v)){ env.err += " Use `.set(item)` instead of an Array." }
                    }
                    function seen(env, at){
                        var arr = env.seen, i = arr.length, has;
                        while(i--){ has = arr[i];
                            if(at.obj === has.obj){ return has }
                        }
                        arr.push(at);
                    }
                }());
                Graph.node = function(node){
                    var soul = Node.soul(node);
                    if(!soul){ return }
                    return obj_put({}, soul, node);
                }
                ;(function(){
                    Graph.to = function(graph, root, opt){
                        if(!graph){ return }
                        var obj = {};
                        opt = opt || {seen: {}};
                        obj_map(graph[root], map, {obj:obj, graph: graph, opt: opt});
                        return obj;
                    }
                    function map(v,k){ var tmp, obj;
                        if(Node._ === k){
                            if(obj_empty(v, Val.link._)){
                                return;
                            }
                            this.obj[k] = obj_copy(v);
                            return;
                        }
                        if(!(tmp = Val.link.is(v))){
                            this.obj[k] = v;
                            return;
                        }
                        if(obj = this.opt.seen[tmp]){
                            this.obj[k] = obj;
                            return;
                        }
                        this.obj[k] = this.opt.seen[tmp] = Graph.to(this.graph, tmp, this.opt);
                    }
                }());
                var fn_is = Type.fn.is;
                var obj = Type.obj, obj_is = obj.is, obj_del = obj.del, obj_has = obj.has, obj_empty = obj.empty, obj_put = obj.put, obj_map = obj.map, obj_copy = obj.copy;
                var u;
                module.exports = Graph;
            })(USE, './graph');

            ;USE(function(module){
                // request / response module, for asking and acking messages.
                USE('./onto'); // depends upon onto!
                module.exports = function ask(cb, as){
                    if(!this.on){ return }
                    if(!(cb instanceof Function)){
                        if(!cb || !as){ return }
                        var id = cb['#'] || cb, tmp = (this.tag||empty)[id];
                        if(!tmp){ return }
                        tmp = this.on(id, as);
                        clearTimeout(tmp.err);
                        return true;
                    }
                    var id = (as && as['#']) || Math.random().toString(36).slice(2);
                    if(!cb){ return id }
                    var to = this.on(id, cb, as);
                    to.err = to.err || setTimeout(function(){
                        to.next({err: "Error: No ACK received yet.", lack: true});
                        to.off();
                    }, (this.opt||{}).lack || 9000);
                    return id;
                }
            })(USE, './ask');

            ;USE(function(module){
                var Type = USE('./type');
                function Dup(opt){
                    var dup = {s:{}};
                    opt = opt || {max: 1000, age: 1000 * 9};//1000 * 60 * 2};
                    dup.check = function(id){ var tmp;
                        if(!(tmp = dup.s[id])){ return false }
                        if(tmp.pass){ return tmp.pass = false }
                        return dup.track(id);
                    }
                    dup.track = function(id, pass){
                        var it = dup.s[id] || (dup.s[id] = {});
                        it.was = time_is();
                        if(pass){ it.pass = true }
                        if(!dup.to){
                            dup.to = setTimeout(function(){
                                var now = time_is();
                                Type.obj.map(dup.s, function(it, id){
                                    if(it && opt.age > (now - it.was)){ return }
                                    Type.obj.del(dup.s, id);
                                });
                                dup.to = null;
                            }, opt.age + 9);
                        }
                        return it;
                    }
                    return dup;
                }
                var time_is = Type.time.is;
                module.exports = Dup;
            })(USE, './dup');

            ;USE(function(module){

                function Gun(o){
                    if(o instanceof Gun){ return (this._ = {gun: this, $: this}).$ }
                    if(!(this instanceof Gun)){ return new Gun(o) }
                    return Gun.create(this._ = {gun: this, $: this, opt: o});
                }

                Gun.is = function($){ return ($ instanceof Gun) || ($ && $._ && ($ === $._.$)) || false }

                Gun.version = 0.9;

                Gun.chain = Gun.prototype;
                Gun.chain.toJSON = function(){};

                var Type = USE('./type');
                Type.obj.to(Type, Gun);
                Gun.HAM = USE('./HAM');
                Gun.val = USE('./val');
                Gun.node = USE('./node');
                Gun.state = USE('./state');
                Gun.graph = USE('./graph');
                Gun.on = USE('./onto');
                Gun.ask = USE('./ask');
                Gun.dup = USE('./dup');

                ;(function(){
                    Gun.create = function(at){
                        at.root = at.root || at;
                        at.graph = at.graph || {};
                        at.on = at.on || Gun.on;
                        at.ask = at.ask || Gun.ask;
                        at.dup = at.dup || Gun.dup();
                        var gun = at.$.opt(at.opt);
                        if(!at.once){
                            at.on('in', root, at);
                            at.on('out', root, {at: at, out: root});
                            Gun.on('create', at);
                            at.on('create', at);
                        }
                        at.once = 1;
                        return gun;
                    }
                    function root(msg){
                        //add to.next(at); // TODO: MISSING FEATURE!!!
                        var ev = this, as = ev.as, at = as.at || as, gun = at.$, dup, tmp;
                        if(!(tmp = msg['#'])){ tmp = msg['#'] = text_rand(9) }
                        if((dup = at.dup).check(tmp)){
                            if(as.out === msg.out){
                                msg.out = u;
                                ev.to.next(msg);
                            }
                            return;
                        }
                        dup.track(tmp);
                        if(!at.ask(msg['@'], msg)){
                            if(msg.get){
                                Gun.on.get(msg, gun); //at.on('get', get(msg));
                            }
                            if(msg.put){
                                Gun.on.put(msg, gun); //at.on('put', put(msg));
                            }
                        }
                        ev.to.next(msg);
                        if(!as.out){
                            msg.out = root;
                            at.on('out', msg);
                        }
                    }
                }());

                ;(function(){
                    Gun.on.put = function(msg, gun){
                        var at = gun._, ctx = {$: gun, graph: at.graph, put: {}, map: {}, souls: {}, machine: Gun.state(), ack: msg['@'], cat: at, stop: {}};
                        if(!Gun.graph.is(msg.put, null, verify, ctx)){ ctx.err = "Error: Invalid graph!" }
                        if(ctx.err){ return at.on('in', {'@': msg['#'], err: Gun.log(ctx.err) }) }
                        obj_map(ctx.put, merge, ctx);
                        if(!ctx.async){ obj_map(ctx.map, map, ctx) }
                        if(u !== ctx.defer){
                            setTimeout(function(){
                                Gun.on.put(msg, gun);
                            }, ctx.defer - ctx.machine);
                        }
                        if(!ctx.diff){ return }
                        at.on('put', obj_to(msg, {put: ctx.diff}));
                    };
                    function verify(val, key, node, soul){ var ctx = this;
                        var state = Gun.state.is(node, key), tmp;
                        if(!state){ return ctx.err = "Error: No state on '"+key+"' in node '"+soul+"'!" }
                        var vertex = ctx.graph[soul] || empty, was = Gun.state.is(vertex, key, true), known = vertex[key];
                        var HAM = Gun.HAM(ctx.machine, state, was, val, known);
                        if(!HAM.incoming){
                            if(HAM.defer){ // pick the lowest
                                ctx.defer = (state < (ctx.defer || Infinity))? state : ctx.defer;
                            }
                            return;
                        }
                        ctx.put[soul] = Gun.state.to(node, key, ctx.put[soul]);
                        (ctx.diff || (ctx.diff = {}))[soul] = Gun.state.to(node, key, ctx.diff[soul]);
                        ctx.souls[soul] = true;
                    }
                    function merge(node, soul){
                        var ctx = this, cat = ctx.$._, at = (cat.next || empty)[soul];
                        if(!at){
                            if(!(cat.opt||empty).super){
                                ctx.souls[soul] = false;
                                return;
                            }
                            at = (ctx.$.get(soul)._);
                        }
                        var msg = ctx.map[soul] = {
                            put: node,
                            get: soul,
                            $: at.$
                        }, as = {ctx: ctx, msg: msg};
                        ctx.async = !!cat.tag.node;
                        if(ctx.ack){ msg['@'] = ctx.ack }
                        obj_map(node, each, as);
                        if(!ctx.async){ return }
                        if(!ctx.and){
                            // If it is async, we only need to setup one listener per context (ctx)
                            cat.on('node', function(m){
                                this.to.next(m); // make sure to call other context's listeners.
                                if(m !== ctx.map[m.get]){ return } // filter out events not from this context!
                                ctx.souls[m.get] = false; // set our many-async flag
                                obj_map(m.put, patch, m); // merge into view
                                if(obj_map(ctx.souls, function(v){ if(v){ return v } })){ return } // if flag still outstanding, keep waiting.
                                if(ctx.c){ return } ctx.c = 1; // failsafe for only being called once per context.
                                this.off();
                                obj_map(ctx.map, map, ctx); // all done, trigger chains.
                            });
                        }
                        ctx.and = true;
                        cat.on('node', msg); // each node on the current context's graph needs to be emitted though.
                    }
                    function each(val, key){
                        var ctx = this.ctx, graph = ctx.graph, msg = this.msg, soul = msg.get, node = msg.put, at = (msg.$._), tmp;
                        graph[soul] = Gun.state.to(node, key, graph[soul]);
                        if(ctx.async){ return }
                        at.put = Gun.state.to(node, key, at.put);
                    }
                    function patch(val, key){
                        var msg = this, node = msg.put, at = (msg.$._);
                        at.put = Gun.state.to(node, key, at.put);
                    }
                    function map(msg, soul){
                        if(!msg.$){ return }
                        this.cat.stop = this.stop; // temporary fix till a better solution?
                        (msg.$._).on('in', msg);
                        this.cat.stop = null; // temporary fix till a better solution?
                    }

                    Gun.on.get = function(msg, gun){
                        var root = gun._, get = msg.get, soul = get[_soul], node = root.graph[soul], has = get[_has], tmp;
                        var next = root.next || (root.next = {}), at = next[soul];
                        if(!node){ return root.on('get', msg) }
                        if(has){
                            if('string' != typeof has || !obj_has(node, has)){ return root.on('get', msg) }
                            node = Gun.state.to(node, has);
                            // If we have a key in-memory, do we really need to fetch?
                            // Maybe... in case the in-memory key we have is a local write
                            // we still need to trigger a pull/merge from peers.
                        } else {
                            node = Gun.obj.copy(node);
                        }
                        node = Gun.graph.node(node);
                        tmp = (at||empty).ack;
                        root.on('in', {
                            '@': msg['#'],
                            how: 'mem',
                            put: node,
                            $: gun
                        });
                        //if(0 < tmp){ return }
                        root.on('get', msg);
                    }
                }());

                ;(function(){
                    Gun.chain.opt = function(opt){
                        opt = opt || {};
                        var gun = this, at = gun._, tmp = opt.peers || opt;
                        if(!obj_is(opt)){ opt = {} }
                        if(!obj_is(at.opt)){ at.opt = opt }
                        if(text_is(tmp)){ tmp = [tmp] }
                        if(list_is(tmp)){
                            tmp = obj_map(tmp, function(url, i, map){
                                i = {}; i.id = i.url = url; map(url, i);
                            });
                            if(!obj_is(at.opt.peers)){ at.opt.peers = {}}
                            at.opt.peers = obj_to(tmp, at.opt.peers);
                        }
                        at.opt.peers = at.opt.peers || {};
                        obj_map(opt, function each(v,k){
                            if(!obj_has(this, k) || text.is(v) || obj.empty(v)){ this[k] = v ; return }
                            obj_map(v, each, this[k]);
                        }, at.opt);
                        Gun.on('opt', at);
                        at.opt.uuid = at.opt.uuid || function(){ return state_lex() + text_rand(12) }
                        return gun;
                    }
                }());

                var list_is = Gun.list.is;
                var text = Gun.text, text_is = text.is, text_rand = text.random;
                var obj = Gun.obj, obj_is = obj.is, obj_has = obj.has, obj_to = obj.to, obj_map = obj.map, obj_copy = obj.copy;
                var state_lex = Gun.state.lex, _soul = Gun.val.link._, _has = '.', node_ = Gun.node._, rel_is = Gun.val.link.is;
                var empty = {}, u;

                console.debug = function(i, s){ return (console.debug.i && i === console.debug.i && console.debug.i++) && (console.log.apply(console, arguments) || s) };

                Gun.log = function(){ return (!Gun.log.off && console.log.apply(console, arguments)), [].slice.call(arguments).join(' ') }
                Gun.log.once = function(w,s,o){ return (o = Gun.log.once)[w] = o[w] || 0, o[w]++ || Gun.log(s) }

                ;"Please do not remove these messages unless you are paying for a monthly sponsorship, thanks!";
                Gun.log.once("welcome", "Hello wonderful person! :) Thanks for using GUN, feel free to ask for help on https://gitter.im/amark/gun and ask StackOverflow questions tagged with 'gun'!");
                ;"Please do not remove these messages unless you are paying for a monthly sponsorship, thanks!";

                if(typeof window !== "undefined"){ (window.GUN = window.Gun = Gun).window = window }
                try{ if(typeof common !== "undefined"){ common.exports = Gun } }catch(e){}
                module.exports = Gun;

                /*Gun.on('opt', function(ctx){ // FOR TESTING PURPOSES
			this.to.next(ctx);
			if(ctx.once){ return }
			ctx.on('node', function(msg){
				var to = this.to;
				//Gun.node.is(msg.put, function(v,k){ msg.put[k] = v + v });
				setTimeout(function(){
					to.next(msg);
				},1);
			});
		});*/
            })(USE, './root');

            ;USE(function(module){
                var Gun = USE('./root');
                Gun.chain.back = function(n, opt){ var tmp;
                    n = n || 1;
                    if(-1 === n || Infinity === n){
                        return this._.root.$;
                    } else
                    if(1 === n){
                        return (this._.back || this._).$;
                    }
                    var gun = this, at = gun._;
                    if(typeof n === 'string'){
                        n = n.split('.');
                    }
                    if(n instanceof Array){
                        var i = 0, l = n.length, tmp = at;
                        for(i; i < l; i++){
                            tmp = (tmp||empty)[n[i]];
                        }
                        if(u !== tmp){
                            return opt? gun : tmp;
                        } else
                        if((tmp = at.back)){
                            return tmp.$.back(n, opt);
                        }
                        return;
                    }
                    if(n instanceof Function){
                        var yes, tmp = {back: at};
                        while((tmp = tmp.back)
                        && u === (yes = n(tmp, opt))){}
                        return yes;
                    }
                    if(Gun.num.is(n)){
                        return (at.back || at).$.back(n - 1);
                    }
                    return this;
                }
                var empty = {}, u;
            })(USE, './back');

            ;USE(function(module){
                // WARNING: GUN is very simple, but the JavaScript chaining API around GUN
                // is complicated and was extremely hard to build. If you port GUN to another
                // language, consider implementing an easier API to build.
                var Gun = USE('./root');
                Gun.chain.chain = function(sub){
                    var gun = this, at = gun._, chain = new (sub || gun).constructor(gun), cat = chain._, root;
                    cat.root = root = at.root;
                    cat.id = ++root.once;
                    cat.back = gun._;
                    cat.on = Gun.on;
                    cat.on('in', input, cat); // For 'in' if I add my own listeners to each then I MUST do it before in gets called. If I listen globally for all incoming data instead though, regardless of individual listeners, I can transform the data there and then as well.
                    cat.on('out', output, cat); // However for output, there isn't really the global option. I must listen by adding my own listener individually BEFORE this one is ever called.
                    return chain;
                }

                function output(msg){
                    var put, get, at = this.as, back = at.back, root = at.root, tmp;
                    if(!msg.$){ msg.$ = at.$ }
                    this.to.next(msg);
                    if(get = msg.get){
                        /*if(u !== at.put){
					at.on('in', at);
					return;
				}*/
                        if(at.lex){ msg.get = obj_to(at.lex, msg.get) }
                        if(get['#'] || at.soul){
                            get['#'] = get['#'] || at.soul;
                            msg['#'] || (msg['#'] = text_rand(9));
                            back = (root.$.get(get['#'])._);
                            if(!(get = get['.'])){
                                tmp = back.ack;
                                if(!tmp){ back.ack = -1 }
                                if(obj_has(back, 'put')){
                                    back.on('in', back);
                                }
                                if(tmp){ return }
                                msg.$ = back.$;
                            } else
                            if(obj_has(back.put, get)){ // TODO: support #LEX !
                                put = (back.$.get(get)._);
                                if(!(tmp = put.ack)){ put.ack = -1 }
                                back.on('in', {
                                    $: back.$,
                                    put: Gun.state.to(back.put, get),
                                    get: back.get
                                });
                                if(tmp){ return }
                            } else
                            if('string' != typeof get){
                                var put = {}, meta = (back.put||{})._;
                                Gun.obj.map(back.put, function(v,k){
                                    if(!Gun.text.match(k, get)){ return }
                                    put[k] = v;
                                })
                                if(!Gun.obj.empty(put)){
                                    put._ = meta;
                                    back.on('in', {$: back.$, put: put, get: back.get})
                                }
                            }
                            root.ask(ack, msg);
                            return root.on('in', msg);
                        }
                        if(root.now){ root.now[at.id] = root.now[at.id] || true; at.pass = {} }
                        if(get['.']){
                            if(at.get){
                                msg = {get: {'.': at.get}, $: at.$};
                                //if(back.ask || (back.ask = {})[at.get]){ return }
                                (back.ask || (back.ask = {}));
                                back.ask[at.get] = msg.$._; // TODO: PERFORMANCE? More elegant way?
                                return back.on('out', msg);
                            }
                            msg = {get: {}, $: at.$};
                            return back.on('out', msg);
                        }
                        at.ack = at.ack || -1;
                        if(at.get){
                            msg.$ = at.$;
                            get['.'] = at.get;
                            (back.ask || (back.ask = {}))[at.get] = msg.$._; // TODO: PERFORMANCE? More elegant way?
                            return back.on('out', msg);
                        }
                    }
                    return back.on('out', msg);
                }

                function input(msg){
                    var eve = this, cat = eve.as, root = cat.root, gun = msg.$, at = (gun||empty)._ || empty, change = msg.put, rel, tmp;
                    if(cat.get && msg.get !== cat.get){
                        msg = obj_to(msg, {get: cat.get});
                    }
                    if(cat.has && at !== cat){
                        msg = obj_to(msg, {$: cat.$});
                        if(at.ack){
                            cat.ack = at.ack;
                            //cat.ack = cat.ack || at.ack;
                        }
                    }
                    if(u === change){
                        tmp = at.put;
                        eve.to.next(msg);
                        if(cat.soul){ return } // TODO: BUG, I believee the fresh input refactor caught an edge case that a `gun.get('soul').get('key')` that points to a soul that doesn't exist will not trigger val/get etc.
                        if(u === tmp && u !== at.put){ return }
                        echo(cat, msg, eve);
                        if(cat.has){
                            not(cat, msg);
                        }
                        obj_del(at.echo, cat.id);
                        obj_del(cat.map, at.id);
                        return;
                    }
                    if(cat.soul){
                        eve.to.next(msg);
                        echo(cat, msg, eve);
                        if(cat.next){ obj_map(change, map, {msg: msg, cat: cat}) }
                        return;
                    }
                    if(!(rel = Gun.val.link.is(change))){
                        if(Gun.val.is(change)){
                            if(cat.has || cat.soul){
                                not(cat, msg);
                            } else
                            if(at.has || at.soul){
                                (at.echo || (at.echo = {}))[cat.id] = at.echo[at.id] || cat;
                                (cat.map || (cat.map = {}))[at.id] = cat.map[at.id] || {at: at};
                                //if(u === at.put){ return } // Not necessary but improves performance. If we have it but at does not, that means we got things out of order and at will get it. Once at gets it, it will tell us again.
                            }
                            eve.to.next(msg);
                            echo(cat, msg, eve);
                            return;
                        }
                        if(cat.has && at !== cat && obj_has(at, 'put')){
                            cat.put = at.put;
                        };
                        if((rel = Gun.node.soul(change)) && at.has){
                            at.put = (cat.root.$.get(rel)._).put;
                        }
                        tmp = (root.stop || {})[at.id];
                        //if(tmp && tmp[cat.id]){ } else {
                        eve.to.next(msg);
                        //}
                        relate(cat, msg, at, rel);
                        echo(cat, msg, eve);
                        if(cat.next){ obj_map(change, map, {msg: msg, cat: cat}) }
                        return;
                    }
                    var was = root.stop;
                    tmp = root.stop || {};
                    tmp = tmp[at.id] || (tmp[at.id] = {});
                    //if(tmp[cat.id]){ return }
                    tmp.is = tmp.is || at.put;
                    tmp[cat.id] = at.put || true;
                    //if(root.stop){
                    eve.to.next(msg)
                    //}
                    relate(cat, msg, at, rel);
                    echo(cat, msg, eve);
                }

                function relate(at, msg, from, rel){
                    if(!rel || node_ === at.get){ return }
                    var tmp = (at.root.$.get(rel)._);
                    if(at.has){
                        from = tmp;
                    } else
                    if(from.has){
                        relate(from, msg, from, rel);
                    }
                    if(from === at){ return }
                    if(!from.$){ from = {} }
                    (from.echo || (from.echo = {}))[at.id] = from.echo[at.id] || at;
                    if(at.has && !(at.map||empty)[from.id]){ // if we haven't seen this before.
                        not(at, msg);
                    }
                    tmp = from.id? ((at.map || (at.map = {}))[from.id] = at.map[from.id] || {at: from}) : {};
                    if(rel === tmp.link){
                        if(!(tmp.pass || at.pass)){
                            return;
                        }
                    }
                    if(at.pass){
                        Gun.obj.map(at.map, function(tmp){ tmp.pass = true })
                        obj_del(at, 'pass');
                    }
                    if(tmp.pass){ obj_del(tmp, 'pass') }
                    if(at.has){ at.link = rel }
                    ask(at, tmp.link = rel);
                }
                function echo(at, msg, ev){
                    if(!at.echo){ return } // || node_ === at.get ?
                    //if(at.has){ msg = obj_to(msg, {event: ev}) }
                    obj_map(at.echo, reverb, msg);
                }
                function reverb(to){
                    if(!to || !to.on){ return }
                    to.on('in', this);
                }
                function map(data, key){ // Map over only the changes on every update.
                    var cat = this.cat, next = cat.next || empty, via = this.msg, chain, at, tmp;
                    if(node_ === key && !next[key]){ return }
                    if(!(at = next[key])){
                        return;
                    }
                    //if(data && data[_soul] && (tmp = Gun.val.link.is(data)) && (tmp = (cat.root.$.get(tmp)._)) && obj_has(tmp, 'put')){
                    //	data = tmp.put;
                    //}
                    if(at.has){
                        //if(!(data && data[_soul] && Gun.val.link.is(data) === Gun.node.soul(at.put))){
                        if(u === at.put || !Gun.val.link.is(data)){
                            at.put = data;
                        }
                        chain = at.$;
                    } else
                    if(tmp = via.$){
                        tmp = (chain = via.$.get(key))._;
                        if(u === tmp.put || !Gun.val.link.is(data)){
                            tmp.put = data;
                        }
                    }
                    at.on('in', {
                        put: data,
                        get: key,
                        $: chain,
                        via: via
                    });
                }
                function not(at, msg){
                    if(!(at.has || at.soul)){ return }
                    var tmp = at.map, root = at.root;
                    at.map = null;
                    if(at.has){
                        if(at.dub && at.root.stop){ at.dub = null }
                        at.link = null;
                    }
                    //if(!root.now || !root.now[at.id]){
                    if(!at.pass){
                        if((!msg['@']) && null === tmp){ return }
                        //obj_del(at, 'pass');
                    }
                    if(u === tmp && Gun.val.link.is(at.put)){ return } // This prevents the very first call of a thing from triggering a "clean up" call. // TODO: link.is(at.put) || !val.is(at.put) ?
                    obj_map(tmp, function(proxy){
                        if(!(proxy = proxy.at)){ return }
                        obj_del(proxy.echo, at.id);
                    });
                    tmp = at.put;
                    obj_map(at.next, function(neat, key){
                        if(u === tmp && u !== at.put){ return true }
                        neat.put = u;
                        if(neat.ack){
                            neat.ack = -1; // TODO: BUG? Should this be 0?
                        }
                        neat.on('in', {
                            get: key,
                            $: neat.$,
                            put: u
                        });
                    });
                }
                function ask(at, soul){
                    var tmp = (at.root.$.get(soul)._), lex = at.lex;
                    if(at.ack || lex){
                        (lex = lex||{})['#'] = soul;
                        tmp.on('out', {get: lex});
                        if(!at.ask){ return } // TODO: PERFORMANCE? More elegant way?
                    }
                    tmp = at.ask; Gun.obj.del(at, 'ask');
                    obj_map(tmp || at.next, function(neat, key){
                        var lex = neat.lex || {}; lex['#'] = soul; lex['.'] = lex['.'] || key;
                        neat.on('out', {get: lex});
                    });
                    Gun.obj.del(at, 'ask'); // TODO: PERFORMANCE? More elegant way?
                }
                function ack(msg, ev){
                    var as = this.as, get = as.get || empty, at = as.$._, tmp = (msg.put||empty)[get['#']];
                    if(at.ack){ at.ack = (at.ack + 1) || 1; }
                    if(!msg.put || ('string' == typeof get['.'] && !obj_has(tmp, at.get))){
                        if(at.put !== u){ return }
                        at.on('in', {
                            get: at.get,
                            put: at.put = u,
                            $: at.$,
                            '@': msg['@']
                        });
                        return;
                    }
                    if(node_ == get['.']){ // is this a security concern?
                        at.on('in', {get: at.get, put: Gun.val.link.ify(get['#']), $: at.$, '@': msg['@']});
                        return;
                    }
                    Gun.on.put(msg, at.root.$);
                }
                var empty = {}, u;
                var obj = Gun.obj, obj_has = obj.has, obj_put = obj.put, obj_del = obj.del, obj_to = obj.to, obj_map = obj.map;
                var text_rand = Gun.text.random;
                var _soul = Gun.val.link._, node_ = Gun.node._;
            })(USE, './chain');

            ;USE(function(module){
                var Gun = USE('./root');
                Gun.chain.get = function(key, cb, as){
                    var gun, tmp;
                    if(typeof key === 'string'){
                        var back = this, cat = back._;
                        var next = cat.next || empty;
                        if(!(gun = next[key])){
                            gun = cache(key, back);
                        }
                        gun = gun.$;
                    } else
                    if(key instanceof Function){
                        if(true === cb){ return soul(this, key, cb, as) }
                        gun = this;
                        var at = gun._, root = at.root, tmp = root.now, ev;
                        as = cb || {};
                        as.at = at;
                        as.use = key;
                        as.out = as.out || {};
                        as.out.get = as.out.get || {};
                        (ev = at.on('in', use, as)).rid = rid;
                        (root.now = {$:1})[as.now = at.id] = ev;
                        var mum = root.mum; root.mum = {};
                        at.on('out', as.out);
                        root.mum = mum;
                        root.now = tmp;
                        return gun;
                    } else
                    if(num_is(key)){
                        return this.get(''+key, cb, as);
                    } else
                    if(tmp = rel.is(key)){
                        return this.get(tmp, cb, as);
                    } else
                    if(obj.is(key)){
                        gun = this;
                        if(tmp = ((tmp = key['#'])||empty)['='] || tmp){ gun = gun.get(tmp) }
                        gun._.lex = key;
                        return gun;
                    } else {
                        (as = this.chain())._.err = {err: Gun.log('Invalid get request!', key)}; // CLEAN UP
                        if(cb){ cb.call(as, as._.err) }
                        return as;
                    }
                    if(tmp = this._.stun){ // TODO: Refactor?
                        gun._.stun = gun._.stun || tmp;
                    }
                    if(cb && cb instanceof Function){
                        gun.get(cb, as);
                    }
                    return gun;
                }
                function cache(key, back){
                    var cat = back._, next = cat.next, gun = back.chain(), at = gun._;
                    if(!next){ next = cat.next = {} }
                    next[at.get = key] = at;
                    if(back === cat.root.$){
                        at.soul = key;
                    } else
                    if(cat.soul || cat.has){
                        at.has = key;
                        //if(obj_has(cat.put, key)){
                        //at.put = cat.put[key];
                        //}
                    }
                    return at;
                }
                function soul(gun, cb, opt, as){
                    var cat = gun._, acks = 0, tmp;
                    if(tmp = cat.soul || cat.link || cat.dub){ return cb(tmp, as, cat), gun }
                    gun.get(function(msg, ev){
                        if(u === msg.put && (tmp = Object.keys(cat.root.opt.peers).length) && ++acks < tmp){
                            return;
                        }
                        ev.rid(msg);
                        var at = ((at = msg.$) && at._) || {};
                        tmp = at.link || at.soul || rel.is(msg.put) || node_soul(msg.put) || at.dub;
                        cb(tmp, as, msg, ev);
                    }, {out: {get: {'.':true}}});
                    return gun;
                }
                function use(msg){
                    var eve = this, as = eve.as, cat = as.at, root = cat.root, gun = msg.$, at = (gun||{})._ || {}, data = msg.put || at.put, tmp;
                    if((tmp = root.now) && eve !== tmp[as.now]){ return eve.to.next(msg) }
                    //console.log("USE:", cat.id, cat.soul, cat.has, cat.get, msg, root.mum);
                    //if(at.async && msg.root){ return }
                    //if(at.async === 1 && cat.async !== true){ return }
                    //if(root.stop && root.stop[at.id]){ return } root.stop && (root.stop[at.id] = true);
                    //if(!at.async && !cat.async && at.put && msg.put === at.put){ return }
                    //else if(!cat.async && msg.put !== at.put && root.stop && root.stop[at.id]){ return } root.stop && (root.stop[at.id] = true);


                    //root.stop && (root.stop.id = root.stop.id || Gun.text.random(2));
                    //if((tmp = root.stop) && (tmp = tmp[at.id] || (tmp[at.id] = {})) && tmp[cat.id]){ return } tmp && (tmp[cat.id] = true);
                    if(eve.seen && at.id && eve.seen[at.id]){ return eve.to.next(msg) }
                    //if((tmp = root.stop)){ if(tmp[at.id]){ return } tmp[at.id] = msg.root; } // temporary fix till a better solution?
                    if((tmp = data) && tmp[rel._] && (tmp = rel.is(tmp))){
                        tmp = ((msg.$$ = at.root.gun.get(tmp))._);
                        if(u !== tmp.put){
                            msg = obj_to(msg, {put: data = tmp.put});
                        }
                    }
                    if((tmp = root.mum) && at.id){ // TODO: can we delete mum entirely now?
                        var id = at.id + (eve.id || (eve.id = Gun.text.random(9)));
                        if(tmp[id]){ return }
                        if(u !== data && !rel.is(data)){ tmp[id] = true; }
                    }
                    as.use(msg, eve);
                    if(eve.stun){
                        eve.stun = null;
                        return;
                    }
                    eve.to.next(msg);
                }
                function rid(at){
                    var cat = this.on;
                    if(!at || cat.soul || cat.has){ return this.off() }
                    if(!(at = (at = (at = at.$ || at)._ || at).id)){ return }
                    var map = cat.map, tmp, seen;
                    //if(!map || !(tmp = map[at]) || !(tmp = tmp.at)){ return }
                    if(tmp = (seen = this.seen || (this.seen = {}))[at]){ return true }
                    seen[at] = true;
                    return;
                    //tmp.echo[cat.id] = {}; // TODO: Warning: This unsubscribes ALL of this chain's listeners from this link, not just the one callback event.
                    //obj.del(map, at); // TODO: Warning: This unsubscribes ALL of this chain's listeners from this link, not just the one callback event.
                    return;
                }
                var obj = Gun.obj, obj_map = obj.map, obj_has = obj.has, obj_to = Gun.obj.to;
                var num_is = Gun.num.is;
                var rel = Gun.val.link, node_soul = Gun.node.soul, node_ = Gun.node._;
                var empty = {}, u;
            })(USE, './get');

            ;USE(function(module){
                var Gun = USE('./root');
                Gun.chain.put = function(data, cb, as){
                    // #soul.has=value>state
                    // ~who#where.where=what>when@was
                    // TODO: BUG! Put probably cannot handle plural chains!
                    var gun = this, at = (gun._), root = at.root.$, ctx = root._, M = 100, tmp;
                    if(!ctx.puta){ if(tmp = ctx.puts){ if(tmp > M){ // without this, when synchronous, writes to a 'not found' pile up, when 'not found' resolves it recursively calls `put` which incrementally resolves each write. Stack overflow limits can be as low as 10K, so this limit is hardcoded to 1% of 10K.
                        (ctx.stack || (ctx.stack = [])).push([gun, data, cb, as]);
                        if(ctx.puto){ return }
                        ctx.puto = setTimeout(function drain(){
                            var d = ctx.stack.splice(0,M), i = 0, at; ctx.puta = true;
                            while(at = d[i++]){ at[0].put(at[1], at[2], at[3]) } delete ctx.puta;
                            if(ctx.stack.length){ return ctx.puto = setTimeout(drain, 0) }
                            ctx.stack = ctx.puts = ctx.puto = null;
                        }, 0);
                        return gun;
                    } ++ctx.puts } else { ctx.puts = 1 } }
                    as = as || {};
                    as.data = data;
                    as.via = as.$ = as.via || as.$ || gun;
                    if(typeof cb === 'string'){
                        as.soul = cb;
                    } else {
                        as.ack = as.ack || cb;
                    }
                    if(at.soul){
                        as.soul = at.soul;
                    }
                    if(as.soul || root === gun){
                        if(!obj_is(as.data)){
                            (as.ack||noop).call(as, as.out = {err: Gun.log("Data saved to the root level of the graph must be a node (an object), not a", (typeof as.data), 'of "' + as.data + '"!')});
                            if(as.res){ as.res() }
                            return gun;
                        }
                        as.soul = as.soul || (as.not = Gun.node.soul(as.data) || (as.via.back('opt.uuid') || Gun.text.random)());
                        if(!as.soul){ // polyfill async uuid for SEA
                            as.via.back('opt.uuid')(function(err, soul){ // TODO: improve perf without anonymous callback
                                if(err){ return Gun.log(err) } // TODO: Handle error!
                                (as.ref||as.$).put(as.data, as.soul = soul, as);
                            });
                            return gun;
                        }
                        as.$ = root.get(as.soul);
                        as.ref = as.$;
                        ify(as);
                        return gun;
                    }
                    if(Gun.is(data)){
                        data.get(function(soul, o, msg){
                            if(!soul){
                                return Gun.log("The reference you are saving is a", typeof msg.put, '"'+ msg.put +'", not a node (object)!');
                            }
                            gun.put(Gun.val.link.ify(soul), cb, as);
                        }, true);
                        return gun;
                    }
                    if(at.has && (tmp = Gun.val.link.is(data))){ at.dub = tmp }
                    as.ref = as.ref || (root._ === (tmp = at.back))? gun : tmp.$;
                    if(as.ref._.soul && Gun.val.is(as.data) && at.get){
                        as.data = obj_put({}, at.get, as.data);
                        as.ref.put(as.data, as.soul, as);
                        return gun;
                    }
                    as.ref.get(any, true, {as: as});
                    if(!as.out){
                        // TODO: Perf idea! Make a global lock, that blocks everything while it is on, but if it is on the lock it does the expensive lookup to see if it is a dependent write or not and if not then it proceeds full speed. Meh? For write heavy async apps that would be terrible.
                        as.res = as.res || stun; // Gun.on.stun(as.ref); // TODO: BUG! Deal with locking?
                        as.$._.stun = as.ref._.stun;
                    }
                    return gun;
                };

                function ify(as){
                    as.batch = batch;
                    var opt = as.opt||{}, env = as.env = Gun.state.map(map, opt.state);
                    env.soul = as.soul;
                    as.graph = Gun.graph.ify(as.data, env, as);
                    if(env.err){
                        (as.ack||noop).call(as, as.out = {err: Gun.log(env.err)});
                        if(as.res){ as.res() }
                        return;
                    }
                    as.batch();
                }

                function stun(cb){
                    if(cb){ cb() }
                    return;
                    var as = this;
                    if(!as.ref){ return }
                    if(cb){
                        as.after = as.ref._.tag;
                        as.now = as.ref._.tag = {};
                        cb();
                        return;
                    }
                    if(as.after){
                        as.ref._.tag = as.after;
                    }
                }

                function batch(){ var as = this;
                    if(!as.graph || obj_map(as.stun, no)){ return }
                    as.res = as.res || function(cb){ if(cb){ cb() } };
                    as.res(function(){
                        var cat = (as.$.back(-1)._), ask = cat.ask(function(ack){
                            cat.root.on('ack', ack);
                            if(ack.err){ Gun.log(ack) }
                            if(++acks > (as.acks || 0)){ this.off() } // Adjustable ACKs! Only 1 by default.
                            if(!as.ack){ return }
                            as.ack(ack, this);
                            //--C;
                        }, as.opt), acks = 0;
                        //C++;
                        // NOW is a hack to get synchronous replies to correctly call.
                        // and STOP is a hack to get async behavior to correctly call.
                        // neither of these are ideal, need to be fixed without hacks,
                        // but for now, this works for current tests. :/
                        var tmp = cat.root.now; obj.del(cat.root, 'now');
                        var mum = cat.root.mum; cat.root.mum = {};
                        (as.ref._).on('out', {
                            $: as.ref, put: as.out = as.env.graph, opt: as.opt, '#': ask
                        });
                        cat.root.mum = mum? obj.to(mum, cat.root.mum) : mum;
                        cat.root.now = tmp;
                    }, as);
                    if(as.res){ as.res() }
                } function no(v,k){ if(v){ return true } }
                //console.debug(999,1); var C = 0; setInterval(function(){ try{ debug.innerHTML = C }catch(e){console.log(e)} }, 500);

                function map(v,k,n, at){ var as = this;
                    var is = Gun.is(v);
                    if(k || !at.path.length){ return }
                    (as.res||iife)(function(){
                        var path = at.path, ref = as.ref, opt = as.opt;
                        var i = 0, l = path.length;
                        for(i; i < l; i++){
                            ref = ref.get(path[i]);
                        }
                        if(is){ ref = v }
                        var id = (ref._).dub;
                        if(id || (id = Gun.node.soul(at.obj))){
                            ref.back(-1).get(id);
                            at.soul(id);
                            return;
                        }
                        (as.stun = as.stun || {})[path] = true;
                        ref.get(soul, true, {as: {at: at, as: as, p:path}});
                    }, {as: as, at: at});
                    //if(is){ return {} }
                }

                function soul(id, as, msg, eve){
                    var as = as.as, cat = as.at; as = as.as;
                    var at = ((msg || {}).$ || {})._ || {};
                    id = at.dub = at.dub || id || Gun.node.soul(cat.obj) || Gun.node.soul(msg.put || at.put) || Gun.val.link.is(msg.put || at.put) || (as.via.back('opt.uuid') || Gun.text.random)(); // TODO: BUG!? Do we really want the soul of the object given to us? Could that be dangerous?
                    if(eve){ eve.stun = true }
                    if(!id){ // polyfill async uuid for SEA
                        at.via.back('opt.uuid')(function(err, id){ // TODO: improve perf without anonymous callback
                            if(err){ return Gun.log(err) } // TODO: Handle error.
                            solve(at, at.dub = at.dub || id, cat, as);
                        });
                        return;
                    }
                    solve(at, at.dub = id, cat, as);
                }

                function solve(at, id, cat, as){
                    at.$.back(-1).get(id);
                    cat.soul(id);
                    as.stun[cat.path] = false;
                    as.batch();
                }

                function any(soul, as, msg, eve){
                    as = as.as;
                    if(!msg.$ || !msg.$._){ return } // TODO: Handle
                    if(msg.err){ // TODO: Handle
                        console.log("Please report this as an issue! Put.any.err");
                        return;
                    }
                    var at = (msg.$._), data = at.put, opt = as.opt||{}, root, tmp;
                    if((tmp = as.ref) && tmp._.now){ return }
                    if(eve){ eve.stun = true }
                    if(as.ref !== as.$){
                        tmp = (as.$._).get || at.get;
                        if(!tmp){ // TODO: Handle
                            console.log("Please report this as an issue! Put.no.get"); // TODO: BUG!??
                            return;
                        }
                        as.data = obj_put({}, tmp, as.data);
                        tmp = null;
                    }
                    if(u === data){
                        if(!at.get){ return } // TODO: Handle
                        if(!soul){
                            tmp = at.$.back(function(at){
                                if(at.link || at.soul){ return at.link || at.soul }
                                as.data = obj_put({}, at.get, as.data);
                            });
                        }
                        tmp = tmp || at.soul || at.link || at.dub;// || at.get;
                        at = tmp? (at.root.$.get(tmp)._) : at;
                        as.soul = tmp;
                        data = as.data;
                    }
                    if(!as.not && !(as.soul = as.soul || soul)){
                        if(as.path && obj_is(as.data)){
                            as.soul = (opt.uuid || as.via.back('opt.uuid') || Gun.text.random)();
                        } else {
                            //as.data = obj_put({}, as.$._.get, as.data);
                            if(node_ == at.get){
                                as.soul = (at.put||empty)['#'] || at.dub;
                            }
                            as.soul = as.soul || at.soul || at.link || (opt.uuid || as.via.back('opt.uuid') || Gun.text.random)();
                        }
                        if(!as.soul){ // polyfill async uuid for SEA
                            as.via.back('opt.uuid')(function(err, soul){ // TODO: improve perf without anonymous callback
                                if(err){ return Gun.log(err) } // Handle error.
                                as.ref.put(as.data, as.soul = soul, as);
                            });
                            return;
                        }
                    }
                    as.ref.put(as.data, as.soul, as);
                }
                var obj = Gun.obj, obj_is = obj.is, obj_put = obj.put, obj_map = obj.map;
                var u, empty = {}, noop = function(){}, iife = function(fn,as){fn.call(as||empty)};
                var node_ = Gun.node._;
            })(USE, './put');

            ;USE(function(module){
                var Gun = USE('./root');
                USE('./chain');
                USE('./back');
                USE('./put');
                USE('./get');
                module.exports = Gun;
            })(USE, './index');

            ;USE(function(module){
                var Gun = USE('./index');
                Gun.chain.on = function(tag, arg, eas, as){
                    var gun = this, at = gun._, tmp, act, off;
                    if(typeof tag === 'string'){
                        if(!arg){ return at.on(tag) }
                        act = at.on(tag, arg, eas || at, as);
                        if(eas && eas.$){
                            (eas.subs || (eas.subs = [])).push(act);
                        }
                        return gun;
                    }
                    var opt = arg;
                    opt = (true === opt)? {change: true} : opt || {};
                    opt.at = at;
                    opt.ok = tag;
                    //opt.last = {};
                    gun.get(ok, opt); // TODO: PERF! Event listener leak!!!?
                    return gun;
                }

                function ok(msg, ev){ var opt = this;
                    var gun = msg.$, at = (gun||{})._ || {}, data = at.put || msg.put, cat = opt.at, tmp;
                    if(u === data){
                        return;
                    }
                    if(tmp = msg.$$){
                        tmp = (msg.$$._);
                        if(u === tmp.put){
                            return;
                        }
                        data = tmp.put;
                    }
                    if(opt.change){ // TODO: BUG? Move above the undef checks?
                        data = msg.put;
                    }
                    // DEDUPLICATE // TODO: NEEDS WORK! BAD PROTOTYPE
                    //if(tmp.put === data && tmp.get === id && !Gun.node.soul(data)){ return }
                    //tmp.put = data;
                    //tmp.get = id;
                    // DEDUPLICATE // TODO: NEEDS WORK! BAD PROTOTYPE
                    //at.last = data;
                    if(opt.as){
                        opt.ok.call(opt.as, msg, ev);
                    } else {
                        opt.ok.call(gun, data, msg.get, msg, ev);
                    }
                }

                Gun.chain.val = function(cb, opt){
                    Gun.log.once("onceval", "Future Breaking API Change: .val -> .once, apologies unexpected.");
                    return this.once(cb, opt);
                }
                Gun.chain.once = function(cb, opt){
                    var gun = this, at = gun._, data = at.put;
                    if(0 < at.ack && u !== data){
                        (cb || noop).call(gun, data, at.get);
                        return gun;
                    }
                    if(cb){
                        (opt = opt || {}).ok = cb;
                        opt.at = at;
                        opt.out = {'#': Gun.text.random(9)};
                        gun.get(val, {as: opt});
                        opt.async = true; //opt.async = at.stun? 1 : true;
                    } else {
                        Gun.log.once("valonce", "Chainable val is experimental, its behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
                        var chain = gun.chain();
                        chain._.nix = gun.once(function(){
                            chain._.on('in', gun._);
                        });
                        return chain;
                    }
                    return gun;
                }

                function val(msg, eve, to){
                    if(!msg.$){ eve.off(); return }
                    var opt = this.as, cat = opt.at, gun = msg.$, at = gun._, data = at.put || msg.put, link, tmp;
                    if(tmp = msg.$$){
                        link = tmp = (msg.$$._);
                        if(u !== link.put){
                            data = link.put;
                        }
                    }
                    if((tmp = eve.wait) && (tmp = tmp[at.id])){ clearTimeout(tmp) }
                    eve.ack = (eve.ack||0)+1;
                    if(!to && u === data && eve.ack <= (opt.acks || Object.keys(at.root.opt.peers).length)){ return }
                    if((!to && (u === data || at.soul || at.link || (link && !(0 < link.ack))))
                        || (u === data && (tmp = Object.keys(at.root.opt.peers).length) && (!to && (link||at).ack < tmp))){
                        tmp = (eve.wait = {})[at.id] = setTimeout(function(){
                            val.call({as:opt}, msg, eve, tmp || 1);
                        }, opt.wait || 99);
                        return;
                    }
                    if(link && u === link.put && (tmp = rel.is(data))){ data = Gun.node.ify({}, tmp) }
                    eve.rid(msg);
                    opt.ok.call(gun || opt.$, data, msg.get);
                }

                Gun.chain.off = function(){
                    // make off more aggressive. Warning, it might backfire!
                    var gun = this, at = gun._, tmp;
                    var cat = at.back;
                    if(!cat){ return }
                    at.ack = 0; // so can resubscribe.
                    if(tmp = cat.next){
                        if(tmp[at.get]){
                            obj_del(tmp, at.get);
                        } else {

                        }
                    }
                    if(tmp = cat.ask){
                        obj_del(tmp, at.get);
                    }
                    if(tmp = cat.put){
                        obj_del(tmp, at.get);
                    }
                    if(tmp = at.soul){
                        obj_del(cat.root.graph, tmp);
                    }
                    if(tmp = at.map){
                        obj_map(tmp, function(at){
                            if(at.link){
                                cat.root.$.get(at.link).off();
                            }
                        });
                    }
                    if(tmp = at.next){
                        obj_map(tmp, function(neat){
                            neat.$.off();
                        });
                    }
                    at.on('off', {});
                    return gun;
                }
                var obj = Gun.obj, obj_map = obj.map, obj_has = obj.has, obj_del = obj.del, obj_to = obj.to;
                var rel = Gun.val.link;
                var empty = {}, noop = function(){}, u;
            })(USE, './on');

            ;USE(function(module){
                var Gun = USE('./index');
                Gun.chain.map = function(cb, opt, t){
                    var gun = this, cat = gun._, chain;
                    if(!cb){
                        if(chain = cat.each){ return chain }
                        cat.each = chain = gun.chain();
                        chain._.nix = gun.back('nix');
                        gun.on('in', map, chain._);
                        return chain;
                    }
                    Gun.log.once("mapfn", "Map functions are experimental, their behavior and API may change moving forward. Please play with it and report bugs and ideas on how to improve it.");
                    chain = gun.chain();
                    gun.map().on(function(data, key, at, ev){
                        var next = (cb||noop).call(this, data, key, at, ev);
                        if(u === next){ return }
                        if(data === next){ return chain._.on('in', at) }
                        if(Gun.is(next)){ return chain._.on('in', next._) }
                        chain._.on('in', {get: key, put: next});
                    });
                    return chain;
                }
                function map(msg){
                    if(!msg.put || Gun.val.is(msg.put)){ return this.to.next(msg) }
                    if(this.as.nix){ this.off() } // TODO: Ugly hack!
                    obj_map(msg.put, each, {at: this.as, msg: msg});
                    this.to.next(msg);
                }
                function each(v,k){
                    if(n_ === k){ return }
                    var msg = this.msg, gun = msg.$, at = gun._, cat = this.at, tmp = at.lex;
                    if(tmp && !Gun.text.match(k, tmp['.'] || tmp['#'] || tmp)){ return } // review?
                    ((tmp = gun.get(k)._).echo || (tmp.echo = {}))[cat.id] = tmp.echo[cat.id] || cat;
                }
                var obj_map = Gun.obj.map, noop = function(){}, event = {stun: noop, off: noop}, n_ = Gun.node._, u;
            })(USE, './map');

            ;USE(function(module){
                var Gun = USE('./index');
                Gun.chain.set = function(item, cb, opt){
                    var gun = this, soul;
                    cb = cb || function(){};
                    opt = opt || {}; opt.item = opt.item || item;
                    if(soul = Gun.node.soul(item)){ item = Gun.obj.put({}, soul, Gun.val.link.ify(soul)) }
                    if(!Gun.is(item)){
                        if(Gun.obj.is(item)){;
                            item = gun.back(-1).get(soul = soul || Gun.node.soul(item) || gun.back('opt.uuid')()).put(item);
                        }
                        return gun.get(soul || (Gun.state.lex() + Gun.text.random(7))).put(item, cb, opt);
                    }
                    item.get(function(soul, o, msg){
                        if(!soul){ return cb.call(gun, {err: Gun.log('Only a node can be linked! Not "' + msg.put + '"!')}) }
                        gun.put(Gun.obj.put({}, soul, Gun.val.link.ify(soul)), cb, opt);
                    },true);
                    return item;
                }
            })(USE, './set');

            ;USE(function(module){
                if(typeof Gun === 'undefined'){ return } // TODO: localStorage is Browser only. But it would be nice if it could somehow plugin into NodeJS compatible localStorage APIs?

                var root, noop = function(){}, store, u;
                try{store = (Gun.window||noop).localStorage}catch(e){}
                if(!store){
                    console.log("Warning: No localStorage exists to persist data to!");
                    store = {setItem: function(k,v){this[k]=v}, removeItem: function(k){delete this[k]}, getItem: function(k){return this[k]}};
                }
                /*
			NOTE: Both `lib/file.js` and `lib/memdisk.js` are based on this design!
			If you update anything here, consider updating the other adapters as well.
		*/

                Gun.on('create', function(root){
                    // This code is used to queue offline writes for resync.
                    // See the next 'opt' code below for actual saving of data.
                    var ev = this.to, opt = root.opt;
                    if(root.once){ return ev.next(root) }
                    //if(false === opt.localStorage){ return ev.next(root) } // we want offline resynce queue regardless!
                    opt.prefix = opt.file || 'gun/';
                    var gap = Gun.obj.ify(store.getItem('gap/'+opt.prefix)) || {};
                    var empty = Gun.obj.empty, id, to, go;
                    // add re-sync command.
                    if(!empty(gap)){
                        var disk = Gun.obj.ify(store.getItem(opt.prefix)) || {}, send = {};
                        Gun.obj.map(gap, function(node, soul){
                            Gun.obj.map(node, function(val, key){
                                send[soul] = Gun.state.to(disk[soul], key, send[soul]);
                            });
                        });
                        setTimeout(function(){
                            // TODO: Holy Grail dangling by this thread! If gap / offline resync doesn't trigger, it doesn't work. Ouch, and this is a localStorage specific adapter. :(
                            root.on('out', {put: send, '#': root.ask(ack)});
                        },1);
                    }

                    root.on('out', function(msg){
                        if(msg.lS){ return } // TODO: for IndexedDB and others, shouldn't send to peers ACKs to our own GETs.
                        if(Gun.is(msg.$) && msg.put && !msg['@']){
                            id = msg['#'];
                            Gun.graph.is(msg.put, null, map);
                            if(!to){ to = setTimeout(flush, opt.wait || 1) }
                        }
                        this.to.next(msg);
                    });
                    root.on('ack', ack);

                    function ack(ack){ // TODO: This is experimental, not sure if we should keep this type of event hook.
                        if(ack.err || !ack.ok){ return }
                        var id = ack['@'];
                        setTimeout(function(){
                            Gun.obj.map(gap, function(node, soul){
                                Gun.obj.map(node, function(val, key){
                                    if(id !== val){ return }
                                    delete node[key];
                                });
                                if(empty(node)){
                                    delete gap[soul];
                                }
                            });
                            flush();
                        }, opt.wait || 1);
                    };
                    ev.next(root);

                    var map = function(val, key, node, soul){
                        (gap[soul] || (gap[soul] = {}))[key] = id;
                    }
                    var flush = function(){
                        clearTimeout(to);
                        to = false;
                        try{store.setItem('gap/'+opt.prefix, JSON.stringify(gap));
                        }catch(e){ Gun.log(err = e || "localStorage failure") }
                    }
                });

                Gun.on('create', function(root){
                    this.to.next(root);
                    var opt = root.opt;
                    if(root.once){ return }
                    if(false === opt.localStorage){ return }
                    opt.prefix = opt.file || 'gun/';
                    var graph = root.graph, acks = {}, count = 0, to;
                    var disk = Gun.obj.ify(store.getItem(opt.prefix)) || {};
                    var lS = function(){}, u;
                    root.on('localStorage', disk); // NON-STANDARD EVENT!

                    root.on('put', function(at){
                        this.to.next(at);
                        Gun.graph.is(at.put, null, map);
                        if(!at['@']){ acks[at['#']] = true; } // only ack non-acks.
                        count += 1;
                        if(count >= (opt.batch || 1000)){
                            return flush();
                        }
                        if(to){ return }
                        to = setTimeout(flush, opt.wait || 1);
                    });

                    root.on('get', function(msg){
                        this.to.next(msg);
                        var lex = msg.get, soul, data, u;
                        function to(){
                            if(!lex || !(soul = lex['#'])){ return }
                            //if(0 >= msg.cap){ return }
                            var has = lex['.'];
                            data = disk[soul] || u;
                            if(data && has){
                                data = Gun.state.to(data, has);
                            }
                            //if(!data && !Gun.obj.empty(opt.peers)){ return } // if data not found, don't ack if there are peers. // Hmm, what if we have peers but we are disconnected?
                            //console.log("lS get", lex, data);
                            root.on('in', {'@': msg['#'], put: Gun.graph.node(data), how: 'lS', lS: msg.$});// || root.$});
                        };
                        Gun.debug? setTimeout(to,1) : to();
                    });

                    var map = function(val, key, node, soul){
                        disk[soul] = Gun.state.to(node, key, disk[soul]);
                    }

                    var flush = function(data){
                        var err;
                        count = 0;
                        clearTimeout(to);
                        to = false;
                        var ack = acks;
                        acks = {};
                        if(data){ disk = data }
                        try{store.setItem(opt.prefix, JSON.stringify(disk));
                        }catch(e){
                            Gun.log(err = (e || "localStorage failure") + " Consider using GUN's IndexedDB plugin for RAD for more storage space, https://gun.eco/docs/RAD#install");
                            root.on('localStorage:error', {err: err, file: opt.prefix, flush: disk, retry: flush});
                        }
                        if(!err && !Gun.obj.empty(opt.peers)){ return } // only ack if there are no peers.
                        Gun.obj.map(ack, function(yes, id){
                            root.on('in', {
                                '@': id,
                                err: err,
                                ok: 0 // localStorage isn't reliable, so make its `ok` code be a low number.
                            });
                        });
                    }
                });
            })(USE, './adapters/localStorage');

            ;USE(function(module){
                var Type = USE('../type');

                function Mesh(root){
                    var mesh = function(){};
                    var opt = root.opt || {};
                    opt.log = opt.log || console.log;
                    opt.gap = opt.gap || opt.wait || 1;
                    opt.pack = opt.pack || (opt.memory? (opt.memory * 1000 * 1000) : 1399000000) * 0.3; // max_old_space_size defaults to 1400 MB.

                    var dup = root.dup;

                    mesh.hear = function(raw, peer){
                        if(!raw){ return }
                        var msg, id, hash, tmp = raw[0];
                        if(opt.pack <= raw.length){ return mesh.say({dam: '!', err: "Message too big!"}, peer) }
                        if('{' != raw[2]){ mesh.hear.d += raw.length||0; ++mesh.hear.c; } // STATS! // ugh, stupid double JSON encoding
                        if('[' === tmp){
                            try{msg = JSON.parse(raw);}catch(e){opt.log('DAM JSON parse error', e)}
                            if(!msg){ return }
                            var i = 0, m;
                            while(m = msg[i++]){
                                mesh.hear(m, peer);
                            }
                            return;
                        }
                        if('{' === tmp || (Type.obj.is(raw) && (msg = raw))){
                            try{msg = msg || JSON.parse(raw);
                            }catch(e){return opt.log('DAM JSON parse error', e)}
                            if(!msg){ return }
                            if(!(id = msg['#'])){ id = msg['#'] = Type.text.random(9) }
                            if(dup.check(id)){ return }
                            dup.track(id, true).it = msg; // GUN core also dedups, so `true` is needed. // Does GUN core need to dedup anymore?
                            if(!(hash = msg['##']) && u !== msg.put){ hash = msg['##'] = Type.obj.hash(msg.put) }
                            if(hash && (tmp = msg['@'] || (msg.get && id))){ // Reduces backward daisy in case varying hashes at different daisy depths are the same.
                                if(dup.check(tmp+hash)){ return }
                                dup.track(tmp+hash, true).it = msg; // GUN core also dedups, so `true` is needed. // Does GUN core need to dedup anymore?
                            }
                            (msg._ = function(){}).via = peer;
                            if(tmp = msg['><']){ (msg._).to = Type.obj.map(tmp.split(','), tomap) }
                            if(msg.dam){
                                if(tmp = mesh.hear[msg.dam]){
                                    tmp(msg, peer, root);
                                }
                                return;
                            }
                            root.on('in', msg);
                            return;
                        }
                    }
                    var tomap = function(k,i,m){m(k,true)};
                    mesh.hear.c = mesh.hear.d = 0;

                    ;(function(){
                        var message;
                        function each(peer){ mesh.say(message, peer) }
                        mesh.say = function(msg, peer){
                            if(this.to){ this.to.next(msg) } // compatible with middleware adapters.
                            if(!msg){ return false }
                            var id, hash, tmp, raw;
                            var meta = msg._||(msg._=function(){});
                            if(!(id = msg['#'])){ id = msg['#'] = Type.text.random(9) }
                            if(!(hash = msg['##']) && u !== msg.put){ hash = msg['##'] = Type.obj.hash(msg.put) }
                            if(!(raw = meta.raw)){
                                raw = meta.raw = mesh.raw(msg);
                                if(hash && (tmp = msg['@'])){
                                    dup.track(tmp+hash).it = msg;
                                    if(tmp = (dup.s[tmp]||ok).it){
                                        if(hash === tmp['##']){ return false }
                                        tmp['##'] = hash;
                                    }
                                }
                            }
                            dup.track(id).it = msg; // track for 9 seconds, default. Earth<->Mars would need more!
                            if(!peer){ peer = (tmp = dup.s[msg['@']]) && (tmp = tmp.it) && (tmp = tmp._) && (tmp = tmp.via) }
                            if(!peer && mesh.way){ return mesh.way(msg) }
                            if(!peer || !peer.id){ message = msg;
                                if(!Type.obj.is(peer || opt.peers)){ return false }
                                Type.obj.map(peer || opt.peers, each); // in case peer is a peer list.
                                return;
                            }
                            if(!peer.wire && mesh.wire){ mesh.wire(peer) }
                            if(id === peer.last){ return } peer.last = id;  // was it just sent?
                            if(peer === meta.via){ return false }
                            if((tmp = meta.to) && (tmp[peer.url] || tmp[peer.pid] || tmp[peer.id]) /*&& !o*/){ return false }
                            if(peer.batch){
                                peer.tail = (tmp = peer.tail || 0) + raw.length;
                                if(peer.tail <= opt.pack){
                                    peer.batch.push(raw); // peer.batch += (tmp?'':',')+raw; // TODO: Prevent double JSON! // FOR v1.0 !?
                                    return;
                                }
                                flush(peer);
                            }
                            peer.batch = []; // peer.batch = '['; // TODO: Prevent double JSON!
                            setTimeout(function(){flush(peer)}, opt.gap);
                            send(raw, peer);
                        }
                        function flush(peer){
                            var tmp = peer.batch; // var tmp = peer.batch + ']'; // TODO: Prevent double JSON!
                            peer.batch = peer.tail = null;
                            if(!tmp){ return }
                            if(!tmp.length){ return } // if(3 > tmp.length){ return } // TODO: ^
                            try{tmp = (1 === tmp.length? tmp[0] : JSON.stringify(tmp));
                            }catch(e){return opt.log('DAM JSON stringify error', e)}
                            if(!tmp){ return }
                            send(tmp, peer);
                        }
                        mesh.say.c = mesh.say.d = 0;
                    }());

                    // for now - find better place later.
                    function send(raw, peer){ try{
                        var wire = peer.wire;
                        if(peer.say){
                            peer.say(raw);
                        } else
                        if(wire.send){
                            wire.send(raw);
                        }
                        mesh.say.d += raw.length||0; ++mesh.say.c; // STATS!
                    }catch(e){
                        (peer.queue = peer.queue || []).push(raw);
                    }}

                    ;(function(){
                        mesh.raw = function(msg){ // TODO: Clean this up / delete it / move logic out!
                            if(!msg){ return '' }
                            var meta = (msg._) || {}, put, hash, tmp;
                            if(tmp = meta.raw){ return tmp }
                            if(typeof msg === 'string'){ return msg }
                            if(!msg.dam){
                                var i = 0, to = []; Type.obj.map(opt.peers, function(p){
                                    to.push(p.url || p.pid || p.id); if(++i > 9){ return true } // limit server, fast fix, improve later! // For "tower" peer, MUST include 6 surrounding ids.
                                }); if(i > 1){ msg['><'] = to.join() }
                            }
                            var raw = $(msg); // optimize by reusing put = the JSON.stringify from .hash?
                            /*if(u !== put){
						tmp = raw.indexOf(_, raw.indexOf('put'));
						raw = raw.slice(0, tmp-1) + put + raw.slice(tmp + _.length + 1);
						//raw = raw.replace('"'+ _ +'"', put); // NEVER USE THIS! ALSO NEVER DELETE IT TO NOT MAKE SAME MISTAKE! https://github.com/amark/gun/wiki/@$$ Heisenbug
					}*/
                            if(meta){ meta.raw = raw }
                            return raw;
                        }
                        var $ = JSON.stringify, _ = ':])([:';

                    }());

                    mesh.hi = function(peer){
                        var tmp = peer.wire || {};
                        if(peer.id){
                            opt.peers[peer.url || peer.id] = peer;
                        } else {
                            tmp = peer.id = peer.id || Type.text.random(9);
                            mesh.say({dam: '?'}, opt.peers[tmp] = peer);
                        }
                        peer.met = peer.met || +(new Date);
                        if(!tmp.hied){ root.on(tmp.hied = 'hi', peer) }
                        // @rogowski I need this here by default for now to fix go1dfish's bug
                        tmp = peer.queue; peer.queue = [];
                        Type.obj.map(tmp, function(msg){
                            send(msg, peer);
                        });
                    }
                    mesh.bye = function(peer){
                        root.on('bye', peer);
                        var tmp = +(new Date); tmp = (tmp - (peer.met||tmp));
                        mesh.bye.time = ((mesh.bye.time || tmp) + tmp) / 2;
                    }
                    mesh.hear['!'] = function(msg, peer){ opt.log('Error:', msg.err) }
                    mesh.hear['?'] = function(msg, peer){
                        if(!msg.pid){
                            mesh.say({dam: '?', pid: opt.pid, '@': msg['#']}, peer);
                            // @rogowski I want to re-enable this AXE logic with some fix/merge later.
                            /* var tmp = peer.queue; peer.queue = [];
					Type.obj.map(tmp, function(msg){
						mesh.say(msg, peer);
					}); */
                            // @rogowski 2: I think with my PID fix we can delete this and use the original.
                            return;
                        }
                        if(peer.pid){ return }
                        peer.pid = msg.pid;
                    }

                    root.on('create', function(root){
                        root.opt.pid = root.opt.pid || Type.text.random(9);
                        this.to.next(root);
                        root.on('out', mesh.say);
                    });

                    root.on('bye', function(peer, tmp){
                        peer = opt.peers[peer.id || peer] || peer;
                        this.to.next(peer);
                        peer.bye? peer.bye() : (tmp = peer.wire) && tmp.close && tmp.close();
                        Type.obj.del(opt.peers, peer.id);
                        peer.wire = null;
                    });

                    var gets = {};
                    root.on('bye', function(peer, tmp){ this.to.next(peer);
                        if(!(tmp = peer.url)){ return } gets[tmp] = true;
                        setTimeout(function(){ delete gets[tmp] },opt.lack || 9000);
                    });
                    root.on('hi', function(peer, tmp){ this.to.next(peer);
                        if(!(tmp = peer.url) || !gets[tmp]){ return } delete gets[tmp];
                        Type.obj.map(root.next, function(node, soul){
                            tmp = {}; tmp[soul] = root.graph[soul];
                            mesh.say({'##': Type.obj.hash(tmp), get: {'#': soul}}, peer);
                        })
                    });

                    return mesh;
                }

                ;(function(){
                    Type.text.hash = function(s){ // via SO
                        if(typeof s !== 'string'){ return {err: 1} }
                        var c = 0;
                        if(!s.length){ return c }
                        for(var i=0,l=s.length,n; i<l; ++i){
                            n = s.charCodeAt(i);
                            c = ((c<<5)-c)+n;
                            c |= 0;
                        }
                        return c; // Math.abs(c);
                    }

                    var $ = JSON.stringify, u;

                    Type.obj.hash = function(obj, hash){
                        if(!hash && u === (obj = $(obj, sort))){ return }
                        return Type.text.hash(hash || obj || '');
                    }

                    function sort(k, v){ var tmp;
                        if(!(v instanceof Object)){ return v }
                        Type.obj.map(Object.keys(v).sort(), map, {to: tmp = {}, on: v});
                        return tmp;
                    }
                    Type.obj.hash.sort = sort;

                    function map(k){
                        this.to[k] = this.on[k];
                    }
                }());

                var empty = {}, ok = true, u;

                try{ module.exports = Mesh }catch(e){}

            })(USE, './adapters/mesh');

            ;USE(function(module){
                var Gun = USE('../index');
                Gun.Mesh = USE('./mesh');

                Gun.on('opt', function(root){
                    this.to.next(root);
                    var opt = root.opt;
                    if(root.once){ return }
                    if(false === opt.WebSocket){ return }

                    var env;
                    if(typeof window !== "undefined"){ env = window }
                    if(typeof global !== "undefined"){ env = global }
                    env = env || {};

                    var websocket = opt.WebSocket || env.WebSocket || env.webkitWebSocket || env.mozWebSocket;
                    if(!websocket){ return }
                    opt.WebSocket = websocket;

                    var mesh = opt.mesh = opt.mesh || Gun.Mesh(root);

                    var wire = mesh.wire || opt.wire;
                    mesh.wire = opt.wire = open;
                    function open(peer){ try{
                        if(!peer || !peer.url){ return wire && wire(peer) }
                        var url = peer.url.replace('http', 'ws');
                        var wire = peer.wire = new opt.WebSocket(url);
                        wire.onclose = function(){
                            opt.mesh.bye(peer);
                            reconnect(peer);
                        };
                        wire.onerror = function(error){
                            reconnect(peer);
                        };
                        wire.onopen = function(){
                            opt.mesh.hi(peer);
                        }
                        wire.onmessage = function(msg){
                            if(!msg){ return }
                            opt.mesh.hear(msg.data || msg, peer);
                        };
                        return wire;
                    }catch(e){}}

                    var wait = 2 * 1000;
                    function reconnect(peer){
                        clearTimeout(peer.defer);
                        if(doc && peer.retry <= 0){ return } peer.retry = (peer.retry || opt.retry || 60) - 1;
                        peer.defer = setTimeout(function to(){
                            if(doc && doc.hidden){ return setTimeout(to,wait) }
                            open(peer);
                        }, wait);
                    }
                    var doc = 'undefined' !== typeof document && document;
                });
                var noop = function(){};
            })(USE, './adapters/websocket');

        }());;(function(){

            /* UNBUILD */
            var root;
            if(typeof window !== "undefined"){ root = window }
            if(typeof global !== "undefined"){ root = global }
            root = root || {};
            var console = root.console || {log: function(){}};
            function USE(arg, req){
                return req? require(arg) : arg.slice? USE[R(arg)] : function(mod, path){
                    arg(mod = {exports: {}});
                    USE[R(path)] = mod.exports;
                }
                function R(p){
                    return p.split('/').slice(-1).toString().replace('.js','');
                }
            }
            if(typeof module !== "undefined"){ var common = module }
            /* UNBUILD */

            ;USE(function(module){
                // Security, Encryption, and Authorization: SEA.js
                // MANDATORY READING: https://gun.eco/explainers/data/security.html
                // IT IS IMPLEMENTED IN A POLYFILL/SHIM APPROACH.
                // THIS IS AN EARLY ALPHA!

                if(typeof window !== "undefined"){ module.window = window }

                var tmp = module.window || module;
                var SEA = tmp.SEA || {};

                if(SEA.window = module.window){ SEA.window.SEA = SEA }

                try{ if(typeof common !== "undefined"){ common.exports = SEA } }catch(e){}
                module.exports = SEA;
            })(USE, './root');

            ;USE(function(module){
                var SEA = USE('./root');
                try{ if(SEA.window){
                    if(location.protocol.indexOf('s') < 0
                        && location.host.indexOf('localhost') < 0
                        && location.protocol.indexOf('file:') < 0){
                        location.protocol = 'https:'; // WebCrypto does NOT work without HTTPS!
                    }
                } }catch(e){}
            })(USE, './https');

            ;USE(function(module){
                // This is Array extended to have .toString(['utf8'|'hex'|'base64'])
                function SeaArray() {}
                Object.assign(SeaArray, { from: Array.from })
                SeaArray.prototype = Object.create(Array.prototype)
                SeaArray.prototype.toString = function(enc, start, end) { enc = enc || 'utf8'; start = start || 0;
                    const length = this.length
                    if (enc === 'hex') {
                        const buf = new Uint8Array(this)
                        return [ ...Array(((end && (end + 1)) || length) - start).keys()]
                            .map((i) => buf[ i + start ].toString(16).padStart(2, '0')).join('')
                    }
                    if (enc === 'utf8') {
                        return Array.from(
                            { length: (end || length) - start },
                            (_, i) => String.fromCharCode(this[ i + start])
                        ).join('')
                    }
                    if (enc === 'base64') {
                        return btoa(this)
                    }
                }
                module.exports = SeaArray;
            })(USE, './array');

            ;USE(function(module){
                // This is Buffer implementation used in SEA. Functionality is mostly
                // compatible with NodeJS 'safe-buffer' and is used for encoding conversions
                // between binary and 'hex' | 'utf8' | 'base64'
                // See documentation and validation for safe implementation in:
                // https://github.com/feross/safe-buffer#update
                var SeaArray = USE('./array');
                function SafeBuffer(...props) {
                    console.warn('new SafeBuffer() is depreciated, please use SafeBuffer.from()')
                    return SafeBuffer.from(...props)
                }
                SafeBuffer.prototype = Object.create(Array.prototype)
                Object.assign(SafeBuffer, {
                    // (data, enc) where typeof data === 'string' then enc === 'utf8'|'hex'|'base64'
                    from() {
                        if (!Object.keys(arguments).length) {
                            throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
                        }
                        const input = arguments[0]
                        let buf
                        if (typeof input === 'string') {
                            const enc = arguments[1] || 'utf8'
                            if (enc === 'hex') {
                                const bytes = input.match(/([\da-fA-F]{2})/g)
                                    .map((byte) => parseInt(byte, 16))
                                if (!bytes || !bytes.length) {
                                    throw new TypeError('Invalid first argument for type \'hex\'.')
                                }
                                buf = SeaArray.from(bytes)
                            } else if (enc === 'utf8') {
                                const length = input.length
                                const words = new Uint16Array(length)
                                Array.from({ length: length }, (_, i) => words[i] = input.charCodeAt(i))
                                buf = SeaArray.from(words)
                            } else if (enc === 'base64') {
                                const dec = atob(input)
                                const length = dec.length
                                const bytes = new Uint8Array(length)
                                Array.from({ length: length }, (_, i) => bytes[i] = dec.charCodeAt(i))
                                buf = SeaArray.from(bytes)
                            } else if (enc === 'binary') {
                                buf = SeaArray.from(input)
                            } else {
                                console.info('SafeBuffer.from unknown encoding: '+enc)
                            }
                            return buf
                        }
                        const byteLength = input.byteLength // what is going on here? FOR MARTTI
                        const length = input.byteLength ? input.byteLength : input.length
                        if (length) {
                            let buf
                            if (input instanceof ArrayBuffer) {
                                buf = new Uint8Array(input)
                            }
                            return SeaArray.from(buf || input)
                        }
                    },
                    // This is 'safe-buffer.alloc' sans encoding support
                    alloc(length, fill = 0 /*, enc*/ ) {
                        return SeaArray.from(new Uint8Array(Array.from({ length: length }, () => fill)))
                    },
                    // This is normal UNSAFE 'buffer.alloc' or 'new Buffer(length)' - don't use!
                    allocUnsafe(length) {
                        return SeaArray.from(new Uint8Array(Array.from({ length : length })))
                    },
                    // This puts together array of array like members
                    concat(arr) { // octet array
                        if (!Array.isArray(arr)) {
                            throw new TypeError('First argument must be Array containing ArrayBuffer or Uint8Array instances.')
                        }
                        return SeaArray.from(arr.reduce((ret, item) => ret.concat(Array.from(item)), []))
                    }
                })
                SafeBuffer.prototype.from = SafeBuffer.from
                SafeBuffer.prototype.toString = SeaArray.prototype.toString

                module.exports = SafeBuffer;
            })(USE, './buffer');

            ;USE(function(module){
                const SEA = USE('./root')
                const Buffer = USE('./buffer')
                const api = {Buffer: Buffer}
                var o = {};

                if(SEA.window){
                    api.crypto = window.crypto || window.msCrypto;
                    api.subtle = (api.crypto||o).subtle || (api.crypto||o).webkitSubtle;
                    api.TextEncoder = window.TextEncoder;
                    api.TextDecoder = window.TextDecoder;
                    api.random = (len) => Buffer.from(api.crypto.getRandomValues(new Uint8Array(Buffer.alloc(len))))
                }
                if(!api.crypto){try{
                    var crypto = USE('crypto', 1);
                    const { TextEncoder, TextDecoder } = USE('text-encoding', 1)
                    Object.assign(api, {
                        crypto,
                        //subtle,
                        TextEncoder,
                        TextDecoder,
                        random: (len) => Buffer.from(crypto.randomBytes(len))
                    });
                    //try{
                    const WebCrypto = USE('node-webcrypto-ossl', 1);
                    api.ossl = api.subtle = new WebCrypto({directory: 'ossl'}).subtle // ECDH
                    //}catch(e){
                    //console.log("node-webcrypto-ossl is optionally needed for ECDH, please install if needed.");
                    //}
                }catch(e){
                    console.log("node-webcrypto-ossl and text-encoding may not be included by default, please add it to your package.json!");
                    OSSL_WEBCRYPTO_OR_TEXT_ENCODING_NOT_INSTALLED;
                }}

                module.exports = api
            })(USE, './shim');

            ;USE(function(module){
                var SEA = USE('./root');
                var Buffer = USE('./buffer');
                var s = {};
                s.pbkdf2 = {hash: 'SHA-256', iter: 100000, ks: 64};
                s.ecdsa = {
                    pair: {name: 'ECDSA', namedCurve: 'P-256'},
                    sign: {name: 'ECDSA', hash: {name: 'SHA-256'}}
                };
                s.ecdh = {name: 'ECDH', namedCurve: 'P-256'};

                // This creates Web Cryptography API compliant JWK for sign/verify purposes
                s.jwk = function(pub, d){  // d === priv
                    pub = pub.split('.');
                    var x = pub[0], y = pub[1];
                    var jwk = {kty: "EC", crv: "P-256", x: x, y: y, ext: true};
                    jwk.key_ops = d ? ['sign'] : ['verify'];
                    if(d){ jwk.d = d }
                    return jwk;
                };
                s.recall = {
                    validity: 12 * 60 * 60, // internally in seconds : 12 hours
                    hook: function(props){ return props } // { iat, exp, alias, remember } // or return new Promise((resolve, reject) => resolve(props)
                };

                s.check = function(t){ return (typeof t == 'string') && ('SEA{' === t.slice(0,4)) }
                s.parse = function p(t){ try {
                    var yes = (typeof t == 'string');
                    if(yes && 'SEA{' === t.slice(0,4)){ t = t.slice(3) }
                    return yes ? JSON.parse(t) : t;
                } catch (e) {}
                    return t;
                }

                SEA.opt = s;
                module.exports = s
            })(USE, './settings');

            ;USE(function(module){
                var shim = USE('./shim');
                module.exports = async function(d, o){
                    var t = (typeof d == 'string')? d : JSON.stringify(d);
                    var hash = await shim.subtle.digest({name: o||'SHA-256'}, new shim.TextEncoder().encode(t));
                    return shim.Buffer.from(hash);
                }
            })(USE, './sha256');

            ;USE(function(module){
                // This internal func returns SHA-1 hashed data for KeyID generation
                const __shim = USE('./shim')
                const subtle = __shim.subtle
                const ossl = __shim.ossl ? __shim.ossl : subtle
                const sha1hash = (b) => ossl.digest({name: 'SHA-1'}, new ArrayBuffer(b))
                module.exports = sha1hash
            })(USE, './sha1');

            ;USE(function(module){
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');
                var sha = USE('./sha256');
                var u;

                SEA.work = SEA.work || (async (data, pair, cb, opt) => { try { // used to be named `proof`
                    var salt = (pair||{}).epub || pair; // epub not recommended, salt should be random!
                    var opt = opt || {};
                    if(salt instanceof Function){
                        cb = salt;
                        salt = u;
                    }
                    salt = salt || shim.random(9);
                    data = (typeof data == 'string')? data : JSON.stringify(data);
                    if('sha' === (opt.name||'').toLowerCase().slice(0,3)){
                        var rsha = shim.Buffer.from(await sha(data, opt.name), 'binary').toString(opt.encode || 'base64')
                        if(cb){ try{ cb(rsha) }catch(e){console.log(e)} }
                        return rsha;
                    }
                    var key = await (shim.ossl || shim.subtle).importKey('raw', new shim.TextEncoder().encode(data), {name: opt.name || 'PBKDF2'}, false, ['deriveBits']);
                    var work = await (shim.ossl || shim.subtle).deriveBits({
                        name: opt.name || 'PBKDF2',
                        iterations: opt.iterations || S.pbkdf2.iter,
                        salt: new shim.TextEncoder().encode(opt.salt || salt),
                        hash: opt.hash || S.pbkdf2.hash,
                    }, key, opt.length || (S.pbkdf2.ks * 8))
                    data = shim.random(data.length)  // Erase data in case of passphrase
                    var r = shim.Buffer.from(work, 'binary').toString(opt.encode || 'base64')
                    if(cb){ try{ cb(r) }catch(e){console.log(e)} }
                    return r;
                } catch(e) {
                    console.log(e);
                    SEA.err = e;
                    if(SEA.throw){ throw e }
                    if(cb){ cb() }
                    return;
                }});

                module.exports = SEA.work;
            })(USE, './work');

            ;USE(function(module){
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');

                SEA.name = SEA.name || (async (cb, opt) => { try {
                    if(cb){ try{ cb() }catch(e){console.log(e)} }
                    return;
                } catch(e) {
                    console.log(e);
                    SEA.err = e;
                    if(SEA.throw){ throw e }
                    if(cb){ cb() }
                    return;
                }});

                //SEA.pair = async (data, proof, cb) => { try {
                SEA.pair = SEA.pair || (async (cb, opt) => { try {

                    var ecdhSubtle = shim.ossl || shim.subtle;
                    // First: ECDSA keys for signing/verifying...
                    var sa = await shim.subtle.generateKey(S.ecdsa.pair, true, [ 'sign', 'verify' ])
                        .then(async (keys) => {
                            // privateKey scope doesn't leak out from here!
                            //const { d: priv } = await shim.subtle.exportKey('jwk', keys.privateKey)
                            var key = {};
                            key.priv = (await shim.subtle.exportKey('jwk', keys.privateKey)).d;
                            var pub = await shim.subtle.exportKey('jwk', keys.publicKey);
                            //const pub = Buff.from([ x, y ].join(':')).toString('base64') // old
                            key.pub = pub.x+'.'+pub.y; // new
                            // x and y are already base64
                            // pub is UTF8 but filename/URL safe (https://www.ietf.org/rfc/rfc3986.txt)
                            // but split on a non-base64 letter.
                            return key;
                        })

                    // To include PGPv4 kind of keyId:
                    // const pubId = await SEA.keyid(keys.pub)
                    // Next: ECDH keys for encryption/decryption...

                    try{
                        var dh = await ecdhSubtle.generateKey(S.ecdh, true, ['deriveKey'])
                            .then(async (keys) => {
                                // privateKey scope doesn't leak out from here!
                                var key = {};
                                key.epriv = (await ecdhSubtle.exportKey('jwk', keys.privateKey)).d;
                                var pub = await ecdhSubtle.exportKey('jwk', keys.publicKey);
                                //const epub = Buff.from([ ex, ey ].join(':')).toString('base64') // old
                                key.epub = pub.x+'.'+pub.y; // new
                                // ex and ey are already base64
                                // epub is UTF8 but filename/URL safe (https://www.ietf.org/rfc/rfc3986.txt)
                                // but split on a non-base64 letter.
                                return key;
                            })
                    }catch(e){
                        if(SEA.window){ throw e }
                        if(e == 'Error: ECDH is not a supported algorithm'){ console.log('Ignoring ECDH...') }
                        else { throw e }
                    } dh = dh || {};

                    var r = { pub: sa.pub, priv: sa.priv, /* pubId, */ epub: dh.epub, epriv: dh.epriv }
                    if(cb){ try{ cb(r) }catch(e){console.log(e)} }
                    return r;
                } catch(e) {
                    console.log(e);
                    SEA.err = e;
                    if(SEA.throw){ throw e }
                    if(cb){ cb() }
                    return;
                }});

                module.exports = SEA.pair;
            })(USE, './pair');

            ;USE(function(module){
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');
                var sha = USE('./sha256');
                var u;

                SEA.sign = SEA.sign || (async (data, pair, cb, opt) => { try {
                    opt = opt || {};
                    if(!(pair||opt).priv){
                        pair = await SEA.I(null, {what: data, how: 'sign', why: opt.why});
                    }
                    if(u === data){ throw '`undefined` not allowed.' }
                    var json = S.parse(data);
                    var check = opt.check = opt.check || json;
                    if(SEA.verify && (SEA.opt.check(check) || (check && check.s && check.m))
                        && u !== await SEA.verify(check, pair)){ // don't sign if we already signed it.
                        var r = S.parse(check);
                        if(!opt.raw){ r = 'SEA'+JSON.stringify(r) }
                        if(cb){ try{ cb(r) }catch(e){console.log(e)} }
                        return r;
                    }
                    var pub = pair.pub;
                    var priv = pair.priv;
                    var jwk = S.jwk(pub, priv);
                    var hash = await sha(json);
                    var sig = await (shim.ossl || shim.subtle).importKey('jwk', jwk, S.ecdsa.pair, false, ['sign'])
                        .then((key) => (shim.ossl || shim.subtle).sign(S.ecdsa.sign, key, new Uint8Array(hash))) // privateKey scope doesn't leak out from here!
                    var r = {m: json, s: shim.Buffer.from(sig, 'binary').toString(opt.encode || 'base64')}
                    if(!opt.raw){ r = 'SEA'+JSON.stringify(r) }

                    if(cb){ try{ cb(r) }catch(e){console.log(e)} }
                    return r;
                } catch(e) {
                    console.log(e);
                    SEA.err = e;
                    if(SEA.throw){ throw e }
                    if(cb){ cb() }
                    return;
                }});

                module.exports = SEA.sign;
            })(USE, './sign');

            ;USE(function(module){
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');
                var sha = USE('./sha256');
                var u;

                SEA.verify = SEA.verify || (async (data, pair, cb, opt) => { try {
                    var json = S.parse(data);
                    if(false === pair){ // don't verify!
                        var raw = S.parse(json.m);
                        if(cb){ try{ cb(raw) }catch(e){console.log(e)} }
                        return raw;
                    }
                    opt = opt || {};
                    // SEA.I // verify is free! Requires no user permission.
                    var pub = pair.pub || pair;
                    var key = SEA.opt.slow_leak? await SEA.opt.slow_leak(pub) : await (shim.ossl || shim.subtle).importKey('jwk', jwk, S.ecdsa.pair, false, ['verify']);
                    var hash = await sha(json.m);
                    var buf, sig, check, tmp; try{
                        buf = shim.Buffer.from(json.s, opt.encode || 'base64'); // NEW DEFAULT!
                        sig = new Uint8Array(buf);
                        check = await (shim.ossl || shim.subtle).verify(S.ecdsa.sign, key, sig, new Uint8Array(hash));
                        if(!check){ throw "Signature did not match." }
                    }catch(e){
                        if(SEA.opt.fallback){
                            return await SEA.opt.fall_verify(data, pair, cb, opt);
                        }
                    }
                    var r = check? S.parse(json.m) : u;

                    if(cb){ try{ cb(r) }catch(e){console.log(e)} }
                    return r;
                } catch(e) {
                    console.log(e); // mismatched owner FOR MARTTI
                    SEA.err = e;
                    if(SEA.throw){ throw e }
                    if(cb){ cb() }
                    return;
                }});

                module.exports = SEA.verify;
                // legacy & ossl leak mitigation:

                var knownKeys = {};
                var keyForPair = SEA.opt.slow_leak = pair => {
                    if (knownKeys[pair]) return knownKeys[pair];
                    var jwk = S.jwk(pair);
                    knownKeys[pair] = (shim.ossl || shim.subtle).importKey("jwk", jwk, S.ecdsa.pair, false, ["verify"]);
                    return knownKeys[pair];
                };


                SEA.opt.fall_verify = async function(data, pair, cb, opt, f){
                    if(f === SEA.opt.fallback){ throw "Signature did not match" } f = f || 1;
                    var json = S.parse(data), pub = pair.pub || pair, key = await SEA.opt.slow_leak(pub);
                    var hash = (f <= SEA.opt.fallback)? shim.Buffer.from(await shim.subtle.digest({name: 'SHA-256'}, new shim.TextEncoder().encode(S.parse(json.m)))) : await sha(json.m); // this line is old bad buggy code but necessary for old compatibility.
                    var buf; var sig; var check; try{
                        buf = shim.Buffer.from(json.s, opt.encode || 'base64') // NEW DEFAULT!
                        sig = new Uint8Array(buf)
                        check = await (shim.ossl || shim.subtle).verify(S.ecdsa.sign, key, sig, new Uint8Array(hash))
                        if(!check){ throw "Signature did not match." }
                    }catch(e){
                        buf = shim.Buffer.from(json.s, 'utf8') // AUTO BACKWARD OLD UTF8 DATA!
                        sig = new Uint8Array(buf)
                        check = await (shim.ossl || shim.subtle).verify(S.ecdsa.sign, key, sig, new Uint8Array(hash))
                        if(!check){ throw "Signature did not match." }
                    }
                    var r = check? S.parse(json.m) : u;
                    if(cb){ try{ cb(r) }catch(e){console.log(e)} }
                    return r;
                }
                SEA.opt.fallback = 2;

            })(USE, './verify');

            ;USE(function(module){
                var shim = USE('./shim');
                var sha256hash = USE('./sha256');

                const importGen = async (key, salt, opt) => {
                    //const combo = shim.Buffer.concat([shim.Buffer.from(key, 'utf8'), salt || shim.random(8)]).toString('utf8') // old
                    var opt = opt || {};
                    const combo = key + (salt || shim.random(8)).toString('utf8'); // new
                    const hash = shim.Buffer.from(await sha256hash(combo), 'binary')
                    return await shim.subtle.importKey('raw', new Uint8Array(hash), opt.name || 'AES-GCM', false, ['encrypt', 'decrypt'])
                }
                module.exports = importGen;
            })(USE, './aeskey');

            ;USE(function(module){
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');
                var aeskey = USE('./aeskey');
                var u;

                SEA.encrypt = SEA.encrypt || (async (data, pair, cb, opt) => { try {
                    opt = opt || {};
                    var key = (pair||opt).epriv || pair;
                    if(u === data){ throw '`undefined` not allowed.' }
                    if(!key){
                        pair = await SEA.I(null, {what: data, how: 'encrypt', why: opt.why});
                        key = pair.epriv || pair;
                    }
                    var msg = (typeof data == 'string')? data : JSON.stringify(data);
                    var rand = {s: shim.random(9), iv: shim.random(15)}; // consider making this 9 and 15 or 18 or 12 to reduce == padding.
                    var ct = await aeskey(key, rand.s, opt).then((aes) => (/*shim.ossl ||*/ shim.subtle).encrypt({ // Keeping the AES key scope as private as possible...
                        name: opt.name || 'AES-GCM', iv: new Uint8Array(rand.iv)
                    }, aes, new shim.TextEncoder().encode(msg)));
                    var r = {
                        ct: shim.Buffer.from(ct, 'binary').toString(opt.encode || 'base64'),
                        iv: rand.iv.toString(opt.encode || 'base64'),
                        s: rand.s.toString(opt.encode || 'base64')
                    }
                    if(!opt.raw){ r = 'SEA'+JSON.stringify(r) }

                    if(cb){ try{ cb(r) }catch(e){console.log(e)} }
                    return r;
                } catch(e) {
                    console.log(e);
                    SEA.err = e;
                    if(SEA.throw){ throw e }
                    if(cb){ cb() }
                    return;
                }});

                module.exports = SEA.encrypt;
            })(USE, './encrypt');

            ;USE(function(module){
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');
                var aeskey = USE('./aeskey');

                SEA.decrypt = SEA.decrypt || (async (data, pair, cb, opt) => { try {
                    opt = opt || {};
                    var key = (pair||opt).epriv || pair;
                    if(!key){
                        pair = await SEA.I(null, {what: data, how: 'decrypt', why: opt.why});
                        key = pair.epriv || pair;
                    }
                    var json = S.parse(data);
                    var buf, bufiv, bufct; try{
                        buf = shim.Buffer.from(json.s, opt.encode || 'base64');
                        bufiv = shim.Buffer.from(json.iv, opt.encode || 'base64');
                        bufct = shim.Buffer.from(json.ct, opt.encode || 'base64');
                        var ct = await aeskey(key, buf, opt).then((aes) => (/*shim.ossl ||*/ shim.subtle).decrypt({  // Keeping aesKey scope as private as possible...
                            name: opt.name || 'AES-GCM', iv: new Uint8Array(bufiv)
                        }, aes, new Uint8Array(bufct)));
                    }catch(e){
                        if('utf8' === opt.encode){ throw "Could not decrypt" }
                        if(SEA.opt.fallback){
                            opt.encode = 'utf8';
                            return await SEA.decrypt(data, pair, cb, opt);
                        }
                    }
                    var r = S.parse(new shim.TextDecoder('utf8').decode(ct));
                    if(cb){ try{ cb(r) }catch(e){console.log(e)} }
                    return r;
                } catch(e) {
                    console.log(e);
                    SEA.err = e;
                    if(SEA.throw){ throw e }
                    if(cb){ cb() }
                    return;
                }});

                module.exports = SEA.decrypt;
            })(USE, './decrypt');

            ;USE(function(module){
                var SEA = USE('./root');
                var shim = USE('./shim');
                var S = USE('./settings');
                // Derive shared secret from other's pub and my epub/epriv
                SEA.secret = SEA.secret || (async (key, pair, cb, opt) => { try {
                    opt = opt || {};
                    if(!pair || !pair.epriv || !pair.epub){
                        pair = await SEA.I(null, {what: key, how: 'secret', why: opt.why});
                    }
                    var pub = key.epub || key;
                    var epub = pair.epub;
                    var epriv = pair.epriv;
                    var ecdhSubtle = shim.ossl || shim.subtle;
                    var pubKeyData = keysToEcdhJwk(pub);
                    var props = Object.assign(S.ecdh, { public: await ecdhSubtle.importKey(...pubKeyData, true, []) });
                    var privKeyData = keysToEcdhJwk(epub, epriv);
                    var derived = await ecdhSubtle.importKey(...privKeyData, false, ['deriveKey']).then(async (privKey) => {
                        // privateKey scope doesn't leak out from here!
                        var derivedKey = await ecdhSubtle.deriveKey(props, privKey, { name: 'AES-GCM', length: 256 }, true, [ 'encrypt', 'decrypt' ]);
                        return ecdhSubtle.exportKey('jwk', derivedKey).then(({ k }) => k);
                    })
                    var r = derived;
                    if(cb){ try{ cb(r) }catch(e){console.log(e)} }
                    return r;
                } catch(e) {
                    console.log(e);
                    SEA.err = e;
                    if(SEA.throw){ throw e }
                    if(cb){ cb() }
                    return;
                }});

                // can this be replaced with settings.jwk?
                var keysToEcdhJwk = (pub, d) => { // d === priv
                    //var [ x, y ] = Buffer.from(pub, 'base64').toString('utf8').split(':') // old
                    var [ x, y ] = pub.split('.') // new
                    var jwk = d ? { d: d } : {}
                    return [  // Use with spread returned value...
                        'jwk',
                        Object.assign(
                            jwk,
                            { x: x, y: y, kty: 'EC', crv: 'P-256', ext: true }
                        ), // ??? refactor
                        S.ecdh
                    ]
                }

                module.exports = SEA.secret;
            })(USE, './secret');

            ;USE(function(module){
                var shim = USE('./shim');
                // Practical examples about usage found from ./test/common.js
                var SEA = USE('./root');
                SEA.work = USE('./work');
                SEA.sign = USE('./sign');
                SEA.verify = USE('./verify');
                SEA.encrypt = USE('./encrypt');
                SEA.decrypt = USE('./decrypt');

                SEA.random = SEA.random || shim.random;

                // This is Buffer used in SEA and usable from Gun/SEA application also.
                // For documentation see https://nodejs.org/api/buffer.html
                SEA.Buffer = SEA.Buffer || USE('./buffer');

                // These SEA functions support now ony Promises or
                // async/await (compatible) code, use those like Promises.
                //
                // Creates a wrapper library around Web Crypto API
                // for various AES, ECDSA, PBKDF2 functions we called above.
                // Calculate public key KeyID aka PGPv4 (result: 8 bytes as hex string)
                SEA.keyid = SEA.keyid || (async (pub) => {
                    try {
                        // base64('base64(x):base64(y)') => Buffer(xy)
                        const pb = Buffer.concat(
                            pub.replace(/-/g, '+').replace(/_/g, '/').split('.')
                                .map((t) => Buffer.from(t, 'base64'))
                        )
                        // id is PGPv4 compliant raw key
                        const id = Buffer.concat([
                            Buffer.from([0x99, pb.length / 0x100, pb.length % 0x100]), pb
                        ])
                        const sha1 = await sha1hash(id)
                        const hash = Buffer.from(sha1, 'binary')
                        return hash.toString('hex', hash.length - 8)  // 16-bit ID as hex
                    } catch (e) {
                        console.log(e)
                        throw e
                    }
                });
                // all done!
                // Obviously it is missing MANY necessary features. This is only an alpha release.
                // Please experiment with it, audit what I've done so far, and complain about what needs to be added.
                // SEA should be a full suite that is easy and seamless to use.
                // Again, scroll naer the top, where I provide an EXAMPLE of how to create a user and sign in.
                // Once logged in, the rest of the code you just read handled automatically signing/validating data.
                // But all other behavior needs to be equally easy, like opinionated ways of
                // Adding friends (trusted public keys), sending private messages, etc.
                // Cheers! Tell me what you think.
                var Gun = (SEA.window||{}).Gun || USE((typeof common == "undefined"?'.':'')+'./gun', 1);
                Gun.SEA = SEA;
                SEA.GUN = SEA.Gun = Gun;

                module.exports = SEA
            })(USE, './sea');

            ;USE(function(module){
                var Gun = USE('./sea').Gun;
                Gun.chain.then = function(cb){
                    var gun = this, p = (new Promise(function(res, rej){
                        gun.once(res);
                    }));
                    return cb? p.then(cb) : p;
                }
            })(USE, './then');

            ;USE(function(module){
                var SEA = USE('./sea');
                var Gun = SEA.Gun;
                var then = USE('./then');

                function User(root){
                    this._ = {$: this};
                }
                User.prototype = (function(){ function F(){}; F.prototype = Gun.chain; return new F() }()) // Object.create polyfill
                User.prototype.constructor = User;

                // let's extend the gun chain with a `user` function.
                // only one user can be logged in at a time, per gun instance.
                Gun.chain.user = function(pub){
                    var gun = this, root = gun.back(-1), user;
                    if(pub){ return root.get('~'+pub) }
                    if(user = root.back('user')){ return user }
                    var root = (root._), at = root, uuid = at.opt.uuid || Gun.state.lex;
                    (at = (user = at.user = gun.chain(new User))._).opt = {};
                    at.opt.uuid = function(cb){
                        var id = uuid(), pub = root.user;
                        if(!pub || !(pub = pub.is) || !(pub = pub.pub)){ return id }
                        id = id + '~' + pub + '.';
                        if(cb && cb.call){ cb(null, id) }
                        return id;
                    }
                    return user;
                }
                Gun.User = User;
                module.exports = User;
            })(USE, './user');

            ;USE(function(module){
                // TODO: This needs to be split into all separate functions.
                // Not just everything thrown into 'create'.

                var SEA = USE('./sea');
                var User = USE('./user');
                var authsettings = USE('./settings');
                var Gun = SEA.Gun;

                var noop = function(){};

                // Well first we have to actually create a user. That is what this function does.
                User.prototype.create = function(alias, pass, cb, opt){
                    var gun = this, cat = (gun._), root = gun.back(-1);
                    cb = cb || noop;
                    if(cat.ing){
                        cb({err: Gun.log("User is already being created or authenticated!"), wait: true});
                        return gun;
                    }
                    cat.ing = true;
                    opt = opt || {};
                    var act = {}, u;
                    act.a = function(pubs){
                        act.pubs = pubs;
                        if(pubs && !opt.already){
                            // If we can enforce that a user name is already taken, it might be nice to try, but this is not guaranteed.
                            var ack = {err: Gun.log('User already created!')};
                            cat.ing = false;
                            cb(ack);
                            gun.leave();
                            return;
                        }
                        act.salt = Gun.text.random(64); // pseudo-randomly create a salt, then use PBKDF2 function to extend the password with it.
                        SEA.work(pass, act.salt, act.b); // this will take some short amount of time to produce a proof, which slows brute force attacks.
                    }
                    act.b = function(proof){
                        act.proof = proof;
                        SEA.pair(act.c); // now we have generated a brand new ECDSA key pair for the user account.
                    }
                    act.c = function(pair){ var tmp;
                        act.pair = pair || {};
                        if(tmp = cat.root.user){
                            tmp._.sea = pair;
                            tmp.is = {pub: pair.pub, epub: pair.epub, alias: alias};
                        }
                        // the user's public key doesn't need to be signed. But everything else needs to be signed with it! // we have now automated it! clean up these extra steps now!
                        act.data = {pub: pair.pub};
                        act.d();
                    }
                    act.d = function(){
                        act.data.alias = alias;
                        act.e();
                    }
                    act.e = function(){
                        act.data.epub = act.pair.epub;
                        SEA.encrypt({priv: act.pair.priv, epriv: act.pair.epriv}, act.proof, act.f, {raw:1}); // to keep the private key safe, we AES encrypt it with the proof of work!
                    }
                    act.f = function(auth){
                        act.data.auth = JSON.stringify({ek: auth, s: act.salt});
                        act.g(act.data.auth);
                    }
                    act.g = function(auth){ var tmp;
                        act.data.auth = act.data.auth || auth;
                        root.get(tmp = '~'+act.pair.pub).put(act.data); // awesome, now we can actually save the user with their public key as their ID.
                        root.get('~@'+alias).put(Gun.obj.put({}, tmp, Gun.val.link.ify(tmp))); // next up, we want to associate the alias with the public key. So we add it to the alias list.
                        setTimeout(function(){ // we should be able to delete this now, right?
                            cat.ing = false;
                            cb({ok: 0, pub: act.pair.pub}); // callback that the user has been created. (Note: ok = 0 because we didn't wait for disk to ack)
                            if(noop === cb){ gun.auth(alias, pass) } // if no callback is passed, auto-login after signing up.
                        },10);
                    }
                    root.get('~@'+alias).once(act.a);
                    return gun;
                }
                // now that we have created a user, we want to authenticate them!
                User.prototype.auth = function(alias, pass, cb, opt){
                    var gun = this, cat = (gun._), root = gun.back(-1);
                    cb = cb || function(){};
                    if(cat.ing){
                        cb({err: Gun.log("User is already being created or authenticated!"), wait: true});
                        return gun;
                    }
                    cat.ing = true;
                    opt = opt || {};
                    var pair = (alias && (alias.pub || alias.epub))? alias : (pass && (pass.pub || pass.epub))? pass : null;
                    var act = {}, u;
                    act.a = function(data){
                        if(!data){ return act.b() }
                        if(!data.pub){
                            var tmp = [];
                            Gun.node.is(data, function(v){ tmp.push(v) })
                            return act.b(tmp);
                        }
                        if(act.name){ return act.f(data) }
                        act.c((act.data = data).auth);
                    }
                    act.b = function(list){
                        var get = (act.list = (act.list||[]).concat(list||[])).shift();
                        if(u === get){
                            if(act.name){ return act.err('Your user account is not published for dApps to access, please consider syncing it online, or allowing local access by adding your device as a peer.') }
                            return act.err('Wrong user or password.')
                        }
                        root.get(get).once(act.a);
                    }
                    act.c = function(auth){
                        if(u === auth){ return act.b() }
                        if(Gun.text.is(auth)){ return act.c(Gun.obj.ify(auth)) } // in case of legacy
                        SEA.work(pass, (act.auth = auth).s, act.d, act.enc); // the proof of work is evidence that we've spent some time/effort trying to log in, this slows brute force.
                    }
                    act.d = function(proof){
                        SEA.decrypt(act.auth.ek, proof, act.e, act.enc);
                    }
                    act.e = function(half){
                        if(u === half){
                            if(!act.enc){ // try old format
                                act.enc = {encode: 'utf8'};
                                return act.c(act.auth);
                            } act.enc = null; // end backwards
                            return act.b();
                        }
                        act.half = half;
                        act.f(act.data);
                    }
                    act.f = function(data){
                        if(!data || !data.pub){ return act.b() }
                        var tmp = act.half || {};
                        act.g({pub: data.pub, epub: data.epub, priv: tmp.priv, epriv: tmp.epriv});
                    }
                    act.g = function(pair){
                        act.pair = pair;
                        var user = (root._).user, at = (user._);
                        var tmp = at.tag;
                        var upt = at.opt;
                        at = user._ = root.get('~'+pair.pub)._;
                        at.opt = upt;
                        // add our credentials in-memory only to our root user instance
                        user.is = {pub: pair.pub, epub: pair.epub, alias: alias};
                        at.sea = act.pair;
                        cat.ing = false;
                        try{if(pass && !Gun.obj.has(Gun.obj.ify(cat.root.graph['~'+pair.pub].auth), ':')){ opt.shuffle = opt.change = pass; } }catch(e){} // migrate UTF8 & Shuffle!
                        opt.change? act.z() : cb(at);
                        if(SEA.window && ((gun.back('user')._).opt||opt).remember){
                            // TODO: this needs to be modular.
                            try{var sS = {};
                                sS = window.sessionStorage;
                                sS.recall = true;
                                sS.alias = alias;
                                sS.tmp = pass;
                            }catch(e){}
                        }
                        try{
                            (root._).on('auth', at) // TODO: Deprecate this, emit on user instead! Update docs when you do.
                            //at.on('auth', at) // Arrgh, this doesn't work without event "merge" code, but "merge" code causes stack overflow and crashes after logging in & trying to write data.
                        }catch(e){
                            Gun.log("Your 'auth' callback crashed with:", e);
                        }
                    }
                    act.z = function(){
                        // password update so encrypt private key using new pwd + salt
                        act.salt = Gun.text.random(64); // pseudo-random
                        SEA.work(opt.change, act.salt, act.y);
                    }
                    act.y = function(proof){
                        SEA.encrypt({priv: act.pair.priv, epriv: act.pair.epriv}, proof, act.x, {raw:1});
                    }
                    act.x = function(auth){
                        act.w(JSON.stringify({ek: auth, s: act.salt}));
                    }
                    act.w = function(auth){
                        if(opt.shuffle){ // delete in future!
                            console.log('migrate core account from UTF8 & shuffle');
                            var tmp = Gun.obj.to(act.data);
                            Gun.obj.del(tmp, '_');
                            tmp.auth = auth;
                            root.get('~'+act.pair.pub).put(tmp);
                        } // end delete
                        root.get('~'+act.pair.pub).get('auth').put(auth, cb);
                    }
                    act.err = function(e){
                        var ack = {err: Gun.log(e || 'User cannot be found!')};
                        cat.ing = false;
                        cb(ack);
                    }
                    act.plugin = function(name){
                        if(!(act.name = name)){ return act.err() }
                        var tmp = [name];
                        if('~' !== name[0]){
                            tmp[1] = '~'+name;
                            tmp[2] = '~@'+name;
                        }
                        act.b(tmp);
                    }
                    if(pair){
                        act.g(pair);
                    } else
                    if(alias){
                        root.get('~@'+alias).once(act.a);
                    } else
                    if(!alias && !pass){
                        SEA.name(act.plugin);
                    }
                    return gun;
                }
                User.prototype.pair = function(){
                    console.log("user.pair() IS DEPRECATED AND WILL BE DELETED!!!");
                    var user = this;
                    if(!user.is){ return false }
                    return user._.sea;
                }
                User.prototype.leave = function(opt, cb){
                    var gun = this, user = (gun.back(-1)._).user;
                    if(user){
                        delete user.is;
                        delete user._.is;
                        delete user._.sea;
                    }
                    if(SEA.window){
                        try{var sS = {};
                            sS = window.sessionStorage;
                            delete sS.alias;
                            delete sS.tmp;
                            delete sS.recall;
                        }catch(e){};
                    }
                    return gun;
                }
                // If authenticated user wants to delete his/her account, let's support it!
                User.prototype.delete = async function(alias, pass, cb){
                    var gun = this, root = gun.back(-1), user = gun.back('user');
                    try {
                        user.auth(alias, pass, function(ack){
                            var pub = (user.is||{}).pub;
                            // Delete user data
                            user.map().once(function(){ this.put(null) });
                            // Wipe user data from memory
                            user.leave();
                            (cb || noop)({ok: 0});
                        });
                    } catch (e) {
                        Gun.log('User.delete failed! Error:', e);
                    }
                    return gun;
                }
                User.prototype.recall = function(opt, cb){
                    var gun = this, root = gun.back(-1), tmp;
                    opt = opt || {};
                    if(opt && opt.sessionStorage){
                        if(SEA.window){
                            try{var sS = {};
                                sS = window.sessionStorage;
                                if(sS){
                                    (root._).opt.remember = true;
                                    ((gun.back('user')._).opt||opt).remember = true;
                                    if(sS.recall || (sS.alias && sS.tmp)){
                                        root.user().auth(sS.alias, sS.tmp, cb);
                                    }
                                }
                            }catch(e){}
                        }
                        return gun;
                    }
                    /*
        TODO: copy mhelander's expiry code back in.
        Although, we should check with community,
        should expiry be core or a plugin?
      */
                    return gun;
                }
                User.prototype.alive = async function(){
                    const gunRoot = this.back(-1)
                    try {
                        // All is good. Should we do something more with actual recalled data?
                        await authRecall(gunRoot)
                        return gunRoot._.user._
                    } catch (e) {
                        const err = 'No session!'
                        Gun.log(err)
                        throw { err }
                    }
                }
                User.prototype.trust = async function(user){
                    // TODO: BUG!!! SEA `node` read listener needs to be async, which means core needs to be async too.
                    //gun.get('alice').get('age').trust(bob);
                    if (Gun.is(user)) {
                        user.get('pub').get((ctx, ev) => {
                            console.log(ctx, ev)
                        })
                    }
                }
                User.prototype.grant = function(to, cb){
                    console.log("`.grant` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
                    var gun = this, user = gun.back(-1).user(), pair = user.pair(), path = '';
                    gun.back(function(at){ if(at.is){ return } path += (at.get||'') });
                    (async function(){
                        var enc, sec = await user.get('trust').get(pair.pub).get(path).then();
                        sec = await SEA.decrypt(sec, pair);
                        if(!sec){
                            sec = SEA.random(16).toString();
                            enc = await SEA.encrypt(sec, pair);
                            user.get('trust').get(pair.pub).get(path).put(enc);
                        }
                        var pub = to.get('pub').then();
                        var epub = to.get('epub').then();
                        pub = await pub; epub = await epub;
                        var dh = await SEA.secret(epub, pair);
                        enc = await SEA.encrypt(sec, dh);
                        user.get('trust').get(pub).get(path).put(enc, cb);
                    }());
                    return gun;
                }
                User.prototype.secret = function(data, cb){
                    console.log("`.secret` API MAY BE DELETED OR CHANGED OR RENAMED, DO NOT USE!");
                    var gun = this, user = gun.back(-1).user(), pair = user.pair(), path = '';
                    gun.back(function(at){ if(at.is){ return } path += (at.get||'') });
                    (async function(){
                        var enc, sec = await user.get('trust').get(pair.pub).get(path).then();
                        sec = await SEA.decrypt(sec, pair);
                        if(!sec){
                            sec = SEA.random(16).toString();
                            enc = await SEA.encrypt(sec, pair);
                            user.get('trust').get(pair.pub).get(path).put(enc);
                        }
                        enc = await SEA.encrypt(data, sec);
                        gun.put(enc, cb);
                    }());
                    return gun;
                }
                module.exports = User
            })(USE, './create');

            ;USE(function(module){
                const SEA = USE('./sea')
                const Gun = SEA.Gun;
                // After we have a GUN extension to make user registration/login easy, we then need to handle everything else.

                // We do this with a GUN adapter, we first listen to when a gun instance is created (and when its options change)
                Gun.on('opt', function(at){
                    if(!at.sea){ // only add SEA once per instance, on the "at" context.
                        at.sea = {own: {}};
                        at.on('in', security, at); // now listen to all input data, acting as a firewall.
                        at.on('out', signature, at); // and output listeners, to encrypt outgoing data.
                        at.on('node', each, at);
                    }
                    this.to.next(at); // make sure to call the "next" middleware adapter.
                });

                // Alright, this next adapter gets run at the per node level in the graph database.
                // This will let us verify that every property on a node has a value signed by a public key we trust.
                // If the signature does not match, the data is just `undefined` so it doesn't get passed on.
                // If it does match, then we transform the in-memory "view" of the data into its plain value (without the signature).
                // Now NOTE! Some data is "system" data, not user data. Example: List of public keys, aliases, etc.
                // This data is self-enforced (the value can only match its ID), but that is handled in the `security` function.
                // From the self-enforced data, we can see all the edges in the graph that belong to a public key.
                // Example: ~ASDF is the ID of a node with ASDF as its public key, signed alias and salt, and
                // its encrypted private key, but it might also have other signed values on it like `profile = <ID>` edge.
                // Using that directed edge's ID, we can then track (in memory) which IDs belong to which keys.
                // Here is a problem: Multiple public keys can "claim" any node's ID, so this is dangerous!
                // This means we should ONLY trust our "friends" (our key ring) public keys, not any ones.
                // I have not yet added that to SEA yet in this alpha release. That is coming soon, but beware in the meanwhile!
                function each(msg){ // TODO: Warning: Need to switch to `gun.on('node')`! Do not use `Gun.on('node'` in your apps!
                    // NOTE: THE SECURITY FUNCTION HAS ALREADY VERIFIED THE DATA!!!
                    // WE DO NOT NEED TO RE-VERIFY AGAIN, JUST TRANSFORM IT TO PLAINTEXT.
                    var to = this.to, vertex = (msg.$._).put, c = 0, d;
                    Gun.node.is(msg.put, function(val, key, node){
                        // only process if SEA formatted?
                        var tmp = Gun.obj.ify(val) || noop;
                        if(u !== tmp[':']){
                            node[key] = SEA.opt.unpack(tmp);
                            return;
                        }
                        if(!SEA.opt.check(val)){ return }
                        c++; // for each property on the node
                        SEA.verify(val, false, function(data){ c--; // false just extracts the plain data.
                            node[key] = SEA.opt.unpack(data, key, node);; // transform to plain value.
                            if(d && !c && (c = -1)){ to.next(msg) }
                        });
                    });
                    if((d = true) && !c){ to.next(msg) }
                }

                // signature handles data output, it is a proxy to the security function.
                function signature(msg){
                    if((msg._||noop).user){
                        return this.to.next(msg);
                    }
                    var ctx = this.as;
                    (msg._||(msg._=function(){})).user = ctx.user;
                    security.call(this, msg);
                }

                // okay! The security function handles all the heavy lifting.
                // It needs to deal read and write of input and output of system data, account/public key data, and regular data.
                // This is broken down into some pretty clear edge cases, let's go over them:
                function security(msg){
                    var at = this.as, sea = at.sea, to = this.to;
                    if(at.opt.faith && (msg._||noop).faith){ // you probably shouldn't have faith in this!
                        this.to.next(msg); // why do we allow skipping security? I'm very scared about it actually.
                        return; // but so that way storage adapters that already verified something can get performance boost. This was a community requested feature. If anybody finds an exploit with it, please report immediately. It should only be exploitable if you have XSS control anyways, which if you do, you can bypass security regardless of this.
                    }
                    if(msg.get){
                        // if there is a request to read data from us, then...
                        var soul = msg.get['#'];
                        if(soul){ // for now, only allow direct IDs to be read.
                            if(typeof soul !== 'string'){ return to.next(msg) } // do not handle lexical cursors.
                            if('alias' === soul){ // Allow reading the list of usernames/aliases in the system?
                                return to.next(msg); // yes.
                            } else
                            if('~@' === soul.slice(0,2)){ // Allow reading the list of public keys associated with an alias?
                                return to.next(msg); // yes.
                            } else { // Allow reading everything?
                                return to.next(msg); // yes // TODO: No! Make this a callback/event that people can filter on.
                            }
                        }
                    }
                    if(msg.put){
                        // potentially parallel async operations!!!
                        var check = {}, each = {}, u;
                        each.node = function(node, soul){
                            if(Gun.obj.empty(node, '_')){ return check['node'+soul] = 0 } // ignore empty updates, don't reject them.
                            Gun.obj.map(node, each.way, {soul: soul, node: node});
                        };
                        each.way = function(val, key){
                            var soul = this.soul, node = this.node, tmp;
                            if('_' === key){ return } // ignore meta data
                            if('~@' === soul){  // special case for shared system data, the list of aliases.
                                each.alias(val, key, node, soul); return;
                            }
                            if('~@' === soul.slice(0,2)){ // special case for shared system data, the list of public keys for an alias.
                                each.pubs(val, key, node, soul); return;
                            }
                            if('~' === soul.slice(0,1) && 2 === (tmp = soul.slice(1)).split('.').length){ // special case, account data for a public key.
                                each.pub(val, key, node, soul, tmp, (msg._||noop).user); return;
                            }
                            each.any(val, key, node, soul, (msg._||noop).user); return;
                            return each.end({err: "No other data allowed!"});
                        };
                        each.alias = function(val, key, node, soul){ // Example: {_:#~@, ~@alice: {#~@alice}}
                            if(!val){ return each.end({err: "Data must exist!"}) } // data MUST exist
                            if('~@'+key === Gun.val.link.is(val)){ return check['alias'+key] = 0 } // in fact, it must be EXACTLY equal to itself
                            each.end({err: "Mismatching alias."}); // if it isn't, reject.
                        };
                        each.pubs = function(val, key, node, soul){ // Example: {_:#~@alice, ~asdf: {#~asdf}}
                            if(!val){ return each.end({err: "Alias must exist!"}) } // data MUST exist
                            if(key === Gun.val.link.is(val)){ return check['pubs'+soul+key] = 0 } // and the ID must be EXACTLY equal to its property
                            each.end({err: "Alias must match!"}); // that way nobody can tamper with the list of public keys.
                        };
                        each.pub = function(val, key, node, soul, pub, user){ var tmp; // Example: {_:#~asdf, hello:'world'~fdsa}}
                            if('pub' === key){
                                if(val === pub){ return (check['pub'+soul+key] = 0) } // the account MUST match `pub` property that equals the ID of the public key.
                                return each.end({err: "Account must match!"});
                            }
                            check['user'+soul+key] = 1;
                            if(Gun.is(msg.$) && user && user.is && pub === user.is.pub){
                                SEA.sign(SEA.opt.prep(tmp = SEA.opt.parse(val), key, node, soul), (user._).sea, function(data){ var rel;
                                    if(u === data){ return each.end({err: SEA.err || 'Pub signature fail.'}) }
                                    if(rel = Gun.val.link.is(val)){
                                        (at.sea.own[rel] = at.sea.own[rel] || {})[pub] = true;
                                    }
                                    node[key] = JSON.stringify({':': SEA.opt.unpack(data.m), '~': data.s});
                                    check['user'+soul+key] = 0;
                                    each.end({ok: 1});
                                }, {check: SEA.opt.pack(tmp, key, node, soul), raw: 1});
                                return;
                            }
                            SEA.verify(SEA.opt.pack(val,key,node,soul), pub, function(data){ var rel, tmp;
                                data = SEA.opt.unpack(data, key, node);
                                if(u === data){ // make sure the signature matches the account it claims to be on.
                                    return each.end({err: "Unverified data."}); // reject any updates that are signed with a mismatched account.
                                }
                                if((rel = Gun.val.link.is(data)) && pub === SEA.opt.pub(rel)){
                                    (at.sea.own[rel] = at.sea.own[rel] || {})[pub] = true;
                                }
                                check['user'+soul+key] = 0;
                                each.end({ok: 1});
                            });
                        };
                        each.any = function(val, key, node, soul, user){ var tmp, pub;
                            if(!(pub = SEA.opt.pub(soul))){
                                if(at.opt.secure){
                                    each.end({err: "Soul is missing public key at '" + key + "'."});
                                    return;
                                }
                                // TODO: Ask community if should auto-sign non user-graph data.
                                check['any'+soul+key] = 1;
                                at.on('secure', function(msg){ this.off();
                                    check['any'+soul+key] = 0;
                                    if(at.opt.secure){ msg = null }
                                    each.end(msg || {err: "Data cannot be modified."});
                                }).on.on('secure', msg);
                                //each.end({err: "Data cannot be modified."});
                                return;
                            }
                            if(Gun.is(msg.$) && user && user.is && pub === user.is.pub){
                                /*var other = Gun.obj.map(at.sea.own[soul], function(v, p){
              if((user.is||{}).pub !== p){ return p }
            });
            if(other){
              each.any(val, key, node, soul);
              return;
            }*/
                                check['any'+soul+key] = 1;
                                SEA.sign(SEA.opt.prep(tmp = SEA.opt.parse(val), key, node, soul), (user._).sea, function(data){
                                    if(u === data){ return each.end({err: 'My signature fail.'}) }
                                    node[key] = JSON.stringify({':': SEA.opt.unpack(data.m), '~': data.s});
                                    check['any'+soul+key] = 0;
                                    each.end({ok: 1});
                                }, {check: SEA.opt.pack(tmp, key, node, soul), raw: 1});
                                return;
                            }
                            check['any'+soul+key] = 1;
                            SEA.verify(SEA.opt.pack(val,key,node,soul), pub, function(data){ var rel;
                                data = SEA.opt.unpack(data, key, node);
                                if(u === data){ return each.end({err: "Mismatched owner on '" + key + "'."}) } // thanks @rogowski !
                                if((rel = Gun.val.link.is(data)) && pub === SEA.opt.pub(rel)){
                                    (at.sea.own[rel] = at.sea.own[rel] || {})[pub] = true;
                                }
                                check['any'+soul+key] = 0;
                                each.end({ok: 1});
                            });
                        }
                        each.end = function(ctx){ // TODO: Can't you just switch this to each.end = cb?
                            if(each.err){ return }
                            if((each.err = ctx.err) || ctx.no){
                                console.log('NO!', each.err, msg.put); // 451 mistmached data FOR MARTTI
                                return;
                            }
                            if(!each.end.ed){ return }
                            if(Gun.obj.map(check, function(no){
                                if(no){ return true }
                            })){ return }
                            (msg._||{}).user = at.user || security; // already been through firewall, does not need to again on out.
                            to.next(msg);
                        };
                        Gun.obj.map(msg.put, each.node);
                        each.end({end: each.end.ed = true});
                        return; // need to manually call next after async.
                    }
                    to.next(msg); // pass forward any data we do not know how to handle or process (this allows custom security protocols).
                }
                SEA.opt.pub = function(s){
                    if(!s){ return }
                    s = s.split('~');
                    if(!s || !(s = s[1])){ return }
                    s = s.split('.');
                    if(!s || 2 > s.length){ return }
                    s = s.slice(0,2).join('.');
                    return s;
                }
                SEA.opt.prep = function(d,k, n,s){ // prep for signing
                    return {'#':s,'.':k,':':SEA.opt.parse(d),'>':Gun.state.is(n, k)};
                }
                SEA.opt.pack = function(d,k, n,s){ // pack for verifying
                    if(SEA.opt.check(d)){ return d }
                    var meta = (Gun.obj.ify(d)||noop), sig = meta['~'];
                    return sig? {m: {'#':s,'.':k,':':meta[':'],'>':Gun.state.is(n, k)}, s: sig} : d;
                }
                SEA.opt.unpack = function(d, k, n){ var tmp;
                    if(u === d){ return }
                    if(d && (u !== (tmp = d[':']))){ return tmp }
                    if(!k || !n){ return }
                    if(d === n[k]){ return d }
                    if(!SEA.opt.check(n[k])){ return d }
                    var soul = Gun.node.soul(n), s = Gun.state.is(n, k);
                    if(d && 4 === d.length && soul === d[0] && k === d[1] && fl(s) === fl(d[3])){
                        return d[2];
                    }
                    if(s < SEA.opt.shuffle_attack){
                        return d;
                    }
                }
                SEA.opt.shuffle_attack = 1546329600000; // Jan 1, 2019
                var noop = function(){}, u;
                var fl = Math.floor; // TODO: Still need to fix inconsistent state issue.
                var rel_is = Gun.val.rel.is;
                // TODO: Potential bug? If pub/priv key starts with `-`? IDK how possible.

            })(USE, './index');
        }());;(function(){
            function as(el, gun, cb, opt){
                el = $(el);
                if(gun === as.gui && as.el && as.el.is(el)){ return }

                opt = opt || {};
                opt.match = opt.match || '{{ ';
                opt.end = opt.end || ' }}';
                ;(function(){ // experimental
                    function nest(t, s,e, r, i,tmp,u){
                        if(r && !r.length){ return t||'' }
                        if(!t){ return [] }
                        e = e || s;
                        i = t.indexOf(s, i||0);
                        if(0 > i){ return [] }
                        tmp = t.indexOf(e, i+1);
                        if(!r){ return [t.slice(i+s.length, tmp)].concat(nest(t, s,e, r, tmp,tmp,u)) }
                        return t.slice(0,i)+r[0]+nest(t.slice(tmp+e.length), s,e, r.slice(1), 0,tmp,u);
                    }

                    /* experimental */
                    function template(tag, attr){
                        var html = (tag = $(tag))[0].outerHTML, sub, tmp;
                        if(html && (0 > html.indexOf(opt.match))){ return }
                        if(!attr){
                            $.each(tag[0].attributes, function(i,v){
                                if(!v){ return }
                                if(!nest(v.value, opt.match, opt.end).length){ return }
                                template(tag, v.name)
                            });
                            if((sub = tag.children()).length){
                                return sub.each(function(){ template(this) });
                            }
                        }
                        var data = [], plate = attr? tag.attr(attr) : tag.html();
                        tmp = nest(plate, opt.match, opt.end);
                        if(!tmp.length){ return }
                        $.each(tmp, function(pos, match){
                            var expr = match.split(' ');
                            var path = (expr[0]).split('.');
                            if(expr = expr.slice(1).join(' ')){
                                expr = new Function("_", "b", "return (_)" + expr);
                            }
                            var val = (expr && expr('')) || '';
                            data.push(val);
                            if(!attr){ tag.text(val) }

                            var ref = gun, sup = [], tmp;
                            if(tmp = tag.attr('name')){ sup.push(tmp) }
                            tag.parents("[name]").each(function(){
                                sup.push($(this).attr('name'));
                            });
                            $.each(path = sup.reverse().concat(path), function(i,v){
                                ref = ref.get(v);
                            });
                            ref.on(function(v){
                                v = data[pos] = expr? expr(v) : v;
                                var tmp = nest(plate, opt.match, opt.end, data);
                                if(attr){
                                    tag.attr(attr, tmp);
                                } else {
                                    tag.text(tmp);
                                }
                            });
                        });
                    }
                    template(el);

                }());

                as.gui = gun;
                as.el = el;
                if(el.data('as')){
                    el.html(el.data('as').fresh);
                } else {
                    el.data('as', {
                        fresh: el.html()
                    })
                }
                el.find("[name]").each(function(){
                    if($(this).find("[name]").length){ return }
                    var name = $(this),
                        parents = name.parents("[name]"),
                        path = [],
                        ref = gun;

                    path.push(name.attr('name'));
                    parents.each(function(){
                        path.push($(this).attr('name'));
                    });
                    path = path.reverse();

                    path.forEach(function(key){
                        if('#' === key){
                            ref = ref.map()
                        } else {
                            ref = ref.get(key);
                        }
                    });

                    var many = path.slice().reverse().indexOf('#'), model;
                    many = (0 < ++many)? many : false;
                    if(many){
                        model = name.closest("[name='#']");
                        model = model.data('model') || model.data('model', {$: model.clone(), on: model.parent(), has: {}}).hide().data('model');
                    }

                    ref.get(function(at){
                        var data = at.put, key = at.get, gui = at.gun || at.$, ui = name, back;
                        if(model){
                            ui = model.has[(gui._).id];
                            if(!ui){
                                back = gui.back(many - 1);
                                ui = model.has[(back._).id];
                                if(!ui){
                                    if(!(back._).get){ return }
                                    ui = (model.has[(back._).id] = model.$.clone(true).prependTo(model.on));
                                }
                                ui = ui.find("[name='"+key+"']").first();
                                model.has[(gui._).id] = ui;
                            }
                        }
                        ui.data('gun', gui);
                        if(ui.data('was') === data){ return }
                        if(many && ui.is('.sort')){
                            var up = ui.closest("[name='#']");
                            var tmp = as.sort(data, up.parent().children().last());
                            tmp? up.insertAfter(tmp) : up.prependTo(up.parent());
                        }
                        if(as.lock === gui){ return }
                        if(!(data && data instanceof Object)){
                            (ui[0] && u === ui[0].value)? ui.text(data) : ui.val(data);
                        }
                        ui.data('was', data);
                        if(cb){
                            cb(data, key, ui);
                        }
                    });
                });
            }
            as.wait = function(cb, wait, to){
                return function(a,b,c){
                    var me = as.typing = this;
                    clearTimeout(to);
                    to = setTimeout(function(){
                        cb.call(me, a,b,c);
                        as.typing = me = false;
                    }, wait || 200);
                }
            }
            as.sort = function sort(num, li){ return parseFloat(num) >= parseFloat($(li).find('.sort').text() || -Infinity)? li : sort(num, li.prev()) }
            $(document).on('keyup', 'input, textarea, [contenteditable]', as.wait(function(){
                var el = $(this);
                var data = (el[0] && u === el[0].value)? el.text() : el.val();
                var g = el.data('gun');
                if(!g){ return }
                as.lock = g;
                g.put(data);
            }, 99));
            //$(document).on('submit', 'form', function(e){ e.preventDefault() });
            var u;
            window.as = as;
            $.as = as;
        }());

        ;(function(){
            $(document).on('click', 'a, button', function(e){
                var tmp = $(this).attr('href') || '';
                if(0 === tmp.indexOf('http')){ return }
                e.preventDefault();
                r(tmp);
            });
            function r(href){
                if(!href){ return }
                if(href[0] == '#'){ href = href.slice(1) }
                var h = href.split('/')[0];
                $('.page').hide();
                $('#' + h).show();
                if(r.on === h){ return }
                location.hash = href;
                (r.page[h] || {on:function(){}}).on();
                r.on = h;
                return r;
            };
            r.page = function(h, cb){
                r.page[h] = r.page[h] || {on: cb};
                return r;
            }
            r.render = function(id, model, onto, data){
                var $data = $(
                    $('#' + id).get(0) ||
                    $('.model').find(model).clone(true).attr('id', id).appendTo(onto)
                );
                $.each(data, function(field, val){
                    if($.isPlainObject(val)){ return }
                    $data.find("[name='" + field + "']").val(val).text(val);
                });
                return $data;
            }
            window.onhashchange = function(){ r(location.hash.slice(1)) };
            $.as && ($.as.route = r);
            if(window.as){
                as.route = r;
            } else {
                $.route = r;
            }
        }());

        ;$(function(){
            $('.page').not(':first').hide();
            $.as.route(location.hash.slice(1));
            $(JOY.start = JOY.start || function(){ $.as(document, gun, null, JOY.opt) });

            if($('body').attr('peers')){ (console.warn || console.log)('Warning: Please upgrade <body peers=""> to https://github.com/eraeco/joydb#peers !') }

        });
        ;(function(){ // need to isolate into separate module!
            var joy = window.JOY = function(){};
            joy.auth = function(a,b,cb,o){
                if(!o){ o = cb ; cb = 0 }
                if(o === true){
                    gun.user().create(a, b);
                    return;
                }
                gun.user().auth(a,b, cb,o);
            }

            var opt = joy.opt = window.CONFIG || {}, peers;
            $('link[type=peer]').each(function(){ (peers || (peers = [])).push($(this).attr('href')) });
            !window.gun && (opt.peers = opt.peers || peers || (function(){
                (console.warn || console.log)('Warning: No peer provided, defaulting to DEMO peer. Do not run in production, or your data will be regularly wiped, reset, or deleted. For more info, check https://github.com/eraeco/joydb#peers !');
                return ['https://gunjs.herokuapp.com/gun'];
            }()));
            window.gun = window.gun || Gun(opt);

            gun.on('auth', function(ack){
                console.log("Your namespace is publicly available at", ack.soul);
            });
        }());
        if(!o){ o = cb ; cb = 0 }
        if(o === true){
            gun.user().create(a, b);
            return;
        }
        gun.user().auth(a,b, cb,o);
    }

    var opt = joy.opt = window.CONFIG || {}, peers;
    $('link[type=peer]').each(function(){ (peers || (peers = [])).push($(this).attr('href')) });
    !window.gun && (opt.peers = opt.peers || peers || (function(){
        (console.warn || console.log)('Warning: No peer provided, defaulting to DEMO peer. Do not run in production, or your data will be regularly wiped, reset, or deleted. For more info, check https://github.com/eraeco/joydb#peers !');
        return ['https://gunjs.herokuapp.com/gun'];
    }()));
    window.gun = window.gun || Gun(opt);

    gun.on('auth', function(ack){
        console.log("Your namespace is publicly available at", ack.soul);
    });
}());
