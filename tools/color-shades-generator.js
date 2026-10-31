(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("color-shades-generator",{cat:"color",ic:"🎚️",t:"Color Shades Generator",d:"Get lighter and darker shades of any color.",
h:`<div class="row"><label>Base color<input type="color" id="c" value="#4f46e5"></label></div><div id="o" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(90px,1fr));gap:8px;margin-top:10px"></div>`,
f:function(){
function mix(h,t,p){var r=[1,3,5].map(function(i){var v=parseInt(h.substr(i,2),16);return Math.round(v+(t-v)*p)});return '#'+r.map(function(v){return ('0'+v.toString(16)).slice(-2)}).join('').toUpperCase()}
function run(){var c=$('c').value,a=[];for(var i=5;i>=1;i--)a.push(mix(c,255,i/6));a.push(c.toUpperCase());for(i=1;i<=5;i++)a.push(mix(c,0,i/6));
$('o').innerHTML=a.map(function(x,i){var d=i>5;return '<button type="button" class="sh2" data-c="'+x+'" style="height:70px;border-radius:12px;border:1px solid rgba(128,128,128,.4);background:'+x+';color:'+(i>3?'#fff':'#111')+';font-weight:700;cursor:pointer">'+x+'</button>'}).join('')}
$('c').oninput=run;$('o').onclick=function(e){var b=e.target.closest('.sh2');if(b)copyText(b.getAttribute('data-c'),b)};run();
},
how:["Pick a base color.","See 5 lighter and 5 darker shades.","Tap a shade to copy its HEX code."],
faq:[["What are shades and tints?","Tints are lighter (mixed with white). Shades are darker (mixed with black)."],["Where can I use this?","To build button hover colors and consistent design palettes."]]});
})(AIO);
