(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("favicon-generator",{cat:"web",ic:"⭐",t:"Favicon Generator",d:"Make a website icon (favicon) from an emoji or letters. Download PNG in all common sizes.",
h:`<label>Emoji or 1-2 letters</label><input type="text" id="t" value="A" maxlength="3"><div class="row"><label style="flex:1 1 110px">Background<input type="color" id="b" value="#7c3aed"></label><label style="flex:1 1 110px">Text color<input type="color" id="c" value="#ffffff"></label><label style="flex:1 1 110px">Shape<select id="s"><option value="r">Rounded</option><option value="c">Circle</option><option value="q">Square</option></select></label></div><canvas id="cv" width="256" height="256" style="width:128px;height:128px;border:1px solid #8884;margin:10px 0"></canvas><br><label>Download size</label><select id="z"><option>512</option><option>192</option><option selected>180</option><option>64</option><option>32</option><option>16</option></select><button id="dl" type="button">⬇ Download PNG</button>`,
f:function(){
function draw(c,S,t,b,fg,sh){var x=c.getContext('2d');c.width=c.height=S;x.clearRect(0,0,S,S);x.fillStyle=b;if(sh==='c'){x.beginPath();x.arc(S/2,S/2,S/2,0,7);x.fill()}else if(sh==='r'){var r=S*0.22;x.beginPath();x.moveTo(r,0);x.arcTo(S,0,S,S,r);x.arcTo(S,S,0,S,r);x.arcTo(0,S,0,0,r);x.arcTo(0,0,S,0,r);x.closePath();x.fill()}else x.fillRect(0,0,S,S);
x.fillStyle=fg;x.textAlign='center';x.textBaseline='middle';var n=Math.max(1,t.length);x.font='bold '+Math.round(S*(n>1?0.5:0.62))+'px Arial,sans-serif';x.fillText(t,S/2,S/2+S*0.03)}
function run(){draw($('cv'),256,$('t').value,$('b').value,$('c').value,$('s').value)}
['t','b','c','s'].forEach(function(i){$(i).oninput=run;$(i).onchange=run});run();
$('dl').onclick=function(){var c=document.createElement('canvas');draw(c,+$('z').value,$('t').value,$('b').value,$('c').value,$('s').value);c.toBlob(function(bl){var a=document.createElement('a');a.href=URL.createObjectURL(bl);a.download='favicon-'+$('z').value+'.png';document.body.appendChild(a);a.click();a.remove()})};
},
how:["Type an emoji or one or two letters.","Pick colors and a shape.","Choose a size and press <b>Download PNG</b>."],
faq:[["Which sizes do I need?","32x32 for browser tabs, 180x180 for Apple devices and 192x192 or 512x512 for Android."],["How do I add it to Blogger?","In Blogger go to Settings, then Favicon, and upload the PNG."]]});
})(AIO);
