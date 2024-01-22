import{g as X,a as V,c as G}from"./index-BvHxZZla.js";import{j as q}from"./jspdf.es.min--_0xNp_n.js";function tt(U,Y){for(var E=0;E<Y.length;E++){const B=Y[E];if(typeof B!="string"&&!Array.isArray(B)){for(const L in B)if(L!=="default"&&!(L in U)){const z=Object.getOwnPropertyDescriptor(B,L);z&&Object.defineProperty(U,L,z.get?z:{enumerable:!0,get:()=>B[L]})}}}return Object.freeze(Object.defineProperty(U,Symbol.toStringTag,{value:"Module"}))}var Q={exports:{}};const et=X(q);/*!
 * 
 *               jsPDF AutoTable plugin v3.7.1
 *
 *               Copyright (c) 2023 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *               Licensed under the MIT License.
 *               http://opensource.org/licenses/mit-license
 *
 */(function(U,Y){(function(B,L){U.exports=L(function(){try{return et}catch{}}())})(typeof globalThis<"u"?globalThis:typeof G<"u"?G:typeof window<"u"?window:typeof self<"u"?self:G,function(E){return function(){var B={662:function(A,m){var W=this&&this.__extends||function(){var p=function(P,i){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,v){w.__proto__=v}||function(w,v){for(var h in v)Object.prototype.hasOwnProperty.call(v,h)&&(w[h]=v[h])},p(P,i)};return function(P,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");p(P,i);function w(){this.constructor=P}P.prototype=i===null?Object.create(i):(w.prototype=i.prototype,new w)}}();Object.defineProperty(m,"__esModule",{value:!0}),m.CellHookData=m.HookData=void 0;var _=function(){function p(P,i,w){this.table=i,this.pageNumber=i.pageNumber,this.pageCount=this.pageNumber,this.settings=i.settings,this.cursor=w,this.doc=P.getDocument()}return p}();m.HookData=_;var b=function(p){W(P,p);function P(i,w,v,h,r,t){var e=p.call(this,i,w,t)||this;return e.cell=v,e.row=h,e.column=r,e.section=h.section,e}return P}(_);m.CellHookData=b},790:function(A,m,W){Object.defineProperty(m,"__esModule",{value:!0});var _=W(148),b=W(938),p=W(323),P=W(587),i=W(49),w=W(858);function v(h){h.API.autoTable=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e;r.length===1?e=r[0]:(console.error("Use of deprecated autoTable initiation"),e=r[2]||{},e.columns=r[0],e.body=r[1]);var l=(0,P.parseInput)(this,e),s=(0,w.createTable)(this,l);return(0,i.drawTable)(this,s),this},h.API.lastAutoTable=!1,h.API.previousAutoTable=!1,h.API.autoTable.previous=!1,h.API.autoTableText=function(r,t,e,l){(0,b.default)(r,t,e,l,this)},h.API.autoTableSetDefaults=function(r){return p.DocHandler.setDefaults(r,this),this},h.autoTableSetDefaults=function(r,t){p.DocHandler.setDefaults(r,t)},h.API.autoTableHtmlToJson=function(r,t){if(t===void 0&&(t=!1),typeof window>"u")return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var e=new p.DocHandler(this),l=(0,_.parseHtml)(e,r,window,t,!1),s=l.head,n=l.body,f=s[0].map(function(d){return d.content});return{columns:f,rows:n,data:n}},h.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");var r=this.lastAutoTable;return r&&r.finalY?r.finalY:0},h.API.autoTableAddPageContent=function(r){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),h.API.autoTable.globalDefaults||(h.API.autoTable.globalDefaults={}),h.API.autoTable.globalDefaults.addPageContent=r,this},h.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}m.default=v},938:function(A,m){Object.defineProperty(m,"__esModule",{value:!0});function W(_,b,p,P,i){P=P||{};var w=1.15,v=i.internal.scaleFactor,h=i.internal.getFontSize()/v,r=i.getLineHeightFactor?i.getLineHeightFactor():w,t=h*r,e=/\r\n|\r|\n/g,l="",s=1;if((P.valign==="middle"||P.valign==="bottom"||P.halign==="center"||P.halign==="right")&&(l=typeof _=="string"?_.split(e):_,s=l.length||1),p+=h*(2-w),P.valign==="middle"?p-=s/2*t:P.valign==="bottom"&&(p-=s*t),P.halign==="center"||P.halign==="right"){var n=h;if(P.halign==="center"&&(n*=.5),l&&s>=1){for(var f=0;f<l.length;f++)i.text(l[f],b-i.getStringUnitWidth(l[f])*n,p),p+=t;return i}b-=i.getStringUnitWidth(_)*n}return P.halign==="justify"?i.text(_,b,p,{maxWidth:P.maxWidth||100,align:"justify"}):i.text(_,b,p),i}m.default=W},200:function(A,m){Object.defineProperty(m,"__esModule",{value:!0}),m.getPageAvailableWidth=m.parseSpacing=m.getFillStyle=m.addTableBorder=m.getStringWidth=void 0;function W(i,w,v){v.applyStyles(w,!0);var h=Array.isArray(i)?i:[i],r=h.map(function(t){return v.getTextWidth(t)}).reduce(function(t,e){return Math.max(t,e)},0);return r}m.getStringWidth=W;function _(i,w,v,h){var r=w.settings.tableLineWidth,t=w.settings.tableLineColor;i.applyStyles({lineWidth:r,lineColor:t});var e=b(r,!1);e&&i.rect(v.x,v.y,w.getWidth(i.pageSize().width),h.y-v.y,e)}m.addTableBorder=_;function b(i,w){var v=i>0,h=w||w===0;return v&&h?"DF":v?"S":h?"F":null}m.getFillStyle=b;function p(i,w){var v,h,r,t;if(i=i||w,Array.isArray(i)){if(i.length>=4)return{top:i[0],right:i[1],bottom:i[2],left:i[3]};if(i.length===3)return{top:i[0],right:i[1],bottom:i[2],left:i[1]};if(i.length===2)return{top:i[0],right:i[1],bottom:i[0],left:i[1]};i.length===1?i=i[0]:i=w}return typeof i=="object"?(typeof i.vertical=="number"&&(i.top=i.vertical,i.bottom=i.vertical),typeof i.horizontal=="number"&&(i.right=i.horizontal,i.left=i.horizontal),{left:(v=i.left)!==null&&v!==void 0?v:w,top:(h=i.top)!==null&&h!==void 0?h:w,right:(r=i.right)!==null&&r!==void 0?r:w,bottom:(t=i.bottom)!==null&&t!==void 0?t:w}):(typeof i!="number"&&(i=w),{top:i,right:i,bottom:i,left:i})}m.parseSpacing=p;function P(i,w){var v=p(w.settings.margin,0);return i.pageSize().width-(v.left+v.right)}m.getPageAvailableWidth=P},913:function(A,m){var W=this&&this.__extends||function(){var P=function(i,w){return P=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(v,h){v.__proto__=h}||function(v,h){for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(v[r]=h[r])},P(i,w)};return function(i,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");P(i,w);function v(){this.constructor=i}i.prototype=w===null?Object.create(w):(v.prototype=w.prototype,new v)}}();Object.defineProperty(m,"__esModule",{value:!0}),m.getTheme=m.defaultStyles=m.HtmlRowInput=void 0;var _=function(P){W(i,P);function i(w){var v=P.call(this)||this;return v._element=w,v}return i}(Array);m.HtmlRowInput=_;function b(P){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/P,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}}m.defaultStyles=b;function p(P){var i={striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}};return i[P]}m.getTheme=p},259:function(A,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.parseCss=void 0;var _=W(200);function b(v,h,r,t,e){var l={},s=1.3333333333333333,n=P(h,function(H){return e.getComputedStyle(H).backgroundColor});n!=null&&(l.fillColor=n);var f=P(h,function(H){return e.getComputedStyle(H).color});f!=null&&(l.textColor=f);var d=w(t,r);d&&(l.cellPadding=d);var y="borderTopColor",g=s*r,a=t.borderTopWidth;if(t.borderBottomWidth===a&&t.borderRightWidth===a&&t.borderLeftWidth===a){var C=(parseFloat(a)||0)/g;C&&(l.lineWidth=C)}else l.lineWidth={top:(parseFloat(t.borderTopWidth)||0)/g,right:(parseFloat(t.borderRightWidth)||0)/g,bottom:(parseFloat(t.borderBottomWidth)||0)/g,left:(parseFloat(t.borderLeftWidth)||0)/g},l.lineWidth.top||(l.lineWidth.right?y="borderRightColor":l.lineWidth.bottom?y="borderBottomColor":l.lineWidth.left&&(y="borderLeftColor"));console.log(l.lineWidth);var D=P(h,function(H){return e.getComputedStyle(H)[y]});D!=null&&(l.lineColor=D);var u=["left","right","center","justify"];u.indexOf(t.textAlign)!==-1&&(l.halign=t.textAlign),u=["middle","bottom","top"],u.indexOf(t.verticalAlign)!==-1&&(l.valign=t.verticalAlign);var o=parseInt(t.fontSize||"");isNaN(o)||(l.fontSize=o/s);var S=p(t);S&&(l.fontStyle=S);var c=(t.fontFamily||"").toLowerCase();return v.indexOf(c)!==-1&&(l.font=c),l}m.parseCss=b;function p(v){var h="";return(v.fontWeight==="bold"||v.fontWeight==="bolder"||parseInt(v.fontWeight)>=700)&&(h="bold"),(v.fontStyle==="italic"||v.fontStyle==="oblique")&&(h+="italic"),h}function P(v,h){var r=i(v,h);if(!r)return null;var t=r.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!t||!Array.isArray(t))return null;var e=[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])],l=parseInt(t[4]);return l===0||isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function i(v,h){var r=h(v);return r==="rgba(0, 0, 0, 0)"||r==="transparent"||r==="initial"||r==="inherit"?v.parentElement==null?null:i(v.parentElement,h):r}function w(v,h){var r=[v.paddingTop,v.paddingRight,v.paddingBottom,v.paddingLeft],t=96/(72/h),e=(parseInt(v.lineHeight)-parseInt(v.fontSize))/h/2,l=r.map(function(n){return parseInt(n||"0")/t}),s=(0,_.parseSpacing)(l,0);return e>s.top&&(s.top=e),e>s.bottom&&(s.bottom=e),s}},323:function(A,m){Object.defineProperty(m,"__esModule",{value:!0}),m.DocHandler=void 0;var W={},_=function(){function b(p){this.jsPDFDocument=p,this.userStyles={textColor:p.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:p.internal.getFontSize(),fontStyle:p.internal.getFont().fontStyle,font:p.internal.getFont().fontName,lineWidth:p.getLineWidth?this.jsPDFDocument.getLineWidth():0,lineColor:p.getDrawColor?this.jsPDFDocument.getDrawColor():0}}return b.setDefaults=function(p,P){P===void 0&&(P=null),P?P.__autoTableDocumentDefaults=p:W=p},b.unifyColor=function(p){return Array.isArray(p)?p:typeof p=="number"?[p,p,p]:typeof p=="string"?[p]:null},b.prototype.applyStyles=function(p,P){var i,w,v;P===void 0&&(P=!1),p.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(p.fontStyle);var h=this.jsPDFDocument.internal.getFont(),r=h.fontStyle,t=h.fontName;if(p.font&&(t=p.font),p.fontStyle){r=p.fontStyle;var e=this.getFontList()[t];e&&e.indexOf(r)===-1&&(this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(e[0]),r=e[0])}if(this.jsPDFDocument.setFont(t,r),p.fontSize&&this.jsPDFDocument.setFontSize(p.fontSize),!P){var l=b.unifyColor(p.fillColor);l&&(i=this.jsPDFDocument).setFillColor.apply(i,l),l=b.unifyColor(p.textColor),l&&(w=this.jsPDFDocument).setTextColor.apply(w,l),l=b.unifyColor(p.lineColor),l&&(v=this.jsPDFDocument).setDrawColor.apply(v,l),typeof p.lineWidth=="number"&&this.jsPDFDocument.setLineWidth(p.lineWidth)}},b.prototype.splitTextToSize=function(p,P,i){return this.jsPDFDocument.splitTextToSize(p,P,i)},b.prototype.rect=function(p,P,i,w,v){return this.jsPDFDocument.rect(p,P,i,w,v)},b.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},b.prototype.getTextWidth=function(p){return this.jsPDFDocument.getTextWidth(p)},b.prototype.getDocument=function(){return this.jsPDFDocument},b.prototype.setPage=function(p){this.jsPDFDocument.setPage(p)},b.prototype.addPage=function(){return this.jsPDFDocument.addPage()},b.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},b.prototype.getGlobalOptions=function(){return W||{}},b.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},b.prototype.pageSize=function(){var p=this.jsPDFDocument.internal.pageSize;return p.width==null&&(p={width:p.getWidth(),height:p.getHeight()}),p},b.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},b.prototype.getLineHeightFactor=function(){var p=this.jsPDFDocument;return p.getLineHeightFactor?p.getLineHeightFactor():1.15},b.prototype.getLineHeight=function(p){return p/this.scaleFactor()*this.getLineHeightFactor()},b.prototype.pageNumber=function(){var p=this.jsPDFDocument.internal.getCurrentPageInfo();return p?p.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},b}();m.DocHandler=_},148:function(A,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.parseHtml=void 0;var _=W(259),b=W(913);function p(w,v,h,r,t){var e,l;r===void 0&&(r=!1),t===void 0&&(t=!1);var s;typeof v=="string"?s=h.document.querySelector(v):s=v;var n=Object.keys(w.getFontList()),f=w.scaleFactor(),d=[],y=[],g=[];if(!s)return console.error("Html table could not be found with input: ",v),{head:d,body:y,foot:g};for(var a=0;a<s.rows.length;a++){var C=s.rows[a],D=(l=(e=C==null?void 0:C.parentElement)===null||e===void 0?void 0:e.tagName)===null||l===void 0?void 0:l.toLowerCase(),u=P(n,f,h,C,r,t);u&&(D==="thead"?d.push(u):D==="tfoot"?g.push(u):y.push(u))}return{head:d,body:y,foot:g}}m.parseHtml=p;function P(w,v,h,r,t,e){for(var l=new b.HtmlRowInput(r),s=0;s<r.cells.length;s++){var n=r.cells[s],f=h.getComputedStyle(n);if(t||f.display!=="none"){var d=void 0;e&&(d=(0,_.parseCss)(w,n,v,f,h)),l.push({rowSpan:n.rowSpan,colSpan:n.colSpan,styles:d,_element:n,content:i(n)})}}var y=h.getComputedStyle(r);if(l.length>0&&(t||y.display!=="none"))return l}function i(w){var v=w.cloneNode(!0);return v.innerHTML=v.innerHTML.replace(/\n/g,"").replace(/ +/g," "),v.innerHTML=v.innerHTML.split(/<br.*?>/).map(function(h){return h.trim()}).join(`
`),v.innerText||v.textContent||""}},587:function(A,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.parseInput=void 0;var _=W(148),b=W(360),p=W(200),P=W(323),i=W(291);function w(s,n){var f=new P.DocHandler(s),d=f.getDocumentOptions(),y=f.getGlobalOptions();(0,i.default)(f,y,d,n);var g=(0,b.assign)({},y,d,n),a;typeof window<"u"&&(a=window);var C=v(y,d,n),D=h(y,d,n),u=r(f,g),o=e(f,g,a);return{id:n.tableId,content:o,hooks:D,styles:C,settings:u}}m.parseInput=w;function v(s,n,f){for(var d={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},y=function(D){if(D==="columnStyles"){var u=s[D],o=n[D],S=f[D];d.columnStyles=(0,b.assign)({},u,o,S)}else{var c=[s,n,f],H=c.map(function(T){return T[D]||{}});d[D]=(0,b.assign)({},H[0],H[1],H[2])}},g=0,a=Object.keys(d);g<a.length;g++){var C=a[g];y(C)}return d}function h(s,n,f){for(var d=[s,n,f],y={didParseCell:[],willDrawCell:[],didDrawCell:[],willDrawPage:[],didDrawPage:[]},g=0,a=d;g<a.length;g++){var C=a[g];C.didParseCell&&y.didParseCell.push(C.didParseCell),C.willDrawCell&&y.willDrawCell.push(C.willDrawCell),C.didDrawCell&&y.didDrawCell.push(C.didDrawCell),C.willDrawPage&&y.willDrawPage.push(C.willDrawPage),C.didDrawPage&&y.didDrawPage.push(C.didDrawPage)}return y}function r(s,n){var f,d,y,g,a,C,D,u,o,S,c,H=(0,p.parseSpacing)(n.margin,40/s.scaleFactor()),T=(f=t(s,n.startY))!==null&&f!==void 0?f:H.top,F;n.showFoot===!0?F="everyPage":n.showFoot===!1?F="never":F=(d=n.showFoot)!==null&&d!==void 0?d:"everyPage";var x;n.showHead===!0?x="everyPage":n.showHead===!1?x="never":x=(y=n.showHead)!==null&&y!==void 0?y:"everyPage";var k=(g=n.useCss)!==null&&g!==void 0?g:!1,j=n.theme||(k?"plain":"striped"),R=!!n.horizontalPageBreak,O=(a=n.horizontalPageBreakRepeat)!==null&&a!==void 0?a:null;return{includeHiddenHtml:(C=n.includeHiddenHtml)!==null&&C!==void 0?C:!1,useCss:k,theme:j,startY:T,margin:H,pageBreak:(D=n.pageBreak)!==null&&D!==void 0?D:"auto",rowPageBreak:(u=n.rowPageBreak)!==null&&u!==void 0?u:"auto",tableWidth:(o=n.tableWidth)!==null&&o!==void 0?o:"auto",showHead:x,showFoot:F,tableLineWidth:(S=n.tableLineWidth)!==null&&S!==void 0?S:0,tableLineColor:(c=n.tableLineColor)!==null&&c!==void 0?c:200,horizontalPageBreak:R,horizontalPageBreakRepeat:O}}function t(s,n){var f=s.getLastAutoTable(),d=s.scaleFactor(),y=s.pageNumber(),g=!1;if(f&&f.startPageNumber){var a=f.startPageNumber+f.pageNumber-1;g=a===y}return typeof n=="number"?n:(n==null||n===!1)&&g&&(f==null?void 0:f.finalY)!=null?f.finalY+20/d:null}function e(s,n,f){var d=n.head||[],y=n.body||[],g=n.foot||[];if(n.html){var a=n.includeHiddenHtml;if(f){var C=(0,_.parseHtml)(s,n.html,f,a,n.useCss)||{};d=C.head||d,y=C.body||d,g=C.foot||d}else console.error("Cannot parse html in non browser environment")}var D=n.columns||l(d,y,g);return{columns:D,head:d,body:y,foot:g}}function l(s,n,f){var d=s[0]||n[0]||f[0]||[],y=[];return Object.keys(d).filter(function(g){return g!=="_element"}).forEach(function(g){var a=1,C;Array.isArray(d)?C=d[parseInt(g)]:C=d[g],typeof C=="object"&&!Array.isArray(C)&&(a=(C==null?void 0:C.colSpan)||1);for(var D=0;D<a;D++){var u=void 0;Array.isArray(d)?u=y.length:u=g+(D>0?"_".concat(D):"");var o={dataKey:u};y.push(o)}}),y}},291:function(A,m){Object.defineProperty(m,"__esModule",{value:!0});function W(b,p,P,i){for(var w=function(t){t&&typeof t!="object"&&console.error("The options parameter should be of type object, is: "+typeof t),typeof t.extendWidth<"u"&&(t.tableWidth=t.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),typeof t.margins<"u"&&(typeof t.margin>"u"&&(t.margin=t.margins),console.error("Use of deprecated option: margins, use margin instead.")),t.startY&&typeof t.startY!="number"&&(console.error("Invalid value for startY option",t.startY),delete t.startY),!t.didDrawPage&&(t.afterPageContent||t.beforePageContent||t.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),t.didDrawPage=function(g){b.applyStyles(b.userStyles),t.beforePageContent&&t.beforePageContent(g),b.applyStyles(b.userStyles),t.afterPageContent&&t.afterPageContent(g),b.applyStyles(b.userStyles),t.afterPageAdd&&g.pageNumber>1&&g.afterPageAdd(g),b.applyStyles(b.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach(function(g){t[g]&&console.error('The "'.concat(g,'" hook has changed in version 3.0, check the changelog for how to migrate.'))}),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach(function(g){var a=g[0],C=g[1];t[C]&&(console.error("Use of deprecated option ".concat(C,". Use ").concat(a," instead")),t[a]=t[C])}),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach(function(g){var a=typeof g=="string"?g:g[0],C=typeof g=="string"?g:g[1];typeof t[a]<"u"&&(typeof t.styles[C]>"u"&&(t.styles[C]=t[a]),console.error("Use of deprecated option: "+a+", use the style "+C+" instead."))});for(var e=0,l=["styles","bodyStyles","headStyles","footStyles"];e<l.length;e++){var s=l[e];_(t[s]||{})}for(var n=t.columnStyles||{},f=0,d=Object.keys(n);f<d.length;f++){var y=d[f];_(n[y]||{})}},v=0,h=[p,P,i];v<h.length;v++){var r=h[v];w(r)}}m.default=W;function _(b){b.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),b.minCellHeight||(b.minCellHeight=b.rowHeight)):b.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),b.cellWidth||(b.cellWidth=b.columnWidth))}},287:function(A,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.Column=m.Cell=m.Row=m.Table=void 0;var _=W(913),b=W(662),p=W(200),P=function(){function h(r,t){this.pageNumber=1,this.pageCount=1,this.id=r.id,this.settings=r.settings,this.styles=r.styles,this.hooks=r.hooks,this.columns=t.columns,this.head=t.head,this.body=t.body,this.foot=t.foot}return h.prototype.getHeadHeight=function(r){return this.head.reduce(function(t,e){return t+e.getMaxCellHeight(r)},0)},h.prototype.getFootHeight=function(r){return this.foot.reduce(function(t,e){return t+e.getMaxCellHeight(r)},0)},h.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},h.prototype.callCellHooks=function(r,t,e,l,s,n){for(var f=0,d=t;f<d.length;f++){var y=d[f],g=new b.CellHookData(r,this,e,l,s,n),a=y(g)===!1;if(e.text=Array.isArray(e.text)?e.text:[e.text],a)return!1}return!0},h.prototype.callEndPageHooks=function(r,t){r.applyStyles(r.userStyles);for(var e=0,l=this.hooks.didDrawPage;e<l.length;e++){var s=l[e];s(new b.HookData(r,this,t))}},h.prototype.callWillDrawPageHooks=function(r,t){for(var e=0,l=this.hooks.willDrawPage;e<l.length;e++){var s=l[e];s(new b.HookData(r,this,t))}},h.prototype.getWidth=function(r){if(typeof this.settings.tableWidth=="number")return this.settings.tableWidth;if(this.settings.tableWidth==="wrap"){var t=this.columns.reduce(function(l,s){return l+s.wrappedWidth},0);return t}else{var e=this.settings.margin;return r-e.left-e.right}},h}();m.Table=P;var i=function(){function h(r,t,e,l,s){s===void 0&&(s=!1),this.height=0,this.raw=r,r instanceof _.HtmlRowInput&&(this.raw=r._element,this.element=r._element),this.index=t,this.section=e,this.cells=l,this.spansMultiplePages=s}return h.prototype.getMaxCellHeight=function(r){var t=this;return r.reduce(function(e,l){var s;return Math.max(e,((s=t.cells[l.index])===null||s===void 0?void 0:s.height)||0)},0)},h.prototype.hasRowSpan=function(r){var t=this;return r.filter(function(e){var l=t.cells[e.index];return l?l.rowSpan>1:!1}).length>0},h.prototype.canEntireRowFit=function(r,t){return this.getMaxCellHeight(t)<=r},h.prototype.getMinimumRowHeight=function(r,t){var e=this;return r.reduce(function(l,s){var n=e.cells[s.index];if(!n)return 0;var f=t.getLineHeight(n.styles.fontSize),d=n.padding("vertical"),y=d+f;return y>l?y:l},0)},h}();m.Row=i;var w=function(){function h(r,t,e){var l,s;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=t,this.section=e,this.raw=r;var n=r;r!=null&&typeof r=="object"&&!Array.isArray(r)?(this.rowSpan=r.rowSpan||1,this.colSpan=r.colSpan||1,n=(s=(l=r.content)!==null&&l!==void 0?l:r.title)!==null&&s!==void 0?s:r,r._element&&(this.raw=r._element)):(this.rowSpan=1,this.colSpan=1);var f=n!=null?""+n:"",d=/\r\n|\r|\n/g;this.text=f.split(d)}return h.prototype.getTextPos=function(){var r;if(this.styles.valign==="top")r=this.y+this.padding("top");else if(this.styles.valign==="bottom")r=this.y+this.height-this.padding("bottom");else{var t=this.height-this.padding("vertical");r=this.y+t/2+this.padding("top")}var e;if(this.styles.halign==="right")e=this.x+this.width-this.padding("right");else if(this.styles.halign==="center"){var l=this.width-this.padding("horizontal");e=this.x+l/2+this.padding("left")}else e=this.x+this.padding("left");return{x:e,y:r}},h.prototype.getContentHeight=function(r,t){t===void 0&&(t=1.15);var e=Array.isArray(this.text)?this.text.length:1,l=this.styles.fontSize/r*t,s=e*l+this.padding("vertical");return Math.max(s,this.styles.minCellHeight)},h.prototype.padding=function(r){var t=(0,p.parseSpacing)(this.styles.cellPadding,0);return r==="vertical"?t.top+t.bottom:r==="horizontal"?t.left+t.right:t[r]},h}();m.Cell=w;var v=function(){function h(r,t,e){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=r,this.raw=t,this.index=e}return h.prototype.getMaxCustomCellWidth=function(r){for(var t=0,e=0,l=r.allRows();e<l.length;e++){var s=l[e],n=s.cells[this.index];n&&typeof n.styles.cellWidth=="number"&&(t=Math.max(t,n.styles.cellWidth))}return t},h}();m.Column=v},360:function(A,m){Object.defineProperty(m,"__esModule",{value:!0}),m.assign=void 0;function W(_,b,p,P,i){if(_==null)throw new TypeError("Cannot convert undefined or null to object");for(var w=Object(_),v=1;v<arguments.length;v++){var h=arguments[v];if(h!=null)for(var r in h)Object.prototype.hasOwnProperty.call(h,r)&&(w[r]=h[r])}return w}m.assign=W},858:function(A,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.createTable=void 0;var _=W(323),b=W(287),p=W(189),P=W(913),i=W(360);function w(s,n){var f=new _.DocHandler(s),d=v(n,f.scaleFactor()),y=new b.Table(n,d);return(0,p.calculateWidths)(f,y),f.applyStyles(f.userStyles),y}m.createTable=w;function v(s,n){var f=s.content,d=e(f.columns);if(f.head.length===0){var y=r(d,"head");y&&f.head.push(y)}if(f.foot.length===0){var y=r(d,"foot");y&&f.foot.push(y)}var g=s.settings.theme,a=s.styles;return{columns:d,head:h("head",f.head,d,a,g,n),body:h("body",f.body,d,a,g,n),foot:h("foot",f.foot,d,a,g,n)}}function h(s,n,f,d,y,g){var a={},C=n.map(function(D,u){for(var o=0,S={},c=0,H=0,T=0,F=f;T<F.length;T++){var x=F[T];if(a[x.index]==null||a[x.index].left===0)if(H===0){var k=void 0;Array.isArray(D)?k=D[x.index-c-o]:k=D[x.dataKey];var j={};typeof k=="object"&&!Array.isArray(k)&&(j=(k==null?void 0:k.styles)||{});var R=l(s,x,u,y,d,g,j),O=new b.Cell(k,R,s);S[x.dataKey]=O,S[x.index]=O,H=O.colSpan-1,a[x.index]={left:O.rowSpan-1,times:H}}else H--,c++;else a[x.index].left--,H=a[x.index].times,o++}return new b.Row(D,u,s,S)});return C}function r(s,n){var f={};return s.forEach(function(d){if(d.raw!=null){var y=t(n,d.raw);y!=null&&(f[d.dataKey]=y)}}),Object.keys(f).length>0?f:null}function t(s,n){if(s==="head"){if(typeof n=="object")return n.header||n.title||null;if(typeof n=="string"||typeof n=="number")return n}else if(s==="foot"&&typeof n=="object")return n.footer;return null}function e(s){return s.map(function(n,f){var d,y,g;return typeof n=="object"?g=(y=(d=n.dataKey)!==null&&d!==void 0?d:n.key)!==null&&y!==void 0?y:f:g=f,new b.Column(g,n,f)})}function l(s,n,f,d,y,g,a){var C=(0,P.getTheme)(d),D;s==="head"?D=y.headStyles:s==="body"?D=y.bodyStyles:s==="foot"&&(D=y.footStyles);var u=(0,i.assign)({},C.table,C[s],y.styles,D),o=y.columnStyles[n.dataKey]||y.columnStyles[n.index]||{},S=s==="body"?o:{},c=s==="body"&&f%2===0?(0,i.assign)({},C.alternateRow,y.alternateRowStyles):{},H=(0,P.defaultStyles)(g),T=(0,i.assign)({},H,u,c,S);return(0,i.assign)(T,a)}},49:function(A,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.addPage=m.drawTable=void 0;var _=W(200),b=W(287),p=W(323),P=W(360),i=W(938),w=W(435);function v(u,o){var S=o.settings,c=S.startY,H=S.margin,T={x:H.left,y:c},F=o.getHeadHeight(o.columns)+o.getFootHeight(o.columns),x=c+H.bottom+F;if(S.pageBreak==="avoid"){var k=o.body,j=k.reduce(function(M,I){return M+I.height},0);x+=j}var R=new p.DocHandler(u);(S.pageBreak==="always"||S.startY!=null&&x>R.pageSize().height)&&(D(R),T.y=H.top),o.callWillDrawPageHooks(R,T);var O=(0,P.assign)({},T);o.startPageNumber=R.pageNumber(),S.horizontalPageBreak?h(R,o,O,T):(R.applyStyles(R.userStyles),(S.showHead==="firstPage"||S.showHead==="everyPage")&&o.head.forEach(function(M){return d(R,o,M,T,o.columns)}),R.applyStyles(R.userStyles),o.body.forEach(function(M,I){var N=I===o.body.length-1;f(R,o,M,N,O,T,o.columns)}),R.applyStyles(R.userStyles),(S.showFoot==="lastPage"||S.showFoot==="everyPage")&&o.foot.forEach(function(M){return d(R,o,M,T,o.columns)})),(0,_.addTableBorder)(R,o,O,T),o.callEndPageHooks(R,T),o.finalY=T.y,u.lastAutoTable=o,u.previousAutoTable=o,u.autoTable&&(u.autoTable.previous=o),R.applyStyles(R.userStyles)}m.drawTable=v;function h(u,o,S,c){var H=(0,w.calculateAllColumnsCanFitInPage)(u,o);H.map(function(T,F){u.applyStyles(u.userStyles),F>0?C(u,o,S,c,T.columns):r(u,o,c,T.columns),t(u,o,S,c,T.columns),e(u,o,c,T.columns)})}function r(u,o,S,c){var H=o.settings;u.applyStyles(u.userStyles),(H.showHead==="firstPage"||H.showHead==="everyPage")&&o.head.forEach(function(T){return d(u,o,T,S,c)})}function t(u,o,S,c,H){u.applyStyles(u.userStyles),o.body.forEach(function(T,F){var x=F===o.body.length-1;f(u,o,T,x,S,c,H)})}function e(u,o,S,c){var H=o.settings;u.applyStyles(u.userStyles),(H.showFoot==="lastPage"||H.showFoot==="everyPage")&&o.foot.forEach(function(T){return d(u,o,T,S,c)})}function l(u,o,S){var c=S.getLineHeight(u.styles.fontSize),H=u.padding("vertical"),T=Math.floor((o-H)/c);return Math.max(0,T)}function s(u,o,S,c){var H={};u.spansMultiplePages=!0,u.height=0;for(var T=0,F=0,x=S.columns;F<x.length;F++){var k=x[F],j=u.cells[k.index];if(j){Array.isArray(j.text)||(j.text=[j.text]);var R=new b.Cell(j.raw,j.styles,j.section);R=(0,P.assign)(R,j),R.text=[];var O=l(j,o,c);j.text.length>O&&(R.text=j.text.splice(O,j.text.length));var M=c.scaleFactor(),I=c.getLineHeightFactor();j.contentHeight=j.getContentHeight(M,I),j.contentHeight>=o&&(j.contentHeight=o,R.styles.minCellHeight-=o),j.contentHeight>u.height&&(u.height=j.contentHeight),R.contentHeight=R.getContentHeight(M,I),R.contentHeight>T&&(T=R.contentHeight),H[k.index]=R}}var N=new b.Row(u.raw,-1,u.section,H,!0);N.height=T;for(var $=0,J=S.columns;$<J.length;$++){var k=J[$],R=N.cells[k.index];R&&(R.height=N.height);var j=u.cells[k.index];j&&(j.height=u.height)}return N}function n(u,o,S,c){var H=u.pageSize().height,T=c.settings.margin,F=T.top+T.bottom,x=H-F;o.section==="body"&&(x-=c.getHeadHeight(c.columns)+c.getFootHeight(c.columns));var k=o.getMinimumRowHeight(c.columns,u),j=k<S;if(k>x)return console.error("Will not be able to print row ".concat(o.index," correctly since it's minimum height is larger than page height")),!0;if(!j)return!1;var R=o.hasRowSpan(c.columns),O=o.getMaxCellHeight(c.columns)>x;return O?(R&&console.error("The content of row ".concat(o.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!(R||c.settings.rowPageBreak==="avoid")}function f(u,o,S,c,H,T,F){var x=a(u,o,c,T);if(S.canEntireRowFit(x,F))d(u,o,S,T,F);else if(n(u,S,x,o)){var k=s(S,x,o,u);d(u,o,S,T,F),C(u,o,H,T,F),f(u,o,k,c,H,T,F)}else C(u,o,H,T,F),f(u,o,S,c,H,T,F)}function d(u,o,S,c,H){c.x=o.settings.margin.left;for(var T=0,F=H;T<F.length;T++){var x=F[T],k=S.cells[x.index];if(!k){c.x+=x.width;continue}u.applyStyles(k.styles),k.x=c.x,k.y=c.y;var j=o.callCellHooks(u,o.hooks.willDrawCell,k,S,x,c);if(j===!1){c.x+=x.width;continue}y(u,k,c);var R=k.getTextPos();(0,i.default)(k.text,R.x,R.y,{halign:k.styles.halign,valign:k.styles.valign,maxWidth:Math.ceil(k.width-k.padding("left")-k.padding("right"))},u.getDocument()),o.callCellHooks(u,o.hooks.didDrawCell,k,S,x,c),c.x+=x.width}c.y+=S.height}function y(u,o,S){var c=o.styles;if(u.getDocument().setFillColor(u.getDocument().getFillColor()),typeof c.lineWidth=="number"){var H=(0,_.getFillStyle)(c.lineWidth,c.fillColor);H&&u.rect(o.x,S.y,o.width,o.height,H)}else typeof c.lineWidth=="object"&&(c.fillColor&&u.rect(o.x,S.y,o.width,o.height,"F"),g(u,o,S,c.lineWidth))}function g(u,o,S,c){var H,T,F,x;c.top&&(H=S.x,T=S.y,F=S.x+o.width,x=S.y,c.right&&(F+=.5*c.right),c.left&&(H-=.5*c.left),k(c.top,H,T,F,x)),c.bottom&&(H=S.x,T=S.y+o.height,F=S.x+o.width,x=S.y+o.height,c.right&&(F+=.5*c.right),c.left&&(H-=.5*c.left),k(c.bottom,H,T,F,x)),c.left&&(H=S.x,T=S.y,F=S.x,x=S.y+o.height,c.top&&(T-=.5*c.top),c.bottom&&(x+=.5*c.bottom),k(c.left,H,T,F,x)),c.right&&(H=S.x+o.width,T=S.y,F=S.x+o.width,x=S.y+o.height,c.top&&(T-=.5*c.top),c.bottom&&(x+=.5*c.bottom),k(c.right,H,T,F,x));function k(j,R,O,M,I){u.getDocument().setLineWidth(j),u.getDocument().line(R,O,M,I,"S")}}function a(u,o,S,c){var H=o.settings.margin.bottom,T=o.settings.showFoot;return(T==="everyPage"||T==="lastPage"&&S)&&(H+=o.getFootHeight(o.columns)),u.pageSize().height-c.y-H}function C(u,o,S,c,H){H===void 0&&(H=[]),u.applyStyles(u.userStyles),o.settings.showFoot==="everyPage"&&o.foot.forEach(function(F){return d(u,o,F,c,H)}),o.callEndPageHooks(u,c);var T=o.settings.margin;(0,_.addTableBorder)(u,o,S,c),D(u),o.pageNumber++,o.pageCount++,c.x=T.left,c.y=T.top,S.y=T.top,o.callWillDrawPageHooks(u,c),o.settings.showHead==="everyPage"&&(o.head.forEach(function(F){return d(u,o,F,c,H)}),u.applyStyles(u.userStyles))}m.addPage=C;function D(u){var o=u.pageNumber();u.setPage(o+1);var S=u.pageNumber();return S===o?(u.addPage(),!0):!1}},435:function(A,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.calculateAllColumnsCanFitInPage=void 0;var _=W(200);function b(P,i,w){var v;w===void 0&&(w={});var h=(0,_.getPageAvailableWidth)(P,i),r=new Map,t=[],e=[],l=[];i.settings.horizontalPageBreakRepeat,Array.isArray(i.settings.horizontalPageBreakRepeat)?l=i.settings.horizontalPageBreakRepeat:(typeof i.settings.horizontalPageBreakRepeat=="string"||typeof i.settings.horizontalPageBreakRepeat=="number")&&(l=[i.settings.horizontalPageBreakRepeat]),l.forEach(function(d){var y=i.columns.find(function(g){return g.dataKey===d||g.index===d});y&&!r.has(y.index)&&(r.set(y.index,!0),t.push(y.index),e.push(i.columns[y.index]),h-=y.wrappedWidth)});for(var s=!0,n=(v=w==null?void 0:w.start)!==null&&v!==void 0?v:0;n<i.columns.length;){if(r.has(n)){n++;continue}var f=i.columns[n].wrappedWidth;if(s||h>=f)s=!1,t.push(n),e.push(i.columns[n]),h-=f;else break;n++}return{colIndexes:t,columns:e,lastIndex:n-1}}function p(P,i){for(var w=[],v=0;v<i.columns.length;v++){var h=b(P,i,{start:v});h.columns.length&&(w.push(h),v=h.lastIndex)}return w}m.calculateAllColumnsCanFitInPage=p},189:function(A,m,W){Object.defineProperty(m,"__esModule",{value:!0}),m.ellipsize=m.resizeColumns=m.calculateWidths=void 0;var _=W(200);function b(t,e){p(t,e);var l=[],s=0;e.columns.forEach(function(f){var d=f.getMaxCustomCellWidth(e);d?f.width=d:(f.width=f.wrappedWidth,l.push(f)),s+=f.width});var n=e.getWidth(t.pageSize().width)-s;n&&(n=P(l,n,function(f){return Math.max(f.minReadableWidth,f.minWidth)})),n&&(n=P(l,n,function(f){return f.minWidth})),n=Math.abs(n),!e.settings.horizontalPageBreak&&n>.1/t.scaleFactor()&&(n=n<1?n:Math.round(n),console.warn("Of the table content, ".concat(n," units width could not fit page"))),w(e),v(e,t),i(e)}m.calculateWidths=b;function p(t,e){var l=t.scaleFactor(),s=e.settings.horizontalPageBreak,n=(0,_.getPageAvailableWidth)(t,e);e.allRows().forEach(function(f){for(var d=0,y=e.columns;d<y.length;d++){var g=y[d],a=f.cells[g.index];if(a){var C=e.hooks.didParseCell;e.callCellHooks(t,C,a,f,g,null);var D=a.padding("horizontal");a.contentWidth=(0,_.getStringWidth)(a.text,a.styles,t)+D;var u=(0,_.getStringWidth)(a.text.join(" ").split(/\s+/),a.styles,t);if(a.minReadableWidth=u+a.padding("horizontal"),typeof a.styles.cellWidth=="number")a.minWidth=a.styles.cellWidth,a.wrappedWidth=a.styles.cellWidth;else if(a.styles.cellWidth==="wrap"||s===!0)a.contentWidth>n?(a.minWidth=n,a.wrappedWidth=n):(a.minWidth=a.contentWidth,a.wrappedWidth=a.contentWidth);else{var o=10/l;a.minWidth=a.styles.minCellWidth||o,a.wrappedWidth=a.contentWidth,a.minWidth>a.wrappedWidth&&(a.wrappedWidth=a.minWidth)}}}}),e.allRows().forEach(function(f){for(var d=0,y=e.columns;d<y.length;d++){var g=y[d],a=f.cells[g.index];if(a&&a.colSpan===1)g.wrappedWidth=Math.max(g.wrappedWidth,a.wrappedWidth),g.minWidth=Math.max(g.minWidth,a.minWidth),g.minReadableWidth=Math.max(g.minReadableWidth,a.minReadableWidth);else{var C=e.styles.columnStyles[g.dataKey]||e.styles.columnStyles[g.index]||{},D=C.cellWidth||C.minCellWidth;D&&typeof D=="number"&&(g.minWidth=D,g.wrappedWidth=D)}a&&(a.colSpan>1&&!g.minWidth&&(g.minWidth=a.minWidth),a.colSpan>1&&!g.wrappedWidth&&(g.wrappedWidth=a.minWidth))}})}function P(t,e,l){for(var s=e,n=t.reduce(function(o,S){return o+S.wrappedWidth},0),f=0;f<t.length;f++){var d=t[f],y=d.wrappedWidth/n,g=s*y,a=d.width+g,C=l(d),D=a<C?C:a;e-=D-d.width,d.width=D}if(e=Math.round(e*1e10)/1e10,e){var u=t.filter(function(o){return e<0?o.width>l(o):!0});u.length&&(e=P(u,e,l))}return e}m.resizeColumns=P;function i(t){for(var e={},l=1,s=t.allRows(),n=0;n<s.length;n++)for(var f=s[n],d=0,y=t.columns;d<y.length;d++){var g=y[d],a=e[g.index];if(l>1)l--,delete f.cells[g.index];else if(a)a.cell.height+=f.height,l=a.cell.colSpan,delete f.cells[g.index],a.left--,a.left<=1&&delete e[g.index];else{var C=f.cells[g.index];if(!C)continue;if(C.height=f.height,C.rowSpan>1){var D=s.length-n,u=C.rowSpan>D?D:C.rowSpan;e[g.index]={cell:C,left:u,row:f}}}}}function w(t){for(var e=t.allRows(),l=0;l<e.length;l++)for(var s=e[l],n=null,f=0,d=0,y=0;y<t.columns.length;y++){var g=t.columns[y];if(d-=1,d>1&&t.columns[y+1])f+=g.width,delete s.cells[g.index];else if(n){var a=n;delete s.cells[g.index],n=null,a.width=g.width+f}else{var a=s.cells[g.index];if(!a)continue;if(d=a.colSpan,f=0,a.colSpan>1){n=a,f+=g.width;continue}a.width=g.width+f}}}function v(t,e){for(var l={count:0,height:0},s=0,n=t.allRows();s<n.length;s++){for(var f=n[s],d=0,y=t.columns;d<y.length;d++){var g=y[d],a=f.cells[g.index];if(a){e.applyStyles(a.styles,!0);var C=a.width-a.padding("horizontal");if(a.styles.overflow==="linebreak")a.text=e.splitTextToSize(a.text,C+1/e.scaleFactor(),{fontSize:a.styles.fontSize});else if(a.styles.overflow==="ellipsize")a.text=h(a.text,C,a.styles,e,"...");else if(a.styles.overflow==="hidden")a.text=h(a.text,C,a.styles,e,"");else if(typeof a.styles.overflow=="function"){var D=a.styles.overflow(a.text,C);typeof D=="string"?a.text=[D]:a.text=D}a.contentHeight=a.getContentHeight(e.scaleFactor(),e.getLineHeightFactor());var u=a.contentHeight/a.rowSpan;a.rowSpan>1&&l.count*l.height<u*a.rowSpan?l={height:u,count:a.rowSpan}:l&&l.count>0&&l.height>u&&(u=l.height),u>f.height&&(f.height=u)}}l.count--}}function h(t,e,l,s,n){return t.map(function(f){return r(f,e,l,s,n)})}m.ellipsize=h;function r(t,e,l,s,n){var f=1e4*s.scaleFactor();if(e=Math.ceil(e*f)/f,e>=(0,_.getStringWidth)(t,l,s))return t;for(;e<(0,_.getStringWidth)(t+n,l,s)&&!(t.length<=1);)t=t.substring(0,t.length-1);return t.trim()+n}},84:function(A){if(typeof E>"u"){var m=new Error("Cannot find module 'undefined'");throw m.code="MODULE_NOT_FOUND",m}A.exports=E}},L={};function z(A){var m=L[A];if(m!==void 0)return m.exports;var W=L[A]={exports:{}};return B[A].call(W.exports,W,W.exports,z),W.exports}var K={};return function(){var A=K;Object.defineProperty(A,"__esModule",{value:!0}),A.Cell=A.Column=A.Row=A.Table=A.CellHookData=A.__drawTable=A.__createTable=A.applyPlugin=void 0;var m=z(790),W=z(587),_=z(49),b=z(858),p=z(287);Object.defineProperty(A,"Table",{enumerable:!0,get:function(){return p.Table}});var P=z(662);Object.defineProperty(A,"CellHookData",{enumerable:!0,get:function(){return P.CellHookData}});var i=z(287);Object.defineProperty(A,"Cell",{enumerable:!0,get:function(){return i.Cell}}),Object.defineProperty(A,"Column",{enumerable:!0,get:function(){return i.Column}}),Object.defineProperty(A,"Row",{enumerable:!0,get:function(){return i.Row}});function w(e){(0,m.default)(e)}A.applyPlugin=w;function v(e,l){var s=(0,W.parseInput)(e,l),n=(0,b.createTable)(e,s);(0,_.drawTable)(e,n)}function h(e,l){var s=(0,W.parseInput)(e,l);return(0,b.createTable)(e,s)}A.__createTable=h;function r(e,l){(0,_.drawTable)(e,l)}A.__drawTable=r;try{var t=z(84);t.jsPDF&&(t=t.jsPDF),w(t)}catch{}A.default=v}(),K}()})})(Q);var Z=Q.exports;const nt=V(Z),at=tt({__proto__:null,default:nt},[Z]);export{at as j};
