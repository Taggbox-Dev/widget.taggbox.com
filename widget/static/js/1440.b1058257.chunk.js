"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[1440],{64442:(e,t,i)=>{i.d(t,{Z:()=>u});var s=i(47313),o=i(2406),a=i(20510),n=i.n(a),r=i(43635),l=i(35179),d=(i(98511),i(46417));const c=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class u extends s.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:i}=await(0,o.Ad)(t.postFileNew);this.setState({paddingBottom:100*i/e})}catch(i){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew,isVisible:!1},this.videoRef=s.createRef(),this.observer=null}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:1==this.props.size?null:(l.ZQ,this.props.size)}):this.onMediaLoad();try{this.observer=new IntersectionObserver((e=>{let[t]=e;this.setState({isVisible:t.isIntersecting})}),{threshold:.5}),this.videoRef.current&&this.observer.observe(this.videoRef.current)}catch(i){this.setState({isVisible:!0})}}componentWillUnmount(){this.observer&&this.videoRef.current&&this.observer.unobserve(this.videoRef.current)}render(){const{VideoClass:e,data:t,wallID:i,isCover:s,controls:o,autoPlay:a,handleVideoEnded:u,muted:p}=this.props,{paddingBottom:h,videoLoaded:m,isVisible:_}=this.state,g={paddingBottom:"".concat(h,"%")},b=t.mediaClip&&String(t.mediaClip).length>0?t.mediaClip:t.mediaUrl;return(0,d.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:g,ref:this.videoRef,children:(0,d.jsx)(n(),{className:"".concat(e," video").concat(t.id),url:c(b,t.network.id),"data-type":"video","data-network":t.network.id,"data-link":t.link,"data-wall-id":i,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto","data-height":"".concat(document.querySelector(".ts_rt_post_in")?"".concat(document.querySelector(".ts_rt_post_in").clientHeight," px"):"100%")}},file:{attributes:{preload:"metadata"}}},loop:!0,onError:e=>{t.stories&&0!=t.stories||(0,r.ib)(e,t.id)},autoPlay:a,muted:p,volume:a?1:0,playsinline:!0,onReady:e=>{l.ig?this.setVideoLoaded(!1):this.setVideoLoaded(!0)},playing:l.ig?_:a,height:"100%",width:"100%",controls:o||!1,style:{backgroundImage:"url(".concat(t.postFileNew,")"),backgroundSize:s?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:u||null})})}}},25810:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r});var s=i(47313),o=i(35179),a=i(46417);const n=s.lazy((()=>i.e(5867).then(i.bind(i,95867))));class r extends s.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:i,isDefault:r,Personalization:l}=this.props,d=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),c=o.ZQ&&36==e.id?"tagembed":e.icon;return d?(0,a.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(c.replace(/fa-/g,"")),children:(0,a.jsx)("div",{})}):(0,a.jsxs)(s.Suspense,{fallback:(0,a.jsx)(a.Fragment,{}),children:[" ",(0,a.jsx)(n,{network:e,networkClass:t})]})}}},11502:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(17739),o=i(46417);const a=e=>{let{ThemeRule:t,btnClass:i}=e;const a={fontFamily:t.css_font};return(0,o.jsx)("div",{className:"tb_shop_btn_wrap ".concat(i),children:(0,o.jsx)("div",{className:"tb_shop_btn".concat(t.postHover||(0,s.mD)(4)||(0,s.mD)(55)?" tb_shop_btn_light":" tb_shop_btn_dark"),style:a,children:t.shoppingText})})}},24235:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(17739),o=i(46417);const a=e=>{let{count:t}=e;return(0,o.jsxs)("div",{className:"tb_r_view",children:[(0,o.jsx)("div",{className:"tb__icon tb-eye",children:(0,o.jsx)("div",{})}),(0,s.sy)(t)]})}},99154:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var s=i(47313),o=i(34862),a=i(43411),n=i(97529),r=i(47330),l=(i(6940),i(65192),i(59606),i(98907),i(84261)),d=i(64442),c=i(81349),u=i(35179),p=i(46417);const h=e=>{let{itemData:t,wallID:i,wall:s,ownerId:o,isVisible:a}=e;const n=!(3!==t.type&&5!==t.type||!a||1!=s.ThemeRule.autoPlay&&u.ig);return(0,p.jsxs)("div",{className:"tb_rt_media_wrap",children:[(0,p.jsx)(c.Z,{itemData:t,IconClass:"tb_rt_media_icon",show:!0,hideVideo:!0}),n?(0,p.jsx)(d.Z,{VideoClass:"tb_rt_video",data:t,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:o,size:178,isCover:!0,muted:!0,autoPlay:!0}):(0,p.jsx)(l.default,{ImageClass:"tb_rt_image",data:t,wallID:i,themeID:s.Personalization.widgetTheme,ownerId:o,size:178})]})};var m=i(17739),_=i(25810),g=i(11502),b=i(24235);class v extends s.PureComponent{constructor(e){super(e),this.mediaHeight=s.createRef()}componentDidMount(){u.nX&&(0,m.YN)(this.mediaHeight)}render(){const{itemData:e,itemIndex:t,wallID:i,ownerId:s,wall:o,isVisible:a,clickToShowPopUp:n,ThemeRule:r,personalization:l}=this.props,d=!!(e.ugc_products&&e.ugc_products.length>0),c={backgroundColor:r.cardColor},m=!(!u.ig||!d||r.hideContent),v=!(!u.ig||!d||0!==e.hotspot),w=!!(u.ig&&e.hotspot&&d),f=0==r.postHover&&u.ig?"light":"dark",y=3===e.type||5===e.type;return(0,p.jsx)("div",{"item-id":e.id,id:"tb-hc-post-".concat(e.id),className:"tb_rt_post_wrapper",ref:this.mediaHeight,"post-id":e.referenceId?e.referenceId:e.id,"feed-id":e.feedId,style:{padding:o.Personalization.padding/2},"tb-product":v?1:w?2:0,children:(0,p.jsx)("div",{className:"tb_rt_post_in tb_icon_animate ".concat(u.ig?"":"tb_rt_post_in_animate"),style:c,onClick:n(t,e),children:(0,p.jsxs)("div",{className:"tb_rt_post_media_wrapp",children:[y&&1==r.showReelsView&&(null===e||void 0===e?void 0:e.views)>0?(0,p.jsx)(b.Z,{count:null===e||void 0===e?void 0:e.views}):null,(0,p.jsx)(h,{itemData:e,wallID:i,wall:o,ownerId:s,preload:0==t,isVisible:a}),u.ig?null:(0,p.jsx)("div",{className:"tb_rt_play_ico",children:(0,p.jsx)("div",{className:"tb__icon tb-play",children:(0,p.jsx)("div",{})})}),(0,p.jsxs)("div",{className:"tb_rt_post_details",children:[(0,p.jsx)("div",{className:"tb_rt_social_",children:(0,p.jsx)(_.default,{networkClass:"tb_rt_social_ico_",network:e.network,ThemeRule:r,isDefault:1===r.iconType,Personalization:l})}),m?(0,p.jsx)(g.Z,{ThemeRule:r,btnClass:"tb_rt_btn_wrap"}):null]}),(0,p.jsx)("div",{className:"tb_rt_post_overlay tb_rt_post_overlay-".concat(f),children:(0,p.jsx)("div",{})})]})})})}}var w=i(43635);class f extends s.Component{constructor(e){super(e),this.requestData=e=>{const{appendData:t,wall:i,preRender:s,hasMoreData:o,getDataNextSteps:a,loaderData:n}=this.props;e.progress>.8&&o&&!n.isShowMoreLoading&&a(i.Wall.id,Math.floor(Date.now()/1e3),i.ThemeRule.numberOfPosts,t.networkID,t.after,s,t.heightEvent)},this.reScrolled=()=>{setTimeout((()=>{let e=document.querySelector(".splide__list"),t=document.querySelector(".splide__slide").offsetWidth;const i=document.querySelectorAll(".splide__slide.is-visible").length,s=document.querySelector(".splide__slide.is-active.is-visible").getAttribute("aria-label").substring(0,2),o=Number(s)+(i-1)+i;o>0?(e.style.transition="0s ease",e.style.transform="translateX(-".concat(o*t,"px)")):e.style.transform="translateX(0px)"}),200)},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100);const{postData:e}=this.props;if(e&&1==e.length){let e=document.querySelector(".tb_rt_arrow_left__"),t=document.querySelector(".tb_rt_arrow_right__");e&&t&&(document.querySelector(".tb_rt_arrow_left__").style="display:none",document.querySelector(".tb_rt_arrow_right__").style="display:none")}}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:i,onClickPopUpSlider:s,parentID:o}=this.props;if(e&&Object.values(e)[5].length>0){Object.values(e)[5].map(((e,a)=>{if(e.classList){const a=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var n=a[0];String(a[0]).includes("tb_")&&(n=String(a[0]).replace("tb_",""));const r=t.findIndex((e=>e==n));let l=document.querySelectorAll(".tb_rt_post_container #".concat(e.id));for(let e=0;e<l.length;e++){let t=l[e],a=t.getAttribute("p_id");String(o)===String(a)&&t.addEventListener("click",(e=>{e.preventDefault();const t=i[n];s(r,t)}))}}}))}}render(){const{postData:e,completeDataObject:t,wall:i,clickToShowPopUp:s,hasMoreData:a,parentID:l,keyRender:d}=this.props,c=l,h=i.ThemeRule.numberOfCoumn,m=i.ThemeRule.mobileColumn,_=i.ThemeRule.slidePost,g=i.ThemeRule.slideDuration,b=1===i.Personalization.trimcontent;return(0,p.jsx)(p.Fragment,{children:""!=l?(0,p.jsx)("div",{className:"tb_rt_post_container",ref:this.sliderHeight,children:(0,p.jsx)(n.tq,{ref:e=>this.inputRefs[c]=e,style:{width:"100%"},onScroll:e=>this.requestData(e),onSlideChange:e=>this.requestData(e),onAutoplay:e=>this.requestData(e),autoHeight:!0,speed:700,edgeSwipeDetection:!0,slidesPerView:"auto",touchRatio:2,cssMode:o.tq,passiveListeners:!0,height:"250px",freeMode:{enabled:!0,sticky:!1,momentumBounceRatio:2,momentumVelocityRatio:3},autoplay:!(!u.ig&&!u.Jx)&&{delay:1===_?1e3*g:99e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!a,breakpoints:{0:{slidesPerView:0==m?1.6:parseInt(m)+.6},480:{slidesPerView:0==m?1.6:parseInt(m)+.6},575:{slidesPerView:0==m?2.6:parseInt(m)+.6},767:{slidesPerView:0==h?3.6:parseInt(h)+.6},1024:{slidesPerView:0==h?5.6:parseInt(h)+.6},1400:{slidesPerView:0==h?6.6:parseInt(h)+.6},1600:{slidesPerView:0==h?7.6:parseInt(h)+.6}},mousewheel:{forceToAxis:!0,sensitivity:2},watchSlidesProgress:!0,modules:[r.pt,r.Gk,r.Rv],className:"tb_rt_post_slider ".concat(b?"tb_rt_fixed_height":""),children:(0,p.jsx)(p.Fragment,{children:e&&e.length>0&&e.map(((e,o)=>{const a=t[e];return u.ig||1!=a.type?(0,p.jsx)(n.o5,{style:{margin:0,padding:0},p_id:l,className:"tb_".concat(a.id),children:e=>{let{isVisible:t}=e;return(0,p.jsx)(v,{isVisible:t,ownerId:i.Wall.owner,itemData:a,itemIndex:o,personalization:i.Personalization,ThemeRule:i.ThemeRule,wallID:i.Wall.id,clickToShowPopUp:s,wall:i})}},o):null}))})},d)}):null})}}const y=(0,s.memo)((0,a.$j)((e=>({loaderData:e.loaderData})),(e=>({getDataNextSteps:(t,i,s,o,a,n,r,l)=>e((0,w.Sx)(t,i,s,o,a,n,r,l))})))(f))},2406:(e,t,i)=>{t.Ad=void 0;var s=i(84228);var o=i(65786);Object.defineProperty(t,"Ad",{enumerable:!0,get:function(){return o.getImageSize}});var a=i(22537)},84228:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorMessage=void 0,t.ErrorMessage={WINDOW_IS_NOT_DEFINED:"Window is not defined",URL_IS_NOT_DEFINED:"Url is not defined",TIMEOUT:"Timeout"}},65786:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImageSize=void 0;const s=i(84228);t.getImageSize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,o)=>{if("undefined"===typeof window)return o(s.ErrorMessage.WINDOW_IS_NOT_DEFINED);if(!e)return o(s.ErrorMessage.URL_IS_NOT_DEFINED);let a=null;const n=new Image;n.addEventListener("load",(()=>{a&&window.clearTimeout(a),i({width:n.naturalWidth,height:n.naturalHeight})})),n.addEventListener("error",(e=>{a&&window.clearTimeout(a),o("".concat(e.type,": ").concat(e.message))})),n.src=e,t.timeout&&(a=window.setTimeout((()=>o(s.ErrorMessage.TIMEOUT)),t.timeout))}))}},22537:function(e,t,i){var s=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))((function(o,a){function n(e){try{l(s.next(e))}catch(t){a(t)}}function r(e){try{l(s.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,r)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.useImageSize=void 0;const o=i(47313),a=i(65786);t.useImageSize=(e,t)=>{const[i,n]=(0,o.useState)(null),[r,l]=(0,o.useState)(!1),[d,c]=(0,o.useState)(null);return(0,o.useEffect)((()=>{s(void 0,void 0,void 0,(function*(){l(!0),n(null);try{const{width:i,height:s}=yield(0,a.getImageSize)(e,t);n({width:i,height:s})}catch(d){c(d.toString())}finally{l(!1)}}))}),[e,t]),[i,{loading:r,error:d}]}},65192:()=>{},59606:()=>{},98907:()=>{}}]);