!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return s.Date.now()};function m(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var a=u.test(t);return a||c.test(t)?f(t.slice(2),a?2:8):r.test(t)?NaN:+t}e=function(n,t,e){var o,i,r,u,c,f,a=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=o,r=i;return o=i=void 0,a=t,u=n.apply(r,e)}function h(n){return a=n,c=setTimeout(T,t),l?b(n):u}function j(n){var e=n-f;return void 0===f||e>=t||e<0||s&&n-a>=r}function T(){var n=y();if(j(n))return w(n);c=setTimeout(T,function(n){var e=t-(n-f);return s?p(e,r-(n-a)):e}(n))}function w(n){return c=void 0,d&&o?b(n):(o=i=void 0,u)}function O(){var n=y(),e=j(n);if(o=arguments,i=this,f=n,e){if(void 0===c)return h(f);if(s)return c=setTimeout(T,t),b(f)}return void 0===c&&(c=setTimeout(T,t)),u}return t=g(t)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?v(g(e.maxWait)||0,t):r,d="trailing"in e?!!e.trailing:d),O.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=i=c=void 0},O.flush=function(){return void 0===c?u:w(y())},O};var b=document.querySelector("input#search-box"),h=document.querySelector(".country-list"),j=(document.querySelector(".country-info"),"");b.addEventListener("input",n(e)((function(){j=b.value.trim(),""!==b.value&&(console.log(j),(n=j,fetch("https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages")).then((function(n){return n.json()}))).then((function(n){!function(n){console.log(n[0]);var t=n.map((function(n){var t=n.name.official,e=n.flags.svg;return console.log(t),'<li class = "country-item"><span class = "centering"><img src="'.concat(e,'" alt="" width="32" height="24">  </span> <span class = "centering, text"> ').concat(t,"</span></li> ")})).join("");console.log(t),h.innerHTML=t}(n)})).catch((function(n){return console.log(n)})));var n}),300))}();
//# sourceMappingURL=index.4fa6578b.js.map
