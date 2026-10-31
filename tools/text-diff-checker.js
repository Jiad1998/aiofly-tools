(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("text-diff-checker",{cat:"text",ic:"🆚",t:"Text Difference Checker",d:"Compare two texts and see added and removed lines.",
h:`<div class="row"><textarea id="a" placeholder="Original text"></textarea><textarea id="b" placeholder="Changed text"></textarea></div><div class="res" id="s"></div><div id="o" style="font-family:monospace;white-space:pre-wrap;word-break:break-word"></div>`,
f:function(){
function run(){var A=$('a').value.split('\n'),B=$('b').value.split('\n'),n=A.length,m=B.length;if(n*m>4000000){$('o').textContent='Text is too long to compare.';return}
var L=[];for(var i=0;i<=n;i++){L.push(new Array(m+1).fill(0))}
for(i=n-1;i>=0;i--)for(var j=m-1;j>=0;j--)L[i][j]=A[i]===B[j]?L[i+1][j+1]+1:Math.max(L[i+1][j],L[i][j+1]);
var o=[],ad=0,de=0;i=0;j=0;while(i<n&&j<m){if(A[i]===B[j]){o.push('<div>  '+esc(A[i])+'</div>');i++;j++}else if(L[i+1][j]>=L[i][j+1]){o.push('<div style="background:rgba(239,68,68,.22)">- '+esc(A[i])+'</div>');i++;de++}else{o.push('<div style="background:rgba(34,197,94,.22)">+ '+esc(B[j])+'</div>');j++;ad++}}
while(i<n){o.push('<div style="background:rgba(239,68,68,.22)">- '+esc(A[i])+'</div>');i++;de++}while(j<m){o.push('<div style="background:rgba(34,197,94,.22)">+ '+esc(B[j])+'</div>');j++;ad++}
$('s').innerHTML=(ad||de)?'Added lines: <b>'+ad+'</b> &nbsp; Removed lines: <b>'+de+'</b>':'The two texts are the same.';$('o').innerHTML=o.join('')}
$('a').oninput=run;$('b').oninput=run;run();
},
how:["Paste the original text on the left.","Paste the changed text on the right.","Green lines were added and red lines were removed."],
faq:[["What does it compare?","It compares line by line and shows what changed."],["Is my text uploaded?","No. The comparison happens on your device."]]});
})(AIO);
