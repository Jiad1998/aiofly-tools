(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("commission-calculator",{cat:"business",ic:"🤝",t:"Commission Calculator",d:"Calculate sales commission and what you keep.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Sale amount<input type="number" id="s" value="100000" step="any"></label><label style="flex:1 1 150px">Commission %<input type="number" id="r" value="5" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["s", "r"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var c=v.s*v.r/100;return 'Commission: <b>'+num(c)+'</b><br>Amount after commission: <b>'+num(v.s-c)+'</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter the sale amount.","Enter the commission percent.","Read the commission and the rest."],
faq:[["Who pays the commission?","It depends on your deal. The tool only does the math."],["Can I use it for freelance fees?","Yes. For example a marketplace fee of 10 percent."]]});
})(AIO);
