"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[275],{94661:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>q,default:()=>w,frontMatter:()=>b,metadata:()=>k,toc:()=>S});var i=a(74848),r=a(28453),l=a(91366),n=a.n(l),t=(a(6050),a(57742)),d=a.n(t),c=(a(67792),a(27362)),o=a.n(c),m=a(36683),p=a.n(m),h=a(81124),j=a.n(h),u=a(60674),x=a.n(u),g=a(23397),f=a.n(g),y=(a(26651),a(51107)),v=(a(77675),a(19365));const b={id:"delete-project",title:"Delete a project",description:"Required permissions:",sidebar_label:"Delete a project",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1v20YQ/SuL6SGJQUmO6/bAmxvbiIE0MPJVFI5hjLgjcRNyd70fslWB/72YJSlLpmq7Ldoc2pMk7mjmzZvHnbeCgHMP+QWcO/OFigCXGUjyhVM2KKMhh3d0HZUjKSy5WnmvjPb5Zz0Se3tWWaqUprGkigLt7eUiGNH+ELZNKG5KciRCSSJ6ckJ5cf6zME4cFYWJOuzMdGVCSe6p+bQJnFNvJv2sL173cZKkKjCQFD5aa1wQFud0+bwMwfp8Mumejm8olEaOC1NPejwTpSXdTr7rivsRajkyKTxqFRT5F2PIwFhyyHydScihBdwTmoFFhzUFckz0CjTWBDkoCRkoZthiKOE+7R9KEmfHwsxSC33zazogA9cNBvLgImXgi5JqhHwFYWlTBR1oTg6aJltX/SX1OHplaot62SMoCSW5nRiKNlIsTRQ3qBMETuyQZ6ES8keR+OCUnu8C8okcK+oJQI7Oz8Sijd4CE/2TyFhDuORgb4325Pn8YH+fP7YLdsMTPhYFeT+LVbXsmJdjaDI43PWvT1gpmXQgZqgq4gkXRgfSgYPR2oqFqIyefPH8j9UGTutYRSwp/vWVlsP8J84ZJ6JW15EER2T3usuAbrG2VTv9BcO5khiQEdfkPc5pmPV1rFGPHKHEaUWiixNt0FTpeVIgce0HC/5qIut0oSRJ0VUXXH0sXpVUfBXPmJToyD8TM+OEpICq8onO/mSI7o3ygd+CxR23CYq/w4LOYZJyoNoPqZwpquQw8VusqX+9UogoMPqH2/0TNG4c9lX+IGezfmKm6cZoho8yCCokln9CyTcy+fCuUzHHJ0W+HIL6qDGG0jj1278vxn9Kcw+xs9nvgJ/vhzhOjZsqKUn/F8hZNztg5nDH62GCmJmov+kdpk24akF8C77emnDKxbfoSkB4da0XfdrwoYQcJmjVpLcKk5WSDWTgyS361R9dxUuu8x1o1YbnAN5MnoroVFim6CmhI3cUOfeq2Tx+z4y3JG8F9a1wBci6s1PjagybBKeBcVwbkEhQemZShq55yKDbtpDDwf7B4Wj/x9HLH3gQ1vhQYxp9t8yPW4uGvU+5v8BXdxL6308+wU92Ywx0Gya2QqWZ9iSeVae1C0CrWHldIsggV5Lde2l84PPVaoqePrqqafjxdSTHsrrMYIFO8ZuSRCaV5+8S8hlWnh4Y3PN+ci/E4+Z0Zwf9vk7Gc4FV7ISWLgo2xM1lk/Ue8G+Be4pr3QmxhTJwyWuw7GD/MqqHLezjeO7M8haeNuaoKMiGjbPBVc03yPruOj55c/LhBJrmd3pi5dA=",sidebar_class_name:"delete api-method",custom_edit_url:null},q=void 0,k={id:"reference/delete-project",title:"Delete a project",description:"Required permissions:",source:"@site/docs/reference/delete-project.api.mdx",sourceDirName:"reference",slug:"/reference/delete-project",permalink:"/reference/delete-project",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-project",title:"Delete a project",description:"Required permissions:",sidebar_label:"Delete a project",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1v20YQ/SuL6SGJQUmO6/bAmxvbiIE0MPJVFI5hjLgjcRNyd70fslWB/72YJSlLpmq7Ldoc2pMk7mjmzZvHnbeCgHMP+QWcO/OFigCXGUjyhVM2KKMhh3d0HZUjKSy5WnmvjPb5Zz0Se3tWWaqUprGkigLt7eUiGNH+ELZNKG5KciRCSSJ6ckJ5cf6zME4cFYWJOuzMdGVCSe6p+bQJnFNvJv2sL173cZKkKjCQFD5aa1wQFud0+bwMwfp8Mumejm8olEaOC1NPejwTpSXdTr7rivsRajkyKTxqFRT5F2PIwFhyyHydScihBdwTmoFFhzUFckz0CjTWBDkoCRkoZthiKOE+7R9KEmfHwsxSC33zazogA9cNBvLgImXgi5JqhHwFYWlTBR1oTg6aJltX/SX1OHplaot62SMoCSW5nRiKNlIsTRQ3qBMETuyQZ6ES8keR+OCUnu8C8okcK+oJQI7Oz8Sijd4CE/2TyFhDuORgb4325Pn8YH+fP7YLdsMTPhYFeT+LVbXsmJdjaDI43PWvT1gpmXQgZqgq4gkXRgfSgYPR2oqFqIyefPH8j9UGTutYRSwp/vWVlsP8J84ZJ6JW15EER2T3usuAbrG2VTv9BcO5khiQEdfkPc5pmPV1rFGPHKHEaUWiixNt0FTpeVIgce0HC/5qIut0oSRJ0VUXXH0sXpVUfBXPmJToyD8TM+OEpICq8onO/mSI7o3ygd+CxR23CYq/w4LOYZJyoNoPqZwpquQw8VusqX+9UogoMPqH2/0TNG4c9lX+IGezfmKm6cZoho8yCCokln9CyTcy+fCuUzHHJ0W+HIL6qDGG0jj1278vxn9Kcw+xs9nvgJ/vhzhOjZsqKUn/F8hZNztg5nDH62GCmJmov+kdpk24akF8C77emnDKxbfoSkB4da0XfdrwoYQcJmjVpLcKk5WSDWTgyS361R9dxUuu8x1o1YbnAN5MnoroVFim6CmhI3cUOfeq2Tx+z4y3JG8F9a1wBci6s1PjagybBKeBcVwbkEhQemZShq55yKDbtpDDwf7B4Wj/x9HLH3gQ1vhQYxp9t8yPW4uGvU+5v8BXdxL6308+wU92Ywx0Gya2QqWZ9iSeVae1C0CrWHldIsggV5Lde2l84PPVaoqePrqqafjxdSTHsrrMYIFO8ZuSRCaV5+8S8hlWnh4Y3PN+ci/E4+Z0Zwf9vk7Gc4FV7ISWLgo2xM1lk/Ue8G+Be4pr3QmxhTJwyWuw7GD/MqqHLezjeO7M8haeNuaoKMiGjbPBVc03yPruOj55c/LhBJrmd3pi5dA=",sidebar_class_name:"delete api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Get a project",permalink:"/reference/get-project"},next:{title:"Update a project",permalink:"/reference/update-project"}},_={},S=[];function N(e){const s={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Delete a project"}),"\n",(0,i.jsx)(d(),{method:"delete",path:"/api/projects/{id}"}),"\n",(0,i.jsx)(s.p,{children:"Required permissions:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"pipeline.delete"}),": to delete project where the user is PM or Account"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"pipeline.delete_other"}),": to delete project where the user is not PM nor Account"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://support.wethod.com/pipeline/index/#projects-and-opportunities",children:"Here the dedicated support page"}),"."]}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"id",in:"path",description:"The ID of the project to delete",required:!0,schema:{type:"integer"}}})})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Project successfully deleted."})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(v.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Validation failed"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Error unique key",type:"string",example:"invalid_data"}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable message describing the error",type:"string",example:"You provided invalid data. Check 'failures' for details."}}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"failures"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"List of validation errors"})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Name of the field causing the error",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable description of the error",type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "key": "invalid_data",\n  "message": "You provided invalid data. Check \'failures\' for details.",\n  "failures": [\n    {\n      "field": "string",\n      "message": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(v.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Error unique key",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable message describing the error",type:"string"}})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "key": "string",\n  "message": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(v.default,{label:"403",value:"403",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Forbidden"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Error unique key",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable message describing the error",type:"string"}})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "key": "string",\n  "message": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(v.default,{label:"404",value:"404",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Not found"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Error unique key",type:"string",example:"not_found"}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable message describing the error",type:"string"}})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "key": "not_found",\n  "message": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function w(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}}}]);