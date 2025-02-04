"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[275],{94661:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>w,default:()=>k,frontMatter:()=>v,metadata:()=>N,toc:()=>C});var i=a(74848),r=a(28453),n=a(91366),t=a.n(n),l=(a(6050),a(57742)),d=a.n(l),o=(a(67792),a(27362)),c=a.n(o),p=a(36683),m=a.n(p),h=a(81124),j=a.n(h),u=a(60674),x=a.n(u),g=a(23397),b=a.n(g),y=(a(26651),a(51107)),f=(a(77675),a(19365));const v={id:"delete-project",title:"Delete a project",description:"Required permissions:",sidebar_label:"Delete a project",hide_title:!0,hide_table_of_contents:!0,api:"eJztVlFv2zYQ/ivE7aUNZMsNsj3ozWhSNMBWBF27PaRGQYtni51EMuQxiSvovw9HSa4dG43RAdvLnmyRn47ffXf8Ti2QXAcobuHG2y9YEiwyUBhKrx1pa6CA93gXtUclHPpGh6CtCcUnMxFnZ047rLXBqcIaCc/OCkFW9A/C9QHFQ4UeBVUoYkAvdBA3vwnrxbwsbTR0NNJnSxX6U+MZSxzT7Ab9ZG7fjjiFSpeSUIkQnbOehJNrXLyoiFwo8nxYnT4gVVZNS9vkI59cG4WP+U/D4WEijZrYBI9Gk8bwcgoZWIdesl7XCgroCY+CZuCklw0Seha6BSMbhAK0ggw0K+wkVfBU9g8ViutLYVcphTH5rRyQgR8KAwX5iBmEssJGQtECbVw6wRCu0UPXZdtT/0w5Tl7bxkmzGRlUKBX6oxzKHik2NooHaRIFDuwl10In5s8yCeS1WR8j8gd67qgTiMxvrsV9j94jE8NJYmwpLBgcnDUBA++fz2b8s3/gvK5tmSoqQixLDGEV63oziK+m0GVwMXt1+OJHIyNV1uuvyPUtrSE0xDjpXK37mPmXwOB2h6Xz3EPcUPz0F24OQ195b72IRt9FFIzInuaWQYMhyDUevvw2NtJMPEollzWKASd60FKbdWoz5CMO43bbFbscepo01fgk3/eDrNB1XdLn4pDHO0tiZaP518XJAB9l4xJpY+lzT+K/kOydpTd8+J5ciQjfiK1/JOOgCgrIpdP56EB5q1UHGQT096OjRF/z3RnsTDq9Y2XADR+wjF7TJqGXKD36eeTYbbe7/Tsr3ou8BxpT4RMgG/beWN9I2hU4FYxxPSCJoM3KpghD8pDBcImhgPPZ+cVk9svk1c9cCGcDNTKVfvCIy9755Wh/T32h/dZC/4+pE8bUUEbCR8pdLbVh2VPztEOv3YJ0mjtvCAQZFFrxR0FlA/F+2y5lwI++7jpevovoua0WGdxLr/mmpCZTOvB/BcVK1gG/U7gXY+Veiudn3tEMhsV+nt3LOg6NloyC52y36LJxtPwjcqcMw6MUeyoHw3dLlgfjD7P6/mR8ns+3GbzHp8fMyxId7ewdWDU7yNa7Lq9+vfpwBV33N+V3m6o=",sidebar_class_name:"delete api-method",custom_edit_url:null},w=void 0,N={id:"reference/delete-project",title:"Delete a project",description:"Required permissions:",source:"@site/docs/reference/delete-project.api.mdx",sourceDirName:"reference",slug:"/reference/delete-project",permalink:"/reference/delete-project",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-project",title:"Delete a project",description:"Required permissions:",sidebar_label:"Delete a project",hide_title:!0,hide_table_of_contents:!0,api:"eJztVlFv2zYQ/ivE7aUNZMsNsj3ozWhSNMBWBF27PaRGQYtni51EMuQxiSvovw9HSa4dG43RAdvLnmyRn47ffXf8Ti2QXAcobuHG2y9YEiwyUBhKrx1pa6CA93gXtUclHPpGh6CtCcUnMxFnZ047rLXBqcIaCc/OCkFW9A/C9QHFQ4UeBVUoYkAvdBA3vwnrxbwsbTR0NNJnSxX6U+MZSxzT7Ab9ZG7fjjiFSpeSUIkQnbOehJNrXLyoiFwo8nxYnT4gVVZNS9vkI59cG4WP+U/D4WEijZrYBI9Gk8bwcgoZWIdesl7XCgroCY+CZuCklw0Seha6BSMbhAK0ggw0K+wkVfBU9g8ViutLYVcphTH5rRyQgR8KAwX5iBmEssJGQtECbVw6wRCu0UPXZdtT/0w5Tl7bxkmzGRlUKBX6oxzKHik2NooHaRIFDuwl10In5s8yCeS1WR8j8gd67qgTiMxvrsV9j94jE8NJYmwpLBgcnDUBA++fz2b8s3/gvK5tmSoqQixLDGEV63oziK+m0GVwMXt1+OJHIyNV1uuvyPUtrSE0xDjpXK37mPmXwOB2h6Xz3EPcUPz0F24OQ195b72IRt9FFIzInuaWQYMhyDUevvw2NtJMPEollzWKASd60FKbdWoz5CMO43bbFbscepo01fgk3/eDrNB1XdLn4pDHO0tiZaP518XJAB9l4xJpY+lzT+K/kOydpTd8+J5ciQjfiK1/JOOgCgrIpdP56EB5q1UHGQT096OjRF/z3RnsTDq9Y2XADR+wjF7TJqGXKD36eeTYbbe7/Tsr3ou8BxpT4RMgG/beWN9I2hU4FYxxPSCJoM3KpghD8pDBcImhgPPZ+cVk9svk1c9cCGcDNTKVfvCIy9755Wh/T32h/dZC/4+pE8bUUEbCR8pdLbVh2VPztEOv3YJ0mjtvCAQZFFrxR0FlA/F+2y5lwI++7jpevovoua0WGdxLr/mmpCZTOvB/BcVK1gG/U7gXY+Veiudn3tEMhsV+nt3LOg6NloyC52y36LJxtPwjcqcMw6MUeyoHw3dLlgfjD7P6/mR8ns+3GbzHp8fMyxId7ewdWDU7yNa7Lq9+vfpwBV33N+V3m6o=",sidebar_class_name:"delete api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Get a project",permalink:"/reference/get-project"},next:{title:"Update a project",permalink:"/reference/update-project"}},_={},C=[];function U(e){const s={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Delete a project"}),"\n",(0,i.jsx)(d(),{method:"delete",path:"/api/projects/{id}"}),"\n",(0,i.jsx)(s.p,{children:"Required permissions:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"pipeline.delete"}),": to delete project where the user is PM or Account"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"pipeline.delete_other"}),": to delete project where the user is not PM nor Account"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://support.wethod.com/pipeline/index/#projects-and-opportunities",children:"Here the dedicated support page"}),"."]}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"id",in:"path",description:"The ID of the project to delete",required:!0,schema:{type:"integer"}}})})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(m(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,i.jsx)(m(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Allocation successfully deleted."})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(f.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Error unique key",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable message describing the error",type:"string"}})]})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "key": "string",\n  "message": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"404",value:"404",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Not found"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Error unique key",type:"string",example:"not_found"}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Human-readable message describing the error",type:"string"}})]})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "key": "not_found",\n  "message": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function k(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(U,{...e})}):U(e)}}}]);