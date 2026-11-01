(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("sleep-calculator",{cat:"health",ic:"😴",t:"Sleep Calculator",d:"Find the best bedtime or wake-up time using 90-minute sleep cycles.",
h:`<label>I want to</label><select id="m"><option value="w">Wake up at a time (find bedtime)</option><option value="b">Go to bed now / at a time (find wake-up)</option></select><label>Time</label><input type="time" id="t" value="07:00"><div class="res" id="o"></div>`,
f:function(){
function fmt(m){m=((m%1440)+1440)%1440;var h=Math.floor(m/60),mm=m%60,ap=h>=12?'PM':'AM';h=h%12||12;return h+':'+('0'+mm).slice(-2)+' '+ap}
function run(){var p=$('t').value.split(':'),t=(+p[0])*60+(+p[1]),w=$('m').value==='w',o=[];if(isNaN(t)){$('o').textContent='';return}
[6,5,4,3].forEach(function(c){var d=c*90+15;o.push('<b>'+fmt(w?t-d:t+d)+'</b> &nbsp;('+c+' cycles, '+(c*1.5)+' hours of sleep)')});
$('o').innerHTML=(w?'Go to bed at one of these times:<br>':'Wake up at one of these times:<br>')+o.join('<br>')+'<br><small>Includes about 15 minutes to fall asleep.</small>'}
['m','t'].forEach(function(i){$(i).oninput=run;$(i).onchange=run});run();
},
how:["Choose whether you know your wake-up time or bedtime.","Set the time.","Pick one of the suggested times."],
faq:[["What is a sleep cycle?","A sleep cycle lasts about 90 minutes. Waking at the end of a cycle usually feels easier."],["How much sleep do adults need?","Most adults need 7 to 9 hours."]]});
})(AIO);
