(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("profit-margin-calculator",{cat:"business",ic:"💹",t:"Profit Margin Calculator",d:"Find profit, margin and markup from cost and selling price.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Cost price<input type="number" id="c" value="700" step="any"></label><label style="flex:1 1 150px">Selling price<input type="number" id="s" value="1000" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["c", "s"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var p=v.s-v.c;return 'Profit: <b>'+num(p)+'</b><br>Profit margin: <b>'+num(p/v.s*100)+'%</b><br>Markup: <b>'+num(p/v.c*100)+'%</b>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc});calc();
},
how:["Enter your cost price.","Enter the selling price.","Read profit, margin and markup."],
faq:[["What is the difference between margin and markup?","Margin is profit as a share of the selling price. Markup is profit as a share of the cost."],["What is a good margin?","It depends on your business. Many shops aim for 20 to 50 percent."]]});
})(AIO);
