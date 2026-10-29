(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('hashtag-generator',{cat:'social',ic:'#️⃣',t:'Hashtag Generator',d:'Create related hashtags for Instagram, TikTok, Facebook and YouTube from your keywords.',
h:`<label>Your topic or keywords (separate with commas)</label><input type="text" id="k" placeholder="travel, food, photography">
<div class="row"><div><label>Platform</label><select id="p"><option value="instagram">Instagram</option><option value="tiktok">TikTok</option><option value="facebook">Facebook</option><option value="youtube">YouTube</option></select></div>
<div><label>How many</label><select id="c"><option>10</option><option selected>20</option><option>30</option></select></div></div>
<button id="go" type="button">Generate hashtags</button><button id="cp" type="button">Copy all</button>
<textarea id="o" style="min-height:130px"></textarea>
<p class="note">These are suggested hashtags based on your words. They are not live trending data, so also check the trending page of your app.</p>`,
f:function(){
  var G={instagram:['instagood','reels','instadaily','explorepage','photooftheday','viral'],tiktok:['fyp','foryou','foryoupage','viral','trending','tiktokbangladesh'],facebook:['facebookreels','fbreels','viral','trending','followers','explore'],youtube:['shorts','youtube','youtuber','subscribe','viralvideo','trending']};
  var S=['','tips','ideas','lovers','community','daily','goals','life','vibes','official','world','facts'];
  function slug(w){return w.toLowerCase().replace(/[^a-z0-9ঀ-৿]/g,'')}
  $('go').onclick=function(){
    var ks=$('k').value.split(',').map(slug).filter(function(x){return x}),max=parseInt($('c').value),out=[],seen={};
    if(!ks.length){$('o').value='Please type at least one keyword.';return}
    var gen=G[$('p').value],gn=Math.min(gen.length,Math.max(2,Math.floor(max/4))),lim=max-gn;
    function push(t,cap){if(t.length>1&&!seen[t]&&out.length<cap){seen[t]=1;out.push('#'+t)}}
    for(var j=0;j<S.length;j++){for(var i=0;i<ks.length;i++){push(ks[i]+S[j],lim)}}
    gen.forEach(function(g){push(g,max)});
    $('o').value=out.join(' ');
  };
  $('cp').onclick=function(){copyText($('o').value,this)};
},
how:['Type one or more keywords, separated by commas.','Choose your platform and how many hashtags you want.','Press <b>Generate</b>, then <b>Copy all</b> and paste under your post.'],
faq:[['How many hashtags should I use?','About 5 to 15 relevant hashtags work well on Instagram and TikTok. Too many can look like spam.'],['Are these trending hashtags?','No. They are related suggestions built from your keywords. Always check which hashtags are popular in your own app.']]});
})(AIO);
