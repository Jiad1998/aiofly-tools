(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("youtube-title-generator",{cat:"social",ic:"🎬",t:"YouTube Title Generator",d:"Get catchy YouTube title ideas for your video topic.",
h:`<label>Your video topic (example: iPhone 15 review)</label><input type="text" id="i" value="your topic"><div id="o"></div>`,
f:function(){
var T=["{k} - Everything You Need to Know", "I Tried {k} for 7 Days (Honest Result)", "{k}: The Complete Beginner's Guide", "Top 10 Things About {k}", "{k} Explained in 5 Minutes", "How to Master {k} Fast (Step by Step)", "Stop Making These {k} Mistakes!", "{k} in 2026: What Changed?", "The Truth About {k} Nobody Tells You", "{k} vs The Rest: Which Is Better?", "Why {k} Is Worth Your Time", "{k} Tips and Tricks You Must Know"];
function run(){var s=($('i').value||'your topic').trim();var out=T.map(function(x){return x.split('{k}').join(s)});
$('o').innerHTML=out.map(function(x,i){return '<div style="display:flex;gap:8px;align-items:flex-start;padding:8px 0;border-bottom:1px solid rgba(128,128,128,.25)"><span style="flex:1">'+esc(x)+'</span><button type="button" data-i="'+i+'" style="padding:6px 10px">Copy</button></div>'}).join('');
[].forEach.call($('o').querySelectorAll('button'),function(b){b.onclick=function(){copyText(out[+b.getAttribute('data-i')],b)}})}
$('i').oninput=run;run();
},
how:["Type your video topic.","Browse the title ideas.","Press <b>Copy</b> and edit the title to fit your video."],
faq:[["How long should a YouTube title be?","Keep it under about 60 characters so it is not cut off in search results."],["Do titles affect views?","Yes. A clear title with your main keyword helps people find and click your video."]]});
})(AIO);
