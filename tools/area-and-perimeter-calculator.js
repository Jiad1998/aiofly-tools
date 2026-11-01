(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("area-and-perimeter-calculator",{cat:"education",ic:"🔷",t:"Area and Perimeter Calculator",d:"Find the area and perimeter of a rectangle, square, triangle, circle or trapezoid.",
h:`<label>Shape<select id="s"><option value="rect">Rectangle</option><option value="sq">Square</option><option value="tri">Triangle (base and height)</option><option value="cir">Circle (radius)</option><option value="trap">Trapezoid</option></select></label><div class="row" style="flex-wrap:wrap"><label style="flex:1 1 130px">A<input type="number" id="a" value="10" step="any"></label><label style="flex:1 1 130px" id="lb">B<input type="number" id="b" value="5" step="any"></label><label style="flex:1 1 130px" id="lc">C<input type="number" id="c" value="4" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var H={rect:['Length','Width',''],sq:['Side','',''],tri:['Base','Height',''],cir:['Radius','',''],trap:['Parallel side 1','Parallel side 2','Height']};
function run(){var s=$('s').value,a=+$('a').value,b=+$('b').value,c=+$('c').value,h=H[s];$('lb').style.display=h[1]?'':'none';$('lc').style.display=h[2]?'':'none';
var A=s==='rect'?a*b:s==='sq'?a*a:s==='tri'?a*b/2:s==='cir'?Math.PI*a*a:(a+b)/2*c;
var P=s==='rect'?2*(a+b):s==='sq'?4*a:s==='cir'?2*Math.PI*a:null;
$('o').innerHTML='Area: <b>'+num(A)+'</b>'+(P!==null?'<br>'+(s==='cir'?'Circumference':'Perimeter')+': <b>'+num(P)+'</b>':'')+'<br><small>'+h[0]+(h[1]?', '+h[1]:'')+(h[2]?', '+h[2]:'')+' in the same unit</small>'}
['s','a','b','c'].forEach(function(i){$(i).oninput=run;$(i).onchange=run});run();
},
how:["Choose a shape.","Type its measurements.","Read the area and perimeter."],
faq:[["Which unit does it use?","Any unit. The answer for area is in square units."],["What is pi?","Pi is about 3.14159. The tool uses its exact value."]]});
})(AIO);
