(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('age-calculator',{cat:'calc',ic:'🎂',t:'Age Calculator',d:'Find your exact age in years, months and days, and your next birthday.',
h:`<div class="row"><div><label>Date of birth</label><input type="date" id="b"></div>
<div><label>Age at the date of</label><input type="date" id="a"></div></div>
<button id="go" type="button">Calculate Age</button>
<div class="res" id="o" style="display:none"></div>`,
f:function(){
  function p(s){var x=s.split('-');return new Date(+x[0],+x[1]-1,+x[2])}
  var now=new Date();
  $('a').value=now.getFullYear()+'-'+('0'+(now.getMonth()+1)).slice(-2)+'-'+('0'+now.getDate()).slice(-2);
  $('go').onclick=function(){
    if(!$('b').value||!$('a').value){alert('Please select both dates.');return}
    var a=p($('b').value),b=p($('a').value);
    if(a>b){alert('Date of birth must be before the other date.');return}
    var y=b.getFullYear()-a.getFullYear(),m=b.getMonth()-a.getMonth(),d=b.getDate()-a.getDate();
    if(d<0){m--;d+=new Date(b.getFullYear(),b.getMonth(),0).getDate()}
    if(m<0){y--;m+=12}
    var days=Math.round((b-a)/864e5);
    var nb=new Date(b.getFullYear(),a.getMonth(),a.getDate());
    if(nb<b){nb=new Date(b.getFullYear()+1,a.getMonth(),a.getDate())}
    var nd=Math.round((nb-b)/864e5),wd=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][nb.getDay()];
    var o=$('o');o.style.display='block';
    o.innerHTML='<div class="big">'+y+' years, '+m+' months, '+d+' days</div>Total months: <b>'+(y*12+m)+'</b><br>Total weeks: <b>'+Math.floor(days/7)+'</b><br>Total days: <b>'+days+'</b><br>Next birthday: <b>'+(nd===0?'Today!':nd+' days ('+wd+')')+'</b>';
  };
},
how:['Select your date of birth.','Leave the second date as today, or choose any other date.','Press <b>Calculate Age</b>.'],
faq:[['Can I find my age on a past or future date?','Yes. Change the second date to any day and the calculator shows your age on that day.'],['How are months counted?','We count full calendar months, the same way a birthday is counted.']]});
})(AIO);
