"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[526],{29661:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>w,default:()=>_,frontMatter:()=>b,metadata:()=>q,toc:()=>G});var i=a(74848),r=a(28453),t=a(91366),n=a.n(t),l=(a(6050),a(57742)),c=a.n(l),d=(a(67792),a(27362)),m=a.n(d),o=a(36683),h=a.n(o),p=a(81124),u=a.n(p),g=a(60674),x=a.n(g),j=a(23397),f=a.n(j),v=(a(26651),a(51107)),y=(a(77675),a(19365));const b={id:"get-contact",title:"Get a contact",description:"- **crm.view**: allows view resources.",sidebar_label:"Get a contact",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVdtuGzcQ/RVinhKDutixW2DfjNxqoAiKNG0fFMGgliMtk12SIWclC4v992K4u7JkuZGdPuRpLxzOnDmHPNMAqVWEbAavnSWVE8wlaIx5MJ6Ms5DBSJyd5aEarw1uzs4yocrSbaLgTxEwujrkGMef7Wc7+w0DCipQaNQmV4RaxNp7F0h4tcL5i4LIx2wy6f+ON0iF0+PcVZOlscrmODFW493LMUhwHoNiEDcaMlghDRAleBVUhYSBoTdgVYWQgdEgwTBmr6gACQG/1SaghoxCjRJiXmClIGuAtp53RArGrqBt5S7JPwnS6LWrvLLbIWGBSmOAh9x8KlDkXaTYulpslCVBThhLGFROYmP+L5C/MUQudhrI9R83Yt1FH4CpIz4LwpyDo3c2YuT1i+mUH4cFPyLVwcakNqfGyGrnnUKsHr+iJd6pvC/5OBhnJ18ib2/2yt8Dm3UK5gH56NwqVrr2+v4jLw1auk1RWClTguzYkhDrkN7mEnzgk0OmQ2/0Xo+syyrRVxlrqrqC7FwC3qnKlwjZeXtQ/YgbCUsXKl4BRjUiUyG0ByCfvKfvZVFHYzHG29qa1NkR0zdvhFsmnrstYtgieAvI5/S24+9klWfl7bR4pPVK3f2OdkUFZOdX07ZX60TglAMHPZ8SG1x5KvDXKy7uqDsTD068hNLYr6iNPZHlIvVwQNwjyQhL9IWzTwHf7mh2iy+YvI0McTuDIb8hB23LgZfTV8e6vXNhYbRGCyni8jjigyOxdLXV7C5QJVfp/DQZKSOBifJm0l/eOGmMbvlKYVgPDluHks2nt2/lzZ51AztGxLwOhrYpeoEqYLiuOXfT7i//yde+E+EgaGCBK4Ds194NF2fHXnINjusCUkfGLl3K0PMGEnoXhAwupheXo+kvo/Mr5se7SJVKqvUm+x5JqMG2Hrpqc29iP28K9sQQ3tHEl8okoZMcTa/eDJQ3veOyfiAhM5qdsHCReL1pFiriX6FsW/79rcbAQs0lrFUwasG8zRrQJvK7hmypyojfYePFx960X4r/gtj/7GboWpV1r81X3Hajup23chhnP1z9qQP4UYgdlKOBvwPLw/iHUX1/Gp/Gcz/3D/B0Mdd5jp721o5GLF+63V1///YTtO2/zVdiNw==",sidebar_class_name:"get api-method",custom_edit_url:null},w=void 0,q={id:"reference/get-contact",title:"Get a contact",description:"- **crm.view**: allows view resources.",source:"@site/docs/reference/get-contact.api.mdx",sourceDirName:"reference",slug:"/reference/get-contact",permalink:"/reference/get-contact",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-contact",title:"Get a contact",description:"- **crm.view**: allows view resources.",sidebar_label:"Get a contact",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVdtuGzcQ/RVinhKDutixW2DfjNxqoAiKNG0fFMGgliMtk12SIWclC4v992K4u7JkuZGdPuRpLxzOnDmHPNMAqVWEbAavnSWVE8wlaIx5MJ6Ms5DBSJyd5aEarw1uzs4yocrSbaLgTxEwujrkGMef7Wc7+w0DCipQaNQmV4RaxNp7F0h4tcL5i4LIx2wy6f+ON0iF0+PcVZOlscrmODFW493LMUhwHoNiEDcaMlghDRAleBVUhYSBoTdgVYWQgdEgwTBmr6gACQG/1SaghoxCjRJiXmClIGuAtp53RArGrqBt5S7JPwnS6LWrvLLbIWGBSmOAh9x8KlDkXaTYulpslCVBThhLGFROYmP+L5C/MUQudhrI9R83Yt1FH4CpIz4LwpyDo3c2YuT1i+mUH4cFPyLVwcakNqfGyGrnnUKsHr+iJd6pvC/5OBhnJ18ib2/2yt8Dm3UK5gH56NwqVrr2+v4jLw1auk1RWClTguzYkhDrkN7mEnzgk0OmQ2/0Xo+syyrRVxlrqrqC7FwC3qnKlwjZeXtQ/YgbCUsXKl4BRjUiUyG0ByCfvKfvZVFHYzHG29qa1NkR0zdvhFsmnrstYtgieAvI5/S24+9klWfl7bR4pPVK3f2OdkUFZOdX07ZX60TglAMHPZ8SG1x5KvDXKy7uqDsTD068hNLYr6iNPZHlIvVwQNwjyQhL9IWzTwHf7mh2iy+YvI0McTuDIb8hB23LgZfTV8e6vXNhYbRGCyni8jjigyOxdLXV7C5QJVfp/DQZKSOBifJm0l/eOGmMbvlKYVgPDluHks2nt2/lzZ51AztGxLwOhrYpeoEqYLiuOXfT7i//yde+E+EgaGCBK4Ds194NF2fHXnINjusCUkfGLl3K0PMGEnoXhAwupheXo+kvo/Mr5se7SJVKqvUm+x5JqMG2Hrpqc29iP28K9sQQ3tHEl8okoZMcTa/eDJQ3veOyfiAhM5qdsHCReL1pFiriX6FsW/79rcbAQs0lrFUwasG8zRrQJvK7hmypyojfYePFx960X4r/gtj/7GboWpV1r81X3Hajup23chhnP1z9qQP4UYgdlKOBvwPLw/iHUX1/Gp/Gcz/3D/B0Mdd5jp721o5GLF+63V1///YTtO2/zVdiNw==",sidebar_class_name:"get api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"List contacts",permalink:"/reference/list-contacts"},next:{title:"List holidays",permalink:"/reference/list-holidays"}},N={},G=[];function L(e){const s={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.default,{as:"h1",className:"openapi__heading",children:"Get a contact"}),"\n",(0,i.jsx)(c(),{method:"get",path:"/api/contacts/{id}"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"crm.view"}),": allows view resources."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://support.wethod.com/finance/index",children:"Here the dedicated support page"}),"."]}),"\n",(0,i.jsx)(v.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(h(),{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(h(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,i.jsx)(h(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(y.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Returns the requested contact."})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:1}}),(0,i.jsx)(x(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"client_business_unit_id",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{description:"ID of the client business unit",type:"integer",minimum:1,example:1}}),(0,i.jsx)(x(),{collapsible:!1,name:"client_id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{description:"ID of the client",type:"integer",minimum:1,example:1}}),(0,i.jsx)(x(),{collapsible:!1,name:"email",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 150 characters`",schema:{type:"string",maxLength:150}}),(0,i.jsx)(x(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 100 characters`",schema:{type:"string",maxLength:100}}),(0,i.jsx)(x(),{collapsible:!1,name:"surname",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 100 characters`",schema:{type:"string",maxLength:100}}),(0,i.jsx)(x(),{collapsible:!1,name:"role",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 75 characters`",schema:{type:"string",maxLength:75}}),(0,i.jsx)(x(),{collapsible:!1,name:"notes",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"linkedin",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 250 characters`",schema:{type:"string",maxLength:250}}),(0,i.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"telephone",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 100 characters`",schema:{type:"string",maxLength:100}})]})]})}),(0,i.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "id": 1,\n  "created_at": "2024-12-17T14:53:20.328Z",\n  "updated_at": "2024-12-17T14:53:20.328Z",\n  "client_business_unit_id": 1,\n  "client_id": 1,\n  "email": "string",\n  "name": "string",\n  "surname": "string",\n  "role": "string",\n  "notes": "string",\n  "linkedin": "string",\n  "description": "string",\n  "telephone": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(y.default,{label:"403",value:"403",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Forbidden"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(y.default,{label:"404",value:"404",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Not found"})}),(0,i.jsx)("div",{})]})]})})})]})}function _(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(L,{...e})}):L(e)}}}]);