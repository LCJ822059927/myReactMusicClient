(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,n){"use strict";t.a=function(e){for(var t=e.slice(1).split("&"),n=[],a=0;a<t.length;a++)n.push(t[a].split("="));return n}},146:function(e,t,n){"use strict";var a=n(40);n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return l});var i=function(){return function(e){return Object(a.a)("https://u.y.qq.com/cgi-bin/musicu.fcg?",{g_tk:1123594732,loginUin:822059927,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,data:{comm:{ct:24,cv:1e4},singerList:{module:"Music.SingerListServer",method:"get_singer_list",param:{area:-100,sex:-100,genre:-100,index:-100,sin:0,cur_page:1}}}},{param:"callback"}).then(function(t){0===t.code&&e({type:"singerList",data:t.singerList.data})})}},r=0,s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return 1===r?null:(r=1,function(e,t){console.log(t);var n={g_tk:1123594732,loginUin:822059927,hostUin:0,format:"jsonp",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0,singermid:e,order:"listen",begin:t,num:30,songstatus:1};return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?",n,{param:"jsonpCallback"})}(e,t).then(function(e){0===e.code&&(r=0,n({type:"singerDetails",data:e.data}))}))}},l=function(){return function(e){return e({type:"singerDetailsEmpty"})}}},149:function(e,t,n){"use strict";var a=n(3),i=n(4),r=n(6),s=n(5),l=n(7),c=n(0),o=n.n(c),m=(n(150),n(152)),u=n.n(m),g=n(153),d=n.n(g),p=n(19),f=n(12),_=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).songAdd=function(e,t,a,i,r,s,l,c,o){e.stopPropagation(),n.props.songAddAction(t,a,i,r,s,l,c,o)},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.playerStore,n=t.songList,a=t.currentPlaySong,i=t.playing,r=this.props,s=r.songmid,l=r.albummid,m=r.interval,g=r.singer_name,p=r.songname;return o.a.createElement(c.Fragment,null,o.a.createElement("img",{onClick:function(t){return e.songAdd(t,n,a,i,s,l,m,g,p)},className:"singer_details_add",src:u.a,alt:""}),o.a.createElement("img",{className:"singer_details_love",src:d.a,alt:""}))}}]),t}(c.Component);t.a=Object(p.b)(function(e){return{playerStore:e.playerStore}},{songAddAction:f.k})(_)},150:function(e,t,n){},152:function(e,t,n){e.exports=n.p+"static/media/add.5e7d1ca0.svg"},153:function(e,t,n){e.exports=n.p+"static/media/love.e0432819.svg"},192:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(4),r=n(6),s=n(5),l=n(7),c=n(0),o=n.n(c),m=n(19),u=n(16),g=(n(192),n(12)),d=n(146),p=n(26),f=n(15),_=n.n(f),h=n(149),b=n(41),v=n(144),y=n(20),E=n.n(y),D=n(43),S=n.n(D),A=n(31),j=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).singerDetailsBack=function(){window.history.back()},n.Singerdisplay=function(e){return e.flag?o.a.createElement("div",{className:_()("singer_details_container")},o.a.createElement("div",{className:"singer_details_back"},o.a.createElement("img",{onClick:n.singerDetailsBack,src:S.a,alt:""})),o.a.createElement("div",{className:"singer_details_info"},o.a.createElement("div",{className:"singer_details_left"},o.a.createElement("img",{src:"http://y.gtimg.cn/music/photo_new/T001R150x150M000".concat(e.singer_mid,".jpg?max_age=2592000"),alt:" "})),o.a.createElement("div",{className:"singer_details_right"},o.a.createElement("div",{className:"singer_details_name"},e.singer_name),o.a.createElement("div",{className:"singer_details_album"},"\u5355\u66f2\uff1a",e.total))),o.a.createElement("div",{ref:"buttonAndTitle",className:"singer_all_song_play"},o.a.createElement("button",{onClick:function(){return n.props.playAllSongAction(e.list,"musicData")},className:"play_btn"},o.a.createElement("span",null,"\u64ad\u653e\u5168\u90e8"),o.a.createElement("img",{style:{width:20},src:E.a,alt:" "})),o.a.createElement("ul",{className:"singer_details_song_title"},o.a.createElement("li",null,"\u6b4c\u66f2"),o.a.createElement("li",null,"\u4e13\u8f91"),o.a.createElement("li",null,"\u65f6\u957f"),o.a.createElement("li",null,"\u6dfb\u52a0/\u6536\u85cf"))),o.a.createElement("div",{className:"singer_details_song"},o.a.createElement(b.a,{buttonAndTitle:n.refs.buttonAndTitle,onSingerDetailsScroll:!0,ref:"singerDetailsScroll",bottom:n.props.playerStore.smallPlayer?"10vh":0,scrollName:"singerDetailsScroll",songlength:e.list.length,singerDetailsAction:n.props.singerDetailsAction,totalSong:e.total,singerMid:e.singer_mid,changeListLoadingAction:n.props.changeListLoadingAction,top:"305px"},e.list.map(function(t){return o.a.createElement("ul",{onClick:function(){return n.props.songPlayAction(n.props.playerStore.songList,t.musicData.songmid,t.musicData.albummid,t.musicData.interval,e.singer_name,t.musicData.songname)},key:Math.random(),className:"singer_details_song_item"},o.a.createElement("li",null,t.musicData.songname),o.a.createElement("li",null,t.musicData.albumname),o.a.createElement("li",null,Object(p.b)(t.musicData.interval)),o.a.createElement("li",{className:"singer_details_song_item_tools"},o.a.createElement(h.a,{songmid:t.musicData.songmid,albummid:t.musicData.albummid,interval:t.musicData.interval,singer_name:e.singer_name,songname:t.musicData.songname})))}))),o.a.createElement(A.a,null)):o.a.createElement(u.a,null)},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.singerDetailsAction(Object(v.a)(this.props.history.location.search)[0][1])}},{key:"render",value:function(){var e=this.props.singerDetailsStore;return this.Singerdisplay(e)}}]),t}(c.Component);t.default=Object(m.b)(function(e){return{singerDetailsStore:e.singerDetailsStore,playerStore:e.playerStore,scrollStore:e.scrollStore,listLoadingStore:e.listLoadingStore}},{songPlayAction:g.m,playAllSongAction:g.e,singerDetailsAction:d.b})(j)}}]);
//# sourceMappingURL=6.feba01b2.chunk.js.map