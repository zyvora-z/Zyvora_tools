const $=id=>document.getElementById(id);
$("genpass")?.addEventListener("click",()=>{let n=Math.max(8,Math.min(64,Number($("passlen").value)||16)),s="";let chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*";let bytes=new Uint32Array(n);crypto.getRandomValues(bytes);for(let b of bytes)s+=chars[b%chars.length];$("passwordout").value=s});
$("textinput")?.addEventListener("input",e=>{let t=e.target.value;$("chars").textContent=t.length;$("words").textContent=(t.trim().match(/\S+/g)||[]).length});
$("km")?.addEventListener("input",e=>$("miles").textContent=""+(Number(e.target.value)*0.621371).toFixed(3)+" miles");
$("formatjson")?.addEventListener("click",()=>{try{$("jsonout").textContent=JSON.stringify(JSON.parse($("jsoninput").value),null,2)}catch(e){$("jsonout").textContent="Invalid JSON"}});
$("colorpick")?.addEventListener("input",e=>$("hex").textContent=e.target.value.toUpperCase());
$("calculate")?.addEventListener("click",()=>{let v=$("calc").value;if(!/^[0-9+\-*/(). %]+$/.test(v)){ $("calcresult").textContent="Invalid expression";return}try{$("calcresult").textContent=Function('"use strict";return ('+v+')')()}catch(e){$("calcresult").textContent="Invalid expression"}});
document.querySelectorAll("[data-copy]").forEach(b=>b.addEventListener("click",()=>{let el=$(b.dataset.copy);el.select();navigator.clipboard?.writeText(el.value);b.textContent="Copied"}));
$("search")?.addEventListener("input",e=>{let q=e.target.value.toLowerCase();document.querySelectorAll(".tool").forEach(c=>c.hidden=!c.innerText.toLowerCase().includes(q))});
