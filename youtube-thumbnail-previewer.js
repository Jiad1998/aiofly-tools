(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('youtube-thumbnail-previewer',{cat:'social',ic:'🖼️',t:'YouTube Thumbnail Previewer',d:'Paste a YouTube link to see the video thumbnail in all sizes and preview it like a real video card.',
h:`<label>YouTube video link</label><input type="text" id="u" placeholder="https://www.youtube.com/watch?v=...">
<label>Preview title (optional)</label><input type="text" id="tt" placeholder="Your video title">
<button id="go" type="button">Show thumbnail</button>
<div id="o"></div>`,
f:function(){
  function vid(s){s=s.trim();var m=s.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/|\/live\/)([A-Za-z0-9_-]{11})/);if(m)return m[1];if(/^[A-Za-z0-9_-]{11}$/.test(s))return s;return ''}
  function draw(){
    var id=vid($('u').value),o=$('o');
    if(!id){o.innerHTML='<p class="note">Please paste a valid YouTube video link.</p>';return}
    var base='https://img.youtube.com/vi/'+id+'/',title=esc($('tt').value||'Your video title will look like this');
    var sizes=[['maxresdefault','HD 1280x720'],['sddefault','SD 640x480'],['hqdefault','High 480x360'],['mqdefault','Medium 320x180']];
    var h='<div class="box"><b>Preview as a video card</b><div style="max-width:340px;margin-top:8px"><div style="position:relative"><img id="mainimg" alt="Thumbnail" src="'+base+'maxresdefault.jpg" style="width:100%;border-radius:12px;display:block"><span style="position:absolute;right:6px;bottom:6px;background:#000c;color:#fff;font-size:12px;padding:1px 5px;border-radius:4px">10:24</span></div><div style="font-weight:700;margin-top:6px">'+title+'</div><small>Your channel · 1K views</small></div></div>';
    h+='<div class="box"><b>All thumbnail sizes</b>';
    sizes.forEach(function(s){h+='<p><a class="btn" target="_blank" rel="noopener" href="'+base+s[0]+'.jpg">Open '+s[1]+'</a></p>'});
    h+='<p class="note">Tip: on the opened image, press and hold (phone) or right-click (computer) and choose Save image.</p></div>';
    o.innerHTML=h;
    var im=$('mainimg');im.onerror=function(){im.onerror=null;im.src=base+'hqdefault.jpg'};
    im.onload=function(){if(im.naturalWidth===120&&im.src.indexOf('maxres')>-1){im.src=base+'hqdefault.jpg'}};
  }
  $('go').onclick=draw;$('tt').oninput=function(){if($('o').innerHTML)draw()};
},
how:['Copy the link of a YouTube video and paste it in the box.','Optionally type a title to see how it looks on a video card.','Press <b>Show thumbnail</b> and open the size you need.'],
faq:[['Which links work?','Normal watch links, youtu.be short links, Shorts and embed links all work.'],['Can I use any thumbnail?','Thumbnails belong to their creators. Use them only for preview, inspiration or with permission.'],['Why is HD missing for some videos?','Some videos do not have an HD thumbnail. The tool then shows the next best size.']]});
})(AIO);
