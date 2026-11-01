(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("shoe-size-converter",{cat:"convert",ic:"👟",t:"Shoe Size Converter",d:"Convert shoe sizes between US, UK, EU and foot length (cm).",
h:`<div class="row"><select id="u"><option value="us">US (men)</option><option value="usw">US (women)</option><option value="uk">UK</option><option value="eu">EU</option><option value="cm">Foot length (cm)</option></select><input type="number" id="v" value="9" step="0.5"></div><div class="res" id="o"></div>`,
f:function(){
function run(){var x=parseFloat($('v').value),u=$('u').value;if(!(x>0)){$('o').textContent='Enter a size.';return}var cm;
if(u==='us')cm=((x+22)/3)*2.54;else if(u==='usw')cm=(((x-1.5)+22)/3)*2.54;else if(u==='uk')cm=(((x+1)+22)/3)*2.54;else if(u==='eu')cm=x/1.5-1.5;else cm=x;
var inch=cm/2.54,us=inch*3-22,h=function(n){return Math.round(n*2)/2};
$('o').innerHTML='Foot length: <b>'+cm.toFixed(1)+' cm</b> ('+inch.toFixed(1)+' in)<br>US (men): <b>'+h(us)+'</b><br>US (women): <b>'+h(us+1.5)+'</b><br>UK: <b>'+h(us-1)+'</b><br>EU: <b>'+h((cm+1.5)*1.5)+'</b><br><small>Sizes differ a little between brands. Use as a guide.</small>'}
$('v').oninput=run;$('u').onchange=run;run();
},
how:["Choose your size type.","Enter the size.","See the equal sizes in other systems."],
faq:[["Is it exact?","No. Brands differ, so treat it as a guide and check the brand size chart if you can."],["How do I measure my foot?","Stand on paper, mark the heel and longest toe, and measure the distance in cm."]]});
})(AIO);
