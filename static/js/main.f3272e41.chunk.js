(this["webpackJsonpshort-links-vkapps"]=this["webpackJsonpshort-links-vkapps"]||[]).push([[0],{131:function(e){e.exports=JSON.parse('{"name":"short-links-vkapps","version":"1.3.2","description":"","main":"index.js","scripts":{"start":"cross-env PORT=10888 react-scripts start","build":"react-scripts build","deploy":"gh-pages -d build"},"keywords":[],"author":"","homepage":"https://hit2hat.github.io/short-links-vkapps/","license":"MIT","devDependencies":{"cross-env":"^5.2.1","react-hot-loader":"^4.12.15","react-scripts":"^3.2.0"},"dependencies":{"@sentry/browser":"^5.7.1","@vkontakte/icons":"^1.10.2","@vkontakte/vk-connect":"^1.6.5","@vkontakte/vk-qr":"^2.0.8","@vkontakte/vkui":"^2.32.2","babel-eslint":"^10.0.3","chalk":"^2.4.2","core-js":"^3.3.2","gh-pages":"^2.1.1","prop-types":"^15.7.2","react":"^16.10.2","react-dom":"^16.10.2","vkui-navigator":"^1.3.2"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},135:function(e,t,n){e.exports=n(262)},259:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);n(136),n(163),n(165),n(166),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(177),n(178),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(188),n(189),n(190),n(191),n(192),n(193),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205);var a=n(0),r=n.n(a),c=n(65),i=n.n(c),l=n(24),o=n.n(l),s=n(267),u=n(23),m=n(69),p=n(117),d=n(134),h=n(44),f=n(67),g=n.n(f),v=n(85),b=n.n(v),k=n(87),E=n.n(k),y=n(51),w=n.n(y),O=n(48),_=n.n(O),P=n(68),j=n.n(P),x=n(43),S=n.n(x),A=n(126),C=n.n(A),I=n(119),L=n.n(I),M=n(125),z=n.n(M),D=n(120),K=n.n(D),T=n(121),V=n.n(T),W=n(122),B=n.n(W),R=n(123),J=n.n(R),N=n(124),U=n.n(N),F=n(50),G=n.n(F),q=n(118),H=n.n(q),Q=n(66),X=n.n(Q);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(e){try{return new URL(e),!0}catch(t){return!1}},ee=function(e){var t=e.id,n=e.navigator,c=Object(a.useState)(null),i=Object(h.a)(c,2),l=i[0],s=i[1],u=Object(a.useState)([]),m=Object(h.a)(u,2),p=m[0],f=m[1],v=Object(a.useState)(!1),k=Object(h.a)(v,2),y=k[0],O=k[1],P=Object(a.useState)(!1),x=Object(h.a)(P,2),A=x[0],I=x[1],M=Object(a.useState)(""),D=Object(h.a)(M,2),T=D[0],W=D[1],R=Object(a.useState)(!1),N=Object(h.a)(R,2),F=N[0],q=N[1],Q=Object(a.useState)(null),Y=Object(h.a)(Q,2),ee=Y[0],te=Y[1];Object(a.useEffect)((function(){if(!1===window.is_app_user)n.goPage("welcome");else if(window.access_token)s(window.access_token),ne(window.access_token);else{(function e(){return new Promise((function(t){o.a.sendPromise("VKWebAppGetAuthToken",{app_id:7172940,scope:""}).then((function(e){return t(e.access_token)})).catch((function(){return e()}))}))})().then((function(e){s(e),ne(e)}))}}),[]);var ne=function(e){O(!1),o.a.sendPromise("VKWebAppCallAPIMethod",{method:"utils.getLastShortenedLinks",params:{count:"50",v:"5.102",access_token:e}}).then((function(e){return f(e.response.items)})).finally((function(){return O(!0)}))},ae=function(e){o.a.sendPromise("VKWebAppCallAPIMethod",{method:"utils.deleteFromLastShortened",params:{key:e,v:"5.102",access_token:l}}).then((function(){return f(p.filter((function(t){return t.key!==e})))})).catch((function(e){return console.error(JSON.stringify(e))}))};return r.a.createElement(g.a,{id:t},r.a.createElement(b.a,null,"\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438"),r.a.createElement(L.a,{onRefresh:function(){return ne(l)},isFetching:!y},r.a.createElement(E.a,{title:"\u0421\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443"},r.a.createElement(K.a,null,r.a.createElement(V.a,null,ee&&r.a.createElement(B.a,{state:"error",title:"\u041e\u0448\u0438\u0431\u043a\u0430",children:ee}),r.a.createElement(J.a,{placeholder:"\u0412\u0430\u0448\u0430 \u0441\u0441\u044b\u043b\u043a\u0430",value:T,onChange:function(e){return T.length<255?W(e.currentTarget.value):null}}),r.a.createElement(U.a,{style:{marginTop:10},value:F,onChange:function(){return q(!F)}},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0432\u0438\u0434\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043c\u043d\u0435")),r.a.createElement(S.a,{size:"xl",onClick:function(){!function(e,t){if(!A){if(te(null),0===e.length)return te("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443");if(!$(e)){if(!$("https://"+e))return te("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u0442\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430");e="https://"+e}I(!0),n.showLoader(),o.a.sendPromise("VKWebAppCallAPIMethod",{method:"utils.getShortLink",params:{url:e,private:t?"1":"0",v:"5.102",access_token:l}}).then((function(e){-1===p.findIndex((function(t){return t.key===e.response.key}))?(f([Z({},e.response,{timestamp:Math.floor(Date.now()/1e3),views:0})].concat(Object(d.a)(p))),W("")):te("\u0421\u0441\u044b\u043b\u043a\u0430 \u0443\u0436\u0435 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0430"),n.hideLoader(),I(!1)})).catch((function(){te("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443"),n.hideLoader(),I(!1)}))}}(T,F)},style:{cursor:"pointer"}},"\u0421\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c"))),r.a.createElement(E.a,{title:"\u041c\u043e\u0438 \u0441\u0441\u044b\u043b\u043a\u0438"},y?p.length>0?r.a.createElement(j.a,null,p.map((function(e){return r.a.createElement(_.a,{expandable:!0,key:e.key,before:r.a.createElement(w.a,{type:"app",style:{background:"var(--accent)"},size:40},r.a.createElement(G.a,{fill:"white"})),children:r.a.createElement("span",{style:{display:"flex",alignItems:"center"}},r.a.createElement("span",{style:{marginRight:3}},e.short_url),e.access_key?r.a.createElement(X.a,{fill:"var(--text_secondary)"}):null),indicator:r.a.createElement("span",{style:{display:"flex",alignItems:"center"}},r.a.createElement(H.a,{fill:"var(--text_secondary)"}),r.a.createElement("span",{style:{marginLeft:3}},(t=e.views,t<1e3?t:t<1e6?Math.floor(t/1e3*10)/10+"K":Math.floor(t/1e6*10)/10+"M"))),description:e.url.slice(0,28)+(e.url.length>28?"...":""),onClick:function(){return n.showModal("link-info",{link:e,deleteLink:ae})}});var t}))):r.a.createElement(z.a,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0441\u044b\u043b\u043e\u043a \u043f\u0443\u0441\u0442",children:"\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u044f\u0432\u043b\u044f\u0442\u0441\u044f \u0432 \u044d\u0442\u043e\u0439 \u0441\u0435\u043a\u0446\u0438\u0438"}):r.a.createElement("div",{style:{paddingBottom:25}},r.a.createElement(C.a,null)))))},te=function(e){var t=document.createElement("a");t.href=e,t.target="_blank",t.dispatchEvent(new window.MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))},ne=n(130),ae=n.n(ne),re=n(52),ce=n.n(re),ie=n(127),le=n.n(ie),oe=n(128),se=n.n(oe),ue=n(129),me=n.n(ue),pe=function(e){var t=e.id,n=e.onClose,a=e.header,c=e.navigator,i=c.params.link||{},l=c.params.deleteLink||null;return r.a.createElement(ae.a,{id:t,onClose:n,header:a},r.a.createElement(ce.a,{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(w.a,{type:"image",size:60,style:{background:"var(--accent)"}},r.a.createElement(G.a,{fill:"white"})),r.a.createElement("h1",{style:{marginTop:10,marginBottom:0,fontSize:18,display:"flex",alignItems:"center"}},r.a.createElement("span",{style:{margin:0,padding:0,marginRight:3}},i.key),i.access_key?r.a.createElement(X.a,{fill:"var(--text_secondary)"}):null),r.a.createElement("h3",{style:{marginTop:5,marginBottom:0,fontSize:14,color:"var(--text_secondary)"}},i.short_url)),r.a.createElement(ce.a,null,r.a.createElement("div",{style:{display:"flex",marginBottom:25}},r.a.createElement(S.a,{before:r.a.createElement(se.a,null),size:"l",stretched:!0,onClick:function(){return o.a.send("VKWebAppShare",{link:i.short_url})},style:{cursor:"pointer",marginRight:10}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"),r.a.createElement(S.a,{before:r.a.createElement(me.a,null),level:"destructive",size:"l",stretched:!0,onClick:function(){l(i.key),c.hideModal()},style:{cursor:"pointer"}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),r.a.createElement(j.a,null,r.a.createElement(_.a,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u043e",indicator:new Date(1e3*i.timestamp).toLocaleString()}),r.a.createElement(_.a,{children:"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430",onClick:function(){return te(i.url)},indicator:r.a.createElement(S.a,{before:r.a.createElement(le.a,null)},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")}),r.a.createElement(_.a,{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",indicator:i.access_key?"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u0430\u044f":"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u0430\u044f"}),r.a.createElement(_.a,{children:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u044b",indicator:i.views}))))},de=n(86),he=n.n(de),fe=function(e){var t=e.id,n=e.navigator;return r.a.createElement(g.a,{id:t,theme:"white",centered:!0},r.a.createElement(ce.a,{style:{display:"flex",flexDirection:"column",textAlign:"center",alignItems:"center"}},r.a.createElement(w.a,{type:"app",size:60,style:{background:"var(--accent)"}},r.a.createElement(G.a,{fill:"white"})),r.a.createElement("h1",{style:{marginBottom:0}},"\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438"),r.a.createElement("p",{style:{marginTop:15,marginBottom:5}},"\u0412 \u044d\u0442\u043e\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u0435 \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438\u0437 \u0434\u043b\u0438\u043d\u043d\u043e\u0439 \u0438 \u0441\u043b\u043e\u0436\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0438 \u043f\u0440\u043e\u0441\u0442\u0443\u044e. \u0422\u0430\u043a\u0438\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0443\u0434\u043e\u0431\u043d\u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0412\u0430\u0448\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u044f\u0445 \u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u0445.")),r.a.createElement(he.a,{vertical:"bottom"},r.a.createElement(ce.a,null,r.a.createElement(S.a,{size:"xl",style:{cursor:"pointer"},onClick:function(){o.a.sendPromise("VKWebAppGetAuthToken",{app_id:7172940,scope:""}).then((function(e){window.is_app_user=!0,window.access_token=e.access_token,n.goPage("main")}))}},"\u041d\u0430\u0447\u0430\u0442\u044c"))))},ge=function(){return r.a.createElement(m.Stack,{activePage:"main",modals:[r.a.createElement(pe,{id:"link-info",title:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u0441\u044b\u043b\u043a\u0435"})]},r.a.createElement(m.Page,{id:"main",activePanel:"home"},r.a.createElement(ee,{id:"home"})),r.a.createElement(m.Page,{id:"welcome",activePanel:"welcome"},r.a.createElement(fe,{id:"welcome"})))},ve=n(131);n(258),n(259);s.a({dsn:"https://6c2fd3ebb2d34f2fb50651894a8e6292@sentry.io/1788338",release:ve.version,environment:"production"});var be=new URL(window.location.href);u.b({id:be.searchParams&&be.searchParams.get("vk_user_id"),platform:be.searchParams&&be.searchParams.get("vk_platform")}),window.is_app_user=-1!==["localhost:10888","192.168.1.141:10888"].indexOf(be.host)||be.searchParams&&"1"===be.searchParams.get("vk_is_app_user"),o.a.send("VKWebAppInit"),o.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"bright_light",document.body.attributes.setNamedItem(r)}})),i.a.render(r.a.createElement(ge,null),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.f3272e41.chunk.js.map