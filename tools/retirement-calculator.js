(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("retirement-calculator",{cat:"calc",ic:"🌴",t:"Retirement Calculator",d:"Estimate how much you could have at retirement and a rough monthly income.",
h:`<div class="row" style="flex-wrap:wrap"><label style="flex:1 1 150px">Current age<input type="number" id="a" value="30" step="any"></label><label style="flex:1 1 150px">Retirement age<input type="number" id="ra" value="65" step="any"></label><label style="flex:1 1 150px">Current savings<input type="number" id="s" value="20000" step="any"></label><label style="flex:1 1 150px">Monthly contribution<input type="number" id="c" value="600" step="any"></label><label style="flex:1 1 150px">Expected return % per year<input type="number" id="r" value="6" step="any"></label><label style="flex:1 1 150px">Withdrawal rate %<input type="number" id="w" value="4" step="any"></label></div><div class="res" id="o"></div>`,
f:function(){
var ids=["a", "ra", "s", "c", "r", "w"];
function calc(){var v={};var ok=true;ids.forEach(function(i){var x=parseFloat($(i).value);if(isNaN(x))ok=false;v[i]=x});
if(!ok){$('o').innerHTML='Please fill in all the numbers.';return}
var out;try{out=(function(v){var y=v.ra-v.a;if(y<=0)return 'Retirement age must be higher than your age.';var i=v.r/1200,n=y*12,fv=v.s*Math.pow(1+i,n)+(i===0?v.c*n:v.c*((Math.pow(1+i,n)-1)/i));return 'Years to save: <b>'+y+'</b><br><b style="font-size:20px">Savings at retirement: '+num(Math.round(fv))+'</b><br>Possible income at '+v.w+'% a year: <b>'+num(Math.round(fv*v.w/100))+'</b> per year (<b>'+num(Math.round(fv*v.w/1200))+'</b> per month)<br><small>Not adjusted for inflation or taxes. Not financial advice.</small>'})(v)}catch(e){out='Error: '+e.message}$('o').innerHTML=out}
ids.forEach(function(i){$(i).oninput=calc;$(i).onchange=calc});calc();
},
how:["Enter your age and the age you plan to retire.","Enter your savings and monthly contributions.","Read your savings pot and a rough yearly income."],
faq:[["What is the 4 percent rule?","It is a rough guide that you can withdraw about 4 percent of your savings in the first year of retirement."],["Does it include inflation?","No. Prices rise over time, so the real value of the money will be lower."]]});
})(AIO);
