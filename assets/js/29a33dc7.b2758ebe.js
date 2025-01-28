"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[671],{76300:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>N,contentTitle:()=>q,default:()=>C,frontMatter:()=>k,metadata:()=>y,toc:()=>P});var i=s(74848),t=s(28453),l=s(91366),n=s.n(l),r=(s(6050),s(57742)),d=s.n(r),o=(s(67792),s(27362)),c=s.n(o),m=s(36683),p=s.n(m),h=s(81124),u=s.n(h),x=s(60674),f=s.n(x),g=s(23397),j=s.n(g),v=(s(26651),s(51107)),b=(s(77675),s(19365));const k={id:"get-location",title:"Get a location",description:"Required permissions:",sidebar_label:"Get a location",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVUuPGzcM/isCe0kW8o53u5vD3BbNowGCIGjT9uA1AnlEe5TOSIrEsdcYzH8vqHnYXufV9NSTPSJFfvz4kWqB1CZCvoA3rlBknIWlBI2xCManzxx+w0+NCaiFx1CbGI2zMb+3M3FxEZHI2E28LFztld1fXORCVZXbRbE1uBNuLQaLqIb48fLe3tvFrxhQUIlCozaFItQiNt67QMKrDS6flEQ+5lk2nF7ukEqnOVE2Zs2M1fiQ/TSkmE0pnl6CBOcxpM/XGnLYIE0VSvAqqBoJA5feglU1Qg5GgwTDJXtFJUgIQ+WQU2hQQixKrBXkLdDe841IwdgNdJ2cgvyVcM5+6TGNAUtUGgM8pvZ9iRNBe9eInbIkyAljCYMqSOzMfwXyJ4bYF/0tIHfvXott730Cpon4ryAs2Tl6ZyNGtl/P5/zzWFTUBBuTBDg0RpbA2EHuX+EsoSW+qryvTG/JPka+3x7lPyBb9C0sArKgPigCCY3Xh49EDde+Vk1FLHUfWCdkeqhGHxXETdgkrmpjTd3UkF9JwAdV+wohv+pOMp0RIWHtQs0WYAQzMjVCdwLou+/0LT33rtXDG7QbKiG/vr3tDpUdfFfOVagsS2M8cquPWDAdZIgrmWb/OTnoOva8mf983rOXLqyM1mghedyce7x1JNausTqlq5MC++FLQ8c4IVPeZNOoZq3RHUiIGLbjODahYqUOC0B5czT8wPKKWDTB0D55r1AFDHcNB2+7Y/PvLJG+sSdOIw+cAeRgezkSP5GbFJYoTA6pJGPXLkUYmAMJw8hADtfz65vZ/Nns6pYJ8i5SrZJWh4l8hSTUpPHHM9geFP9/XbkDr4QPlPlKmSSU1M126P4ClDcgYboHEnKjeRJLF4kd2nalIv4Rqq7j408NBm70UsJWBaNWzPuiBW0i/9eQr1UV8StkPhnZfCq+hHE47Bf2VlXN0Nu/cd+/C92yk+Pu/OHs37vtPwuxh3L2ukxgefP/MKqvr/5v4zk8Mid4ep+7okBPR7azdc5DOy2LVy/eQ9f9A90b9vQ=",sidebar_class_name:"get api-method",custom_edit_url:null},q=void 0,y={id:"reference/get-location",title:"Get a location",description:"Required permissions:",source:"@site/docs/reference/get-location.api.mdx",sourceDirName:"reference",slug:"/reference/get-location",permalink:"/reference/get-location",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-location",title:"Get a location",description:"Required permissions:",sidebar_label:"Get a location",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVUuPGzcM/isCe0kW8o53u5vD3BbNowGCIGjT9uA1AnlEe5TOSIrEsdcYzH8vqHnYXufV9NSTPSJFfvz4kWqB1CZCvoA3rlBknIWlBI2xCManzxx+w0+NCaiFx1CbGI2zMb+3M3FxEZHI2E28LFztld1fXORCVZXbRbE1uBNuLQaLqIb48fLe3tvFrxhQUIlCozaFItQiNt67QMKrDS6flEQ+5lk2nF7ukEqnOVE2Zs2M1fiQ/TSkmE0pnl6CBOcxpM/XGnLYIE0VSvAqqBoJA5feglU1Qg5GgwTDJXtFJUgIQ+WQU2hQQixKrBXkLdDe841IwdgNdJ2cgvyVcM5+6TGNAUtUGgM8pvZ9iRNBe9eInbIkyAljCYMqSOzMfwXyJ4bYF/0tIHfvXott730Cpon4ryAs2Tl6ZyNGtl/P5/zzWFTUBBuTBDg0RpbA2EHuX+EsoSW+qryvTG/JPka+3x7lPyBb9C0sArKgPigCCY3Xh49EDde+Vk1FLHUfWCdkeqhGHxXETdgkrmpjTd3UkF9JwAdV+wohv+pOMp0RIWHtQs0WYAQzMjVCdwLou+/0LT33rtXDG7QbKiG/vr3tDpUdfFfOVagsS2M8cquPWDAdZIgrmWb/OTnoOva8mf983rOXLqyM1mghedyce7x1JNausTqlq5MC++FLQ8c4IVPeZNOoZq3RHUiIGLbjODahYqUOC0B5czT8wPKKWDTB0D55r1AFDHcNB2+7Y/PvLJG+sSdOIw+cAeRgezkSP5GbFJYoTA6pJGPXLkUYmAMJw8hADtfz65vZ/Nns6pYJ8i5SrZJWh4l8hSTUpPHHM9geFP9/XbkDr4QPlPlKmSSU1M126P4ClDcgYboHEnKjeRJLF4kd2nalIv4Rqq7j408NBm70UsJWBaNWzPuiBW0i/9eQr1UV8StkPhnZfCq+hHE47Bf2VlXN0Nu/cd+/C92yk+Pu/OHs37vtPwuxh3L2ukxgefP/MKqvr/5v4zk8Mid4ep+7okBPR7azdc5DOy2LVy/eQ9f9A90b9vQ=",sidebar_class_name:"get api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"List locations",permalink:"/reference/list-locations"},next:{title:"List people allocations",permalink:"/reference/list-people-allocations"}},N={},P=[];function M(e){const a={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.default,{as:"h1",className:"openapi__heading",children:"Get a location"}),"\n",(0,i.jsx)(d(),{method:"get",path:"/api/locations/{id}"}),"\n",(0,i.jsx)(a.p,{children:"Required permissions:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"settings.company"}),": allows view of company locations."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://support.wethod.com/settings/index/#company-locations",children:"Here the dedicated support page"}),"."]}),"\n",(0,i.jsx)(v.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Returns the requested location."})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(f(),{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:1}}),(0,i.jsx)(f(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(f(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(f(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",schema:{type:"string",maxLength:255}}),(0,i.jsx)(f(),{collapsible:!1,name:"default",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "id": 1,\n  "created_at": "2025-01-28T10:06:24.743Z",\n  "updated_at": "2025-01-28T10:06:24.743Z",\n  "name": "string",\n  "default": true\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"403",value:"403",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Forbidden"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(b.default,{label:"404",value:"404",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Not found"})}),(0,i.jsx)("div",{})]})]})})})]})}function C(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(M,{...e})}):M(e)}}}]);