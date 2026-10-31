(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("emoji-copy-paste",{cat:"social",ic:"😀",t:"Emoji Copy and Paste",d:"Tap emojis to build a message, then copy it for any app.",
h:`<div class="res" id="o"></div><div id="g"></div>`,
f:function(){
var D={"Smileys": "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕", "Hands": "👍 👎 👌 ✌ 🤞 🤟 🤘 🤙 👈 👉 👆 👇 ☝ ✋ 🤚 🖐 🖖 👋 🤝 🙏 👏 🙌 👐 🤲 💪 ✍ 🤳", "Hearts": "❤ 🧡 💛 💚 💙 💜 🖤 🤍 🤎 💔 ❣ 💕 💞 💓 💗 💖 💘 💝 💟", "Animals": "🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐸 🐵 🐔 🐧 🐦 🐤 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐢 🐍 🐙 🦀 🐠 🐬 🐳 🦈 🐘 🦒 🐪 🐓", "Food": "🍎 🍊 🍋 🍌 🍉 🍇 🍓 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🥑 🥕 🌽 🥔 🍞 🧀 🥚 🍳 🥞 🍔 🍟 🍕 🌭 🌮 🍗 🍖 🍚 🍜 🍝 🍣 🍦 🍩 🍪 🎂 🍰 🍫 🍬 ☕ 🍵 🥤 🍺", "Travel": "🚗 🚕 🚌 🚑 🚒 🚓 🚜 🚲 🛵 🏍 ✈ 🚀 🚁 🚢 ⛵ 🚂 🏠 🏢 🏥 🏫 🕌 🕍 ⛪ 🏖 🏝 🏔 🌋 🌅 🌄 🌃 🌉", "Objects": "⌚ 📱 💻 ⌨ 🖥 📷 🎥 📺 📻 🔋 💡 🔦 📚 📖 ✏ 🖊 📝 📌 📎 ✂ 🔑 🔒 🎁 🎈 🎉 🏆 🥇 ⚽ 🏀 🏏 🎮 🎧 🎤 🎵", "Symbols": "✨ ⭐ 🌟 💫 ⚡ 🔥 💥 ☀ 🌙 ☁ ❄ 💧 🌈 ✅ ❌ ❓ ❗ ⚠ ♻ ✔ ➕ ➖ ➡ ⬅ ⬆ ⬇ 🔔 💯 🆓 🆕 🔝"},K=Object.keys(D);
$('g').innerHTML=K.map(function(k){return '<h3 style="margin:14px 0 6px">'+k+'</h3><div style="display:flex;flex-wrap:wrap;gap:6px">'+D[k].split(' ').map(function(e){return '<button type="button" class="em" style="font-size:26px;padding:4px 8px;line-height:1.2">'+e+'</button>'}).join('')+'</div>'}).join('');
var buf='';$('g').onclick=function(e){var b=e.target.closest('.em');if(!b)return;buf+=b.textContent;$('o').innerHTML='<b style="font-size:22px">'+buf+'</b> <button type="button" id="cp">Copy</button> <button type="button" id="cl">Clear</button>';$('cp').onclick=function(){copyText(buf,$('cp'))};$('cl').onclick=function(){buf='';$('o').innerHTML=''}};
},
how:["Tap the emojis you like.","They collect in the box at the top.","Press Copy and paste into any app."],
faq:[["Will emojis look the same everywhere?","No. Each phone and app draws emojis in its own style."],["Can I use them in bios and captions?","Yes. Paste them anywhere that accepts text."]]});
})(AIO);
