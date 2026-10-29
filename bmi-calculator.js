(function(A){var $=A.$,copyText=A.copy,rnd=A.rnd,lib=A.lib,add=A.add,esc=A.esc,num=A.num,kb=A.kb,loadImg=A.loadImg,showImg=A.showImg;
add('bmi-calculator',{cat:'calc',ic:'⚖️',t:'BMI Calculator',d:'Check your Body Mass Index (BMI) from your weight and height.',
h:`<div class="row"><div><label>Weight (kg)</label><input type="number" id="w" placeholder="65" step="any"></div>
<div><label>Height (cm)</label><input type="number" id="h" placeholder="170" step="any"></div></div>
<button id="go" type="button">Calculate BMI</button>
<div class="res" id="o" style="display:none"></div>
<p class="note">BMI is only a general guide. For health advice, please talk to a doctor.</p>`,
f:function(){
  $('go').onclick=function(){
    var w=parseFloat($('w').value),hc=parseFloat($('h').value),o=$('o');
    o.style.display='block';
    if(!(w>=2&&w<=500)||!(hc>=50&&hc<=250)){o.innerHTML='<span class="bad">Please enter a realistic weight (in kg) and height (in cm). Example: 65 kg and 170 cm.</span>';return}
    var h=hc/100,b=w/(h*h),c=b<18.5?'Underweight':(b<25?'Normal weight':(b<30?'Overweight':'Obese'));
    o.innerHTML='Your BMI<div class="big">'+b.toFixed(1)+'</div>Category: <b>'+c+'</b><br>Healthy weight range for your height: <b>'+(18.5*h*h).toFixed(1)+' - '+(24.9*h*h).toFixed(1)+' kg</b>';
  };
},
how:['Enter your weight in kilograms.','Enter your height in centimetres (for example 170).','Press <b>Calculate BMI</b>.'],
faq:[['What is a normal BMI?','For most adults, a BMI from 18.5 to 24.9 is considered a normal weight.'],['Is BMI always accurate?','No. It does not separate muscle from fat, so athletes and older people should ask a doctor.']]});
})(AIO);
