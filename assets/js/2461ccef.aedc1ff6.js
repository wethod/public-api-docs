"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[113],{43643:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>w,contentTitle:()=>M,default:()=>R,frontMatter:()=>v,metadata:()=>V,toc:()=>T});var i=s(74848),t=s(28453),l=s(91366),n=s.n(l),r=(s(6050),s(57742)),d=s.n(r),o=(s(67792),s(27362)),c=s.n(o),m=s(36683),p=s.n(m),h=s(81124),u=s.n(h),f=s(60674),x=s.n(f),y=s(23397),b=s.n(y),j=(s(26651),s(51107)),g=(s(77675),s(19365));const v={id:"list-locations",title:"List locations",description:"Required permissions:",sidebar_label:"List locations",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVm1v2zYQ/ivEDQPaQI5loykGfUuXtQmQoMWSdsgSY6Clk8VOIlnyFMcw9N+HoyS/JUucAPswwIBB8sR77rl77rgEkjMPyQ2cm1SSMhomEWToU6dsWCbwO/6olcNMWHSV8l4Z7ZNbPRAHBx6JlJ75w9RUVurFwUEiZFmauRd3CufC5KI7EWV3vz+81bf65hQdCipQZJipVBJmwtfWGkfCyhlO3hRE1ifDYbd7OEcqTMaOhr3XodIZ3g9/6lwMVi7eHkIExqILy7MMEiiVpz5EDxFY6WSFhI6DX4KWFQarShFEoDjuHzW6BeyycVWg0HU1RcfRKcLKCzJC6bSsMxRKh6gcemu0RwbiOv4gyWXpMQKfFlhJSJZAC8tulSacoQu+clmXBMkojiOo5L2q6iqsmiZawTR57nEPnK0d42RMuXKehEOqncYsQH81vC04tc04gX/JZyB9VCWh6zibLgKo9bciV1hmh+KqUF7wT4uzy8/il/fxSOTGVZIScX19fT24uBicnFydniYXF8nl5Z/7xeDJKT2DCNqrIAH2OyBVITQR4L2sbImev/ishRR8ygtfV5V0i130HWxheltGcSfLmn2N4/G7QTwaxKOrcZzE/Pt5/CEeJ3HMvj45lHwTFVLv4ULmvPfQy4ySZxydm/n+bqaYG4eP+Cmf8bNZCX8EkQ5+bQXZV0OBMuvKZ7dC++6wMLWYS02tlAidTEnMFRVbySVXP5HbR4B8Q8ftag8gx1/OxF1rvQWm9vgiCBM2brUfimkcx/y321FZgz4IgBsTK3TVvARLNjcunHb8cD5Sowk18W3S2lK15sPv3rTp3YUknZMhBZxm3l8HcQMq4xtDIXa63RJxYHEt90kE1nE/JdVGpbJH20OldNevVoqCZNRsedpbkhuA9v6mzf5D60ren6OeUQHJ+Oio2WhkK9upMSVKzVXUb5npd0yZDlLEkaxm5AkZrns2ffdYfj/ITDDb6CncV4VqZM2Grm0lA4GhtGpYbswkj+6uH0i1K7lguyEordoYgMBV5jGtnaJFsJ6idOiOa7532WweX3JZtEnbMupjZA8QdWcfe1JXxIWqCvQEgxCN0rkJN3SscK/odNb3vveD0RHnwxpPVdt+OmGec7lvBr3F3HJd5f/XZ0fHK+E9DW0plQ61zNlcdom/AWkVRLBmYRJBYTzx0XI5lR6/urJpeLsdpJziTHk5LTdG3L8S9/IXyqOY/8bFxouonwbATfZlWPZ6hTwBYfXaeSWG/+7Z8QTorXa6Bj7hhVOMHJKbSRP1M+llKX7Ti+Ot2HeKPoH1wdR+JdE7qJ4eqc/jWQ/vLTytzXGaot3k9sFMZK5XjffTb1fQNP8ANwdlDQ==",sidebar_class_name:"get api-method",custom_edit_url:null},M=void 0,V={id:"reference/list-locations",title:"List locations",description:"Required permissions:",source:"@site/docs/reference/list-locations.api.mdx",sourceDirName:"reference",slug:"/reference/list-locations",permalink:"/reference/list-locations",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-locations",title:"List locations",description:"Required permissions:",sidebar_label:"List locations",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVm1v2zYQ/ivEDQPaQI5loykGfUuXtQmQoMWSdsgSY6Clk8VOIlnyFMcw9N+HoyS/JUucAPswwIBB8sR77rl77rgEkjMPyQ2cm1SSMhomEWToU6dsWCbwO/6olcNMWHSV8l4Z7ZNbPRAHBx6JlJ75w9RUVurFwUEiZFmauRd3CufC5KI7EWV3vz+81bf65hQdCipQZJipVBJmwtfWGkfCyhlO3hRE1ifDYbd7OEcqTMaOhr3XodIZ3g9/6lwMVi7eHkIExqILy7MMEiiVpz5EDxFY6WSFhI6DX4KWFQarShFEoDjuHzW6BeyycVWg0HU1RcfRKcLKCzJC6bSsMxRKh6gcemu0RwbiOv4gyWXpMQKfFlhJSJZAC8tulSacoQu+clmXBMkojiOo5L2q6iqsmiZawTR57nEPnK0d42RMuXKehEOqncYsQH81vC04tc04gX/JZyB9VCWh6zibLgKo9bciV1hmh+KqUF7wT4uzy8/il/fxSOTGVZIScX19fT24uBicnFydniYXF8nl5Z/7xeDJKT2DCNqrIAH2OyBVITQR4L2sbImev/ishRR8ygtfV5V0i130HWxheltGcSfLmn2N4/G7QTwaxKOrcZzE/Pt5/CEeJ3HMvj45lHwTFVLv4ULmvPfQy4ySZxydm/n+bqaYG4eP+Cmf8bNZCX8EkQ5+bQXZV0OBMuvKZ7dC++6wMLWYS02tlAidTEnMFRVbySVXP5HbR4B8Q8ftag8gx1/OxF1rvQWm9vgiCBM2brUfimkcx/y321FZgz4IgBsTK3TVvARLNjcunHb8cD5Sowk18W3S2lK15sPv3rTp3YUknZMhBZxm3l8HcQMq4xtDIXa63RJxYHEt90kE1nE/JdVGpbJH20OldNevVoqCZNRsedpbkhuA9v6mzf5D60ren6OeUQHJ+Oio2WhkK9upMSVKzVXUb5npd0yZDlLEkaxm5AkZrns2ffdYfj/ITDDb6CncV4VqZM2Grm0lA4GhtGpYbswkj+6uH0i1K7lguyEordoYgMBV5jGtnaJFsJ6idOiOa7532WweX3JZtEnbMupjZA8QdWcfe1JXxIWqCvQEgxCN0rkJN3SscK/odNb3vveD0RHnwxpPVdt+OmGec7lvBr3F3HJd5f/XZ0fHK+E9DW0plQ61zNlcdom/AWkVRLBmYRJBYTzx0XI5lR6/urJpeLsdpJziTHk5LTdG3L8S9/IXyqOY/8bFxouonwbATfZlWPZ6hTwBYfXaeSWG/+7Z8QTorXa6Bj7hhVOMHJKbSRP1M+llKX7Ti+Ot2HeKPoH1wdR+JdE7qJ4eqc/jWQ/vLTytzXGaot3k9sFMZK5XjffTb1fQNP8ANwdlDQ==",sidebar_class_name:"get api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Get a holiday",permalink:"/reference/get-holiday"},next:{title:"Get a location",permalink:"/reference/get-location"}},w={},T=[];function Z(e){const a={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"List locations"}),"\n",(0,i.jsx)(d(),{method:"get",path:"/api/locations"}),"\n",(0,i.jsx)(a.p,{children:"Required permissions:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"settings.company"}),": allows view of company locations."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://support.wethod.com/settings/index/#company-locations",children:"Here the dedicated support page"}),"."]}),"\n",(0,i.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"limit",in:"query",description:"The number of items to include in the response.",required:!1,schema:{type:"integer",default:100,maximum:100}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"offset",in:"query",description:"The offset of the first returned item.",required:!1,schema:{type:"integer",default:0}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"updated_at",in:"query",description:"Filter items by the updated_at field. This is in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.",required:!1,schema:{type:"string",format:"date-time"},examples:{"On a date":{summary:"Filter items updated on a date.",value:"2024-01-01T20:00:00%2B02:00"},"Greater than":{summary:"Filter items updated after a date.",value:"gt:2024-01-01T20:00:00%2B02:00"},"Lower than":{summary:"Filter items updated before a date.",value:"lt:2024-01-01T20:00:00%2B02:00"}}}})]})})]}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(g.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Returns the list of locations set for the company."})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:1}}),(0,i.jsx)(x(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 255 characters`",schema:{type:"string",maxLength:255}}),(0,i.jsx)(x(),{collapsible:!1,name:"default",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(a.p,{children:"]"})})})]})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'[\n  {\n    "id": 1,\n    "created_at": "2024-12-17T14:53:20.379Z",\n    "updated_at": "2024-12-17T14:53:20.379Z",\n    "name": "string",\n    "default": true\n  }\n]',language:"json"})})]})})})})]}),(0,i.jsxs)(g.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Bad request"})}),(0,i.jsx)("div",{})]})]})})})]})}function R(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(Z,{...e})}):Z(e)}}}]);