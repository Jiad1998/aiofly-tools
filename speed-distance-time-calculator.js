(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("speed-distance-time-calculator",{cat:"calc",ic:"🛣️",t:"Speed Distance Time Calculator",d:"Find speed, distance or travel time. Leave one box empty to solve it.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Distance (km)<input type="number" id="d" step="any" value="120"></label><label style="flex:1 1 150px">Speed (km/h)<input type="number" id="s" step="any" value="60"></label><label style="flex:1 1 150px">Time (hours)<input type="number" id="t" step="any" placeholder="leave blank to solve"></label></div><div class="res" id="o"></div>`,
f:function(){
function run(){var d=parseFloat($('d').value),s=parseFloat($('s').value),t=parseFloat($('t').value),e=[isNaN(d),isNaN(s),isNaN(t)].filter(Boolean).length;
if(e!==1){$('o').textContent='Leave exactly one box empty and fill the other two.';return}
function hm(h){var m=Math.round(h*60);return Math.floor(m/60)+' h '+(m%60)+' min'}
if(isNaN(t))$('o').innerHTML='Time: <b>'+num(d/s)+' hours</b> ('+hm(d/s)+')';else if(isNaN(s))$('o').innerHTML='Speed: <b>'+num(d/t)+' km/h</b>';else $('o').innerHTML='Distance: <b>'+num(s*t)+' km</b>'}
['d','s','t'].forEach(function(i){$(i).oninput=run});run();
},
how:["Fill in two of the three boxes.","Leave the one you want to find empty.","Read the answer."],
faq:[["What is the formula?","Speed = distance / time."],["Can I use miles?","Yes, if you use miles for distance and miles per hour for speed."]]});
})(AIO);
