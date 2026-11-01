(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("gst-calculator",{cat:"calc",ic:"🇮🇳",t:"GST Calculator (India)",d:"Add or remove GST at 5, 12, 18 or 28 percent with the CGST and SGST split.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Amount<input type="number" id="a" value="1000" step="any"></label><label style="flex:1 1 150px">GST rate<select id="r"><option value="5">5%</option><option value="12">12%</option><option value="18" selected>18%</option><option value="28">28%</option><option value="3">3%</option><option value="0.25">0.25%</option></select></label><label style="flex:1 1 150px">Mode<select id="m"><option value="1" selected>Add GST to the price</option><option value="2">Remove GST from the price</option></select></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "r", "m"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var b=v.m===1?v.a:v.a/(1+v.r/100),g=b*v.r/100;return 'Price without GST: <b>'+num(Math.round(b*100)/100)+'</b><br>GST ('+v.r+'%): <b>'+num(Math.round(g*100)/100)+'</b><br>CGST ('+v.r/2+'%): <b>'+num(Math.round(g*50)/100)+'</b> &nbsp; SGST ('+v.r/2+'%): <b>'+num(Math.round(g*50)/100)+'</b><br>Price with GST: <b>'+num(Math.round((b+g)*100)/100)+'</b><br><small>Check the latest GST rates for your item.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter the amount.","Choose the GST rate.","Choose whether to add GST or remove it from a total."],
faq:[["What are CGST and SGST?","For sales inside a state, GST is split equally between the central government (CGST) and the state (SGST)."],["Which rate applies to my product?","It depends on the item. Check the official GST rate list or ask your accountant."]]});
})(AIO);
