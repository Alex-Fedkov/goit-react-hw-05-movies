"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[368],{368:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r,s,i,o,a,c,d,l=t(439),h=t(791),u=t(689),x=t(87),p=t(824),j=t(168),f=t(444),v=f.ZP.main(r||(r=(0,j.Z)(["\n    padding: 10px 40px;\n"]))),m=f.ZP.button(s||(s=(0,j.Z)(["  \n    margin-bottom: 10px;    \n    padding: 5px;\n    font-size: 22px;\n    font-weight: 600;\n\n    &:hover,\n    :focus {\n    background-color: #59d879;\n    cursor: pointer;\n    border-radius: 5px;\n    }\n"]))),Z=f.ZP.p(i||(i=(0,j.Z)(["\n    font-size: 20px;\n    font-weight: 700;\n"]))),g=(0,f.ZP)(Z)(o||(o=(0,j.Z)(["\n    font-weight: 400;\n"]))),b=f.ZP.div(a||(a=(0,j.Z)(["\n    font-size: 20px;\n    font-weight: 400;\n"]))),w=f.ZP.div(c||(c=(0,j.Z)(["\n    display: flex;\n    gap: 15px;\n    "]))),k=f.ZP.ul(d||(d=(0,j.Z)(["\n    list-style: none;\n    font-size: 20px;\n"]))),S=t(184),P="pending",_="resolved",U="rejected",y=function(){var e,n,t=(0,u.UO)().movieId,r=null!==(e=null===(n=(0,u.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies",s=(0,h.useState)(""),i=(0,l.Z)(s,2),o=i[0],a=i[1],c=(0,h.useState)(""),d=(0,l.Z)(c,2),j=d[0],f=d[1],y=(0,h.useState)(""),z=(0,l.Z)(y,2),C=z[0],E=z[1],F=(0,h.useState)(null),G=(0,l.Z)(F,2),O=G[0],A=G[1],H=(0,h.useState)(""),I=(0,l.Z)(H,2),R=I[0],T=I[1],q=(0,h.useState)([]),B=(0,l.Z)(q,2),D=B[0],J=B[1],K=(0,h.useState)(null),L=(0,l.Z)(K,2),M=L[0],N=L[1],Q=(0,h.useState)(null),V=(0,l.Z)(Q,2),W=V[0],X=V[1];return(0,h.useEffect)((function(){var e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=cfb2a4b5cdc00428d1d82e24b55ad28d");N(P),t&&fetch(e).then((function(e){return e.ok?e.json():Promise.reject(new Error("Error!"))})).then((function(e){a(e.poster_path),f(e.title),E(e.release_date),A(e.vote_average.toFixed(1)),T(e.overview),J(e.genres),N(_)})).catch((function(e){X(e),N(U)}))}),[t]),(0,S.jsxs)(v,{children:[M===U&&(0,S.jsx)("div",{children:W.message}),M===P&&(0,S.jsx)(p.a,{}),M===_&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(x.rU,{to:r,children:(0,S.jsx)(m,{type:"button",children:"Go back"})}),(0,S.jsxs)(w,{children:[(0,S.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(o),alt:"poster"}),(0,S.jsxs)("div",{children:[(0,S.jsxs)("h2",{children:[j," (",C,")"]}),(0,S.jsxs)(Z,{children:["User Score: ",O]}),(0,S.jsx)(Z,{children:"Overview:"}),(0,S.jsx)(g,{children:R}),(0,S.jsx)(Z,{children:"Genres:"}),(0,S.jsx)(b,{children:D.map((function(e){return e.name})).join(", ")})]})]}),(0,S.jsxs)("div",{children:[(0,S.jsx)(g,{children:"Additional information"}),(0,S.jsxs)(k,{children:[(0,S.jsx)("li",{children:(0,S.jsx)(x.rU,{to:"cast",state:{from:r},children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(x.rU,{to:"reviews",state:{from:r},children:"Reviews"})})]})]}),(0,S.jsx)(h.Suspense,{fallback:(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(p.a,{})}),children:(0,S.jsx)(u.j3,{})})]})]})}}}]);
//# sourceMappingURL=368.40d3feba.chunk.js.map