!function(){"use strict";var n,e={456:function(n,e,t){var o=t(294),r=t(745),a=t(379),i=t.n(a),l=t(795),c=t.n(l),u=t(569),s=t.n(u),f=t(565),d=t.n(f),m=t(216),v=t.n(m),p=t(589),b=t.n(p),h=t(412),g={};g.styleTagTransform=b(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=v(),i()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var y=t(364),E={};E.styleTagTransform=b(),E.setAttributes=d(),E.insert=s().bind(null,"head"),E.domAPI=c(),E.insertStyleElement=v(),i()(y.Z,E),y.Z&&y.Z.locals&&y.Z.locals;var O=function(){return o.createElement("div",null,o.createElement("div",{className:"container"},"Test Component"))},k=function(){return o.createElement("div",null,o.createElement("div",{className:"container"},"Hello World",o.createElement(O,null),o.createElement("button",{class:"btn",onClick:function(){chrome.runtime.sendMessage({commmand:"basic"},(function(n){console.log(n)}))}},"Interact with background")))};!function(){var n=document.createElement("div");if(document.body.appendChild(n),!n)throw new Error("Can not find AppContainer");var e=(0,r.s)(n);console.log(n),e.render(o.createElement(k,null))}()},412:function(n,e,t){var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,'body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n',""]),e.Z=i},364:function(n,e,t){var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,".cool {\n  background-color: pink;\n}\n",""]),e.Z=i}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,n=[],o.O=function(e,t,r,a){if(!t){var i=1/0;for(s=0;s<n.length;s++){t=n[s][0],r=n[s][1],a=n[s][2];for(var l=!0,c=0;c<t.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(n){return o.O[n](t[c])}))?t.splice(c--,1):(l=!1,a<i&&(i=a));if(l){n.splice(s--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var s=n.length;s>0&&n[s-1][2]>a;s--)n[s]=n[s-1];n[s]=[t,r,a]},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,{a:e}),e},o.d=function(n,e){for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={42:0};o.O.j=function(e){return 0===n[e]};var e=function(e,t){var r,a,i=t[0],l=t[1],c=t[2],u=0;if(i.some((function(e){return 0!==n[e]}))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(c)var s=c(o)}for(e&&e(t);u<i.length;u++)a=i[u],o.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return o.O(s)},t=self.webpackChunkflojo=self.webpackChunkflojo||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}(),o.nc=void 0;var r=o.O(void 0,[166],(function(){return o(456)}));r=o.O(r)}();