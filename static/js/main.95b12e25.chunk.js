(this.webpackJsonpcgi_app=this.webpackJsonpcgi_app||[]).push([[0],{53:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n.n(a),s=n(31),o=n.n(s),r=(n(53),n(25)),c=n.n(r),u=n(38),l=n(10),j=n(18),p=n.n(j),d=n(70),b=n(71),g=n(68),h=n(69),k=n(5);function f(t){Object(a.useEffect)((function(){s(t.position)}),[t.position]);var e=Object(a.useState)(t.position),n=Object(l.a)(e,2),i=n[0],s=n[1];return Object(g.b)("click",(function(e){t.getPositionInfo(e.latlng),s(e.latlng)})),Object(g.a)().flyTo(i),Object(k.jsx)(h.a,{position:i})}n(39);var O=n(45),v=n(46),x=p.a.icon({iconUrl:O.a,shadowUrl:v.a,iconSize:[32,37],iconAnchor:[16,37]});function m(t){return Object(k.jsxs)(d.a,{center:t.position,zoom:13,style:{height:"400px",width:"800px"},children:[Object(k.jsx)(b.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(k.jsx)(f,{position:t.position,getPositionInfo:t.getPositionInfo})]})}p.a.Marker.prototype.options.icon=x;n(56),n(57);var y=n(42),S=n(30),w=n(29),P=n(47);var D=function(){var t=Object(a.useState)(58.378025),e=Object(l.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(26.728493),r=Object(l.a)(o,2),j=r[0],p=r[1],d=Object(a.useState)([]),b=Object(l.a)(d,2),g=b[0],h=b[1],f=Object(a.useState)([{startDate:new Date,endDate:new Date,key:"selection"}]),O=Object(l.a)(f,2),v=O[0],x=O[1],D={lat:n,lng:j},M=[];function C(t,e,n){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(c.a.mark((function t(e,n,a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.sunrise-sunset.org/json?lat=".concat(e,"&lng=").concat(n,"&date=").concat(a,"&formatted=0"),{method:"GET"}).then((function(t){return t.json()})).then((function(t){M.push(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(u.a)(c.a.mark((function t(e,n,a){var i,s,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i="",D={lat:e,lng:n},!Object(y.a)(a[0].startDate,a[0].endDate)){t.next=8;break}return i=Object(S.a)(a[0].startDate,"yyyy-MM-dd"),t.next=6,C(e,n,i);case 6:t.next=17;break;case 8:s=Object(w.a)({start:a[0].startDate,end:a[0].endDate}),o=0;case 10:if(!(o<s.length)){t.next=17;break}return i=Object(S.a)(s[o],"yyyy-MM-dd"),t.next=14,C(e,n,i);case 14:o++,t.next=10;break;case 17:h(M);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var F=function(t){var e=t.results.sunset.match(/\d\d:\d\d:\d\d/)[0],n=t.results.sunrise.match(/\d\d:\d\d:\d\d/)[0],a=e.split(":"),i=n.split(":"),s=3600*Number(a[0])+60*Number(a[1])+Number(a[2])-(60*Number(i[0])*60+60*Number(i[1])+Number(i[2])),o=Math.floor(s/3600);o<10&&(o="0"+o.toString());var r=Math.floor(s%3600/60);r<10&&(r="0"+r.toString());var c=s%3600%60;return c<10&&(c="0"+c.toString()),[n,e,o+":"+r+":"+c]};return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)("h1",{children:"P\xe4ikese t\xf5usu ja loojangu ajad ning p\xe4eva pikkus"}),Object(k.jsx)("p",{children:"Rakendus v\xf5imaldab kuvada P\xe4ikese t\xf5usu ja loojangu ajad ning p\xe4eva pikkuse s\xf5ltuvalt kuup\xe4evadest ja koordinaatidest. Koordinaadid saab sisestada kas k\xe4sitsi v\xf5i valides kaardil soovitud koha. Kui valida \xfcks kuup\xe4ev, kuvatakse t\xf5usu, loojangu ajad ning p\xe4eva pikkus tekstina. Mitme kuup\xe4eva valimise puhul ei juhtu midagi, sest \xe4pp loeb APIst vajalikud andmed k\xfcll sisse, aga paraku ei j\xe4\xe4nud aega, et neid graafikule kuvada."}),Object(k.jsx)("p",{children:"Sisesta geograafiline laius:"}),Object(k.jsx)("input",{id:"latitude",value:n,onChange:function(t){return s(t.target.value)}}),Object(k.jsx)("p",{children:"Sisesta geograafiline pikkus:"}),Object(k.jsx)("input",{id:"longitude",value:j,onChange:function(t){return p(t.target.value)}}),Object(k.jsx)("p",{children:"Vali kuup\xe4ev:"}),Object(k.jsx)(P.DateRange,{onChange:function(t){return x([t.selection])},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,ranges:v}),Object(k.jsx)("br",{}),Object(k.jsx)("button",{onClick:function(){return function(t,e,n){return N.apply(this,arguments)}(n,j,v)},children:"N\xe4ita tulemust!"}),void 0!==g.length&&1===g.length?Object(k.jsxs)("p",{children:["P\xe4ike t\xf5useb kell ",F(g[0])[0]," UTC ja loojub kell ",F(g[0])[1]," UTC. P\xe4eva pikkus on ",F(g[0])[2],"."]}):Object(k.jsx)("p",{}),Object(k.jsx)(m,{position:D,getPositionInfo:function(t){s(t.lat),p(t.lng),D={lat:t.lat,lng:t.lng}}})]})},M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),s(t),o(t)}))};o.a.render(Object(k.jsx)(i.a.StrictMode,{children:Object(k.jsx)(D,{})}),document.getElementById("root")),M()}},[[66,1,2]]]);
//# sourceMappingURL=main.95b12e25.chunk.js.map