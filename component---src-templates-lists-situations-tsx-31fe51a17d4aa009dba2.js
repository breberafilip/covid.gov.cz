(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"19eF":function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("R99l"),o=n("dT4H"),c=n("j++a"),r=n("q1tI"),i=n.n(r),l=n("rBsq"),u=n.n(l),m=function(e){var t=e.name,n=e.path,r=e.iconCode;return i.a.createElement(o.a,{to:n,className:u.a.categoryItem+" py-1"},i.a.createElement(c.a,{className:u.a.categoryItemIcon,code:r}),i.a.createElement("span",{className:u.a.categoryItemTitle},t),i.a.createElement(a.a,{style:{fontSize:16},className:"color-yellow"}))}},"6SmI":function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return x}));var a=n("q1tI"),o=n.n(a),c=n("n214"),r=n("ptG0"),i=n("6Hpx"),l=n("QoFz"),u=n("I+D7"),m=n("19eF"),s=n("21qS"),b=n("jufJ"),d=n("Fjk4");t.default=function(e){var t=e.data,n=e.pageContext,a=t.allArea.nodes,x=new Intl.Collator([n.langCode]);return a.sort((function(e,t){return x.compare(e.name,t.name)})),o.a.createElement(s.a,{pageContext:n},o.a.createElement(c.a,{title:Object(b.b)("life_situations"),description:Object(b.b)("situations_overview_meta"),pagePath:Object(b.b)("slug_situations"),htmlLanguage:n.langCode}),o.a.createElement(d.a,{langCode:n.langCode,description:Object(b.b)("situations_overview_meta"),isBlogPost:!1,isSpecialList:!0,title:Object(b.b)("life_situations"),breadcrumbItems:[{title:Object(b.b)("home"),url:"/"},{title:Object(b.b)("life_situations"),url:Object(b.b)("slug_situations")}]}),o.a.createElement(i.a,null,o.a.createElement("div",{className:"pt-1"},o.a.createElement(l.a,{items:[{title:Object(b.b)("home"),url:"/"},{title:Object(b.b)("life_situations"),url:Object(b.b)("slug_situations")}],variant:"inverse"})),o.a.createElement("div",{className:"mt-3"},o.a.createElement(u.a,null,Object(b.b)("situations_overview"))),o.a.createElement("div",{className:"mt-3"},o.a.createElement(r.a,{noPadding:!0},a.map((function(e){var t;return null!==e.relationships.situation&&o.a.createElement(m.a,{key:e.id,name:e.name,path:e.path.alias,iconCode:null===(t=e.relationships.icon)||void 0===t?void 0:t.code})}))))))};var x="1875458117"},Fjk4:function(e,t,n){"use strict";var a=n("+uiX");n.d(t,"a",(function(){return a.b}))},"I+D7":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),o=n.n(a),c=n("W+yO"),r=n.n(c),i=function(e){var t=e.children;return o.a.createElement("h1",{className:r.a.headline},t)}},QoFz:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("TSYQ"),o=n.n(a),c=n("q1tI"),r=n.n(c),i=n("dT4H"),l=n("pvlE"),u=n.n(l),m=function(e){return o()("breadcrumb",u.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},s=function(e){var t=e.items,n=e.variant,a=void 0===n?"normal":n,c=function(e){var n;return o()("breadcrumb__item",u.a.breadcrumbItem,((n={})[u.a.breadcrumbItemActive]=e===t.length-1,n))};return r.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},r.a.createElement("ol",{className:m(a)},t.map((function(e,t){return r.a.createElement("li",{key:"breadcrumb-item-"+t,className:c(t)},function(e){return void 0!==e.title}(e)?r.a.createElement(i.a,{to:e.url,className:"breadcrumb__link",title:e.title}):r.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},R99l:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),c=n("LYUY");t.a=Object(c.a)(o.a.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight")},"W+yO":function(e,t,n){e.exports={headline:"headline-module--headline--2EZlD"}},"j++a":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),c=n("TSYQ"),r=n.n(c);t.a=function(e){var t=e.className,n=e.code,a=r()(t,"material-icons");return o.a.createElement("i",{className:a},n||"folder")}},lYOF:function(e,t,n){e.exports={contentBoxTitle:"content-box-module--contentBoxTitle--3E5Vo",contentBoxDescription:"content-box-module--contentBoxDescription--O2FI4",contentBox:"content-box-module--contentBox--3WK0J",contentBoxNoPadding:"content-box-module--contentBoxNoPadding--2vKlZ","contentBox--white":"content-box-module--contentBox--white--2fBcG",contentBoxWhite:"content-box-module--contentBox--white--2fBcG","contentBox--blue":"content-box-module--contentBox--blue--243gT",contentBoxBlue:"content-box-module--contentBox--blue--243gT","content-box-btn":"content-box-module--content-box-btn--281FR",contentBoxBtn:"content-box-module--content-box-btn--281FR","content-box-btn--blue":"content-box-module--content-box-btn--blue--22dPm",contentBoxBtnBlue:"content-box-module--content-box-btn--blue--22dPm"}},ptG0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),o=n.n(a),c=n("TSYQ"),r=n.n(c),i=n("zoQI"),l=n("uJxA"),u=n("lYOF"),m=n.n(u),s=function(e){var t,n=e.children,a=e.title,c=e.description,u=e.buttonVariant,s=e.buttonText,b=e.buttonHref,d=e.variant,x=void 0===d?"":d,v=e.noPadding;return o.a.createElement("div",{className:r()(m.a.contentBox,m.a["contentBox--"+x],v&&m.a.contentBoxNoPadding,"row")},o.a.createElement(l.a,{col:12},a&&o.a.createElement("h2",{className:m.a.contentBoxTitle,dangerouslySetInnerHTML:{__html:a}}),c&&o.a.createElement("p",{className:m.a.contentBoxDescription},c),n,s&&o.a.createElement(i.a,{href:b,variant:u,text:s,className:r()(m.a.contentBoxBtn,(t={},t[m.a.contentBoxBtnBlue]="white"===x,t))})))}},pvlE:function(e,t,n){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP",breadcrumbItemActive:"breadcrumb-module--breadcrumbItemActive--6MwJy"}},rBsq:function(e,t,n){e.exports={categoryItem:"category-item-module--categoryItem--3V8HX",categoryItemIcon:"category-item-module--categoryItemIcon--3wAWD",categoryItemTitle:"category-item-module--categoryItemTitle--ErF2o"}}}]);
//# sourceMappingURL=component---src-templates-lists-situations-tsx-31fe51a17d4aa009dba2.js.map