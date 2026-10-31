(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("date-difference-calculator",{cat:"calc",ic:"📅",t:"Date Difference Calculator",d:"Count the days, weeks and months between two dates.",
h:`<div class="row"><label>From <input type="date" id="a"></label><label>To <input type="date" id="b"></label></div><div class="res" id="o"></div>`,
f:function(){
var t=new Date().toISOString().slice(0,10);$('a').value=t;$('b').value=new Date(Date.now()+30*864e5).toISOString().slice(0,10);
function calc(){var a=new Date($('a').value),b=new Date($('b').value);if(isNaN(a)||isNaN(b)){$('o').textContent='Pick two dates.';return}
var d=Math.round((b-a)/864e5),n=Math.abs(d),w=Math.floor(n/7);
var x=a<b?a:b,y=a<b?b:a,yy=y.getFullYear()-x.getFullYear(),mm=y.getMonth()-x.getMonth(),dd=y.getDate()-x.getDate();
if(dd<0){mm--;dd+=new Date(y.getFullYear(),y.getMonth(),0).getDate()}if(mm<0){yy--;mm+=12}
$('o').innerHTML='Total days: <b>'+n+'</b><br>Weeks and days: <b>'+w+' weeks, '+(n%7)+' days</b><br>Exact: <b>'+yy+' years, '+mm+' months, '+dd+' days</b><br>Hours: <b>'+num(n*24)+'</b>'}
$('a').oninput=calc;$('b').oninput=calc;calc();
},
how:["Pick the first date.","Pick the second date.","See the days, weeks and exact gap."],
faq:[["Does it count the end date?","It counts the gap between the dates. One day apart means 1."],["Can the later date come first?","Yes. The gap is always shown as a positive number."]]});
})(AIO);
