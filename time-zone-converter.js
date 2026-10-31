(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("time-zone-converter",{cat:"calc",ic:"🌍",t:"Time Zone Converter",d:"Convert a date and time between Dhaka, London, New York, Dubai and more.",
h:`<label>Date and time<input type="datetime-local" id="dt"></label><div class="row"><label>From <select id="f"></select></label><label>To <select id="t"></select></label></div><div class="res big" id="o"></div><div class="res" id="all"></div>`,
f:function(){
var Z=['Asia/Dhaka','UTC','Asia/Kolkata','Asia/Karachi','Asia/Dubai','Asia/Riyadh','Asia/Kathmandu','Asia/Singapore','Asia/Kuala_Lumpur','Asia/Tokyo','Australia/Sydney','Europe/London','Europe/Paris','America/New_York','America/Chicago','America/Los_Angeles'];
['f','t'].forEach(function(id,k){$(id).innerHTML=Z.map(function(z){return '<option>'+z+'</option>'}).join('');$(id).value=k?'America/New_York':'Asia/Dhaka'});
function off(z,d){var p=new Intl.DateTimeFormat('en-US',{timeZone:z,hourCycle:'h23',year:'numeric',month:'numeric',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric'}).formatToParts(d),o={};p.forEach(function(x){o[x.type]=+x.value});return (Date.UTC(o.year,o.month-1,o.day,o.hour,o.minute,o.second)-Math.floor(d.getTime()/1000)*1000)}
function toUtc(s,z){var m=s.match(/(\d+)-(\d+)-(\d+)T(\d+):(\d+)/);if(!m)return null;var g=Date.UTC(+m[1],+m[2]-1,+m[3],+m[4],+m[5]);var u=g-off(z,new Date(g));u=g-off(z,new Date(u));return new Date(u)}
function fmt(d,z){return new Intl.DateTimeFormat('en-GB',{timeZone:z,dateStyle:'medium',timeStyle:'short'}).format(d)}
var n=new Date();$('dt').value=new Date(n.getTime()-n.getTimezoneOffset()*6e4).toISOString().slice(0,16);
function run(){var u=toUtc($('dt').value,$('f').value);if(!u){$('o').textContent='Pick a date and time.';return}$('o').textContent=fmt(u,$('t').value)+' ('+$('t').value+')';$('all').innerHTML=Z.map(function(z){return esc(z)+': <b>'+fmt(u,z)+'</b>'}).join('<br>')}
['dt','f','t'].forEach(function(i){$(i).oninput=run;$(i).onchange=run});run();
},
how:["Pick the date and time.","Choose the zone you are in and the zone you want.","Read the converted time and a list of other zones."],
faq:[["What time zone is Bangladesh in?","Bangladesh uses Bangladesh Standard Time, UTC+6 (Asia/Dhaka)."],["Does it handle daylight saving?","Yes. The browser knows the rules for each zone."]]});
})(AIO);
