(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("age-difference-calculator",{cat:"calc",ic:"👫",t:"Age Difference Calculator",d:"Find the age gap between two people in years, months and days.",
h:`<div class="row"><label>First birth date<input type="date" id="a" value="1998-05-10"></label><label>Second birth date<input type="date" id="b" value="2001-09-20"></label></div><div class="res" id="o"></div>`,
f:function(){
function run(){var a=new Date($('a').value),b=new Date($('b').value);if(isNaN(a)||isNaN(b)){$('o').textContent='Pick two dates.';return}var x=a<b?a:b,y=a<b?b:a,yy=y.getFullYear()-x.getFullYear(),mm=y.getMonth()-x.getMonth(),dd=y.getDate()-x.getDate();if(dd<0){mm--;dd+=new Date(y.getFullYear(),y.getMonth(),0).getDate()}if(mm<0){yy--;mm+=12}$('o').innerHTML='Age difference: <b>'+yy+' years, '+mm+' months, '+dd+' days</b><br>Total days: <b>'+num(Math.round((y-x)/864e5))+'</b><br>'+(a<b?'The first person is older.':a>b?'The second person is older.':'Same birth date.')}
$('a').oninput=run;$('b').oninput=run;run();
},
how:["Pick the first birth date.","Pick the second birth date.","Read the exact age difference."],
faq:[["Does it work for any two dates?","Yes. It shows the gap between any two dates."],["Who is older?","The tool tells you."]]});
})(AIO);
