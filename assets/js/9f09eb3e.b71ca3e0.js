"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[526],{29661:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>N,contentTitle:()=>y,default:()=>W,frontMatter:()=>k,metadata:()=>w,toc:()=>q});var t=s(74848),i=s(28453),n=s(91366),r=s.n(n),l=(s(6050),s(57742)),c=s.n(l),m=(s(67792),s(27362)),d=s.n(m),o=s(36683),p=s.n(o),h=s(81124),u=s.n(h),x=s(60674),g=s.n(x),f=s(23397),b=s.n(f),j=(s(26651),s(51107)),v=(s(77675),s(19365));const k={id:"get-contact",title:"Get a contact",description:"Required permissions:",sidebar_label:"Get a contact",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVt9v2zYQ/leI20sb0JbtJu2mpwXp2gUYhmHttgfHKGjpbLOVSJY82TEE/e/DUVL8K03S7GVP+sG743ffHT9eDaSWAdIpXFlDKiOYScgxZF470tZACn/i10p7zIVDX+oQtDUhvTEDcXaW+XK41rg5O0uFKgq7CYI/hcdgK59hGN6YGyOmv6JHQSsUOeY6U4S5CJVz1pNwaomzFysiF9Ik6f4ON0grmw8zWyYLbZTJMNEmx9vkh6yFGQbjl0OQYB16xUCvc0hhidSnIcEpr0ok9JxeDUaVCCnoHCRozsspWoEE36UHKfkKJYRshaWCtAbaOvYI5LVZQtPIuyD/RHiDK1s6ZbZ9wBWqHD0c8/dxhSJrLcXWVmKjDAmyQhtCrzISG/1fgfyNnsvyBCCXf1yLdWt9AKYK+F0QZmwcnDUBA69PRiN+HHcOVd6EWHkOjYEr31WQq8evaIg9lXMFt4a2Jvkc2L3e234HbNpWMPPIbfRJcaUrl+8+skKjoU/RCkulC5AtWxJC5ePbTILz3DmkW/Q638uR67KM9JXa6LIqIR1LwFtVugIhHTcHu59wI2FhfckrwKgGpEuE5gDkk312uZxwe/1W2EVktjUC+R34W17ugVGq29/QLGkF6fhitOfVQfk5evK5ZHhtEz4cZXQQ5SpGEdGx2RXkOTF630aCt8VjMd5c3BMi+nEelto+OA6w8/hgSxTRTqi5rWif+UZCoc0XzLV5BMXkkNNe9TabzbCPEDVPm6S3ao5O8UMgL8Xca1yIPYejJmkkEBboVtbg/S3/TdrHk1fnF6/f/PgTC1DvaOefMYotaWqZbQ/3W7LQNGx4Pnp12rzvrJ/rPEcD0eL81OJ3S2JhK5PH3cooc63AR2VnfJAop5P+PkhqnTd8xtGve8mvfLHHsnJ6714BlrCAWeU1baP1HJVHf1lx7LrZX/7AOtR2yIFRzwLvALJbe9ef5LsCRRlju9YgZqTNwsYIHW8goZNlSGEympwPRq8H4wvmx9lApYql71T/PZJQvY4ey3y9U9X/99XdkUd4S4krlI7NEEtWdxWegnK6uybYESSkOmf5XtlAvF7XcxXwL180Df/+WqHnYs4krJXXas7cTmvIdeD3HNKFKgI+wNiLnrKX4lsQu5/txb9WRdXV7wtu2/mimTWyv4OfvftTp4Z7IbZQTqaUO7A8QTwb1cMjxON4dsPKAZ7W5jLL0NHe2slcwAfzTg/e//IRmuZfWlCshw==",sidebar_class_name:"get api-method",custom_edit_url:null},y=void 0,w={id:"reference/get-contact",title:"Get a contact",description:"Required permissions:",source:"@site/docs/reference/get-contact.api.mdx",sourceDirName:"reference",slug:"/reference/get-contact",permalink:"/reference/get-contact",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-contact",title:"Get a contact",description:"Required permissions:",sidebar_label:"Get a contact",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVt9v2zYQ/leI20sb0JbtJu2mpwXp2gUYhmHttgfHKGjpbLOVSJY82TEE/e/DUVL8K03S7GVP+sG743ffHT9eDaSWAdIpXFlDKiOYScgxZF470tZACn/i10p7zIVDX+oQtDUhvTEDcXaW+XK41rg5O0uFKgq7CYI/hcdgK59hGN6YGyOmv6JHQSsUOeY6U4S5CJVz1pNwaomzFysiF9Ik6f4ON0grmw8zWyYLbZTJMNEmx9vkh6yFGQbjl0OQYB16xUCvc0hhidSnIcEpr0ok9JxeDUaVCCnoHCRozsspWoEE36UHKfkKJYRshaWCtAbaOvYI5LVZQtPIuyD/RHiDK1s6ZbZ9wBWqHD0c8/dxhSJrLcXWVmKjDAmyQhtCrzISG/1fgfyNnsvyBCCXf1yLdWt9AKYK+F0QZmwcnDUBA69PRiN+HHcOVd6EWHkOjYEr31WQq8evaIg9lXMFt4a2Jvkc2L3e234HbNpWMPPIbfRJcaUrl+8+skKjoU/RCkulC5AtWxJC5ePbTILz3DmkW/Q638uR67KM9JXa6LIqIR1LwFtVugIhHTcHu59wI2FhfckrwKgGpEuE5gDkk312uZxwe/1W2EVktjUC+R34W17ugVGq29/QLGkF6fhitOfVQfk5evK5ZHhtEz4cZXQQ5SpGEdGx2RXkOTF630aCt8VjMd5c3BMi+nEelto+OA6w8/hgSxTRTqi5rWif+UZCoc0XzLV5BMXkkNNe9TabzbCPEDVPm6S3ao5O8UMgL8Xca1yIPYejJmkkEBboVtbg/S3/TdrHk1fnF6/f/PgTC1DvaOefMYotaWqZbQ/3W7LQNGx4Pnp12rzvrJ/rPEcD0eL81OJ3S2JhK5PH3cooc63AR2VnfJAop5P+PkhqnTd8xtGve8mvfLHHsnJ6714BlrCAWeU1baP1HJVHf1lx7LrZX/7AOtR2yIFRzwLvALJbe9ef5LsCRRlju9YgZqTNwsYIHW8goZNlSGEympwPRq8H4wvmx9lApYql71T/PZJQvY4ey3y9U9X/99XdkUd4S4krlI7NEEtWdxWegnK6uybYESSkOmf5XtlAvF7XcxXwL180Df/+WqHnYs4krJXXas7cTmvIdeD3HNKFKgI+wNiLnrKX4lsQu5/txb9WRdXV7wtu2/mimTWyv4OfvftTp4Z7IbZQTqaUO7A8QTwb1cMjxON4dsPKAZ7W5jLL0NHe2slcwAfzTg/e//IRmuZfWlCshw==",sidebar_class_name:"get api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"List contacts",permalink:"/reference/list-contacts"},next:{title:"Create a contact",permalink:"/reference/create-contact"}},N={},q=[];function L(e){const a={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Get a contact"}),"\n",(0,t.jsx)(c(),{method:"get",path:"/api/contacts/{id}"}),"\n",(0,t.jsx)(a.p,{children:"Required permissions:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"crm.view"}),": allows view resources."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"https://support.wethod.com/finance/index/#contacts-1",children:"Here the dedicated support page"}),"."]}),"\n",(0,t.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(p(),{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Header Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,t.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(r(),{label:void 0,id:void 0,children:[(0,t.jsxs)(v.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Returns the requested contact."})}),(0,t.jsx)("div",{children:(0,t.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(g(),{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:1}}),(0,t.jsx)(g(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,t.jsx)(g(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,t.jsx)(g(),{collapsible:!1,name:"client_id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{description:"ID of the client",type:"integer",minimum:1,example:1}}),(0,t.jsx)(g(),{collapsible:!1,name:"email",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 150 characters`",schema:{type:"string",maxLength:150,example:"client@email.com"}}),(0,t.jsx)(g(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 100 characters`",schema:{type:"string",maxLength:100,example:"Client name"}}),(0,t.jsx)(g(),{collapsible:!1,name:"surname",required:!0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 100 characters`",schema:{type:"string",maxLength:100,example:"Client surname"}}),(0,t.jsx)(g(),{collapsible:!1,name:"role",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 75 characters`",schema:{type:"string",maxLength:75,example:"Client role"}}),(0,t.jsx)(g(),{collapsible:!1,name:"notes",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Some notes about the client"}}),(0,t.jsx)(g(),{collapsible:!1,name:"linkedin",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `<= 250 characters`",schema:{type:"string",maxLength:250,example:"https://www.linkedin.com/in/example"}}),(0,t.jsx)(g(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"A brief description of the client"}}),(0,t.jsx)(g(),{collapsible:!1,name:"telephone",required:!1,schemaName:"integer",qualifierMessage:"**Possible values:** `<= 100 characters`",schema:{type:"integer",maxLength:100,example:"123456789"}})]})]})}),(0,t.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(u(),{responseExample:'{\n  "id": 1,\n  "created_at": "2025-02-13T08:48:35.010Z",\n  "updated_at": "2025-02-13T08:48:35.010Z",\n  "client_id": 1,\n  "email": "client@email.com",\n  "name": "Client name",\n  "surname": "Client surname",\n  "role": "Client role",\n  "notes": "Some notes about the client",\n  "linkedin": "https://www.linkedin.com/in/example",\n  "description": "A brief description of the client",\n  "telephone": "123456789"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(v.default,{label:"403",value:"403",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Forbidden"})}),(0,t.jsx)("div",{})]}),(0,t.jsxs)(v.default,{label:"404",value:"404",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Not found"})}),(0,t.jsx)("div",{})]})]})})})]})}function W(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(L,{...e})}):L(e)}}}]);