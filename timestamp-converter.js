(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("timestamp-converter",{cat:"dev",ic:"🕒",t:"Unix Timestamp Converter",d:"Convert Unix time to a readable date and back.",
h:`<div class="box"><b>Timestamp to date</b><input type="number" id="t" placeholder="Unix timestamp"><div class="res" id="r1">-</div></div><div class="box"><b>Date to timestamp</b><input type="datetime-local" id="d"><div class="res" id="r2">-</div></div><div class="res" id="now"></div>`,
f:function(){
function a(){var t=parseFloat($('t').value);if(isNaN(t)){$('r1').textContent='-';return}var ms=Math.abs(t)<1e11?t*1000:t,d=new Date(ms);$('r1').innerHTML=isNaN(d)?'Invalid':'Local: <b>'+esc(d.toString())+'</b><br>UTC: <b>'+d.toISOString()+'</b>'}
function b(){var d=new Date($('d').value);$('r2').innerHTML=isNaN(d)?'-':'Seconds: <b>'+Math.floor(d/1000)+'</b><br>Milliseconds: <b>'+d.getTime()+'</b>'}
$('t').oninput=a;$('d').oninput=b;$('now').innerHTML='Current timestamp: <b>'+Math.floor(Date.now()/1000)+'</b>';$('t').value=Math.floor(Date.now()/1000);a();
},
how:["Type a Unix timestamp to see the date.","Or pick a date to get its timestamp.","Seconds and milliseconds are both understood."],
faq:[["What is a Unix timestamp?","It is the number of seconds since January 1, 1970 (UTC)."],["Seconds or milliseconds?","The tool guesses: a 10-digit number is seconds, a 13-digit number is milliseconds."]]});
})(AIO);
