(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("days-until-calculator",{cat:"calc",ic:"📆",t:"Days Until Calculator",d:"Count the days left until a date, like an exam, a trip or Eid.",
h:`<label>Target date<input type="date" id="d"></label><label>Event name<input id="n" placeholder="Eid, exam, trip..."></label><div class="res big" id="o"></div>`,
f:function(){
var t=new Date();t.setDate(t.getDate()+30);$('d').value=t.toISOString().slice(0,10);
function run(){var d=new Date($('d').value+'T00:00:00'),n=new Date();n.setHours(0,0,0,0);if(isNaN(d)){$('o').textContent='Pick a date.';return}var x=Math.round((d-n)/864e5),nm=$('n').value.trim()||'your date';$('o').innerHTML=x>0?'<b>'+x+'</b> days until '+esc(nm)+'<br><small>'+Math.floor(x/7)+' weeks and '+(x%7)+' days</small>':x===0?'<b>Today</b> is '+esc(nm)+'!':'<b>'+(-x)+'</b> days since '+esc(nm)}
$('d').oninput=run;$('n').oninput=run;run();
},
how:["Pick the date.","Type a name for the event if you like.","Read the number of days left."],
faq:[["Does it count today?","It counts the full days between today and the target date."],["Can I count days since a date?","Yes. Pick a past date and it shows days since."]]});
})(AIO);
