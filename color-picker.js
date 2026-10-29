(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('color-picker',{cat:'dev',ic:'🎨',t:'Color Picker',d:'Pick a color and get its HEX, RGB and HSL codes.',
h:`<input type="color" id="c" value="#4f46e5">
<label>HEX code</label><input type="text" id="hx" value="#4f46e5">
<div class="box"><div>HEX: <b id="o1"></b> <button id="b1" type="button">Copy</button></div>
<div>RGB: <b id="o2"></b> <button id="b2" type="button">Copy</button></div>
<div>HSL: <b id="o3"></b> <button id="b3" type="button">Copy</button></div></div>`,
f:function(){
  function show(h){
    var r=parseInt(h.substr(1,2),16),g=parseInt(h.substr(3,2),16),b=parseInt(h.substr(5,2),16);
    var rr=r/255,gg=g/255,bb=b/255,mx=Math.max(rr,gg,bb),mn=Math.min(rr,gg,bb),l=(mx+mn)/2,s=0,hh=0,d=mx-mn;
    if(d!==0){
      s=l>0.5?d/(2-mx-mn):d/(mx+mn);
      if(mx===rr){hh=((gg-bb)/d)+(gg<bb?6:0)}else if(mx===gg){hh=(bb-rr)/d+2}else{hh=(rr-gg)/d+4}
      hh*=60;
    }
    $('o1').textContent=h.toUpperCase();
    $('o2').textContent='rgb('+r+', '+g+', '+b+')';
    $('o3').textContent='hsl('+Math.round(hh)+', '+Math.round(s*100)+'%, '+Math.round(l*100)+'%)';
  }
  $('c').oninput=function(){$('hx').value=this.value;show(this.value)};
  $('hx').oninput=function(){var v=this.value.trim();if(v.charAt(0)!=='#'){v='#'+v}if(/^#[0-9a-fA-F]{6}$/.test(v)){$('c').value=v.toLowerCase();show(v)}};
  ['1','2','3'].forEach(function(i){$('b'+i).onclick=function(){copyText($('o'+i).textContent,this)}});
  show('#4f46e5');
},
how:['Tap the big color box and choose a color.','Or type a HEX code like #ff5733.','Press <b>Copy</b> next to the format you need.'],
faq:[['What is a HEX color code?','It is a 6-character code that starts with # and describes a color for websites, for example #ffffff is white.'],['What is the difference between HEX, RGB and HSL?','They are three ways to write the same color. HEX and RGB mix red, green and blue. HSL uses hue, saturation and lightness.']]});
})(AIO);
