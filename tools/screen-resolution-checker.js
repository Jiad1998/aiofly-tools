(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add("screen-resolution-checker",{cat:"web",ic:"🖥️",t:"Screen Resolution Checker",d:"See your screen size, window size and pixel ratio.",
h:`<div class="res" id="o"></div>`,
f:function(){
function run(){var d=window.devicePixelRatio||1;$('o').innerHTML='Screen size: <b>'+screen.width+' x '+screen.height+'</b><br>Browser window: <b>'+innerWidth+' x '+innerHeight+'</b><br>Pixel ratio: <b>'+d+'</b><br>Real pixels: <b>'+Math.round(screen.width*d)+' x '+Math.round(screen.height*d)+'</b><br>Color depth: <b>'+screen.colorDepth+' bit</b><br>Orientation: <b>'+(innerWidth>innerHeight?'Landscape':'Portrait')+'</b>'}
window.addEventListener('resize',run);run();
},
how:["Open this page on your device.","Read the screen and window size.","Rotate your phone to see it change."],
faq:[["What is pixel ratio?","Sharp screens use more than one real pixel for each CSS pixel. A ratio of 2 or 3 is common on phones."],["Is anything sent anywhere?","No. The values are read in your own browser."]]});
})(AIO);
