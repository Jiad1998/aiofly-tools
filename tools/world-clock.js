(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("world-clock",{cat:"calc",ic:"🕰️",t:"World Clock",d:"See the current time in Dhaka, London, New York, Dubai and other cities.",
h:`<div id="o"></div>`,
f:function(){
var Z=[['Dhaka','Asia/Dhaka'],['London','Europe/London'],['New York','America/New_York'],['Los Angeles','America/Los_Angeles'],['Dubai','Asia/Dubai'],['Riyadh','Asia/Riyadh'],['Kolkata','Asia/Kolkata'],['Singapore','Asia/Singapore'],['Tokyo','Asia/Tokyo'],['Sydney','Australia/Sydney']];
function run(){var n=new Date();$('o').innerHTML='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px">'+Z.map(function(z){return '<div class="box"><b>'+z[0]+'</b><div class="res big" style="font-size:26px">'+new Intl.DateTimeFormat('en-GB',{timeZone:z[1],hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(n)+'</div><small>'+new Intl.DateTimeFormat('en-GB',{timeZone:z[1],weekday:'short',day:'numeric',month:'short'}).format(n)+'</small></div>'}).join('')+'</div>'}
run();setInterval(run,1000);
},
how:["Open the page.","Read the live time for each city.","Use it before calling friends or clients abroad."],
faq:[["Is the time accurate?","It uses your device clock and the time zone rules in your browser."],["Can I add more cities?","Use the Time Zone Converter tool for more zones."]]});
})(AIO);
