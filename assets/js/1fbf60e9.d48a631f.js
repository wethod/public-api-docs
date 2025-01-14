"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[710],{58868:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>R,contentTitle:()=>q,default:()=>L,frontMatter:()=>y,metadata:()=>N,toc:()=>_});var s=i(74848),n=i(28453),r=i(91366),t=i.n(r),l=(i(6050),i(57742)),m=i.n(l),c=(i(67792),i(27362)),p=i.n(c),o=i(36683),d=i.n(o),u=i(81124),h=i.n(u),x=i(60674),g=i.n(x),v=i(23397),j=i.n(v),f=(i(26651),i(51107)),b=(i(77675),i(19365));const y={id:"get-client",title:"Get a client",description:"Required permissions:",sidebar_label:"Get a client",hide_title:!0,hide_table_of_contents:!0,api:"eJzNV01z2zYQ/SuY7SXxUJZkO27LUz12nXqmST2x0x5sjwYCVxJiEkAAULKq4X/vLEDq05HY9NKTKOIt8PYTjwvwfOwgfYDLXKLy8JRAhk5YabzUClL4hF9LaTFjBm0hnZNaufRRddjRkbDF8VTi7OgoZTzP9cwx+kvPzKLTpRXojh/Vo3r4DS0yP0GWYSYF95gxVxqjrWeGj/HpzcR749Jut357PEM/0dmx0EV3JBVXArtSZfjS/UEEop1cOv/2GBLQBi0nsjcZpDBGX3uSgOGWF+jRkoMLULxASEFmkIAk1wz3E0jA1h5C6m2JCTgxwYJDugA/N2ThvJVqDFWVLDf5K9DrXOrCcDVvNpwgz9DCdgjvJ8hERLK5LtmMK8+8ZlJ5tFx4NpP/lcifaCkzLYhc3N6waURvkCkd/isKTwR2RiuHjtZPej362S4eX1rlQuZpa3SU+ZhByp3QylOu0gVwY3KqDKlV94sj68Xa6SteDzGBwiJV0YBTokuTrf4IbY223OMghOgpAWOpRryMRGW25g6lYBwiVUgli7KAtJ8AvvDC5Ahpv9o4aScMCYy0LWgFiEHHywKh2iDU2maL9yt2S1pwLa3zdRzJlgur1bxob8QaiyoBLLjM95vWT7/Uv9SWZKm0jzH9tuWdLpBFXJXADIdO+gPONaNg67BcqmfMpGpn3KDDBJGq2Yw22ijRfXtdsKGVOGLrBlVCSMRXE7sy7Z+csg9cKnYX8vO3NAOhswOO909Oz94R3OvZAWr3eqbcVObRI2P1VCpxYPvbBhWKrVTezvcbfFaS2vXO8zp909frecuD8x9/+jmw4vMClR8IrTJ5ONq3Ec482iKcNra6pLDFEbvRs/v61WWyRazvrm6W4TYo9oMNiu3S5xkRcD5ePYMWPRQstrepvRtYHK82U2UxRNsy0r3QGzjmeYu58Tvh2EceJ44Mw7dFsG4CkF0ScGVH02t35F+hyHl0hOkRi1gWsMn+Sbhx5Env5KzT63d6/ZChiVaHm6dz9u6804TE85eBxRFaPNgY9/yFfVpCm8prX3FDrp4HXISeam815X5g+cYwPGDRNBR1SFurahl0PfyCgpBe+uB21ElX939AVRHurHe6m85rbYcyyzBMvrPe2S7io/ZspEuVkS6BIuiRKMSCBPMTSKHLjezGm8d1FzKrIAGHdtpIs9Lma7ObG7mm/4CkhkNRWunnAT1EbtFelLT1olpfviPBEK+kDVATAzoBknrtuim+ZUkEvUG4CAgOSTXSYYc6apBALZ+WVXre6cc5op0veBhztTp7j57x5p7euXmW6uf/L7Lr+Hl88V2TcxnKIWRtUef4AbiRJL9iliGBVGakvibaeVpeLIbc4WebVxW9/loi3T8PT9QJVvIhRfdhAZl09JxBOuK5wz1Be9NE7S37FsP6ZZToU56XdQafcR6/BKqnKmnU8nef3lbfv0oxUtn5nliSJa3/3az2i/3DfFafFRt8IuZCCDR+bW1HwlNrLgfC+1/voar+Ac7g7AI=",sidebar_class_name:"get api-method",custom_edit_url:null},q=void 0,N={id:"reference/get-client",title:"Get a client",description:"Required permissions:",source:"@site/docs/reference/get-client.api.mdx",sourceDirName:"reference",slug:"/reference/get-client",permalink:"/reference/get-client",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-client",title:"Get a client",description:"Required permissions:",sidebar_label:"Get a client",hide_title:!0,hide_table_of_contents:!0,api:"eJzNV01z2zYQ/SuY7SXxUJZkO27LUz12nXqmST2x0x5sjwYCVxJiEkAAULKq4X/vLEDq05HY9NKTKOIt8PYTjwvwfOwgfYDLXKLy8JRAhk5YabzUClL4hF9LaTFjBm0hnZNaufRRddjRkbDF8VTi7OgoZTzP9cwx+kvPzKLTpRXojh/Vo3r4DS0yP0GWYSYF95gxVxqjrWeGj/HpzcR749Jut357PEM/0dmx0EV3JBVXArtSZfjS/UEEop1cOv/2GBLQBi0nsjcZpDBGX3uSgOGWF+jRkoMLULxASEFmkIAk1wz3E0jA1h5C6m2JCTgxwYJDugA/N2ThvJVqDFWVLDf5K9DrXOrCcDVvNpwgz9DCdgjvJ8hERLK5LtmMK8+8ZlJ5tFx4NpP/lcifaCkzLYhc3N6waURvkCkd/isKTwR2RiuHjtZPej362S4eX1rlQuZpa3SU+ZhByp3QylOu0gVwY3KqDKlV94sj68Xa6SteDzGBwiJV0YBTokuTrf4IbY223OMghOgpAWOpRryMRGW25g6lYBwiVUgli7KAtJ8AvvDC5Ahpv9o4aScMCYy0LWgFiEHHywKh2iDU2maL9yt2S1pwLa3zdRzJlgur1bxob8QaiyoBLLjM95vWT7/Uv9SWZKm0jzH9tuWdLpBFXJXADIdO+gPONaNg67BcqmfMpGpn3KDDBJGq2Yw22ijRfXtdsKGVOGLrBlVCSMRXE7sy7Z+csg9cKnYX8vO3NAOhswOO909Oz94R3OvZAWr3eqbcVObRI2P1VCpxYPvbBhWKrVTezvcbfFaS2vXO8zp909frecuD8x9/+jmw4vMClR8IrTJ5ONq3Ec482iKcNra6pLDFEbvRs/v61WWyRazvrm6W4TYo9oMNiu3S5xkRcD5ePYMWPRQstrepvRtYHK82U2UxRNsy0r3QGzjmeYu58Tvh2EceJ44Mw7dFsG4CkF0ScGVH02t35F+hyHl0hOkRi1gWsMn+Sbhx5Env5KzT63d6/ZChiVaHm6dz9u6804TE85eBxRFaPNgY9/yFfVpCm8prX3FDrp4HXISeam815X5g+cYwPGDRNBR1SFurahl0PfyCgpBe+uB21ElX939AVRHurHe6m85rbYcyyzBMvrPe2S7io/ZspEuVkS6BIuiRKMSCBPMTSKHLjezGm8d1FzKrIAGHdtpIs9Lma7ObG7mm/4CkhkNRWunnAT1EbtFelLT1olpfviPBEK+kDVATAzoBknrtuim+ZUkEvUG4CAgOSTXSYYc6apBALZ+WVXre6cc5op0veBhztTp7j57x5p7euXmW6uf/L7Lr+Hl88V2TcxnKIWRtUef4AbiRJL9iliGBVGakvibaeVpeLIbc4WebVxW9/loi3T8PT9QJVvIhRfdhAZl09JxBOuK5wz1Be9NE7S37FsP6ZZToU56XdQafcR6/BKqnKmnU8nef3lbfv0oxUtn5nliSJa3/3az2i/3DfFafFRt8IuZCCDR+bW1HwlNrLgfC+1/voar+Ac7g7AI=",sidebar_class_name:"get api-method",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"List clients",permalink:"/reference/list-clients"},next:{title:"List contacts",permalink:"/reference/list-contacts"}},R={},_=[];function S(e){const a={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get a client"}),"\n",(0,s.jsx)(m(),{method:"get",path:"/api/clients/{id}"}),"\n",(0,s.jsx)(a.p,{children:"Required permissions:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"crm.view"}),": allows view all resources."]}),"\n"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.a,{href:"https://support.wethod.com/finance/index/#client-list",children:"Here the dedicated support page"}),"."]}),"\n",(0,s.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(a.p,{children:"Path Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:(0,s.jsx)(d(),{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,s.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(a.p,{children:"Header Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)(d(),{className:"paramsItem",param:{name:"Wethod-Company",in:"header",description:"The company you want to interact with",required:!0,schema:{type:"string"}}}),(0,s.jsx)(d(),{className:"paramsItem",param:{name:"Wethod-Version",in:"header",description:"The API version you want to use",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsxs)(t(),{label:void 0,id:void 0,children:[(0,s.jsxs)(b.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"Returns the requested client."})}),(0,s.jsx)("div",{children:(0,s.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,s.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,s.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(a.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)(g(),{collapsible:!1,name:"id",required:!0,schemaName:"integer",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"integer",minimum:1,example:1}}),(0,s.jsx)(g(),{collapsible:!1,name:"created_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(g(),{collapsible:!1,name:"updated_at",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(g(),{collapsible:!1,name:"corporate_name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"First client"}}),(0,s.jsx)(g(),{collapsible:!1,name:"acronym",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"First client acronym"}}),(0,s.jsx)(g(),{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"example@example.com"}}),(0,s.jsx)(g(),{collapsible:!1,name:"notes",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Some notes"}}),(0,s.jsx)(g(),{collapsible:!1,name:"website",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"https://example.com"}}),(0,s.jsx)(g(),{collapsible:!1,name:"linkedin",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"https://linkedin.com/in/example"}}),(0,s.jsx)(g(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"A brief description"}}),(0,s.jsx)(g(),{collapsible:!1,name:"street",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"123 Main St"}}),(0,s.jsx)(g(),{collapsible:!1,name:"zip_code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"12345"}}),(0,s.jsx)(g(),{collapsible:!1,name:"town",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Townsville"}}),(0,s.jsx)(g(),{collapsible:!1,name:"province",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Province"}}),(0,s.jsx)(g(),{collapsible:!1,name:"country",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"United States"}}),(0,s.jsx)(g(),{collapsible:!1,name:"vat",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"123456789"}}),(0,s.jsx)(g(),{collapsible:!1,name:"payment_condition",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Payment terms"}}),(0,s.jsx)(g(),{collapsible:!1,name:"group_company",required:!1,schemaName:"int",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"int",minimum:1,example:1}}),(0,s.jsx)(g(),{collapsible:!1,name:"sdi_code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"SDI12345"}}),(0,s.jsx)(g(),{collapsible:!1,name:"pec",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"pec@example.com"}}),(0,s.jsx)(g(),{collapsible:!1,name:"administration_email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"admin@example.com"}}),(0,s.jsx)(g(),{collapsible:!1,name:"company_registration_number",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"1234567890"}}),(0,s.jsx)(g(),{collapsible:!1,name:"legal_name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Legal Name"}}),(0,s.jsx)(g(),{collapsible:!1,name:"intent_code",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Intent Code"}}),(0,s.jsx)(g(),{collapsible:!1,name:"intent_date",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{description:"Declaration of intent date",type:"string",format:"date",example:"2024-01-01"}}),(0,s.jsx)(g(),{collapsible:!1,name:"phone",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"123-456-7890"}}),(0,s.jsx)(g(),{collapsible:!1,name:"tax_reference",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Tax Reference"}}),(0,s.jsx)(g(),{collapsible:!1,name:"group",required:!1,schemaName:"int",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"int",minimum:1,example:1}}),(0,s.jsx)(g(),{collapsible:!1,name:"bank_account",required:!1,schemaName:"int",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"int",minimum:1,example:1}}),(0,s.jsx)(g(),{collapsible:!1,name:"vat_rate",required:!1,schemaName:"int",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"int",minimum:1,example:1}}),(0,s.jsx)(g(),{collapsible:!1,name:"payment_term",required:!1,schemaName:"int",qualifierMessage:"**Possible values:** `>= 1`",schema:{type:"int",minimum:1,example:1}})]})]})}),(0,s.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,s.jsx)(h(),{responseExample:'{\n  "id": 1,\n  "created_at": "2025-01-14T14:37:28.870Z",\n  "updated_at": "2025-01-14T14:37:28.870Z",\n  "corporate_name": "First client",\n  "acronym": "First client acronym",\n  "email": "example@example.com",\n  "notes": "Some notes",\n  "website": "https://example.com",\n  "linkedin": "https://linkedin.com/in/example",\n  "description": "A brief description",\n  "street": "123 Main St",\n  "zip_code": "12345",\n  "town": "Townsville",\n  "province": "Province",\n  "country": "United States",\n  "vat": "123456789",\n  "payment_condition": "Payment terms",\n  "group_company": 1,\n  "sdi_code": "SDI12345",\n  "pec": "pec@example.com",\n  "administration_email": "admin@example.com",\n  "company_registration_number": "1234567890",\n  "legal_name": "Legal Name",\n  "intent_code": "Intent Code",\n  "intent_date": "2024-01-01",\n  "phone": "123-456-7890",\n  "tax_reference": "Tax Reference",\n  "group": 1,\n  "bank_account": 1,\n  "vat_rate": 1,\n  "payment_term": 1\n}',language:"json"})})]})})})})]}),(0,s.jsxs)(b.default,{label:"403",value:"403",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"Forbidden"})}),(0,s.jsx)("div",{})]}),(0,s.jsxs)(b.default,{label:"404",value:"404",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"Not found"})}),(0,s.jsx)("div",{})]})]})})})]})}function L(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(S,{...e})}):S(e)}}}]);