(this["webpackJsonpshort-links-vkapps"]=this["webpackJsonpshort-links-vkapps"]||[]).push([[0],{120:function(e,t,n){e.exports=n(245)},244:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);n(121),n(148),n(150),n(151),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(162),n(163),n(164),n(165),n(166),n(167),n(168),n(169),n(170),n(171),n(173),n(174),n(175),n(176),n(177),n(178),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190);var a=n(0),r=n.n(a),l=n(56),c=n.n(l),i=n(19),o=n.n(i),s=n(60),u=n(105),m=n(119),p=n(38),d=n(58),f=n.n(d),h=n(75),E=n.n(h),g=n(77),y=n.n(g),b=n(44),k=n.n(b),w=n(42),v=n.n(w),O=n(59),_=n.n(O),j=n(37),P=n.n(j),x=n(114),S=n.n(x),A=n(107),C=n.n(A),I=n(113),L=n.n(I),M=n(108),z=n.n(M),K=n(109),D=n.n(K),R=n(110),V=n.n(R),W=n(111),B=n.n(W),T=n(112),J=n.n(T),N=n(43),U=n.n(N),F=n(106),G=n.n(F),q=n(57),H=n.n(q);function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=function(e){try{return new URL(e),!0}catch(t){return!1}},Z=function(e){var t=e.id,n=e.navigator,l=Object(a.useState)(null),c=Object(p.a)(l,2),i=c[0],s=c[1],u=Object(a.useState)([]),d=Object(p.a)(u,2),h=d[0],g=d[1],b=Object(a.useState)(!1),w=Object(p.a)(b,2),O=w[0],j=w[1],x=Object(a.useState)(!1),A=Object(p.a)(x,2),I=A[0],M=A[1],K=Object(a.useState)(""),R=Object(p.a)(K,2),W=R[0],T=R[1],N=Object(a.useState)(!1),F=Object(p.a)(N,2),q=F[0],Q=F[1],Z=Object(a.useState)(null),$=Object(p.a)(Z,2),ee=$[0],te=$[1];Object(a.useEffect)((function(){if(!1===window.is_app_user)n.goPage("welcome");else if(window.access_token)s(window.access_token),ne(window.access_token);else{(function e(){return new Promise((function(t){o.a.sendPromise("VKWebAppGetAuthToken",{app_id:7172940,scope:""}).then((function(e){return t(e.access_token)})).catch((function(){return e()}))}))})().then((function(e){s(e),ne(e)}))}}),[]);var ne=function(e){j(!1),o.a.sendPromise("VKWebAppCallAPIMethod",{method:"utils.getLastShortenedLinks",params:{count:"50",v:"5.102",access_token:e}}).then((function(e){return g(e.response.items)})).finally((function(){return j(!0)}))},ae=function(e){o.a.sendPromise("VKWebAppCallAPIMethod",{method:"utils.deleteFromLastShortened",params:{key:e,v:"5.102",access_token:i}}).then((function(){return g(h.filter((function(t){return t.key!==e})))})).catch((function(e){return console.error(JSON.stringify(e))}))};return r.a.createElement(f.a,{id:t},r.a.createElement(E.a,null,"\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438"),r.a.createElement(C.a,{onRefresh:function(){return ne(i)},isFetching:!O},r.a.createElement(y.a,{title:"\u0421\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443"},r.a.createElement(z.a,null,r.a.createElement(D.a,null,ee&&r.a.createElement(V.a,{state:"error",title:"\u041e\u0448\u0438\u0431\u043a\u0430",children:ee}),r.a.createElement(B.a,{placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0441\u044b\u043b\u043a\u0430",value:W,onChange:function(e){return W.length<255?T(e.currentTarget.value):null}}),r.a.createElement(J.a,{style:{marginTop:10},value:q,onChange:function(){return Q(!q)}},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0432\u0438\u0434\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043d\u0435")),r.a.createElement(P.a,{size:"xl",onClick:function(){!function(e,t){if(!I){if(te(null),0===e.length)return te("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443");if(!Y(e)){if(!Y("https://"+e))return te("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u0442\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430");e="https://"+e}M(!0),n.showLoader(),o.a.sendPromise("VKWebAppCallAPIMethod",{method:"utils.getShortLink",params:{url:e,private:t?"1":"0",v:"5.102",access_token:i}}).then((function(n){-1===h.findIndex((function(e){return e.key===n.response.key}))?(g([X({},n.response,{timestamp:Math.floor(Date.now()/1e3),views:0})].concat(Object(m.a)(h))),console.log("New link: "+JSON.stringify({userInput:{link:e,onlyMy:t},apiResponse:n.response})),T("")):te("\u0421\u0441\u044b\u043b\u043a\u0430 \u0443\u0436\u0435 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0430")})).catch((function(){te("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443")})).finally((function(){n.hideLoader(),M(!1)}))}}(W,q)},style:{cursor:"pointer"}},"\u0421\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c"))),r.a.createElement(y.a,{title:"\u041c\u043e\u0438 \u0441\u0441\u044b\u043b\u043a\u0438"},O?h.length>0?r.a.createElement(_.a,null,h.map((function(e){return r.a.createElement(v.a,{expandable:!0,key:e.key,before:r.a.createElement(k.a,{type:"app",style:{background:"var(--accent)"},size:40},r.a.createElement(U.a,{fill:"white"})),children:r.a.createElement("span",{style:{display:"flex",alignItems:"center"}},r.a.createElement("span",{style:{marginRight:3}},e.short_url),e.access_key?r.a.createElement(H.a,{fill:"var(--text_secondary)"}):null),indicator:r.a.createElement("span",{style:{display:"flex",alignItems:"center"}},r.a.createElement(G.a,{fill:"var(--text_secondary)"}),r.a.createElement("span",{style:{marginLeft:3}},(t=e.views,t<1e3?t:t<1e6?Math.floor(t/1e3*10)/10+"K":Math.floor(t/1e6*10)/10+"M"))),description:e.url.slice(0,28)+(e.url.length>28?"...":""),onClick:function(){return n.showModal("link-info",{link:e,deleteLink:ae})}});var t}))):r.a.createElement(L.a,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0441\u044b\u043b\u043e\u043a \u043f\u0443\u0441\u0442",children:"\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u044f\u0432\u043b\u044f\u0442\u0441\u044f \u0432 \u044d\u0442\u043e\u0439 \u0441\u0435\u043a\u0446\u0438\u0438"}):r.a.createElement("div",{style:{paddingBottom:25}},r.a.createElement(S.a,null)))))},$=function(e){var t=document.createElement("a");t.href=e,t.target="_blank",t.dispatchEvent(new window.MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))},ee=n(118),te=n.n(ee),ne=n(45),ae=n.n(ne),re=n(115),le=n.n(re),ce=n(116),ie=n.n(ce),oe=n(117),se=n.n(oe),ue=function(e){var t=e.id,n=e.onClose,a=e.header,l=e.navigator,c=l.params.link||{},i=l.params.deleteLink||null;return r.a.createElement(te.a,{id:t,onClose:n,header:a},r.a.createElement(ae.a,{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(k.a,{type:"image",size:60,style:{background:"var(--accent)"}},r.a.createElement(U.a,{fill:"white"})),r.a.createElement("h1",{style:{marginTop:10,marginBottom:0,fontSize:18,display:"flex",alignItems:"center"}},r.a.createElement("span",{style:{margin:0,padding:0,marginRight:3}},c.key),c.access_key?r.a.createElement(H.a,{fill:"var(--text_secondary)"}):null),r.a.createElement("h3",{style:{marginTop:5,marginBottom:0,fontSize:14,color:"var(--text_secondary)"}},c.short_url)),r.a.createElement(ae.a,null,r.a.createElement("div",{style:{display:"flex",marginBottom:25}},r.a.createElement(P.a,{before:r.a.createElement(ie.a,null),size:"l",stretched:!0,onClick:function(){return o.a.send("VKWebAppShare",{link:c.short_url})},style:{cursor:"pointer",marginRight:10}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"),r.a.createElement(P.a,{before:r.a.createElement(se.a,null),level:"destructive",size:"l",stretched:!0,onClick:function(){i(c.key),l.hideModal()},style:{cursor:"pointer"}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),r.a.createElement(_.a,null,r.a.createElement(v.a,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u043e",indicator:new Date(1e3*c.timestamp).toLocaleString()}),r.a.createElement(v.a,{children:"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430",onClick:function(){return $(c.url)},indicator:r.a.createElement(P.a,{before:r.a.createElement(le.a,null)},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")}),r.a.createElement(v.a,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",indicator:c.access_key?"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u0430\u044f":"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f"}),r.a.createElement(v.a,{children:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u044b",indicator:c.views}))))},me=n(76),pe=n.n(me),de=function(e){var t=e.id,n=e.navigator;return r.a.createElement(f.a,{id:t,theme:"white",centered:!0},r.a.createElement(ae.a,{style:{display:"flex",flexDirection:"column",textAlign:"center",alignItems:"center"}},r.a.createElement(k.a,{type:"app",size:60,style:{background:"var(--accent)"}},r.a.createElement(U.a,{fill:"white"})),r.a.createElement("h1",{style:{marginBottom:0}},"\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438"),r.a.createElement("p",{style:{marginTop:15,marginBottom:5}},"\u0412 \u044d\u0442\u043e\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u0435 \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438\u0437 \u0434\u043b\u0438\u043d\u043d\u043e\u0439 \u0438 \u0441\u043b\u043e\u0436\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u0443\u044e. \u0422\u0430\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0412\u0430\u0448\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u044f\u0445 \u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u0445.")),r.a.createElement(pe.a,{vertical:"bottom"},r.a.createElement(ae.a,null,r.a.createElement(P.a,{size:"xl",style:{cursor:"pointer"},onClick:function(){o.a.sendPromise("VKWebAppGetAuthToken",{app_id:7172940,scope:""}).then((function(e){window.is_app_user=!0,window.access_token=e.access_token,n.goPage("main")}))}},"\u041d\u0430\u0447\u0430\u0442\u044c"))))},fe=function(){return r.a.createElement(s.Stack,{activePage:"main",modals:[r.a.createElement(ue,{id:"link-info",title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u0441\u044b\u043b\u043a\u0435"})]},r.a.createElement(s.Page,{id:"main",activePanel:"home"},r.a.createElement(Z,{id:"home"})),r.a.createElement(s.Page,{id:"welcome",activePanel:"welcome"},r.a.createElement(de,{id:"welcome"})))};n(243),n(244);o.a.send("VKWebAppInit"),o.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"bright_light",document.body.attributes.setNamedItem(r)}})),window.is_app_user=-1!==["localhost:10888","192.168.1.141:10888"].indexOf(new URL(window.location.href).host)||"1"===new URL(window.location.href).searchParams.get("vk_is_app_user"),c.a.render(r.a.createElement(fe,null),document.getElementById("root"))}},[[120,1,2]]]);
//# sourceMappingURL=main.446c39d3.chunk.js.map