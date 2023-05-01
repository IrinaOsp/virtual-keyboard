(()=>{"use strict";const e=["`","1","2","3","4","5","6","7","8","9","0","-","=","backspace","tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","caps lock","a","s","d","f","g","h","j","k","l",";","'","enter","shift-l","z","x","c","v","b","n","m",",",".","/","shift-r","ctrl-l","win","alt-l","space","alt-r","ctrl-r","⇐","⇑","⇓","⇒"],t={a:"KeyA",b:"KeyB",c:"KeyC",d:"KeyD",e:"KeyE",f:"KeyF",g:"KeyG",h:"KeyH",i:"KeyI",j:"KeyJ",k:"KeyK",l:"KeyL",m:"KeyM",n:"KeyN",o:"KeyO",p:"KeyP",q:"KeyQ",r:"KeyR",s:"KeyS",t:"KeyT",u:"KeyU",v:"KeyV",w:"KeyW",x:"KeyX",y:"KeyY",z:"KeyZ",0:"Digit0",1:"Digit1",2:"Digit2",3:"Digit3",4:"Digit4",5:"Digit5",6:"Digit6",7:"Digit7",8:"Digit8",9:"Digit9",space:"Space","`":"Backquote",tab:"Tab",enter:"Enter","shift-l":"ShiftLeft","shift-r":"ShiftRight","ctrl-l":"ControlLeft","ctrl-r":"ControlRight","alt-l":"AltLeft","alt-r":"AltRight","caps lock":"CapsLock",win:"MetaLeft","⇑":"ArrowUp","⇓":"ArrowDown","⇐":"ArrowLeft","⇒":"ArrowRight",backspace:"Backspace","-":"Minus","=":"Equal","[":"BracketLeft","]":"BracketRight",";":"Semicolon","'":"Quote","\\":"Backslash",",":"Comma",".":"Period","/":"Slash"};let n=null;!function(){const e=document.createElement("div");e.className="wrapper wrapper_input";const t=document.createElement("label");t.className="label",t.setAttribute("for","typed-text"),t.textContent="Virtual keyboard for Windows",n=document.createElement("textarea"),n.className="textarea",n.setAttribute("id","typed-text"),n.setAttribute("name","typed-text"),n.setAttribute("rows","10"),n.setAttribute("cols","120"),n.setAttribute("autofocus","true");const a=document.createElement("div");a.className="wrapper";const s=document.createElement("div");s.className="keyboard";for(let e=0;e<5;e+=1){const t=document.createElement("div");t.classList.add("row"),t.classList.add(`row_${e}`),s.appendChild(t)}const c=document.createElement("div");c.className="wrapper";const o=document.createElement("p");o.className="info",o.innerHTML='Current language is <span class="language">English</span>. To switch language press left ctr+alt',document.body.appendChild(e),e.appendChild(t),e.appendChild(n),document.body.appendChild(a),a.appendChild(s),document.body.appendChild(c),c.appendChild(o)}(),e.forEach(((e,t)=>{const n=document.createElement("button");if(n.className="key","caps lock"===e?(n.classList.add("key_caps"),n.classList.add("key_service")):"⇐"===e?(n.classList.add("key_left"),n.classList.add("key_service")):"⇒"===e?(n.classList.add("key_right"),n.classList.add("key_service")):"⇑"===e?(n.classList.add("key_up"),n.classList.add("key_service")):"⇓"===e?(n.classList.add("key_down"),n.classList.add("key_service")):(n.classList.add(`key_${e}`),e.length>1&&n.classList.add("key_service")),n.textContent=e,t<14)document.querySelector(".row_0").appendChild(n);else if(t<28)document.querySelector(".row_1").appendChild(n);else if(t<41)document.querySelector(".row_2").appendChild(n);else if(t<53)document.querySelector(".row_3").appendChild(n);else if("⇑"===e){const e=document.createElement("div");e.classList.add("key_reserve"),document.querySelector(".row_4").appendChild(e),e.appendChild(n)}else"⇓"===e?document.querySelector(".key_reserve").appendChild(n):document.querySelector(".row_4").appendChild(n)}));const a=document.querySelectorAll(".key");for(let n=0;n<a.length;n+=1)if(t[a[n].textContent]){a[n].dataset.code=t[a[n].textContent];const s=a[n].textContent.indexOf("-");if(-1!==s&&a[n].textContent.length>1){const t=e.indexOf(a[n].textContent);-1!==s&&(e[t]=a[n].textContent.slice(0,s)),a[n].textContent=a[n].textContent.slice(0,s)}}const s=document.querySelector(".textarea");let c=s.selectionStart;document.querySelector(".keyboard").addEventListener("mousedown",(e=>{e.target!==s&&(e.preventDefault(),s.focus(),s.selectionStart=c-1,s.selectionEnd=c-1)})),document.addEventListener("keydown",(e=>{const t=e.code,n=document.querySelector(`.key[data-code="${t}"]`);n&&(n.classList.add("active"),n.classList.contains("key_service")||(e.preventDefault(),s.value+=n.textContent))})),document.addEventListener("keyup",(e=>{const t=e.code,n=document.querySelector(`.key[data-code="${t}"]`);n&&n.classList.remove("active")}));const o=document.querySelector(".key_caps"),l=[];a.forEach((e=>{e.classList.contains("key_service")||l.push(e)}));const r=()=>{if(o.classList.contains("key_caps_active")){document.querySelector(".key_caps").classList.remove("key_caps_active");for(let e=0;e<l.length;e+=1)l[e].textContent=l[e].textContent.toLowerCase()}else{o.classList.add("key_caps_active");for(let e=0;e<l.length;e+=1)l[e].textContent=l[e].textContent.toUpperCase()}},i=(document.addEventListener("keydown",(e=>{"CapsLock"===e.code&&r()})),o.addEventListener("mousedown",r),[]);i.push(document.querySelector(".key_shift-l")),i.push(document.querySelector(".key_shift-r")),i.forEach((e=>{e.addEventListener("mousedown",(()=>{for(let e=0;e<l.length;e+=1)l[e].textContent=l[e].textContent.toUpperCase()})),e.addEventListener("mouseup",(()=>{for(let e=0;e<l.length;e+=1)l[e].textContent=l[e].textContent.toLowerCase()}))})),document.addEventListener("keydown",(e=>{if("ShiftLeft"===e.code||"ShiftRight"===e.code)for(let e=0;e<l.length;e+=1)l[e].textContent=l[e].textContent.toUpperCase()})),document.addEventListener("keyup",(e=>{if("ShiftLeft"===e.code||"ShiftRight"===e.code)for(let e=0;e<l.length;e+=1)l[e].textContent=l[e].textContent.toLowerCase()}));const d=["`","1","2","3","4","5","6","7","8","9","0","-","=","backspace","tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","caps lock","ф","ы","в","а","п","р","о","л","д","ж","э","enter","shift","я","ч","с","м","и","т","ь","б","ю",".","shift","ctrl","win","alt","space","alt","ctrl","⇐","⇑","⇓","⇒"],u=document.querySelector(".language");document.addEventListener("keydown",(t=>{if(t.ctrlKey&&t.altKey&&"English"===u.textContent){document.querySelector(".language").textContent="Russian";for(let e=0;e<a.length;e+=1)o.classList.contains("key_caps_active")?a[e].classList.contains("key_service")?a[e].textContent=d[e]:a[e].textContent=d[e].toUpperCase():a[e].textContent=d[e]}else if(t.ctrlKey&&t.altKey&&"Russian"===u.textContent){document.querySelector(".language").textContent="English";for(let t=0;t<a.length;t+=1)o.classList.contains("key_caps_active")?a[t].classList.contains("key_service")?a[t].textContent=e[t]:a[t].textContent=e[t].toUpperCase():a[t].textContent=e[t]}})),window.addEventListener("beforeunload",(function(){localStorage.setItem("language",u.textContent)})),window.addEventListener("load",(function(){"underfined"===localStorage.getItem("language")?u.textContent="English":u.textContent=localStorage.getItem("language")})),a.forEach((e=>{e.addEventListener("mousedown",(()=>{if(e.classList.contains("key_service"))switch(e.textContent){case"space":s.value+=" ";break;case"backspace":s.value=s.value.substring(0,s.value.length-1);break;case"tab":s.value+="\t";break;case"enter":s.value+="\n";break;case"shift":case"alt":case"ctrl":case"⇑":case"⇓":default:break;case"⇐":s.selectionStart>=1&&(c=s.selectionStart,s.selectionStart=c-1,s.selectionEnd=c-1);break;case"⇒":s.selectionStart<s.value.length&&(c=s.selectionStart,s.selectionStart=c+1,s.selectionEnd=c+1)}else s.value+=e.textContent}))}))})();