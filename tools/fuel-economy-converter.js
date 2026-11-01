(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("fuel-economy-converter",{cat:"convert",ic:"⛽",t:"Fuel Economy Converter",d:"Convert between MPG (US and UK), km/l and L/100 km.",
h:`<div class="row"><input type="number" id="v" value="30" step="any"><select id="u"><option value="mpgus">MPG (US)</option><option value="mpguk">MPG (UK)</option><option value="kml">km/l</option><option value="l100">L/100 km</option></select></div><div class="res" id="o"></div>`,
f:function(){
function run(){var x=parseFloat($('v').value),u=$('u').value;if(!(x>0)){$('o').textContent='Enter a number above 0.';return}var kml;if(u==='mpgus')kml=x*0.425143707;else if(u==='mpguk')kml=x*0.354006189;else if(u==='kml')kml=x;else kml=100/x;
$('o').innerHTML='MPG (US): <b>'+num(kml/0.425143707)+'</b><br>MPG (UK): <b>'+num(kml/0.354006189)+'</b><br>km/l: <b>'+num(kml)+'</b><br>L/100 km: <b>'+num(100/kml)+'</b>'}
$('v').oninput=run;$('u').onchange=run;run();
},
how:["Type a number.","Choose its unit.","Read all the other units."],
faq:[["Why are US and UK MPG different?","The US gallon is smaller than the UK (imperial) gallon."],["Lower L/100 km is better or worse?","Lower is better. It means the car uses less fuel."]]});
})(AIO);
