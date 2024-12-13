"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[395],{44142:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>q,contentTitle:()=>N,default:()=>_,frontMatter:()=>v,metadata:()=>k,toc:()=>S});var n=s(74848),i=s(28453),l=s(91366),t=s.n(l),r=(s(6050),s(57742)),o=s.n(r),d=(s(67792),s(27362)),c=s.n(d),p=s(36683),m=s.n(p),h=s(81124),u=s.n(h),x=s(60674),j=s.n(x),g=s(23397),b=s.n(g),y=(s(26651),s(51107)),f=(s(77675),s(19365));const v={id:"delete-people-allocation",title:"Delete a person allocation",description:"Required permissions:",sidebar_label:"Delete a person allocation",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1v3DYQ/SvE9JIY2g8b2x50WzQOEqANjNRpD/Yi4IqzK6YSSZND21tB/70YSvtlOXbrFm0PPa2WfJp5w/c0nAZIrgPkV3CB1lUoZFXZQpK2BhYZKAyF1y79zeEj3kTtUQmHvtYhaGtCfm1G4uTEVdIYbdbj2iq92pyc5IKsUFghHcYUK+uFFM7bL1iQuCvRo6ASRQzohQ7i4kdhvZgXhY2GHg392VKJ/sUJjCVOYp7L4mSgryaxRpBVcsNctRFSKEnIT5yJ37w21+bq3Ta3QqULSahEiM5ZT8LJNS5elUQu5JNJvzq+QyqtGhe2nmzpTLRReD/5xiV1RnsOr8eQgXXo07/3CnLoeHY6zvcyZuCklzUSeha6ASNrhBy0ggw06+oklZCB7+WFnHzEDEJRYi0hb4A2jt8I5LVZQ9tmuyC/JMqj723tpNlsA5YoFXp46J/LEkXRIcXGRnEnDfEBa0PoJcul/yqRn9GHrujniMwv3ovbDn1EJgb8UxQWDA7OmoCB98+mU/45TriXQ4RYFBjCKlbVpreWGkObwWx6Onzxk5GRSuv1b8hyFdYQGmKcdK7SXczJl8Dg5oCl8+wN0h2nwiocxn53eXkhAkmKQSREti1OG4IM8F7WrkLIZ9PTNoMO+XQYwnvah+nP6CDScT1tBr/iZhjx3HvrRTT6JqJgxMOIbQY1hiDXj1UVa2lGHqWSywpFjxMdaKnNOn2SyCmGcdvdil1yA2GEpgHzj73g0LZtUm425PHBkljZaP5N2WZ/l2xczNtUzIs1OwxnLH1ebcP940p+sJRqOVIxEeEWsmukqXFSCTlMpNOTQQcOk0arFjII6G+3vTX6ittO39il0wdNHbhXBCyi17RJ6CVKj34eOUvTHm7/xJboXHAE2hbFGSDr995aX0s6POrkKMZ1gHQc2qxsitAfA2TQ9z/I4Wx6NhtNvxudfsuSOBuolsmbfXt909+BfPUHaw7HhAfNtdm7/f+B4b82MPTu4e+d39CG1U6ebXqzX4F0mq0/sDtkkGvFU2FpAzGyaZYy4CdftS0v30T07OtFBrfSa/5ok8uVDvysIF/JKuATfnm1Ncxr8TWy/WI3bNzKKvZWTk2JZ5p20Wbbe//F2f/opPIoxY7KYDLakeWp5cWsnh5bnuezH5CO+HSYeVGgo4O9wW3FPWrXJ9+c/3B+eQ5t+zvlREbS",sidebar_class_name:"delete api-method",custom_edit_url:null},N=void 0,k={id:"reference/delete-people-allocation",title:"Delete a person allocation",description:"Required permissions:",source:"@site/docs/reference/delete-people-allocation.api.mdx",sourceDirName:"reference",slug:"/reference/delete-people-allocation",permalink:"/reference/delete-people-allocation",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-people-allocation",title:"Delete a person allocation",description:"Required permissions:",sidebar_label:"Delete a person allocation",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1v3DYQ/SvE9JIY2g8b2x50WzQOEqANjNRpD/Yi4IqzK6YSSZND21tB/70YSvtlOXbrFm0PPa2WfJp5w/c0nAZIrgPkV3CB1lUoZFXZQpK2BhYZKAyF1y79zeEj3kTtUQmHvtYhaGtCfm1G4uTEVdIYbdbj2iq92pyc5IKsUFghHcYUK+uFFM7bL1iQuCvRo6ASRQzohQ7i4kdhvZgXhY2GHg392VKJ/sUJjCVOYp7L4mSgryaxRpBVcsNctRFSKEnIT5yJ37w21+bq3Ta3QqULSahEiM5ZT8LJNS5elUQu5JNJvzq+QyqtGhe2nmzpTLRReD/5xiV1RnsOr8eQgXXo07/3CnLoeHY6zvcyZuCklzUSeha6ASNrhBy0ggw06+oklZCB7+WFnHzEDEJRYi0hb4A2jt8I5LVZQ9tmuyC/JMqj723tpNlsA5YoFXp46J/LEkXRIcXGRnEnDfEBa0PoJcul/yqRn9GHrujniMwv3ovbDn1EJgb8UxQWDA7OmoCB98+mU/45TriXQ4RYFBjCKlbVpreWGkObwWx6Onzxk5GRSuv1b8hyFdYQGmKcdK7SXczJl8Dg5oCl8+wN0h2nwiocxn53eXkhAkmKQSREti1OG4IM8F7WrkLIZ9PTNoMO+XQYwnvah+nP6CDScT1tBr/iZhjx3HvrRTT6JqJgxMOIbQY1hiDXj1UVa2lGHqWSywpFjxMdaKnNOn2SyCmGcdvdil1yA2GEpgHzj73g0LZtUm425PHBkljZaP5N2WZ/l2xczNtUzIs1OwxnLH1ebcP940p+sJRqOVIxEeEWsmukqXFSCTlMpNOTQQcOk0arFjII6G+3vTX6ittO39il0wdNHbhXBCyi17RJ6CVKj34eOUvTHm7/xJboXHAE2hbFGSDr995aX0s6POrkKMZ1gHQc2qxsitAfA2TQ9z/I4Wx6NhtNvxudfsuSOBuolsmbfXt909+BfPUHaw7HhAfNtdm7/f+B4b82MPTu4e+d39CG1U6ebXqzX4F0mq0/sDtkkGvFU2FpAzGyaZYy4CdftS0v30T07OtFBrfSa/5ok8uVDvysIF/JKuATfnm1Ncxr8TWy/WI3bNzKKvZWTk2JZ5p20Wbbe//F2f/opPIoxY7KYDLakeWp5cWsnh5bnuezH5CO+HSYeVGgo4O9wW3FPWrXJ9+c/3B+eQ5t+zvlREbS",sidebar_class_name:"delete api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Create a person allocation",permalink:"/reference/create-people-allocation"},next:{title:"Update a person allocation",permalink:"/reference/update-people-allocation"}},q={},S=[];function T(e){const a={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Delete a person allocation"}),"\n",(0,n.jsx)(o(),{method:"delete",path:"/api/people-allocations/{id}"}),"\n",(0,n.jsx)(a.p,{children:"Required permissions:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"planning.modify"}),": to delete allocation for a project where the user is PM or Account"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"planning.modify_other"}),": to delete allocation for a project where the user is not PM nor Account"]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"planning.modify_past"}),": to delete allocation on today or in a date in the past"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.a,{href:"https://support.wethod.com/planning/index/#people-allocation",children:"Here the dedicated support page"}),"."]}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(m(),{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Header Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)(m(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,n.jsx)(m(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(t(),{label:void 0,id:void 0,children:[(0,n.jsxs)(f.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Allocation successfully deleted."})}),(0,n.jsx)("div",{})]}),(0,n.jsxs)(f.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!1,name:"code",required:!1,schemaName:"int",qualifierMessage:void 0,schema:{description:"HTTP status code",type:"int",example:401}}),(0,n.jsx)(j(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"HTTP status text",type:"string",example:"Unauthorized"}}),(0,n.jsx)(j(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Error unique key",type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable message describing the error",type:"string"}})]})]})}),(0,n.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "code": 401,\n  "status": "Unauthorized",\n  "key": "string",\n  "message": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(f.default,{label:"404",value:"404",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Not found"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!1,name:"code",required:!1,schemaName:"int",qualifierMessage:void 0,schema:{description:"HTTP status code",type:"int",example:404}}),(0,n.jsx)(j(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"HTTP status text",type:"string",example:"Not Found"}}),(0,n.jsx)(j(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Error unique key",type:"string",example:"not_found"}}),(0,n.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable message describing the error",type:"string"}})]})]})}),(0,n.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "code": 404,\n  "status": "Not Found",\n  "key": "not_found",\n  "message": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function _(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(T,{...e})}):T(e)}}}]);