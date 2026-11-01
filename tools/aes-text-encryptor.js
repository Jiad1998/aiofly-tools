(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("aes-text-encryptor",{cat:"security",ic:"🔒",t:"AES Text Encryptor",d:"Encrypt and decrypt text with a password using AES-256. Everything stays on your device.",
h:`<textarea id="i" placeholder="Text to encrypt, or encrypted text to decrypt"></textarea><input id="p" type="password" placeholder="Password" autocomplete="off"><div class="row"><button id="en" type="button">Encrypt</button><button id="de" type="button">Decrypt</button><button id="cp" type="button">Copy result</button></div><textarea id="o" readonly></textarea>`,
f:function(){
var enc=new TextEncoder(),dec=new TextDecoder();
function b64(a){var s='';new Uint8Array(a).forEach(function(x){s+=String.fromCharCode(x)});return btoa(s)}function ub(s){return Uint8Array.from(atob(s),function(c){return c.charCodeAt(0)})}
async function key(p,salt){var k=await crypto.subtle.importKey('raw',enc.encode(p),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',salt:salt,iterations:100000,hash:'SHA-256'},k,{name:'AES-GCM',length:256},false,['encrypt','decrypt'])}
$('en').onclick=async function(){try{var p=$('p').value;if(!p||!$('i').value){$('o').value='Type text and a password.';return}var salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12)),k=await key(p,salt),c=await crypto.subtle.encrypt({name:'AES-GCM',iv:iv},k,enc.encode($('i').value));var all=new Uint8Array(28+c.byteLength);all.set(salt,0);all.set(iv,16);all.set(new Uint8Array(c),28);$('o').value=b64(all)}catch(e){$('o').value='Error: '+e.message}};
$('de').onclick=async function(){try{var p=$('p').value,a=ub($('i').value.trim()),k=await key(p,a.slice(0,16)),d=await crypto.subtle.decrypt({name:'AES-GCM',iv:a.slice(16,28)},k,a.slice(28));$('o').value=dec.decode(d)}catch(e){$('o').value='Could not decrypt. Check the password and the text.'}};
$('cp').onclick=function(){copyText($('o').value,$('cp'))};
},
how:["Type your text and a strong password.","Press Encrypt and copy the result.","To read it later, paste the encrypted text, type the same password and press Decrypt."],
faq:[["Is this really secure?","It uses AES-256-GCM with a key made from your password. A strong password is important."],["What if I forget the password?","The text cannot be recovered. There is no reset."]]});
})(AIO);
