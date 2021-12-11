(this["webpackJsonpbooks-repository"]=this["webpackJsonpbooks-repository"]||[]).push([[0],{179:function(e,t,n){},180:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var c,o,a=n(0),r=n.n(a),i=n(41),s=n.n(i),u=(n(179),n(180),n(29)),b=n(67),l=b.a.div(c||(c=Object(u.a)(["\n  display: flex;\n  width: 100%;\n  height: 4em;\n  background-color: #f4f1ea;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),j=n(278),d=n(3),h=n(5),O=n(279),p=Object(h.a)("div")((function(e){var t=e.theme;return Object(d.a)({position:"relative",marginRight:"2em",marginLeft:0,borderRadius:"2em",width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),f=Object(h.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1}})),g=Object(h.a)(O.a)((function(e){var t=e.theme;return{border:"#DCD6CC 1px solid",background:"#FFFFFF",borderRadius:"1em","& .MuiInputBase-input":Object(d.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch",border:"0px"}}),"&:after":{border:"0px"}}})),x=n(143),m=n.n(x),k=n(141),v=n.n(k),y=n(39),w=n(77);!function(e){e.UPDATE_BOOKS="UPDATE_BOOKS",e.SEARCH_BOOKS="SEARCH_BOOKS"}(o||(o={}));var _=function(e){return Object(w.action)(o.UPDATE_BOOKS,e)},B=function(e){return Object(w.action)(o.SEARCH_BOOKS,e)},S=n(2),C=function(e){e.onChangeInput;var t=Object(y.b)(),n=Object(a.useCallback)(v()((function(e){t(B(e.target.value))}),300),[]);return Object(S.jsxs)(p,{children:[Object(S.jsx)(f,{children:Object(S.jsx)(m.a,{sx:{color:"#000000"}})}),Object(S.jsx)(g,{placeholder:"Search books",onChange:n,disableUnderline:!0})]})},R=function(){return Object(S.jsxs)(l,{children:[Object(S.jsx)(j.a,{sx:{marginLeft:"2em"},alignItems:"left",variant:"h6",children:"Books Wonderland"}),Object(S.jsx)(C,{onChangeInput:function(e){}})]})},E=n(276),I=n(18),F=n(281),P=n(285),A=n(284),D=n(280),T=n(282),L=n(283),K=n(157),U=function(){var e=Object(y.c)((function(e){return e.booksRepo.books}));return Object(S.jsx)(D.a,{sx:{marginTop:"2em"},component:K.a,children:Object(S.jsxs)(F.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(S.jsx)(T.a,{children:Object(S.jsx)(L.a,{children:["title","authors","year","country","city","pages"].map((function(e,t){return Object(S.jsx)(A.a,{align:"center",children:e},"row-".concat(t,"-").concat(e))}))})}),Object(S.jsx)(P.a,{children:e.map((function(e,t){return Object(S.jsxs)(L.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(S.jsx)(A.a,{align:"left",component:"th",scope:"row",children:e.book_title},"row-".concat(t,"-").concat(e.book_title)),Object(S.jsx)(A.a,{align:"center",children:(n=e.book_author,n.reduce((function(e,t){return e+"".concat(t,"\n")}),""))},"row-".concat(t,"-").concat(e.book_author)),Object(S.jsx)(A.a,{align:"center",children:e.book_publication_year},"row-".concat(t,"-").concat(e.book_publication_year)),Object(S.jsx)(A.a,{align:"center",children:e.book_publication_country},"row-".concat(t,"-").concat(e.book_publication_country)),Object(S.jsx)(A.a,{align:"center",children:e.book_publication_city},"row-".concat(t,"-").concat(e.book_publication_city)),Object(S.jsx)(A.a,{align:"center",children:e.book_pages},"row-".concat(t,"-").concat(e.book_pages))]},"row-".concat(t,"-").concat(e.id));var n}))})]})})},M=n(8),H=n(24),z=n.n(H),W=n(144),J=n(46),q=n(47),G=n(145),N=n.n(G),Q=function(){function e(){Object(J.a)(this,e),this.axiosInstance=void 0,this.baseURL="http://nyx.vima.ekt.gr:3000/api",this.responseBody=function(e){return e.data},this.axiosInstance=N.a.create({baseURL:this.baseURL})}return Object(q.a)(e,[{key:"getBooks",value:function(){var e=Object(W.a)(z.a.mark((function e(t){var n=this;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.axiosInstance.post("/books",t).then((function(e){return n.responseBody(e)})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return this._instance}}]),e}();Q._instance=new Q;var V,X,Y,Z=Q.getInstance(),$=n(146),ee=b.a.div(V||(V=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin-top: 2em;\n  background-color: white;\n  align-items: center;\n"]))),te=(Object(b.a)($.a)(X||(X=Object(u.a)(["\n  width: 90%;\n  margin-top: 7em;\n"]))),b.a.div(Y||(Y=Object(u.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 2;\n"])))),ne=n(221),ce=function(){var e=Object(I.f)(),t=Object(I.g)().id,n=function(){var e=Object(a.useState)(!1),t=Object(M.a)(e,2),n=t[0],c=t[1],o=Object(y.b)();return{getBooksByPageAndFilter:function(e,t){c(!0),Z.getBooks({page:e,itemsPerPage:10,filters:t}).then((function(t){o(_({page:e,books:t.books,count:t.count})),c(!1)})).catch((function(e){c(!1)}))},loading:n}}(),c=n.getBooksByPageAndFilter,o=n.loading,r=Object(y.c)((function(e){return e.booksRepo.count})),i=Object(y.c)((function(e){return e.booksRepo.search})),s=Math.round(r/10),u=parseInt(t||"1");return Object(a.useEffect)((function(){c(u,""===i?[]:[{type:"all",values:[i]}])}),[t,i]),Object(S.jsxs)(ee,{children:[Object(S.jsx)(E.a,{defaultPage:u,count:s,size:"large",onChange:function(t,n){e("/page/"+n)}}),Object(S.jsx)(U,{}),o&&Object(S.jsx)(te,{children:Object(S.jsx)(ne.a,{})})]})},oe=n(112),ae=n(93),re=n(148),ie=n(79),se=Object(w.createReducer)({books:[],page:0,count:0,search:""}).handleType(o.UPDATE_BOOKS,(function(e,t){var n=t.payload;return Object(ie.a)(Object(ie.a)({},e),{},{books:n.books,page:n.page,count:n.count})})).handleType(o.SEARCH_BOOKS,(function(e,t){var n=t.payload;return Object(ie.a)(Object(ie.a)({},e),{},{search:n})})),ue=Object(ae.combineReducers)({booksRepo:se}),be=Object(ae.createStore)(ue,Object(re.composeWithDevTools)()),le=n(94),je=n(91),de=function(e){Object(le.a)(n,e);var t=Object(je.a)(n);function n(){var e;Object(J.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={hasError:!1,errorMessage:""},e}return Object(q.a)(n,[{key:"componentDidCatch",value:function(e){this.setState({hasError:!0,errorMessage:"".concat(e.name,"\n").concat(e.message,"\n")})}},{key:"render",value:function(){return this.state.hasError?Object(S.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),n}(r.a.PureComponent),he=de;var Oe=function(){return Object(S.jsx)(he,{children:Object(S.jsx)(y.a,{store:be,children:Object(S.jsxs)("div",{style:{display:"flex",flex:1,flexDirection:"column"},children:[Object(S.jsx)(R,{}),Object(S.jsx)(oe.a,{children:Object(S.jsxs)(I.c,{children:[Object(S.jsx)(I.a,{path:"/",element:Object(S.jsx)(ce,{})}),Object(S.jsx)(I.a,{path:"/page/:id",element:Object(S.jsx)(ce,{})})]})})]})})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,287)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(Oe,{})}),document.getElementById("root")),pe()}},[[208,1,2]]]);
//# sourceMappingURL=main.ee85fc63.chunk.js.map