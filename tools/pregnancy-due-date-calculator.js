(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("pregnancy-due-date-calculator",{cat:"calc",ic:"🤰",t:"Pregnancy Due Date Calculator",d:"Estimate your due date from the first day of your last period.",
h:`<label>First day of your last period<input type="date" id="d"></label><label>Cycle length (days)<input type="number" id="c" value="28" min="21" max="40"></label><div class="res" id="o"></div>`,
f:function(){
var t=new Date();t.setDate(t.getDate()-30);$('d').value=t.toISOString().slice(0,10);
function fm(d){return d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}
function run(){var d=new Date($('d').value),c=parseInt($('c').value,10)||28;if(isNaN(d)){$('o').textContent='Pick a date.';return}var due=new Date(d.getTime()+(280+c-28)*864e5),w=Math.floor((Date.now()-d)/864e5);
$('o').innerHTML='Estimated due date: <b>'+fm(due)+'</b><br>Pregnancy so far: <b>'+(w>=0?Math.floor(w/7)+' weeks '+(w%7)+' days':'Date is in the future')+'</b><br>First trimester ends: <b>'+fm(new Date(d.getTime()+91*864e5))+'</b><br>Second trimester ends: <b>'+fm(new Date(d.getTime()+189*864e5))+'</b><br><small>This is only an estimate. Please follow your doctor.</small>'}
$('d').oninput=run;$('c').oninput=run;run();
},
how:["Pick the first day of your last period.","Enter your usual cycle length.","Read the due date and trimester dates."],
faq:[["How is the due date found?","It adds 280 days (40 weeks) to the first day of the last period."],["Is it exact?","No. Only a small number of babies arrive on the due date. A doctor will confirm it by scan."]]});
})(AIO);
