!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");console.log(e);var o=null;t.addEventListener("click",(function(){o=setInterval((function(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=n,t.setAttribute("disabled",!0),o&&e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled"),o&&e.setAttribute("disabled",!0),console.log("Interval with id ".concat(o," has stopped!"))}))}();
//# sourceMappingURL=01-color-switcher.b814c18b.js.map
