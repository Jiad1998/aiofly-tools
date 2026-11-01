(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("file-hash-checker",{cat:"file",ic:"🧾",t:"File Hash Checker",d:"Get the SHA-256 and SHA-1 fingerprint of any file to check it is not damaged.",
h:`<label>Choose a file</label><input type="file" id="f"><div class="res" id="o"></div>`,
f:function(){
$('f').onchange=async function(){var f=this.files[0];if(!f)return;if(f.size>200*1048576){$('o').textContent='Please choose a file under 200 MB.';return}$('o').textContent='Working...';var b=await f.arrayBuffer(),A=['SHA-1','SHA-256','SHA-512'],r=await Promise.all(A.map(function(a){return crypto.subtle.digest(a,b)}));
function hex(x){return Array.from(new Uint8Array(x)).map(function(y){return ('0'+y.toString(16)).slice(-2)}).join('')}
$('o').innerHTML='File: <b>'+esc(f.name)+'</b><br>Size: <b>'+kb(f.size)+' KB</b><br>'+A.map(function(a,i){return a+':<br><span style="word-break:break-all"><b>'+hex(r[i])+'</b></span>'}).join('<br>')}
},
how:["Choose a file.","Wait a moment for the hashes.","Compare them with the hash given by the file provider."],
faq:[["Why check a hash?","If the hash matches the one published by the provider, your download is complete and unchanged."],["Is my file uploaded?","No. The file is read on your device only."]]});
})(AIO);
