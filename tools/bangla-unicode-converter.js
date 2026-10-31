(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
/* ---- Bangla phonetic typing ---- */
var BK=[['kh','খ'],['k','ক'],['gh','ঘ'],['g','গ'],['Ng','ঙ'],['chh','ছ'],['ch','চ'],['c','চ'],['jh','ঝ'],['j','জ'],['Th','ঠ'],['T','ট'],['Dh','ঢ'],['D','ড'],['N','ণ'],['th','থ'],['t','ত'],['dh','ধ'],['d','দ'],['n','ন'],['ph','ফ'],['p','প'],['f','ফ'],['bh','ভ'],['v','ভ'],['b','ব'],['m','ম'],['z','য'],['r','র'],['l','ল'],['sh','শ'],['Sh','ষ'],['S','শ'],['s','স'],['h','হ'],['Rh','ঢ়'],['R','ড়'],['y','য়'],['q','ক'],['x','ক্স'],['ksh','ক্ষ'],['kkh','ক্ষ'],['jn','জ্ঞ'],['ngg','ঙ্গ'],['ngk','ঙ্ক']];
var BV=[['rri','ঋ','ৃ'],['oi','ঐ','ৈ'],['ou','ঔ','ৌ'],['O','ও','ো'],['o','অ',''],['a','আ','া'],['i','ই','ি'],['I','ঈ','ী'],['u','উ','ু'],['U','ঊ','ূ'],['e','এ','ে']];
var BT=[];
BK.forEach(function(x){BT.push({l:x[0],b:x[1],t:'c'})});
BV.forEach(function(x){BT.push({l:x[0],i:x[1],k:x[2],t:'v'})});
BT.push({l:'ng',b:'ং',t:'m'});BT.push({l:'t`',b:'ৎ',t:'m'});
BT.sort(function(a,b){return b.l.length-a.l.length});
var WL={};('কক কট কত কর কল কষ কস খর গগ গধ গন গম গর গল ঘন ঘর ঙক ঙখ ঙগ ঙঘ চচ চছ জজ জঝ টট টর ডড ণট ণঠ ণড ণণ তত তথ তন তব তম তর থব দদ দধ দব দভ দম দর ধব ধম ধর নট নঠ নড নত নথ নদ নধ নন নব নম নস পট পত পন পপ পর পল পস ফর ফল বজ বদ বধ বব বভ বর বল ভর মন মপ মফ মব মভ মম মর মল লক লগ লট লড লপ লফ লব লম লল শচ শন শব শম শর শল ষক ষট ষঠ ষণ ষপ ষফ ষম সক সখ সট সত সথ সন সপ সফ সব সম সর সল সস হন হম হর হল').split(' ').forEach(function(p){WL[p]=1});
function bfind(s,i){for(var k=0;k<BT.length;k++){if(s.substr(i,BT[k].l.length)===BT[k].l){return BT[k]}}return null}
function bconv(s){
  var out='',i=0,afterC=false,last='';
  while(i<s.length){
    var m=bfind(s,i);
    if(!m){
      var ch=s.charAt(i);
      if(ch!==ch.toLowerCase()){var m2=bfind(ch.toLowerCase()+s.substr(i+1),0);if(m2&&m2.t!=='m'&&m2.t!=='v'){m=m2}}
    }
    if(m){
      if(m.t==='c'){
        if(afterC&&m.l==='y'){out+='্য'}
        else{
          var first=m.b.charAt(0);
          if(afterC&&WL[last+first]){out+='্'}
          out+=m.b;
        }
        last=m.b.charAt(m.b.length-1);afterC=true;
      }else if(m.t==='m'){out+=m.b;afterC=false;last=''}
      else{out+=afterC?m.k:m.i;afterC=false;last=''}
      i+=m.l.length;
    }else{
      var c=s.charAt(i);
      if(c>='0'&&c<='9'){out+='০১২৩৪৫৬৭৮৯'.charAt(c.charCodeAt(0)-48)}
      else if(c==='.'){out+='।'}
      else{out+=c}
      afterC=false;last='';i++;
    }
  }
  return out;
}
A.bconv=bconv;
add('bangla-unicode-converter',{cat:'text',ic:'বা',t:'English to Bangla Typing',d:'Type in English letters and get Bangla Unicode text. Example: ami bangla likhte pari',
h:`<label>Type here in English letters</label>
<textarea id="i" placeholder="ami bangla likhte pari"></textarea>
<label>Bangla text (Unicode)</label>
<textarea id="o" style="font-size:20px"></textarea>
<button id="cp" type="button">Copy Bangla text</button>
<div class="box"><b>Typing guide</b><br>
a = া &nbsp; i = ি &nbsp; I = ী &nbsp; u = ু &nbsp; U = ূ &nbsp; e = ে &nbsp; o = (no sign) &nbsp; <b>O</b> = ো &nbsp; oi = ৈ &nbsp; ou = ৌ &nbsp; rri = ৃ<br>
ng = ং &nbsp; Ng = ঙ &nbsp; T Th D Dh N = ট ঠ ড ঢ ণ &nbsp; R = ড়ঁ &nbsp; sh = শ &nbsp; Sh = ষ &nbsp; ksh = ক্ষ &nbsp; jn = জ্ঞ<br>
Examples: bhalO = ভালো, bondhu = বন্ধু, dhonyobad = ধন্যবাদ, prem = প্রেম</div>`,
f:function(){
  $('i').oninput=function(){$('o').value=bconv(this.value)};
  $('cp').onclick=function(){copyText($('o').value,this)};
},
how:['Type Bangla words using English letters, for example <b>ami</b>.','The Bangla Unicode text appears in the second box instantly.','Press <b>Copy Bangla text</b> and paste it into Facebook, WhatsApp or any app.'],
faq:[['Is this the same as Bijoy?','No. This is phonetic typing: you type how a word sounds. The output is Unicode, which works on all phones, Facebook and websites.'],['Why does tomake not give তোমাকে?','Use a capital O for the ো sign: tOmake. A small o means no vowel sign.']]});
})(AIO);
