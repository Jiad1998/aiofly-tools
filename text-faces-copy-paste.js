(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("text-faces-copy-paste",{cat:"social",ic:"(◕‿◕)",t:"Text Faces and Kaomoji",d:"Copy cute text faces like ¯\\_(ツ)_/¯ for chats and posts.",
h:`<div class="res" id="o">Tap one to copy it.</div><div id="g" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px"></div>`,
f:function(){
var L=["(◕‿◕)", "(｡◕‿◕｡)", "(づ｡◕‿‿◕｡)づ", "ʕ•ᴥ•ʔ", "(ง •̀_•́)ง", "¯\\\\_(ツ)_/¯", "(╯°□°）╯︵ ┻━┻", "┬─┬ ノ( ゜-゜ノ)", "(ಥ﹏ಥ)", "(≧◡≦)", "٩(◕‿◕｡)۶", "(*^▽^*)", "(＾▽＾)", "(｡♥‿♥｡)", "( ͡° ͜ʖ ͡°)", "(¬‿¬)", "(⌐■_■)", "(╥﹏╥)", "(｡•́︿•̀｡)", "(ᵔᴥᵔ)", "(=^･ω･^=)", "(∩^o^)⊃━☆", "(ノ◕ヮ◕)ノ*:･ﾟ✧", "♪(´▽｀)", "(◔◡◔)", "(´• ω •`)", "(>_<)", "(^_^)v", "(T_T)", "(•‿•)"];$('g').innerHTML=L.map(function(x,i){return '<button type="button" class="kq" data-i="'+i+'" style="padding:12px 6px;font-size:16px">'+esc(x)+'</button>'}).join('');
$('g').onclick=function(e){var b=e.target.closest('.kq');if(!b)return;var t=L[+b.getAttribute('data-i')];copyText(t,b);$('o').innerHTML='Copied: <b>'+esc(t)+'</b>'};
},
how:["Tap a face.","It is copied at once.","Paste it into your chat or post."],
faq:[["What is a kaomoji?","It is a face made of text characters, popular in Japan."],["Do they work everywhere?","Most apps show them, but a few fonts may miss some symbols."]]});
})(AIO);
