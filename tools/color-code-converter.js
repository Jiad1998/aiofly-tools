(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("color-code-converter",{cat:"color",ic:"🎨",t:"Color Code Converter",d:"Convert a color between HEX, RGB, HSL and CMYK.",
h:`<div class="row"><input type="color" id="p" value="#4f46e5"><input id="h" value="#4f46e5" placeholder="#RRGGBB"></div><div id="pv" style="height:70px;border-radius:14px;margin:8px 0"></div><div class="res" id="o"></div>`,
f:function(){
function conv(hex){var m=/^#?([0-9a-f]{6})$/i.exec(hex.trim());if(!m)return null;var n=parseInt(m[1],16),r=n>>16&255,g=n>>8&255,b=n&255;
var r1=r/255,g1=g/255,b1=b/255,k=1-Math.max(r1,g1,b1),c=k===1?0:(1-r1-k)/(1-k),mm=k===1?0:(1-g1-k)/(1-k),y=k===1?0:(1-b1-k)/(1-k);
var mx=Math.max(r1,g1,b1),mn=Math.min(r1,g1,b1),l=(mx+mn)/2,s=0,h=0;if(mx!==mn){var d=mx-mn;s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r1?(g1-b1)/d+(g1<b1?6:0):mx===g1?(b1-r1)/d+2:(r1-g1)/d+4;h*=60}
return {hex:'#'+m[1].toUpperCase(),rgb:'rgb('+r+', '+g+', '+b+')',hsl:'hsl('+Math.round(h)+', '+Math.round(s*100)+'%, '+Math.round(l*100)+'%)',cmyk:'cmyk('+Math.round(c*100)+'%, '+Math.round(mm*100)+'%, '+Math.round(y*100)+'%, '+Math.round(k*100)+'%)'}}
function run(){var c=conv($('h').value);if(!c){$('o').textContent='Type a color like #4f46e5.';return}$('pv').style.background=c.hex;$('o').innerHTML=['hex','rgb','hsl','cmyk'].map(function(k){return k.toUpperCase()+': <b>'+c[k]+'</b> <button type="button" class="cb" data-v="'+c[k]+'">Copy</button>'}).join('<br>')}
$('p').oninput=function(){$('h').value=this.value;run()};$('h').oninput=run;$('o').onclick=function(e){var b=e.target.closest('.cb');if(b)copyText(b.getAttribute('data-v'),b)};run();
},
how:["Pick a color or type a HEX code.","Read the RGB, HSL and CMYK values.","Tap Copy next to the one you need."],
faq:[["What is CMYK?","It is the ink colors cyan, magenta, yellow and black used in printing."],["Are CMYK values exact?","They are a simple math conversion. Printers may adjust colors differently."]]});
})(AIO);
