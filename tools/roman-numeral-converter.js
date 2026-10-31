(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("roman-numeral-converter",{cat:"education",ic:"🏛️",t:"Roman Numeral Converter",d:"Convert numbers to Roman numerals and back.",
h:`<textarea id="i" placeholder="Type 2026 or MMXXVI"></textarea><div class="row"><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly placeholder="Result appears here"></textarea>`,
f:function(){
function g(id){var e=$(id);return e?(e.type==='checkbox'?e.checked:e.value):''}
function run(){var s=$('i').value;var r;try{r=(function(s){s=s.trim();if(!s)return '';if(/^\d+$/.test(s)){var n=parseInt(s,10);if(n<1||n>3999)return 'Use a number from 1 to 3999.';var m=[[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']],r='';m.forEach(function(p){while(n>=p[0]){r+=p[1];n-=p[0]}});return r}var v={I:1,V:5,X:10,L:50,C:100,D:500,M:1000},u=s.toUpperCase(),t=0;if(!/^[IVXLCDM]+$/.test(u))return 'Type a number or a Roman numeral.';for(var i=0;i<u.length;i++){var a=v[u[i]],b=v[u[i+1]]||0;t+=a<b?-a:a}return String(t)})(s)}catch(e){r='Error: '+e.message}$('o').value=r}
['i'].concat([].map.call(document.querySelectorAll('.at-body select,.at-body input'),function(e){return e.id}).filter(Boolean)).forEach(function(id){var e=$(id);if(e){e.oninput=run;e.onchange=run}});
$('cp').onclick=function(){copyText($('o').value,$('cp'))};run();
},
how:["Type a number like 2026 or a Roman numeral like MMXXVI.","The answer appears at once.","Copy it."],
faq:[["What is 2026 in Roman numerals?","2026 is MMXXVI."],["What is the biggest number?","The standard system goes up to 3999."]]});
})(AIO);
