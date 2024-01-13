Array.from(document.getElementsByTagName("input")).forEach(function(e){var t=document.createElement("label");t.setAttribute("for",e.id),t.classList.add("field-label");var a=e.name.replace(/([a-z])([A-Z])/g,"$1 $2");t.textContent=a,e.parentNode.insertBefore(t,e.nextSibling),e.placeholder=a.charAt(0).toUpperCase()+a.slice(1)});
//# sourceMappingURL=index.d2ab6fbb.js.map
