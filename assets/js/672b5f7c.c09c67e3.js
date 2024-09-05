"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[29],{72702:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>w,contentTitle:()=>q,default:()=>E,frontMatter:()=>y,metadata:()=>_,toc:()=>H});var i=s(74848),t=s(28453),r=s(91366),l=s.n(r),n=(s(6050),s(57742)),d=s.n(n),c=(s(67792),s(27362)),o=s.n(c),m=s(36683),p=s.n(m),h=s(81124),u=s.n(h),x=s(60674),b=s.n(x),f=s(23397),g=s.n(f),j=(s(26651),s(51107)),v=(s(77675),s(19365));const y={id:"get-budget-area",title:"Get a budget area",description:"Required permissions:",sidebar_label:"Get a budget area",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk2P2zYQ/SvEnJKF/LXx9qCb0zTpHloEbdocHMOgxbHFVCIZcmSvYei/F0PKX+utu9lee7LFmSEf5z0+cgckVwHyKbxt1AoJZhkoDIXXjrQ1kMNv+K3RHpVw6GsdgrYm5F9MT9zcLGJJf61xc3OTC1lVdhMEfwqPwTa+wCDsUjhvv2JBQWxK9CioRNEE9EKH+P/jL8L6+G9SFLYx1L+Yfm6pRP/SRYyl/ULmYqUvZvrzvkCh0oUkVCI0zllPwskVzl6VRC7kg0E32t8glVb1C1sPEsiBNgofBq/7kIF16CU3715BDiuk1NmJRwkZOOlljYSem74DI2uEHLSCDDS320kqIQPfdR1y8g1mEIoSawn5DmjruCKQ12YFbZsdJvkcUfV+tLWTZrufsESp0MNjWj+VKIqUKba2ERtpSJAV2hB6WZDY6P8K5E/0rJZnAJl8vBfrlH0Gpgn4XRBmnBycNQEDx2+HQ/55LGhqvEnS46kxMOGJRyE9SiaxsIbQEFdL5ypWhbZm8DXwFLsTCEdw08Ri4ZEVNJcEGTROHT9idzLQYY5GLirk7LiDDMiSrOb4QOiNrOaFDXQYPftwXhfHAiW3ATJI2Oda8el1ngVIOnVAq5M+MberSEGtja6bGvJRBvgga1ch5KP2DP1FfzNYWl9zBHhXPdI1Qnu2yWfXJKVcMHjWnWN4YW2F0nA8jTxR+FQLj3nLykYODpt9079tzzp8JfdueJKcGLiSPRoO+3ftGUVXcYzG7SmFF3q9f8f2xmrtNEpWbEpdlIJKHaJixQIra1ZhL6hnUH1oJdgF+yaXauIYHP3qHVloW84dD99cIntv/UIrhZGY8XB8mfGrJbG0jVHsD1BHX0imGK2QSshhIJ3ubLTHmwmDnVYtZBDQr/c+2fiKLaTzYen0iQcDn/uAReM1bWP2AqVHP2l4/l17Gv6dD246GmdJ+2bwCnyiYuz9XroHMcdzHxUZE+KutFnaOEPXPsig8zLI4XZ4O+4Nf+iN7rhHzgaqZXSQzio/sOecms9jf9wdrej/q/h7r+KOVMIHGrhK6ijUKKVdp74pSKcPFpr0BxnkyUvLaAxT2O0WMuAfvmpbHv7WoGehzTJYS6/ZraLslA6dcy1lFfAKk6/2VL4W/wSzG0w3+VpWTaetv3CbHgztrM32l+qLV3/uM+BJiAnKxbPjAJafBC9Gdf1N8O94jq+PMzwpZ1IU6OgkdnHJs2kc/OrDT5+gbf8GHubYWw==",sidebar_class_name:"get api-method",custom_edit_url:null},q=void 0,_={id:"reference/get-budget-area",title:"Get a budget area",description:"Required permissions:",source:"@site/docs/reference/get-budget-area.api.mdx",sourceDirName:"reference",slug:"/reference/get-budget-area",permalink:"/reference/get-budget-area",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-budget-area",title:"Get a budget area",description:"Required permissions:",sidebar_label:"Get a budget area",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk2P2zYQ/SvEnJKF/LXx9qCb0zTpHloEbdocHMOgxbHFVCIZcmSvYei/F0PKX+utu9lee7LFmSEf5z0+cgckVwHyKbxt1AoJZhkoDIXXjrQ1kMNv+K3RHpVw6GsdgrYm5F9MT9zcLGJJf61xc3OTC1lVdhMEfwqPwTa+wCDsUjhvv2JBQWxK9CioRNEE9EKH+P/jL8L6+G9SFLYx1L+Yfm6pRP/SRYyl/ULmYqUvZvrzvkCh0oUkVCI0zllPwskVzl6VRC7kg0E32t8glVb1C1sPEsiBNgofBq/7kIF16CU3715BDiuk1NmJRwkZOOlljYSem74DI2uEHLSCDDS320kqIQPfdR1y8g1mEIoSawn5DmjruCKQ12YFbZsdJvkcUfV+tLWTZrufsESp0MNjWj+VKIqUKba2ERtpSJAV2hB6WZDY6P8K5E/0rJZnAJl8vBfrlH0Gpgn4XRBmnBycNQEDx2+HQ/55LGhqvEnS46kxMOGJRyE9SiaxsIbQEFdL5ypWhbZm8DXwFLsTCEdw08Ri4ZEVNJcEGTROHT9idzLQYY5GLirk7LiDDMiSrOb4QOiNrOaFDXQYPftwXhfHAiW3ATJI2Oda8el1ngVIOnVAq5M+MberSEGtja6bGvJRBvgga1ch5KP2DP1FfzNYWl9zBHhXPdI1Qnu2yWfXJKVcMHjWnWN4YW2F0nA8jTxR+FQLj3nLykYODpt9079tzzp8JfdueJKcGLiSPRoO+3ftGUVXcYzG7SmFF3q9f8f2xmrtNEpWbEpdlIJKHaJixQIra1ZhL6hnUH1oJdgF+yaXauIYHP3qHVloW84dD99cIntv/UIrhZGY8XB8mfGrJbG0jVHsD1BHX0imGK2QSshhIJ3ubLTHmwmDnVYtZBDQr/c+2fiKLaTzYen0iQcDn/uAReM1bWP2AqVHP2l4/l17Gv6dD246GmdJ+2bwCnyiYuz9XroHMcdzHxUZE+KutFnaOEPXPsig8zLI4XZ4O+4Nf+iN7rhHzgaqZXSQzio/sOecms9jf9wdrej/q/h7r+KOVMIHGrhK6ijUKKVdp74pSKcPFpr0BxnkyUvLaAxT2O0WMuAfvmpbHv7WoGehzTJYS6/ZraLslA6dcy1lFfAKk6/2VL4W/wSzG0w3+VpWTaetv3CbHgztrM32l+qLV3/uM+BJiAnKxbPjAJafBC9Gdf1N8O94jq+PMzwpZ1IU6OgkdnHJs2kc/OrDT5+gbf8GHubYWw==",sidebar_class_name:"get api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"List budget areas",permalink:"/reference/list-budget-areas"},next:{title:"List people allocations",permalink:"/reference/list-people-allocations"}},w={},H=[];function L(e){const a={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Get a budget area"}),"\n",(0,i.jsx)(d(),{method:"get",path:"/api/budget-areas/{id}"}),"\n",(0,i.jsx)(a.p,{children:"Required permissions:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"budget.view"}),": allows view resources of projects where the user is the PM or the Account."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"budget.view_other"}),": allows view resources of projects where the user is not the PM nor the Account."]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://support.wethod.com/budget/index/",children:"Here the dedicated support page"}),"."]}),"\n",(0,i.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(l(),{label:void 0,id:void 0,children:[(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Returns the requested budget area."})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(b(),{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:1}}),(0,i.jsx)(b(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(b(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(b(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(b(),{collapsible:!1,name:"is_enabled",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(b(),{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(b(),{collapsible:!1,name:"total_external_cost",required:!0,schemaName:"float",qualifierMessage:void 0,schema:{type:"float",example:3.2}}),(0,i.jsx)(b(),{collapsible:!1,name:"total_cost",required:!0,schemaName:"float",qualifierMessage:void 0,schema:{type:"float",example:50.2}}),(0,i.jsx)(b(),{collapsible:!1,name:"total_price",required:!0,schemaName:"float",qualifierMessage:void 0,schema:{type:"float",example:100.5}}),(0,i.jsx)(b(),{collapsible:!1,name:"total_days",required:!0,schemaName:"float",qualifierMessage:void 0,schema:{type:"float",example:3.14}}),(0,i.jsx)(b(),{collapsible:!1,name:"budget_id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{description:"ID of the budget to which this area belongs",type:"integer",minimum:1,example:1}})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "id": 1,\n  "created_at": "2024-09-05T08:23:05.839Z",\n  "updated_at": "2024-09-05T08:23:05.839Z",\n  "name": "string",\n  "is_enabled": true,\n  "type": "string",\n  "total_external_cost": 3.2,\n  "total_cost": 50.2,\n  "total_price": 100.5,\n  "total_days": 3.14,\n  "budget_id": 1\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(v.default,{label:"403",value:"403",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Forbidden"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(v.default,{label:"404",value:"404",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Not found"})}),(0,i.jsx)("div",{})]})]})})})]})}function E(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(L,{...e})}):L(e)}}}]);