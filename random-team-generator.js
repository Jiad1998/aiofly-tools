(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("random-team-generator",{cat:"gen",ic:"👥",t:"Random Team Generator",d:"Split a list of names into fair random teams.",
h:`<textarea id="i" placeholder="One name per line"></textarea><div class="row"><label>Number of teams<input type="number" id="n" value="2" min="2" max="20"></label><button id="go" type="button">Make teams</button></div><div id="o"></div>`,
f:function(){
$('go').onclick=function(){var a=$('i').value.split(/\r?\n/).map(function(x){return x.trim()}).filter(Boolean),n=Math.max(2,Math.min(20,parseInt($('n').value,10)||2));if(a.length<n){$('o').innerHTML='<p class="note">Add at least '+n+' names.</p>';return}
for(var i=a.length-1;i>0;i--){var j=rnd(i+1),t=a[i];a[i]=a[j];a[j]=t}var T=[];for(i=0;i<n;i++)T.push([]);a.forEach(function(x,i){T[i%n].push(x)});
$('o').innerHTML=T.map(function(t,i){return '<div class="box"><b>Team '+(i+1)+' ('+t.length+')</b><div>'+t.map(esc).join('<br>')+'</div></div>'}).join('')};
},
how:["Type one name per line.","Choose the number of teams.","Press Make teams."],
faq:[["Are the teams equal in size?","They differ by at most one person."],["Can I run it again?","Yes. Press the button again for new teams."]]});
})(AIO);
