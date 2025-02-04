"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[480],{99604:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>P,contentTitle:()=>N,default:()=>T,frontMatter:()=>v,metadata:()=>I,toc:()=>W});var i=s(74848),t=s(28453),r=s(91366),n=s.n(r),l=(s(6050),s(57742)),d=s.n(l),m=(s(67792),s(27362)),o=s.n(m),c=s(36683),p=s.n(c),h=s(81124),u=s.n(h),x=s(60674),j=s.n(x),f=s(23397),g=s.n(f),y=(s(26651),s(51107)),b=(s(77675),s(19365));const v={id:"list-holidays",title:"List holidays",description:"Required permissions:",sidebar_label:"List holidays",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVm1P20gQ/iurPZ3UIoc4aalO/kaPa0EC9XRwrTiI0MYex9t6X7o7JkSR//tp1nbeCCEg3YeTIoG945lnZvZ5ZuYcxcTz5IafmlJmYsZHEc/Ap05alEbzhP8FPyvpIGMWnJLeS6N9cqt77ODAA6LUE3+YGmWFnh0cJEyUpZl6di9hykzO2hNWNO794a2+1Ten4IBhASyDTKYCIWO+stY4ZFZMYPSmQLQ+6ffbt4dTwMJkFKffBe1LncFD/5ex0D96nfueLYXW4N4e8ogbC05QFmcZT3gpPbZJeh5xK5xQgOAo+znXQkEwUhJ5xCVl/rMCN+Ob9bgqgOlKjcFRfhJBeYaGSZ2WVQZM6pCYA2+N9kA4XFtBnuSi9BBxnxagBE/mHGeWwkqNMAEXYuWiKpEngziOuBIPUlUqPNV1tIBp8tzDHjgbO8JJmHLpPDIHWDkNWYD+anhrcCqbUQ/vxDOQPskSwbU1G88CqOW3LJdQZofsqpCe0U+zs8sv7LcP8YDlximBCbu+vr7uXVz0Tk6uTk+Ti4vk8vKf/XLw6KSe8Ig3rnjCKW4PpQJeRxwehLIlePrii2aC0Sk9+Eop4Wab6FvYzHS2hOJelBXFGsbD97140IsHV8M4ien36/BjPEzimGJ9diDIExZC7xFC5PTucZQJJs8EOjfT/cOMITcOtsQpn4mzehO+BZ72fm9Y392GAkTWXp/NG9rpw8xUbCo0NlRCcCJFNpVYrDUXXbWjt1uAfAVHgrUHkOM/z9h9Y70GpvLwIggjMm64Hy7TMI7pz6amEgd9IADpEjG0kzBGjM2NC4dteagdqdEIGsmZsLYk2ZRG979703R3E5FwToQOUJfp/TKHGy4z8hjuYUvbNQ6HIlIiFgSJLU0F60hPUTZpyWyrPiipW8FaUIong3ot1t6cXIG09zdN+x9bK/FwDnqCBU+GR0f1am5L67ExJQjd6kGKd50I7IzNV73d0QzdWplOyt8NnijTuzU/ymgCu8vTYPhkweuo+86Mv0NKPUWJdNYN+hM0RF2yfL/tin4UGaMbAx6JWFwFQpHshMFjBaHjfWFlv1hOVQ/uvhuplSuJcu0kF1auTHFOPPGQVk7iLFiPQThwx1VIul49vqSb3dy6NaMuQ4rAo/bsU9eZRa8CMUJ3g0FIRurcBA9tTUjtWqXo1PtDb3BEnbXGo2oEtJWWcyLsSs5rdZsvefo/3pzayiI8YN+WQgZKhH7O287fcGElj/iiDiP63yOdzOdj4eFvV9Y1vW52AepxJr0YlytT+snSvXzJ2gr5B8xWlrpuoHGaEy/DstcitQPCYmF7JYb/bnPaAXptJCyBj+jBSULOk5tRHXVj9WUtftPR4y3bdxHYgfXR4vHKQm+g2r0VPI9nuX+s4WlsjtMU7GptH811qvVCeD//ccXr+l8WAqaB",sidebar_class_name:"get api-method",custom_edit_url:null},N=void 0,I={id:"reference/list-holidays",title:"List holidays",description:"Required permissions:",source:"@site/docs/reference/list-holidays.api.mdx",sourceDirName:"reference",slug:"/reference/list-holidays",permalink:"/reference/list-holidays",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-holidays",title:"List holidays",description:"Required permissions:",sidebar_label:"List holidays",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVm1P20gQ/iurPZ3UIoc4aalO/kaPa0EC9XRwrTiI0MYex9t6X7o7JkSR//tp1nbeCCEg3YeTIoG945lnZvZ5ZuYcxcTz5IafmlJmYsZHEc/Ap05alEbzhP8FPyvpIGMWnJLeS6N9cqt77ODAA6LUE3+YGmWFnh0cJEyUpZl6di9hykzO2hNWNO794a2+1Ten4IBhASyDTKYCIWO+stY4ZFZMYPSmQLQ+6ffbt4dTwMJkFKffBe1LncFD/5ex0D96nfueLYXW4N4e8ogbC05QFmcZT3gpPbZJeh5xK5xQgOAo+znXQkEwUhJ5xCVl/rMCN+Ob9bgqgOlKjcFRfhJBeYaGSZ2WVQZM6pCYA2+N9kA4XFtBnuSi9BBxnxagBE/mHGeWwkqNMAEXYuWiKpEngziOuBIPUlUqPNV1tIBp8tzDHjgbO8JJmHLpPDIHWDkNWYD+anhrcCqbUQ/vxDOQPskSwbU1G88CqOW3LJdQZofsqpCe0U+zs8sv7LcP8YDlximBCbu+vr7uXVz0Tk6uTk+Ti4vk8vKf/XLw6KSe8Ig3rnjCKW4PpQJeRxwehLIlePrii2aC0Sk9+Eop4Wab6FvYzHS2hOJelBXFGsbD97140IsHV8M4ien36/BjPEzimGJ9diDIExZC7xFC5PTucZQJJs8EOjfT/cOMITcOtsQpn4mzehO+BZ72fm9Y392GAkTWXp/NG9rpw8xUbCo0NlRCcCJFNpVYrDUXXbWjt1uAfAVHgrUHkOM/z9h9Y70GpvLwIggjMm64Hy7TMI7pz6amEgd9IADpEjG0kzBGjM2NC4dteagdqdEIGsmZsLYk2ZRG979703R3E5FwToQOUJfp/TKHGy4z8hjuYUvbNQ6HIlIiFgSJLU0F60hPUTZpyWyrPiipW8FaUIong3ot1t6cXIG09zdN+x9bK/FwDnqCBU+GR0f1am5L67ExJQjd6kGKd50I7IzNV73d0QzdWplOyt8NnijTuzU/ymgCu8vTYPhkweuo+86Mv0NKPUWJdNYN+hM0RF2yfL/tin4UGaMbAx6JWFwFQpHshMFjBaHjfWFlv1hOVQ/uvhuplSuJcu0kF1auTHFOPPGQVk7iLFiPQThwx1VIul49vqSb3dy6NaMuQ4rAo/bsU9eZRa8CMUJ3g0FIRurcBA9tTUjtWqXo1PtDb3BEnbXGo2oEtJWWcyLsSs5rdZsvefo/3pzayiI8YN+WQgZKhH7O287fcGElj/iiDiP63yOdzOdj4eFvV9Y1vW52AepxJr0YlytT+snSvXzJ2gr5B8xWlrpuoHGaEy/DstcitQPCYmF7JYb/bnPaAXptJCyBj+jBSULOk5tRHXVj9WUtftPR4y3bdxHYgfXR4vHKQm+g2r0VPI9nuX+s4WlsjtMU7GptH811qvVCeD//ccXr+l8WAqaB",sidebar_class_name:"get api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Update a contact",permalink:"/reference/update-contact"},next:{title:"Get a holiday",permalink:"/reference/get-holiday"}},P={},W=[];function F(e){const a={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"List holidays"}),"\n",(0,i.jsx)(d(),{method:"get",path:"/api/holidays"}),"\n",(0,i.jsx)(a.p,{children:"Required permissions:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"settings.company"}),": allows view of company holidays."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://support.wethod.com/settings/index/#bank-holidays-planner",children:"Here the dedicated support page"}),"."]}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"limit",in:"query",description:"The number of items to include in the response.",required:!1,schema:{type:"integer",default:100,maximum:100}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"offset",in:"query",description:"The offset of the first returned item.",required:!1,schema:{type:"integer",default:0}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"updated_at",in:"query",description:"Filter items by the updated_at field. This is in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.",required:!1,schema:{type:"string",format:"date-time"},examples:{"On a date":{summary:"Filter items updated on a date.",value:"2024-01-01T20:00:00%2B02:00"},"Greater than":{summary:"Filter items updated after a date.",value:"gt:2024-01-01T20:00:00%2B02:00"},"Lower than":{summary:"Filter items updated before a date.",value:"lt:2024-01-01T20:00:00%2B02:00"}}}})]})})]}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Returns the list of holidays set for the company."})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:1}}),(0,i.jsx)(j(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",schema:{type:"string",maxLength:255}}),(0,i.jsx)(j(),{collapsible:!1,name:"repeating",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(j(),{collapsible:!1,name:"exact_date",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",format:"date"}}),(0,i.jsx)(j(),{collapsible:!1,name:"repeating_day",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1` and `<= 31`",schema:{type:"integer",maximum:31,minimum:1,example:3}}),(0,i.jsx)(j(),{collapsible:!1,name:"repeating_month",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1` and `<= 12`",schema:{type:"integer",maximum:12,minimum:1,example:1}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(a.p,{children:"]"})})})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'[\n  {\n    "id": 1,\n    "created_at": "2025-02-04T07:50:00.525Z",\n    "updated_at": "2025-02-04T07:50:00.525Z",\n    "name": "string",\n    "repeating": true,\n    "exact_date": "2025-02-04",\n    "repeating_day": 3,\n    "repeating_month": 1\n  }\n]',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Bad request"})}),(0,i.jsx)("div",{})]})]})})})]})}function T(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(F,{...e})}):F(e)}}}]);