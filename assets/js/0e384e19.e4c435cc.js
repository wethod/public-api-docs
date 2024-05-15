"use strict";(self.webpackChunkpublic_api_docs=self.webpackChunkpublic_api_docs||[]).push([[976],{81512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(74848),i=t(28453);const a={slug:"/",sidebar_position:1,title:"Basic concepts"},s=void 0,o={id:"intro",title:"Basic concepts",description:"We are still in beta",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"Basic concepts"},sidebar:"defaultSidebar",next:{title:"List people allocation resources.",permalink:"/API/get-app-publicapi-publicapipeopleallocation-list"}},d={},l=[{value:"We are still in beta",id:"we-are-still-in-beta",level:2},{value:"About requests",id:"about-requests",level:2},{value:"HTTP method",id:"http-method",level:3},{value:"Path",id:"path",level:3},{value:"Headers",id:"headers",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Selecting your company",id:"selecting-your-company",level:3},{value:"API version",id:"api-version",level:3},{value:"Parameters",id:"parameters",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.h2,{id:"we-are-still-in-beta",children:"We are still in beta"}),(0,r.jsx)(n.p,{children:"Please be advised that the public API provided herein is currently in the beta phase of development.\nAs such, functionalities, endpoints, and parameters are subject to change without prior notice.\nWhile we strive to maintain compatibility and stability, users are encouraged to anticipate potential\nalterations and plan accordingly."}),(0,r.jsx)(n.p,{children:"By accessing and utilizing the Public API, you acknowledge and accept the inherent risks associated with beta\nsoftware, including but not limited to unexpected behavior, feature adjustments, and temporary service\ninterruptions. We recommend regularly reviewing documentation and updates to stay informed about any modifications."}),(0,r.jsx)(n.p,{children:"Your feedback and insights are invaluable in refining the API for its official release.\nThank you for your understanding and cooperation during this beta testing phase."})]}),"\n",(0,r.jsx)(n.h1,{id:"about",children:"About"}),"\n",(0,r.jsxs)(n.p,{children:["You can use wethod API to build scripts and applications that automate processes requiring ",(0,r.jsx)(n.a,{href:"https://www.wethod.com/",children:"wethod"})," data."]}),"\n",(0,r.jsx)(n.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsx)(n.h2,{id:"about-requests",children:"About requests"}),"\n",(0,r.jsx)(n.p,{children:"Every request to the REST API includes an HTTP method and a path. Depending on the REST API endpoint, you might\nalso need to specify request headers, authentication information, query parameters, or body parameters."}),"\n",(0,r.jsx)(n.p,{children:"This documentation describes the HTTP method, path, and parameters for every endpoint."}),"\n",(0,r.jsx)(n.h3,{id:"http-method",children:"HTTP method"}),"\n",(0,r.jsx)(n.p,{children:"The HTTP method of an endpoint defines the type of action it performs on a given resource. Some common HTTP\nmethods are GET, POST, DELETE, and PATCH. The REST API reference documentation provides the HTTP method for\nevery endpoint."}),"\n",(0,r.jsx)(n.p,{children:"Where possible, we strive to use an appropriate HTTP method for each action:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GET: Used for retrieving resources"}),"\n",(0,r.jsx)(n.li,{children:"POST: Used for creating resources"}),"\n",(0,r.jsx)(n.li,{children:"PATCH: Used for updating properties of resources"}),"\n",(0,r.jsx)(n.li,{children:"PUT: Used for replacing resources or collections of resources"}),"\n",(0,r.jsx)(n.li,{children:"DELETE: Used for deleting resources"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"path",children:"Path"}),"\n",(0,r.jsx)(n.p,{children:"Each endpoint has a path. This reference documentation gives the path for every endpoint."}),"\n",(0,r.jsxs)(n.p,{children:["The curly brackets ",(0,r.jsx)(n.code,{children:"{}"})," in a path denote path parameters that you need to specify. Path parameters modify the\nendpoint path and are required in your request."]}),"\n",(0,r.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,r.jsx)(n.p,{children:"Headers provide extra information about the request and the desired response."}),"\n",(0,r.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsx)(n.p,{children:"All endpoints require authentication."}),"\n",(0,r.jsxs)(n.p,{children:["To authenticate your request, you will need to provide an authentication token with the required permissions,\nyou can create a personal API token from your ",(0,r.jsx)(n.a,{href:"https://app.wethod.com/#settings/account",children:"Account"})," section.\nTokens created in this section are assigned to your user and have the same permissions as you have."]}),"\n",(0,r.jsxs)(n.p,{children:["After creating a token, you can authenticate your request by sending the token in the ",(0,r.jsx)(n.code,{children:"Authorization"})," header of\nyour request. For example, in the following request, replace ",(0,r.jsx)(n.code,{children:"YOUR-TOKEN"})," with a reference to your token:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl --request GET \\\n  --url "https://api.wethod.com/api/people-allocations" \\\n  --header "Authorization: Bearer <YOUR-TOKEN>"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"selecting-your-company",children:"Selecting your company"}),"\n",(0,r.jsxs)(n.p,{children:["All endpoints require you to specify the company you want to interact with. You can do this by including the\n",(0,r.jsx)(n.code,{children:"Wethod-Company"})," header in your request. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:' curl --request GET \\\n   --url "https://api.wethod.com/api/people-allocations" \\\n   --header "Wethod-Company: {COMPANY-ENDPOINT}"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The endpoint of your company can be found in the URL you use to access wethod. For example, if you access wethod\nat ",(0,r.jsx)(n.code,{children:"https://acme.wethod.com"}),", then ",(0,r.jsx)(n.code,{children:"acme"})," is the endpoint of your company."]}),"\n",(0,r.jsx)(n.h3,{id:"api-version",children:"API version"}),"\n",(0,r.jsxs)(n.p,{children:["All endpoints require you to specify the version of the API you want to interact with. You can do this by\nincluding the ",(0,r.jsx)(n.code,{children:"Wethod-Version"})," header in your request. For example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'   curl --request GET \\\n     --url "https://api.wethod.com/api/people-allocations" \\\n     --header "Wethod-Version: {API-VERSION}"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Available API versions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"2024-06-15"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"Many API methods require or allow you to send additional information in parameters in your request. There are\na few different types of parameters: Path parameters, body parameters, and query parameters."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Path parameters"}),"\nPath parameters modify the endpoint path. These parameters are required in your request."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Body parameters"}),"\nBody parameters allow you to pass additional data to the API. These parameters can be optional or required,\ndepending on the endpoint. The documentation for each API endpoint will describe the body parameters that it supports."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Query parameters"}),"\nQuery parameters allow you to control what data is returned for a request. These parameters are usually optional.\nThe documentation for each API endpoint will describe any query parameters that it supports."]}),"\n",(0,r.jsx)(n.h1,{id:"rate-limits",children:"Rate limits"}),"\n",(0,r.jsx)(n.p,{children:"We limit the number of API requests that you can make within a specific amount of time. This limit helps\nprevent abuse and denial-of-service attacks, and ensures that the API remains available for all users."}),"\n",(0,r.jsx)(n.p,{children:"All requests count towards your personal rate limit of 3,000 requests per hour."}),"\n",(0,r.jsx)(n.h1,{id:"pagination",children:"Pagination"}),"\n",(0,r.jsx)(n.p,{children:"When a response from the REST API would include many results, we will paginate the results and return a subset of the results.\nThis makes the response easier to handle for servers and for people."}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"offset"})," and ",(0,r.jsx)(n.code,{children:"limit"})," query parameters to require additional results or to change the amount of\nresults returned."]}),"\n",(0,r.jsx)(n.h1,{id:"full-example",children:"Full example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'   curl --request GET \\\n     --url "https://api.wethod.com/api/people-allocations" \\\n     --header "Authorization: Bearer valid-token-here" \\\n     --header "Wethod-Company: acme" \\\n     --header "Wethod-Version: 2024-06-15"\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);