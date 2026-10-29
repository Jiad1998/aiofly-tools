(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('yes-no-wheel-spinner',{cat:'gen',ic:'🎡',t:'Yes / No Wheel Spinner',d:'Spin the wheel to make a quick decision. Fun for reels and live videos.',
h:`<div class="center"><canvas id="w" width="300" height="320" style="max-width:100%"></canvas></div>
<label class="ck"><input type="checkbox" id="m">Add "Maybe"</label><br>
<button id="go" type="button">🎡 Spin the wheel</button>
<div class="res big center" id="o">Spin to decide!</div>`,
f:function(){
  var cv=$('w'),cx=cv.getContext('2d'),theta=0,spinning=false,cols=['#16a34a','#dc2626','#f59e0b'];
  function opts(){return $('m').checked?['Yes','No','Maybe']:['Yes','No']}
  function draw(){
    var o=opts(),n=o.length,seg=2*Math.PI/n,R=140,X=150,Y=170;
    cx.clearRect(0,0,300,320);
    for(var i=0;i<n;i++){
      cx.beginPath();cx.moveTo(X,Y);cx.arc(X,Y,R,theta+i*seg,theta+(i+1)*seg);cx.closePath();cx.fillStyle=cols[i];cx.fill();
      cx.save();cx.translate(X,Y);cx.rotate(theta+(i+.5)*seg);cx.fillStyle='#fff';cx.font='bold 24px Arial';cx.textAlign='right';cx.fillText(o[i],R-16,8);cx.restore();
    }
    cx.beginPath();cx.arc(X,Y,16,0,7);cx.fillStyle='#fff';cx.fill();
    cx.beginPath();cx.moveTo(X-14,6);cx.lineTo(X+14,6);cx.lineTo(X,36);cx.closePath();cx.fillStyle='#111827';cx.fill();
  }
  $('m').onchange=function(){if(!spinning){draw();$('o').textContent='Spin to decide!'}};
  $('go').onclick=function(){
    if(spinning)return;spinning=true;
    var o=opts(),n=o.length,seg=2*Math.PI/n,i=rnd(n);
    var base=-Math.PI/2-(i+.5)*seg,start=theta,end=base+2*Math.PI*(5+rnd(3));
    while(end<start+2*Math.PI*4)end+=2*Math.PI;
    var t0=performance.now(),dur=3200;
    $('o').textContent='Spinning...';
    function step(now){
      var p=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-p,3);
      theta=start+(end-start)*e;draw();
      if(p<1){requestAnimationFrame(step)}else{spinning=false;$('o').textContent=o[i]+'!'}
    }
    requestAnimationFrame(step);
  };
  draw();
},
how:['Tap <b>Spin the wheel</b>.','Wait for the wheel to stop. The answer shows below.','Tick Maybe if you want a third answer.'],
faq:[['Is the result fair?','Yes. The answer is chosen with your browser\'s secure random generator before the wheel spins.'],['Can I use it in a live video?','Yes. Open this page on screen and spin it for your viewers.']]});
})(AIO);
