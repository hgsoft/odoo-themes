"use strict";var RDStation=function(){var t={};return t.windowLoaded=!1,window.addEventListener("load",function(){t.windowLoaded=!0}),t}();!function(){function t(t){"complete"===document.readyState?t():window.addEventListener("load",t)}var e=function(){var t=document.createElement("iframe");t.onload=function(){RDStation.windowLoaded=!0,a()},t.setAttribute("style","width: 1px; height: 1px; position: absolute; top: -100px;"),t.setAttribute("id","rd_tmgr"),document.body.appendChild(t)},n=function(t){for(var e=t+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var a=n[o];" "==a.charAt(0);)a=a.substring(1,a.length);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return null},o=function(){if(window.opener){var t=null!==n("__trf.src")?"true":"false";window.opener.postMessage({task:"checkTagManager",tagManagerChecked:t},"https://app.rdstation.com.br")}},a=function(){var t=document.createElement("script"),e=function(){TrafficSourceCookie.init("__trf.src",".institutoanapaulapujol.com.br"),o()};t.setAttribute("type","text/javascript"),t.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/traffic-source-cookie/stable/traffic-source-cookie.min.js"),t.readyState?t.onreadystatechange=function(){("loaded"==t.readyState||"complete"==t.readyState)&&(t.onreadystatechange=null,e())}:t.onload=function(){e()},document.body.appendChild(t);var n=document.createElement("script"),a=function(){RdstationPopup.init("17a9c64c0d5a861c7a0663e9ea382f8d",19830,"UA-25712098-2")};n.setAttribute("type","text/javascript"),n.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/rdstation-popups/stable/rdstation-popup.min.js?v=1"),n.readyState?n.onreadystatechange=function(){("loaded"==n.readyState||"complete"==n.readyState)&&(n.onreadystatechange=null,a())}:n.onload=function(){a()},document.body.appendChild(n)};t(e)}();