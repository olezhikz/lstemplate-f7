(function(e){"use strict";var t=e.document;var n=[];var r=[];var i=false;var s=null;var o=function(e){try{e.apply(this,r)}catch(t){if(s!==null){s.call(this,t)}}};var u=function(){var e;i=true;for(e=0;e<n.length;e=e+1){o(n[e])}n=[]};var a=function(){if(e.addEventListener){t.addEventListener("DOMContentLoaded",function(){u()},false)}else{var n=function(){if(!t.uniqueID&&t.expando){return}var r=t.createElement("document:ready");try{r.doScroll("left");u()}catch(i){e.setTimeout(n,10)}};t.onreadystatechange=function(){if(t.readyState==="complete"){t.onreadystatechange=null;u()}};n()}};var f=function(e){return f.on(e)};f.on=function(e){if(i){o(e)}else{n[n.length]=e}return this};f.params=function(e){r=e;return this};f.error=function(e){s=e;return this};a();e.domReady=f})(window)