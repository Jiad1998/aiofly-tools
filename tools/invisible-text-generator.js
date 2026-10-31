(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('invisible-text-generator',{cat:'social',ic:'👻',t:'Invisible Text Generator',d:'Copy blank invisible text for empty names, bios and captions.',
h:`<label>Type of blank space</label>
<select id="ty">
<option value="ㅤ">Hangul Filler (works in most apps)</option>
<option value="⠀">Braille Blank (Instagram, TikTok)</option>
<option value=" ">Em Space (wide blank)</option>
<option value="​">Zero Width Space (thinnest)</option>
</select>
<label>How many characters: <span id="cv">1</span></label><input type="range" id="n" min="1" max="50" value="1">
<button id="cp" type="button">Copy invisible text</button>
<div class="res"><span id="o"></span><br><small>The blank text is already in your selection. Press Copy and paste it where you need an empty space.</small></div>
<label>Paste here to test</label><textarea id="t" style="min-height:70px" placeholder="Paste here..."></textarea>`,
f:function(){
  function txt(){return new Array(parseInt($('n').value)+1).join($('ty').value)}
  function upd(){$('cv').textContent=$('n').value;$('o').textContent='Ready: '+$('n').value+' invisible character(s) ['+txt().length+' length]'}
  $('n').oninput=upd;$('ty').onchange=upd;upd();
  $('cp').onclick=function(){copyText(txt(),this)};
},
how:['Choose a type of blank space. Start with Hangul Filler.','Choose how many characters you need (usually 1).','Press <b>Copy</b> and paste it into your name, bio or caption.'],
faq:[['Why does it look empty after pasting?','That is the point. The characters are real but invisible, so the name or bio looks blank.'],['One type does not work. What now?','Different apps accept different characters. Try the Braille Blank or Em Space option.'],['Is it safe to use?','Yes, but some apps do not allow an empty name. If it fails, add a normal letter or emoji.']]});
})(AIO);
