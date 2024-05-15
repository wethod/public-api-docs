"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[410],{82547:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createDescription=void 0,t.createDescription=function(e){return e?`\n\n${e}\n\n`:""}},67114:(e,t)=>{function a(e,t){return e.format?e.format:e.allOf?"string"==typeof e.allOf[0]&&e.allOf[0].includes("circular")?e.allOf[0]:"object":e.oneOf||e.anyOf?"object":"object"===e.type||"array"===e.type?e.xml?.name??e.type:e.title??e.type}Object.defineProperty(t,"__esModule",{value:!0}),t.getQualifierMessage=t.getSchemaName=void 0,t.getSchemaName=function(e,t){return e.items?a(e.items)+"[]":a(e)??""},t.getQualifierMessage=function e(t){if(!t)return;if(t.items&&void 0===t.minItems&&void 0===t.maxItems)return e(t.items);let a=[];if(t.items&&t.items.enum&&t.items.enum&&a.push(`[${t.items.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minLength||t.maxLength){let e,n,l="";t.minLength&&t.minLength>1&&(e=`\`>= ${t.minLength} characters\``),t.minLength&&1===t.minLength&&(e="`non-empty`"),t.maxLength&&(n=`\`<= ${t.maxLength} characters\``),e&&!n&&(l+=e),n&&!e&&(l+=n),e&&n&&(l+=`${e} and ${n}`),a.push(l)}if(t.minimum||t.maximum||"number"==typeof t.exclusiveMinimum||"number"==typeof t.exclusiveMaximum){let e,n,l="";"number"==typeof t.exclusiveMinimum?e=`\`> ${t.exclusiveMinimum}\``:t.minimum&&!t.exclusiveMinimum?e=`\`>= ${t.minimum}\``:t.minimum&&!0===t.exclusiveMinimum&&(e=`\`> ${t.minimum}\``),"number"==typeof t.exclusiveMaximum?n=`\`< ${t.exclusiveMaximum}\``:t.maximum&&!t.exclusiveMaximum?n=`\`<= ${t.maximum}\``:t.maximum&&!0===t.exclusiveMaximum&&(n=`\`< ${t.maximum}\``),e&&!n&&(l+=e),n&&!e&&(l+=n),e&&n&&(l+=`${e} and ${n}`),a.push(l)}t.pattern&&a.push(`Value must match regular expression \`${t.pattern}\``);const n=t;if(n.mapping){const e=Object.keys(n.mapping);a.push(`[${e.map((e=>`\`${e}\``)).join(", ")}]`)}return t.enum&&a.push(`[${t.enum.map((e=>`\`${e}\``)).join(", ")}]`),t.minItems&&a.push(`\`>= ${t.minItems}\``),t.maxItems&&a.push(`\`<= ${t.maxItems}\``),0!==a.length?"**Possible values:** "+a.join(", "):void 0}},1960:(e,t)=>{function a(e){return Array.isArray(e)?e.filter((e=>void 0!==e)).join(""):e??""}Object.defineProperty(t,"__esModule",{value:!0}),t.toString=t.render=t.guard=t.create=void 0,t.create=function(e,t){const{children:n,...l}=t;let r="";for(const[a,u]of Object.entries(l))r+=` ${a}={${JSON.stringify(u)}}`;return`<${e}${r}>${a(n)}</${e}>`},t.guard=function(e,t){if(e||0===e){return a(t(e))}return""},t.render=a,t.toString=function(e){return"string"==typeof e?e:null!=e?Array.isArray(e)?`[${e.join(", ")}]`:e+"":void 0}},57742:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(96540)),r=n(a(78478)),u=a(75657);function c(e){switch(e.toLowerCase()){case"get":return"primary";case"post":return"success";case"delete":return"danger";case"put":return"info";case"patch":return"warning";case"head":case"event":return"secondary";default:return}}t.default=function(e){let{method:t,path:a}=e,n=(0,u.useTypedSelector)((e=>e.server.value)),s="";return l.default.createElement(l.default.Fragment,null,l.default.createElement("pre",{className:"openapi__method-endpoint"},l.default.createElement("span",{className:"badge badge--"+c(t)},"event"===t?"Webhook":t.toUpperCase())," ","event"!==t&&l.default.createElement("h2",{className:"openapi__method-endpoint-path"},(n&&n.variables&&(s=n.url.replace(/\/$/,""),Object.keys(n.variables).forEach((e=>{s=s.replace(`{${e}}`,n.variables?.[e].default??"")}))),l.default.createElement(r.default,null,(()=>s.length?s:n&&n.url?n.url:void 0))),`${a.replace(/{([a-z0-9-_]+)}/gi,":$1")}`)),l.default.createElement("div",{className:"openapi__divider"}))}},67792:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(96540)),r=n(a(75489)),u=a(75657);t.default=function(e){const t=(0,u.useTypedSelector)((e=>e.auth.options)),a=(0,u.useTypedSelector)((e=>e.auth.selected)),n=`/${e.infoPath}#authentication`;if(void 0===a)return null;if(void 0===t[a]?.[0]?.type)return null;const c=t[a];return l.default.createElement("details",{className:"openapi-security__details",open:!1},l.default.createElement("summary",{className:"openapi-security__summary-container"},l.default.createElement("h4",{className:"openapi-security__summary-header"},"Authorization: ",c[0].name??c[0].type)),c.map((e=>{const t="http"===e.type,u="apiKey"===e.type,c="oauth2"===e.type,s="openIdConnect"===e.type;if(t){if("bearer"===e.scheme){const{name:t,key:a,type:u,scopes:c,...s}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(r.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),u),c&&c.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(s).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof s[e]?JSON.stringify(s[e],null,2):String(s[e]))))))}if("basic"===e.scheme){const{name:t,key:a,type:u,scopes:c,...s}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(r.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),u),c&&c.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(s).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof s[e]?JSON.stringify(s[e],null,2):String(s[e]))))))}return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(r.default,{to:n},e.name??e.key)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),e.type),l.default.createElement("span",null,l.default.createElement("strong",null,"in: "),e.in)))}if(u){const{name:t,key:a,type:u,scopes:c,...s}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(r.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),u),c&&c.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(s).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof s[e]?JSON.stringify(s[e],null,2):String(s[e]))))))}if(c){const{name:t,key:u,type:c,scopes:s,flows:i,...o}=e;return l.default.createElement(l.default.Fragment,{key:a},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(r.default,{to:n},t??u)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),c),s&&s.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(o).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof o[e]?JSON.stringify(o[e],null,2):String(o[e])))),i&&l.default.createElement("span",null,l.default.createElement("code",null,l.default.createElement("strong",null,"flows: "),JSON.stringify(i,null,2)))))}if(s){const{name:t,key:a,scopes:u,type:c,...s}=e;return l.default.createElement(l.default.Fragment,{key:e.key},l.default.createElement("pre",{style:{display:"flex",flexDirection:"column",background:"var(--openapi-card-background-color)"}},l.default.createElement("span",null,l.default.createElement("strong",null,"name:")," ",l.default.createElement(r.default,{to:n},t??a)),l.default.createElement("span",null,l.default.createElement("strong",null,"type: "),c),u&&u.length>0&&l.default.createElement("span",null,l.default.createElement("strong",null,"scopes: "),l.default.createElement("code",null,e.scopes.length>0?e.scopes.toString():"[]")),Object.keys(s).map(((e,t)=>l.default.createElement("span",{key:e},l.default.createElement("strong",null,e,": "),"object"==typeof s[e]?JSON.stringify(s[e],null,2):String(s[e]))))))}})))}},91366:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&!("get"in l?!t.__esModule:l.writable||l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,l)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return l(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const c=r(a(96540)),s=a(52416),i=u(a(92303)),o=u(a(51107)),d=u(a(72638));function f(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:r,label:u="Responses",id:i="responses"}=e;const f=[],{blockElementScrollPositionUntilNextRender:m}=(0,s.useScrollPositionBlocker)(),p=e=>{const t=e.currentTarget,a=f.indexOf(t),u=r[a].value;u!==n&&(m(t),l(u))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=f.indexOf(e.currentTarget)+1;t=f[a]??f[0];break}case"ArrowLeft":{const a=f.indexOf(e.currentTarget)-1;t=f[a]??f[f.length-1];break}}t?.focus()},_=(0,c.useRef)(null),[g,E]=(0,c.useState)(!1);(0,c.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)requestAnimationFrame((()=>{t.target.clientWidth<t.target.scrollWidth?E(!0):E(!1)}))}));return e.observe(_.current),()=>{e.disconnect()}}),[]);return c.default.createElement("div",{className:"openapi-tabs__response-header-section"},c.default.createElement(o.default,{as:"h2",id:i,className:"openapi-tabs__heading openapi-tabs__response-header"},u),c.default.createElement("div",{className:"openapi-tabs__response-container"},g&&c.default.createElement("button",{className:"openapi-tabs__arrow left",onClick:()=>{_.current.scrollLeft-=90}}),c.default.createElement("ul",{ref:_,role:"tablist","aria-orientation":"horizontal",className:(0,d.default)("openapi-tabs__response-list-container","tabs",{"tabs--block":a},t)},r.map((e=>{let{value:t,label:a,attributes:l}=e;return c.default.createElement("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:e=>f.push(e),onKeyDown:b,onClick:p,...l,className:(0,d.default)("tabs__item","openapi-tabs__response-code-item",l?.className,parseInt(t)>=400?"danger":parseInt(t)>=200&&parseInt(t)<300?"success":"info",{active:n===t})},a??t)}))),g&&c.default.createElement("button",{className:"openapi-tabs__arrow right",onClick:()=>{_.current.scrollLeft+=90}})))}function m(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,c.cloneElement)(e,{className:"margin-top--md"}):null}return c.default.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,c.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function p(e){const t=(0,s.useTabs)(e);return c.default.createElement("div",{className:"openapi-tabs__container"},c.default.createElement(f,{...e,...t}),c.default.createElement(m,{...e,...t}))}t.default=function(e){const t=(0,i.default)();return c.default.createElement(p,{key:String(t),...e},(0,s.sanitizeTabsChildren)(e.children))}},6050:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&!("get"in l?!t.__esModule:l.writable||l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,l)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return l(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const c=r(a(96540)),s=a(52416),i=u(a(92303)),o=u(a(72638)),d=u(a(35970));function f(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:r}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.useScrollPositionBlocker)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),c=r[a].value;c!==n&&(i(t),l(c))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()},m=(0,c.useRef)(null),[p,b]=(0,c.useState)(!1);(0,c.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)requestAnimationFrame((()=>{t.target.clientWidth<t.target.scrollWidth?b(!0):b(!1)}))}));return e.observe(m.current),()=>{e.disconnect()}}),[]);return c.default.createElement("div",{className:"openapi-tabs__discriminator-top-section"},c.default.createElement("div",{className:"openapi-tabs__discriminator-container"},p&&c.default.createElement("button",{className:"openapi-tabs__arrow left",onClick:()=>{m.current.scrollLeft-=90}}),c.default.createElement("ul",{ref:m,role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("openapi-tabs__discriminator-list-container","tabs",{"tabs--block":a},t)},r.map((e=>{let{value:t,label:a,attributes:l}=e;return c.default.createElement("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:d,...l,className:(0,o.default)("tabs__item","openapi-tabs__discriminator-item",l?.className,{active:n===t})},c.default.createElement("span",{className:"openapi-tabs__discriminator-tab-label"},a??t))}))),p&&c.default.createElement("button",{className:"openapi-tabs__arrow right",onClick:()=>{m.current.scrollLeft+=90}})))}function m(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean),r=(0,d.default)(l);if(t){const e=r.find((e=>e.props.value===n));return e?(0,c.cloneElement)(e,{className:"margin-top--md"}):null}return c.default.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,c.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function p(e){const t=(0,s.useTabs)(e);return c.default.createElement("div",{className:"openapi-tabs__container"},c.default.createElement(f,{...e,...t}),c.default.createElement(m,{...e,...t}))}t.default=function(e){const t=(0,i.default)();return c.default.createElement(p,{key:String(t),...e},(0,s.sanitizeTabsChildren)(e.children))}},27362:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&!("get"in l?!t.__esModule:l.writable||l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,l)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return l(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const c=r(a(96540)),s=a(52416),i=u(a(92303)),o=u(a(54612)),d=a(13761),f=a(75657),m=u(a(72638));function p(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:r,schemaType:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.useScrollPositionBlocker)(),b=(0,f.useTypedDispatch)(),_="request"===u?.toLowerCase(),[g,E]=(0,c.useState)(n),h=(0,f.useTypedSelector)((e=>e.contentType.value)),y=(0,f.useTypedSelector)((e=>e.accept.value));(0,c.useEffect)((()=>{i.length>1&&E(_?h:y)}),[h,y]);const v=e=>{e.preventDefault();const t=e.currentTarget,a=i.indexOf(t),n=r[a].value;n!==g&&(b(_?(0,d.setContentType)(n):(0,o.default)(n)),p(t),l(n))},k=e=>{let t=null;switch(e.key){case"Enter":v(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()},N=(0,c.useRef)(null),[O,x]=(0,c.useState)(!1);(0,c.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)requestAnimationFrame((()=>{t.target.clientWidth<t.target.scrollWidth?x(!0):x(!1)}))}));return e.observe(N.current),()=>{e.disconnect()}}),[]);return c.default.createElement("div",{className:"tabs__container"},c.default.createElement("div",{className:"openapi-tabs__mime-container"},O&&c.default.createElement("button",{className:(0,m.default)("openapi-tabs__arrow","left"),onClick:()=>{N.current.scrollLeft-=90}}),c.default.createElement("ul",{ref:N,role:"tablist","aria-orientation":"horizontal",className:(0,m.default)("openapi-tabs__mime-list-container","tabs",{"tabs--block":a},t)},r.map((e=>{let{value:t,label:a,attributes:n}=e;return c.default.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>i.push(e),onKeyDown:k,onFocus:v,onClick:e=>v(e),...n,className:(0,m.default)("tabs__item","openapi-tabs__mime-item",n?.className,{active:g===t})},a??t)}))),O&&c.default.createElement("button",{className:(0,m.default)("openapi-tabs__arrow","right"),onClick:()=>{N.current.scrollLeft+=90}})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,c.cloneElement)(e,{className:"margin-top--md"}):null}return c.default.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,c.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=(0,s.useTabs)(e);return c.default.createElement("div",{className:"tabs-container"},c.default.createElement(p,{...e,...t}),c.default.createElement(b,{...e,...t}))}t.default=function(e){const t=(0,i.default)();return c.default.createElement(_,{key:String(t),...e},(0,s.sanitizeTabsChildren)(e.children))}},77675:function(e,t,a){var n=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&!("get"in l?!t.__esModule:l.writable||l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,l)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&n(t,e,a);return l(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const c=r(a(96540)),s=a(52416),i=u(a(92303)),o=u(a(72638));function d(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:r}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.useScrollPositionBlocker)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),c=r[a].value;c!==n&&(i(t),l(c))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()},m=(0,c.useRef)(null),[p,b]=(0,c.useState)(!1);(0,c.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)requestAnimationFrame((()=>{t.target.clientWidth<t.target.scrollWidth?b(!0):b(!1)}))}));return e.observe(m.current),()=>{e.disconnect()}}),[]);return c.default.createElement("div",{className:"tabs__container"},c.default.createElement("div",{className:"openapi-tabs__operation-container"},p&&c.default.createElement("button",{className:(0,o.default)("openapi-tabs__arrow","left"),onClick:()=>{m.current.scrollLeft-=90}}),c.default.createElement("ul",{ref:m,role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("openapi-tabs__operation-list-container","tabs",{"tabs--block":a},t)},r.map((e=>{let{value:t,label:a,attributes:l}=e;return c.default.createElement("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:e=>u.push(e),onKeyDown:f,onFocus:d,onClick:e=>d(e),...l,className:(0,o.default)("tabs__item","openapi-tabs__operation-item",l?.className,{active:n===t})},a??t)}))),p&&c.default.createElement("button",{className:(0,o.default)("openapi-tabs__arrow","right"),onClick:()=>{m.current.scrollLeft+=90}})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,c.cloneElement)(e,{className:"margin-top--md"}):null}return c.default.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,c.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function m(e){const t=(0,s.useTabs)(e);return c.default.createElement("div",{className:"tabs-container"},c.default.createElement(d,{...e,...t}),c.default.createElement(f,{...e,...t}))}t.default=function(e){const t=(0,i.default)();return c.default.createElement(m,{key:String(t),...e},(0,s.sanitizeTabsChildren)(e.children))}},36683:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(96540)),r=n(a(52138)),u=n(a(23397)),c=n(a(19365)),s=n(a(72638)),i=n(a(80567)),o=n(a(82445)),d=a(82547),f=a(67114),m=a(1960);t.default=function(e){let{param:{description:t,example:a,examples:n,name:p,required:b,schema:_,deprecated:g}}=e;_&&_?.type||(_={type:"any"});const E=(0,m.guard)(_,(e=>l.default.createElement("span",{className:"openapi-schema__type"}," ",(0,f.getSchemaName)(e)))),h=(0,m.guard)(b,(()=>l.default.createElement("span",{className:"openapi-schema__required"},"required"))),y=(0,m.guard)(g,(()=>l.default.createElement("span",{className:"openapi-schema__deprecated"},"deprecated"))),v=(0,m.guard)((0,f.getQualifierMessage)(_),(e=>l.default.createElement("div",null,l.default.createElement(i.default,{children:(0,d.createDescription)(e),rehypePlugins:[o.default]})))),k=(0,m.guard)(t,(e=>l.default.createElement("div",null,l.default.createElement(i.default,{children:(0,d.createDescription)(e),components:{pre:"div",code(e){let{node:t,inline:a,className:n,children:u,...c}=e;const s=/language-(\w+)/.exec(n||"");return a?l.default.createElement("code",null,u):!a&&s?l.default.createElement(r.default,{className:n},u):l.default.createElement(r.default,null,u)}},rehypePlugins:[o.default]})))),N=(0,m.guard)(_&&_.items?_.items.default:_?_.default:void 0,(e=>l.default.createElement("div",null,l.default.createElement(i.default,{children:`**Default value:** \`${e}\``})))),O=(0,m.guard)((0,m.toString)(a),(e=>l.default.createElement("div",null,l.default.createElement("strong",null,"Example: "),e))),x=(0,m.guard)(n,(e=>{const t=Object.entries(e);return l.default.createElement(l.default.Fragment,null,l.default.createElement("strong",null,"Examples:"),l.default.createElement(u.default,null,t.map((e=>{let[t,a]=e;return l.default.createElement(c.default,{value:t,label:t},a.summary&&l.default.createElement("p",null,a.summary),a.description&&l.default.createElement("p",null,l.default.createElement("strong",null,"Description: "),l.default.createElement("span",null,a.description)),l.default.createElement("p",null,l.default.createElement("strong",null,"Example: "),l.default.createElement("code",null,a.value)))}))))}));return l.default.createElement("div",{className:"openapi-params__list-item"},l.default.createElement("span",{className:"openapi-schema__container"},l.default.createElement("strong",{className:(0,s.default)("openapi-schema__property",{"openapi-schema__strikethrough":g})},p),E,(b||g)&&l.default.createElement("span",{className:"openapi-schema__divider"}),h,y),v,N,k,O,x)}},81124:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(96540)),r=n(a(52138));t.default=function(e){let{responseExample:t,language:a}=e;return l.default.createElement("div",{className:"openapi-code__response-samples-container"},l.default.createElement(r.default,{language:a||"json"},t))}},60674:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(96540)),r=n(a(52138)),u=n(a(72638)),c=n(a(80567)),s=n(a(82445)),i=a(82547),o=a(1960);t.default=function(e){let t,a,n,d,{children:f,collapsible:m,name:p,qualifierMessage:b,required:_,schemaName:g,schema:E}=e;E&&(t=E.deprecated,a=E.description,n=E.default,d=E.nullable);const h=(0,o.guard)(Array.isArray(_)?_.includes(p):_,(()=>l.default.createElement("span",{className:"openapi-schema__required"},"required"))),y=(0,o.guard)(t,(()=>l.default.createElement("span",{className:"openapi-schema__deprecated"},"deprecated"))),v=(0,o.guard)(d,(()=>l.default.createElement("span",{className:"openapi-schema__nullable"},"nullable"))),k=(0,o.guard)(a,(e=>l.default.createElement("div",null,l.default.createElement(c.default,{children:(0,i.createDescription)(e),components:{pre:"div",code(e){let{node:t,inline:a,className:n,children:u,...c}=e;const s=/language-(\w+)/.exec(n||"");return a?l.default.createElement("code",null,u):!a&&s?l.default.createElement(r.default,{className:n},u):l.default.createElement(r.default,null,u)}},rehypePlugins:[s.default]})))),N=(0,o.guard)(b,(e=>l.default.createElement("div",null,l.default.createElement(c.default,{children:(0,i.createDescription)(e),rehypePlugins:[s.default]})))),O=(0,o.guard)(n,(e=>l.default.createElement("div",{className:""},l.default.createElement(c.default,{children:`**Default value:** \`${e}\``})))),x=l.default.createElement("div",null,l.default.createElement("span",{className:"openapi-schema__container"},l.default.createElement("strong",{className:(0,u.default)("openapi-schema__property",{"openapi-schema__strikethrough":t})},p),l.default.createElement("span",{className:"openapi-schema__name"}," ",g),(d||_||t)&&l.default.createElement("span",{className:"openapi-schema__divider"}),v,h,y),N,O,k,f??f);return l.default.createElement("div",{className:"openapi-schema__list-item"},m?f:x)}},80567:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l.$,uriTransformer:()=>n.Q});var n=a(32811),l=a(71367)}}]);