(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('passport-photo-maker',{cat:'image',ic:'🪪',t:'Passport Photo Maker',d:'Make passport size photos and a print-ready 4x6 inch sheet.',
h:`<label>Choose your photo</label><input type="file" id="f" accept="image/*">
<label>Photo size</label>
<select id="s">
<option value="35,45">35 x 45 mm (Passport - most countries)</option>
<option value="50.8,50.8">2 x 2 inch (USA / India)</option>
<option value="40,50">40 x 50 mm</option>
<option value="30,40">30 x 40 mm</option>
<option value="25,35">25 x 35 mm</option>
</select>
<label>Zoom</label><input type="range" id="z" min="100" max="300" value="100">
<label>Move left / right</label><input type="range" id="zx" min="0" max="100" value="50">
<label>Move up / down</label><input type="range" id="zy" min="0" max="100" value="50">
<div id="pv" class="box"><span class="note">Your preview will appear here.</span></div>
<button id="b1" type="button">Download single photo</button>
<button id="b2" type="button">Download 4x6 sheet</button>`,
f:function(){
  var im0=null;
  function render(){
    if(!im0)return null;
    var s=$('s').value.split(','),W=Math.round(s[0]/25.4*300),H=Math.round(s[1]/25.4*300);
    var c=document.createElement('canvas');c.width=W;c.height=H;var x=c.getContext('2d');
    x.fillStyle='#fff';x.fillRect(0,0,W,H);
    var sc=Math.max(W/im0.naturalWidth,H/im0.naturalHeight)*($('z').value/100);
    var dw=im0.naturalWidth*sc,dh=im0.naturalHeight*sc;
    x.drawImage(im0,(W-dw)*($('zx').value/100),(H-dh)*($('zy').value/100),dw,dh);
    return c;
  }
  function prev(){var c=render();if(!c)return;var p=$('pv');p.innerHTML='';c.style.maxWidth='260px';c.style.border='1px solid #d1d5db';p.appendChild(c)}
  ['s','z','zx','zy'].forEach(function(i){$(i).oninput=prev;$(i).onchange=prev});
  $('f').onchange=function(){var f=this.files[0];if(f){loadImg(f,function(im){im0=im;prev()})}};
  function save(c,name){c.toBlob(function(b){var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();a.remove()},'image/jpeg',0.95)}
  $('b1').onclick=function(){var c=render();if(!c){alert('Choose a photo first.');return}save(c,'passport-photo.jpg')};
  $('b2').onclick=function(){
    var c=render();if(!c){alert('Choose a photo first.');return}
    var g=20,SW=1200,SH=1800,sh=document.createElement('canvas');sh.width=SW;sh.height=SH;
    var x=sh.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,SW,SH);
    var cols=Math.max(1,Math.floor((SW-g)/(c.width+g))),rows=Math.max(1,Math.floor((SH-g)/(c.height+g)));
    var ox=Math.round((SW-(cols*c.width+(cols-1)*g))/2),oy=Math.round((SH-(rows*c.height+(rows-1)*g))/2);
    for(var r=0;r<rows;r++){for(var k=0;k<cols;k++){
      var qx=ox+k*(c.width+g),qy=oy+r*(c.height+g);
      x.drawImage(c,qx,qy);x.strokeStyle='#bbbbbb';x.strokeRect(qx,qy,c.width,c.height);
    }}
    save(sh,'passport-sheet-4x6.jpg');
  };
},
how:['Choose a clear front-facing photo with a plain background.','Select the size, then use Zoom and Move sliders to place the face in the middle.','Download one photo, or the 4x6 sheet to print many copies at a photo shop.'],
faq:[['What size is a passport photo?','Most countries use 35 x 45 mm. The USA and India use 2 x 2 inch (51 x 51 mm). Always check the rules of your country.'],['How do I print the sheet?','Download the 4x6 sheet and print it on 4x6 inch photo paper at any photo shop or at home.']]});
})(AIO);
