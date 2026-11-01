(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("gratuity-calculator-india",{cat:"calc",ic:"🎁",t:"Gratuity Calculator (India)",d:"Estimate gratuity under the Payment of Gratuity Act formula.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Last drawn basic + DA per month<input type="number" id="s" value="50000" step="any"></label><label style="flex:1 1 150px">Years of service<input type="number" id="y" value="10" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["s", "y"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){if(v.y<5)return 'Gratuity usually needs at least 5 years of continuous service.';var yr=Math.floor(v.y)+((v.y-Math.floor(v.y))>=0.5?1:0),g=v.s*15/26*yr;return 'Years counted: <b>'+yr+'</b><br><b style="font-size:20px">Gratuity: '+num(Math.round(g))+'</b><br><small>The Act has a tax-free upper limit. Check the latest limit and your company rules.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your last basic salary with DA.","Enter your years of service.","Read the gratuity estimate."],
faq:[["What is the formula?","Gratuity = last salary x 15 / 26 x years of service."],["How are part years counted?","Six months or more is usually counted as a full year."]]});
})(AIO);
