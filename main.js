(()=>{"use strict";function e(e,t,n){let c=document.createElement("button");return c.id=e,c.innerText=t,c.style.color=n||"white",c}function t(){let e=document.createElement("div");e.id="body";let t=document.createElement("div");t.className="imageContainer",e.appendChild(t);let n=document.createElement("img");n.src="imgs/frontstore.png",n.className="frontImage",t.appendChild(n);let c=document.createElement("div");c.className="overlay";let o=document.createElement("p");return o.className="textOverlay",o.innerText="Our Main Location in Albuquerque, New Mexico",c.appendChild(o),t.appendChild(c),e}function n(e,t){let n=document.createElement("div");n.className="menuImageContainer";let c=document.createElement("img");c.src=`imgs/${e}.png`,c.className="menuImages";let o=document.createElement("div");o.className="overlay";let l=document.createElement("p");return l.className="textOverlay",l.innerText=t,n.appendChild(c),o.appendChild(l),n.appendChild(o),n}!function(){let n=document.querySelector("#content");n.appendChild(function(){let t=document.createElement("div");t.id="head";let n=document.createElement("img");return n.src="imgs/chickenBros.png",t.appendChild(n),t.appendChild(e("homeButton","Home","red")),t.appendChild(e("menuButton","Menu")),t.appendChild(e("contactButton","Contact")),t}()),n.appendChild(t()),n.appendChild(function(){let e=document.createElement("div");e.className="bottom";let t=document.createElement("p");return t.innerText='"Los Pollos Hermanos, where something delicious is always cooking"',e.appendChild(t),e}())}();let c=document.querySelector("#content"),o=document.querySelector("#head"),l=document.querySelector("#homeButton"),d=document.querySelector("#menuButton"),i=document.querySelector("#contactButton");function r(){for(let e=1;e<o.childNodes.length;e++)o.childNodes[e].style.color="white";let e=c.childNodes[1];c.removeChild(e)}l.addEventListener("click",(function(){r(),l.style.color="red",function(e){let t=document.querySelector("#content"),n=document.querySelector(".bottom");t.insertBefore(e,n)}(t())})),d.addEventListener("click",(function(){r(),d.style.color="red",function(){let e=document.createElement("div");e.id="bodyMenuImages",e.appendChild(n("chicken1","Some Fried Chicken")),e.appendChild(n("chicken2","Some More Fried Chicken")),e.appendChild(n("chicken3","Even More Fried Chicken")),e.appendChild(n("chicken4","Can't Stop the Fried Chicken")),e.appendChild(n("Bluemeth","Secret Menu")),e.appendChild(n("tuco","TIGHT TIGHT TIGHT")),function(e){let t=document.querySelector("#content"),n=document.querySelector(".bottom");t.insertBefore(e,n)}(e)}()})),i.addEventListener("click",(function(){r(),i.style.color="red",function(){let e=document.createElement("div");e.id="body";let t=document.createElement("div");t.className="contactImageContainer",e.appendChild(t);let n=document.createElement("img");n.src="imgs/gus.png",n.className="frontImage",t.appendChild(n);let c=document.createElement("div");c.className="overlay";let o=document.createElement("p");o.className="textOverlay",o.innerText="The Chicken Man himself Gustavo Fring",c.appendChild(o),t.appendChild(c),function(e){let t=document.querySelector("#content"),n=document.querySelector(".bottom");t.insertBefore(e,n)}(e)}()}))})();