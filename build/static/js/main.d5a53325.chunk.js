(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},31:function(e){e.exports=JSON.parse('{"apiKey":"AIzaSyBRhSKBME2edR0FUwFLrGDCHl_2qUkdo3g","authDomain":"chat-app-008.firebaseapp.com","projectId":"chat-app-008","storageBucket":"chat-app-008.appspot.com","messagingSenderId":"662375521681","appId":"1:662375521681:web:2a8c54a9a3a59d840ace30","measurementId":"G-2ZHXYQFPKF"}')},45:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(15),i=n.n(a),s=(n(24),n(13)),o=n.n(s),u=n(16),d=n(10),j=(n(26),n(9)),p=(n(46),n(28),n(18)),h=n(19),b=n(4),l=n(31),m=l.apiKey,O=l.authDomain,g=l.projectId,f=l.storageBucket,x=l.messagingSenderId,v=l.appId,I=l.measurementId;j.a.initializeApp({apiKey:m,authDomain:O,projectId:g,storageBucket:f,messagingSenderId:x,appId:v,measurementId:I});var F=j.a.auth(),S=j.a.firestore(),w=n(32),k=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{onClick:function(){var e=new j.a.auth.GoogleAuthProvider;F.signInWithPopup(e)},children:"Sign in with Google"})})},y=function(){return F.currentUser&&Object(b.jsx)("button",{onClick:function(){return F.signOut()},children:"Sign Out"})},B=function(){var e=S.collection("messages"),t=e.orderBy("createdAt").limit(25),n=Object(h.a)(t,{idField:"id"}),r=Object(d.a)(n,1)[0],a=Object(c.useState)(""),i=Object(d.a)(a,2),s=i[0],p=i[1],l=Object(c.useRef)(),m=new w,O=function(){var t=Object(u.a)(o.a.mark((function t(n){var c,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),c=F.currentUser,r=c.uid,a=c.photoURL,t.next=4,e.add({text:m.isProfane(s)?m.clean(s):s,createdAt:j.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:a});case 4:p(""),l.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("main",{children:[r&&r.map((function(e){return Object(b.jsx)(U,{message:e},e.id)})),Object(b.jsx)("div",{ref:l})]}),Object(b.jsxs)("form",{onSubmit:O,children:[Object(b.jsx)("input",{value:s,onChange:function(e){p(e.target.value)}})," ",Object(b.jsx)("button",{type:"subnit",disabled:!s,children:"\ud83d\udd4a\ufe0f"})]})]})},U=function(e){var t=e.message,n=t.text,c=t.uid,r=t.photoURL,a=c===F.currentUser.uid?"sent":"received";return Object(b.jsxs)("div",{className:"message ".concat(a),children:[Object(b.jsx)("img",{src:r}),Object(b.jsx)("p",{children:n})]})},C=function(){var e=Object(p.a)(F),t=Object(d.a)(e,1)[0];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"}),Object(b.jsx)(y,{})]}),Object(b.jsx)("section",{children:t?Object(b.jsx)(B,{}):Object(b.jsx)(k,{})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),A()}},[[45,1,2]]]);
//# sourceMappingURL=main.d5a53325.chunk.js.map