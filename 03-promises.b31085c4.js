!function(){var e=document.querySelector(".form"),o=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');e.addEventListener("submit",(function(e){var c=function(e){var o,n;(o=e,n=a,new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e({position:o,delay:n}):t({position:o,delay:n})}),n)}))).then((function(o){o.position;var n=o.delay;console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(o){o.position;var n=o.delay;console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))})),a+=u};e.preventDefault();for(var a=Number(o.value),u=Number(n.value),r=Number(t.value),i=1;i<=r;i++)c(i)}))}();
//# sourceMappingURL=03-promises.b31085c4.js.map