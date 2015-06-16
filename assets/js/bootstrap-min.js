if(function(t,e,i){t.fn.backstretch=function(o,n){return(o===i||0===o.length)&&t.error("No images were supplied for Backstretch"),0===t(e).scrollTop()&&e.scrollTo(0,0),this.each(function(){var e=t(this),i=e.data("backstretch");if(i){if("string"==typeof o&&"function"==typeof i[o])return void i[o](n);n=t.extend(i.options,n),i.destroy(!0)}i=new s(this,o,n),e.data("backstretch",i)})},t.backstretch=function(e,i){return t("body").backstretch(e,i).data("backstretch")},t.expr[":"].backstretch=function(e){return t(e).data("backstretch")!==i},t.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var o={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},n={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},s=function(i,n,s){this.options=t.extend({},t.fn.backstretch.defaults,s||{}),this.images=t.isArray(n)?n:[n],t.each(this.images,function(){t("<img />")[0].src=this}),this.isBody=i===document.body,this.$container=t(i),this.$root=this.isBody?t(a?e:document):this.$container,i=this.$container.children(".backstretch").first(),this.$wrap=i.length?i:t('<div class="backstretch"></div>').css(o).appendTo(this.$container),this.isBody||(i=this.$container.css("position"),n=this.$container.css("zIndex"),this.$container.css({position:"static"===i?"relative":i,zIndex:"auto"===n?0:n,background:"none"}),this.$wrap.css({zIndex:-999998})),this.$wrap.css({position:this.isBody&&a?"fixed":"absolute"}),this.index=0,this.show(this.index),t(e).on("resize.backstretch",t.proxy(this.resize,this)).on("orientationchange.backstretch",t.proxy(function(){this.isBody&&0===e.pageYOffset&&(e.scrollTo(0,1),this.resize())},this))};s.prototype={resize:function(){try{var t={left:0,top:0},i=this.isBody?this.$root.width():this.$root.innerWidth(),o=i,n=this.isBody?e.innerHeight?e.innerHeight:this.$root.height():this.$root.innerHeight(),s=o/this.$img.data("ratio"),a;s>=n?(a=(s-n)/2,this.options.centeredY&&(t.top="-"+a+"px")):(s=n,o=s*this.$img.data("ratio"),a=(o-i)/2,this.options.centeredX&&(t.left="-"+a+"px")),this.$wrap.css({width:i,height:n}).find("img:not(.deleteable)").css({width:o,height:s}).css(t)}catch(r){}return this},show:function(e){if(!(Math.abs(e)>this.images.length-1)){var i=this,o=i.$wrap.find("img").addClass("deleteable"),s={relatedTarget:i.$container[0]};return i.$container.trigger(t.Event("backstretch.before",s),[i,e]),this.index=e,clearInterval(i.interval),i.$img=t("<img />").css(n).bind("load",function(n){var a=this.width||t(n.target).width();n=this.height||t(n.target).height(),t(this).data("ratio",a/n),t(this).fadeIn(i.options.speed||i.options.fade,function(){o.remove(),i.paused||i.cycle(),t(["after","show"]).each(function(){i.$container.trigger(t.Event("backstretch."+this,s),[i,e])})}),i.resize()}).appendTo(i.$wrap),i.$img.attr("src",i.images[e]),i}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return 1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(t.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(i){t(e).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),i||this.$wrap.remove(),this.$container.removeData("backstretch")}};var a,r=navigator.userAgent,l=navigator.platform,h=r.match(/AppleWebKit\/([0-9]+)/),h=!!h&&h[1],d=r.match(/Fennec\/([0-9]+)/),d=!!d&&d[1],c=r.match(/Opera Mobi\/([0-9]+)/),p=!!c&&c[1],f=r.match(/MSIE ([0-9]+)/),f=!!f&&f[1];a=!((-1<l.indexOf("iPhone")||-1<l.indexOf("iPad")||-1<l.indexOf("iPod"))&&h&&534>h||e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)||c&&7458>p||-1<r.indexOf("Android")&&h&&533>h||d&&6>d||"palmGetResource"in e&&h&&534>h||-1<r.indexOf("MeeGo")&&-1<r.indexOf("NokiaBrowser/8.5.0")||f&&6>=f)}(jQuery,window),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function($){"use strict";var t=$.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function($){"use strict";function t(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}$.fn.emulateTransitionEnd=function(t){var e=!1,i=this;$(this).one("bsTransitionEnd",function(){e=!0});var o=function(){e||$(i).trigger($.support.transition.end)};return setTimeout(o,t),this},$(function(){$.support.transition=t(),$.support.transition&&($.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(t){return $(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var e=$(this),o=e.data("bs.alert");o||e.data("bs.alert",o=new i(this)),"string"==typeof t&&o[t].call(e)})}var e='[data-dismiss="alert"]',i=function(t){$(t).on("click",e,this.close)};i.VERSION="3.3.4",i.TRANSITION_DURATION=150,i.prototype.close=function(t){function e(){s.detach().trigger("closed.bs.alert").remove()}var o=$(this),n=o.attr("data-target");n||(n=o.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,""));var s=$(n);t&&t.preventDefault(),s.length||(s=o.closest(".alert")),s.trigger(t=$.Event("close.bs.alert")),t.isDefaultPrevented()||(s.removeClass("in"),$.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",e).emulateTransitionEnd(i.TRANSITION_DURATION):e())};var o=$.fn.alert;$.fn.alert=t,$.fn.alert.Constructor=i,$.fn.alert.noConflict=function(){return $.fn.alert=o,this},$(document).on("click.bs.alert.data-api",e,i.prototype.close)}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.button"),n="object"==typeof t&&t;o||i.data("bs.button",o=new e(this,n)),"toggle"==t?o.toggle():t&&o.setState(t)})}var e=function(t,i){this.$element=$(t),this.options=$.extend({},e.DEFAULTS,i),this.isLoading=!1};e.VERSION="3.3.4",e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout($.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e))},this),0)},e.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));t&&this.$element.toggleClass("active")};var i=$.fn.button;$.fn.button=t,$.fn.button.Constructor=e,$.fn.button.noConflict=function(){return $.fn.button=i,this},$(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var i=$(e.target);i.hasClass("btn")||(i=i.closest(".btn")),t.call(i,"toggle"),e.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){$(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.carousel"),n=$.extend({},e.DEFAULTS,i.data(),"object"==typeof t&&t),s="string"==typeof t?t:n.slide;o||i.data("bs.carousel",o=new e(this,n)),"number"==typeof t?o.to(t):s?o[s]():n.interval&&o.pause().cycle()})}var e=function(t,e){this.$element=$(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",$.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",$.proxy(this.pause,this)).on("mouseleave.bs.carousel",$.proxy(this.cycle,this))};e.VERSION="3.3.4",e.TRANSITION_DURATION=600,e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},e.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},e.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval)),this},e.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},e.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e),o="prev"==t&&0===i||"next"==t&&i==this.$items.length-1;if(o&&!this.options.wrap)return e;var n="prev"==t?-1:1,s=(i+n)%this.$items.length;return this.$items.eq(s)},e.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},e.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&$.support.transition&&(this.$element.trigger($.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(t,i){var o=this.$element.find(".item.active"),n=i||this.getItemForDirection(t,o),s=this.interval,a="next"==t?"left":"right",r=this;if(n.hasClass("active"))return this.sliding=!1;var l=n[0],h=$.Event("slide.bs.carousel",{relatedTarget:l,direction:a});if(this.$element.trigger(h),!h.isDefaultPrevented()){if(this.sliding=!0,s&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var d=$(this.$indicators.children()[this.getItemIndex(n)]);d&&d.addClass("active")}var c=$.Event("slid.bs.carousel",{relatedTarget:l,direction:a});return $.support.transition&&this.$element.hasClass("slide")?(n.addClass(t),n[0].offsetWidth,o.addClass(a),n.addClass(a),o.one("bsTransitionEnd",function(){n.removeClass([t,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),r.sliding=!1,setTimeout(function(){r.$element.trigger(c)},0)}).emulateTransitionEnd(e.TRANSITION_DURATION)):(o.removeClass("active"),n.addClass("active"),this.sliding=!1,this.$element.trigger(c)),s&&this.cycle(),this}};var i=$.fn.carousel;$.fn.carousel=t,$.fn.carousel.Constructor=e,$.fn.carousel.noConflict=function(){return $.fn.carousel=i,this};var o=function(e){var i,o=$(this),n=$(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(n.hasClass("carousel")){var s=$.extend({},n.data(),o.data()),a=o.attr("data-slide-to");a&&(s.interval=!1),t.call(n,s),a&&n.data("bs.carousel").to(a),e.preventDefault()}};$(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),$(window).on("load",function(){$('[data-ride="carousel"]').each(function(){var e=$(this);t.call(e,e.data())})})}(jQuery),+function($){"use strict";function t(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return $(i)}function e(t){return this.each(function(){var e=$(this),o=e.data("bs.collapse"),n=$.extend({},i.DEFAULTS,e.data(),"object"==typeof t&&t);!o&&n.toggle&&/show|hide/.test(t)&&(n.toggle=!1),o||e.data("bs.collapse",o=new i(this,n)),"string"==typeof t&&o[t]()})}var i=function(t,e){this.$element=$(t),this.options=$.extend({},i.DEFAULTS,e),this.$trigger=$('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.4",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(o&&o.length&&(t=o.data("bs.collapse"),t&&t.transitioning))){var n=$.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){o&&o.length&&(e.call(o,"hide"),t||o.data("bs.collapse",null));var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!$.support.transition)return a.call(this);var r=$.camelCase(["scroll",s].join("-"));this.$element.one("bsTransitionEnd",$.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][r])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=$.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return $.support.transition?void this.$element[e](0).one("bsTransitionEnd",$.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION):o.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(e,i){var o=$(i);this.addAriaAndCollapsedClass(t(o),o)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var o=$.fn.collapse;$.fn.collapse=e,$.fn.collapse.Constructor=i,$.fn.collapse.noConflict=function(){return $.fn.collapse=o,this},$(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var o=$(this);o.attr("data-target")||i.preventDefault();var n=t(o),s=n.data("bs.collapse"),a=s?"toggle":o.data();e.call(n,a)})}(jQuery),+function($){"use strict";function t(t){t&&3===t.which||($(o).remove(),$(n).each(function(){var i=$(this),o=e(i),n={relatedTarget:this};o.hasClass("open")&&(o.trigger(t=$.Event("hide.bs.dropdown",n)),t.isDefaultPrevented()||(i.attr("aria-expanded","false"),o.removeClass("open").trigger("hidden.bs.dropdown",n)))}))}function e(t){var e=t.attr("data-target");e||(e=t.attr("href"),e=e&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i=e&&$(e);return i&&i.length?i:t.parent()}function i(t){return this.each(function(){var e=$(this),i=e.data("bs.dropdown");i||e.data("bs.dropdown",i=new s(this)),"string"==typeof t&&i[t].call(e)})}var o=".dropdown-backdrop",n='[data-toggle="dropdown"]',s=function(t){$(t).on("click.bs.dropdown",this.toggle)};s.VERSION="3.3.4",s.prototype.toggle=function(i){var o=$(this);if(!o.is(".disabled, :disabled")){var n=e(o),s=n.hasClass("open");if(t(),!s){"ontouchstart"in document.documentElement&&!n.closest(".navbar-nav").length&&$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click",t);var a={relatedTarget:this};if(n.trigger(i=$.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),n.toggleClass("open").trigger("shown.bs.dropdown",a)}return!1}},s.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var i=$(this);if(t.preventDefault(),t.stopPropagation(),!i.is(".disabled, :disabled")){var o=e(i),s=o.hasClass("open");if(!s&&27!=t.which||s&&27==t.which)return 27==t.which&&o.find(n).trigger("focus"),i.trigger("click");var a=" li:not(.disabled):visible a",r=o.find('[role="menu"]'+a+', [role="listbox"]'+a);if(r.length){var l=r.index(t.target);38==t.which&&l>0&&l--,40==t.which&&l<r.length-1&&l++,~l||(l=0),r.eq(l).trigger("focus")}}}};var a=$.fn.dropdown;$.fn.dropdown=i,$.fn.dropdown.Constructor=s,$.fn.dropdown.noConflict=function(){return $.fn.dropdown=a,this},$(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",n,s.prototype.toggle).on("keydown.bs.dropdown.data-api",n,s.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',s.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',s.prototype.keydown)}(jQuery),+function($){"use strict";function t(t,i){return this.each(function(){var o=$(this),n=o.data("bs.modal"),s=$.extend({},e.DEFAULTS,o.data(),"object"==typeof t&&t);n||o.data("bs.modal",n=new e(this,s)),"string"==typeof t?n[t](i):s.show&&n.show(i)})}var e=function(t,e){this.options=e,this.$body=$(document.body),this.$element=$(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,$.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};e.VERSION="3.3.4",e.TRANSITION_DURATION=300,e.BACKDROP_TRANSITION_DURATION=150,e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},e.prototype.show=function(t){var i=this,o=$.Event("show.bs.modal",{relatedTarget:t});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',$.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(t){$(t.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=$.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),o&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var n=$.Event("shown.bs.modal",{relatedTarget:t});o?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(e.TRANSITION_DURATION):i.$element.trigger("focus").trigger(n)}))},e.prototype.hide=function(t){t&&t.preventDefault(),t=$.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),$(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),$.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",$.proxy(this.hideModal,this)).emulateTransitionEnd(e.TRANSITION_DURATION):this.hideModal())},e.prototype.enforceFocus=function(){$(document).off("focusin.bs.modal").on("focusin.bs.modal",$.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",$.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},e.prototype.resize=function(){this.isShown?$(window).on("resize.bs.modal",$.proxy(this.handleUpdate,this)):$(window).off("resize.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(t){var i=this,o=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=$.support.transition&&o;if(this.$backdrop=$('<div class="modal-backdrop '+o+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",$.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;n?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){i.removeBackdrop(),t&&t()};$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):s()}else t&&t()},e.prototype.handleUpdate=function(){this.adjustDialog()},e.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},e.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},e.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},e.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},e.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},e.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=$.fn.modal;$.fn.modal=t,$.fn.modal.Constructor=e,$.fn.modal.noConflict=function(){return $.fn.modal=i,this},$(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var i=$(this),o=i.attr("href"),n=$(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=n.data("bs.modal")?"toggle":$.extend({remote:!/#/.test(o)&&o},n.data(),i.data());i.is("a")&&e.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),t.call(n,s,this)})}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.tooltip"),n="object"==typeof t&&t;(o||!/destroy|hide/.test(t))&&(o||i.data("bs.tooltip",o=new e(this,n)),"string"==typeof t&&o[t]())})}var e=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",t,e)};e.VERSION="3.3.4",e.TRANSITION_DURATION=150,e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},e.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=$(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,$.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,$.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,$.proxy(this.leave,this))}}this.options.selector?this._options=$.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(t){return t=$.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},e.prototype.getDelegateOptions=function(){var t={},e=this.getDefaults();return this._options&&$.each(this._options,function(i,o){e[i]!=o&&(t[i]=o)}),t},e.prototype.enter=function(t){var e=t instanceof this.constructor?t:$(t.currentTarget).data("bs."+this.type);return e&&e.$tip&&e.$tip.is(":visible")?void(e.hoverState="in"):(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),$(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="in",e.options.delay&&e.options.delay.show?void(e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)):e.show())},e.prototype.leave=function(t){var e=t instanceof this.constructor?t:$(t.currentTarget).data("bs."+this.type);return e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),$(t.currentTarget).data("bs."+this.type,e)),clearTimeout(e.timeout),e.hoverState="out",e.options.delay&&e.options.delay.hide?void(e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)):e.hide()},e.prototype.show=function(){var t=$.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var i=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!i)return;var o=this,n=this.tip(),s=this.getUID(this.type);this.setContent(),n.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&n.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement,r=/\s?auto?\s?/i,l=r.test(a);l&&(a=a.replace(r,"")||"top"),n.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?n.appendTo(this.options.container):n.insertAfter(this.$element);var h=this.getPosition(),d=n[0].offsetWidth,c=n[0].offsetHeight;if(l){var p=a,f=this.options.container?$(this.options.container):this.$element.parent(),u=this.getPosition(f);a="bottom"==a&&h.bottom+c>u.bottom?"top":"top"==a&&h.top-c<u.top?"bottom":"right"==a&&h.right+d>u.width?"left":"left"==a&&h.left-d<u.left?"right":a,n.removeClass(p).addClass(a)}var g=this.getCalculatedOffset(a,h,d,c);this.applyPlacement(g,a);var m=function(){var t=o.hoverState;o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==t&&o.leave(o)};$.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",m).emulateTransitionEnd(e.TRANSITION_DURATION):m()}},e.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top=t.top+s,t.left=t.left+a,$.offset.setOffset(i[0],$.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),c=d?2*h.left-o+r:2*h.top-n+l,p=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(c,i[0][p],d)},e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(t){function i(){"in"!=o.hoverState&&n.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),t&&t()}var o=this,n=$(this.$tip),s=$.Event("hide.bs."+this.type);return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(n.removeClass("in"),$.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",i).emulateTransitionEnd(e.TRANSITION_DURATION):i(),this.hoverState=null,this)},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(t){t=t||this.$element;var e=t[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=$.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=i?{top:0,left:0}:t.offset(),s={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},a=i?{width:$(window).width(),height:$(window).height()}:null;return $.extend({},o,s,a,n)},e.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},e.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.width&&(n.left=a.left+a.width-d)}return n},e.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},e.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},e.prototype.tip=function(){return this.$tip=this.$tip||$(this.options.template)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(t){var e=this;t&&(e=$(t.currentTarget).data("bs."+this.type),e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),$(t.currentTarget).data("bs."+this.type,e))),e.tip().hasClass("in")?e.leave(e):e.enter(e)},e.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type)})};var i=$.fn.tooltip;$.fn.tooltip=t,$.fn.tooltip.Constructor=e,$.fn.tooltip.noConflict=function(){return $.fn.tooltip=i,this}}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.popover"),n="object"==typeof t&&t;(o||!/destroy|hide/.test(t))&&(o||i.data("bs.popover",o=new e(this,n)),"string"==typeof t&&o[t]())})}var e=function(t,e){this.init("popover",t,e)};if(!$.fn.tooltip)throw new Error("Popover requires tooltip.js");

e.VERSION="3.3.4",e.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=$.extend({},$.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=$.fn.popover;$.fn.popover=t,$.fn.popover.Constructor=e,$.fn.popover.noConflict=function(){return $.fn.popover=i,this}}(jQuery),+function($){"use strict";function t(e,i){this.$body=$(document.body),this.$scrollElement=$($(e).is(document.body)?window:e),this.options=$.extend({},t.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",$.proxy(this.process,this)),this.refresh(),this.process()}function e(e){return this.each(function(){var i=$(this),o=i.data("bs.scrollspy"),n="object"==typeof e&&e;o||i.data("bs.scrollspy",o=new t(this,n)),"string"==typeof e&&o[e]()})}t.VERSION="3.3.4",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t=this,e="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),$.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=$(this),o=t.data("target")||t.attr("href"),n=/^#./.test(o)&&$(o);return n&&n.length&&n.is(":visible")&&[[n[e]().top+i,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},t.prototype.process=function(){var t=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),i=this.options.offset+e-this.$scrollElement.height(),o=this.offsets,n=this.targets,s=this.activeTarget,a;if(this.scrollHeight!=e&&this.refresh(),t>=i)return s!=(a=n[n.length-1])&&this.activate(a);if(s&&t<o[0])return this.activeTarget=null,this.clear();for(a=o.length;a--;)s!=n[a]&&t>=o[a]&&(void 0===o[a+1]||t<o[a+1])&&this.activate(n[a])},t.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=$(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},t.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=$.fn.scrollspy;$.fn.scrollspy=e,$.fn.scrollspy.Constructor=t,$.fn.scrollspy.noConflict=function(){return $.fn.scrollspy=i,this},$(window).on("load.bs.scrollspy.data-api",function(){$('[data-spy="scroll"]').each(function(){var t=$(this);e.call(t,t.data())})})}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.tab");o||i.data("bs.tab",o=new e(this)),"string"==typeof t&&o[t]()})}var e=function(t){this.element=$(t)};e.VERSION="3.3.4",e.TRANSITION_DURATION=150,e.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=$.Event("hide.bs.tab",{relatedTarget:t[0]}),s=$.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=$(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},e.prototype.activate=function(t,i,o){function n(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var s=i.find("> .active"),a=o&&$.support.transition&&(s.length&&s.hasClass("fade")||!!i.find("> .fade").length);s.length&&a?s.one("bsTransitionEnd",n).emulateTransitionEnd(e.TRANSITION_DURATION):n(),s.removeClass("in")};var i=$.fn.tab;$.fn.tab=t,$.fn.tab.Constructor=e,$.fn.tab.noConflict=function(){return $.fn.tab=i,this};var o=function(e){e.preventDefault(),t.call($(this),"show")};$(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),o=i.data("bs.affix"),n="object"==typeof t&&t;o||i.data("bs.affix",o=new e(this,n)),"string"==typeof t&&o[t]()})}var e=function(t,i){this.options=$.extend({},e.DEFAULTS,i),this.$target=$(this.options.target).on("scroll.bs.affix.data-api",$.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",$.proxy(this.checkPositionWithEventLoop,this)),this.$element=$(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};e.VERSION="3.3.4",e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0,target:window},e.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>n?"top":!1;if("bottom"==this.affixed)return null!=i?n+this.unpin<=s.top?!1:"bottom":t-o>=n+a?!1:"bottom";var r=null==this.affixed,l=r?n:s.top,h=r?a:e;return null!=i&&i>=n?"top":null!=o&&l+h>=t-o?"bottom":!1},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$target.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),i=this.options.offset,o=i.top,n=i.bottom,s=$(document.body).height();"object"!=typeof i&&(n=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof n&&(n=i.bottom(this.$element));var a=this.getState(s,t,o,n);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var r="affix"+(a?"-"+a:""),l=$.Event(r+".bs.affix");if(this.$element.trigger(l),l.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(r).trigger(r.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:s-t-n})}};var i=$.fn.affix;$.fn.affix=t,$.fn.affix.Constructor=e,$.fn.affix.noConflict=function(){return $.fn.affix=i,this},$(window).on("load",function(){$('[data-spy="affix"]').each(function(){var e=$(this),i=e.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),t.call(e,i)})})}(jQuery);