(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4BAMAAADLSivhAAAAHlBMVEXLy8u8vLy+vr7Hx8fFxcXBwcHExMS/v7/CwsLAwMAKdaVfAAAACnRSTlMzZVs7P01EVUhS0jME5AAAAm5JREFUWMPtWLFyEzEQVXxOcnSsfPbFXQRp6C4MMJRnKCBdaEILw9Anw6Sg40iRNpfJB2dlx34nJ9JGqvUKe+zTrnbfrla7pzIyMjIyMhgfvhsiffkrQXTvlh7w5kes7AkNcBcn+4lF6rPPSr37fUFER5Gy+mr946OJkn5LNG3ws/hG9PrZXLGscsDSEmtYOm+Ug6KHOslo3aotjI1gONad89f7P86/+9AYwoIO7Pb86aCjSpYtjOWmJKq3WdSNKDyiaml63T6y6FCm2m7cYRtsHSQcS3afDGsnxvrYUt0jLg7hE0HYaLvx3PNMCDJV1r4bTxBbgesbVlA//fCFwPeCGjXyrSmEPDFTa3XjC6MOu/yS9c98j3eoDbp86reawxB0eoctPvarL9gwP35qdqwOUDILCPd8DgeUnhi6dMjr5iGyJ0vOUEPdSsguKRXyqWTOVihpicrlJHCkzlXxv92commrvtCQv/3Awdq1uxabmNcNagAWeOAoXse7oAPHtECOtG6ar6wfZuBhMEcQtik0hrIEwgowFfyMFl6vK4elIVLYJSl5Z5gtE3YxWxeff9vCcqi6GhrdUMlJsjnXvRaTBFGBGZOVyzMxPaEY/llnix6WwjS5zCxIn33tSTcuo17QxG0RLE7lYoAyBJTEOJLLEArgEOPrv1dSAZR9AidC0Qfiij5KZ9x1g4sOiLroUHvSrtgRzl/85T6G8vi2Qhmd9AytFBDZSu2hxsc0cWgf/b2hhBEoi2pc0TIDES0zmnVGZLOOMQEQxoTEASV9NEofytLHwfRBNH0ETh++08f+1BcOr/iFQ0ZGRkZGhlL3FYxcnd2iqc4AAAAASUVORK5CYIIvKiAgfHhHdjAwfDI3MTAzYTc1ZWRmN2Y0MzQ1ZDFjMTc4N2IwYjM4ZDkyICov"},146:function(t,e,n){"use strict";var r=n(40);n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return o});var i=function(){return function(t){return Object(r.a)("https://u.y.qq.com/cgi-bin/musicu.fcg?",{g_tk:1123594732,loginUin:822059927,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,data:{comm:{ct:24,cv:1e4},singerList:{module:"Music.SingerListServer",method:"get_singer_list",param:{area:-100,sex:-100,genre:-100,index:-100,sin:0,cur_page:1}}}},{param:"callback"}).then(function(e){0===e.code&&t({type:"singerList",data:e.singerList.data})})}},a=0,s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return 1===a?null:(a=1,function(t,e){console.log(e);var n={g_tk:1123594732,loginUin:822059927,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,singermid:t,order:"listen",begin:e,num:30,songstatus:1};return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?",n,{param:"jsonpCallback"})}(t,e).then(function(t){0===t.code&&(a=0,n({type:"singerDetails",data:t.data}))}))}},o=function(){return function(t){return t({type:"singerDetailsEmpty"})}}},163:function(t,e,n){},203:function(t,e,n){"use strict";n.r(e);var r=n(3),i=n(4),a=n(6),s=n(5),o=n(7),c=n(0),l=n.n(c),g=n(19),u=n(146),m=(n(163),n(145)),p=n.n(m),f=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(a.a)(this,Object(s.a)(e).call(this,t))).singerDetailsAction=function(t){n.props.singerDetailsEmptyAction(),n.props.singerDetailsAction(t),n.props.history.push("/SingerDetails?singer_mid="+t)},n.imgOnload=function(t,e){t.target.parentNode.removeChild(t.target),n.setState({imgArr:n.state.imgArr.map(function(n,r){return r===e&&(n=t.target.src),n})})},n.singerList=function(t){return l.a.createElement("ul",{key:"singer_listener",className:"singer_listener"},t.singerlist.map(function(t,e){return l.a.createElement("li",{onClick:function(){return n.singerDetailsAction(t.singer_mid)},key:t.singer_id,className:"singer_item"},l.a.createElement("div",{className:"singer_img"},l.a.createElement("img",{onLoad:function(t){return n.imgOnload(t,e)},style:{display:"none"},src:"http://y.gtimg.cn/music/photo_new/T001R150x150M000".concat(t.singer_mid,".jpg?max_age=2592000"),alt:" "}),l.a.createElement("img",{src:n.state.imgArr[e]?n.state.imgArr[e]:p.a,alt:" "})),l.a.createElement("div",{className:"singer_name"},l.a.createElement("span",null,t.singer_name)))}))},n.state={imgArr:[]},n}return Object(o.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.setState({imgArr:new Array(this.props.singerStore.singerlist.length).fill(p.a)})}},{key:"render",value:function(){return this.singerList(this.props.singerStore)}}]),e}(c.Component),A=n(16),d=n(41),h=function(t){function e(){var t,n;Object(r.a)(this,e);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(n=Object(a.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).Singerdisplay=function(t){return t.flag?l.a.createElement(d.a,{top:"5.7rem",bottom:n.props.playerStore.smallPlayer?"10vh":0,scrollName:"singerListScroll"},l.a.createElement(f,{singerDetailsEmptyAction:n.props.singerDetailsEmptyAction,history:n.props.history,singerDetailsAction:n.props.singerDetailsAction,singerStore:t})):l.a.createElement(A.a,null)},n}return Object(o.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.singerAction()}},{key:"render",value:function(){var t=this.props.singerStore;return this.Singerdisplay(t)}}]),e}(c.Component);e.default=Object(g.b)(function(t){return{scrollStore:t.scrollStore,singerStore:t.singerStore,playerStore:t.playerStore}},{singerAction:u.a,singerDetailsAction:u.b,singerDetailsEmptyAction:u.c})(h)}}]);
//# sourceMappingURL=2.1c0966c2.chunk.js.map