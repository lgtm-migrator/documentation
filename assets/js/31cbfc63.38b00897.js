"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5361],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,b=u["".concat(i,".").concat(h)]||u[h]||p[h]||n;return a?r.createElement(b,s(s({ref:t},m),{},{components:a})):r.createElement(b,s({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9358:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),s=["components"],l={id:"react-table-module",title:"react-table-module-tasks",sidebar_label:"react-table-repository"},i=void 0,c={unversionedId:"React-Design-System/react-table-module",id:"React-Design-System/react-table-module",title:"react-table-module-tasks",description:"Link//github.com/LLazyEmail/react-email-table",source:"@site/docs/React-Design-System/React-section.md",sourceDirName:"React-Design-System",slug:"/React-Design-System/react-table-module",permalink:"/documentation/docs/React-Design-System/react-table-module",editUrl:"https://github.com/LLazyEmail/documentation/tree/main/docs/React-Design-System/React-section.md",tags:[],version:"current",frontMatter:{id:"react-table-module",title:"react-table-module-tasks",sidebar_label:"react-table-repository"},sidebar:"tutorialSidebar",previous:{title:"React Design System",permalink:"/documentation/docs/React-Design-System/"},next:{title:"Table repository",permalink:"/documentation/docs/React-Design-System/Table repository"}},m={},p=[{value:"We can create a set of basic jest tests for our tables #331",id:"we-can-create-a-set-of-basic-jest-tests-for-our-tables-331",level:2},{value:"Styles discussion #329",id:"styles-discussion-329",level:2},{value:"Table tags as examples #327",id:"table-tags-as-examples-327",level:2},{value:"Tr rows #326",id:"tr-rows-326",level:2},{value:"Explore TS examples #174",id:"explore-ts-examples-174",level:2},{value:"Steal info from https://github.com/revivek/oy #135",id:"steal-info-from-httpsgithubcomrevivekoy-135",level:2},{value:"Try to run storybook and see if it work #85",id:"try-to-run-storybook-and-see-if-it-work-85",level:2},{value:"Different grids #22",id:"different-grids-22",level:2},{value:"Should we have a Box component? #20",id:"should-we-have-a-box-component-20",level:2},{value:"Compare with #19",id:"compare-with-19",level:2}],u={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Link: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-table"},"https://github.com/LLazyEmail/react-email-table")),(0,n.kt)("h2",{id:"we-can-create-a-set-of-basic-jest-tests-for-our-tables-331"},"We can create a set of basic jest tests for our tables ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/react-email-table/issues/331"},"#331")),(0,n.kt)("p",null,"the goal is simple - I wanna know that our tables cover basic needs and didn't crash."),(0,n.kt)("p",null,"I think it's doable with jest. We would need to configure it once; later, it might help us a lot.\nfor example when we decide to change something - we wouldn't need to be worried if we crash something - we just run our tests and see the results."),(0,n.kt)("p",null,"Later we can install our module into few other remix-* repositories and try to use our simple components"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"styles-discussion-329"},"Styles discussion ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/react-email-table/issues/329"},"#329")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://speakerdeck.com/vjeux/react-css-in-js"},"https://speakerdeck.com/vjeux/react-css-in-js")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://blog.bitsrc.io/how-we-build-our-design-system-15713a1f1833"},"https://blog.bitsrc.io/how-we-build-our-design-system-15713a1f1833")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gist.githubusercontent.com/jonisar/2c3afd10a1783ecb53350b992c7324bd/raw/6527343d57dcd77df6544a70c9f280dff7cf995a/gistfile1.txt"},"https://gist.githubusercontent.com/jonisar/2c3afd10a1783ecb53350b992c7324bd/raw/6527343d57dcd77df6544a70c9f280dff7cf995a/gistfile1.txt")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"table-tags-as-examples-327"},"Table tags as examples ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/react-email-table/issues/327"},"#327")),(0,n.kt)("p",null,"link: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-letter-components/blob/main/email-templates/--empty/taskrabbit/Sections/Footer/Footer.jsx"},"https://github.com/LLazyEmail/react-email-letter-components/blob/main/email-templates/--empty/taskrabbit/Sections/Footer/Footer.jsx")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<table border="0" cellpadding="0" cellspacing="0" width="666" class="responsive-table">')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<table width="140" height="27" border="0" cellspacing="0" cellpadding="0" align="center" class="responsive-table">')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<table border="0" cellpadding="0" cellspacing="0" width="666" class="wrapper">')),(0,n.kt)("p",null,"link: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-letter-components/blob/main/email-templates/--empty/ecommerce/src/Sections/FooterRowColumn/FooterRowColumn.jsx"},"https://github.com/LLazyEmail/react-email-letter-components/blob/main/email-templates/--empty/ecommerce/src/Sections/FooterRowColumn/FooterRowColumn.jsx")),(0,n.kt)("p",null,"link: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-letter-components/blob/main/email-templates/--empty/ecommerce/src/Sections/HeroUnit/HeroLayout.jsx"},"https://github.com/LLazyEmail/react-email-letter-components/blob/main/email-templates/--empty/ecommerce/src/Sections/HeroUnit/HeroLayout.jsx")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'<table border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"tr-rows-326"},"Tr rows ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/react-email-table/issues/326"},"#326")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/LLazyEmail/react-email-letter-components/blob/main/email-templates/--empty/taskrabbit/Sections/Footer/Footer.jsx"},"https://github.com/LLazyEmail/react-email-letter-components/blob/main/email-templates/--empty/taskrabbit/Sections/Footer/Footer.jsx")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"            </td>\n          </tr>\n        </tbody>\n      </table>\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"explore-ts-examples-174"},"Explore TS examples ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/react-email-table/issues/174"},"#174")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://dev.to/nitsancohen770/use-typescript-generics-to-enhance-your-react-components-and-make-them-reusable-431f"},"https://dev.to/nitsancohen770/use-typescript-generics-to-enhance-your-react-components-and-make-them-reusable-431f")),(0,n.kt)("h2",{id:"steal-info-from-httpsgithubcomrevivekoy-135"},"Steal info from ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/revivek/oy"},"https://github.com/revivek/oy")," ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/react-email-table/issues/135"},"#135")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"try-to-run-storybook-and-see-if-it-work-85"},"Try to run storybook and see if it work ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/react-email-table/issues/85"},"#85")),(0,n.kt)("p",null,"boilerplate that I'm using has a lot of cool things for react / frontend developers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"storybook"),(0,n.kt)("li",{parentName:"ul"},"github actions"),(0,n.kt)("li",{parentName:"ul"},"other automation things\nwe can try if it works and include it into our development cycle")),(0,n.kt)("p",null,"video: s3://arthur-courses-storage/zoom_0.mp4"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/1469198/180625210-f9cc8abf-7fb8-4596-8904-22458886f800.mp4"},(0,n.kt)("img",{parentName:"a",src:"https://i.imgur.com/vKb2F1B.png",alt:"Watch the video"}))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"different-grids-22"},"Different grids ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/react-email-table/issues/22"},"#22")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/g13nn/Email-Framework/blob/master/grids/responsive/responsive-grid2.html"},"https://github.com/g13nn/Email-Framework/blob/master/grids/responsive/responsive-grid2.html")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"should-we-have-a-box-component-20"},"Should we have a Box component? ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/react-email-table/issues/20"},"#20")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/chromakode/react-html-email/blob/e6f3b5122a19823fac31870649311c52e46c75f8/src/components/Box.jsx"},"https://github.com/chromakode/react-html-email/blob/e6f3b5122a19823fac31870649311c52e46c75f8/src/components/Box.jsx")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"compare-with-19"},"Compare with ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/LLazyEmail/react-email-table/issues/19"},"#19")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/reactstrap/reactstrap/blob/master/src/Table.js"},"https://github.com/reactstrap/reactstrap/blob/master/src/Table.js")))}h.isMDXComponent=!0}}]);