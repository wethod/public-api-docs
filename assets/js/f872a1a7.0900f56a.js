"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[7732],{51044:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>M,contentTitle:()=>k,default:()=>N,frontMatter:()=>v,metadata:()=>F,toc:()=>_});var i=s(74848),r=s(28453),t=s(91366),l=s.n(t),n=(s(6050),s(57742)),d=s.n(n),m=(s(67792),s(27362)),c=s.n(m),o=s(36683),p=s.n(o),h=s(81124),u=s.n(h),x=s(60674),j=s.n(x),g=s(23397),y=s.n(g),f=(s(26651),s(51107)),b=(s(77675),s(19365));const v={id:"create-metadata",title:"Create a project metadata",description:"- **settings.company**: allows to create resources.",sidebar_label:"Create a project metadata",hide_title:!0,hide_table_of_contents:!0,api:"eJzNV21v20YM/isH7kPbQLaTot0HfUuzFg2wrUWSdhgSI6Al2r5WurvcSxzP0H8feJJsyU7cJECH+ZN9xyMfkg9fvAKPMwfpJfxBHnP0COMEcnKZlcZLrSCFgTg4cOS9VDM3zHRpUC0PDlKBRaEXTngtMkvoSVhyOtiM3PBKXanLj2RJ+DmJnHKZoadcuGCMtl4YnNH45dx749LRqDkdLsjPdc4mRq29kVQ53Y1+MVZ/o8wPygblqyEkoA1ZZJCnOaRQg1i7kYClm0DOv9P5EtIVZFp5Up6/ojEFI5Jajb45dnIFLptTifyN30lLOUflOy0hgVssAjlIQLrr9e04AWMZgpfk+B3Lpqut4LV4hMeZUFgSJOCXhiAF561UM0iA7rA0BR+d6KC8XUK1trmj8Gs8F3oaQ1t21G80o7XIuKWnMqroW6w6Ji/h9AIS+CAVqoxgXPWd3DF/6no2xVpybXyidUGoun55G6iq1hJ6wrnkF9LXbvdTV1UsbMkZrVwdg9eHR7tYzsgHq1wMREOQDbiaDjnz5FmZl+xSo+QaGW0w+ebHU4gh804OpPI0IwsJlFLJMpSQHnVCdVT1rO7kLoGptiXfAKMZeFkSJ7QD7tFvGsI+TMdzyry2fTb+DIo9nzktZ367+NTQ5s3h4b1FI/OYdTFFWUS6PpoVj6jy99ZqK4KSN4FETY2HoyrVLcO5rrmeQEnO4Yx2tX4MJaqBJcxxUnCtRzlRC02kmkXmE9vea/BvHbg+bmVOuWisC7Y+FCdzyr6LFxyUYMm9EFNtRU4eZeGGDK692UX3u3Se29DtJrYRitvTh/qhnEoq7mkxf2JJbX+LIiLD4Pa7+4Qwdi5bKw/o3OFdtY+K7zA/qyfOWdO51oy8p3d9URj8XFv5z39Pxp/FuX3R6frbi0+VgEGLJXmyvIisIE7JFP6K28DgpF44mEWMb06Yx+7Zh30xJ9GsJmKpg1ig8ryZcLe1mHmxkH7e7AR11+HOknQCu+PKNpCvZB0b+zGQ48+n4raW7oEJjp4EYcx5YtuQgtGOw2nQzyGFERo52t6JIAFH9rYNY7AFw2x2LDSys18B63aUBSv9MkpPCC3Z48DqV1X3+pzx1XTrCbVw2QIkzd2HdtCs21B0L3b3KBBJwrQ+22xn79tO1RB6vQZt5s72DNkaIXFMcGKmOiJrSMcKmqyl8Prw9ZvB4a+Do7dcABzPEmNxNWmulxCBO6vEdo47q+T/dzdukuPpzo9MgVLFJYEpsWpIdAloJMRdpU+jcQJzZlt6CavVBB19sUVV8fFNIMt0GXNirOQOwb+qpK0GZlIuHV/kkE6xcLQneC/PmgS+Eo+t33vdqkmz0y8id5gFXMvPRrW/mH+MZ9M2enhaokergwtWs5HYGQGbF8dZRsbvle22jc+fzrluJs1/oFLn/MbighsRLiCFK7iC+F+KNcQqj+crKFDNQpwRUOvlz79Sju4W",sidebar_class_name:"post api-method",custom_edit_url:null},k=void 0,F={id:"reference/create-metadata",title:"Create a project metadata",description:"- **settings.company**: allows to create resources.",source:"@site/docs/reference/create-metadata.api.mdx",sourceDirName:"reference",slug:"/reference/create-metadata",permalink:"/reference/create-metadata",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-metadata",title:"Create a project metadata",description:"- **settings.company**: allows to create resources.",sidebar_label:"Create a project metadata",hide_title:!0,hide_table_of_contents:!0,api:"eJzNV21v20YM/isH7kPbQLaTot0HfUuzFg2wrUWSdhgSI6Al2r5WurvcSxzP0H8feJJsyU7cJECH+ZN9xyMfkg9fvAKPMwfpJfxBHnP0COMEcnKZlcZLrSCFgTg4cOS9VDM3zHRpUC0PDlKBRaEXTngtMkvoSVhyOtiM3PBKXanLj2RJ+DmJnHKZoadcuGCMtl4YnNH45dx749LRqDkdLsjPdc4mRq29kVQ53Y1+MVZ/o8wPygblqyEkoA1ZZJCnOaRQg1i7kYClm0DOv9P5EtIVZFp5Up6/ojEFI5Jajb45dnIFLptTifyN30lLOUflOy0hgVssAjlIQLrr9e04AWMZgpfk+B3Lpqut4LV4hMeZUFgSJOCXhiAF561UM0iA7rA0BR+d6KC8XUK1trmj8Gs8F3oaQ1t21G80o7XIuKWnMqroW6w6Ji/h9AIS+CAVqoxgXPWd3DF/6no2xVpybXyidUGoun55G6iq1hJ6wrnkF9LXbvdTV1UsbMkZrVwdg9eHR7tYzsgHq1wMREOQDbiaDjnz5FmZl+xSo+QaGW0w+ebHU4gh804OpPI0IwsJlFLJMpSQHnVCdVT1rO7kLoGptiXfAKMZeFkSJ7QD7tFvGsI+TMdzyry2fTb+DIo9nzktZ367+NTQ5s3h4b1FI/OYdTFFWUS6PpoVj6jy99ZqK4KSN4FETY2HoyrVLcO5rrmeQEnO4Yx2tX4MJaqBJcxxUnCtRzlRC02kmkXmE9vea/BvHbg+bmVOuWisC7Y+FCdzyr6LFxyUYMm9EFNtRU4eZeGGDK692UX3u3Se29DtJrYRitvTh/qhnEoq7mkxf2JJbX+LIiLD4Pa7+4Qwdi5bKw/o3OFdtY+K7zA/qyfOWdO51oy8p3d9URj8XFv5z39Pxp/FuX3R6frbi0+VgEGLJXmyvIisIE7JFP6K28DgpF44mEWMb06Yx+7Zh30xJ9GsJmKpg1ig8ryZcLe1mHmxkH7e7AR11+HOknQCu+PKNpCvZB0b+zGQ48+n4raW7oEJjp4EYcx5YtuQgtGOw2nQzyGFERo52t6JIAFH9rYNY7AFw2x2LDSys18B63aUBSv9MkpPCC3Z48DqV1X3+pzx1XTrCbVw2QIkzd2HdtCs21B0L3b3KBBJwrQ+22xn79tO1RB6vQZt5s72DNkaIXFMcGKmOiJrSMcKmqyl8Prw9ZvB4a+Do7dcABzPEmNxNWmulxCBO6vEdo47q+T/dzdukuPpzo9MgVLFJYEpsWpIdAloJMRdpU+jcQJzZlt6CavVBB19sUVV8fFNIMt0GXNirOQOwb+qpK0GZlIuHV/kkE6xcLQneC/PmgS+Eo+t33vdqkmz0y8id5gFXMvPRrW/mH+MZ9M2enhaokergwtWs5HYGQGbF8dZRsbvle22jc+fzrluJs1/oFLn/MbighsRLiCFK7iC+F+KNcQqj+crKFDNQpwRUOvlz79Sju4W",sidebar_class_name:"post api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"List project metadata",permalink:"/reference/list-metadata"},next:{title:"Get a project metadata",permalink:"/reference/get-metadata"}},M={},_=[];function q(e){const a={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Create a project metadata"}),"\n",(0,i.jsx)(d(),{method:"post",path:"/api/project-metadata"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"settings.company"}),": allows to create resources."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://support.wethod.com/settings/index/#project-metadata",children:"Here the dedicated support page"}),"."]}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)(c(),{className:"openapi-tabs__mime",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"key",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Metadata tag name",type:"string",example:"Country"}}),(0,i.jsx)(j(),{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"Values of the metadata tag",type:"array",items:{type:"string"},example:["IT","Finance"]}}),(0,i.jsx)(j(),{collapsible:!1,name:"is_required",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Is metadata tag required",type:"boolean",example:!0}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(l(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Returns the project metadata created."})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:1}}),(0,i.jsx)(j(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!1,name:"key",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Sector"}}),(0,i.jsx)(j(),{collapsible:!1,name:"values",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"},example:["IT","Finance"]}}),(0,i.jsx)(j(),{collapsible:!1,name:"is_required",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!0}})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "id": 1,\n  "created_at": "2025-03-17T22:44:28.748Z",\n  "updated_at": "2025-03-17T22:44:28.748Z",\n  "key": "Sector",\n  "values": [\n    "IT",\n    "Finance"\n  ],\n  "is_required": true\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Validation failed"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Error unique key",type:"string",example:"invalid_data"}}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable message describing the error",type:"string",example:"You provided invalid data. Check 'failures' for details."}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"failures"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"List of validation errors"})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the field causing the error",type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable description of the error",type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(a.p,{children:"]"})})})]})]})})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "key": "invalid_data",\n  "message": "You provided invalid data. Check \'failures\' for details.",\n  "failures": [\n    {\n      "field": "string",\n      "message": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Error unique key",type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable message describing the error",type:"string"}})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "key": "string",\n  "message": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function N(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}}}]);