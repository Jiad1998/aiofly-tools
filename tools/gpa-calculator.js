(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("gpa-calculator",{cat:"education",ic:"🎓",t:"GPA Calculator (5.0 Scale)",d:"Calculate your GPA with the Bangladesh 5.0 grading scale.",
h:`<p>Enter your subjects on the Bangladesh 5.0 scale. Leave unused rows empty.</p><div id="rows"></div><div class="res" id="o"></div>`,
f:function(){
var G=[['A+',5],['A',4],['A-',3.5],['B',3],['C',2],['D',1],['F',0]],R=$('rows');
var html='';for(var i=1;i<=10;i++)html+='<div class="row"><select class="g"><option value="">Subject '+i+' grade</option>'+G.map(function(x){return '<option value="'+x[1]+'">'+x[0]+' ('+x[1]+')</option>'}).join('')+'</select><input type="number" class="c" value="1" min="0" step="any" title="Credit or weight"></div>';R.innerHTML=html;
function run(){var gs=[].slice.call(R.querySelectorAll('.g')),cs=[].slice.call(R.querySelectorAll('.c')),sp=0,sc=0,n=0,fail=false;gs.forEach(function(g,i){if(g.value!==''){var c=parseFloat(cs[i].value)||0;sp+=parseFloat(g.value)*c;sc+=c;n++;if(parseFloat(g.value)===0)fail=true}});
$('o').innerHTML=n?'Subjects: <b>'+n+'</b><br>GPA: <b>'+(fail?'0.00 (fail in a subject)':(sp/sc).toFixed(2))+'</b>':'Pick at least one grade.'}
R.oninput=run;R.onchange=run;run();
},
how:["Pick the grade for each subject.","Change the weight if subjects have different credits.","Read your GPA."],
faq:[["What are the grade points?","A+ is 5, A is 4, A- is 3.5, B is 3, C is 2, D is 1 and F is 0."],["Why is my GPA 0 with one F?","Under the board rule, a failing grade in any subject gives no overall GPA."]]});
})(AIO);
