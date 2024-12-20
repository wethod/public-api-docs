"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[912],{57928:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>P,default:()=>k,frontMatter:()=>q,metadata:()=>v,toc:()=>M});var i=a(74848),t=a(28453),r=a(91366),n=a.n(r),l=(a(6050),a(57742)),c=a.n(l),m=(a(67792),a(27362)),d=a.n(m),o=a(36683),p=a.n(o),h=a(81124),u=a.n(h),x=a(60674),j=a.n(x),y=a(23397),g=a.n(y),f=(a(26651),a(51107)),b=(a(77675),a(19365));const q={id:"list-contacts",title:"List contacts",description:"Required permissions:",sidebar_label:"List contacts",hide_title:!0,hide_table_of_contents:!0,api:"eJzNln1v2zYQh78KccCANpBt2Wi6Qf+lzdoESNBiyTZkiRHQ0iliK76UpOIYhr77cJTk2I7nlwwDBhhIJB15zx3vfrw5eP7gILmFj1p5nnoYR5ChS60wXmgFCfyGPyphMWMGrRTOCa1ccqd67OgotbL/KHB6dJQwXpZ66hg9MotOVzZF179Td+r2DC0yXyDLMBMp95gxVxmjrWeGP+D4TeG9cclg0L7tT9EXOuunWg5yobhKcSBUhk9v+xCBNmg5sZ1nkEApnG/RHURguOUSPVqKaQ6KSwxGUniIQFA8Pyq0M1iP8rpApio5Qct0zoRH6ZjXTKi0rDJkQoUALDqjlUPisG1eIMl56TAClxYoOSRz8DNDboXy+IA2+Mp5VXpIhnEcgeRPQlYyPNV1tMDUee5wD87GjjiJKRfWeWbRV1ZhFtBfjbeCU5mMzuqe70D6JEqPts3ZZBagnteyXGCZ9dl1IRyjn2LnV1/YL+/jIcu1ldwn7Obm5qZ3edk7Pb0+O0suL5Orq7/2i8F5K9QDRNBsBQmQ354XEqGOAJ+4NCU6WvFFMc7oKz24SkpuZ+v0LTbTnS1RPPKyIl+jePSuFw978fB6FCcx/X4afYhHSRyTr88WOe3kC672cMFzevfSy4NPdji60NP93Uww1xY3+Cl3+FmuhLQUqPy9yHbXpsi6umwWURPlDVjbQFXpHdPqsBpdpvkzqEPvo5aGq1mHVCDP2mJeZ0obSzbTFZvyhok2tjz1bCp8sYLibbWl0jaA/IGWRHEPkJOv5+yxsV6BqRwehDAm40aJQmmP4pj+rOs2KYILaSeVpHNJW6Wk5NP/qDwt5MaUJMxCq8E3p5u6WvfOreUh21Rf9P6Z9xZCaaShA1rBWFGP5QJCyUUJUZPECFxlw3/jCIwlbfeiCUpkG7VKCtWK56K9IRnWK9731oclyL3XtLFMKicUOndfKREie3EA56drrdAtYbQEokNiW+Rvp5eD9m3OYkPokj9doHrwBSTD47huT2uHYUyG3XnuY2t1ucvw52Nyrn1TE2uNEEEp1HfMhNqxyyjEsJK4DZt5LNEUWu0DXy/SrCffMA1pF57C6SapU69JRcny3ab+/MAzRi2EzpOqgAxqQjdAmAEMJ1cw4EYM0ucBx6F97KabypakN+3wxI1YGpyARMJhWlnhZ8F6gtyiPalo23m9/PmKWr1J8IpRFyF5gKj99qlrikVmglKQXWMQghEq12GHNid08bQy2V2k73vDY8q60c7L5i5rdfWC1Gop5rVzWwjX/240bfPl8ckPTMmFChpjQ4c153kL3IhWfEN04wgK7Tx9mc8n3OHvtqxret3csXRymXB8Ui5dk/+YkMOn2I3I33G2NDV3EwPQ1XcYy16T6haExUT8Sob/bjTdAr1y8/2L5B00Sm3hWb58n3HG9GAF8UByO66jbnA5rOLedD34lu07am1BfTHavTJ9a1Tb567dPM8T3gpPY3OSpmiWj/rFNEW5Xqj751+voa7/BsJfPQI=",sidebar_class_name:"get api-method",custom_edit_url:null},P=void 0,v={id:"reference/list-contacts",title:"List contacts",description:"Required permissions:",source:"@site/docs/reference/list-contacts.api.mdx",sourceDirName:"reference",slug:"/reference/list-contacts",permalink:"/reference/list-contacts",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-contacts",title:"List contacts",description:"Required permissions:",sidebar_label:"List contacts",hide_title:!0,hide_table_of_contents:!0,api:"eJzNln1v2zYQh78KccCANpBt2Wi6Qf+lzdoESNBiyTZkiRHQ0iliK76UpOIYhr77cJTk2I7nlwwDBhhIJB15zx3vfrw5eP7gILmFj1p5nnoYR5ChS60wXmgFCfyGPyphMWMGrRTOCa1ccqd67OgotbL/KHB6dJQwXpZ66hg9MotOVzZF179Td+r2DC0yXyDLMBMp95gxVxmjrWeGP+D4TeG9cclg0L7tT9EXOuunWg5yobhKcSBUhk9v+xCBNmg5sZ1nkEApnG/RHURguOUSPVqKaQ6KSwxGUniIQFA8Pyq0M1iP8rpApio5Qct0zoRH6ZjXTKi0rDJkQoUALDqjlUPisG1eIMl56TAClxYoOSRz8DNDboXy+IA2+Mp5VXpIhnEcgeRPQlYyPNV1tMDUee5wD87GjjiJKRfWeWbRV1ZhFtBfjbeCU5mMzuqe70D6JEqPts3ZZBagnteyXGCZ9dl1IRyjn2LnV1/YL+/jIcu1ldwn7Obm5qZ3edk7Pb0+O0suL5Orq7/2i8F5K9QDRNBsBQmQ354XEqGOAJ+4NCU6WvFFMc7oKz24SkpuZ+v0LTbTnS1RPPKyIl+jePSuFw978fB6FCcx/X4afYhHSRyTr88WOe3kC672cMFzevfSy4NPdji60NP93Uww1xY3+Cl3+FmuhLQUqPy9yHbXpsi6umwWURPlDVjbQFXpHdPqsBpdpvkzqEPvo5aGq1mHVCDP2mJeZ0obSzbTFZvyhok2tjz1bCp8sYLibbWl0jaA/IGWRHEPkJOv5+yxsV6BqRwehDAm40aJQmmP4pj+rOs2KYILaSeVpHNJW6Wk5NP/qDwt5MaUJMxCq8E3p5u6WvfOreUh21Rf9P6Z9xZCaaShA1rBWFGP5QJCyUUJUZPECFxlw3/jCIwlbfeiCUpkG7VKCtWK56K9IRnWK9731oclyL3XtLFMKicUOndfKREie3EA56drrdAtYbQEokNiW+Rvp5eD9m3OYkPokj9doHrwBSTD47huT2uHYUyG3XnuY2t1ucvw52Nyrn1TE2uNEEEp1HfMhNqxyyjEsJK4DZt5LNEUWu0DXy/SrCffMA1pF57C6SapU69JRcny3ab+/MAzRi2EzpOqgAxqQjdAmAEMJ1cw4EYM0ucBx6F97KabypakN+3wxI1YGpyARMJhWlnhZ8F6gtyiPalo23m9/PmKWr1J8IpRFyF5gKj99qlrikVmglKQXWMQghEq12GHNid08bQy2V2k73vDY8q60c7L5i5rdfWC1Gop5rVzWwjX/240bfPl8ckPTMmFChpjQ4c153kL3IhWfEN04wgK7Tx9mc8n3OHvtqxret3csXRymXB8Ui5dk/+YkMOn2I3I33G2NDV3EwPQ1XcYy16T6haExUT8Sob/bjTdAr1y8/2L5B00Sm3hWb58n3HG9GAF8UByO66jbnA5rOLedD34lu07am1BfTHavTJ9a1Tb567dPM8T3gpPY3OSpmiWj/rFNEW5Xqj751+voa7/BsJfPQI=",sidebar_class_name:"get api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Get a client",permalink:"/reference/get-client"},next:{title:"Get a contact",permalink:"/reference/get-contact"}},N={},M=[];function w(e){const s={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"List contacts"}),"\n",(0,i.jsx)(c(),{method:"get",path:"/api/contacts"}),"\n",(0,i.jsx)(s.p,{children:"Required permissions:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"crm.view"}),": allows view resources."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://support.wethod.com/finance/index",children:"Here the dedicated support page"}),"."]}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Query Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"limit",in:"query",description:"The number of items to include in the response.",required:!1,schema:{type:"integer",default:100,maximum:100}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"offset",in:"query",description:"The offset of the first returned item.",required:!1,schema:{type:"integer",default:0}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"updated_at",in:"query",description:"Filter items by the updated_at field. This is in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.",required:!1,schema:{type:"string",format:"date-time"},examples:{"On a date":{summary:"Filter items updated on a date.",value:"2024-01-01T20:00:00%2B02:00"},"Greater than":{summary:"Filter items updated after a date.",value:"gt:2024-01-01T20:00:00%2B02:00"},"Lower than":{summary:"Filter items updated before a date.",value:"lt:2024-01-01T20:00:00%2B02:00"}}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"client_id",in:"query",description:"The id of the client to filter the results on.",required:!1,schema:{type:"integer"}}})]})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Returns the list of contacts."})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:1}}),(0,i.jsx)(j(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!1,name:"client_business_unit_id",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{description:"ID of the client business unit",type:"integer",minimum:1,example:1}}),(0,i.jsx)(j(),{collapsible:!1,name:"client_id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{description:"ID of the client",type:"integer",minimum:1,example:1}}),(0,i.jsx)(j(),{collapsible:!1,name:"email",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 150 characters`",schema:{type:"string",maxLength:150}}),(0,i.jsx)(j(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 100 characters`",schema:{type:"string",maxLength:100}}),(0,i.jsx)(j(),{collapsible:!1,name:"surname",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 100 characters`",schema:{type:"string",maxLength:100}}),(0,i.jsx)(j(),{collapsible:!1,name:"role",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 75 characters`",schema:{type:"string",maxLength:75}}),(0,i.jsx)(j(),{collapsible:!1,name:"notes",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"linkedin",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 250 characters`",schema:{type:"string",maxLength:250}}),(0,i.jsx)(j(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"telephone",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 100 characters`",schema:{type:"string",maxLength:100}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'[\n  {\n    "id": 1,\n    "created_at": "2024-12-20T14:44:08.119Z",\n    "updated_at": "2024-12-20T14:44:08.119Z",\n    "client_business_unit_id": 1,\n    "client_id": 1,\n    "email": "string",\n    "name": "string",\n    "surname": "string",\n    "role": "string",\n    "notes": "string",\n    "linkedin": "string",\n    "description": "string",\n    "telephone": "string"\n  }\n]',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad request"})}),(0,i.jsx)("div",{})]})]})})})]})}function k(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}}}]);