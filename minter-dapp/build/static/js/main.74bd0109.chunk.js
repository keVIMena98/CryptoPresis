(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(t,n){},255:function(t,n){},273:function(t,n){},275:function(t,n){},294:function(t,n){},295:function(t,n){},358:function(t,n){},360:function(t,n){},393:function(t,n){},395:function(t,n){},396:function(t,n){},401:function(t,n){},403:function(t,n){},409:function(t,n){},411:function(t,n){},424:function(t,n){},436:function(t,n){},439:function(t,n){},444:function(t,n){},452:function(t,n){},461:function(t,n){},463:function(t,n){},533:function(t,n,e){},534:function(t,n,e){"use strict";e.r(n);var c,r,a,o,i,s,l,u,d,x,p,j,b,h,f,g,O=e(1),y=e(85),v=e.n(y),m=e(16),C=e.n(m),w=e(43),A=e(70),E=e(14),S=e(58),T=e(69),N=e.n(T),_=e(220),k=e.n(_),M=e(59),I=e(221),D=e(19),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(D.a)(Object(D.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(D.a)(Object(D.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(D.a)(Object(D.a)({},L),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(D.a)(Object(D.a)({},t),{},{account:n.payload.account});default:return t}},K={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(D.a)(Object(D.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(D.a)(Object(D.a)({},t),{},{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(D.a)(Object(D.a)({},K),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},P=Object(M.b)({blockchain:R,data:F}),U=[I.a],W=Object(M.c)(M.a.apply(void 0,U)),z=Object(M.d)(P,W),Y=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},B=function(){return function(){var t=Object(w.a)(C.a.mark((function t(n){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),t.prev=1,t.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=t.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),n(Y("Could not load data from contract."));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()},H=function(t){return{type:"CONNECTION_FAILED",payload:t}},G=function(t){return function(){var n=Object(w.a)(C.a.mark((function n(e){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(B());case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},Q=e(15),X=Q.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),q=Q.a.div(r||(r=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(a||(a=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(t){var n=t.flex;return n||0}),(function(t){var n=t.fd;return n||"column"}),(function(t){var n=t.jc;return n||"flex-start"}),(function(t){var n=t.ai;return n||"flex-start"}),(function(t){return t.test?"pink":"none"}),(function(t){var n=t.image;return n?"url(".concat(n,")"):"none"})),tt=Q.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),nt=(Q.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 12px;\n  line-height: 1.6;\n"]))),Q.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 10px;\n  line-height: 1.6;\n"])))),et=(Q.a.div(x||(x=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(3));fetch("https://api.opensea.io/api/v1/collection/cryptopresisoffcial/stats",{method:"GET",headers:{Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){return console.log(t)})).catch((function(t){return console.error(t)}));var ct=Q.a.button(p||(p=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rt=Q.a.button(j||(j=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 10px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),at=Q.a.div(b||(b=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ot=Q.a.img(h||(h=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),it=Q.a.img(f||(f=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),st=Q.a.a(g||(g=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var lt=function(){var t=Object(S.b)(),n=Object(S.c)((function(t){return t.blockchain})),e=Object(S.c)((function(t){return t.data})),c=Object(O.useState)(!1),r=Object(A.a)(c,2),a=r[0],o=r[1],i=Object(O.useState)("Click buy to mint your NFT."),s=Object(A.a)(i,2),l=s[0],u=s[1],d=Object(O.useState)(1),x=Object(A.a)(d,2),p=x[0],j=x[1],b=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),h=Object(A.a)(b,2),f=h[0],g=h[1],y=function(){""!==n.account&&null!==n.smartContract&&t(B(n.account))},v=function(){var t=Object(w.a)(C.a.mark((function t(){var n,e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,g(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.useEffect)((function(){v()}),[]),Object(O.useEffect)((function(){y()}),[n.account]),Object(et.jsx)(X,{children:Object(et.jsxs)($,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:f.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(et.jsx)(ot,{alt:"logo",src:"/config/images/logo.png"}),Object(et.jsx)(J,{}),Object(et.jsxs)(at,{flex:1,style:{padding:24},test:!0,children:[Object(et.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(et.jsx)(it,{alt:"example",src:"/config/images/example.gif"})}),Object(et.jsx)(Z,{}),Object(et.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(et.jsxs)(tt,{style:{textAlign:"center",fontSize:20,fontWeight:"bold",color:"var(--accent-text)"},children:[Object(et.jsx)(tt,{style:{textAlign:"center",fontSize:16,fontWeight:"bold",color:"var(--accent-text)"},children:"LIMITED COLLECTION"}),Object(et.jsx)(q,{}),f.MAX_SUPPLY-e.totalSupply," REMAINING"]}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"connect wallet to view remaining supply."}),Object(et.jsx)(q,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(et.jsx)(st,{target:"_blank",href:f.SCAN_LINK,children:(f.CONTRACT_ADDRESS,"Etherscan")})}),Object(et.jsx)(J,{}),Number(e.totalSupply)>=f.MAX_SUPPLY?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",f.NFT_NAME," on"]}),Object(et.jsx)(J,{}),Object(et.jsx)(st,{target:"_blank",href:f.MARKETPLACE_LINK,children:f.MARKETPLACE})]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsxs)(tt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",f.NFT_NAME," costs ",f.DISPLAY_COST," ",f.NETWORK.SYMBOL,"."]}),Object(et.jsx)(q,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(et.jsx)(J,{}),""===n.account||null===n.smartContract?Object(et.jsxs)($,{ai:"center",jc:"center",children:[Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",f.NETWORK.NAME," network"]}),Object(et.jsx)(J,{}),Object(et.jsx)(ct,{onClick:function(n){n.preventDefault(),t(function(){var t=Object(w.a)(C.a.mark((function t(n){var e,c,r,a,o,i,s,l,u;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=t.sent,t.next=12,r.json();case 12:if(a=t.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){t.next=33;break}return N.a.setProvider(i),s=new k.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==a.NETWORK.ID?(u=new N.a(c,a.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:s}}),i.on("accountsChanged",(function(t){n(G(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(H("Change network to the ".concat(a.NETWORK.NAME," Mainnet."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),n(H("Something went wrong."));case 31:t.next=34;break;case 33:n(H("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(n){return t.apply(this,arguments)}}()),y()},children:"CONNECT"}),""!==n.errorMsg?Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(J,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:n.errorMsg})]}):null]}):Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:l}),Object(et.jsx)(V,{}),Object(et.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(et.jsx)(rt,{style:{lineHeight:.4},disabled:a?1:0,onClick:function(t){t.preventDefault(),function(){var t=p-1;t<1&&(t=1),j(t)}()},children:"-"}),Object(et.jsx)(V,{}),Object(et.jsx)(nt,{style:{textAlign:"center",color:"var(--accent-text)"},children:p}),Object(et.jsx)(V,{}),Object(et.jsx)(rt,{disabled:a?1:0,onClick:function(t){t.preventDefault(),function(){var t=p+1;t>5&&(t=5),j(t)}()},children:"+"})]}),Object(et.jsx)(J,{}),Object(et.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(et.jsx)(ct,{disabled:a?1:0,onClick:function(e){e.preventDefault(),function(){var e=f.WEI_COST,c=f.GAS_LIMIT,r=String(e*p),a=String(c*p);console.log("Cost: ",r),console.log("Gas limit: ",a),u("Minting your ".concat(f.NFT_NAME,"...")),o(!0),n.smartContract.methods.mint(p).send({gasLimit:String(a),to:f.CONTRACT_ADDRESS,from:n.account,value:r}).once("error",(function(t){console.log(t),u("Sorry, something went wrong please try again later."),o(!1)})).then((function(e){console.log(e),u("WOW, the ".concat(f.NFT_NAME," is yours! go visit Opensea.io to view it.")),o(!1),t(B(n.account))}))}(),y()},children:a?"BUSY":"BUY"})})]})]}),Object(et.jsx)(V,{})]}),Object(et.jsx)(Z,{}),Object(et.jsx)($,{flex:1,jc:"center",ai:"center",children:Object(et.jsx)(it,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(et.jsx)(V,{}),Object(et.jsxs)($,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",f.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(et.jsx)(J,{}),Object(et.jsxs)(nt,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",f.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},ut=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;e(t),c(t),r(t),a(t),o(t)}))};e(533);v.a.render(Object(et.jsx)(S.a,{store:z,children:Object(et.jsx)(lt,{})}),document.getElementById("root")),ut()}},[[534,1,2]]]);
//# sourceMappingURL=main.74bd0109.chunk.js.map