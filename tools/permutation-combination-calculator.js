(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("permutation-combination-calculator",{cat:"education",ic:"🔢",t:"Permutation and Combination Calculator",d:"Calculate nPr and nCr for any n and r.",
h:`<div class="row"><label style="flex:1 1 120px">n (total items)<input type="number" id="n" value="10" min="0"></label><label style="flex:1 1 120px">r (chosen)<input type="number" id="r" value="3" min="0"></label></div><div class="res" id="o"></div>`,
f:function(){
function f(n){var x=1n;for(var i=2n;i<=n;i++)x*=i;return x}
function run(){var n=parseInt($('n').value),r=parseInt($('r').value);if(isNaN(n)||isNaN(r)||n<0||r<0){$('o').textContent='Enter whole numbers.';return}if(r>n){$('o').textContent='r cannot be greater than n.';return}if(n>500){$('o').textContent='Please use n up to 500.';return}
var p=f(BigInt(n))/f(BigInt(n-r)),c=p/f(BigInt(r));$('o').innerHTML='Permutations nPr: <b style="word-break:break-all">'+p.toLocaleString('en-US')+'</b><br>Combinations nCr: <b style="word-break:break-all">'+c.toLocaleString('en-US')+'</b>'}
$('n').oninput=run;$('r').oninput=run;run();
},
how:["Enter n and r.","Read nPr and nCr."],
faq:[["Permutation or combination?","Use permutations when order matters (like a race). Use combinations when order does not matter (like picking a team)."]]});
})(AIO);
