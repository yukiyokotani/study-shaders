_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,r,a){a("74v/"),e.exports=a("nOHt")},"5CWz":function(e,r,a){"use strict";var t=a("wx14"),p=a("q1tI"),n=(a("17x9"),a("H2TA")),x={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},o=function(e){return Object(t.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};r.a=Object(n.a)((function(e){return{"@global":{html:x,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(t.a)({margin:0},o(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var r=e.children,a=void 0===r?null:r;return e.classes,p.createElement(p.Fragment,null,a)}))},"74v/":function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a("cha2")}])},EQQ8:function(e,r,a){"use strict";r.a={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17"}},"TTf+":function(e,r,a){"use strict";var t=a("yKYv");a.d(r,"a",(function(){return t}))},cha2:function(e,r,a){"use strict";a.r(r),a.d(r,"SizeContext",(function(){return H}));var t=a("nKUr"),p=a("rePB"),n=a("q1tI"),x=a.n(n),o=a("/MKj"),b=a("lopY"),f=a("aXM8"),i=a("cNwE");function c(){return Object(f.a)()||i.a}var g=a("wx14"),d=(a("17x9"),a("OKji")),u=a("hfi/");var l=function(e){var r=e.children,a=e.theme,t=Object(f.a)(),p=x.a.useMemo((function(){var e=null===t?a:function(e,r){return"function"===typeof r?r(e):Object(g.a)({},e,r)}(t,a);return null!=e&&(e[u.a]=null!==t),e}),[a,t]);return x.a.createElement(d.a.Provider,{value:p},r)},s=a("5CWz"),h=a("ANjH"),v=a("i7Pf"),m=a("OmTm"),y=Object(h.c)({theme:m.a.reducer}),O=Object(v.a)({reducer:y}),w=a("TTf+"),j=a("TrhM");function S(e){return String(parseFloat(e)).length===String(e).length}function A(e){return parseFloat(e)}function k(e){return function(r,a){var t=String(r).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(t===a)return r;var p=A(r);if("px"!==t)if("em"===t)p=A(r)*A(e);else if("rem"===t)return p=A(r)*A(e),r;var n=p;if("px"!==a)if("em"===a)n=p/A(e);else{if("rem"!==a)return r;n=p/A(e)}return parseFloat(n.toFixed(5))+a}}function P(e){var r=e.size,a=e.grid,t=r-r%a,p=t+a;return r-t<p-r?t:p}function M(e){var r=e.lineHeight;return e.pixels/(r*e.htmlFontSize)}function E(e){var r=e.cssProperty,a=e.min,t=e.max,n=e.unit,x=void 0===n?"rem":n,o=e.breakpoints,b=void 0===o?[600,960,1280]:o,f=e.transform,i=void 0===f?null:f,c=Object(p.a)({},r,"".concat(a).concat(x)),g=(t-a)/b[b.length-1];return b.forEach((function(e){var t=a+g*e;null!==i&&(t=i(t)),c["@media (min-width:".concat(e,"px)")]=Object(p.a)({},r,"".concat(Math.round(1e4*t)/1e4).concat(x))})),c}var z=a("viY9"),F=a("dl/7"),C=a("EQQ8");function W(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function _(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?W(Object(a),!0).forEach((function(r){Object(p.a)(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}var D={direction:"ltr",typography:{h1:{fontWeight:800,fontSize:35,lineHeight:1.3,letterSpacing:"-0.24px"},h2:{fontWeight:700,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:600,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:600,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:800},fontFamily:"-apple-system, blinkMacSystemFont, Helvetica Neue, Segoe UI, YuGothicM, YuGothic, Meiryo, sans-serif"},breakpoints:{values:{xs:0,sm:660,md:960,lg:1280,xl:1920}},overrides:{MuiLinearProgress:{root:{borderRadius:3,overflow:"hidden"}},MuiListItemIcon:{root:{minWidth:32}},MuiChip:{root:{backgroundColor:"rgba(0,0,0,0.075)"}},MuiPaper:{rounded:{borderRadius:10}}}},T=[{mode:"light",palette:{type:"light",action:{active:w.a.grey[600]},background:{default:"#f5f5f5",paper:"#f5f05f5"},primary:{main:"#2196f3",light:"#6ec6ff",dark:"#0069c0"},secondary:{main:"#e91e63",light:"#ff6090",dark:"#b0003a"},error:F.a,success:C.a,text:{primary:w.a.grey[900],secondary:w.a.grey[600]}},shadows:["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"],overrides:{MuiPaper:_({},{elevation0:{boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.3), -0px -0px 0px rgba(255, 255, 255, 0.7)"},elevation1:{boxShadow:"3px 3px 6px rgba(0, 0, 0, 0.2), -3px -3px 6px rgba(255, 255, 255, 0.7)"},elevation2:{boxShadow:"6px 6px 12px rgba(0, 0, 0, 0.3), -6px -6px 12px rgba(255, 255, 255, 0.7)"},elevation3:{boxShadow:"9px 9px 18px rgba(0, 0, 0, 0.3), -9px -9px 18px rgba(255, 255, 255, 0.7)"},elevation4:{boxShadow:"12px 12px 24px rgba(0, 0, 0, 0.3), -12px -12px 24px rgba(255, 255, 255, 0.7)"},elevation5:{boxShadow:"15px 15px 30px rgba(0, 0, 0, 0.3), -15px -15px 30px rgba(255, 255, 255, 0.7)"},elevation6:{boxShadow:"18px 18px 60px rgba(0, 0, 0, 0.3), -18px -18px 53px rgba(255, 255, 255, 0.7)"},elevation7:{boxShadow:"21px 21px 70px rgba(0, 0, 0, 0.3), -21px -21px 70px rgba(255, 255, 255, 0.7)"},elevation8:{boxShadow:"24px 24px 80px rgba(0, 0, 0, 0.3), -24px -24px 80px rgba(255, 255, 255, 0.7)"},elevation9:{boxShadow:"27px 27px 90px rgba(0, 0, 0, 0.3), -27px -27px 90px rgba(255, 255, 255, 0.7)"},elevation10:{boxShadow:"30px 30px 100px rgba(0, 0, 0, 0.3), -30px -30px 100px rgba(255, 255, 255, 0.7)"}})}},{mode:"dark",palette:{type:"dark",action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.04)",selected:"rgba(255, 255, 255, 0.08)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)",focus:"rgba(255, 255, 255, 0.12)"},background:{default:"#1d1c21",paper:"#1d1c21"},primary:{main:"#0288d1",light:"#5eb8ff",dark:"#005b9f"},secondary:{main:"#c2185b",light:"#fa5788",dark:"#8c0032"},error:F.a,success:C.a,text:{primary:w.a.grey[300],secondary:w.a.grey[500]}},shadows:["none","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 2px 2px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 8px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 9px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 10px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 11px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 13px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 14px 24px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 16px 28px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 18px 30px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 20px 32px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 22px 34px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 24px 36px -8px rgba(0,0,0,0.50)"],overrides:{MuiPaper:_({},{elevation0:{boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.7), -0px -0px 0px rgba(255, 255, 255, 0.3)"},elevation1:{boxShadow:"3px 3px 6px rgba(0, 0, 0, 0.7), -3px -3px 6px rgba(255, 255, 255, 0.3)"},elevation2:{boxShadow:"6px 6px 12px rgba(0, 0, 0, 0.7), -6px -6px 12px rgba(255, 255, 255, 0.3)"},elevation3:{boxShadow:"9px 9px 18px rgba(0, 0, 0, 0.7), -9px -9px 18px rgba(255, 255, 255, 0.3)"},elevation4:{boxShadow:"12px 12px 24px rgba(0, 0, 0, 0.7), -12px -12px 24px rgba(255, 255, 255, 0.3)"},elevation5:{boxShadow:"15px 15px 30px rgba(0, 0, 0, 0.7), -15px -15px 30px rgba(255, 255, 255, 0.3)"},elevation6:{boxShadow:"18px 18px 60px rgba(0, 0, 0, 0.7), -18px -18px 53px rgba(255, 255, 255, 0.3)"},elevation7:{boxShadow:"21px 21px 70px rgba(0, 0, 0, 0.7), -21px -21px 70px rgba(255, 255, 255, 0.3)"},elevation8:{boxShadow:"24px 24px 80px rgba(0, 0, 0, 0.7), -24px -24px 80px rgba(255, 255, 255, 0.3)"},elevation9:{boxShadow:"27px 27px 90px rgba(0, 0, 0, 0.7), -27px -27px 90px rgba(255, 255, 255, 0.3)"},elevation10:{boxShadow:"30px 30px 100px rgba(0, 0, 0, 0.7), -30px -30px 100px rgba(255, 255, 255, 0.3)"}})}}],Y=function(e){var r=T.find((function(r){return r.mode===e}));return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.breakpoints,t=void 0===a?["sm","md","lg"]:a,p=r.disableAlign,n=void 0!==p&&p,x=r.factor,o=void 0===x?2:x,b=r.variants,f=void 0===b?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:b,i=Object(g.a)({},e);i.typography=Object(g.a)({},i.typography);var c=i.typography,d=k(c.htmlFontSize),u=t.map((function(e){return i.breakpoints.values[e]}));return f.forEach((function(e){var r=c[e],a=parseFloat(d(r.fontSize,"rem"));if(!(a<=1)){var t=a,p=1+(t-1)/o,x=r.lineHeight;if(!S(x)&&!n)throw new Error(Object(j.a)(6));S(x)||(x=parseFloat(d(x,"rem"))/parseFloat(a));var b=null;n||(b=function(e){return P({size:e,grid:M({pixels:4,lineHeight:x,htmlFontSize:c.htmlFontSize})})}),c[e]=Object(g.a)({},r,E({cssProperty:"fontSize",min:p,max:t,unit:"rem",breakpoints:u,transform:b}))}})),i}(Object(z.a)(_(_({},D),r)))};a("wAvY");function N(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function X(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?N(Object(a),!0).forEach((function(r){Object(p.a)(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}var H=x.a.createContext({isMobile:!1,isDesktop:!1}),Q=function(e){var r=e.Component,a=e.pageProps,p=Object(b.a)(c().breakpoints.down("sm")),n=Object(b.a)(c().breakpoints.up("lg")),x=Object(o.c)((function(e){return e.theme.isDarkTheme}))?"dark":"light";return Object(t.jsx)(l,{theme:Y(x),children:Object(t.jsxs)(H.Provider,{value:{isMobile:p,isDesktop:n},children:[Object(t.jsx)(s.a,{}),Object(t.jsx)(r,X({},a))]})})};r.default=function(e){return Object(n.useEffect)((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement&&e.parentElement.removeChild(e)}),[]),Object(t.jsx)(o.a,{store:O,children:Object(t.jsx)(Q,X({},e))})}},lopY:function(e,r,a){"use strict";a.d(r,"a",(function(){return o}));var t=a("wx14"),p=a("q1tI"),n=a("aXM8"),x=a("A+CX");function o(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(n.a)(),o=Object(x.a)({theme:a,name:"MuiUseMediaQuery",props:{}});var b="function"===typeof e?e(a):e;b=b.replace(/^@media( ?)/m,"");var f="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,i=Object(t.a)({},o,r),c=i.defaultMatches,g=void 0!==c&&c,d=i.matchMedia,u=void 0===d?f?window.matchMedia:null:d,l=i.noSsr,s=void 0!==l&&l,h=i.ssrMatchMedia,v=void 0===h?null:h,m=p.useState((function(){return s&&f?u(b).matches:v?v(b).matches:g})),y=m[0],O=m[1];return p.useEffect((function(){var e=!0;if(f){var r=u(b),a=function(){e&&O(r.matches)};return a(),r.addListener(a),function(){e=!1,r.removeListener(a)}}}),[b,u,f]),y}},wAvY:function(e,r,a){},yKYv:function(e,r,a){"use strict";a.r(r),a.d(r,"common",(function(){return t.a})),a.d(r,"red",(function(){return p.a})),a.d(r,"pink",(function(){return n.a})),a.d(r,"purple",(function(){return x})),a.d(r,"deepPurple",(function(){return o})),a.d(r,"indigo",(function(){return b.a})),a.d(r,"blue",(function(){return f.a})),a.d(r,"lightBlue",(function(){return i})),a.d(r,"cyan",(function(){return c})),a.d(r,"teal",(function(){return g})),a.d(r,"green",(function(){return d.a})),a.d(r,"lightGreen",(function(){return u.a})),a.d(r,"lime",(function(){return l})),a.d(r,"yellow",(function(){return s})),a.d(r,"amber",(function(){return h})),a.d(r,"orange",(function(){return v.a})),a.d(r,"deepOrange",(function(){return m})),a.d(r,"brown",(function(){return y})),a.d(r,"grey",(function(){return O.a})),a.d(r,"blueGrey",(function(){return w}));var t=a("XVSz"),p=a("dl/7"),n=a("nXt3"),x={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},o={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea"},b=a("rwtN"),f=a("edxh"),i={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},c={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"},g={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5"},d=a("6yBS"),u=a("EQQ8"),l={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00"},s={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"},h={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"},v=a("Yb7a"),m={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"},y={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037"},O=a("LXXt"),w={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"}}},[[0,0,1,2,3]]]);