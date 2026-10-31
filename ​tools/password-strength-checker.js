(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("password-strength-checker",{cat:"security",ic:"🛡️",t:"Password Strength Checker",d:"Check how strong your password is. Nothing is sent anywhere.",
h:`<input id="i" type="text" placeholder="Type a password to test" autocomplete="off"><div class="res" id="o"></div>`,
f:function(){
function run(){var s=$('i').value;if(!s){$('o').textContent='Type a password. It never leaves your phone.';return}
var p=0;if(/[a-z]/.test(s))p+=26;if(/[A-Z]/.test(s))p+=26;if(/[0-9]/.test(s))p+=10;if(/[^A-Za-z0-9]/.test(s))p+=33;
var bits=Math.round(s.length*Math.log(p)/Math.LN2),common=['password','123456','qwerty','111111','abc123','iloveyou','admin','welcome','12345678','123456789'],weak=common.some(function(c){return s.toLowerCase().indexOf(c)>-1});
var lv=bits<40?'Very weak':bits<56?'Weak':bits<72?'Fair':bits<96?'Strong':'Very strong';if(weak)lv='Very weak';
var secs=Math.pow(2,bits)/2e10,t=secs<1?'less than a second':secs<60?Math.round(secs)+' seconds':secs<3600?Math.round(secs/60)+' minutes':secs<86400?Math.round(secs/3600)+' hours':secs<3.15e7?Math.round(secs/86400)+' days':secs<3.15e9?Math.round(secs/3.15e7)+' years':'centuries';
$('o').innerHTML='Strength: <b>'+lv+'</b><br>Length: <b>'+s.length+'</b><br>Entropy: <b>'+bits+' bits</b><br>Time to crack (fast attack): <b>'+t+'</b>'+(weak?'<br><b>This contains a very common password.</b>':'')+(s.length<12?'<br>Tip: use at least 12 characters.':'')}
$('i').oninput=run;run();
},
how:["Type a password in the box.","Read the strength and the estimated time to crack.","Make it longer and mix letters, numbers and symbols."],
faq:[["Is it safe to type my password?","Yes. The check runs inside your browser and nothing is uploaded. Still, avoid testing your real passwords on any site."],["What makes a password strong?","Length matters most. Use 12 or more characters and do not reuse passwords."]]});
})(AIO);
