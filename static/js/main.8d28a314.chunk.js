(this["webpackJsonpfe-testing"]=this["webpackJsonpfe-testing"]||[]).push([[0],{46:function(e,t,a){e.exports=a(74)},51:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(18),r=a.n(i),c=(a(51),a(91)),s=a(92),l=a(89),p=a(4),d=a(88),m=Object(d.a)((function(e){var t;return t={},Object(p.a)(t,e.breakpoints.between("xs","sm"),{container:{fontFamily:["Roboto","Helvetica","Arial","sans-serif"]},inner:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"0 auto"}}),Object(p.a)(t,e.breakpoints.between("sm","md"),{}),Object(p.a)(t,e.breakpoints.between("md","lg"),{}),Object(p.a)(t,e.breakpoints.between("lg","xl"),{container:{height:"100vh",width:"100vw",fontFamily:["Roboto","Helvetica","Arial","sans-serif"]},inner:{maxWidth:"300px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"0 auto",height:"100vh",width:"100vw"}}),t})),b=a(2),f=a(41),u=a.n(f)()({border:{primary:"#E1E3EA",secondary:"#E1E3EA"},links:{primary:"#0072BC",secondary:"#5AB4EF"},palette:{text:{primary:"#000000",secondary:"#808080"},primary:{main:"#49A078"},secondary:{main:"#216869"},background:{paper:"#FFFFFF",default:"#FBFBFD"}}}),y=Object(d.a)((function(e){var t;return t={},Object(p.a)(t,e.breakpoints.between("xs","sm"),{personContainer:{display:"inline-flex",width:"100%",justifyContent:"center"},person:{width:"100%",display:"inline-flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},personCardContainer:{width:"300px"},personDetailsContainer:{width:"95vw",padding:"".concat(e.spacing(1),"px"),border:"2px solid ".concat(e.border.primary),borderLeft:"none",display:"inline-flex"}}),Object(p.a)(t,e.breakpoints.between("sm","md"),{}),Object(p.a)(t,e.breakpoints.between("md","lg"),{}),Object(p.a)(t,e.breakpoints.between("lg","xl"),{personContainer:{display:"inline-flex",width:"100%",justifyContent:"center"},person:{width:" 850px",display:"inline-flex",justifyContent:"center"},personCardContainer:{width:"300px"},personDetailsContainer:{width:"518px",padding:"".concat(e.spacing(1),"px"),border:"2px solid ".concat(e.border.primary),borderLeft:"none"}}),t})),g=Object(d.a)((function(e){var t;return t={},Object(p.a)(t,e.breakpoints.between("xs","sm"),{person:{display:"flex",flexDirection:"column",backgroundColor:e.palette.background.default,border:"2px solid ".concat(e.border.primary),justifyContent:"center",alignItems:"center",padding:"".concat(e.spacing(1.3),"px 0"),marginTop:"4px"},personCardAvatar:{height:"158px",width:"158px",borderRadius:"100%",border:"4px solid ".concat(e.border.primary)},link:{color:e.links.primary,transition:" .4s ease","&:hover":{color:e.links.secondary,cursor:"pointer"}}}),Object(p.a)(t,e.breakpoints.between("sm","md"),{}),Object(p.a)(t,e.breakpoints.between("md","lg"),{}),Object(p.a)(t,e.breakpoints.between("lg","xl"),{person:{display:"flex",flexDirection:"column",backgroundColor:e.palette.background.default,border:"2px solid ".concat(e.border.primary),justifyContent:"center",alignItems:"center",padding:"".concat(e.spacing(2),"px 0")},personCardAvatar:{height:"158px",width:"158px",borderRadius:"100%",border:"4px solid ".concat(e.border.primary)},link:{color:e.links.primary,transition:" .4s ease","&:hover":{color:e.links.secondary,cursor:"pointer"}}}),t})),x=a(90),h=function(e){var t=e.accountData,a=g(),n="".concat(t.firstName," ").concat(t.lastName);return Object(b.a)(l.a,{className:a.person},Object(b.a)("img",{className:a.personCardAvatar,src:t.accountImage.url,alt:n}),Object(b.a)(x.a,{className:a.link,variant:"h6"},n),Object(b.a)(x.a,{variant:"body2"},"".concat(t.locationCity,", ").concat(t.locationArea)))},j=a(93),w=a(32),O=a.n(w),C=Object(d.a)((function(e){var t;return t={},Object(p.a)(t,e.breakpoints.between("xs","sm"),{personCredit:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center","&:not(:last-of-type)":{borderBottom:"1px solid ".concat(e.border.primary)}},creditRight:{display:"inline - flex",flexDirection:"column",alignItems:"flex-end",height:"100%",justifyContent:"flex-end"},creditLeft:{},creditTop:{margin:"".concat(e.spacing(1),"px 0")},topLeft:{fontWeight:"800",fontSize:"4.5vw"},topRight:{fontWeight:"normal",textAlign:"right",margin:"8px 0",fontSize:"4.5vw"},creditBottomLeft:{fontWeight:"400",fontSize:"4vw",color:e.palette.text.secondary},creditBottomRight:{textAlign:"right",fontSize:"4vw"}}),Object(p.a)(t,e.breakpoints.between("sm","md"),{}),Object(p.a)(t,e.breakpoints.between("md","lg"),{}),Object(p.a)(t,e.breakpoints.between("lg","xl"),{personCredit:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center","&:not(:last-of-type)":{borderBottom:"1px solid ".concat(e.border.primary)}},creditRight:{display:"inline - flex",flexDirection:"column",alignItems:"flex-end",height:"100%",justifyContent:"flex-end"},creditLeft:{},creditTop:{margin:"".concat(e.spacing(1),"px 0")},topLeft:{fontWeight:"800"},topRight:{fontWeight:"normal",textAlign:"right",margin:"8px 0"},creditBottomLeft:{fontWeight:"400",color:e.palette.text.secondary},creditBottomRight:{textAlign:"right"}}),t})),v=function(e){var t=e.creditData,a=C();return Object(b.a)(l.a,{className:O()(a.personCredit)},Object(b.a)(l.a,{className:a.creditLeft},Object(b.a)(x.a,{className:O()(a.creditTop,a.topLeft),variant:"body1"},t.position),Object(b.a)(x.a,{className:a.creditBottomLeft,variant:"body1"},t.productionType)),Object(b.a)(l.a,{className:a.creditRight},Object(b.a)(x.a,{className:a.topRight,variant:"body1"},t.productionTitle),Object(b.a)(x.a,{className:a.creditBottomRight,variant:"body1"},t.year)))},k=Object(d.a)((function(e){var t;return t={},Object(p.a)(t,e.breakpoints.between("xs","sm"),{personDetails:{display:"flex",flexDirection:"column",width:"100%",height:"100%",flex:"1"},contact:{color:e.links.primary,marginTop:"15px",border:"1px solid ".concat(e.links.primary)}}),Object(p.a)(t,e.breakpoints.between("sm","md"),{}),Object(p.a)(t,e.breakpoints.between("md","lg"),{}),Object(p.a)(t,e.breakpoints.between("lg","xl"),{personDetails:{display:"flex",flexDirection:"column",width:"100%",height:"100%",flex:"1"},contact:{color:e.links.primary}}),t})),D=function(e){var t=e.accountData,a=e.maxCredits,n=void 0===a?3:a,o=k();return Object(b.a)(l.a,{className:o.personDetails},t.credits.slice(0,n).map((function(e){return Object(b.a)(v,{key:e.id,creditData:e})})),Object(b.a)(j.a,{className:o.contact,color:"primary"},"Contact this person"))},N=function(e){var t=e.accountData,a=y();return Object(b.a)(l.a,{className:a.personContainer},Object(b.a)(l.a,{className:a.person},Object(b.a)(l.a,{className:a.personCardContainer},Object(b.a)(h,{accountData:t})),Object(b.a)(l.a,{className:a.personDetailsContainer},Object(b.a)(D,{accountData:t}))))},T={id:"1",firstName:"Alex",lastName:"Williamson",locationCity:"Los Angeles",locationArea:"CA",locationCountry:"USA",accountImage:{id:"11",url:"https://placekitten.com/200/200"},credits:[{id:"11",productionType:"Reality/Doc (TV)",company:"YouTube",position:"Camera Operator",productionTitle:"Hometown Movies Vol I",year:2016},{id:"12",productionType:"Reality/Doc (TV)",company:"CineMax",position:"Camera Operator",productionTitle:"Hometown Movies Vol II",year:2016},{id:"13",productionType:"Reality/Doc (TV)",company:"Vimeo",position:"Camera Operator",productionTitle:"Hometown Movies Vol III",year:2017},{id:"14",productionType:"Reality/Doc (TV)",company:"Netflix",position:"Camera Operator",productionTitle:"Hometown Movies Vol IV",year:2017},{id:"15",productionType:"Reality/Doc (TV)",company:"Netflix",position:"Camera Operator",productionTitle:"Hometown Movies Vol V",year:2018}]},A=function(){var e=m();return Object(b.a)(c.a,{theme:u},Object(b.a)(s.a,null),Object(b.a)(l.a,{className:e.container},Object(b.a)(l.a,{className:e.inner},Object(b.a)(N,{accountData:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.8d28a314.chunk.js.map