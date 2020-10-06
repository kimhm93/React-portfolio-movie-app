(this["webpackJsonpportfolio-movie-app"]=this["webpackJsonpportfolio-movie-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(5),o=a.n(i),c=(a(15),a(1)),s=a.n(c),l=a(2),m=a(3),u=a(6),_=a(7),v=a(9),f=a(8);a(17);function d(){var e=document.querySelector(".nav__movie__input");"visible"===e.style.visibility?(e.style.width="0px",e.style.visibility="hidden"):(e.style.width="180px",e.style.visibility="visible")}var h=function(e){var t=e.handleInputSearchChange,a=e.getMovies,i=Object(n.useState)(""),o=Object(l.a)(i,2),c=o[0],s=o[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){t(c)}),300);return function(){return clearTimeout(e)}}),[t,c]),r.a.createElement("header",{className:"Movie__header"},r.a.createElement("nav",{className:"Movie__nav"},r.a.createElement("ul",{className:"nav__items"},r.a.createElement("li",{className:"nav__item__home",onClick:function(){return function(e){e()}(a)}},"HOME")),r.a.createElement("ul",{className:"nav__items"},r.a.createElement("li",{className:"nav__movie__search"},r.a.createElement("input",{className:"nav__movie__input",type:"text",placeholder:"\uc81c\ubaa9 \uac80\uc0c9",visibility:"hidden",onChange:function(e){return s(e.target.value)}}),r.a.createElement("i",{className:"fas fa-search ",onClick:d},r.a.createElement("span",null,"\uac80\uc0c9"))))))};a(18);function g(e){return e.movies.map((function(e){return r.a.createElement("article",{className:"Search__movie__item",key:e.id,onMouseEnter:function(e){return function(e){var t=e.currentTarget,a=t.querySelector(".Search__movie__poster"),n=t.querySelector(".Search__movie__detail");a.style.transform="scale(1.05)",a.style.opacity="0.5",n.style.visibility="visible"}(e)},onMouseLeave:function(e){return function(e){var t=e.currentTarget,a=t.querySelector(".Search__movie__poster"),n=t.querySelector(".Search__movie__detail");a.style.transform="scale(1)",a.style.opacity="1",n.style.visibility="hidden"}(e)}},r.a.createElement("img",{className:"Search__movie__poster",src:e.medium_cover_image,alt:e.title}),r.a.createElement("div",{className:"Search__movie__detail"},r.a.createElement("span",null,"\ucd9c\uc2dc\ub144\ub3c4 : ",e.year," \ub144"),r.a.createElement("span",null,"\ud3c9\uc810 : ",e.rating),r.a.createElement("span",null,"\ub7f0\ud0c0\uc784 : ",e.runtime," \ubd84"),r.a.createElement("a",{href:"https://www.youtube.com/watch?v="+e.yt_trailer_code,target:"_blink"},r.a.createElement("i",{className:"fas fa-video fa-2x"}))),r.a.createElement("span",{className:"Search__movie__title"},e.title))}))}function y(e){var t=e.movies,a=e.keyword;return r.a.createElement("section",{className:"Search__movie__container"},r.a.createElement("span",{className:"Search__keyword"},'"',a,'"\uc758 \uac80\uc0c9 \uacb0\uacfc'),r.a.createElement(g,{movies:t}))}function b(e){var t=e.keyword;return r.a.createElement("section",{className:"Search__movie__notFond"},r.a.createElement("span",{className:"Search__keyword"},'"',t,'"\uc758 \uac80\uc0c9 \uacb0\uacfc'),r.a.createElement("h1",{className:"notFound__text"},"\ucc3e\uc73c\uc2dc\ub294 \uc601\ud654\uac00 \uc5c6\uc5b4\uc694"))}var p=function(e){var t=e.searchMovies,a=e.keyword;return t?r.a.createElement(y,{movies:t,keyword:a}):r.a.createElement(b,{keyword:a})};a(19);function E(e){var t="";switch(e){case"rating":t="\ud604\uc7ac \ud3c9\uc810\uc774 \uac00\uc7a5 \uc88b\uc740 \uc601\ud654!";break;case"download":t="\uac00\uc7a5 \ub9ce\uc774 \ub2e4\uc6b4\ub85c\ub4dc\uc218\uac00 \ub9ce\uc740 \uc601\ud654!";break;case"like":t="\uc0ac\ub78c\ub4e4\uc774 \uc88b\uc544\ud558\ub294 \uba85\uc791 \uc601\ud654!";break;default:return}return t}function M(e){return e.slice(0,2).map((function(e){return e.title})).join(", ")}function k(e,t){return{background:"url('".concat(e,"'),\n    no-repeat linear-gradient(to bottom, white, rgb(20, 21, 23, 0.4))"),backgroundSize:"100% 100%",title:E("".concat(t))}}function N(e,t,a){var n,r=document.querySelector(".Movie__slider"),i=document.querySelector(".Movie__recommend__title"),o=document.querySelector(".Movie__titles"),c=Object.keys(t),s=Object.values(t),l=function(e){return e.substr(e.indexOf('"')+1,e.lastIndexOf('"')-5)}(r.style.background),m=e.findIndex((function(e){return e===l})),u=k(e[n=function(e,t,a){var n=0;return"left"===a?(n=e-1)<0?t-1:n:(n=e+1)===t?0:n}(m,e.length,a)]);r.classList.remove("fade-in"),r.style.background="".concat(u.background),r.style.backgroundSize="".concat(u.backgroundSize),i.textContent=E(c[n]),o.innerHTML="".concat(M(s[n])," \ub4f1 <br /> \uc9c0\uae08 \uac00\uc7a5 \ub9ce\uc774 \ubcf4\ub294 \uc791\ud488! "),r.offsetWidth,r.classList.add("fade-in")}var w=function(e){var t=e.movies,a=e.bg;return r.a.createElement("div",{className:"Movie__slider__container",onClick:function(e){return function(e,t,a){var n=e.target.className;switch(n){case"fas fa-chevron-left fa-3x":case"fas fa-chevron-right fa-3x":!function(e,t,a){var n=Object.values(a);/.fa-chevron-left/.test(e)?N(n,t,"left"):N(n,t,"right")}(n,t,a)}}(e,t,a)}},r.a.createElement("section",{className:"Movie__slider fade-in",style:k(a.rating)},r.a.createElement("article",{className:"Movie__sliderItem"},r.a.createElement("h1",{className:"Movie__recommend__title"},E("rating")),r.a.createElement("span",{className:"Movie__titles fade-in"},M(t.rating)," \ub4f1 ",r.a.createElement("br",null)," \uc9c0\uae08 \uac00\uc7a5 \ub9ce\uc774 \ubcf4\ub294 \uc791\ud488!"))),r.a.createElement("i",{className:"fas fa-chevron-left fa-3x"}),r.a.createElement("i",{className:"fas fa-chevron-right fa-3x"}))};a(20);function x(e){var t="";switch(e.title){case"rating":t="\ud3c9\uc810\uc21c \uc778\uae30 \uc601\ud654 \ub9ac\uc2a4\ud2b8";break;case"download":t="\ub2e4\uc6b4\ub85c\ub4dc \ud69f\uc218 \ub192\uc740 \uc601\ud654 \ub9ac\uc2a4\ud2b8";break;case"like":t="\uc88b\uc544\uc694\uac00 \ub9ce\uc740 \uc601\ud654 \ub9ac\uc2a4\ud2b8";break;default:return}return r.a.createElement("span",{className:"Movie__list__title"},t)}function S(e){var t=e.movies,a=[],n=0;for(var i in t)n=253*t[i].length,a.push(r.a.createElement("section",{className:"Movie__box",key:i},r.a.createElement("article",{className:"Movie__box__list"},r.a.createElement(x,{title:i}),r.a.createElement("div",{className:"Movie__box__slide"},r.a.createElement("div",{className:"Movie__box__items",style:{width:"".concat(n,"px")}},r.a.createElement(C,{movieList:t[i]})))),r.a.createElement("div",{className:"Movie__box__arrow left",onClick:function(e){return j(e,"left")}},r.a.createElement("i",{className:"fas fa-chevron-left fa-3x"})),r.a.createElement("div",{className:"Movie__box__arrow right",onClick:function(e){return j(e,"right")}},r.a.createElement("i",{className:"fas fa-chevron-right fa-3x"}))));return a}function C(e){return e.movieList.map((function(e){return r.a.createElement("div",{className:"Movie__box__item",key:e.id,onMouseEnter:function(e){return function(e){var t=e.currentTarget,a=t.querySelector(".Movie__box__poster"),n=t.querySelector(".Movie__box__detail");a.style.transform="scale(1.05)",a.style.opacity="0.5",n.style.visibility="visible"}(e)},onMouseLeave:function(e){return function(e){var t=e.currentTarget,a=t.querySelector(".Movie__box__poster"),n=t.querySelector(".Movie__box__detail");a.style.transform="scale(1)",a.style.opacity="1",n.style.visibility="hidden"}(e)}},r.a.createElement("img",{className:"Movie__box__poster",src:e.medium_cover_image,alt:e.title}),r.a.createElement("div",{className:"Movie__box__detail"},r.a.createElement("span",null,"\ucd9c\uc2dc\ub144\ub3c4 : ",e.year," \ub144"),r.a.createElement("span",null,"\ud3c9\uc810 : ",e.rating),r.a.createElement("span",null,"\ub7f0\ud0c0\uc784 : ",e.runtime," \ubd84"),r.a.createElement("a",{href:"https://www.youtube.com/watch?v="+e.yt_trailer_code,target:"_blink"},r.a.createElement("i",{className:"fas fa-video fa-2x"}))),r.a.createElement("span",{className:"Movie__box__title"},e.title))}))}function j(e,t){var a=e.currentTarget.parentNode.firstChild,n=e.currentTarget.parentNode,r=a.querySelector(".Movie__box__items"),i=n.querySelector(".Movie__box__arrow.left"),o=n.querySelector(".Movie__box__arrow.right"),c=a.querySelector(".Movie__box__items").clientWidth,s=r.style.transform;if(s=parseInt(s.replace(/[^0-9]/g,"")),i.style.visibility="visible","right"===t){var l=s+1020;r.style.transform=s>0?"translateX(-".concat(l,"px)"):"translateX(-1020px)",l>=c-1020?o.style.visibility="hidden":i.style.visibility="visible"}else{var m=s-1020;r.style.transform="translateX(-".concat(m,"px)"),0===m?i.style.visibility="hidden":o.style.visibility="visible"}}var q=function(e){var t=e.movies;return r.a.createElement(S,{movies:t})};a(21);var O=function(){return r.a.createElement("footer",{className:"Movie__footer"},r.a.createElement("div",{className:"Movie__footer__container"},r.a.createElement("div",{className:"Footer__Title"},r.a.createElement("span",null,"Contact")),r.a.createElement("div",{className:"Footer__Email"},r.a.createElement("span",null,"Email"),r.a.createElement("a",{href:"mailto:kimhm260@gmail.com?subject=feedback"},r.a.createElement("i",{class:"far fa-envelope fa-2x"}))),r.a.createElement("div",{className:"Footer__Github"},r.a.createElement("span",null,"Github"),r.a.createElement("a",{href:"https://github.com/kimhm93/React-portfolio-movie-app",target:"_blink"},r.a.createElement("i",{class:"fab fa-github-alt fa-2x"}))),r.a.createElement("div",{className:"Footer__Blog"},r.a.createElement("span",null,"Blog"),r.a.createElement("a",{href:"https://mongtak.tistory.com/",target:"_blink"},r.a.createElement("i",{class:"fas fa-blog fa-2x"}))),r.a.createElement("div",{className:"Footer__Info"},"KimHakMin Portfolio")))};var I=function(e){var t=e.movies,a=e.bg,i=e.handleInputSearchChange,o=e.searchMovies,c=e.movieCount,s=e.keyword,l=e.getMovies;return r.a.createElement(n.Fragment,null,r.a.createElement(h,{handleInputSearchChange:i,getMovies:l,keyword:s}),void 0!==c?r.a.createElement(p,{searchMovies:o,keyword:s}):r.a.createElement(n.Fragment,null,r.a.createElement(w,{movies:t,bg:a}),r.a.createElement(q,{movies:t})),r.a.createElement(O,null))},T=(a(22),function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={},e._loadingPage=function(){return r.a.createElement("section",{className:"Movie__loading"},r.a.createElement("i",{className:"fas fa-spinner fa-3x"}),r.a.createElement("h2",null,"loading"))},e._renderMovies=function(){return r.a.createElement(I,{movies:e.state.movies,bg:e.state.bg,searchMovies:e.state.searchMovies,movieCount:e.state.movieCount,handleInputSearchChange:e._handleInputSearchChange,getMovies:e._getMovies,keyword:e.state.keyword})},e._getMovies=Object(m.a)(s.a.mark((function t(){var a,n,r,i,o,c,m,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e._getMoviePromise("rating"),n=e._getMoviePromise("download_count"),r=e._getMoviePromise("like_count"),t.next=5,Promise.all([a,n,r]);case 5:i=t.sent,o=Object(l.a)(i,3),c=o[0],m=o[1],u=o[2],e.setState({movies:{rating:c,download:m,like:u},bg:{rating:c[0].background_image,download:m[0].background_image,like:u[0].background_image},movieCount:void 0});case 11:case"end":return t.stop()}}),t)}))),e._getMoviePromise=function(e){return new Promise((function(t,a){fetch("https://yts.mx/api/v2/list_movies.json?sort_by=".concat(e)).then((function(e){return e.json()})).then((function(e){return t(e.data.movies)})).catch((function(e){return a(console.log(e))}))}))},e._getSearchMovie=function(e){return fetch("https://yts.mx/api/v2/list_movies.json?query_term=".concat(e)).then((function(e){return e.json()})).then((function(e){return{searchMovies:e.data.movies,movieCount:e.data.movie_count}})).catch((function(e){return console.log(e)}))},e._handleInputSearchChange=function(){var t=Object(m.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(/\s/g.test(a)||!a){t.next=8;break}return t.next=4,e._getSearchMovie(a);case 4:n=t.sent,e.setState({searchMovies:n.searchMovies,movieCount:n.movieCount,keyword:a}),t.next=9;break;case 8:e._getMovies();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(_.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:e?"App":"App--loading"},e?this._renderMovies():this._loadingPage())}},{key:"componentDidMount",value:function(){this._getMovies()}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.4aa223c4.chunk.js.map