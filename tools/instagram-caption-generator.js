(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("instagram-caption-generator",{cat:"social",ic:"📸",t:"Instagram Caption Generator",d:"Get ready-to-use Instagram caption ideas for any topic. Copy and post.",
h:`<label>Topic or mood (example: travel, coffee, gym)</label><input type="text" id="i" value="travel"><div id="o"></div>`,
f:function(){
var T=["Living for {k} ✨", "All about {k} today 💫", "Less stress, more {k}.", "{k} is my kind of therapy 🌿", "Made for {k}. Made for me.", "Good vibes and {k} only 😎", "Just a little bit of {k} never hurt anyone.", "Dreaming of {k} 🌅", "Keep calm and love {k} ❤️", "{k} mode: ON 🔥", "Life is better with {k}.", "Chasing {k}, one day at a time.", "Happiness is {k} 😊", "Powered by {k} ⚡", "Today's mood: {k} 💛"];
function run(){var s=($('i').value||'travel').trim();var out=T.map(function(x){return x.split('{k}').join(s)});
$('o').innerHTML=out.map(function(x,i){return '<div style="display:flex;gap:8px;align-items:flex-start;padding:8px 0;border-bottom:1px solid rgba(128,128,128,.25)"><span style="flex:1">'+esc(x)+'</span><button type="button" data-i="'+i+'" style="padding:6px 10px">Copy</button></div>'}).join('');
[].forEach.call($('o').querySelectorAll('button'),function(b){b.onclick=function(){copyText(out[+b.getAttribute('data-i')],b)}})}
$('i').oninput=run;run();
},
how:["Type a topic or mood.","Read the captions that appear.","Press <b>Copy</b> and paste it into Instagram."],
faq:[["Can I edit the caption?","Yes. Paste it and change it however you like."],["Do these work for Facebook and TikTok?","Yes. They are short captions that work on any platform."]]});
})(AIO);
